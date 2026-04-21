"use client";

import { IconMessageDots } from "@tabler/icons-react";

export const LiveSupportWidget = () => {
  return (
    <button className="flex-cc bg-ash1 text-primary hover:bg-secondary w-full gap-2 px-4 py-3 text-sm font-medium transition-colors hover:text-white">
      <IconMessageDots size={18} />
      Live Support
    </button>
  );
};
