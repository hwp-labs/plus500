import clsx from "clsx";
import {
  BriefcaseBusinessIcon,
  ChartLineIcon,
  LandmarkIcon,
  RecycleIcon,
  TagIcon,
  TrendingUpIcon,
} from "lucide-react";

export const Nav = () => {
  return (
    <nav className="mt-1">
      <ul className="grid">
        {[
          ChartLineIcon,
          RecycleIcon,
          TagIcon,
          BriefcaseBusinessIcon,
          TrendingUpIcon,
          LandmarkIcon,
        ].map((Icon, i) => {
          const active = i === 0;
          return (
            <li
              key={i}
              className={clsx(
                "debug_ sidebar-btn",
                active && "sidebar-btn-active",
              )}
            >
              <Icon
                className={clsx(
                  "dashboard-icon",
                  active && "text-white",
                  i === 5 && "text-secondary",
                )}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
