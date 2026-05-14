import {
  BriefcaseBusinessIcon,
  ChartLineIcon,
  LandmarkIcon,
  LogsIcon,
  RecycleIcon,
  SettingsIcon,
  TagIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";
import { PATH_PROTECTED } from "@/constants/PATH";

export const MENU = [
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

export const MENU_PROTECTED = [
  
  {
    Icon: LogsIcon,
    label: "Transactions",
    path: PATH_PROTECTED.transactions,
  },
  {
    Icon: UsersIcon,
    label: "Users",
    path: PATH_PROTECTED.users,
  },
  {
    Icon: SettingsIcon,
    label: "Settings",
    path: PATH_PROTECTED.settings,
  },
];
