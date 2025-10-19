"use client";
import { AnimatePresence } from "framer-motion";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// X icon ko yahan import karein
import { ArrowUp, X } from 'lucide-react';
import { motion } from "framer-motion";
import FeaturedWork from "@/components/FeaturedWork";
import NavBar from "@/components/NavBar";

declare global {
  interface Window {
    updateFavicon?: () => void;
  }
  interface TimelineItem {
    year: string;
    project: string;
    type: string;
    link?: boolean;
    external?: boolean;
  }
}

const timeline: TimelineItem[] = [
  { year: "2022 - Present", project: "Various Startups & Clients", type: "Freelancer", link: true, external: false },
  { year: "Aug 2025 - Present", project: "Dev Ripples", type: "Product Design Lead", link: false, external: false },
  { year: "Jul - Nov 2024", project: "Xeonic", type: "UI/UX Designer", link: false, external: false },
  { year: "Aug 2023 - Nov 2024", project: "Vyapari Sang", type: "Product Designer", link: false, external: false },
  { year: "Sept 2023 - 2024", project: "Google Developers Student Club", type: "UI/UX Design Campus Lead", link: false, external: false },
  { year: "Feb 2020 - 2022", project: "Graphic Design & Content Writing", type: "Fiverr Freelancer", link: false, external: false },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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

  const roles = ["& DEVELOPER", "& Thinker", "& CREATOR"];
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <>
      <NavBar onMenuToggle={setMenuOpen} />
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full items-center justify-center px-4 pt-24 md:pt-32 lg:pt-28">

        {/* Aapke page ka poora code yahan hai, maine use chota kar diya hai */}
        {/* Hero Section */}
        <section id="hero" className="relative max-w-5xl w-full mx-auto px-4 py-12">
          <div className="relative z-10 flex flex-col items-start space-y-6">
            <div className="flex items-end justify-between w-full mb-4">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-5xl sm:text-6xl md:text-8xl lg:text-[8.2rem] font-italiana text-foreground">
                Creative
              </motion.h1>
              <div className="ml-4 sm:ml-0 flex flex-col items-start">
                <Image
                  width="492"
                  height="164"
                  src="/hero_content.gif"
                  alt="Hero Content"
                  unoptimized
                  className="rounded-xl sm:rounded-3xl object-contain mb-2"
                />
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="hidden sm:inline-block text-xs sm:text-sm md:text-base text-left font-tiro text-foreground tracking-wider">
                  भारतीय <span className="text-primary font-bold">PRODUCT DESIGNER</span>,
                  डिज़ाइन के <br />माध्यम से बेहतर मानव अनुभव बनाने में शामिल ।।
                </motion.p>
              </div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-6xl sm:text-7xl md:text-9xl lg:text-[11.6rem] font-bold font-whyte tracking-wide text-primary relative">
              PRODUCT
              <div className="absolute left-[60px] top-[-32px] sm:left-[260px] sm:top-[-64px] w-[196px] h-[122px] sm:w-[320px] sm:h-[244px] z-10 blur-3xl opacity-50 rounded-full bg-gradient-to-r from-[#6F392A] to-[#AC2033] dark:from-[#092B44] dark:to-[#1A7F91]" />
              <div className="absolute left-[88px] top-[-10px] sm:left-[268px] sm:top-[-20px] z-20 cursor-pointer group" onClick={handleToggle}>
                <div className="w-[106px] h-[58px] sm:w-[334px] sm:h-[172px] rounded-full transition-all duration-300 ease-out bg-[url('/toggle_light_bg.png')] dark:bg-[url('/toggle_dark_bg.png')] bg-cover bg-center flex items-center pb-2 px-3 sm:pb-5 sm:px-8">
                  <div className="w-[36px] h-[36px] sm:w-[112px] sm:h-[112px] bg-white rounded-full shadow-[inset_0_8px_12px_rgba(0,0,0,0.40)] drop-shadow-lg transform transition-transform duration-300 ease-out translate-x-0 dark:translate-x-[48px] sm:dark:translate-x-[154px]" />
                </div>
              </div>
            </motion.h2>

            <div className="flex flex-col items-start relative">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative text-6xl sm:text-7xl md:text-9xl lg:text-[11rem] font-bold font-whyte text-foreground flex items-center gap-1 sm:gap-2">
                DES
                <span className="relative w-[28px] h-[50px] sm:w-[60px] sm:h-[130px] -top-3 sm:-top-8 inline-block">
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
              </motion.h2>
              <Image
                src="/finder.png"
                alt="Finder"
                width={100}
                height={100}
                className="w-14 sm:w-24 sm:h-20 absolute right-[-12px] bottom-[-8px] sm:right-[-44px] sm:bottom-[88px] rotate-[5deg] z-10"
              />
              <div className="w-full flex justify-end">
                <div className="font-whyte text-sm sm:text-xl md:text-3xl lg:text-5xl font-bold text-foreground">
                  <TypingAnimation duration={100} delay={0} className="inline-block" startOnView={false}>
                    {roles[currentRoleIdx]}
                  </TypingAnimation>
                </div>
              </div>
            </div>

            <div className="text-base sm:text-lg md:text-xl text-foreground font-medium mt-4 text-center w-full px-4">
              <span className="text-foreground font-bold">Open</span> to new job offers{" "}
              <span className="inline-block w-2 h-2 ml-2">🟢</span>
            </div>
          </div>
        </section>

        {/* lil intro */}
        <section className="w-full max-w-6xl mx-auto px-4 mt-20">
          <div className="font-inter font-semibold text-3xl sm:text-6xl flex justify-center items-center text-center sm:text-justify text-foreground">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="leading-relaxed sm:leading-normal sm:tracking-tight">
              Hi, I am{" "}
              <Image
                src="/light_mini.png"
                alt="Mini Light"
                width={40}
                height={40}
                className="inline-block mx-1 sm:mx-2 align-middle dark:hidden"
              />
              <Image
                src="/dark_mini.png"
                alt="Mini Dark"
                width={40}
                height={40}
                className="mx-1 sm:mx-2 align-middle hidden dark:inline"
              />{" "}
              Dhruv ✌🏻 <br className="sm:hidden" />
              practicing design since{" "}
              <span className="hidden sm:inline absolute ml-6 mt-5 px-6 py-2 rounded-full border-2 border-foreground text-4xl">
                2020
              </span>
              <span className="inline-block sm:hidden px-3 py-1 rounded-full border border-foreground text-lg mx-1">
                2020
              </span>
              <span className="inline sm:hidden">
                focused on designing 🖌️ and building digital 🪐 products, brands{" "}
              </span>
              <span className="hidden sm:inline">
                <br />
                focused on designing 🖌️ and building digital 🪐 products, brands{" "}
              </span>
              <Image
                src="/fingerprint.svg"
                alt="FingerPrint"
                width={50}
                height={50}
                className="inline-block mx-1 sm:mx-0 align-middle dark:hidden"
              />
              <Image
                src="/fingerprint2.svg"
                alt="FingerPrint Dark"
                width={50}
                height={50}
                className="hidden mx-1 sm:mx-0 align-middle dark:inline-block"
              />{" "}
              and experiences 🪄.
            </motion.h1>
          </div>
        </section>

        {/* skills */}
        <section className="flex justify-center items-center w-screen overflow-x-auto no-scrollbar mt-28 relative left-1/2 right-1/2 -mx-[50vw]">
          <div className="flex flex-col text-left w-full max-w-6xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="font-inter text-2xl font-semibold">
              with my skills in:
            </motion.h1>

            {/* Desktop View - Images */}
            <Image
              src="/skills_light.svg"
              alt="Skills"
              width={1200}
              height={1200}
              className="hidden sm:block dark:hidden"
            />
            <Image
              src="/skills_dark.svg"
              alt="Skills Dark"
              width={1200}
              height={1200}
              className="hidden sm:dark:block"
            />

            {/* Mobile View - Marquee */}
            <div className="sm:hidden overflow-x-auto no-scrollbar mt-4">
              <div className="flex gap-3 animate-marquee-fast whitespace-nowrap w-max px-0">

                {/* First set */}
                <div className="inline-flex gap-3">
                  <span className="px-3 py-2 bg-foreground text-background border-2 border-foreground rounded-full text-sm font-medium">Empathy</span>
                  <span className="px-3 py-2 border-2 border-foreground rounded-full text-sm font-medium">Visual & UI</span>
                  <span className="px-3 py-2 bg-foreground border-2 border-foreground rounded-full text-sm text-background font-medium">User Research</span>
                  <span className="px-3 py-2 border-2 border-foreground rounded-full text-sm font-medium">Wireframing</span>
                  <span className="px-3 py-2 bg-foreground text-background border-2 border-foreground rounded-full text-sm font-medium italic">Prototyping</span>
                  <span className="px-3 py-2 border-2 border-foreground rounded-full text-sm font-medium">User Flow</span>
                  <span className="px-3 py-2 bg-foreground text-background border-2 border-foreground rounded-full text-sm font-medium">Collaboration</span>
                  <span className="px-3 py-2 border-2 border-foreground rounded-full text-sm font-medium">Information Design</span>
                  <span className="px-3 py-2 bg-foreground text-background border-2 border-foreground rounded-full text-sm font-medium">Critical Thinking</span>
                  <span className="px-3 py-2 border-2 border-foreground rounded-full text-sm font-medium">Frontend Development</span>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="inline-flex gap-3">
                  <span className="px-3 py-2 bg-foreground text-background border-2 border-foreground rounded-full text-sm font-medium">Empathy</span>
                  <span className="px-3 py-2 border-2 border-foreground rounded-full text-sm font-medium">Visual & UI</span>
                  <span className="px-3 py-2 bg-foreground border-2 border-foreground rounded-full text-sm text-background font-medium">User Research</span>
                  <span className="px-3 py-2 border-2 border-foreground rounded-full text-sm font-medium">Wireframing</span>
                  <span className="px-3 py-2 bg-foreground text-background border-2 border-foreground rounded-full text-sm font-medium italic">Prototyping</span>
                  <span className="px-3 py-2 border-2 border-foreground rounded-full text-sm font-medium">User Flow</span>
                  <span className="px-3 py-2 bg-foreground text-background border-2 border-foreground rounded-full text-sm font-medium">Collaboration</span>
                  <span className="px-3 py-2 border-2 border-foreground rounded-full text-sm font-medium">Information Design</span>
                  <span className="px-3 py-2 bg-foreground text-background border-2 border-foreground rounded-full text-sm font-medium">Critical Thinking</span>
                  <span className="px-3 py-2 border-2 border-foreground rounded-full text-sm font-medium">Frontend Development</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <FeaturedWork />

        {/* Timeline Section - RESPONSIVE */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full font-inter mt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-whyte font-bold mb-8 sm:mb-12">
              Timeline
            </motion.h1>

            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`py-6 sm:py-8 hover:bg-black/15 dark:hover:bg-gray-900/50 transition-colors duration-300 px-3 sm:px-4`}>
                  {/* ${
                  item.link ? 'bg-black/20 dark:bg-gray-900/30' : ''
                } */}

                  {/* Mobile Layout - Stack vertically */}
                  <div className="flex flex-col gap-2 sm:hidden">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {item.year}
                    </span>
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.project}
                    </span>
                    <span className="text-base text-gray-700 dark:text-gray-300">
                      {item.type}
                    </span>
                  </div>

                  {/* Desktop Layout - Grid */}
                  <div className="hidden sm:grid sm:grid-cols-3 gap-4 items-center">
                    <span className="text-base lg:text-lg text-gray-600 dark:text-gray-400">
                      {item.year}
                    </span>
                    <span className="text-base lg:text-lg font-medium text-gray-900 dark:text-white">
                      {item.project}
                    </span>
                    <div className="flex justify-end">
                      <span className="text-base lg:text-lg text-gray-700 dark:text-gray-300">
                        {item.type}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Last Lines */}
        <div className="mt-44 mb-16 sm:mx-auto mx-2 items-center flex-1 justify-center sm:max-w-6xl">
          <motion.span initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="items-center text-muted-foreground justify-center flex text-6xl sm:text-7xl font-tiro">&quot;</motion.span>
          <motion.p initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-center -mt-4 justify-center text-primary font-tiro sm:font-italiana text-center text-md sm:text-4xl">
            My goal is to bridge the gap between design & development to build digital experiences that are both beautiful & functional.
          </motion.p>
          <motion.span className="flex mx-auto items-center justify-center mt-10 sm:mt-16 gap-4 sm:gap-4">
            <Image src="/ico_dark.png" width={100} height={100} alt="Me" className="dark:hidden inline-block w-10 h-10 sm:w-16 sm:h-16" />
            <Image src="/ico_light.png" width={100} height={100} alt="Me" className="dark:inline-block hidden w-10 h-10 sm:w-16 sm:h-16" />
            <motion.div className="flex-col sm:space-y-1 text-left justify-start">
              <motion.h3 className="font-inter font-bold text-sm sm:text-xl">Dhruv Narayan Tiwari</motion.h3>
              <motion.h3 className="font-inter font-semi text-xs sm:text-lg text-foreground/50">Product Designer & Developer</motion.h3>
            </motion.div>
          </motion.span>
        </div>

        {/* Footer */}
        <footer id="footer" className="min-h-screen w-full px-6 py-16 flex flex-col justify-end items-center text-center space-y-8 relative">
          <div className="flex-grow flex flex-col justify-center items-center w-full">
            <div className="flex items-baseline justify-center space-x-4">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-2xl sm:text-5xl md:text-7xl font-whyte">INTERESTED</motion.h1>
              <>
                <Image
                  src="/peace_light.svg"
                  alt="Peace Light"
                  width={40}
                  height={40}
                  className="sm:w-24 sm:h-24 inline-block dark:hidden"
                />
                <Image
                  src="/peace_dark.svg"
                  alt="Peace Dark"
                  width={40}
                  height={40}
                  className="sm:w-24 sm:h-24 hidden dark:inline-block"
                />
              </>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-2xl sm:text-5xl md:text-7xl mt-1 sm:mt-4 font-whyte">IN WORKING TOGETHER?</motion.h1>

            <div className="text-center mt-8">
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-base mb-1 sm:text-2xl font-semibold text-foreground">Connect with me:</motion.p>

              <a href="mailto:dhruvtiwari.1130@gmail.com?subject=Let's%20Connect&body=Hey%20Dhruv!">
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-xl sm:text-2xl hover:text-primary font-bold text-foreground relative inline-block">
                  dhruvtiwari.1130@gmail.com
                  <>
                    <Image
                      src="/Polygon 2.svg"
                      alt="Cursor Polygon Light"
                      width={50}
                      height={50}
                      className="absolute -right-4 -bottom-10 translate-x-6 translate-y-2 block dark:hidden animate-fly"
                    />
                    <Image
                      src="/Polygon 1.svg"
                      alt="Cursor Polygon Dark"
                      width={50}
                      height={50}
                      className="absolute -right-4 -bottom-12 translate-x-6 translate-y-2 hidden dark:block animate-fly"
                    />
                  </>
                </motion.p>
              </a>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-between mt-auto text-sm text-muted-foreground space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="sm:text-left text-center text-foreground">
              Designed &amp; Developed by
              <br />
              <span className="text-primary font-bold">Dhruv Narayan Tiwari</span>
            </motion.p>

            <div className="flex space-x-3">
              <motion.a
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                href="https://instagram.com/dhruv_the_el_pee_da"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-4 border rounded-full hover:bg-primary hover:text-white dark:hover:text-foreground transition">
                <>
                  <Image src="/instagram_dark.svg" alt="Instagram Dark" width={16} height={16} className="block dark:hidden group-hover:hidden" />
                  <Image src="/instagram_light.svg" alt="Instagram Light" width={16} height={16} className="hidden dark:block group-hover:hidden" />
                  <Image src="/instagram_light.svg" alt="Instagram Light Hover" width={16} height={16} className="hidden group-hover:block" />
                </>
                {/* <span className="hidden sm:inline-block">|</span> */}
                <span className="hidden sm:inline-block">Instagram</span>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                href="https://linkedin.com/in/dhruvux"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-4 border rounded-full hover:bg-primary hover:text-white dark:hover:text-foreground transition">
                <>
                  <Image src="/linkedin_dark.svg" alt="LinkedIn Dark" width={16} height={16} className="block dark:hidden group-hover:hidden" />
                  <Image src="/linkedin_light.svg" alt="LinkedIn Light" width={16} height={16} className="hidden dark:block group-hover:hidden" />
                  <Image src="/linkedin_light.svg" alt="LinkedIn Light Hover" width={16} height={16} className="hidden group-hover:block" />
                </>
                {/* <span className="hidden sm:inline-block">|</span> */}
                <span className="hidden sm:inline-block">LinkedIn</span>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                href="https://www.behance.net/dhruvui"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-4 border rounded-full hover:bg-primary hover:text-white dark:hover:text-foreground transition">
                <>
                  <Image src="/behance_dark.svg" alt="Behance Dark" width={16} height={16} className="block dark:hidden group-hover:hidden" />
                  <Image src="/behance_light.svg" alt="Behance Light" width={16} height={16} className="hidden dark:block group-hover:hidden" />
                  <Image src="/behance_light.svg" alt="Behance Light Hover" width={16} height={16} className="hidden group-hover:block" />
                </>
                {/* <span className="hidden sm:inline-block">|</span> */}
                <span className="hidden sm:inline-block">Behance</span>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                href="https://x.com/dhruv_is_here"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-4 border rounded-full hover:bg-primary hover:text-white dark:hover:text-foreground transition">
                <>
                  <Image src="/x_dark.svg" alt="Twitter Dark" width={16} height={16} className="block dark:hidden group-hover:hidden" />
                  <Image src="/x_light.svg" alt="Twitter Light" width={16} height={16} className="hidden dark:block group-hover:hidden" />
                  <Image src="/x_light.svg" alt="Twitter Light Hover" width={16} height={16} className="hidden group-hover:block" />
                </>
                {/* <span className="hidden sm:inline-block">|</span> */}
                <span className="hidden sm:inline-block">Twitter</span>
              </motion.a>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="hover:text-primary">© 2025 - All Rights Reserved</motion.p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute sm:animate-fly-1 sm:bottom-32 bottom-14 right-0 sm:right-12 w-14 h-14 rounded-full bg-transparent sm:bg-primary text-white flex items-center justify-center hover:scale-110 transition">
            <ArrowUp size={24} />
          </button>
        </footer>

        <style jsx global>{`
        @keyframes fly {
          0% {
            transform: translateY(0) scale(1) rotate(4deg);
          }
          20% {
            transform: translateY(-10px) scale(1.04) rotate(-2deg);
          }
          40% {
            transform: translateY(5px) scale(0.98) rotate(2deg);
          }
          60% {
            transform: translateY(-8px) scale(1.02) rotate(-1deg);
          }
          80% {
            transform: translateY(4px) scale(1.01) rotate(1deg);
          }
          100% {
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }
        .animate-fly {
          animation: fly 3.2s ease-in-out infinite;
        }
        
        .animate-fly-1 {
          animation: fly 15s ease-in-out infinite;
        }
      `}</style>
      </motion.main>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            // ये प्रॉपर्टीज़ लेफ्ट-साइड स्लाइड-इन इफ़ेक्ट के लिए अपडेट की गई हैं
            initial={{ x: "100%" }} // स्क्रीन के लेफ्ट से बाहर शुरू करें
            animate={{ x: 0 }} // स्क्रीन पर एंटर करें
            exit={{ x: "-100%" }} // स्क्रीन के लेफ्ट से बाहर निकलें
            transition={{ duration: 0.4, ease: "easeInOut" }} // एक स्मूथ ट्रांजीशन के लिए
            className="fixed inset-0 z-[100] bg-primary text-white"
          >
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-12 right-6 z-[101]"
              aria-label="Close menu"
            >
              <X size={26} />
            </button>

            {/* Menu Links */}
            <div className="flex h-screen w-screen flex-col items-end justify-center space-y-10 pr-8 sm:pr-16">
              <Link href="/about" className="text-4xl font-semibold hover:opacity-80">About</Link>
              <Link href="/projects" className="text-4xl font-semibold hover:opacity-80">Projects</Link>
              <Link
                href="https://drive.google.com/file/d/1QajQRx9Xu8NeX3yaG_dmtDn6XNjkS4YO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl font-semibold hover:opacity-80">
                Resume
              </Link>
              <Link href="#footer" className="text-4xl font-semibold hover:opacity-80">
                Contact
              </Link>
              <Link
                href="https://calendly.com/dhruvtiwari-1130/booktheslot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl font-semibold hover:opacity-80">
                Book a call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}