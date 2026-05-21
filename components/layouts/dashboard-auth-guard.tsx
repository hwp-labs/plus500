"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import { PATH } from "@/constants/PATH";

export const DashboardAuthGuard = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const router = useRouter();
  const session = useAuthStore((s) => s.session);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const unsub = useAuthStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });

    // in case it already hydrated before this effect runs
    if (useAuthStore.persist.hasHydrated()) setHydrated(true);

    return unsub;
  }, []);

  useEffect(() => {
    if (hydrated && !session) router.replace(PATH.login);
  }, [hydrated, session, router]);

  if (!hydrated || !session) return null;

  return (
    <div className="dark grid grid-cols-[60px_1fr] text-sm">{children}</div>
  );
};