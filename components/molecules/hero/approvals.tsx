"use client";

import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-media-query";

export const Approvals = () => {
  const mq = useMediaQuery();
  //
  return (
    <div className="flex-col-cc gap-6">
      <figure className="flex-cc gap-6 lg:mt-12 lg:gap-12">
        <Image
          src="/images/hero-fx-empire.png"
          alt=""
          width={mq ? 171 : 226}
          height={mq ? 62 : 91}
          priority
        />
        <Image
          src="/images/hero-trust-pilot.png"
          alt=""
          width={mq ? 145 : 206}
          height={mq ? 64 : 108}
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
