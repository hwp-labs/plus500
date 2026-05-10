"use client";

import { PropsWithChildren } from "react";
import { CheckIcon } from "lucide-react";

interface ActionProps extends PropsWithChildren {
  placeholder?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  onSave?: () => void;
}

export const InlineEditForm = ({
  placeholder,
  value = "",
  onChange = () => undefined,
  onSave,
}: ActionProps) => (
  <td>
    <div className="flex-cs">
      <input
        type="text"
        value={value}
        onChange={(ev) => onChange(ev.currentTarget.value)}
        placeholder={placeholder}
        className="in[put-reset border-ash5 w-30 border px-1"
      />
      <button
        onClick={onSave}
        className="btn-fx bg-secondary border-secondary border-2 px-0.5"
      >
        <CheckIcon size={18} strokeWidth={3} />
      </button>
    </div>
  </td>
);
