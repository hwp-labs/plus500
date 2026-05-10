"use client";

import { PropsWithChildren } from "react";

interface ActionProps extends PropsWithChildren {
  label?: string;
  onClick?: () => void;
}

export const TableButton = ({ children, label, onClick }: ActionProps) => (
  <td className="">
    <div className="flex-col-cc gap-0.5">
      {label ? <span className="text-blue-400">{label}</span> : null}
      <button
        onClick={onClick}
        className="rounded-full border px-3 py-0.5 text-xs"
      >
        {children}
      </button>
    </div>
  </td>
);
