"use client";

import { Alert } from "../alert";
import { Email, Password } from "../input-builder";
import { SubmitButton } from "../submit-button";
import { useAuthApi } from "@/hooks/services/use-auth-api";

export const RegisterForm = ({
  demoQueryParam,
}: {
  demoQueryParam?: string;
}) => {
  const { loading, success, error, form, handleChange, handleSignUp } =
    useAuthApi();
  //
  return (
    <>
      {/* Registration failed. We're sorry but we currently cannot accept traders
        from your country. */}
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
      <SubmitButton success={success} loading={loading} onClick={handleSignUp}>
        {success
          ? "Account Created"
          : demoQueryParam
            ? "Create Demo Account"
            : "Create Account"}
      </SubmitButton>
    </>
  );
};
