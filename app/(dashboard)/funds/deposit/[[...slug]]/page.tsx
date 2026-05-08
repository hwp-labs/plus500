import type { Metadata } from "next";
import { IconCopy } from "@tabler/icons-react";
import { FileInput } from "@/components/species/dashboard/components/form-builder";

export const metadata: Metadata = {
  title: "Deposit Funds",
};

export default function DepositFundsPage() {
  return (
    <main className="container-sm space-y-8">
      <h1 className="mt-4 text-center text-3xl font-bold">Deposit Funds</h1>
      <ul className="flex-cb mt-4 flex-wrap gap-8">
        {data.map((item, i) => (
          <li key={i} className="debug_">
            <figure className="flex-col-cc debug_">
              <img src={item.src} alt="" width={80} className="rounded-full" />
              <figcaption className="mt-2 text-center text-lg font-bold">
                <h2>{item.label}</h2>
                <p className="flex-cs border-ash5 text-secondary mt-2 gap-2 border-2 px-4 py-2 font-mono text-sm">
                  {item.address}
                  <button className="dash-icon" title="Copy">
                    <IconCopy size={16} />
                  </button>
                </p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className="mt-4"></div>
      <FileInput>Upload proof of payment</FileInput>
    </main>
  );
}

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
