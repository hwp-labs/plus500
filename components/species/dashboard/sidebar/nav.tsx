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
    <ul className="gap-4_ mt-1 grid">
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
                "sidebar-icon",
                active && "text-white",
                i === 5 && "text-secondary",
              )}
            />
          </li>
        );
      })}
    </ul>
  );
};
