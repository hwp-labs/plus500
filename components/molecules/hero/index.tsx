import { CtaButtons } from "../cta-buttons";
import { Approvals } from "./approvals";

export const Hero = () => {
  return (
    <section className="bg-primary bg-cover bg-center text-white lg:bg-[url('/images/cover-hero.png')]">
      <div className="min-h-[250px] bg-[url('/images/cover-hero-mobile-2.png')] bg-contain bg-center bg-no-repeat lg:hidden"></div>
      <div className="sm:flex-cc lg:flex-cs container lg:min-h-[580px]">
        <div className="wrapper-sm pr-8 pl-8 text-center lg:pr-20 lg:pl-8 lg:text-left">
          {renderTitle}
          {renderDescription}
          <CtaButtons classNames={{ div: "my-5 gap-2.5 lg:gap-6 lg:my-10" }} />
          {renderPerksList}
          <Approvals />
        </div>
      </div>
    </section>
  );
};

const renderTitle = (
  <hgroup className="font-f2 leading-8 lg:leading-12">
    <h1 className="text-[26px] font-bold lg:text-[40px]">
      Volatility fuels markets
    </h1>
    <h1 className="text-tertiary text-[24px] font-medium_ lg:text-[40px] lg:font-bold">
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
