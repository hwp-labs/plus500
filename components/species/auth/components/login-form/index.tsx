"use client";

import { Alert } from "../alert";
import { Email, Password } from "../input-builder";
import { SubmitButton } from "../submit-button";
import { useAuthApi } from "@/hooks/services/use-auth-api";

export const LoginForm = ({
  logoutQueryParam,
}: {
  logoutQueryParam?: string;
}) => {
  const { loading, success, error, form, handleChange, handleSignIn } =
    useAuthApi(logoutQueryParam);
  //
  return (
    <>
      {/* Incorrect credentials. Retry or create an account. */}
      {error ? <Alert>{error}</Alert> : null}
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
      <SubmitButton success={success} loading={loading} onClick={handleSignIn}>
        {success ? "Login Successful" : "Log in"}
      </SubmitButton>
    </>
  );
};
