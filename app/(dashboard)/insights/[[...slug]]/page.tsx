import type { Metadata } from "next";
import {
  BookmarkIcon,
  ChartCandlestickIcon,
  EyeIcon,
  FunnelIcon,
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
        className="cover flex-col-xb h-[200px] flex-1 rounded bg-[url('/images/cover-trends.png')] bg-no-repeat_ px-8 py-8"
      >
        <div className="bg-background flex-cc size-15 rounded-full">
          <Icon className="" />
        </div>
        <p className="mt-8 text-lg">{label}</p>
      </li>
    ))}
  </ul>
);
