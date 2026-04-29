import { Metadata } from "next";
import { ChevronDownIcon } from "lucide-react";
//
import { Container } from "@/components/species/dashboard/components/graph/container";
import { TableBuilder } from "@/components/species/dashboard/components/table-builder";
import { asMoney } from "@/utils";
//
import { data } from "@/components/species/orders/utils";

export const metadata: Metadata = {
  title: "Close Positions",
};

export default function ClosedPositionsPage() {
  return (
    <Container>
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
              <TableBuilder.BuyBr>{item.type}</TableBuilder.BuyBr>
              <TableBuilder.Amount value={item.value} />
              <TableBuilder.Amount currency="usd" value={item.value} />
              <td>
                <strong>Order rate: </strong>
                {asMoney(item.rates.order)} <br />
                <strong>Current rate: </strong>
                {asMoney(item.rates.current)}
              </td>
              <TableBuilder.Amount value={item.amount} tc />
              <td>
                <strong>Limit: </strong>
                {asMoney(item.limit)} <br />
                <strong>Snap: </strong>
                {asMoney(item.snap)}
              </td>
              <TableBuilder.DateTime dt={item.createdAt} tc />
              <td></td>
              <TableBuilder.Action hasInfo />
            </tr>
          ))}
        </TableBuilder.Tbody>
      </table>
    </Container>
  );
}

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
