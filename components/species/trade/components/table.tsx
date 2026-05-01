"use client";

import { StarIcon } from "lucide-react";
import { OutlineBtn } from "../../dashboard/components/form-builder";
import { TableBuilder } from "../../dashboard/components/table-builder";
import data from "../data.json";

export const TableContent = () => {
  return (
    <div className="bg-background h-[340px] flex-1 overflow-y-auto">
      {M ? (
        renderEmpty
      ) : (
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
      )}
    </div>
  );
};


const renderEmpty = (
  <div className="flex-col-cc debug_ mx-auto size-full w-80 gap-2 text-center">
    <StarIcon size={44} strokeWidth={2} className="text-muted" />
    <h2 className="text-lg font-semibold">You have no favorite instruments</h2>
    <p className="text-ash4">
      Mark your preferred instruments as <strong>`Favorites`</strong> to access
      them quickly through your Favorites list.
    </p>
  </div>
);
