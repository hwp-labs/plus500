import type { Metadata } from "next";
//
import { GraphContainer } from "@/components/species/dashboard/components/graph-container";
import { TableBuilder } from "@/components/species/dashboard/components/table-builder";
//
import { TableBody } from "@/components/species/orders/components/table-body";
import { CURRENCY } from "@/constants/CURRENCY";

export const metadata: Metadata = {
  title: "Orders",
};

export default function OrdersPage() {
  return (
    <GraphContainer>
      <table className="w-full">
        <TableBuilder.THead
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
        <TableBody />
      </table>
    </GraphContainer>
  );
}
