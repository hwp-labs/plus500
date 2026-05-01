"use client";

import { TableBuilder } from "@/components/species/dashboard/components/table-builder";
import { OutlineBtn } from "@/components/species/dashboard/components/form-builder";
import { APP_STORE, useAppStore } from "@/store/app-store";
//
import { Empty } from "./empty";
import data from "../../data.json";

export const TableContent = () => {
  const filter = useAppStore((s) => s.filter);
  //
  return (
    <div className="bg-background h-[340px] flex-1 overflow-y-auto">
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
                  <OutlineBtn className="py-1!">Sell</OutlineBtn>
                </TableBuilder.Tc>
                <TableBuilder.Amount value={item.buy} tc colored />
                <TableBuilder.Tc>
                  <OutlineBtn className="py-1!">Buy</OutlineBtn>
                </TableBuilder.Tc>
                <TableBuilder.Tc>{item.range}</TableBuilder.Tc>
                <TableBuilder.Action hasStar hasBell hasInfo />
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
