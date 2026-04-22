import Image from "next/image";
import { CtaButtons } from "./cta-buttons";

export const Hero = () => {
  return (
    <section className="bg-primary debug_ bg-[url('/images/cover-hero.png')] bg-cover bg-center text-white">
      <div className="flex-cs container min-h-[580px]">
        <div className="wrapper-sm  pl-8 pr-20">
          {renderTitle}
          {renderDescription}
          <CtaButtons className="my-10 gap-6" />
          {renderPerksList}
          {renderApprovals}
        </div>
      </div>
    </section>
  );
};

const renderTitle = (
  <hgroup className="font-f2 text-[40px] leading-12 font-bold">
    <h1 className="">Volatility fuels markets</h1>
    <h1 className="text-tertiary">Ride the Oil & Gold wave</h1>
  </hgroup>
);

const renderDescription = (
  <h2 className="font-f2 mt-5 text-3xl text-[#82b6fe]">
    Trade Futures & Prediction Markets in one app.
  </h2>
);

const renderPerksList = (
  <ul className="flex-cc text-xl font-semibold [&>li]:px-5 [&>li]:py-0.5 [&>li]:whitespace-nowrap">
    <li className="border-r-1">Free Live Charts</li>
    <li className="border-r-1">No Platform Fees</li>
    <li className="">Advanced Technology</li>
  </ul>
);

const renderApprovals = (
  <figure className="flex-cc mt-12 gap-12">
    <Image
      src="/images/hero-fx-empire.png"
      alt=""
      width={226}
      height={91}
      priority
    />
    <Image
      src="/images/hero-trust-pilot.png"
      alt=""
      width={206}
      height={108}
      priority
    />
  </figure>
);
