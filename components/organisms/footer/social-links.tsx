import Image from "next/image";
import { GooglePlayButton } from "@/components/atoms/google-play-button";

export const SocialLinks = () => {
  return (
    <div className="flex flex-1 flex-col items-center lg:items-start">
      <p>Follow Us On</p>
      <ul className="flex-cs mt-4 gap-4">
        {data.map((item, i) => (
          <li key={i}>
            <Image src={item} alt="" width={24} height={24} />
          </li>
        ))}
      </ul>
      <GooglePlayButton
        classNames={{ a: "mt-10 lg:mt-20 inline-block", img: "w-[207px]" }}
      />
    </div>
  );
};

const data = [
  "/images/icon-app-fb.png",
  "/images/icon-app-x.png",
  "/images/icon-app-ig.png",
  "/images/icon-app-in.png",
  "/images/icon-app-yt.png",
  "/images/icon-app-tg.png",
  "/images/icon-app-tk.png",
];
