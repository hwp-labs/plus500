"use client";

import { useEffect } from "react";
import { useUsersApi } from "@/hooks/services/use-users-api";
import { useTransactionsApi } from "@/hooks/services/use-transactions-api";
import { asMoney } from "@/utils";
import { CURRENCY } from "@/constants/CURRENCY";

export const AccountBal = () => {
  const { fetching, data, fetchTransaction } = useTransactionsApi();
  const { user, fetchUser } = useUsersApi();

  useEffect(() => {
    fetchTransaction();
    fetchUser();
  }, []);

  const sumPendingDeposits = data.reduce(
    (i, item) => (!item.status && item.type ? Number(item.amount) + i : i),
    0,
  );

  const sumPendingWithdrawals = data.reduce(
    (i, item) => (!item.status && !item.type ? Number(item.amount) + i : i),
    0,
  );
  //
  return fetching ? (
    <section className="bg-card mt-6 min-h-60 rounded-2xl" />
  ) : (
    <section className="">
      <h2 className="mt-4 text-lg font-bold">Ledger Balance</h2>
      <ul className="mt-2 space-y-1 px-4">
        {[
          {
            label: "Deposits",
            value: sumPendingDeposits,
          },
          { label: "Withdraws", value: sumPendingWithdrawals },
        ].map(({ label, value }, i) => (
          <li key={i} className="flex-cb gap-2">
            <div>{label}</div>
            <div className="border-muted flex-1 border-b border-dashed"></div>
            <div>{CURRENCY.Euro.symbol + asMoney(value)}</div>
          </li>
        ))}
      </ul>
      <h2 className="mt-4 text-lg font-bold">Available Balance</h2>
      <ul className="mt-2 space-y-1 px-4">
        {[
          { label: "Available", value: user.available },
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
