import Image from "next/image";

export const WhyUs = () => {
  return (
    <section className="">
      <div className="from-primary container skew-y-4 rounded-2xl bg-gradient-to-b to-[#112c86]/90 p-2 lg:-rotate-6 lg:skew-y-0 lg:bg-gradient-to-r">
        <div className="border-secondary rounded-2xl border-2">
          <div className="flex-col-cc mt-16 min-h-[700px] -skew-y-4 lg:mt-0 lg:rotate-6 lg:-skew-y-0">
            <h1 className="lg:text-tertiary text-secondary text-3xl leading-12 font-bold lg:text-5xl">
              Why Us?
            </h1>
            <ul className="my-10 grid text-white lg:grid-cols-2">
              {data.map(({ icon, title, description }, i) => (
                <li key={i} className="px-6 py-4 lg:px-14 lg:py-12">
                  <figure className="debug_ flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:gap-12">
                    <Image
                      src={icon}
                      alt=""
                      width={160}
                      height={160}
                      className="scale-50 lg:scale-100"
                    />
                    <figcaption className="space-y-4 text-center lg:text-left">
                      <h2 className="text-[28px] leading-3 lg:text-[32px] lg:leading-6 lg:font-light">
                        {title}
                      </h2>
                      <p className="text-lg leading-6">{description}</p>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const data = [
  {
    icon: "/images/icon-support.png",
    title: "Professional Support",
    description: "24/7 customer support at your disposal.",
  },
  {
    icon: "/images/icon-reputable.png",
    title: "Reputable",
    description:
      "With over four decades of experience in the field, our firm is a full member of the CME Group and the National Futures Association.",
  },
  {
    icon: "/images/icon-secure.png",
    title: "Protected & Secure",
    description:
      "We follow regulatory requirements to the letter, keeping your data safe and your funds in segregated accounts.",
  },
  {
    icon: "/images/icon-reliable.png",
    title: "Reliable",
    description:
      "Plus500 Ltd is listed on the London Stock Exchange's Main Market for Listed Companies & included in the FTSE 250.",
  },
];
