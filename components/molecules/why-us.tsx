import Image from "next/image";

export const WhyUs = () => {
  return (
    <section className="">
      <div className="from-primary container -rotate-6 rounded-2xl bg-gradient-to-r to-[#112c86]/90 p-2">
        <div className="border-secondary rounded-2xl border-2">
          <div className="flex-col-cc min-h-[700px] rotate-6">
            <h1 className="text-tertiary text-5xl leading-12 font-bold">
              Why Us?
            </h1>
            <ul className="debug_ my-10 grid grid-cols-2 text-white">
              {data.map(({ icon, title, description }, i) => (
                <li key={i} className="px-14 py-12">
                  <figure className="debug_ flex-sx gap-12">
                    <Image src={icon} alt="" width={100} height={100} />
                    <figcaption className="space-y-4">
                      <h2 className="text-[32px] leading-6 font-light">
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
