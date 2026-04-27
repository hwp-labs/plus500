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
  { Icon: ChartLineIcon, label: "Table", path: PATH_PROTECTED.hash },
  {
    Icon: RecycleIcon,
    label: "Open Positions",
    path: PATH_PROTECTED.hash,
  },
  { Icon: TagIcon, label: "Orders", path: PATH_PROTECTED.hash },
  {
    Icon: BriefcaseBusinessIcon,
    label: "Closed Positions",
    path: PATH_PROTECTED.hash,
  },
  {
    Icon: TrendingUpIcon,
    label: "Insights",
    path: PATH_PROTECTED.hash,
  },
  { Icon: LandmarkIcon, label: "Funds", path: PATH_PROTECTED.hash },
];
