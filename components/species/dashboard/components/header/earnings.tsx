"use client";

import { IconEye, IconEyeOff } from "@tabler/icons-react";
//
import { asMoney } from "@/utils";
import { CURRENCY } from "@/constants/CURRENCY";
import { useEffect } from "react";

export const Earnings = () => {
  useEffect(() => {}, []);
  // 
  return (
    <ul className="flex-cb flex-1 gap-4">
      {[
        { value: 38730.68, label: "Available" },
        { value: 39963.85, label: "Equity" },
        { value: 616.58, label: "Mtn. Margin" },
        { value: -36.15, label: "Profit/Loss" },
      ].map((item, i) => (
        <li key={i} className="whitespace-nowrap">
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
  onToggle: () => void;
}

export const EarningsToggle = ({ show, onToggle }: EarningsToggleProps) => (
  <button
    onClick={onToggle}
    title={`${show ? "Hide" : "Show"} Earnings`}
    className="cursor-pointer"
  >
    {show ? <IconEyeOff /> : <IconEye />}
  </button>
);
