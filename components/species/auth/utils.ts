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

export const defaultAuthForm: AuthRequestDto = M.formData
  ? {
      email: "john@plus500.com",
      password: "@testUser",
    }
  : {
      email: "",
      password: "",
    };
