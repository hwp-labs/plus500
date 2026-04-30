import { ArrowRightIcon } from "lucide-react";
import { InfoHeader } from "./info-header";
import { InfoCta } from "./info-cta";
import { LiveStatistics } from "./live-statistics";
import { InfoSection } from "./info-section";
import { TradersSentiments } from "./traders-sentiments";

export const Offcanvas = () => {
  return (
    <aside className="h-svh w-120 space-y-4 overflow-y-auto bg-[#233042] px-8 py-4">
      <ArrowRightIcon />
      <InfoHeader />
      <InfoCta sell={77.36} buy={77.94} />
      <TradersSentiments />
      <LiveStatistics />
      <InfoSection />
    </aside>
  );
};
