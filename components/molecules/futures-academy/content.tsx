import Link from "next/link";
import Image from "next/image";
//
import { PATH } from "@/constants/PATH";

export const Content = () => {
  return (
    <>
      <figure className="flex-col-cc gap-2 lg:-mt-10">
        <Image src="/images/cme-group.png" alt="" width={183} height={161} />
        <figcaption className="text-[26px] lg:text-[32px] lg:font-light">
          Futures Academy
        </figcaption>
      </figure>
      <p className="mt-3 text-center text-lg leading-5 lg:leading-6">
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
    </>
  );
};
