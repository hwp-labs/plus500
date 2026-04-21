import Link from "next/link";
import { IconMenu2Filled } from "@tabler/icons-react";
//
import { Logo } from "../logo";
import { MenuButton } from "../atoms/menu-button";
import { Nav } from "./nav";
import { PATH } from "@/constants/PATH";

export const Header = () => {
  return (
    <header className="bg-primary px-2 py-2 lg:py-4">
      <div className="flex-cb container">
        <a href={PATH.home} title="Home">
          <Logo />
        </a>
        <Nav />
        <div className="show-lg-block">
          <div className="flex-cs gap-4">
            <MenuButton>EN</MenuButton>
            <Link href={PATH.login} className="tonal-btn btn px-14 h-[38px]">
              Start Trading
            </Link>
          </div>
        </div>
        <div className="hide-lg-block">
          <div className="flex-cs gap-4">
            <Link href={PATH.login} className="tonal-btn btn px-4.5 h-[38px]">
              Trade
            </Link>
            <button className="">
              <IconMenu2Filled className="text-white" size={32} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
