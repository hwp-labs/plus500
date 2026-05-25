"use client";

import { useEffect, useState } from "react";
import {
  PasswordInput,
  PairedSubmitBtn,
} from "@/components/species/dashboard/components/form-builder";
import { useAuthApi } from "@/hooks/services/use-auth-api";
import { UpdatePasswordDto } from "@/app/api/auth/types";

type FormDto = Partial<UpdatePasswordDto> & {
  newPassword2?: string;
};

export const PasswordForm = () => {
  const { loading, success, error, handleUpdatePassword } = useAuthApi();

  const [form, setForm] = useState<FormDto>({});

  const handleChange = (payload: FormDto) => {
    setForm((s) => ({ ...s, ...payload }));
  };

  const handleSubmit = () => {
    if (Object.values(form).every((value) => value.trim().length >= 8)) {
      handleUpdatePassword(form as UpdatePasswordDto);
    } else {
      alert("Fields must be at least 8 characters!");
    }
  };

  useEffect(() => {
    if (success) setForm({});
  }, [success]);

  //
  return (
    <>
      <ul className="mt-4 space-y-4 [&>li]:space-y-1 [&>li>h2]:text-lg">
        <li>
          <h2>Current Password</h2>
          <PasswordInput
            value={form.password}
            onChange={(password) => handleChange({ password })}
          />
        </li>
        <li>
          <h2>New Password</h2>
          <PasswordInput
            value={form.newPassword}
            onChange={(newPassword) => handleChange({ newPassword })}
          />
        </li>
        <li>
          <h2>Confirm New Password</h2>
          <PasswordInput
            value={form.newPassword2}
            onChange={(newPassword2) => handleChange({ newPassword2 })}
          />
          {form.newPassword2 && form.newPassword !== form.newPassword2 ? (
            <p className="text-danger mt-1 text-sm">
              Field does not match New Password
            </p>
          ) : null}
        </li>
      </ul>
      <div className="mt-6"></div>
      <PairedSubmitBtn
        loading={loading}
        success={success}
        error={error}
        onSubmit={handleSubmit}
      >
        Save
      </PairedSubmitBtn>
    </>
  );
};
