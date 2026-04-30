"use client";

import { useState } from "react";
import {
  type TablerIcon,
  IconChevronUp,
  IconChevronDown,
} from "@tabler/icons-react";
import clsx from "clsx";

interface Props {
  Icon: TablerIcon;
  label: string;
  data?: {
    Icon: TablerIcon;
    label: string;
  }[];
}

export const AccordionItem = ({ Icon, label, data = [] }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    if (data.length) setCollapsed((s) => !s);
  };
  //
  return (
    <div className="debug_">
      <button
        onClick={toggleCollapsed}
        className={clsx(
          "btn-fx flex-cb hover:bg-secondary debug2_ w-full rounded bg-[#2d3b4e] px-4 py-3 hover:text-white",
          collapsed && "text-secondary! rounded-none hover:text-white!",
        )}
      >
        <div className="flex-cs gap-4">
          <Icon size={20} />
          {label}
        </div>
        {collapsed ? (
          <IconChevronUp size={20} />
        ) : (
          <IconChevronDown size={20} />
        )}
      </button>
      {/* CONTENT */}
      {collapsed ? (
        <ol className="debug3_ flex-col-xx gap-2 bg-[#2d3b4e] px-4 pt-2 pb-4">
          {data?.map(({ Icon, label }, i) => (
            <li key={i}>
              <button
                className={clsx(
                  "flex-cs hover:bg-secondary debug4_ bg-header w-full cursor-pointer gap-4 rounded px-2.5 py-2.5 hover:text-white",
                )}
              >
                <Icon size={20} />
                {label}
              </button>
            </li>
          ))}
        </ol>
      ) : null}
    </div>
  );
};
