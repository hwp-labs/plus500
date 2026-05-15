"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { CheckIcon } from "lucide-react";
import clsx from "clsx";
import { useFileInput } from "@/hooks/use-file-input";

interface TextInputProps {
  value?: string;
  onChange?: (value: string) => void;
  sm?: boolean;
}

export const TextInput = ({
  value = "",
  onChange = () => undefined,
  sm,
}: TextInputProps) => {
  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const valueSafe = ev.currentTarget.value;
    onChange(valueSafe);
  };
  //
  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className={clsx("input-reset", sm ? "dash-input-sm" : "dash-input")}
    />
  );
};

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

  useEffect(() => {
    onChange(value);
  }, [value]);

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
  //
  return (
    <div className="flex-cb mt-0">
      <input
        type="text"
        value={value.toLocaleString()}
        onChange={handleChange}
        className={clsx(
          "input-reset flex-1",
          sm ? "dash-input-sm" : "dash-input",
        )}
      />
      <button
        onClick={handleIncrease}
        className={clsx(
          "dash-input-btn btn-fx",
          sm ? "dash-input-btn-sm" : "dash-input-btn",
        )}
      >
        +
      </button>
      <button
        onClick={handleDecrease}
        className={clsx(
          "dash-input-btn btn-fx",
          sm ? "dash-input-btn-sm" : "dash-input-btn",
        )}
      >
        -
      </button>
    </div>
  );
};

interface FileInputProps extends PropsWithChildren {
  onChange?: (file: File) => void;
}

export const FileInput = ({
  children,
  onChange = () => undefined,
}: FileInputProps) => {
  const { data, error, loading, handleChange } = useFileInput();

  useEffect(() => {
    if (data?.file?.name) onChange(data.file);
  }, [data?.file]);

  if (error) alert(error);
  //
  return (
    <div className="flex flex-col justify-between sm:flex-row sm:items-center">
      <div className="btn border-ash6 max-h-[40]! flex-1 rounded-none px-2 py-1">
        {data?.file?.name
          ? `${data.file.name} (${data.fileSizeMb}mb)`
          : "No file selected"}
      </div>
      <label>
        <input type="file" onChange={handleChange} className="hidden" />
        <div className="btn bg-secondary border-secondary max-h-[40]! rounded-none px-4 hover:border-[#4678b5] hover:bg-[#4678b5] hover:text-white">
          {loading ? "Uploading..." : children}
        </div>
      </label>
    </div>
  );
};

interface CheckboxInputProps {
  label: React.ReactNode;
  checked?: boolean;
  onCheck?: () => void;
}

export const CheckboxInput = ({
  label,
  checked,
  onCheck,
}: CheckboxInputProps) => (
  <button onClick={onCheck} className="flex-cs group cursor-pointer gap-2">
    <div
      className={clsx(
        "flex-cc size-5 rounded group-hover:bg-[#446da4]",
        checked ? "bg-secondary" : "bg-[#4d5e75]",
      )}
    >
      {checked && <CheckIcon size={14} strokeWidth={3} />}
    </div>
    <div>{label}</div>
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
  loading?: boolean;
  success?: boolean;
  error?: string | null;
  onClick?: () => void;
}

export const PairedSubmitBtn = ({
  children,
  loading,
  success,
  error,
  onClick = () => undefined,
}: PairedSubmitBtnProps) => {
  return (
    <div className="">
      <div className="flex-cb mt-0">
        <button
          onClick={onClick}
          disabled={loading}
          className={clsx(
            "dash-submit-btn btn-fx",
            success && "bg-success! border-success! text-white!",
          )}
        >
          {success ? "Done!" : loading ? "Processing..." : children}
        </button>
        <button className="btn-fx dash-cancel-btn">Cancel</button>
      </div>
      {error ? <p className="text-danger mt-1 text-sm">{error}</p> : null}
    </div>
  );
};
