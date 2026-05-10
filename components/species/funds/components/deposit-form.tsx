"use client";

import { IconCopy } from "@tabler/icons-react";
import {
  FileInput,
  NumberInput,
} from "../../dashboard/components/form-builder";
import { SectionHeading } from "./section-heading";
//
import data from "@/lib/fsdb/data/admin.json";

interface Props {
  onClose?: () => void;
}

export const DepositForm = ({ onClose }: Props) => {
  return (
    <section>
      <SectionHeading onClose={onClose}>Deposit Slip</SectionHeading>
      <ul className="mt-2 space-y-4 px-4 sm:space-y-2">
        {list.map((item, i) => (
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
                defaultValue={item.address}
                className="input-reset text-secondary w-full"
                readOnly
              />
              <button
                className="btn-fx"
                title="Copy"
                onClick={() => {
                  prompt(`${item.label} Wallet Address`, item.address);
                }}
              >
                <IconCopy size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4"></div>
      <NumberInput />
      <FileInput>Upload proof of deposit</FileInput>
    </section>
  );
};

const list = [
  {
    label: "BTC",
    src: "/images/coin-btc.png",
    address: data.btc,
  },
  {
    label: "ETH",
    src: "/images/coin-eth.png",
    address: data.eth,
  },
  {
    label: "USDT",
    src: "/images/coin-usdt.png",
    address: data.usdt,
  },
  {
    label: "USDC",
    src: "/images/coin-usdc.png",
    address: data.usdc,
  },
];
