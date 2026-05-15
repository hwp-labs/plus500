import type { Metadata } from "next";
//
import { TableBuilder } from "@/components/species/dashboard/components/table-builder";
import { TableButton } from "@/components/species/dashboard/components/table-builder/button";
import { TableAction } from "@/components/species/dashboard/components/table-builder/action";
//
import { TransactionEntity } from "@/lib/fsdb/config";
import data from "@/lib/fsdb/data/transactions.json";

export const metadata: Metadata = {
  title: "Manage Transactions",
};

export default function TransactionsPage() {
  return (
    <main className="bg-background flex-1">
      <table className="w-full">
        <TableBuilder.THead
          data={["Date|c", "Account", "Type", "Amount", "Status|c", ""]}
          hasActions // id:receipt,delete
        />
        <TableBuilder.TBody>
          {(data as TransactionEntity[]).map((item, i) => (
            <TableBuilder.Tr key={i}>
              <TableBuilder.DateTime dt={item.updated_at} />
              <td>{item.email}</td>
              <td>{item.type ? "Deposit" : "Withdrawal"}</td>
              <TableBuilder.Amount value={item.amount} currency="usd" />
              <TableBuilder.Pill
                label={item.status ? "Approved" : "Pending"}
                variant={item.status ? "success" : "danger"}
              />
              {item.status ? <td></td> : <TableButton>Approve</TableButton>}
              <TableAction hasInfo hasDelete />
            </TableBuilder.Tr>
          ))}
        </TableBuilder.TBody>
      </table>
    </main>
  );
}
