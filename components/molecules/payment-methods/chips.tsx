"use client";

import { IconBox } from "@tabler/icons-react";
import { useMediaQuery } from "@/hooks/use-media-query";

export const Chips = () => {
  const isMobile = useMediaQuery();
  //
  return (
    <div className="">
      <ul className="flex-cc mt-8 gap-4 overflow-x-auto pb-4 lg:mt-10 lg:pb-8">
        {data.map(({ icon, label }, i) => (
          <li
            key={i}
            className={
              isMobile
                ? "text-primary flex-col-cc _border h-[72px] rounded-lg bg-white px-2.5 text-lg font-semibold whitespace-nowrap shadow-2xl"
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
