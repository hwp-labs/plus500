import Image from "next/image";

export const Sponsors = () => {
  return (
    <section className="flex-col-cc debug_">
      <div className="min-h-[280px]"></div>
      <hgroup className="space-y-2 text-center">
        <h1 className="text-primary text-[32px] leading-9 font-light">We</h1>
        <h2 className="text-tertiary text-[48px] leading-9 font-semibold">
          Sponsor
        </h2>
      </hgroup>
      <ul className="mt-30 grid grid-cols-3 gap-12">
        {data.map(({ uniform, logo, width, height }, i) => (
          <li key={i} className="flex-col-cb group">
            <Image
              src={uniform}
              alt=""
              width={360}
              height={485}
              className="cursor-pointer transition-all duration-300 group-hover:scale-120"
            />
            <Image
              src={logo}
              alt=""
              width={width}
              height={height}
              className="opacity-40 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
            />
          </li>
        ))}
      </ul>
      <div className="min-h-[120px]"></div>
    </section>
  );
};

const data = [
  {
    uniform: "/images/uniform-legia.png",
    logo: "/images/logo-legia.png",
    width: 125,
    height: 130,
  },
  {
    uniform: "/images/uniform-chicago.png",
    logo: "/images/logo-chicago.png",
    width: 121,
    height: 129,
  },
  {
    uniform: "/images/uniform-bsc.png",
    logo: "/images/logo-bsc.png",
    width: 147,
    height: 128,
  },
];
