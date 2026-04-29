import type { Metadata } from "next";
import {
  BookmarkIcon,
  ChartCandlestickIcon,
  ChartNoAxesColumnIcon,
  CoinsIcon,
  EyeIcon,
  FunnelIcon,
  TrendingUpIcon,
} from "lucide-react";
import { APP } from "@/constants/APP";

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
      <section className="wrapper">
        <h2 className="text-lg font-bold">Community trends</h2>
        <p>
          Analyse how the community is behaving and get up ot the top 10 results
          based on {APP.name} platform traders' activity.
        </p>
        {renderTrendsCards}
      </section>
      <section className="wrapper">
        <h2 className="text-lg font-bold">Compare with the community</h2>
        <p>
          Analyse comparable pairs up to the top 10 results based on {APP.name}{" "}
          platform traders' activity.
        </p>
        {renderCompareCards}
      </section>
    </main>
  );
}

const renderTrendsCards = (
  <ul className="flex-cb mt-4 gap-6">
    {[
      { label: "Most Traded", Icon: ChartCandlestickIcon },
      { label: "Most Viewed", Icon: EyeIcon },
      { label: "Most Followed", Icon: BookmarkIcon },
    ].map(({ label, Icon }, i) => (
      <li
        key={i}
        className="cover flex-col-xb h-[200px] flex-1 rounded bg-[url('/images/cover-trends.png')] px-8 py-8"
      >
        <div className="bg-background flex-cc size-15 rounded-full">
          <Icon strokeWidth={3} />
        </div>
        <p className="mt-8 text-lg">{label}</p>
      </li>
    ))}
  </ul>
);

const renderCompareCards = (
  <ul className="flex-cb mt-4 gap-6">
    {[
      { labelX: "Most Bought", labelY: "Most Sold", Icon: TrendingUpIcon },
      {
        labelX: "Most Profit-Making Positions (%)",
        labelY: "Most Loss-Making Positions (%)",
        Icon: ChartNoAxesColumnIcon,
      },
      {
        labelX: "Highest Trade Profit Return (%)",
        labelY: "Highest Trade Loss Return (%)",
        Icon: CoinsIcon,
      },
    ].map(({ Icon, labelX, labelY }, i) => (
      <li key={i} className="debug2_ flex-1 flex-cb gap-2">
        <div className="bg-card flex-cc relative h-[200px] flex-1 rounded px-6 text-center">
          <p className="text-lg">{labelX}</p>
          <div className="bg-secondary flex-cc border-background absolute top-18 -right-8 size-14 rounded-full border-6">
            <Icon size={20} strokeWidth={3} />
          </div>
        </div>
        <div className="bg-card flex-cc h-[200px] flex-1 rounded px-6 text-center">
          <p className="text-lg">{labelY}</p>
        </div>
      </li>
    ))}
  </ul>
);
