import { TableFilters } from "@/components/species/dashboard/components/table-filters";
import { Table } from "@/components/species/dashboard/components/table";
import { GraphToolbar } from "@/components/species/dashboard/components/graph-toolbar";
import { Graph } from "@/components/species/dashboard/components/graph";

export default function DashboardPage() {
  return (
    <main className="flex-col-xx min-h-[92svh]">
      <section className="bg-aside flex flex-1 gap-2 debug">
        <TableFilters />
        <Table />
      </section>
      <section className="debug flex-1 flex-col-xb">
        <GraphToolbar />
        <Graph />
      </section>
    </main>
  );
}
