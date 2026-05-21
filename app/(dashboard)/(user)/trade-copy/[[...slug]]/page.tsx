import type { Metadata } from "next";

import { TradeCopyContent } from "@/components/species/trade/components/trade-copy-content";

export const metadata: Metadata = {
  title: "Copy Trading",
};

export default function TradeCopyPage() {
  return (
    <main className="bg-background flex-1 px-6">
      <h1 className="mt-4 text-3xl font-bold sm:text-center">Copy Trading</h1>
      <TradeCopyContent />
    </main>
  );
}
