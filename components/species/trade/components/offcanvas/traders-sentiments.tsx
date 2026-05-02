import { SectionHeading } from "./section-heading";

export const TradersSentiments = () => {
  return (
    <SectionHeading label="Traders' Sentiments" collapsed>
      <div className="flex-cb text-xs">
        <strong className="text-danger font-semibold">3% Sellers</strong>
        <strong className="text-success font-semibold">97% Buyers</strong>
      </div>
      <div className="bg-success h-2.5 overflow-clip rounded-full">
        <div className="bg-danger h-2.5 w-10"></div>
      </div>
    </SectionHeading>
  );
};
