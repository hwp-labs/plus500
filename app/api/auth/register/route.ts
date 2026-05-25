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
      const data = await sql`SELECT id FROM users 
      WHERE email = ${body.email} 
      LIMIT 1`;

      if (data[0]) {
        return Response.json(
          { error: HTTP_STATUS_TEXT.CONFLICT },
          { status: HTTP_STATUS_CODE.CONFLICT },
        );
      }
    }

    await sql`INSERT INTO users 
      (email, password) VALUES 
      (${body.email}, ${hashedPassword})`;

    return AuthResponse.created(body.email);
  } catch (error) {
    return Response.json(
      { error: (error as Error).message },
      { status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR },
    );
  }
}
