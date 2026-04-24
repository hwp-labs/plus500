import Image from "next/image";
import Link from "next/link";
import { IconGift } from "@tabler/icons-react";
//
import { CtaButtons } from "./cta-buttons";
import { PATH } from "@/constants/PATH";

export const Benefits = () => {
  return (
    <section className="flex-col-cc lg:rounded-none min-h-[960px] skew-y-4 rounded-l-4xl bg-[url('/images/cover-blue-crosses.png')] bg-contain lg:skew-y-0">
      <div className="flex-col-cc -skew-y-4 lg:skew-y-0">
        <h1 className="container-sm text-secondary lg:text-tertiary mt-20 text-center text-[32px] leading-10 font-semibold lg:mt-40 lg:text-5xl lg:leading-12 lg:font-bold">
          Benefits of Trading with Plus500
        </h1>
        <ul className="container mt-0 grid text-white lg:mt-8 lg:grid-cols-3">
          {data.map(({ icon, title, description }, i) => (
            <li key={i} className="debug_ px-5 py-10 lg:px-8 lg:py-12">
              <figure className="_debug">
                <div className="flex-cc min-h-[110px]">
                  <Image src={icon} alt="" width={100} height={100} />
                </div>
                <figcaption className="mt-5 text-center">
                  <h2 className="text-[26px] font-light lg:text-[32px]">
                    {title}
                  </h2>
                  <p className="text-lg leading-6">{description}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <div className="container-sm mt-5 px-10 lg:mt-10 lg:px-0">
          <CtaButtons
            classNames={{ div: "lg:gap-4 gap-2.5", btn2: "border-secondary" }}
          />
          <Link
            href={PATH.hash}
            className="outline-btn btn-lg btn mt-2.5 lg:mt-4"
          >
            <IconGift />
            Discover our bonuses
          </Link>
        </div>
        <div className="min-h-[80px] lg:min-h-[200px]"></div>
      </div>
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
