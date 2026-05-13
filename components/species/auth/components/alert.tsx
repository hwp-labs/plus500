"use client";

import { PropsWithChildren, useState } from "react";
import { IconX } from "@tabler/icons-react";
import clsx from "clsx";
//
import { colorVariantBg, ColorVariantType } from "@/types";
import { MOCK } from "@/constants/MOCK";

const form = MOCK.auth.portal;
interface AlertProps extends PropsWithChildren {
  defaultShow?: boolean;
  variant?: ColorVariantType;
}

export const Alert = ({
  children,
  defaultShow,
  variant = "danger",
}: AlertProps) => {
  const [show, setShow] = useState(defaultShow || Boolean(form));
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
