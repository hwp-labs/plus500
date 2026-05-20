import { sql } from "@/lib/neon/config";
import { UpdateAdminDto } from "./types";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

export async function GET() {
  try {
    const data = await sql`SELECT * FROM admins WHERE id = ${1} LIMIT 1`;
    return Response.json({ data: data[0] });
  } catch (error) {
    return Response.json(
      { error: (error as Error).message },
      { status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR },
    );
  }
}

export async function PATCH(req: Request) {
  const body: UpdateAdminDto = await req.json();

  try {
    const data = await sql`
      UPDATE admins SET
        btc = COALESCE(${body.btc ?? null}, btc),
        eth = COALESCE(${body.eth ?? null}, eth),
        usdt = COALESCE(${body.usdt ?? null}, usdt),
        usdc = COALESCE(${body.usdc ?? null}, usdc)
      WHERE id = ${1}
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
