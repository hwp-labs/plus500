"use client";

import { redirect } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import { PATH_PROTECTED } from "@/constants/PATH";

export const AdminAuthGuard = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const session = useAuthStore((s) => s.session);

  if (session?.role === "user") redirect(PATH_PROTECTED.trade);

  return <>{children}</>;
};
