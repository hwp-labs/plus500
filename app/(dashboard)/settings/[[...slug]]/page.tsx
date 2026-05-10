import type { Metadata } from "next";
import {
  TextInput,
  PairedSubmitBtn,
} from "@/components/species/dashboard/components/form-builder";
// 
import data from "@/lib/fsdb/data/admin.json";

export const metadata: Metadata = {
  title: "Settings",
};

export default function SettingsPage() {
  return (
    <main className="container-sm bg-background flex-1 px-6">
      <h1 className="mt-4 text-center text-3xl font-bold">Settings</h1>
      <ul className="space-y-4 [&>li>h2]:text-lg [&>li]:space-y-1">
        <li>
          <h2>BTC Address</h2>
          <TextInput defaultValue={data.btc} />
        </li>
        <li>
          <h2>ETH Address</h2>
          <TextInput defaultValue={data.eth} />
        </li>
        <li>
          <h2>USDT Address</h2>
          <TextInput defaultValue={data.usdt} />
        </li>
        <li>
          <h2>USDC Address</h2>
          <TextInput defaultValue={data.usdc} />
        </li>
      </ul>
      <PairedSubmitBtn>Save</PairedSubmitBtn>
    </main>
  );
}
