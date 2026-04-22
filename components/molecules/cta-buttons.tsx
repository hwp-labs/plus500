import clsx from "clsx";
import Link from "next/link";
import { PATH } from "@/constants/PATH";

export const CtaButtons = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("flex-cs", className)}>
      <Link href={PATH.register} className="tonal-btn btn-lg btn">
        Start Trading Now
      </Link>
      <Link
        href={PATH.register + "?demo=true"}
        className="solid-btn btn-lg btn"
      >
        Try FREE Demo
      </Link>
    </div>
  );
};
