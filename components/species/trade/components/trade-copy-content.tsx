"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
//
import { SparklineChart } from "@/components/widgets/sparkline-chart";
import { OutlineBtn } from "../../dashboard/components/form-builder";
import { TradeCopyModal } from "./trade-copy-modal";
import {
  TransformedTraderDto,
  transformTrader,
  useTraders,
} from "@/hooks/use-traders";
import { MOCK } from "@/constants/MOCK";

const M  = MOCK.tradeCopy

export const TradeCopyContent = () => {
  const { rows } = useTraders();
  const [selected, setSelected] = useState<TransformedTraderDto | null>(null);

  useEffect(() => {
    if (M.portal && rows[0]) setSelected(transformTrader(rows[0]));
  }, []);
  //
  return (
    <>
      {selected && (
        <TradeCopyModal trader={selected} onClose={() => setSelected(null)} />
      )}
      <ul className="debug_ flex-cc mt-4 flex-wrap gap-8">
        {rows.map((row, i) => {
          const item = transformTrader(row);
          //
          return (
            <li
              key={i}
              className="bg-card w-full rounded-xl px-5 py-5 shadow-2xl sm:w-80"
            >
              <div className="flex-cb flex-wrap gap-4">
                <figure className="flex-cs gap-4">
                  <img
                    src={item.avatar}
                    alt=""
                    width={40}
                    className="border-muted rounded-full border-2 shadow-2xl"
                  />
                  <figcaption className="grid leading-3">
                    <strong className="text-lg text-white">
                      {item.username}
                    </strong>
                    <small>{item.market}</small>
                  </figcaption>
                </figure>
                <OutlineBtn
                  onClick={() => setSelected(item)}
                  className="bg-secondary! hover:bg-[#2e4f79]! border-none! px-4! text-white!"
                >
                  Copy
                </OutlineBtn>
              </div>
              <div className="">
                <SparklineChart value={item.change} />
              </div>
              <div className="flex-cb mt-2 flex-wrap">
                <div className="grid text-center">
                  <strong className={clsx("text-lg", item.changeColor)}>
                    {item.changeText}
                  </strong>
                  <small
                    dangerouslySetInnerHTML={{ __html: item.roiRichText }}
                  />
                </div>
                <div className="grid text-center">
                  <strong className="text-lg text-white">
                    {item.copiesText}
                  </strong>
                  <small>Copies</small>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
