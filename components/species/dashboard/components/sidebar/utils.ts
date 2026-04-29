import {
  BriefcaseBusinessIcon,
  ChartLineIcon,
  LandmarkIcon,
  RecycleIcon,
  TagIcon,
  TrendingUpIcon,
} from "lucide-react";
import { PATH_PROTECTED } from "@/constants/PATH";

export const menu = [
  {
    Icon: ChartLineIcon,
    label: "Trade",
    path: PATH_PROTECTED.trade,
  },
  {
    Icon: RecycleIcon,
    label: "Open Positions",
    path: PATH_PROTECTED.openPositions,
    badge: 2,
  },
  {
    Icon: TagIcon,
    label: "Orders",
    path: PATH_PROTECTED.orders,
  },
  {
    Icon: BriefcaseBusinessIcon,
    label: "Closed Positions",
    path: PATH_PROTECTED.closedPositions,
  },
  {
    Icon: TrendingUpIcon,
    label: "+Insights",
    path: PATH_PROTECTED.insights,
  },
  {
    Icon: LandmarkIcon,
    label: "Funds",
    path: PATH_PROTECTED.funds,
  },
];
