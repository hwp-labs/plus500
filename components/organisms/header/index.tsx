import Link from "next/link";
//
import { Logo } from "@/components/logo";
import { MenuButton } from "./menu-button";
import { CtaButtons } from "./cta-buttons";
import { PATH } from "@/constants/PATH";
import { MENU } from "@/constants/MENU";
import { Drawer } from "./drawer";

export const Header = () => {
  return (
    <>
      <header className="bg-primary sticky top-0 z-50 px-2 py-2 lg:py-4">
        <div className="flex-cb container">
          <a href={PATH.home} title="Home">
            <Logo />
          </a>
          <nav className="show-lg-block">
            <ul className="flex-cs">
              {MENU.map((item, i) => (
                <li key={i} className="">
                  {item.menu ? (
                    <MenuButton subMenu={item.menu}>{item.label}</MenuButton>
                  ) : (
                    <Link href="#" className="ghost-btn btn">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <CtaButtons />
        </div>
      </header>
      <Drawer />
    </>
  );
};
