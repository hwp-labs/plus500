import { asMoney } from "@/utils";
import { CURRENCY } from "@/constants/CURRENCY";

export const AccountBal = () => (
  <section>
    <h2 className="mt-4 text-lg font-bold">Account Balance</h2>
    <ul className="mt-2 space-y-1 px-4">
      {[
        { label: "Available to withdraw", value: 0 },
        { label: "Equity", value: 0 },
        { label: "Initial margin", value: 0 },
        { label: "Maintenance margin", value: 0 },
      ].map(({ label, value }, i) => (
        <li key={i} className="flex-cb gap-2">
          <div>{label}</div>
          <div className="border-muted flex-1 border-b border-dashed"></div>
          <div>{CURRENCY.Euro.symbol + asMoney(value)}</div>
        </li>
      ))}
    </ul>
  </section>
);
