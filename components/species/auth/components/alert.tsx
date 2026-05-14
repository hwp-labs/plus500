"use client";

import { PropsWithChildren, useState } from "react";
import { IconX } from "@tabler/icons-react";
import clsx from "clsx";
//
import { colorVariantBg, ColorVariantType } from "@/types/color-type";
interface AlertProps extends PropsWithChildren {
  variant?: ColorVariantType;
}

export const Alert = ({ children, variant = "danger" }: AlertProps) => {
  const [show, setShow] = useState(true);
  //
  return show ? (
    <div
      className={clsx(
        "flex-sb font-roboto mt-4 px-2.5 py-3 text-[#fefafd]",
        colorVariantBg(variant),
      )}
    >
      {children}
      <IconX
        onClick={() => setShow(false)}
        title="Cancel"
        className="min-w-[24px] cursor-pointer"
      />
    </div>
  ) : null;
};
