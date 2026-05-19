"use client";

import { useEffect } from "react";
import { useUsersApi } from "@/hooks/services/use-users-api";
import { asMoney } from "@/utils";
import { CURRENCY } from "@/constants/CURRENCY";

export const AccountBal = () => {
  const { user, fetchUser } = useUsersApi();

  useEffect(() => {
    fetchUser();
  }, []);
  //
  return (
    <section>
      <h2 className="mt-4 text-lg font-bold">Account Balance</h2>
      <ul className="mt-2 space-y-1 px-4">
        {[
          { label: "Available to withdraw", value: user.available },
          { label: "Equity", value: user.equity },
          { label: "Initial margin", value: user.i_margin },
          { label: "Maintenance margin", value: user.m_margin },
          { label: "Profit/Loss", value: user.profit_loss },
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
