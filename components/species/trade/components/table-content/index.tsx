"use client";

import { useEffect } from "react";
import { TableBuilder } from "@/components/species/dashboard/components/table-builder";
import { OutlineBtn } from "@/components/species/dashboard/components/form-builder";
import { TableAction } from "@/components/species/dashboard/components/table-builder/action";
import { useMediaQuery } from "@/hooks/use-media-query";
import { DASHBOARD_STORE, useDashboardStore } from "@/store/dashboard-store";
//
import { Empty } from "./empty";
import data from "./data.json";

export const TableContent = () => {
  const mq = useMediaQuery();
  const open = useDashboardStore((s) => s.open);
  const reset = useDashboardStore((s) => s.reset);
  const filter = useDashboardStore((s) => s.filter);
  const setInstrument = useDashboardStore((s) => s.setInstrument);

  useEffect(() => {
    reset();
  }, []);
  //
  return open ? null : (
    <div className="h-[400px] flex-1 overflow-y-auto">
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
              <TableBuilder.Tr key={i}>
                <td>{item.name}</td>
                <TableBuilder.Amount
                  value={item.change}
                  suffix="%"
                  tc
                  colored
                />
                <TableBuilder.Amount value={item.sell} tc colored />
                <TableBuilder.Tdc>
                  <OutlineBtn
                    onClick={() => setInstrument(item.name, "sell")}
                    className="py-1!"
                  >
                    Sell
                  </OutlineBtn>
                </TableBuilder.Tdc>
                <TableBuilder.Amount value={item.buy} tc colored />
                <TableBuilder.Tdc>
                  <OutlineBtn
                    onClick={() => setInstrument(item.name, "buy")}
                    className="py-1!"
                  >
                    Buy
                  </OutlineBtn>
                </TableBuilder.Tdc>
                <TableBuilder.Tdc>{item.range}</TableBuilder.Tdc>
                <TableAction
                  hasStar
                  hasBell
                  hasInfo
                  onInfo={() => setInstrument(item.name)}
                />
              </TableBuilder.Tr>
            ))}
          </TableBuilder.TBody>
        </table>
      ) : (
        <Empty />
      )}
    </div>
  );
};
