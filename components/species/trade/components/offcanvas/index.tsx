import { ArrowRightIcon } from "lucide-react";
//
import { BuySellHeader } from "./buy-sell-header";
import { BuySellForm } from "./buy-sell-form";
import { SectionHeading } from "./section-heading";
import { InfoHeader } from "./info-header";
import { InfoCta } from "./info-cta";
import { TradersSentiments } from "./traders-sentiments";
import { LiveStatistics } from "./live-statistics";
import { InfoSection } from "./info-section";

export const Offcanvas = () => {
  return (
    <aside className="h-svh w-120 space-y-4 overflow-y-auto bg-[#233042] px-8 py-4">
      <ArrowRightIcon />
      {renderBuySellContent}
    </aside>
  );
};

const renderBuySellContent = (
  <>
    <BuySellHeader />
    <BuySellForm />
    <SectionHeading label="Advanced"></SectionHeading>
    <InfoSection />
  </>
);

const renderInfoContent = (
  <>
    <InfoHeader />
    <InfoCta sell={77.36} buy={77.94} />
    <TradersSentiments />
    <LiveStatistics />
    <InfoSection />
  </>
);
