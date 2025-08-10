import "./globals.css";
import type { Metadata } from "next";
import { whyte, italiana, inter, tiro, barcode } from "@/lib/fonts";
import NavBar from "@/components/NavBar";
// import CustomCursor from "@/components/CustomCursor";
import ProgressBar from "@/components/ProgressBar";
import Preloader from "@/components/PreLoader";

export const metadata: Metadata = {
  metadataBase: new URL("https://dhruvux.vercel.app"),
  title: "Dhruv — Product Designer & Developer",
  description: "Portfolio of Dhruv Narayan Tiwari, showcasing design and development work.",
  openGraph: {
    title: "Dhruv Tiwari",
    description: "Product Designer & Frontend Developer Portfolio",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${whyte.variable} ${italiana.variable} ${inter.variable} ${tiro.variable} ${barcode.variable}`}>
      <head>
        <meta property="og:title" content="Dhruv Tiwari — Product Designer & Developer" />
        <meta property="og:description" content="Portfolio of Dhruv Narayan Tiwari, showcasing design and development work." />
        <meta property="og:image" content="https://dhruvux.vercel.app/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dhruvux.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dhruv Narayan Tiwari" />
        <meta name="keywords" content="Product Designer, Frontend Developer, Portfolio, UI/UX, Dhruv Narayan Tiwari, Dhruv Tiwari, React, Next.js, Design Portfolio" />
        <meta name="theme-color" content="#081417" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#FFFBF2" media="(prefers-color-scheme: light)" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function () {
        window.updateFavicon = function () {
          const darkMode = document.documentElement.classList.contains("dark");
          const existingIcons = document.querySelectorAll("link[rel~='icon']");
          existingIcons.forEach(el => el.parentNode?.removeChild(el));
          const newIcon = document.createElement('link');
          newIcon.rel = 'icon';
          newIcon.href = darkMode ? '/ico_dark.png' : '/ico_light.png';
          newIcon.type = 'image/png';
          document.head.appendChild(newIcon);
        };
        window.updateFavicon();

        // Listen to system change
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', window.updateFavicon);
      })();
    `
  }}
/>
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dhruv Tiwari — Product Designer & Frontend Developer" />
        <meta name="twitter:description" content="Portfolio of Dhruv Narayan Tiwari, showcasing modern product design and frontend development." />
        <meta name="twitter:image" content="https://dhruvux.vercel.app/og-image.png" />
        <meta name="twitter:creator" content="@yourTwitterHandle" />
        {/* Mobile Optimization */}
        <meta name="apple-mobile-web-app-title" content="Dhruv Tiwari" />
        <meta name="application-name" content="Dhruv Tiwari" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dhruv Narayan Tiwari",
              url: "https://dhruvux.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/dhruvux",
                "https://github.com/debugdhruv"
              ],
              jobTitle: "Product Designer & Frontend Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Job or Open to Work"
              }
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Preloader/>
        <ProgressBar/>
        {/* <CustomCursor /> */}
        <NavBar />
        {children}
      </body>
    </html>
  );
}