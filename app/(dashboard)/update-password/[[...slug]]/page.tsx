import type { Metadata } from "next";
import { PasswordForm } from "@/components/species/update-password/components/password-form";

export const metadata: Metadata = {
  title: "Update Password",
};

export default function UpdatePasswordPage() {
  return (
    <main className="container-sm bg-background flex-1 px-6">
      <h1 className="mt-4 text-center text-3xl font-bold">Update Password</h1>
      <PasswordForm />
    </main>
  );
}
