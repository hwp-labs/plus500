import { Metadata } from "next";
import { Container } from "@/components/species/dashboard/components/graph/container";
// 
import { TableFilters } from "@/components/species/trade/components/table-filters";
import { Table } from "@/components/species/trade/components/table";

export const metadata: Metadata = {
  title: "Trade",
};

export default function TradePage() {
  return (
    <Container>
      <div className="bg-aside flex gap-2">
        <TableFilters />
        <Table />
      </div>
    </Container>
  );
}
