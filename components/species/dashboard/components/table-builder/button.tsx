"use client";

import { PropsWithChildren } from "react";

interface ActionProps extends PropsWithChildren {
  label?: string;
  onClick?: () => void;
  loading?: boolean;
}

export const TableButton = ({
  children,
  label,
  onClick,
  loading,
}: ActionProps) => (
  <td className="">
    <div className="flex-col-cc gap-0.5">
      {label ? <span className="text-blue-400">{label}</span> : null}
      <button
        onClick={onClick}
        disabled={loading}
        className="rounded-full border px-3 py-0.5 text-xs"
      >
        {children}
        {loading && "..."}
      </button>
    </div>
  </td>
);
