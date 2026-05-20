import { useEffect, useState } from "react";
import { asMoney } from "@/utils";
import traders from "@/data/traders.json";

export interface TraderDto {
  username: string;
  market: string;
  change: number;
  copies: number;
  roi: number;
  avatar: string;
}

export interface TransformedTraderDto extends TraderDto {
  changeText: string;
  changeColor: string;
  changeColorBg: string;
  changeRiskText: string;
  copiesText: string;
  roiRichText: string;
}

const shuffle = <T>(arr: T[]) => [...arr].sort(() => Math.random() - 0.5);

export function useTraders() {
  // local rows state so we can mutate / randomize values for demo/live updates
  const [rows, setRows] = useState(() => shuffle(traders as TraderDto[]));

  // randomize numeric fields every 1 second
  useEffect(() => {
    const id = setInterval(mutateRows, 3000);
    return () => clearInterval(id);
  }, []);

  const mutateRows = () => {
    const newRows = rows.map((item) => {
      const changeDelta = +((Math.random() - 0.5) * 2).toFixed(2); // -1.00 .. 1.00
      const change = +(Number(item.change ?? 0) + changeDelta).toFixed(2);

      return {
        ...item,
        change,
      };
    });

    setRows(newRows);
  };

  return { rows };
}

export const transformTrader = (t: TraderDto) => {
  const changeSign = t.change > 0 ? "+" : "";
  const changeText = changeSign + t.change + "%";
  const changeColor =
    t.change > 0 ? "text-success!" : t.change < 0 ? "text-danger!" : "";
  const changeColorBg =
    t.change > 0 ? "bg-success!" : t.change < 0 ? "bg-danger!" : "";
  const changeRiskText = t.change > 0 ? "Low" : "High";

  const copiesText = asMoney(t.copies, true);

  const roiRichText = `<abbr title="Return On Investment">ROI</abbr> (${t.roi}D)`;

  return { ...t, changeText, changeColor, changeColorBg, changeRiskText, copiesText, roiRichText };
};
