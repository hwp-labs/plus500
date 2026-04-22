import Image from "next/image";
import Link from "next/link";
import { IconGift } from "@tabler/icons-react";
// 
import { CtaButtons } from "./cta-buttons";
import { PATH } from "@/constants/PATH";

export const TradingBenefits = () => {
  return (
    <section className="flex-col-cc min-h-[960px] bg-[url('/images/cover-blue-crosses.png')] bg-contain">
      <h1 className="container-sm text-tertiary mt-40 text-5xl leading-12 font-bold">
        Benefits of Trading with Plus500
      </h1>
      <ul className="flex-sb container flex-wrap text-white">
        {data.map(({ icon, title, description }, i) => (
          <li key={i} className="flex-col-cc mt-20 w-[390px] text-center">
            <figure className="flex-cc debug_ min-h-[110px]">
              <Image src={icon} alt="" width={100} height={100} />
            </figure>
            <h2 className="mt-5 text-[32px] font-light">{title}</h2>
            <p className="text-lg leading-6">{description}</p>
          </li>
        ))}
      </ul>
      <div className="container-sm mt-20">
        <CtaButtons className="gap-4" />
        <Link href={PATH.hash} className="outline-btn btn-lg btn mt-4">
          <IconGift />
          Discover our bonuses
        </Link>
      </div>
      <div className="min-h-[250px]"></div>
    </section>
  );
};

const data = [
  {
    icon: "/images/icon-easy-use.png",
    title: "Easy to Use",
    description:
      "Our app is designed for beginners and retail clients, helping to make your entry into Futures trading simpler than ever.",
  },
  {
    icon: "/images/icon-practice-perf.png",
    title: "Practice Makes Perfect",
    description:
      "Use our demo live quotes to build your strategy before trading real money.",
  },
  {
    icon: "/images/icon-swift-flow.png",
    title: "Swift Registration Flow",
    description: "Open an account safely and easily.",
  },
  {
    icon: "/images/icon-low-comm.png",
    title: "Low Commissions",
    description:
      "Enjoy 0 platform fees and 0 market data fees. You won't break your wallet with our low trading commissions!",
  },
  {
    icon: "/images/icon-wealth-exp.png",
    title: "Wealth of Experience",
    description:
      "With 20 years of experience in the U.S. market, we know all the ins and outs of Futures trading.",
  },
  {
    icon: "/images/icon-go-smaller.png",
    title: "Go Small or Even Smaller",
    description:
      "Open an account with as little as $100 and scale up when you're ready.",
  },
];
