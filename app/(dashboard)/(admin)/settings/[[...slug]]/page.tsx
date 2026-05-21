import type { Metadata } from "next";
import { SettingsForm } from "@/components/species/settings/components/settings-form";

export const metadata: Metadata = {
  title: "Settings",
};

export default function SettingsPage() {
  return (
    <main className="container-sm bg-background flex-1 px-6">
      <h1 className="mt-4 text-center text-3xl font-bold">Settings</h1>
      <SettingsForm />
    </main>
  );
}
