"use client";

import { PropsWithChildren } from "react";
import clsx from "clsx";

interface Props extends PropsWithChildren {
  label: string;
  title?: string;
  onClick?: () => void;
  active?: boolean;
  collapsed?: boolean;
}

export const Toggle = ({
  children,
  label,
  title,
  onClick,
  active,
  collapsed,
}: Props) => {
  return (
    <div className="flex-col-cc gap-1">
      <button
        title={title || label}
        onClick={onClick}
        className={clsx("sidebar-toggle", active && "justify-start")}
      >
        {children}
      </button>
      {collapsed && (
        <small className="sidebar-text">{label}</small>
      )}
    </div>
  );
};
