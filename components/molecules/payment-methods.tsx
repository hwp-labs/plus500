import Image from "next/image";
import { IconBox } from "@tabler/icons-react";

const data = [
  { icon: <IconBox />, label: "Crypto" },
  { icon: <IconBox />, label: "Equity Index" },
  { icon: <IconBox />, label: "Energy" },
  { icon: <IconBox />, label: "Metals" },
  { icon: <IconBox />, label: "Forex" },
  { icon: <IconBox />, label: "Agriculture" },
  { icon: <IconBox />, label: "Interest Rates" },
];

export const PaymentMethods = () => {
  return (
    <section className="flex-col-cc min-h-[800px] space-y-5 bg-[url('/images/white-crosses.png')] bg-contain bg-no-repeat">
      <hgroup className="max-w-2xl space-y-5 text-center">
        <h1 className="text-5xl leading-12 font-bold text-[#136de8]">
          Futures markets finally made accessible!
        </h1>
        <h2 className="text-[22px] leading-7 font-light text-[#555]">
          Discover a new way to trade with attractive day margins, and get
          access to a wide range of instruments.
          <br />
          Futures on S&P 500, NASDAQ 100, Bitcoin, EUR/USD, Oil, Gold, and many
          more!
        </h2>
        <h3 className="text-[20px] font-bold text-[#555]">Futures On</h3>
      </hgroup>
      <ul className="flex-cc mt-5 gap-5">
        {data.map(({ icon, label }, i) => (
          <li
            key={i}
            className="border-primary text-primary btn gap-2 rounded-lg border px-5 py-3.5 text-lg font-semibold"
          >
            <div>{icon}</div>
            <div>{label}</div>
          </li>
        ))}
      </ul>
      <figure className="flex-cc mt-16">
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
