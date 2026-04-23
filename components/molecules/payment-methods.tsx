import Image from "next/image";
import { IconBox } from "@tabler/icons-react";

export const PaymentMethods = () => {
  return (
    <section className="flex-col-cc min-h-[800px] bg-[url('/images/cover-white-crosses.png')] bg-contain">
      <hgroup className="container-sm text-center my-20">
        <h1 className="text-5xl leading-13 font-bold text-[#136de8]">
          Futures markets finally made accessible!
        </h1>
        <h2 className="text-muted mt-5 px-10 text-[22px] leading-7 font-light">
          Discover a new way to trade with attractive day margins, and get
          access to a wide range of instruments.
          <br />
          Futures on S&P 500, NASDAQ 100, Bitcoin, EUR/USD, Oil, Gold, and many
          more!
        </h2>
        <h3 className="text-muted mt-5 text-[20px] font-bold">Futures On</h3>
      </hgroup>
      <ul className="flex-cc mt-10 gap-4">
        {data.map(({ icon, label }, i) => (
          <li
            key={i}
            className="outline-pri-btn btn btn-lg text-lg font-semibold hover:shadow-2xl"
          >
            {icon}
            {label}
          </li>
        ))}
      </ul>
      <figure className="flex-cc mt-20 mb-40">
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

const data = [
  { icon: <IconBox />, label: "Crypto" },
  { icon: <IconBox />, label: "Equity Index" },
  { icon: <IconBox />, label: "Energy" },
  { icon: <IconBox />, label: "Metals" },
  { icon: <IconBox />, label: "Forex" },
  { icon: <IconBox />, label: "Agriculture" },
  { icon: <IconBox />, label: "Interest Rates" },
];
