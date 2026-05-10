"use client";

import Link from "next/link";
import clsx from "clsx";
//
import { PATH } from "@/constants/PATH";
import { useMediaQuery } from "@/hooks/use-media-query";

interface Props {
  classNames?: {
    div?: string;
    btn1?: string;
    btn2?: string;
  };
}

export const CtaButtons = ({ classNames }: Props) => {
  const mq = useMediaQuery();
  //
  return (
    <div className={clsx(mq ? "grid" : "flex-cs", classNames?.div)}>
      <Link
        href={PATH.register}
        className={clsx("tonal-btn btn-lg btn", classNames?.btn1)}
      >
        {mq ? "Download the App" : "Start Trading Now"}
      </Link>
      <Link
        href={PATH.registerDemo}
        className={clsx("solid-btn btn-lg btn", classNames?.btn2)}
      >
        {mq ? "Try our Free Demo" : "Try FREE Demo"}
      </Link>
    </div>
  );
};
