"use client";

import { Dispatch, SetStateAction } from "react";
import { IconEye, IconEyeOff, IconSearch } from "@tabler/icons-react";
// 
import { asMoney } from "@/utils";
import { CURRENCY } from "@/constants/CURRENCY";

export const Earnings = () => {
  return (
    <ul className="flex-cb flex-1 gap-4">
      {[
        { value: 38730.68, label: "Available" },
        { value: 39963.85, label: "Equity" },
        { value: 616.58, label: "M. Margin" },
        { value: -36.15, label: "Profit/Loss" },
      ].map((item, i) => (
        <li key={i}>
          <div className="font-medium">
            {CURRENCY.Euro.symbol}
            {asMoney(item.value)}
          </div>
          <div className="text-ash3 text-xs">{item.label}</div>
        </li>
      ))}
    </ul>
  );
};

interface EarningsToggleProps {
  show?: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export const EarningsToggle = ({ show, setShow }: EarningsToggleProps) => (
  <button
    onClick={() => setShow((s) => !s)}
    title={`${show ? "Hide" : "Show"} Earnings`}
    className="cursor-pointer"
  >
    {show ? <IconEyeOff /> : <IconEye />}
  </button>
);
