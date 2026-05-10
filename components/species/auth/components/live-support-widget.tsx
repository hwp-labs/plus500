"use client";

import { IconMessageDots } from "@tabler/icons-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import clsx from "clsx";

export const LiveSupportWidget = () => {
  const isMobile = useMediaQuery('sm');
  //
  return (
    <button
      type="button"
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
