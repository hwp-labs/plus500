import { type NextRequest } from "next/server";
import { sql } from "@/lib/neon/config";
import { UpdateUserDto } from "./types";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

interface IdentityDto {
  _identity: string;
}

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q");

  try {
    if (q) {
      const data = await sql`SELECT * FROM users 
        WHERE email = ${q} 
        AND deleted_at IS NULL 
        LIMIT 1`;
      return Response.json({ data: data[0] });
    }

    const data = await sql`SELECT * FROM users 
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

// POST /api/register

export async function PATCH(req: NextRequest) {
  const { _identity, ...body }: UpdateUserDto & IdentityDto = await req.json();

  if (!_identity) {
    return Response.json(
      { error: "Missing field value `_identity`" },
      { status: HTTP_STATUS_CODE.UNPROCESSABLE },
    );
  }

  try {
    const data = await sql`UPDATE users 
      SET updated_at = now(),
        available = ${body.available},
        equity = ${body.equity},
        i_margin = ${body.i_margin},
        m_margin = ${body.m_margin},
        profit_loss = ${body.profit_loss} 
      WHERE email = ${_identity}
      RETURNING *`;
    return Response.json({ data: data[0] });
  } catch (error) {
    return Response.json(
      { error: (error as Error).message },
      { status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR },
    );
  }
}

export async function DELETE(req: NextRequest) {
  const { _identity }: IdentityDto = await req.json();

  if (!_identity) {
    return Response.json(
      { error: "Missing field value `_identity`" },
      { status: HTTP_STATUS_CODE.UNPROCESSABLE },
    );
  }

  try {
    const data = await sql`UPDATE users 
      SET deleted_at = now() 
      WHERE email = ${_identity} 
      RETURNING *`;
    return Response.json({ data: data[0] });
  } catch (error) {
    return Response.json(
      { error: (error as Error).message },
      { status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR },
    );
  }
}
