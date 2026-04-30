import type { Metadata } from "next";
import {
  IconCash,
  IconChartPie2Filled,
  IconCreditCardPay,
  IconCreditCardRefund,
  IconMessage2Code,
} from "@tabler/icons-react";
//
import { asMoney } from "@/utils";
import { CURRENCY } from "@/constants/CURRENCY";

export const metadata: Metadata = {
  title: "Funds Management",
};

export default function FundsPage() {
  return (
    <main className="container-sm space-y-8">
      <h1 className="mt-4 text-center text-3xl font-bold">Funds Management</h1>
      {renderInvoice}
      {renderButtons}
      {renderCards}
    </main>
  );
}

const renderInvoice = (
  <section>
    <h2 className="text-lg font-bold">Account Balance</h2>
    <ul className="mt-2 space-y-1 px-4">
      {[
        { label: "Equity", value: 0 },
        { label: "Initial margin", value: 0 },
        { label: "Maintenance margin", value: 0 },
        { label: "Available to withdraw", value: 0 },
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

const renderButtons = (
  <div className="flex-cb gap-6">
    <button className="btn btn-lg bg-secondary max-h-[50px] rounded-full border-none">
      <IconCreditCardPay />
      Deposit
    </button>
    <button className="btn btn-lg bg-secondary max-h-[50px] rounded-full border-none">
      <IconCreditCardRefund />
      Withdraw
    </button>
  </div>
);

const renderCards = (
  <ul className="flex-cb flex-wrap gap-6">
    {[
      { label: "Account Snapshot", Icon: IconChartPie2Filled },
      { label: "Payment Methods", Icon: IconCash },
      { label: "Contact Us", Icon: IconMessage2Code },
    ].map(({ label, Icon }, i) => (
      <li key={i} className="bg-card flex-col-cc h-25 flex-1 gap-2 rounded-lg">
        <Icon className="" />
        {label}
      </li>
    ))}
  </ul>
);
