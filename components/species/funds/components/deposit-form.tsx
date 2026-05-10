"use client";

import { IconCopy } from "@tabler/icons-react";
import { FileInput } from "../../dashboard/components/form-builder";
import { SectionHeading } from "./section-heading";

interface Props {
  onClose?: () => void;
}

export const DepositForm = ({  onClose }: Props) => {
  return (
    <section>
      <SectionHeading onClose={onClose}>Deposit Slip</SectionHeading>
      <ul className="mt-2 space-y-4 px-4 sm:space-y-2">
        {data.map((item, i) => (
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
              <button className="btn-fx" title="Copy">
                <IconCopy size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <FileInput>Upload proof of deposit</FileInput>
    </section>
  );
};

const data = [
  {
    label: "BTC",
    src: "/images/coin-btc.png",
    address: "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
  },
  {
    label: "ETH",
    src: "/images/coin-eth.png",
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  },
  {
    label: "USDT",
    src: "/images/coin-usdt.png",
    address: "TXkSb4FfBEbJXPRPg5V1HNsq9vr3dN85sS ",
  },
  {
    label: "USDC",
    src: "/images/coin-usdc.png",
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  },
];
