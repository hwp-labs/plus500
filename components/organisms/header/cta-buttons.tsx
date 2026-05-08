"use client";

import Link from "next/link";
import { IconMenu2Filled, IconX } from "@tabler/icons-react";
//
import { MenuButton } from "./menu-button";
import { useMainStore } from "@/store/main-store";
import { PATH } from "@/constants/PATH";

export const CtaButtons = () => {
  const drawer = useMainStore((s) => s.drawer);
  const toggleDrawer = useMainStore((s) => s.toggleDrawer);
  //
  return (
    <>
      <div className="show-lg-block">
        <div className="flex-cs gap-4">
          <MenuButton subMenu={["Espanol"]}>EN</MenuButton>
          <Link
            href={PATH.registerDemo}
            className="tonal-btn btn border-gradient-to-r border-to-[#2d88fe]! from-[#13abfe] px-14"
          >
            Start Trading
          </Link>
        </div>
      </div>
      <div className="hide-lg-block">
        <div className="flex-cs gap-4">
          <Link href={PATH.registerDemo} className="tonal-btn btn px-4.5">
            Trade
          </Link>
          <button onClick={toggleDrawer}>
            {drawer ? (
              <IconX className="text-white" size={32} />
            ) : (
              <IconMenu2Filled className="text-white" size={32} />
            )}
          </button>
        </div>
      </div>
    </>
  );
};
