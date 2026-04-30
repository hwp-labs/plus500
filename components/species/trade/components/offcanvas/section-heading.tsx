"use client";

import { PropsWithChildren, useState } from "react";
import { BellPlusIcon, ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import clsx from "clsx";

interface Props extends PropsWithChildren {
  label: string;
}

export const SectionHeading = ({ children, label }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  //
  return (
    <div className="border-ash6 grid gap-2 border-t py-4">
      <div className="flex-cb">
        <button
          onClick={() => setCollapsed((s) => !s)}
          className={clsx(
            "flex cursor-pointer gap-2",
            collapsed && "text-secondary",
          )}
        >
          {collapsed ? (
            <ChevronDownIcon size={16} />
          ) : (
            <ChevronRightIcon size={16} />
          )}
          <strong className="-mt-0.5">{label}</strong>
        </button>
        <BellPlusIcon size={18} />
      </div>
      {collapsed ? children : null}
    </div>
  );
};
