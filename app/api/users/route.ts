import { type NextRequest } from "next/server";
import { sql } from "@/lib/neon/config";
import { UpdateUserDto } from "./types";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q");

  try {
    if (q) {
      const data =
        await sql`SELECT * FROM users WHERE email = ${q} AND deleted_at IS NULL LIMIT 1`;
      return Response.json({ data: data[0] });
    }

    const data =
      await sql`SELECT * FROM users WHERE deleted_at IS NULL ORDER BY updated_at DESC`;
    return Response.json({ data });
  } catch (error) {
    return Response.json(
      { error: (error as Error).message },
      { status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR },
    );
  }
}

// POST /api/register

export async function PATCH(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q");
  const body: UpdateUserDto = await req.json();

  if (!q) {
    return Response.json(
      { error: "Missing query parameter `q`" },
      { status: HTTP_STATUS_CODE.UNPROCESSABLE },
    );
  }

  try {
    const data = await sql`
      UPDATE users SET
        available = COALESCE(${body.available ?? null}, available),
        equity = COALESCE(${body.equity ?? null}, equity),
        i_margin = COALESCE(${body.i_margin ?? null}, i_margin),
        m_margin = COALESCE(${body.m_margin ?? null}, m_margin),
        profit_loss = COALESCE(${body.profit_loss ?? null}, profit_loss)  
      WHERE email = ${q}
      RETURNING *
    `;
    return Response.json({ data: data[0] });
  } catch (error) {
    return Response.json(
      { error: (error as Error).message },
      { status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR },
    );
  }
}

export async function DELETE(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q");

  if (!q) {
    return Response.json(
      { error: "Missing query parameter `q`" },
      { status: HTTP_STATUS_CODE.UNPROCESSABLE },
    );
  }

  try {
    const data =
      await sql`UPDATE users SET deleted_at = now() WHERE email = ${q} RETURNING *`;
    return Response.json({ data: data[0] });
  } catch (error) {
    return Response.json(
      { error: (error as Error).message },
      { status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR },
    );
  }
}
