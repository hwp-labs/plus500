import Image from "next/image";
import { IconBox } from "@tabler/icons-react";

export const PaymentMethods = () => {
  return (
    <section className="flex-col-cc bg-[url('/images/cover-white-crosses.png')] bg-contain lg:min-h-[800px]">
      <hgroup className="container-sm text-center lg:my-20">
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
      {/* <div className="overflow-x-auto debug overflow-clip">
        <ul className="flex-cc mt-10 gap-4 flex-nowrap overflow-clip">
          {data.map(({ icon, label }, i) => (
            <li
              key={i}
              className="text-primary flex-col-cc _border h-[72px] rounded-lg px-2.5 text-lg font-semibold whitespace-nowrap shadow-2xl"
            >
              {icon}
              {label}
            </li>
          ))}
        </ul>
      </div> */}
      {/* <ul className="flex-cc mt-10 gap-4">
        {data.map(({ icon, label }, i) => (
          <li
            key={i}
            className="outline-pri-btn btn btn-lg text-lg font-semibold hover:shadow-2xl"
          >
            {icon}
            {label}
          </li>
        ))}
      </ul>*/}
      <figure className="flex-cc mt-20 px-5 lg:px-0">
        <Image
          src="/images/payment-methods.png"
          alt=""
          width={746}
          height={58}
        />
      </figure> 
      <div className="lg:min-h-[150px] min-h-[90px]"></div>
    </section>
  );
};

const data = [
  { icon: <IconBox />, label: "Crypto" },
  { icon: <IconBox />, label: "Equity Index" },
  { icon: <IconBox />, label: "Energy" },
  { icon: <IconBox />, label: "Metals" },
  { icon: <IconBox />, label: "Forex" },
  { icon: <IconBox />, label: "Agriculture" },
  { icon: <IconBox />, label: "Interest Rates" },
];
