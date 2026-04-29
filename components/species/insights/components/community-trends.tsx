import { BookmarkIcon, ChartCandlestickIcon, EyeIcon } from "lucide-react";
import { APP } from "@/constants/APP";

export const CommunityTrends = () => {
  return (
    <section className="wrapper">
      <h2 className="text-lg font-bold">Community trends</h2>
      <p>
        Analyse how the community is behaving and get up ot the top 10 results
        based on {APP.name} platform traders' activity.
      </p>
      <ul className="flex-cb mt-4 gap-6">
        {data.map(({ label, Icon }, i) => (
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
    </section>
  );
};

const data = [
  { label: "Most Traded", Icon: ChartCandlestickIcon },
  { label: "Most Viewed", Icon: EyeIcon },
  { label: "Most Followed", Icon: BookmarkIcon },
];