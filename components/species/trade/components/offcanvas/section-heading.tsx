"use client";

import { PropsWithChildren, useState } from "react";
import { BellPlusIcon, ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import clsx from "clsx";

interface Props extends PropsWithChildren {
  label: string;
  collapsed?: boolean;
}

export const SectionHeading = ({ children, label, collapsed }: Props) => {
  const [_collapsed, setCollapsed] = useState(collapsed);
  //
  return (
    <div className="border-ash6 grid gap-2 border-t pt-4">
      <div className="flex-cb">
        <button
          onClick={() => setCollapsed((s) => !s)}
          className={clsx(
            "flex cursor-pointer gap-2",
            _collapsed && "text-secondary",
          )}
        >
          {_collapsed ? (
            <ChevronDownIcon size={16} />
          ) : (
            <ChevronRightIcon size={16} />
          )}
          <strong className="-mt-0.5">{label}</strong>
        </button>
        <BellPlusIcon size={18} />
      </div>
      {_collapsed ? children : null}
    </div>
  );
};
