import Link from "next/link";
import Image from "next/image";
import { PATH } from "@/constants/PATH";

export const Hero = () => {
  return (
    <section className="bg-primary relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-right" />
      <div className="flex-cs relative container min-h-[600px] px-6">
        <div className="debug2_ max-w-2xl">
          {renderTitle}
          {renderDescription}
          {renderCta}
          {renderPerksList}
          {renderApprovals}
        </div>
      </div>
    </section>
  );
};

const renderTitle = (
  <hgroup className="text-5xl leading-14 font-bold">
    <h1 className="">Volatility fuels markets</h1>
    <h1 className="text-tertiary">Ride the Oil & Gold wave</h1>
  </hgroup>
);

const renderDescription = (
  <h2 className="mt-5 text-3xl text-[#82b6fe]">
    Trade Futures & Prediction Markets in one app.
  </h2>
);

const renderCta = (
  <div className="my-10 space-x-6">
    <Link href={PATH.register} className="tonal-btn lg-btn">
      Start Trading Now
    </Link>
    <Link href={PATH.register + "?demo=true"} className="solid-btn lg-btn">
      Try FREE Demo
    </Link>
  </div>
);

const renderPerksList = (
  <ul className="flex-cc font-roboto text-xl font-semibold [&>li]:px-5 [&>li]:py-0.5 [&>li]:whitespace-nowrap">
    <li className="border-r-1">Free Live Charts</li>
    <li className="border-r-1">No Platform Fees</li>
    <li className="">Advanced Technology</li>
  </ul>
);

const renderApprovals = (
  <figure className="flex-cc mt-12 gap-12">
    <Image
      src="/images/fx-empire.png"
      alt=""
      width={226}
      height={91}
      priority
    />
    <Image
      src="/images/trust-pilot.png"
      alt=""
      width={206}
      height={108}
      priority
    />
  </figure>
);
