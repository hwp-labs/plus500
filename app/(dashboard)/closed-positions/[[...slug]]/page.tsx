import type { Metadata } from "next";
import { CalendarDaysIcon } from "lucide-react";
//
import { TableBuilder } from "@/components/species/dashboard/components/table-builder";
import { FormBuilder } from "@/components/species/dashboard/components/form-builder";
import { CURRENCY } from "@/constants/CURRENCY";

export const metadata: Metadata = {
  title: "Close Positions",
};

export default function ClosedPositionsPage() {
  return (
    <main className="flex-col-xx min-h-[92svh]">
      <section className="flex-1">
        <div className="flex-es gap-6 bg-[#25364b] px-4 pt-2 pb-4">
          <DateInput name="from" label="From" defaultValue="2021-09-14" />
          <DateInput name="to" label="To" defaultValue="2022-09-14" />
          <div className="flex-cs gap-4">
            <FormBuilder.Button>Display</FormBuilder.Button>
            <FormBuilder.Button>Send by email</FormBuilder.Button>
          </div>
        </div>
        <table className="w-full">
          <TableBuilder.Thead
            data={[
              "Type",
              "Net P&L",
              "Close Value",
              "Opening Rate<br/>Close Rate",
              "Adjustments",
              "Overnight Fun...",
              "Close Time",
              "Close Reason",
            ]}
            hasActions
          />
        </table>
      </section>
      <section className="debug_ border-ash6 border-t pt-2 pb-4">
        <div className="container-sm flex-cb">
          <div>{CURRENCY.Euro.symbol}0.00 Total</div>
          <div className="flex-cs gap-8">
            <div>{CURRENCY.Euro.symbol}0.00</div>
            <div>{CURRENCY.Euro.symbol}0.00</div>
          </div>
        </div>
      </section>
    </main>
  );
}

interface DateInputProps {
  name: string;
  label: string;
  defaultValue?: string;
}

const DateInput = ({ name, label, defaultValue }: DateInputProps) => (
  <div className="flex-col-xx space-y-1">
    <label htmlFor={name} className="font-semibold">
      {label}
    </label>
    <div className="flex-cs gap-2">
      <input
        type="date"
        id={name}
        defaultValue={defaultValue}
        className="input-reset bg-header w-50 px-2 py-1"
      />
      <CalendarDaysIcon size={18} />
    </div>
  </div>
);
