import Link from "next/link";
import { IconMenu2Filled } from "@tabler/icons-react";
//
import { Logo } from "../logo";
import { MenuButton } from "../atoms/menu-button";
import { Nav } from "./nav";
import { PATH } from "@/constants/PATH";

export const Header = () => {
  return (
    <header className="bg-primary px-4 py-2.5 lg:py-4">
      <div className="flex-cb mx-auto max-w-7xl">
        <a href={PATH.home} title="Home">
          <Logo />
        </a>
        <Nav />
        <div className="show-lg-block">
          <div className="flex-cs gap-4">
            <MenuButton>EN</MenuButton>
            <Link href={PATH.login} className="tonal-btn px-8 py-2">
              Start Trading
            </Link>
          </div>
        </div>
        <div className="hide-lg-block">
          <div className="flex-cs gap-4">
            <Link href={PATH.login} className="tonal-btn px-5 py-2">
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
