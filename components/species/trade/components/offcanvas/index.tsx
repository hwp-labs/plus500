"use client";

import { ArrowRightIcon } from "lucide-react";
//
import { InfoHeader } from "./info-header";
import { InfoCtaBtn } from "./info-cta-btn";
import { TradersSentiments } from "./traders-sentiments";
import { LiveStatistics } from "./live-statistics";
import { InfoSection } from "./info-section";
import { BuySellHeader } from "./buy-sell-header";
import { BuySellForm } from "./buy-sell-form";
import { useAppStore } from "@/store/app-store";
import { NOT_APPLICABLE, N_A } from "@/constants";
import { AdvancedSection } from "./advanced-section";

export const Offcanvas = () => {
  const open = useAppStore((s) => s.open);
  const toggleOpen = useAppStore((s) => s.toggleOpen);
  const variant = useAppStore((s) => s.variant);
  const setVariant = useAppStore((s) => s.setVariant);
  const instrument = useAppStore((s) => s.instrument);
  const instrumentShort = useAppStore((s) => s.instrumentShort);
  const backToInfo = useAppStore((s) => s.backToInfo);
  const toggleBackToInfo = useAppStore((s) => s.toggleBackToInfo);

  const handleBackButton = () => {
    if (variant !== "info" && backToInfo) {
      toggleBackToInfo();
      setVariant("info");
    } else {
      toggleOpen();
    }
  };
  //
  return open ? (
    <aside className="bg-aside _bg-[#233042] h-[94svh] w-120 space-y-4 overflow-y-auto px-6 py-4">
      <button onClick={handleBackButton} title="Close">
        <ArrowRightIcon className="hover:text-secondary btn-fx" />
      </button>
      {variant === "info" ? (
        <>
          <InfoHeader
            name={instrument || NOT_APPLICABLE}
            nameShort={instrumentShort || N_A}
          />
          <div className="flex-cb gap-2">
            <InfoCtaBtn
              label="Sell"
              value={127.69}
              onClick={() => {
                toggleBackToInfo();
                setVariant("sell");
              }}
            />
            <InfoCtaBtn
              label="Buy"
              value={128.65}
              onClick={() => {
                toggleBackToInfo();
                setVariant("buy");
              }}
              variant="danger"
            />
          </div>
          <TradersSentiments />
          <LiveStatistics />
          <InfoSection collapsed />
        </>
      ) : (
        <>
          <BuySellHeader
            name={instrument || NOT_APPLICABLE}
            nameShort={instrumentShort || N_A}
          />
          <BuySellForm buy={variant === "buy"} />
          <AdvancedSection />
          <InfoSection />
        </>
      )}
    </aside>
  ) : null;
};
