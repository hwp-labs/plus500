import Link from "next/link";
import { PropsWithChildren } from "react";
import { IconChevronDown } from "@tabler/icons-react";

interface Props extends PropsWithChildren {
  subMenu?: React.ReactNode[];
}

export const MenuButton = ({ children, subMenu = [] }: Props) => {
  return (
    <div className="group relative">
      <button className="flex-cs ghost-btn btn gap-1">
        {children}
        <IconChevronDown
          size={24}
          strokeWidth={2.5}
          className="text-[#8693bd] group-hover:text-[#3988b4]"
        />
      </button>
      {/* SUBMENU */}
      {subMenu.length ? (
        <div className="bg-primary invisible absolute top-full left-0 z-50 mt-2 w-60 overflow-clip rounded-b-lg text-sm text-white opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
          <ul className="">
            {subMenu.map((item, i) => (
              <li key={i}>
                {typeof item === "string" ? (
                  <Link
                    href="#"
                    className="hover:bg-primary-active block px-4 py-2"
                  >
                    {item}
                  </Link>
                ) : item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
