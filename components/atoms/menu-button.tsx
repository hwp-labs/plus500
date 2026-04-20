import { PropsWithChildren } from "react";
import { IconChevronDown } from "@tabler/icons-react";

export const MenuButton = ({ children }: PropsWithChildren) => {
  return (
    <button className="flex-cs ghost-btn group gap-1">
      {children}
      <IconChevronDown
        size={24}
        strokeWidth={2.5}
        className="text-[#8693bd] group-hover:text-[#3988b4]"
      />
    </button>
  );
};
