import { Header } from "@/components/species/dashboard/components/header";
import { Sidebar } from "@/components/species/dashboard/components/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dark">
      <div className="hidden_ flex-sx">
        <Sidebar />
        <div className="flex-1">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}
