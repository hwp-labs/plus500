import { Header } from "@/components/species/dashboard/components/header";
import { Sidebar } from "@/components/species/dashboard/sidebar";

export default function DashboardPage() {
  return (
    <div className="hidden_ flex-sx">
      <Sidebar />
      <Header />
    </div>
  );
}
