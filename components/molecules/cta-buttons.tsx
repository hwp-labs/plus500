"use client";

import Link from "next/link";
import clsx from "clsx";
//
import { PATH } from "@/constants/PATH";
import { useIsMobile } from "@/hooks/use-is-mobile";

interface Props {
  classNames?: {
    div?: string;
    btn1?: string;
    btn2?: string;
  };
}

export const CtaButtons = ({ classNames }: Props) => {
  const isMobile = useIsMobile();
  //
  return (
    <div className={clsx(isMobile ? "grid" : "flex-cs", classNames?.div)}>
      <Link
        href={PATH.register}
        className={clsx("tonal-btn btn-lg btn", classNames?.btn1)}
      >
        {isMobile ? "Download the App" : "Start Trading Now"}
      </Link>
      <Link
        href={PATH.register + "?demo=true"}
        className={clsx("solid-btn btn-lg btn", classNames?.btn2)}
      >
        {isMobile ? "Try our Free Demo" : "Try FREE Demo"}
      </Link>
    </div>
  );
};
