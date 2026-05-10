import { Header } from "@/components/species/dashboard/components/header";
import { Sidebar } from "@/components/species/dashboard/components/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dark grid grid-cols-[60px_1fr] text-sm">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
}
