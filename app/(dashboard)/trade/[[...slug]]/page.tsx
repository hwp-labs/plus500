import { Metadata } from "next";
import { ContentLayout } from "@/components/species/dashboard/components/content-layout";
import { TableFilters } from "@/components/species/trade/components/table-filters";
import { Table } from "@/components/species/trade/components/table";

export const metadata: Metadata = {
  title: "Trade",
};

export default function TradePage() {
  return (
    <ContentLayout>
      <div className="bg-aside flex gap-2">
        <TableFilters />
        <Table />
      </div>
    </ContentLayout>
  );
}
