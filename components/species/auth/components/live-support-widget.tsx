"use client";

import { IconMessageDots } from "@tabler/icons-react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import clsx from "clsx";

export const LiveSupportWidget = () => {
  const isMobile = useIsMobile(640);
  //
  return (
    <button
      className={clsx(
        "flex-cc bg-ash1 text-primary hover:bg-secondary w-full gap-2 px-4 py-3 text-sm font-medium transition-colors hover:text-white",
        isMobile && "fixed bottom-0",
      )}
    >
      <IconMessageDots size={18} />
      Live Support
    </button>
  );
};
