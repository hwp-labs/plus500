import type { Metadata } from "next";

import { TableBuilder } from "@/components/species/dashboard/components/table-builder";
import { TableContent } from "@/components/species/transactions/components/table-content";

export const metadata: Metadata = {
  title: "Manage Transactions",
};

export default function TransactionsPage() {
  return (
    <main className="bg-background flex-1">
      <table className="w-full">
        <TableBuilder.THead
          data={[
            "Date|c",
            "Account",
            "Type",
            "Amount",
            "Wallet",
            "Status|c",
            "",
          ]}
          hasActions // id:receipt,delete
        />
        <TableContent />
      </table>
    </main>
  );
}
