import { type NextRequest } from "next/server";
import { sql } from "@/lib/neon/config";
import { CreateTransactionDto } from "./types";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q");

  try {
    if (q) {
      const data = await sql`SELECT * FROM transactions 
          WHERE email = ${q} 
          AND deleted_at IS NULL`;
      return Response.json({ data });
    }

    const data = await sql`SELECT * FROM transactions 
        WHERE deleted_at IS NULL 
        ORDER BY updated_at DESC`;
    return Response.json({ data });
  } catch (error) {
    return Response.json(
      { error: (error as Error).message },
      { status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR },
    );
  }
}

export async function POST(req: Request) {
  const body: CreateTransactionDto = await req.json();

  try {
    if (body.wallet) {
      await sql`UPDATE users 
      SET updated_at = now(),
        wallet = ${body.wallet}
      WHERE email = ${body.email}
      RETURNING *`;
    }

    const data = await sql`INSERT INTO transactions 
      (email, amount, wallet, receipt, type, status) VALUES 
      (${body.email}, ${body.amount}, ${body.wallet}, ${body.receipt}, ${body.type}, ${body.status}) 
      RETURNING *`;
    return Response.json(
      { data: data[0] },
      { status: HTTP_STATUS_CODE.CREATED },
    );
  } catch (error) {
    return Response.json(
      { error: (error as Error).message },
      { status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR },
    );
  }
}
