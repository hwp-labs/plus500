import { APP } from "@/constants/APP";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Dashboard | ${APP.name}`,
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dark">
      {children}
    </div>
  );
}
