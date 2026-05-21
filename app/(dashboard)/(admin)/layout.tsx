import { AdminAuthGuard } from "@/components/layouts/admin-auth-guard";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminAuthGuard>{children}</AdminAuthGuard>;
}
