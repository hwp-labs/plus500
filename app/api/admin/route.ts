import { sql } from "@/lib/neon/config";

export interface AdminEntity {
  id: number;
  email: string;
  password: string;
  btc?: string;
  eth?: string;
  usdt?: string;
  usdc?: string;
}

export type UpdateAdminDto = Pick<AdminEntity, "btc" | "eth" | "usdt" | "usdc">;

export async function GET() {
  try {
    const data = await sql`SELECT * FROM admin WHERE id = ${1} LIMIT 1`;
    return Response.json({ data: data[0] }, { status: 200 });
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  const body: UpdateAdminDto = await req.json();

  try {
    const data = await sql`
      UPDATE admin SET
        btc = COALESCE(${body.btc ?? null}, btc),
        eth = COALESCE(${body.eth ?? null}, eth),
        usdt = COALESCE(${body.usdt ?? null}, usdt),
        usdc = COALESCE(${body.usdc ?? null}, usdc)
      WHERE id = ${1}
      RETURNING *
    `;
    return Response.json({ data: data[0] }, { status: 200 });
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
