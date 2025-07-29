import "./globals.css";
import type { Metadata } from "next";
import { whyte, italiana, inter, tiro, barcode } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Dhruv Font Test",
  description: "Local Fonts Test",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${whyte.variable} ${italiana.variable} ${inter.variable} ${tiro.variable} ${barcode.variable} dark`}>
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}
