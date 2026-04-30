import type { Metadata } from "next";
//
import { GraphContainer } from "@/components/species/dashboard/components/graph-container";
import { TableBuilder } from "@/components/species/dashboard/components/table-builder";
import { OutlineBtn } from "@/components/species/dashboard/components/form-builder";
import { Offcanvas } from "@/components/species/trade/components/offcanvas";
//
import { TableFilters } from "@/components/species/trade/components/table-filters";
import data from "@/components/species/trade/data.json";
import { StarIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Trade",
};

const M = 0;

export default function TradePage() {
  return (
    <GraphContainer rightSection={<Offcanvas />}>
      <div className="bg-aside flex gap-2">
        <TableFilters />
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
      </div>
    </GraphContainer>
  );
}

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
