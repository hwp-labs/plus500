import type { Metadata } from "next";
//
import { TableBuilder } from "@/components/species/dashboard/components/table-builder";
import { TableContent } from "@/components/species/users/components/table-content";

export const metadata: Metadata = {
  title: "Manage Users",
};

export default function UsersPage() {
  return (
    <main className="bg-background flex-1">
      <table className="w-full">
        <TableBuilder.THead
          data={[
            "Account",
            "Avail. Bal.",
            "Equity",
            "Ini. Margin",
            "Mtn. Margin",
            "Profit/Loss",
            "Joined|c",
            "",
          ]}
          hasActions // id:edit,delete
        />
        <TableContent />
      </table>
    </main>
  );
}