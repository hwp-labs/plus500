import type { Metadata } from "next";
import { CalendarDaysIcon } from "lucide-react";
// 
import { TableBuilder } from "@/components/species/dashboard/components/table-builder";
import { TableContent } from "@/components/species/orders/components/table-content";
import { OutlineBtn } from "@/components/species/dashboard/components/form-builder";

export const metadata: Metadata = {
  title: "My Orders",
};

export default function OrdersPage() {
  return (
    <main className="bg-background flex-1">
      <section className="flex flex-col gap-4 bg-[#25364b] px-4 pt-2 pb-4 sm:flex-row sm:items-end sm:gap-6">
        <DateInput name="from" label="From" defaultValue="09/14/2021" />
        <DateInput name="to" label="To" defaultValue="09/14/2022" />
        <div className="flex-cs gap-4">
          <OutlineBtn>Display</OutlineBtn>
          <OutlineBtn>Send by email</OutlineBtn>
        </div>
      </section>
      <table className="w-full">
        <TableBuilder.THead
          data={["Amount", "Wallet", "Type", "Status|c", "Date|c"]}
          hasNumbers
          hasActions
        />
        <TableContent />
      </table>
    </main>
  );
}

interface DateInputProps {
  name: string;
  label: string;
  defaultValue?: string;
}

const DateInput = ({ name, label, defaultValue }: DateInputProps) => (
  <div className="">
    <label htmlFor={name} className="font-semibold">
      {label}
    </label>
    <div className="flex-cs mt-1 gap-2">
      <input
        type="text"
        id={name}
        defaultValue={defaultValue}
        className="input-reset bg-header px-2 py-1 md:w-50"
      />
      <CalendarDaysIcon size={18} />
    </div>
  </div>
);
