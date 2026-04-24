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
          width={isMobile ? 171 : 226}
          height={isMobile ? 62 : 91}
          priority
        />
        <Image
          src="/images/hero-trust-pilot.png"
          alt=""
          width={isMobile ?145 : 206}
          height={isMobile ? 64 : 108}
          priority
        />
      </figure>
      <div className="hide-lg-block pb-10">
        <Image
          src="/images/hero-cftc-reg.png"
          alt=""
          width={100}
          height={40}
          priority
        />
      </div>
    </div>
  );
};
