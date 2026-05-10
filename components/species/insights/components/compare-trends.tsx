import { PropsWithChildren } from "react";
import {
  ChartNoAxesColumnIcon,
  CoinsIcon,
  LucideIcon,
  TrendingUpIcon,
} from "lucide-react";
import { APP } from "@/constants/APP";

export const CompareTrends = () => {
  return (
    <section className="">
      <h2 className="text-lg font-bold">Compare with the community</h2>
      <p>
        Analyse comparable pairs up to the top 10 results based on {APP.name}{" "}
        platform traders' activity.
      </p>
      <ul className="mt-4 grid gap-6 md:grid-cols-2">
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

interface CardProps extends PropsWithChildren {
  Icon?: LucideIcon;
}

export const Card = ({ children, Icon }: CardProps) => (
  <div className="bg-card flex-cc relative h-[200px] flex-1 rounded px-10 text-center">
    <p className="text-lg">{children}</p>
    {Icon ? (
      <div className="bg-secondary flex-cc border-background absolute top-18 -right-8 z-1 size-14 rounded-full border-6">
        <Icon size={20} strokeWidth={3} />
      </div>
    ) : null}
  </div>
);

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
