import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
//
import { useAuthStore } from "@/store/auth-store";
import { PATH_PROTECTED } from "@/constants/PATH";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";
//
import {
  M,
  AuthRequestDto,
  AuthResponseDto,
  defaultAuthForm,
} from "../../utils";

export function useLoginForm(logoutQueryParams?: string) {
  const router = useRouter();
  const reset = useAuthStore((s) => s.reset);
  const setSession = useAuthStore((s) => s.setSession);

  const [form, setForm] = useState<AuthRequestDto>(defaultAuthForm);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (logoutQueryParams) {
      // console.log("🚀 ~ useEffect ~ logoutQueryParams:", logoutQueryParams);
      reset();
    }
  }, []);

  const handleChange = (payload: Partial<AuthRequestDto>) => {
    setForm((s) => ({ ...s, ...payload }));
  };

  const handleSubmit = async () => {
    setSuccess(false);
    setError(null);
    setSubmitting(true);

    const raw = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (raw.status === HTTP_STATUS_CODE.OK) {
      const res: AuthResponseDto = await raw.json();
      // console.log("🚀 ~ handleSubmit ~ res:", res)

      setSuccess(true);
      setForm({ email: "", password: "" });
      setSession(res.data);

      M.router
        ? null
        : router.replace(
            res.data.role === "admin"
              ? PATH_PROTECTED.transactions
              : PATH_PROTECTED.dashboard,
          );

      return;
    }

    setSubmitting(false);
    if (raw.status === HTTP_STATUS_CODE.NOT_FOUND) {
      setError(`Incorrect credentials. Retry or create an account.`);
      return;
    }

    setError(`Something went wrong, please try again.`);
  };

  return { form, error, success, submitting, handleChange, handleSubmit };
}
