import { useState } from "react";
import { useRouter } from "next/navigation";
//
import { useAuthStore } from "@/store/auth-store";
import { PATH_PROTECTED } from "@/constants/PATH";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";
import { MOCK } from "@/constants/MOCK";

type FormDto = { email: string; password: string };

const defaultForm = MOCK.auth.formData
  ? {
      email: "jack@plus500.com",
      password: "@testUser",
    }
  : {
      email: "",
      password: "",
    };

export function useRegisterForm() {
  const router = useRouter();
  const setSession = useAuthStore((s) => s.setSession);

  const [form, setForm] = useState<FormDto>(defaultForm);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (payload: Partial<FormDto>) => {
    setForm((s) => ({ ...s, ...payload }));
  };

  const handleSubmit = async () => {
    setSuccess(false);
    setError(null);
    setSubmitting(true);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.status === HTTP_STATUS_CODE.CREATED) {
      setSuccess(true);
      setForm({ email: "", password: "" });
      setSession({ email: form.email, role: "user" });

      router.replace(PATH_PROTECTED.dashboard);
      return;
    }

    setSubmitting(false);
    if (res.status === HTTP_STATUS_CODE.CONFLICT) {
      setError(`Registration failed. This email has already been registered.`);
      return;
    }

    setError(`Registration failed. Something went wrong, please try again.`);
  };

  return { form, error, success, submitting, handleChange, handleSubmit };
}
