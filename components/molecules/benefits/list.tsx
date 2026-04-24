import Image from "next/image";

export const List = () => {
  return (
    <ul className="container mt-0 grid text-white lg:mt-8 lg:grid-cols-3">
      {data.map(({ icon, title, description }, i) => (
        <li key={i} className="debug_ px-5 py-10 lg:px-8 lg:py-12">
          <figure className="_debug">
            <div className="flex-cc min-h-[110px]">
              <Image src={icon} alt="" width={100} height={100} />
            </div>
            <figcaption className="mt-5 text-center">
              <h2 className="text-[26px] font-light lg:text-[32px]">{title}</h2>
              <p className="text-lg leading-6">{description}</p>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
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
