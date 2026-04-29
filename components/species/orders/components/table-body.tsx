"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import clsx from "clsx";
//
import { TableBuilder } from "@/components/species/dashboard/components/table-builder";
import { data } from "../utils";

export const TableBody = () => {
  const [collapsed, setCollapsed] = useState(true);
  //
  return (
    <TableBuilder.TBody>
      <tr>
        <td colSpan={9}>
          <div
            onClick={() => setCollapsed((s) => !s)}
            className={clsx(
              "flex-cb hover:bg-secondary cursor-pointer p-2",
              collapsed ? "bg-secondary" : "bg-aside",
            )}
          >
            <p className="flex-cs gap-2">
              {collapsed ? (
                <ChevronDownIcon size={18} strokeWidth={3} />
              ) : (
                <ChevronRightIcon size={18} strokeWidth={3} />
              )}
              Executed
            </p>
            <p>Last 72 Hours</p>
          </div>
        </td>
      </tr>
      {collapsed
        ? data.map((item, i) => (
            <tr key={i}>
              <TableBuilder.BuyBr text={item.type} />
              <TableBuilder.Amount currency="usd" value={item.value} />
              <TableBuilder.ObjBr
                data={{
                  "Order rate": item.rates.order,
                  "Current rate": item.rates.current,
                }}
              />
              <TableBuilder.Amount value={item.amount} tc noDp />
              <TableBuilder.ObjBr
                data={{ Limit: item.limit, Snap: item.snap }}
              />
              <TableBuilder.DateTime dt={item.createdAt} />
              <td></td>
              <TableBuilder.Action hasInfo />
            </tr>
          ))
        : null}
    </TableBuilder.TBody>
  );
};
