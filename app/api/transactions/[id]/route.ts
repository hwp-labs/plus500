import { type NextRequest } from "next/server";
import { sql } from "@/lib/neon/config";
import { RouteIdParams } from "@/types/next-type";
import { UpdateTransactionDto } from "../types";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

export async function PATCH(req: NextRequest, { params }: RouteIdParams) {
  const body: UpdateTransactionDto = await req.json();
  const { id } = await params;

  try {
    const data = await sql`UPDATE transactions 
      SET updated_at = now(),
        status = ${body.status}
      WHERE id = ${id}
      RETURNING *`;
    return Response.json({ data: data[0] });
  } catch (error) {
    return Response.json(
      { error: (error as Error).message },
      { status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR },
    );
  }
}

export async function DELETE(_: NextRequest, { params }: RouteIdParams) {
  const { id } = await params;

  try {
    const data =
      await sql`UPDATE transactions 
        SET deleted_at = now() 
        WHERE id = ${id} 
        RETURNING *`;
    return Response.json({ data: data[0] });
  } catch (error) {
    return Response.json(
      { error: (error as Error).message },
      { status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR },
    );
  }
}
