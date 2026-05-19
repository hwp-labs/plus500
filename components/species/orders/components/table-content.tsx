"use client";

import { useEffect } from "react";
import { TableBuilder } from "../../dashboard/components/table-builder";
import { TableAction } from "../../dashboard/components/table-builder/action";
import { useTransactionsApi } from "@/hooks/services/use-transactions-api";
import { useAuthStore } from "@/store/auth-store";

export const TableContent = () => {
  const session = useAuthStore((s) => s.session);
  const { refetchKey, fetching, data, fetchData, handleView } =
    useTransactionsApi();

  useEffect(() => {
    fetchData(session?.email);
  }, [refetchKey]);
  //
  return (
    <TableBuilder.TBody>
      <TableBuilder.TrLoading show={fetching} />
      {data.map((item, i) => (
        <TableBuilder.Tr key={i}>
          <td>{i + 1}</td>
          <TableBuilder.Amount value={item.amount} currency="usd" />
          <td>{item.type ? "Deposit" : "Withdrawal"}</td>
          <TableBuilder.Pill
            label={item.status ? "Approved" : "Pending"}
            variant={item.status ? "success" : "danger"}
          />
          <TableBuilder.DateTime dt={item.updated_at} />
          <TableAction hasFile onFile={() => handleView(item.receipt)} />
        </TableBuilder.Tr>
      ))}
    </TableBuilder.TBody>
  );
};
