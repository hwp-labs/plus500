import { Logo } from "@/components/logo";
import { PATH } from "@/constants/PATH";
//
import { Nav } from "../nav";
import { CtaButton } from "./cta-button";

export const Header = () => {
  return (
    <header className="bg-primary sticky top-0 z-50 px-2 py-2 lg:py-4">
      <div className="flex-cb container">
        <a href={PATH.home} title="Home">
          <Logo />
        </a>
        <Nav />
        <CtaButton />
      </div>
    </header>
  );
};
