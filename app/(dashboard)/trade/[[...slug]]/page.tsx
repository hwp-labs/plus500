import type { Metadata } from "next";
//
import { Container } from "@/components/species/dashboard/components/graph/container";
import { TableBuilder } from "@/components/species/dashboard/components/table-builder";
//
import { TableFilters } from "@/components/species/trade/components/table-filters";
import { FormBuilder } from "@/components/species/dashboard/components/form-builder";
import data from "@/components/species/trade/data.json";

export const metadata: Metadata = {
  title: "Trade",
};

export default function TradePage() {
  return (
    <Container>
      <div className="bg-aside flex gap-2">
        <TableFilters />
        <div className="bg-background h-[340px] flex-1 overflow-y-auto">
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
                    <FormBuilder.Button className="py-1!">
                      Sell
                    </FormBuilder.Button>
                  </TableBuilder.Tc>
                  <TableBuilder.Amount value={item.buy} tc colored />
                  <TableBuilder.Tc>
                    <FormBuilder.Button className="py-1!">
                      Buy
                    </FormBuilder.Button>
                  </TableBuilder.Tc>
                  <TableBuilder.Tc>{item.range}</TableBuilder.Tc>
                  <TableBuilder.Action hasStar hasBell hasInfo />
                </tr>
              ))}
            </TableBuilder.TBody>
          </table>
        </div>
      </div>
    </Container>
  );
}
