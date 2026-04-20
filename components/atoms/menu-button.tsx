import { PropsWithChildren } from "react";
import { IconChevronDown } from "@tabler/icons-react";

export const MenuButton = ({ children }: PropsWithChildren) => {
  return (
    <button className="flex-cs ghost-btn gap-1 group">
      {children}
      <IconChevronDown
        size={24}
        strokeWidth={2.5}
        className="text-icon group-hover:text-icon-hover"
      />
    </button>
  );
};
