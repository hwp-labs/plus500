"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { CheckIcon } from "lucide-react";
import clsx from "clsx";

interface NumberInputProps {
  defaultValue?: number;
  onChange?: (value: number) => void;
  sm?: boolean;
}

export const NumberInput = ({
  defaultValue,
  onChange = () => undefined,
  sm,
}: NumberInputProps) => {
  const [value, setValue] = useState(defaultValue || 0);

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const valueSafe = ev.currentTarget.value.trim().replaceAll(",", "");
    const valueInt = Number(valueSafe);
    setValue(valueInt);
  };
  const handleIncrease = () => {
    setValue((s) => s + 1);
  };
  const handleDecrease = () => {
    setValue((s) => s - 1);
  };

  useEffect(() => {
    onChange(value);
  }, [value]);
  //
  return (
    <div className="flex-cb mt-1">
      <input
        type="text"
        value={value.toLocaleString()}
        onChange={handleChange}
        className={clsx(
          "input-reset border-ash5 flex-1 border-2 px-2",
          sm ? "size-8" : "size-10 text-2xl",
        )}
      />
      <button
        onClick={handleIncrease}
        className={clsx("dash-input-btn btn-fx", sm ? "size-8" : "size-10")}
      >
        +
      </button>
      <button
        onClick={handleDecrease}
        className={clsx("dash-input-btn btn-fx", sm ? "size-8" : "size-10")}
      >
        -
      </button>
    </div>
  );
};

interface CheckboxInputProps {
  label: string;
  checked?: boolean;
  onCheck?: () => void;
}

export const CheckboxInput = ({
  label,
  checked,
  onCheck,
}: CheckboxInputProps) => (
  <button onClick={onCheck} className="flex-cs cursor-pointer gap-2">
    <div
      className={clsx(
        "flex-cc size-5 rounded",
        checked ? "bg-secondary" : "bg-ash6",
      )}
    >
      {checked && <CheckIcon size={14} strokeWidth={3} />}
    </div>
    <span>{label}</span>
  </button>
);

interface OutlineBtnProps extends PropsWithChildren {
  onClick?: () => void;
  className?: string;
}

export const OutlineBtn = ({
  children,
  onClick,
  className,
}: OutlineBtnProps) => (
  <button
    onClick={onClick}
    className={clsx("dash-btn btn-fx px-6 py-1.5 text-xs", className)}
  >
    {children}
  </button>
);

interface PairedSubmitBtnProps extends PropsWithChildren {
  onSubmit?: () => void;
}

export const PairedSubmitBtn = ({
  children,
  onSubmit = () => undefined,
}: PairedSubmitBtnProps) => {
  return (
    <div className="flex-cb mt-6">
      <button
        onClick={onSubmit}
        className="btn bg-secondary border-secondary max-h-[40]! w-full rounded-none text-lg"
      >
        {children}
      </button>
      <button className="btn border-ash6 border_ max-h-[40]! rounded-none px-10">
        Cancel
      </button>
    </div>
  );
};
