"use client";

import { useEffect } from "react";
import { TableBuilder } from "../../dashboard/components/table-builder";
import { TableButton } from "../../dashboard/components/table-builder/button";
import { TableAction } from "../../dashboard/components/table-builder/action";
import { TableEmpty } from "../../dashboard/components/table-builder/empty";
import { useTransactionsApi } from "@/hooks/services/use-transactions-api";

export const TableContent = () => {
  const {
    refetchKey,
    fetching,
    loading,
    success,
    data,
    fetchTransactions,
    handleView,
    handleUpdate,
    handleDelete,
  } = useTransactionsApi();

  useEffect(() => {
    fetchTransactions();
  }, [refetchKey]);
  //
  return (
    <TableBuilder.TBody>
      <TableBuilder.TrLoading show={fetching} />
      {data.length ? (
        data.map((item, i) => (
          <TableBuilder.Tr key={i}>
            <TableBuilder.DateTime dt={item.updated_at} />
            <td>{item.email}</td>
            <td>{item.type ? "Deposit" : "Withdrawal"}</td>
            <TableBuilder.Amount value={item.amount} currency="usd" />
            <td>{item.wallet}</td>
            <TableBuilder.Pill
              label={item.status ? "Approved" : "Pending"}
              variant={item.status ? "success" : "danger"}
            />
            {item.status ? (
              <td></td>
            ) : (
              <TableButton
                onClick={() => handleUpdate(item.id)}
                loading={loading}
              >
                Approve
              </TableButton>
            )}
            <TableAction
              hasFile
              onFile={() => handleView(item.receipt)}
              hasDelete
              onDelete={() => handleDelete(item)}
            />
          </TableBuilder.Tr>
        ))
      ) : (
        <TableEmpty label="No transaction records" />
      )}
    </TableBuilder.TBody>
  );
};
