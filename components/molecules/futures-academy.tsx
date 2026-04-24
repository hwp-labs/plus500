import Link from "next/link";
import Image from "next/image";
//
import { PATH } from "@/constants/PATH";

export const FuturesAcademy = () => {
  return (
    <section className="debug lg:-top-30 w-full lg:absolute">
      <div className="container-md lg:bg-[url('/images/cover-cme.png')] bg-contain bg-no-repeat">
      <div className="min-h-[250px] bg-[url('/images/cover-cme-mobile-2.png')] bg-contain bg-center bg-no-repeat lg:hidden"></div>
        <div className="flex-col-sc lg:h-[500px] lg:w-[700px] lg:px-20 text-white bg-primary lg:bg-transparent">
          <figure className="flex-col-cc mt-12 gap-2">
            <Image
              src="/images/cme-group.png"
              alt=""
              width={183}
              height={161}
            />
            <figcaption className="text-[32px] font-light">
              Futures Academy
            </figcaption>
          </figure>
          <p className="mt-3 text-center text-lg leading-6">
            Dive into our articles and videos to get an in-depth look at all you
            need to know about Futures trading.
          </p>
          <div className="mx-auto mt-5 w-[300px]">
            <Link
              href={PATH.hash}
              className="solid-btn btn-lg btn text-primary hover:text-white"
            >
              Learn to Trade
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
