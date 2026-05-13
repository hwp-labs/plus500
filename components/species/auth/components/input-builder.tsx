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

interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const Email = ({
  value = "",
  onChange = () => undefined,
}: InputProps) => {
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
          onChange={(ev) => onChange(ev.currentTarget.value)}
          className="auth-input"
        />
      </div>
    </div>
  );
};

export const Password = ({
  value = "",
  onChange = () => undefined,
}: InputProps) => {
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
            onChange={(ev) => onChange(ev.currentTarget.value)}
            className="auth-input"
          />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
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

interface CheckboxProps extends PropsWithChildren {
  checked?: boolean;
  onChange?: () => void;
}

export const Checkbox = ({ children, checked, onChange }: CheckboxProps) => {
  return (
    <div className="flex-cc debug_">
      <button className="auth-checkbox-container" onClick={onChange}>
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
