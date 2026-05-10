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


/**
 {[
            {
              name: "available",
              placeholder: "Avail. Bal.",
              value: formData.available,
            },
            {
              name: "equity",
              placeholder: "Equity",
              value: formData.equity,
            },
            {
              name: "i_margin",
              placeholder: "Ini. Margin",
              value: formData.i_margin,
            },
            {
              name: "m_margin",
              placeholder: "Mtn. Margin",
              value: formData.m_margin,
            },
            {
              name: "profit_loss",
              placeholder: "Profit/Loss",
              value: formData.profit_loss,
            },
          ].map((input, j) => (
            <Fragment key={input.name}>
              {i === editIndex ? (
                <InlineEditForm
                  placeholder={input.placeholder}
                  value={input.value}
                  onChange={(v) =>
                    setFormData((s) => ({
                      ...s,
                      [input.name]: parseFloat(v),
                    }))
                  }
                  // handleSave={handleChange}
                />
              ) : (
                <TableBuilder.Amount value={item[item.name]} currency="usd" />
              )}
            </Fragment>
          ))}
 */