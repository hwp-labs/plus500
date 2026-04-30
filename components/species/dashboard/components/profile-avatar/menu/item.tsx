"use client";

import { useRouter } from "next/navigation";
import { TablerIcon } from "@tabler/icons-react";

interface Props {
  Icon: TablerIcon;
  label: string;
  path?: string;
  onClick?: (label: string) => void;
}

export const MenuItem = ({ Icon, label, onClick, path }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    if (path) router.push(path);
    if (onClick) onClick(label);
  };
  //
  return (
    <div className="debug_ px-4 py-3">
      <button
        onClick={handleClick}
        className="flex-cs hover:text-secondary cursor-pointer gap-4"
      >
        <Icon size={20} />
        {label}
      </button>
    </div>
  );
};
