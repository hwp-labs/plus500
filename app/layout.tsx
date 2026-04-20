import type { Metadata } from "next";

import { METADATA } from "@/constants/META";
import { fontPoppins, fontRoboto } from "@/constants/FONT";
import "./globals.css";

export const metadata: Metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontPoppins.variable} ${fontRoboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
