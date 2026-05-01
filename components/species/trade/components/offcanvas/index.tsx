import { ArrowRightIcon } from "lucide-react";
//
import { InfoHeader } from "./info-header";
import { InfoCta } from "./info-cta";
import { SectionHeading } from "./section-heading";
import { TradersSentiments } from "./traders-sentiments";
import { LiveStatistics } from "./live-statistics";
import { InfoSection } from "./info-section";
import { BuySellHeader } from "./buy-sell-header";
import { BuySellForm } from "./buy-sell-form";

export const Offcanvas = () => {
  return (
    <aside className="h-svh w-120 space-y-4 overflow-y-auto bg-aside _bg-[#233042] px-8 py-4">
      <ArrowRightIcon />
      {renderBuySellContent}
    </aside>
  );
};

const renderInfoContent = (
  <>
    <InfoHeader />
    <InfoCta sell={77.36} buy={77.94} />
    <TradersSentiments />
    <LiveStatistics />
    <InfoSection />
  </>
);

const renderBuySellContent = (
  <>
    <BuySellHeader />
    <BuySellForm />
    <SectionHeading label="Advanced"></SectionHeading>
    <InfoSection />
  </>
);

