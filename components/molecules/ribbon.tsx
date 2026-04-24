import Image from "next/image";
import { GooglePlayButton } from "../atoms/google-play-button";

export const Ribbon = () => {
  return (
    <section className="show-lg-block">
      <div className="bg-[#040c29] py-8 text-white">
        <div className="flex-cb container">
          <Image
            src="/images/ribbon-pride.png"
            alt=""
            width={548}
            height={43}
            priority
          />
          <GooglePlayButton />
        </div>
      </div>
      <div className="h-[80px] bg-gradient-to-b from-[#040c29]/20"></div>
    </section>
  );
};
