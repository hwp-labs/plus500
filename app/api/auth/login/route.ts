import { sql } from "@/lib/neon/config";
import { cryptoUtil } from "@/utils/crypto-util";
import { AuthRequestDto, AuthResponse } from "../types";
import {
  HTTP_STATUS_CODE,
  HTTP_STATUS_TEXT,
} from "@/constants/HTTP_STATUS_CODE";

export async function POST(req: Request) {
  const body: AuthRequestDto = await req.json();
  const hashedPassword = cryptoUtil.create(body.password);

  try {
    {
      const data = await sql`SELECT id FROM admins 
      WHERE email = ${body.email} 
      AND password = ${hashedPassword} 
      LIMIT 1`;

      if (data[0]) {
        return AuthResponse.ok(body.email, true);
      }
    }
    
    const data = await sql`SELECT id FROM users 
      WHERE email = ${body.email} 
      AND password = ${hashedPassword} 
      AND deleted_at IS NULL 
      LIMIT 1`;

    if (data[0]) {
      return AuthResponse.ok(body.email);
    }

    return Response.json(
      { error: HTTP_STATUS_TEXT.NOT_FOUND },
      { status: HTTP_STATUS_CODE.NOT_FOUND },
    );
  } catch (error) {
    return Response.json(
      { error: (error as Error).message },
      { status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR },
    );
  }
}
