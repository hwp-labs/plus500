import Link from "next/link";
import { IconGift } from "@tabler/icons-react";
//
import { CtaButtons } from "../cta-buttons";
import { List } from "./list";
import { PATH } from "@/constants/PATH";

export const Benefits = () => {
  return (
    <section className="flex-col-cc relative z-1 min-h-[960px] skew-y-4 rounded-l-4xl bg-[url('/images/cover-blue-crosses.png')] bg-contain lg:skew-y-0 lg:rounded-none">
      <div className="flex-col-cc -skew-y-4 lg:skew-y-0">
        <h1 className="mx-auto w-[250px] lg:w-[768px] text-tertiary mt-12 text-center text-[26px] leading-8 font-medium lg:mt-40 lg:text-5xl lg:leading-12 lg:font-bold ">
          Benefits of Trading with Plus500
        </h1>
        <List />
        <div className="container-sm mt-5 px-10 lg:mt-10 lg:px-0">
          <CtaButtons
            classNames={{ div: "lg:gap-4 gap-2.5", btn2: "border-secondary" }}
          />
          <Link
            href={PATH.hash}
            className="outline-btn btn-lg btn mt-2.5 lg:mt-4"
          >
            <IconGift />
            Discover our bonuses
          </Link>
        </div>
        <div className="min-h-[80px] lg:min-h-[200px]"></div>
      </div>
    </section>
  );
};
