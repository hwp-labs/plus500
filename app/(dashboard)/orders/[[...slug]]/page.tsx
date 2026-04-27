import { Metadata } from "next";
import { ChevronDownIcon } from "lucide-react";
//
import { TableBuilder } from "@/components/species/dashboard/components/table-builder";
import { asMoney } from "@/utils";
import { DOLLAR } from "@/constants";

export const metadata: Metadata = {
  title: "Orders",
};

export default function OrdersPage() {
  return (
    <div className="bg-background flex-1">
      <table className="w-full">
        <TableBuilder.Thead
          data={[
            "Type",
            "Value",
            "Rates",
            "Amount|c",
            "Limit/Snap",
            "Created|c",
            "Open Until",
          ]}
          hasActions
        />
        <TableBuilder.Tbody>
          {renderRibbon}
          {data.map((item, i) => (
            <tr key={i}>
              <td>
                Buy
                <br />
                {item.type}
              </td>
              <td>
                {DOLLAR}
                {asMoney(item.value, true)}
              </td>
              <td>
                <strong>Order rate: </strong>
                {asMoney(item.rates.order, true)} <br />
                <strong>Current rate: </strong>
                {asMoney(item.rates.current, true)}
              </td>
              <TableBuilder.Cc>{asMoney(item.amount, true)}</TableBuilder.Cc>
              <td>
                <strong>Limit: </strong>
                {asMoney(item.limit, true)} <br />
                <strong>Snap: </strong>
                {asMoney(item.snap, true)}
              </td>
              <TableBuilder.DateTime dt={item.createdAt} cc />
              <td></td>
              <TableBuilder.Action hasInfo />
            </tr>
          ))}
        </TableBuilder.Tbody>
      </table>
    </div>
  );
}

const data = [
  {
    type: "Amazon",
    value: 4489.1,
    rates: { order: 128.56, current: 128.52 },
    amount: 35,
    limit: 200.0,
    snap: 115.0,
    createdAt: "2022-09-14 17:12",
  },
  {
    type: "EUR/USD",
    value: 9993.7,
    rates: { order: 1.00017, current: 1.00017 },
    amount: 10000,
    limit: 1.2051,
    snap: 0.98814,
    createdAt: "2022-09-14 17:14",
  },
];

const renderRibbon = (
  <tr>
    <td colSpan={9}>
      <div className="bg-secondary flex-cb p-2">
        <p className="flex-cs gap-2">
          <ChevronDownIcon />
          Executed
        </p>
        <p>Last 72 Hours</p>
      </div>
    </td>
  </tr>
);
