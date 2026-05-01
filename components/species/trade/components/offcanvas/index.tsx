"use client";

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
import { useAppStore } from "@/store/app-store";
import { NOT_APPLICABLE, N_A } from "@/constants";

export const Offcanvas = () => {
  const open = useAppStore((s) => s.open);
  const toggleOpen = useAppStore((s) => s.toggleOpen);
  const variant = useAppStore((s) => s.variant);
  const instrument = useAppStore((s) => s.instrument);
  const instrumentShort = useAppStore((s) => s.instrumentShort);
  //
  return open ? (
    <aside className="bg-aside _bg-[#233042] h-[94svh]  w-120 space-y-4 overflow-y-auto px-6 py-4">
      <button onClick={toggleOpen} title="Close">
        <ArrowRightIcon className="hover:text-secondary btn-fx" />
      </button>
      {variant === "info" ? (
        <>
          <InfoHeader
            name={instrument || NOT_APPLICABLE}
            nameShort={instrumentShort || N_A}
          />
          <InfoCta sell={77.36} buy={77.94} />
          <TradersSentiments />
          <LiveStatistics />
          <InfoSection />
        </>
      ) : (
        <>
          <BuySellHeader
            name={instrument || NOT_APPLICABLE}
            nameShort={instrumentShort || N_A}
          />
          <BuySellForm buy={variant === "buy"} />
          <SectionHeading label="Advanced"></SectionHeading>
          <InfoSection />
        </>
      )}
    </aside>
  ) : null;
};
