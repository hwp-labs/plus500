import Link from "next/link";
import { IconMenu2Filled } from "@tabler/icons-react";
//
import { MenuButton } from "@/components/atoms/menu-button";
import { PATH } from "@/constants/PATH";

export const CtaButton = () => {
  return (
    <>
      <div className="show-lg-block">
        <div className="flex-cs gap-4">
          <MenuButton>EN</MenuButton>
          <Link
            href={PATH.login}
            className="tonal-btn btn border-gradient-to-r border-to-[#2d88fe]! from-[#13abfe] px-14"
          >
            Start Trading
          </Link>
        </div>
      </div>
      <div className="hide-lg-block">
        <div className="flex-cs gap-4">
          <Link href={PATH.login} className="tonal-btn btn px-4.5">
            Trade
          </Link>
          <button className="">
            <IconMenu2Filled className="text-white" size={32} />
          </button>
        </div>
      </div>
    </>
  );
};
