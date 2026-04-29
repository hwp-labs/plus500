import { PropsWithChildren } from "react";
import type { Metadata } from "next";
//
import { Container } from "@/components/species/dashboard/components/graph/container";
import { TableBuilder } from "@/components/species/dashboard/components/table-builder";
// 
import { TableFilters } from "@/components/species/trade/components/table-filters";
import data from "@/components/species/trade/data.json";

export const metadata: Metadata = {
  title: "Trade",
};

export default function TradePage() {
  return (
    <Container>
      <div className="bg-aside flex gap-2">
        <TableFilters />
        <div className="bg-background flex-1">
          <table className="w-full">
            <TableBuilder.Thead
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
            <TableBuilder.Tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <TableBuilder.Amount value={item.change} suffix="%" tc colored />
                  <TableBuilder.Amount value={item.sell} tc colored />
                  <TableBuilder.Tc>
                    <BuySellBtn>Sell</BuySellBtn>
                  </TableBuilder.Tc>
                  <TableBuilder.Amount value={item.buy} tc colored />
                  <TableBuilder.Tc>
                    <BuySellBtn>Buy</BuySellBtn>
                  </TableBuilder.Tc>
                  <TableBuilder.Tc>{item.range}</TableBuilder.Tc>
                  <TableBuilder.Action hasStar hasBell hasInfo />
                </tr>
              ))}
            </TableBuilder.Tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}


const BuySellBtn = ({ children }: PropsWithChildren) => (
  <button className="border-ash6 text-ash3 cursor-pointer rounded-full border-2 px-6 py-1 font-medium text-xs">
    {children}
  </button>
);