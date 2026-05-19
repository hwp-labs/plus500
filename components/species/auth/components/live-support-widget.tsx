"use client";

import { useEffect } from "react";
import { IconMessageDots } from "@tabler/icons-react";
import clsx from "clsx";
import { useMediaQuery } from "@/hooks/use-media-query";

const PROPERTY_ID = process.env.NEXT_PUBLIC_TAWKTO_PROPERTY_ID!;
const WIDGET_ID = process.env.NEXT_PUBLIC_TAWKTO_WIDGET_ID!;

declare global {
  interface Window {
    Tawk_API?: { maximize: () => void };
  }
}

export const LiveSupportWidget = () => {
  const mq = useMediaQuery("sm");

  useEffect(() => {
    if (document.querySelector('script[src*="tawk.to"]')) return; // guard

    const s = document.createElement("script");
    s.src = `https://embed.tawk.to/${PROPERTY_ID}/${WIDGET_ID}`;
    s.async = true;
    s.charset = "UTF-8";
    s.setAttribute("crossorigin", "*");
    document.body.appendChild(s);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.Tawk_API?.maximize()}
      className={clsx(
        "flex-cc bg-ash1 text-primary hover:bg-secondary w-full gap-2 px-4 py-3 text-sm font-medium transition-colors hover:text-white",
        mq && "fixed bottom-0",
      )}
    >
      <IconMessageDots size={18} />
      Live Support
    </button>
  );
};