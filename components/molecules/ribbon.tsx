import Image from "next/image";
// 
import { Hyperlink } from "../atoms/hyperlink";
import { APP } from "@/constants/APP";

export const Ribbon = () => {
  return (
    <section className="bg-[#040c29] text-white py-8">
      <figure className="flex-cb container">
        <Image
          src="/images/ribbon-pride.png"
          alt=""
          width={548}
          height={43}
          priority
        />
        <Hyperlink title="Play Store" href={APP.androidAppUrl}>
          <Image
            src="/images/google-play.png"
            alt=""
            width={144}
            height={42}
            priority
          />
        </Hyperlink>
      </figure>
    </section>
  );
};
