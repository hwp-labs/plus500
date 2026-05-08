"use client";

import { useEffect } from "react";
import { TableBuilder } from "@/components/species/dashboard/components/table-builder";
import { OutlineBtn } from "@/components/species/dashboard/components/form-builder";
import { TableAction } from "@/components/species/dashboard/components/table-builder/action";
import { DASHBOARD_STORE, useDashboardStore } from "@/store/dashboard-store";
//
import { Empty } from "./empty";
import data from "./data.json";

export const TableContent = () => {
  const reset = useDashboardStore((s) => s.reset);
  const filter = useDashboardStore((s) => s.filter);
  const setInstrument = useDashboardStore((s) => s.setInstrument);

  useEffect(() => {
    reset();
  }, []);
  //
  return (
    <div className="bg-background h-[400px] flex-1 overflow-y-auto">
      {filter === DASHBOARD_STORE.filter ? (
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
