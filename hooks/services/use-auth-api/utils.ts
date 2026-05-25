import {
  AuthRequestDto,
  AuthResponseDto,
  UpdatePasswordDto,
} from "@/app/api/auth/types";
import { MOCK } from "@/constants/MOCK";

export const mockRouter = MOCK.authAdmin.router || MOCK.auth.router;

export const defaultForm: AuthRequestDto = MOCK.authAdmin.formData
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

export const registerApi = async (form: AuthRequestDto) =>
  await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

export const loginApi = async (form: AuthRequestDto) =>
  await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

export const updatePasswordApi = async (
  form: UpdatePasswordDto,
  _session: AuthResponseDto,
) => {
  const raw = await fetch(`/api/auth/update-password`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...form, _session }),
  });

  const res = await raw.json();

  return res
};
