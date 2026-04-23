import Image from "next/image";
import Link from "next/link";
import { IconGift } from "@tabler/icons-react";
//
import { CtaButtons } from "./cta-buttons";
import { PATH } from "@/constants/PATH";

export const Benefits = () => {
  return (
    <section className="flex-col-cc min-h-[960px] bg-[url('/images/cover-blue-crosses.png')] bg-contain">
      <h1 className="container-sm text-tertiary mt-40 text-5xl leading-12 font-bold">
        Benefits of Trading with Plus500
      </h1>
      <ul className="container mt-8 grid grid-cols-3 text-white">
        {data.map(({ icon, title, description }, i) => (
          <li key={i} className="px-8 py-12">
            <figure className="_debug">
              <div className="flex-cc min-h-[110px]">
                <Image src={icon} alt="" width={100} height={100} />
              </div>
              <figcaption className="mt-5 text-center">
                <h2 className="text-[32px] font-light">{title}</h2>
                <p className="text-lg leading-6">{description}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className="container-sm mt-10">
        <CtaButtons className="gap-4" classNameBtn2="border-secondary" />
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
    icon: "/images/icon-easy.png",
    title: "Easy to Use",
    description:
      "Our app is designed for beginners and retail clients, helping to make your entry into Futures trading simpler than ever.",
  },
  {
    icon: "/images/icon-perfect.png",
    title: "Practice Makes Perfect",
    description:
      "Use our demo live quotes to build your strategy before trading real money.",
  },
  {
    icon: "/images/icon-swift.png",
    title: "Swift Registration Flow",
    description: "Open an account safely and easily.",
  },
  {
    icon: "/images/icon-commissions.png",
    title: "Low Commissions",
    description:
      "Enjoy 0 platform fees and 0 market data fees. You won't break your wallet with our low trading commissions!",
  },
  {
    icon: "/images/icon-experience.png",
    title: "Wealth of Experience",
    description:
      "With 20 years of experience in the U.S. market, we know all the ins and outs of Futures trading.",
  },
  {
    icon: "/images/icon-smaller.png",
    title: "Go Small or Even Smaller",
    description:
      "Open an account with as little as $100 and scale up when you're ready.",
  },
];
