"use client";

import { PropsWithChildren, useState } from "react";
import { CheckCheckIcon, CheckIcon, LoaderIcon } from "lucide-react";
import clsx from "clsx";

interface ActionProps extends PropsWithChildren {
  placeholder?: string;
  value?: number;
  onChange?: (value: number) => void;
  onSave?: () => void;
  loading?: boolean;
  success?: boolean;
}

const iconProps = {};

export const InlineEditForm = ({
  placeholder,
  value,
  onChange = () => undefined,
  onSave,
  loading,
  success,
}: ActionProps) => {
  const [valueStr, setValueStr] = useState(value || "");

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const val = ev.currentTarget.value;
    const valInt = Number(val.trim().replaceAll(",", ""));
    setValueStr(val);
    onChange(valInt);
  };
  //
  return (
    <td>
      <div className="flex-cs">
        <input
          type="text"
          value={valueStr}
          onChange={handleChange}
          placeholder={placeholder}
          className="in[put-reset border-ash5 w-30 border px-1"
        />
        <button
          onClick={onSave}
          className={clsx(
            "btn-fx bg-secondary border-secondary border-2 px-0.5",
            success && "btn-fx-success",
          )}
        >
          {success ? (
            <CheckCheckIcon size={18} strokeWidth={3} />
          ) : loading ? (
            <LoaderIcon size={18}  />
          ) : (
            <CheckIcon size={18} strokeWidth={3} />
          )}
        </button>
      </div>
    </td>
  );
};
