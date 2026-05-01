"use client";

import { TableBuilder } from "@/components/species/dashboard/components/table-builder";
import { OutlineBtn } from "@/components/species/dashboard/components/form-builder";
import { TableAction } from "@/components/species/dashboard/components/table-builder/action";
import { APP_STORE, useAppStore } from "@/store/app-store";
//
import { Empty } from "./empty";
import data from "./data.json";

export const TableContent = () => {
  const filter = useAppStore((s) => s.filter);
  const setInstrument = useAppStore((s) => s.setInstrument);
  //
  return (
    <div className="bg-background h-[400px] flex-1 overflow-y-auto">
      {filter === APP_STORE.filter ? (
        <table className="w-full">
          <TableBuilder.THead
            data={[
              "Instrument",
              "Change|c",
              "Sell|c",
              "",
              "Buy|c",
              "",
              "High/Low|c",
            ]}
            hasActions
          />
          <TableBuilder.TBody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <TableBuilder.Amount
                  value={item.change}
                  suffix="%"
                  tc
                  colored
                />
                <TableBuilder.Amount value={item.sell} tc colored />
                <TableBuilder.Tc>
                  <OutlineBtn
                    onClick={() => setInstrument(item.name, "sell")}
                    className="py-1!"
                  >
                    Sell
                  </OutlineBtn>
                </TableBuilder.Tc>
                <TableBuilder.Amount value={item.buy} tc colored />
                <TableBuilder.Tc>
                  <OutlineBtn
                    onClick={() => setInstrument(item.name, "buy")}
                    className="py-1!"
                  >
                    Buy
                  </OutlineBtn>
                </TableBuilder.Tc>
                <TableBuilder.Tc>{item.range}</TableBuilder.Tc>
                <TableAction
                  hasStar
                  hasBell
                  hasInfo
                  onClickInfo={() => setInstrument(item.name)}
                />
              </tr>
            ))}
          </TableBuilder.TBody>
        </table>
      ) : (
        <Empty />
      )}
    </div>
  );
};
