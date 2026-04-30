import { PropsWithChildren } from "react";
import { asMoney } from "@/utils";
import clsx from "clsx";

interface Props extends PropsWithChildren {
  sell?: number;
  buy?: number;
}

export const InfoCta = ({ sell, buy }: Props) => {
  return (
    <div className="flex-cb gap-2">
      {renderCard("Sell", sell)}
      {renderCard("Buy", buy, true)}
    </div>
  );
};

const renderCard = (label: string, value?: number, danger?: boolean) => (
  <div className="flex-col-cc border-ash5 h-18 flex-1 gap-0 border-2 rounded-sm_">
    <strong className="text-xs">{label}</strong>
    <span className={clsx("text-2xl leading-7", danger && "text-danger")}>
      {asMoney(value)}
    </span>
  </div>
);
