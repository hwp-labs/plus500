"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import { PATH } from "@/constants/PATH";

export const DashboardAuthGuard = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const router = useRouter();
  const _hasHydrated = useAuthStore((s) => s._hasHydrated);
  const session = useAuthStore((s) => s.session);

  useEffect(() => {
    if (_hasHydrated && !session) router.replace(PATH.login);
  }, [router, _hasHydrated, session]);

  // if (!_hasHydrated || !session) return null;

  return (
    <div className="dark grid grid-cols-[60px_1fr] text-sm">{children}</div>
  );
};
