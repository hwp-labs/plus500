import Link from "next/link";
import Image from "next/image";
import { PATH } from "@/constants/PATH";

export const Ribbon = () => {
  return (
    <section className="flex-cb bg-[#040c29] text-white">
      <Image
        src="/images/pride.png"
        alt=""
        width={548}
        height={43}
        priority
      />
      <Image
        src="/images/google-play.png"
        alt=""
        width={144}
        height={42}
        priority
      />
    </section>
  );
};