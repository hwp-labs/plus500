import { DashboardAuthGuard } from "@/components/species/dashboard/components/offcanvas/dashboard-auth-guard";
import { Header } from "@/components/species/dashboard/components/header";
import { Sidebar } from "@/components/species/dashboard/components/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DashboardAuthGuard>
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        {children}
      </div>
    </DashboardAuthGuard>
  );
}
