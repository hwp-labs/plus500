"use client";

import { IconCopy } from "@tabler/icons-react";
import {
  FileInput,
  NumberInput,
  PairedSubmitBtn,
} from "../../dashboard/components/form-builder";
import { SectionHeading } from "./section-heading";
import { useFetchAdmin } from "@/hooks/use-fetch-admin";

interface Props {
  onClose?: () => void;
}

export const DepositForm = ({ onClose }: Props) => {
  const { data } = useFetchAdmin();
  //
  return (
    <section>
      <SectionHeading onClose={onClose}>Deposit Slip</SectionHeading>
      <ul className="mt-2 space-y-4 px-4 sm:space-y-2">
        {Object.values(data).map((item, i) => (
          <li
            key={i}
            className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
          >
            <figure className="flex-cs gap-2.5">
              <img src={item.src} alt="" width={24} className="rounded-full" />
              <figcaption className="font-semibold">{item.label}</figcaption>
            </figure>
            <div className="border-muted hidden flex-1 border-b border-dashed sm:flex"></div>
            <div className="flex-cs gap-2">
              <input
                defaultValue={item.value}
                className="input-reset text-secondary w-full"
                readOnly
              />
              <button
                className="btn-fx"
                title="Copy"
                onClick={() => {
                  prompt(`${item.label} Wallet Address`, item.value);
                }}
              >
                <IconCopy size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 grid gap-8 sm:grid-cols-4">
        <NumberInput />
        <FileInput>Upload proof of payment</FileInput>
      </div>
      <PairedSubmitBtn>Confirm Deposit</PairedSubmitBtn>
    </section>
  );
};
