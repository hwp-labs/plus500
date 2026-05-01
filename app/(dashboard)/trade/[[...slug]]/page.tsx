import type { Metadata } from "next";
import { GraphContainer } from "@/components/species/dashboard/components/graph-container";
import { Offcanvas } from "@/components/species/trade/components/offcanvas";
import { TableFilters } from "@/components/species/trade/components/table-filters";
import { TableContent } from "@/components/species/trade/components/table-content";

export const metadata: Metadata = {
  title: "Trade",
};

export default function TradePage() {
  return (
    <GraphContainer rightSection={<Offcanvas />}>
      <div className="flex">
        <TableFilters />
        <TableContent />
      </div>
    </GraphContainer>
  );
}
