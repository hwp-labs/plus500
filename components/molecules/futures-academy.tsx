import { PATH } from "@/constants/PATH";
import { IconGift } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { CtaButtons } from "./cta-buttons";

export const FuturesAcademy = () => {
  return (
    <section className="container-md bg-[url('/images/cover-cme-group.png')] bg-contain bg-no-repeat">
      <div className="flex-col-sc h-[500px] w-[700px] px-20 text-white">
        <figure className="flex-col-cc mt-12 gap-2">
          <Image src="/images/cme-group.png" alt="" width={183} height={161} />
          <figcaption className="text-[32px] font-light">
            Futures Academy
          </figcaption>
        </figure>
        <p className="text-center text-lg leading-6 mt-3">
          Dive into our articles and videos to get an in-depth look at all you
          need to know about Futures trading.
        </p>
        <div className="mt-5 w-[300px] mx-auto">
          <Link
            href={PATH.hash}
            className="solid-btn btn-lg btn text-primary hover:text-white"
          >
            Learn to Trade
          </Link>
        </div>
      </div>
    </section>
  );
};
