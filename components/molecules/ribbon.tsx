import Image from "next/image";
import { Hyperlink } from "../atoms/hyperlink";
import { APP } from "@/constants/APP";

export const Ribbon = () => {
  return (
    <section className="bg-[#040c29] text-white">
      <div className="flex-cb container py-6">
        <Image
          src="/images/pride.png"
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
    </section>
  );
};
