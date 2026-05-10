import { SectionHeading } from "./section-heading";
import { LiveStatisticsChange } from "./live-statistics-change";
import { LiveStatisticsScale } from "./live-statistics-scale";

export const LiveStatistics = () => {
  return (
    <SectionHeading label="Live Statistics" collapsed>
      <small className="font-semibold">Change</small>
      <LiveStatisticsChange />
      <div className="mt-2 grid">
        <small className="font-semibold">High/Low</small>
        <small>
          Current sell rate <span className="text-success">77.37</span>
        </small>
      </div>
      <div className="space-y-6">
        <div className="flex-cb my-4 px-1">
          <small>Low</small>
          <small>High</small>
        </div>
        <LiveStatisticsScale
          high={77.47}
          low={76.89}
          duration="5 minutes"
          right={60}
        />
        <LiveStatisticsScale
          high={77.47}
          low={76.07}
          duration="60 minutes"
          right={30}
        />
        <LiveStatisticsScale
          high={77.47}
          low={75.61}
          duration="1 day"
          right={20}
        />
      </div>
    </SectionHeading>
  );
};
