import Image from "next/image";
import { CtaButtons } from "./cta-buttons";

export const Hero = () => {
  return (
    <section className="bg-primary bg-cover bg-center text-white lg:bg-[url('/images/cover-hero.png')]">
      <div className="min-h-[250px] bg-[url('/images/cover-hero-mobile.png')] bg-contain bg-center bg-no-repeat lg:hidden"></div>
      <div className="sm:flex-cc lg:flex-cs container lg:min-h-[580px]">
        <div className="wrapper-sm pr-8 pl-8 text-center lg:pr-20 lg:pl-8 lg:text-left">
          {renderTitle}
          {renderDescription}
          <CtaButtons classNames={{ div: "my-5 gap-2.5 lg:gap-6 lg:my-10" }} />
          {renderPerksList}
          {renderApprovals}
        </div>
      </div>
    </section>
  );
};

const renderTitle = (
  <hgroup className="font-f2 leading-8 lg:leading-12">
    <h1 className="text-[28px] font-bold lg:text-[40px]">
      Volatility fuels markets
    </h1>
    <h1 className="text-secondary lg:text-tertiary text-[25px] font-medium lg:text-[40px] lg:font-bold">
      Ride the Oil & Gold wave
    </h1>
  </hgroup>
);

const renderDescription = (
  <h2 className="font-f2 show-lg-block mt-5 text-3xl text-[#82b6fe]">
    Trade Futures & Prediction Markets in one app.
  </h2>
);

const renderPerksList = (
  <div className="show-lg-block">
    <ul className="flex-cc text-xl font-semibold [&>li]:px-5 [&>li]:py-0.5 [&>li]:whitespace-nowrap">
      <li className="border-r-1">Free Live Charts</li>
      <li className="border-r-1">No Platform Fees</li>
      <li className="">Advanced Technology</li>
    </ul>
  </div>
);

const renderApprovals = (
  <div className="flex-col-cc gap-6">
    <figure className="flex-cc gap-6 lg:mt-12 lg:gap-12">
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
    <div className="hide-lg-block text-center leading-7 pb-5">
      <div className="text-[40px] font-bold">CFTC</div>
      <div className="">Registered</div>
    </div>
  </div>
);
