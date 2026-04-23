import Image from "next/image";
//
import { Hyperlink } from "./hyperlink";
import { APP } from "@/constants/APP";

interface Props {
  classNames?: { a?: string; img?: string };
}

export const GooglePlayButton = ({ classNames }: Props) => {
  return (
    <Hyperlink
      title="Play Store"
      href={APP.androidAppUrl}
      className={classNames?.a}
    >
      <Image
        src="/images/google-play.png"
        alt=""
        width={144}
        height={42}
        priority
        className={classNames?.img}
      />
    </Hyperlink>
  );
};
