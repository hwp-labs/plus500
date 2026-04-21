"use client";

import { PropsWithChildren, useState } from "react";
import { IconX } from "@tabler/icons-react";
import clsx from "clsx";
//
import { ErrorVariantType } from "@/types";

interface AlertProps extends PropsWithChildren {
  variant?: ErrorVariantType;
}

export const Alert = ({ children, variant = "danger" }: AlertProps) => {
  const [show, setShow] = useState(children ? true : false);
  //
  return show ? (
    <div
      className={clsx(
        "flex-sb font-roboto px-2.5 py-3 text-[#fefafd] mt-5",
        {
          info: "bg-info",
          success: "bg-success",
          warning: "bg-warning",
          danger: "bg-danger",
        }[variant],
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
