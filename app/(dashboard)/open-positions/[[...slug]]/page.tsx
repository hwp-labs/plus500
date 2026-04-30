import type { Metadata } from "next";
//
import { GraphContainer } from "@/components/species/dashboard/components/graph-container";
import { TableBuilder } from "@/components/species/dashboard/components/table-builder";
//
import { data } from "@/components/species/open-positions/utils";

export const metadata: Metadata = {
  title: "Open Positions",
};

export default function OpenPositionsPage() {
  return (
    <GraphContainer>
      <table className="w-full">
        <TableBuilder.THead
          data={[
            "Type/Instrument",
            "Net P&L",
            "Current Value",
            "Change|c",
            "",
            "Limit Shop",
            "Adjustments|c",
            "Overnight F...|c",
            "Open Time|c",
          ]}
          hasActions
        />
        <TableBuilder.TBody>
          {data.map((item, i) => (
            <tr key={i}>
              <TableBuilder.BuyBr text={item.type} />
              <TableBuilder.Amount value={item.netPl} currency="eur" colored />
              <TableBuilder.Amount value={item.value} currency="usd" />
              <TableBuilder.Amount value={item.change} suffix="%" colored tc />
              <TableBuilder.Tc>
                <div className="flex-col-cc gap-0.5">
                  <span className="text-blue-400">Edit</span>
                  <button className="rounded-full border px-3 py-0.5 text-xs">
                    x Close
                  </button>
                </div>
              </TableBuilder.Tc>
              <TableBuilder.ObjBr
                data={{ Limit: item.limit, Shop: item.shop }}
              />
              <TableBuilder.Amount value={item.adjustments} currency="eur" tc />
              <TableBuilder.Amount value={item.overnightF} currency="eur" tc />
              <TableBuilder.DateTime dt={item.createdAt} />
              <TableBuilder.Action hasInfo />
            </tr>
          ))}
        </TableBuilder.TBody>
        <TableBuilder.TBodyPlaceholder className="min-h-[100px]!" />
        <TableBuilder.TFoot>
          <tr>
            <td></td>
            <TableBuilder.Amount
              value={-36.05}
              currency="eur"
              suffix=" Total"
              colored
            />
            <td colSpan={4}></td>
            <TableBuilder.Amount value={0} currency="eur" colored tc />
            <TableBuilder.Amount value={0} currency="eur" colored tc />
            <td></td>
          </tr>
        </TableBuilder.TFoot>
      </table>
    </GraphContainer>
  );
}
