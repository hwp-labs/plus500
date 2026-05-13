"use client";

import { useState } from "react";
import { Alert } from "./alert";
import { Email, Password } from "./input-builder";
import { SubmitButton } from "./submit-button";

type FormDto = { email: string; password: string };

const defaultForm = { email: "", password: "" };

export const LoginForm = ({ demo }: { demo?: string }) => {
  const [error, setError] = useState<string>();
  const [form, setForm] = useState<FormDto>(defaultForm);
  //
  return (
    <div>
      <Alert defaultShow>
        Registration failed. We're sorry but we currently cannot accept traders
        from your country.
      </Alert>
      <div className="space-y-2">
        <Email />
        <Password />
      </div>
      <SubmitButton>
        {demo ? "Create Demo Account" : "Create Account"}
      </SubmitButton>
    </div>
  );
};
