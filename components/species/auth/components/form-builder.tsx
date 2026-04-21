"use client";

import { PropsWithChildren, useState } from "react";
import {
  IconMail,
  IconLockPassword,
  IconEye,
  IconEyeOff,
  IconCheck,
} from "@tabler/icons-react";
import clsx from "clsx";
import { MOCK } from "@/constants/MOCK";

const form = MOCK.auth.formData
  ? {
      email: "dehphantom@yahoo.com",
      password: "$Thatplus500b0y",
    }
  : {
      email: "",
      password: "",
    };

export const Email = () => {
  const [value, setValue] = useState(form.email);
  //
  return (
    <div className="auth-input-container">
      <IconMail size={28} className="text-ash4" />
      <div className="auth-input-wrapper">
        <label className={clsx("auth-label", !value.length && "text-white")}>
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          value={value}
          onChange={(ev) => setValue(ev.currentTarget.value)}
          className="auth-input"
        />
      </div>
    </div>
  );
};

export const Password = () => {
  const [value, setValue] = useState(form.password);
  const [show, setShow] = useState(false);
  //
  return (
    <div className="auth-input-container">
      <IconLockPassword size={28} className="text-ash4" />
      <div className="auth-input-wrapper">
        <label className={clsx("auth-label", !value.length && "text-white")}>
          Password
        </label>
        <div className="flex-cb">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            value={value}
            onChange={(ev) => setValue(ev.currentTarget.value)}
            className="auth-input"
          />
          <button
            type="button"
            onClick={() => setShow((p) => !p)}
            title={show ? "Hide" : "Show"}
            className="cursor-pointer"
          >
            {show ? (
              <IconEyeOff size={28} className="text-ash4" />
            ) : (
              <IconEye size={28} className="text-ash4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export const Checkbox = ({ children }: PropsWithChildren) => {
  const [checked, setChecked] = useState(true);
  //
  return (
    <div className="flex-cc debug_">
      <button
        className="auth-checkbox-container"
        onClick={() => setChecked((p) => !p)}
      >
        <i
          className={clsx(
            "auth-checkbox",
            checked && "bg-secondary hover:bg-secondary",
          )}
        >
          {checked && (
            <IconCheck size={14} className="text-white" strokeWidth={2.5} />
          )}
        </i>
        {children}
      </button>
    </div>
  );
};

export const SubmitButton = ({ children }: PropsWithChildren) => {
  return (
    <button type="submit" className="auth-submit-btn mt-5">
      {children}
    </button>
  );
};
