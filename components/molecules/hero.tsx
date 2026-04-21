import Link from "next/link";
import Image from "next/image";
import { PATH } from "@/constants/PATH";

export const Hero = () => {
  return (
    <section className="bg-primary bg-[url('/images/hero.png')] bg-cover bg-center text-white">
      <div className="flex-cs container min-h-[600px] px-6">
        <div className="max-w-2xl">
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
  <hgroup className="text-[40px] leading-12 font-bold font-f2">
    <h1 className="">Volatility fuels markets</h1>
    <h1 className="text-tertiary">Ride the Oil & Gold wave</h1>
  </hgroup>
);

const renderDescription = (
  <h2 className="mt-5 text-3xl text-[#82b6fe] font-f2">
    Trade Futures & Prediction Markets in one app.
  </h2>
);

const renderCta = (
  <div className="my-10 space-x-6">
    <Link href={PATH.register} className="tonal-btn btn-lg btn">
      Start Trading Now
    </Link>
    <Link href={PATH.register + "?demo=true"} className="solid-btn btn-lg btn">
      Try FREE Demo
    </Link>
  </div>
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
