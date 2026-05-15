"use client";

import { asMoney } from "@/utils";
import { CURRENCY } from "@/constants/CURRENCY";
import { useFetchUser } from "@/hooks/services/use-fetch-user";

export const AccountBal = () => {
  const { data } = useFetchUser();
  //
  return (
    <section>
      <h2 className="mt-4 text-lg font-bold">Account Balance</h2>
      <ul className="mt-2 space-y-1 px-4">
        {[
          { label: "Available to withdraw", value: data.available },
          { label: "Equity", value: data.equity },
          { label: "Initial margin", value: data.i_margin },
          { label: "Maintenance margin", value: data.m_margin },
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
};
