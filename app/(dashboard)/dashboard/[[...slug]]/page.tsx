import { TableFilters } from "@/components/species/dashboard/components/table-filters";
import { Table } from "@/components/species/dashboard/components/table";
import { GraphToolbar } from "@/components/species/dashboard/components/graph-toolbar";
import { Graph } from "@/components/species/dashboard/components/graph";

export default function DashboardPage() {
  return (
    <main className="flex-col-xx min-h-[92svh]">
      <section className="bg-aside debug_ flex min-h-[320px] gap-2">
        <TableFilters />
        <Table />
      </section>
      <section className="debug_ flex-col-xb flex-1">
        <GraphToolbar />
        <Graph />
      </section>
    </main>
  );
}
