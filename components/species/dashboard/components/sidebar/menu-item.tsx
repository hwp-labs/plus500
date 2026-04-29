"use client";

import clsx from "clsx";
import type { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  Icon: LucideIcon;
  label: string;
  path?: string;
  badge?: string | number;
  onClick?: (label: string) => void;
  active?: boolean;
  collapsed?: boolean;
}

export const MenuItem = ({
  Icon,
  label,
  path,
  badge,
  onClick,
  active,
  collapsed,
}: Props) => {
  const router = useRouter();
  const handleClick = () => {
    if (path) router.push(path);
    if (onClick) onClick(label);
  };
  //
  return (
    <button
      title={label}
      onClick={handleClick}
      className={clsx(
        "debug_ sidebar-btn gap-1 px-1",
        active && "sidebar-btn-active",
        collapsed && "size-15",
      )}
    >
      <i className="min-size-6">
        <Icon className={clsx("dashboard-icon", active && "text-white")} />
      </i>
      {badge ? <span className="sidebar-badge">{badge}</span> : null}
      {collapsed && <small className="sidebar-text">{label}</small>}
    </button>
  );
};
