import Link from "next/link";
//
import { LogoAuth } from "@/components/logo";
import { PATH } from "@/constants/PATH";

export const Header = () => {
  return (
    <section>
      <div className="show-md-block">
        <header className="flex-cb px-10 py-2">
          <div className="debug_ flex-1">&nbsp;</div>
          <div className="debug_ flex-cc flex-1">
            <Link href={PATH.home} title="Home">
              <LogoAuth />
            </Link>
          </div>
          <div className="flex-ce flex-1">
            <select className="border-ash4 focus:border-ash7 w-[150px] rounded-lg border px-2 py-1.5 text-sm">
              <option value="eng">English</option>
              <option value="esp">Espa&ntilde;ol</option>
            </select>
          </div>
        </header>
      </div>
      <div className="hide-md-block">
        <header className="flex-cb border-ash3 border-b px-6 py-2.5">
          <Link href={PATH.home} title="Home">
            <LogoAuth mobile />
          </Link>
          <select className="border-ash4 focus:border-ash7 rounded-lg border px-2 py-1.5 text-sm">
            <option value="eng">English</option>
            <option value="esp">Espa&ntilde;ol</option>
          </select>
        </header>
      </div>
    </section>
  );
};
