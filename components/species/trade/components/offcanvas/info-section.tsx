import { SectionHeading } from "./section-heading";

export const InfoSection = () => {
  return (
    <SectionHeading label="Info">
      <div className="flex-cb">
        <div className="grid flex-1 -space-y-1">
          <strong className="text-xl">
            1<span className="ml-1 text-xs">Shares</span>
          </strong>
          <small className="text-ash4">Unit amount</small>
        </div>
        <div className="grid flex-1 -space-y-1">
          <strong className="text-xl">1:5</strong>
          <small className="text-ash4">Leverage</small>
        </div>
        <div className="grid flex-1 -space-y-1">
          <strong className="text-xl">0.96</strong>
          <small className="text-ash4">Dynamic Spread</small>
        </div>
      </div>
      <ul className="grid gap-1 mt-2">
        {data.map(({ label, value }, i) => (
          <li key={i} className="flex-cb gap-2">
            <small>{label}</small>
            <small className="border-muted flex-1 border border-dashed"></small>
            <small>{value}</small>
          </li>
        ))}
      </ul>
    </SectionHeading>
  );
};

const data = [
  { label: "Point Value", value: "1 USD" },
  { label: "Overnight funding-Buy", value: "-0.0645%" },
  { label: "Overnight funding-Sell", value: "-0.0453%" },
  { label: "Overnight funding time", value: "11:01 PM" },
  { label: "Initial margin", value: "20.00%" },
  { label: "Maintenance margin", value: "10.00%" },
  { label: "Expiry date", value: "Wed 3:30 PM" },
];
