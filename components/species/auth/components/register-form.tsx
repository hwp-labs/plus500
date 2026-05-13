"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
//
import { Alert } from "./alert";
import { Email, Password } from "./input-builder";
import { SubmitButton } from "./submit-button";
import { useAuthStore } from "@/store/auth-store";
import { sleep } from "@/utils";
import { MOCK } from "@/constants/MOCK";
import { PATH_PROTECTED } from "@/constants/PATH";

type FormDto = { email: string; password: string };

const defaultForm = MOCK.auth.formData
  ? {
      email: process.env.NEXT_PUBLIC_AUTH_USER!,
      password: process.env.NEXT_PUBLIC_AUTH_PASS!,
    }
  : {
      email: "",
      password: "",
    };

export const RegisterForm = ({ demo }: { demo?: string }) => {
  const router = useRouter();
  const setSession = useAuthStore((s) => s.setSession);

  const [error, setError] = useState<string>();
  const [form, setForm] = useState<FormDto>(defaultForm);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (payload: Partial<FormDto>) => {
    setForm((s) => ({ ...s, ...payload }));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    await sleep();
    console.log("🚀 ~ handleSubmit ~ form:", form);
    // setSession({ email: form.email, role: "admin" });
    // router.replace(PATH_PROTECTED.dashboard);
    setSubmitting(false);
  };
  //
  return (
    <div>
      <Alert defaultShow>
        Registration failed. We're sorry but we currently cannot accept traders
        from your country.
      </Alert>
      <div className="space-y-2">
        <Email
          value={form.email}
          onChange={(email) => handleChange({ email })}
        />
        <Password
          value={form.password}
          onChange={(password) => handleChange({ password })}
        />
      </div>
      <SubmitButton loading={submitting} onClick={handleSubmit}>
        {demo ? "Create Demo Account" : "Create Account"}
      </SubmitButton>
    </div>
  );
};
