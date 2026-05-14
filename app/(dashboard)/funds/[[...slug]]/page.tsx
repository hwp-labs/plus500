import type { Metadata } from "next";
import {
  IconCash,
  IconChartPie2Filled,
  IconMessage2Code,
} from "@tabler/icons-react";
//
import { AccountBal } from "@/components/species/funds/components/account-bal";
import { CtaButtons } from "@/components/species/funds/components/cta-buttons";

export const metadata: Metadata = {
  title: "Funds Management",
};

export default function FundsPage() {
  return (
    <main className="container-sm bg-background flex-1 px-6">
      <h1 className="mt-4 text-center text-3xl font-bold">Funds Management</h1>
      <AccountBal />
      <CtaButtons />
      <ul className="mt-24 grid gap-6 sm:grid-cols-3">
        {[
          { label: "Account Snapshot", Icon: IconChartPie2Filled },
          { label: "Payment Methods", Icon: IconCash },
          { label: "Contact Us", Icon: IconMessage2Code },
        ].map(({ label, Icon }, i) => (
          <li
            key={i}
            className="bg-card flex-col-cc _w-full h-25 flex-1 gap-2 rounded-lg"
          >
            <Icon className="" />
            {label}
          </li>
        ))}
      </ul>
    </main>
  );
}
