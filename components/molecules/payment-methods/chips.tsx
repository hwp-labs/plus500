"use client";

import { IconBox } from "@tabler/icons-react";
import { useIsMobile } from "@/hooks/use-is-mobile";

export const Chips = () => {
  const isMobile = useIsMobile();
  //
  return (
    <div className="">
      <ul className="flex-cc mt-8 lg:mt-10 gap-4 overflow-x-auto lg:pb-8 pb-4">
        {data.map(({ icon, label }, i) => (
          <li
            key={i}
            className={
              isMobile
                ? "text-primary flex-col-cc _border h-[72px] rounded-lg px-2.5 text-lg font-semibold whitespace-nowrap shadow-2xl bg-white"
                : "outline-pri-btn btn btn-lg text-lg font-semibold"
            }
          >
            {icon}
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

const data = [
  { icon: <IconBox />, label: "Crypto" },
  { icon: <IconBox />, label: "Equity Index" },
  { icon: <IconBox />, label: "Energy" },
  { icon: <IconBox />, label: "Metals" },
  { icon: <IconBox />, label: "Forex" },
  { icon: <IconBox />, label: "Agriculture" },
  { icon: <IconBox />, label: "Interest Rates" },
];
