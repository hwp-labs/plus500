"use client";

import { useEffect, useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import clsx from "clsx";
//
import { TableBuilder } from "../../dashboard/components/table-builder";
import { TableAction } from "../../dashboard/components/table-builder/action";
import { TableEmpty } from "../../dashboard/components/table-builder/empty";
import { useTransactionsApi } from "@/hooks/services/use-transactions-api";
import { useAuthStore } from "@/store/auth-store";
import { PATH_PROTECTED } from "@/constants/PATH";

export const TableContent = () => {
  const session = useAuthStore((s) => s.session);

  const { fetching, data, fetchDataByEmail, handleView } = useTransactionsApi();

  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    fetchDataByEmail(session?.email);
  }, []);
  //
  return (
    <TableBuilder.TBody>
      <TableBuilder.TrLoading show={fetching} />
      <TableBuilder.Tr>
        <td colSpan={9}>
          <div
            onClick={() => setCollapsed((s) => !s)}
            className={clsx(
              "flex-cb hover:bg-secondary cursor-pointer p-2",
              collapsed ? "bg-secondary" : "bg-aside",
            )}
          >
            <p className="flex-cs gap-2">
              {collapsed ? (
                <ChevronDownIcon size={18} strokeWidth={3} />
              ) : (
                <ChevronRightIcon size={18} strokeWidth={3} />
              )}
              Executed
            </p>
            <p>Last 72 Hours</p>
          </div>
        </td>
      </TableBuilder.Tr>
      {/*  */}
      {collapsed ? (
        data.length ? (
          data.map((item, i) => (
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
          ))
        ) : (
          <TableEmpty
            label="No transactions"
            buttonText="Start Trading"
            path={PATH_PROTECTED.trade}
          />
        )
      ) : null}
    </TableBuilder.TBody>
  );
};
