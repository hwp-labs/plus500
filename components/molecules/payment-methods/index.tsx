import Image from "next/image";
import { Chips } from "./chips";

export const PaymentMethods = () => {
  return (
    <section className="bg-[url('/images/cover-white-crosses.png')] bg-contain flex lg:min-h-[800px] flex-col lg:items-center lg:justify-center">
      <hgroup className="container-sm text-center">
        <h1 className="px-3 text-[28px] leading-8 font-bold text-[#136de8] lg:text-5xl lg:leading-13">
          Futures markets finally made accessible!
        </h1>
        <h2 className="text-muted mt-5 px-10 leading-5 lg:text-[22px] lg:leading-7 lg:font-light">
          Discover a new way to trade with attractive day margins, and get
          access to a wide range of instruments.
          <br />
          Futures on S&P 500, NASDAQ 100, Bitcoin, EUR/USD, Oil, Gold, and many
          more!
        </h2>
        <h3 className="text-muted mt-5 text-[20px] font-bold">Futures On</h3>
      </hgroup>
      <Chips />
      <figure className="flex-cc lg:mt-20 mt-10 mb-20 px-5 lg:px-0">
        <Image
          src="/images/payment-methods.png"
          alt=""
          width={746}
          height={58}
        />
      </figure>
    </section>
  );
};
