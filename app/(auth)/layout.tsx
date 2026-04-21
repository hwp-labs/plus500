import type { Metadata } from "next";
import { Header } from "@/components/species/auth/components/header";

export const metadata: Metadata = {
  title: "Futures | Global Fintech App for Futures Trading",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
