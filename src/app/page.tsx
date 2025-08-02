"use client";

import Image from "next/image";
import { useEffect } from "react";

declare global {
  interface Window {
    updateFavicon?: () => void;
  }
}

export default function Home() {
  const handleToggle = () => {
    if (typeof window !== "undefined") {
      const html = document.documentElement;
      const currentTheme = html.classList.contains("dark") ? "dark" : "light";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      html.classList.remove(currentTheme);
      html.classList.add(newTheme);
      localStorage.setItem("theme", newTheme);
      window.updateFavicon?.();
    }
  };
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const html = document.documentElement;

      if (savedTheme) {
        html.classList.add(savedTheme);
      } else {
        html.classList.add(prefersDark ? "dark" : "light");
      }
    }
  });

  return (
    <main className="relative w-full items-center justify-center px-4 pt-24 md:pt-32 lg:pt-40">
      {/* Hero Section */}
      <section className="relative max-w-5xl w-full mx-auto px-4 py-12">
        {/* Dot grid background (only inside hero section) */}
        <Image
          width="0"
          height="0"
          src="/dots.svg"
          alt="Background Dots"
          className="absolute inset-0 w-full h-full dark:opacity-25 object-cover pointer-events-none z-0"
        />

        <div className="relative z-10 flex flex-col items-start space-y-6">
          {/* Top line: Creative + gif */}
          <div className="flex items-end justify-between w-full mb-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[8.2rem] font-italiana text-foreground">
              Creative
            </h1>
            <div className="ml-4 sm:ml-0 flex flex-col items-start">
              <Image
                width="492"
                height="164"
                src="/hero_content.gif"
                alt="Hero Content"
                className="rounded-3xl object-contain mb-2"
              />
              <p className="text-xs sm:text-sm md:text-base text-left font-tiro text-muted-foreground tracking-wider">
                भारतीय <span className="text-primary font-bold">PRODUCT DESIGNER</span>,
                डिज़ाइन के <br/>माध्यम से बेहतर मानव अनुभव बनाने में शामिल ।।
              </p>
            </div>
          </div>

          {/* PRODUCT */}
          <h2 className="text-7xl sm:text-7xl md:text-9xl lg:text-[11.6rem] font-bold font-whyte text-primary leading-none relative">
            PRODUCT
            <div className="absolute left-[260px] top-[-64px] w-[320px] h-[244px] z-10 blur-3xl opacity-50 rounded-full bg-gradient-to-r from-[#6F392A] to-[#AC2033] dark:from-[#092B44] dark:to-[#1A7F91]" />
            <div className="absolute left-[264px] top-[-16px] z-20 cursor-pointer group" onClick={handleToggle}>
              <div className="w-[320px] h-[164px] rounded-full transition-all duration-300 ease-out bg-[url('/toggle_light_bg.png')] dark:bg-[url('/toggle_dark_bg.png')] bg-cover bg-center flex items-center pb-5 px-6">
              <div className="w-[112px] h-[112px] bg-white rounded-full shadow-[inset_0_8px_12px_rgba(0,0,0,0.40)] drop-shadow-lg transform transition-transform duration-300 ease-out translate-x-0 dark:translate-x-[154px]" />
              </div>
            </div>
          </h2>

          {/* DESIGNER */}
          <div className="flex flex-col items-start relative">
            <h2 className="relative text-7xl sm:text-7xl md:text-9xl lg:text-[11rem] font-bold font-whyte text-foreground flex items-center gap-2">
              DES
              <span className="relative w-[60px] h-[130px] -top-8 inline-block">
                <Image
                  src="/i_overlay_light.png"
                  alt="I Overlay Light"
                  fill
                  className="object-contain dark:hidden"
                />
                <Image
                  src="/i_overlay_dark.png"
                  alt="I Overlay Dark"
                  fill
                  className="object-contain hidden dark:block"
                />
              </span>
              GNER
            </h2>
            <Image
              src="/finder.png"
              alt="Finder"
              width={80}
              height={80}
              className="absolute right-[-44px] bottom-[82px] rotate-[10deg] z-10"
            />
            <div className="w-full flex justify-end">
              <div className="font-whyte text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold text-foreground">
                & DEVELOPER
              </div>
            </div>
          </div>

          {/* & DEVELOPER under DESIGNER */}

          {/* Final line: Open to job offers */}
          <div className="text-base sm:text-lg md:text-xl text-foreground font-medium mt-4 text-center w-full px-4">
            <span className="text-foreground font-bold">Open</span> to new job offers{" "}
            <span className="inline-block w-2 h-2 ml-2">🟢</span>
          </div>
        </div>
      </section>
      {/* lil intro */}
      <section>
        <div className="text-wrap mt-10 font-inter font-semibold text-2xl flex justify-center items-center max-w-3xl text-foreground">
          <h1>
          Hi, I am Dhruv ✌🏻 practicing design since 2020 focused on designing 🖌️ and building digital product 🪐, brands 
            <Image
            src="/fingerprint.svg"
            alt="FingerPrint"
            width={30}
            height={30}
            className="inline-block"/>
          and experiences 🪄.
          </h1>
        </div>
      </section>
    </main>
  );
}