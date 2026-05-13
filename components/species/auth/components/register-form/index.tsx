"use client";

import { Alert } from "../alert";
import { Email, Password } from "../input-builder";
import { SubmitButton } from "../submit-button";
//
import { useRegisterForm } from "./hook";

export const RegisterForm = ({ demo }: { demo?: string }) => {
  const { form, error, success, submitting, handleChange, handleSubmit } =
    useRegisterForm();
  //
  return (
    <div>
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
      <SubmitButton
        success={success}
        loading={submitting}
        onClick={handleSubmit}
      >
        {success
          ? "Account Created"
          : demo
            ? "Create Demo Account"
            : "Create Account"}
      </SubmitButton>
    </div>
  );
};
