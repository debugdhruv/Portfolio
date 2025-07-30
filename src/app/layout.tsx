import "./globals.css";
import type { Metadata } from "next";
import { whyte, italiana, inter, tiro, barcode } from "@/lib/fonts";
import NavBar from "@/components/NavBar";
import CustomCursor from "@/components/CustomCursor";

export const metadata : Metadata = {
  title: "Dhruv Tiwari — UX Designer & Developer",
  description: "Portfolio of Dhruv Narayan Tiwari, showcasing design and development work.",
  openGraph: {
    title: "Dhruv Tiwari",
    description: "UX Designer & Frontend Developer Portfolio",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${whyte.variable} ${italiana.variable} ${inter.variable} ${tiro.variable} ${barcode.variable} `}>
      <body className="antialiased">
        <CustomCursor />
        <NavBar />
        {children}
      </body>
    </html>
  );
}