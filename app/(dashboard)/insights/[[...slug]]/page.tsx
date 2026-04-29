import type { Metadata } from "next";
import { FunnelIcon } from "lucide-react";
import { CommunityTrends } from "@/components/species/insights/components/community-trends";
import { CompareTrends } from "@/components/species/insights/components/compare-trends";

export const metadata: Metadata = {
  title: "+Insights",
};

export default function InsightsPage() {
  return (
    <main className="space-y-8 px-4">
      <div className="flex-cb mt-8">
        <h1 className="text-3xl font-bold">+Insights</h1>
        <div className="bg-card flex-cc size-8 rounded">
          <FunnelIcon size={18} />
        </div>
      </div>
      <CommunityTrends />
      <CompareTrends />
    </main>
  );
}
