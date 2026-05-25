import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import {
  AuthRequestDto,
  AuthResponseDto,
  UpdatePasswordDto,
} from "@/app/api/auth/types";
import { PATH, PATH_PROTECTED } from "@/constants/PATH";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";
//
import {
  mockRouter,
  defaultForm,
  loginApi,
  registerApi,
  updatePasswordApi,
} from "./utils";

export function useAuthApi(logoutQueryParams?: string) {
  const router = useRouter();
  const reset = useAuthStore((s) => s.reset);
  const session = useAuthStore((s) => s.session);
  const setSession = useAuthStore((s) => s.setSession);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<AuthRequestDto>(defaultForm);

  useEffect(() => {
    if (logoutQueryParams) {
      // console.log("🚀 ~ useEffect ~ logoutQueryParams:", logoutQueryParams);
      reset();
    }
  }, []);

  const handleChange = (payload: Partial<AuthRequestDto>) => {
    setForm((s) => ({ ...s, ...payload }));
  };

  const handleSignUp = async () => {
    setSuccess(false);
    setError(null);
    setLoading(true);

    const raw = await registerApi(form);

    if (raw.status === HTTP_STATUS_CODE.CREATED) {
      const res: { data: AuthResponseDto } = await raw.json();
      // console.log("🚀 ~ handleSubmit ~ res:", res);

      setSuccess(true);
      setForm({ email: "", password: "" });
      setSession(res.data);

      mockRouter ? null : router.replace(PATH_PROTECTED.dashboard);
      return;
    }

    setLoading(false);
    if (raw.status === HTTP_STATUS_CODE.CONFLICT) {
      setError(`This email has already been registered.`);
      return;
    }

    setError(`Something went wrong, please try again.`);
  };

  const handleSignIn = async () => {
    setSuccess(false);
    setError(null);
    setLoading(true);

    const raw = await loginApi(form);

    if (raw.status === HTTP_STATUS_CODE.OK) {
      const res: { data: AuthResponseDto } = await raw.json();
      // console.log("🚀 ~ handleSubmit ~ res:", res)

      setSuccess(true);
      setForm({ email: "", password: "" });
      setSession(res.data);

      mockRouter
        ? null
        : router.replace(
            res.data.role === "admin"
              ? PATH_PROTECTED.settings
              : PATH_PROTECTED.dashboard,
          );

      return;
    }

    setLoading(false);
    if (raw.status === HTTP_STATUS_CODE.NOT_FOUND) {
      setError(`Incorrect credentials. Retry or create an account.`);
      return;
    }

    setError(`Something went wrong, please try again.`);
  };

  const handleSignOut = () => {
    if (confirm("Sign Out?")) {
      router.replace(PATH.login + "?logout=true");
    }
  };

  const handleUpdatePassword = async (form: UpdatePasswordDto) => {
    setSuccess(false);
    setError(null);
    setLoading(true);

    const { data, error } = await updatePasswordApi(form, session!);
    setLoading(false);

    if (data) {
      setSuccess(true);
      router.replace(PATH.login + "?logout=true");
      return;
    }

    setError(error);
  };

  return {
    session,
    loading,
    success,
    error,
    form,
    handleChange,
    handleSignUp,
    handleSignIn,
    handleSignOut,
    handleUpdatePassword,
  };
}
