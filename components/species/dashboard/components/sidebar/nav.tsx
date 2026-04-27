import clsx from "clsx";
import {
  BriefcaseBusinessIcon,
  ChartLineIcon,
  LandmarkIcon,
  RecycleIcon,
  TagIcon,
  TrendingUpIcon,
} from "lucide-react";
import { PATH_PROTECTED } from "@/constants/PATH";

export const Nav = ({ open }: { open?: boolean }) => {
  return (
    <nav className="mt-1">
      <ul className="grid">
        {data.map(({ Icon, ...item }, i) => {
          const active = i === 0;
          // 
          return (
            <li
              key={i}
              className={clsx(
                "debug_ sidebar-btn gap-1",
                active && "sidebar-btn-active",
                open && "size-15",
              )}
            >
              <i className="min-size-6">
                <Icon
                  className={clsx(
                    "dashboard-icon",
                    active && "text-white",
                    i === 5 && "text-secondary",
                  )}
                />
              </i>
              {open && (
                <small className="text-ash3 text-center text-[10px]">
                  {item.label}
                </small>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const data = [
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
