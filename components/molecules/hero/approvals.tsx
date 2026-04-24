"use client";

import Image from "next/image";
import { useIsMobile } from "@/hooks/use-is-mobile";

export const Approvals = () => {
  const isMobile = useIsMobile();
  //
  return (
    <div className="flex-col-cc gap-6">
      <figure className="flex-cc gap-6 lg:mt-12 lg:gap-12">
        <Image
          src="/images/hero-fx-empire.png"
          alt=""
          width={isMobile ? 226 / 1.2 : 226}
          height={isMobile ? 91 / 1.2 : 91}
          priority
        />
        <Image
          src="/images/hero-trust-pilot.png"
          alt=""
          width={isMobile ? 206 / 1.2 : 206}
          height={isMobile ? 108 / 1.2 : 108}
          priority
        />
      </figure>
      <div className="hide-lg-block pb-5 text-center leading-7">
        <div className="text-[40px] font-bold">CFTC</div>
        <div className="">Registered</div>
      </div>
    </div>
  );
};
