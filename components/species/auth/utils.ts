import { MOCK } from "@/constants/MOCK";
import { SessionDto } from "@/store/auth-store/utils";

export const M = MOCK.auth;

export interface AuthRequestDto {
  email: string;
  password: string;
}

export interface AuthResponseDto {
  data: SessionDto;
}

export const defaultAuthForm: AuthRequestDto = MOCK.authAdmin.formData
  ? {
      email: process.env.NEXT_PUBLIC_AUTH_ADMIN!,
      password: process.env.NEXT_PUBLIC_AUTH_ADMIN_PASS!,
    }
  : MOCK.auth.formData
    ? {
        email: process.env.NEXT_PUBLIC_AUTH_USER!,
        password: process.env.NEXT_PUBLIC_AUTH_USER_PASS!,
      }
    : {
        email: "",
        password: "",
      };
