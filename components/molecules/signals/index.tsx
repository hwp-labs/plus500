import { KpiCard } from "./kpi-card";

export const Signals = () => {
  return (
    <section className="flex-cc bg-[url('/images/cover-white-crosses.png')] bg-contain lg:min-h-[800px]">
      <div className="container-md px-4 text-center lg:px-0">
        <div className="lg:min-h-[700px] min-h-[100px]"></div>
        <h2 className="text-primary container-sm text-[22px] leading-7 font-medium lg:text-[30px] lg:leading-9 lg:font-semibold">
          Over 33 million customers worldwide have already chosen Plus500.
        </h2>
        <KpiCard />
        <p className="text-muted leading-5 mt-10 lg:mt-0">
          * Instrument availability is subject to jurisdiction. Futures trading
          by U.S. market participants occurs through Plus500US Financial
          Services LLC, a registered futures commission merchant.
        </p>
        <div className="min-h-[100px] lg:min-h-[200px]"></div>
      </div>
    </section>
  );
};
