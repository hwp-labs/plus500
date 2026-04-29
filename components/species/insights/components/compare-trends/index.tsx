import {
  ChartNoAxesColumnIcon,
  CoinsIcon,
  TrendingUpIcon,
} from "lucide-react";
import { APP } from "@/constants/APP";
// 
import { Card } from "./card";

export const CompareTrends = () => {
  return (
    <section className="wrapper">
      <h2 className="text-lg font-bold">Compare with the community</h2>
      <p>
        Analyse comparable pairs up to the top 10 results based on {APP.name}{" "}
        platform traders' activity.
      </p>
      <ul className="debug_ mt-4 grid grid-cols-2 gap-6">
        {data.map(({ Icon, labelX, labelY }, i) => (
          <li key={i} className="debug2_ flex-cb gap-2">
            <Card Icon={Icon}>{labelX}</Card>
            <Card>{labelY}</Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

const data = [
  {
    labelX: "Most Bought",
    labelY: "Most Sold",
    Icon: TrendingUpIcon,
  },
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
];
