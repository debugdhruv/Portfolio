"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const handleToggle = () => {
    // Theme toggle logic here
  };

  return (
    <main className="relative w-full flex items-center justify-center px-4 pt-24 md:pt-32 lg:pt-40">
      <section className="relative max-w-5xl w-full mx-auto px-4 py-12">
        {/* Dot grid background (only inside hero section) */}
        <Image
          width="0"
          height="0"
          src="/dots.svg"
          alt="Background Dots"
          className="absolute inset-0 w-full h-full opacity-25 object-cover pointer-events-none z-0"
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
            <div className="absolute left-[280px] top-[-4px] w-[316px] h-[154px] z-20 cursor-pointer group" onClick={handleToggle}>
              <div className="w-full h-full rounded-full transition-all duration-300 ease-out bg-gradient-to-r from-[#6F392A] to-[#AC2033] dark:from-[#092B44] dark:to-[#1A7F91] flex items-center px-1.5">
                <div className="w-[122px] h-[122px] bg-white rounded-full shadow-md transform transition-transform duration-300 ease-out translate-x-0 group-[.dark]:translate-x-[194px]" />
              </div>
            </div>
          </h2>

          {/* DESIGNER */}
          <div className="flex flex-col items-start relative">
            <h2 className="relative text-7xl sm:text-7xl md:text-9xl lg:text-[11rem] font-bold font-whyte text-foreground">
              DES<span className="relative inline-block">
                I
                <Image
                  src="/i_overlay_light.png"
                  alt="i overlay"
                  width={60}
                  height={100}
                  className="absolute left-0 top-0 w-full h-full object-contain dark:hidden"
                />
                <Image
                  src="/i_overlay_dark.png"
                  alt="i overlay dark"
                  width={60}
                  height={100}
                  className="absolute left-0 top-0 w-full h-full object-contain hidden dark:block"
                />
              </span>GNER
            </h2>
            <Image
              src="/finder.png"
              alt="Finder"
              width={64}
              height={64}
              className="absolute right-[-32px] bottom-[-12px] rotate-[18deg] z-10"
            />
            <div className="w-full flex justify-end">
              <div className="font-whyte text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-foreground">
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
    </main>
  );
}