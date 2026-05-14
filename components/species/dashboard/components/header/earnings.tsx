"use client";

import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useFetchUser } from "@/hooks/use-fetch-user";
import { asMoney } from "@/utils";
import { CURRENCY } from "@/constants/CURRENCY";

export const Earnings = () => {
  const { data } = useFetchUser();
  //
  return (
    <ul className="flex-cb flex-1 gap-4">
      {[
        { value: data.available, label: "Available" },
        { value: data.equity, label: "Equity" },
        { value: data.m_margin, label: "Mtn. Margin" },
        { value: data.profit_loss, label: "Profit/Loss" },
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
