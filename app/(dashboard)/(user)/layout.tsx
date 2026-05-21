import { UserAuthGuard } from "@/components/layouts/user-auth-guard";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <UserAuthGuard>{children}</UserAuthGuard>;
}
