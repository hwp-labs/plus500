"use client";

import { PropsWithChildren } from "react";
import clsx from "clsx";
//
import { usePopupWindow } from "@/hooks/use-popup-window";
import { data } from "./data";

export const OAuthButtons = ({ children }: PropsWithChildren) => {
  const open = usePopupWindow();
  //
  return (
    <div className="flex-col-cc debug_ gap-4">
      <p className="text-ash5 text-xl">{children}</p>
      <ul className="flex-cc gap-6">
        {data.map(({ url, icon }, i) => {
          const lastButton = i === data.length - 1;
          //
          return (
            <li
              key={i}
              className="flex-cc size-10 cursor-pointer rounded border border-[#dfdfdf] transition-colors hover:border-[#768496] hover:bg-[#eaf3ff]"
              onClick={() => open(url)}
            >
              <i className={clsx("size-4", lastButton && "-mt-1.5")}>{icon}</i>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
