import { PropsWithChildren } from "react";
import clsx from "clsx";

interface ButtonProps extends PropsWithChildren {
  className?: string;
}

const Button = ({ children, className }: ButtonProps) => (
  <button
    className={clsx(
      "border-ash5 text-ash3 cursor-pointer rounded-full border-2 px-6 py-1.5 text-xs font-medium",
      className,
    )}
  >
    {children}
  </button>
);

export const FormBuilder = { Button };
