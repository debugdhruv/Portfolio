"use client";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Image from "next/image";
import { useEffect, useState } from "react";

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

  // TypingAnimation role cycling logic
  const roles = ["& DEVELOPER", "& THINKER", "& CREATOR"];
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
    }, 3500); // Change every 2.5 seconds
    return () => clearInterval(interval);
  }, [roles.length]);

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
                unoptimized
                className="rounded-3xl object-contain mb-2"
              />
              <p className="text-xs sm:text-sm md:text-base text-left font-tiro text-muted-foreground tracking-wider">
                भारतीय <span className="text-primary font-bold">PRODUCT DESIGNER</span>,
                डिज़ाइन के <br />माध्यम से बेहतर मानव अनुभव बनाने में शामिल ।।
              </p>
            </div>
          </div>

          {/* PRODUCT */}
          <h2 className="text-7xl sm:text-7xl md:text-9xl lg:text-[11.6rem] font-bold font-whyte text-primary leading-none relative">
            PRODUCT
            <div className="absolute left-[90px] top-[-32px] sm:left-[260px] sm:top-[-64px] w-[196px] h-[122px] sm:w-[320px] sm:h-[244px] z-10 blur-3xl opacity-50 rounded-full bg-gradient-to-r from-[#6F392A] to-[#AC2033] dark:from-[#092B44] dark:to-[#1A7F91]" />
            <div className="absolute left-[100px] top-[-8px] sm:left-[264px] sm:top-[-16px] z-20 cursor-pointer group" onClick={handleToggle}>
              <div className="w-[128px] h-[64px] sm:w-[320px] sm:h-[164px] rounded-full transition-all duration-300 ease-out bg-[url('/toggle_light_bg.png')] dark:bg-[url('/toggle_dark_bg.png')] bg-cover bg-center flex items-center pb-2 px-3 sm:pb-5 sm:px-6">
                <div className="w-[44px] h-[44px] sm:w-[112px] sm:h-[112px] bg-white rounded-full shadow-[inset_0_8px_12px_rgba(0,0,0,0.40)] drop-shadow-lg transform transition-transform duration-300 ease-out translate-x-0 dark:translate-x-[58px] sm:dark:translate-x-[154px]" />
              </div>
            </div>
          </h2>

          {/* DESIGNER */}
          <div className="flex flex-col items-start relative">
            <h2 className="relative text-7xl sm:text-7xl md:text-9xl lg:text-[11rem] font-bold font-whyte text-foreground flex items-center gap-1 sm:gap-2">
              DES
              <span className="relative w-[28px] h-[56px] sm:w-[60px] sm:h-[130px] -top-4 sm:-top-8 inline-block">
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
              width={100}
              height={100}
              className="w-12 sm:w-20 sm:h-20 absolute right-[-32px] bottom-[38px] sm:right-[-44px] sm:bottom-[82px] rotate-[10deg] z-10"
            />
          {/* & DEVELOPER under DESIGNER */}
            <div className="w-full flex justify-end">
              <div className="font-whyte text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold text-foreground">
                <TypingAnimation duration={100} delay={0} className="inline-block" startOnView={false}>
                  {roles[currentRoleIdx]}
                </TypingAnimation>
              </div>
            </div>
          </div>


          {/* Final line: Open to job offers */}
          <div className="text-base sm:text-lg md:text-xl text-foreground font-medium mt-4 text-center w-full px-4">
            <span className="text-foreground font-bold">Open</span> to new job offers{" "}
            <span className="inline-block w-2 h-2 ml-2">🟢</span>
          </div>
        </div>
      </section>
      {/* lil intro */}
      <section className="w-full max-w-4xl mx-auto px-4 mt-24">
        <div className="font-inter font-semibold text-3xl sm:text-5xl flex justify-center items-center text-foreground">
          <h1 className="leading-normal tracking-tight">
            Hi, I am{" "}
            <Image
              src="/light_mini.png"
              alt="Mini Light"
              width={40}
              height={40}
              className="inline-block mx-2 align-baseline dark:hidden"
            />
            <Image
              src="/dark_mini.png"
              alt="Mini Dark"
              width={40}
              height={40}
              className="mx-2 align-baseline hidden dark:inline"
            />{" "}
            Dhruv ✌🏻 practicing design since
            <span className="hidden sm:inline absolute ml-8 mt-1 px-6 py-2 rounded-full border-2 border-foreground text-4xl">
              2020
            </span>
            <span className="inline sm:hidden px-3 py-1 rounded-full border border-foreground text-lg mx-2">
              2020
            </span>
            focused on designing 🖌️ and building digital product 🪐, brands{" "}
            <Image
              src="/fingerprint.svg"
              alt="FingerPrint"
              width={50}
              height={50}
              className="inline-block dark:hidden"
            />
            <Image
              src="/fingerprint2.svg"
              alt="FingerPrint Dark"
              width={50}
              height={50}
              className="hidden dark:inline-block"
            />{" "}
            and experiences 🪄.
          </h1>
        </div>
      </section>
      {/* skills */}
      <section>

      </section>


      {/* Featured Work */}
      <section>

      </section>

      {/* timeline */}
      <section>

      </section>


      {/* footer */}
      <section className="mt-96 flex flex-col items-center justify-center text-center space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <h1 className="text-6xl md:text-8xl font-whyte">INTERESTED</h1>
          <Image
            src="/peace_light.svg"
            alt="hi"
            width={96}
            height={96}
            className="absolute right-[396px] bottom-[136px]"
          />
        </div>
        <h1 className="text-6xl md:text-8xl font-whyte">IN WORKING TOGETHER?</h1>
      </section>

    </main>
  );
}