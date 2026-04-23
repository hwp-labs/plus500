import clsx from "clsx";
import Link from "next/link";
import { PATH } from "@/constants/PATH";

interface Props {
  className?: string;
  classNameBtn1?: string;
  classNameBtn2?: string;
}

export const CtaButtons = ({
  className,
  classNameBtn1,
  classNameBtn2,
}: Props) => {
  return (
    <div className={clsx("flex-cs", className)}>
      <Link
        href={PATH.register}
        className={clsx("tonal-btn btn-lg btn", classNameBtn1)}
      >
        Start Trading Now
      </Link>
      <Link
        href={PATH.register + "?demo=true"}
        className={clsx("solid-btn btn-lg btn", classNameBtn2)}
      >
        Try FREE Demo
      </Link>
    </div>
  );
};
