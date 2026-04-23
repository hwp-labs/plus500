import Image from "next/image";
//
import { Hyperlink } from "../atoms/hyperlink";
import { APP } from "@/constants/APP";

export const Ribbon = () => {
  return (
    <section>
      <div className="bg-[#040c29] py-8 text-white">
        <div className="flex-cb container">
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
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#040c29]/20 h-[80px]"></div>
    </section>
  );
};
