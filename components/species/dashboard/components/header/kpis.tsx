import { EURO } from "@/constants";

export const Kpis = () => {
  return (
    <ul className="show-md-flex flex-1">
      <ul className="flex-cb gap-4 flex-1">
        {[
          { value: EURO + "40,000.00", label: "Available" },
          { value: EURO + "40,000.00", label: "Equity" },
          { value: EURO + "0.00", label: "M. Margin" },
          { value: EURO + "0.00", label: "Profit/Loss" },
        ].map((item, i) => (
          <li key={i}>
            <div className="font-medium">{item.value}</div>
            <div className="text-sm">{item.label}</div>
          </li>
        ))}
      </ul>
    </ul>
  );
};
