import { type NextRequest } from "next/server";
import { sql } from "@/lib/neon/config";
import { cryptoUtil } from "@/utils/crypto-util";
import { AuthResponseDto, UpdatePasswordDto } from "../types";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

export async function PATCH(req: NextRequest) {
  const {
    _session,
    ...body
  }: UpdatePasswordDto & { _session: AuthResponseDto } = await req.json();
  const hashedPassword = cryptoUtil.create(body.password);
  const hashedNewPassword = cryptoUtil.create(body.newPassword);

  try {
    if (_session.role==='admin') {
      const data = await sql`SELECT id FROM admins 
        WHERE email = ${_session.email} 
        AND password = ${hashedPassword} 
      LIMIT 1`;

      if (data[0]) {
        const data = await sql`UPDATE admins 
        SET updated_at = now(),
          password = ${hashedNewPassword}
        WHERE email = ${_session.email}
        RETURNING *`;

        return Response.json({ data: data[0] });
      } else {
        return Response.json(
          { error: "Current password is invalid" },
          { status: HTTP_STATUS_CODE.NOT_FOUND },
        );
      }
    }
 
    if (_session.role==='user') {
      const data = await sql`SELECT id FROM users
        WHERE email = ${_session.email} 
        AND password = ${hashedPassword} 
      LIMIT 1`;

      if (data[0]) {
        const data = await sql`UPDATE users
        SET updated_at = now(),
          password = ${hashedNewPassword}
        WHERE email = ${_session.email}
        RETURNING *`;

        return Response.json({ data: data[0] });
      } else {
        return Response.json(
          { error: "Current password is invalid" },
          { status: HTTP_STATUS_CODE.NOT_FOUND },
        );
      }
    }

    return Response.json(
      { error: "Session error, please login and try again!" },
      { status: HTTP_STATUS_CODE.UNAUTHORIZED },
    );
  } catch (error) {
    return Response.json(
      { error: (error as Error).message },
      { status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR },
    );
  }
}
