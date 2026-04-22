import { PATH } from "@/constants/PATH";
import { IconGift } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { CtaButtons } from "./cta-buttons";

export const FuturesAcademy = () => {
  return (
    <section className="container-md bg-[url('/images/cover-cme-group.png')] bg-contain bg-no-repeat">
      <div className="h-[490px] container-md  text-white"></div>
      {/* <div className="flex-cs debug container hidden min-h-[600px] px-6">
        <div className="max-w-2xl">
          <figure className="flex-cc debug_ min-h-[110px]">
            <Image
              src="/images/cme-group.png"
              alt=""
              width={100}
              height={100}
            />
            <figcaption className="text-tertiary mt-40 text-5xl leading-12 font-bold">
              Futures Academy
            </figcaption>
          </figure>
          <p className="">
            Dive into our articles and videos to get an in-depth look at all you
            need to know about Futures trading.
          </p>
          <Link href={PATH.hash} className="solid-btn btn-lg btn text-primary">
            Learn to Trade
          </Link>
        </div>
      </div> */}
    </section>
  );
};
