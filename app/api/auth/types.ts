import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

export interface AuthRequestDto {
  email: string;
  password: string;
}

export interface AuthResponseDto {
  email: string;
  role: "admin" | "user";
}

export interface UpdatePasswordDto {
  password: string;
  newPassword: string;
}

export const AuthResponse = {
  ok: (email: string, isAdmin = false) =>
    Response.json({
      data: {
        email,
        role: isAdmin ? "admin" : "user",
      } satisfies AuthResponseDto,
    }),
  created: (email: string, isAdmin = false) =>
    Response.json(
      {
        data: {
          email,
          role: isAdmin ? "admin" : "user",
        } satisfies AuthResponseDto,
      },
      { status: HTTP_STATUS_CODE.CREATED },
    ),
};
