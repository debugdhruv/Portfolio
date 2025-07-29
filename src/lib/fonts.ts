import localFont from "next/font/local";

export const whyte = localFont({
  src: [{ path: "../assets/fonts/WhyteInktrap-Super.ttf", weight: "900", style: "normal" }],
  variable: "--font-whyte",
  display: "swap",
});

export const italiana = localFont({
  src: [{ path: "../assets/fonts/Italiana-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-italiana",
  display: "swap",
});

export const inter = localFont({
  src: [
    { path: "../assets/fonts/Inter.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/Inter-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const tiro = localFont({
  src: [
    { path: "../assets/fonts/TiroDevanagariHindi-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/TiroDevanagariHindi-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-tiro",
  display: "swap",
});

export const barcode = localFont({
  src: [{ path: "../assets/fonts/LibreBarcode39Text-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-barcode",
  display: "swap",
});
