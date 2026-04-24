import Image from "next/image";

export const Sponsors = () => {
  return (
    <section className="flex-col-cc px-4 lg:px-0">
      <div className="lg:min-h-[280px] min-h-[100px]"></div>
      <hgroup className="space-y-2 text-center">
        <h1 className="text-primary text-[22px] leading-5 font-light lg:text-[32px] lg:leading-9">
          We
        </h1>
        <h2 className="text-tertiary text-[28px] leading-5 font-semibold lg:text-[48px] lg:leading-9">
          Sponsor
        </h2>
      </hgroup>
      <ul className="mt-10 grid grid-cols-3 lg:gap-12 gap-2 lg:mt-30">
        {data.map(({ uniform, logo, width, height }, i) => (
          <li key={i} className="flex flex-col items-center justify-center lg:justify-between group">
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
              className="scale-60 lg:opacity-40 lg:grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 lg:scale-100"
            />
          </li>
        ))}
      </ul>
      <div className="lg:min-h-[120px] min-h-[80px]"></div>
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
