// "use client";
// import { TypingAnimation } from "@/components/magicui/typing-animation";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { ArrowUp } from 'lucide-react';
// import { motion } from "framer-motion";
// import FeaturedWork from "@/components/FeaturedWork";

// declare global {
//   interface Window {
//     updateFavicon?: () => void;
//   }
//   interface TimelineItem {
//     year: string;
//     project: string;
//     type: "case" | "website" | "gallery";
//     link: string;
//     external?: boolean;
//   }
// }

// const timeline: TimelineItem[] = [
//   { year: "2025", project: "DevRipples Landing Page Redesign", type: "case", link: "#", external: false },
//   { year: "2025", project: "The Brain Room", type: "website", link: "#", external: true },
//   { year: "2024", project: "UI/UX Design Lead - GDSC", type: "gallery", link: "#", external: false },
//   { year: "2023 - 24", project: "Vyapari Sang", type: "case", link: "#", external: false },
//   { year: "2023", project: "Xeonic", type: "case", link: "#", external: false },
//   { year: "2023", project: "IRCTC App Redesign", type: "case", link: "#", external: false },
//   { year: "2022", project: "Macros App Redesign", type: "case", link: "#", external: false },
// ];

// export default function Home() {
//   const getButton = (item: TimelineItem) => {
//     const { type, link, external } = item;

//     const buttonContent = () => {
//       switch (type) {
//         case "case":
//           return (
//             <span className="px-4 py-1 rounded-full bg-primary text-white dark:bg-white dark:text-black text-sm font-semibold transition-all duration-300 hover:scale-105 cursor-pointer">
//               Case Study
//             </span>
//           );
//         case "website":
//           return (
//             <span className="px-4 py-1 rounded-full dark:bg-white dark:text-background bg-black text-white text-sm font-semibold transition-all duration-300 hover:scale-105 cursor-pointer">
//               Website Live
//             </span>
//           );
//         case "gallery":
//           return (
//             <span className="px-4 py-1 rounded-full bg-blue-600 dark:bg-orange-600 text-white text-sm font-semibold transition-all duration-300 hover:scale-105 cursor-pointer">
//               View Gallery
//             </span>
//           );
//         default:
//           return null;
//       }
//     };

//     if (external) {
//       return (
//         <a
//           href={link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block hover:opacity-80 transition-opacity duration-300"
//         >
//           {buttonContent()}
//         </a>
//       );
//     } else {
//       return (
//         <Link
//           href={link}
//           className="inline-block hover:opacity-80 transition-opacity duration-300">
//           {buttonContent()}
//         </Link>
//       );
//     }
//   };

//   const handleToggle = () => {
//     if (typeof window !== "undefined") {
//       const html = document.documentElement;
//       const currentTheme = html.classList.contains("dark") ? "dark" : "light";
//       const newTheme = currentTheme === "dark" ? "light" : "dark";
//       html.classList.remove(currentTheme);
//       html.classList.add(newTheme);
//       localStorage.setItem("theme", newTheme);
//       window.updateFavicon?.();
//     }
//   };

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const savedTheme = localStorage.getItem("theme");
//       const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//       const html = document.documentElement;

//       if (savedTheme) {
//         html.classList.add(savedTheme);
//       } else {
//         html.classList.add(prefersDark ? "dark" : "light");
//       }
//     }
//   });

//   // TypingAnimation role cycling logic
//   const roles = ["& DEVELOPER", "& Thinker", "& CREATOR"];
//   const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
//     }, 2500); // Change every 2.5 seconds
//     return () => clearInterval(interval);
//   }, [roles.length]);



//   // // Language switching animation (Hello → Bonjour → Hola → ...)
//   // const languagePhrases = [
//   //   "भारतीय PRODUCT DESIGNER, डिज़ाइन के माध्यम से बेहतर मानव अनुभव बनाने में शामिल ।।",
//   //   "Indian PRODUCT DESIGNER crafting better human experiences.",
//   //   "Bonjour, un PRODUCT DESIGNER créant de meilleures expériences humaines.",
//   //   "Hola, un PRODUCT DESIGNER creando mejores experiencias humanas.",
//   //   "やあ、より良い人間体験をデザインするPRODUCT DESIGNERです。",
//   //   "Hallo, ein PRODUCT DESIGNER, der bessere menschliche Erlebnisse schafft.",
//   //   "Ciao, un PRODUCT DESIGNER che crea migliori esperienze umane.",
//   //   "Salam, seorang PRODUCT DESIGNER yang menciptakan pengalaman manusia yang lebih baik."
//   // ];
//   // const [currentLangIdx, setCurrentLangIdx] = useState(0);

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setCurrentLangIdx((prev) => (prev + 1) % languagePhrases.length);
//   //   }, 4000); // 4 sec per switch, adjust as needed
//   //   return () => clearInterval(interval);
//   // }, [languagePhrases.length]);


//   return (
//     <motion.main
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: "easeOut" }}
//       viewport={{ once: true }}
//       className="relative w-full items-center justify-center px-4 pt-24 md:pt-32 lg:pt-28">
//       {/* Hero Section */}
//       <section className="relative max-w-5xl w-full mx-auto px-4 py-12">
//         {/* Dot grid background (only inside hero section) */}
//         {/* <Image
//           width="0"
//           height="0"
//           src="/dots.svg"
//           alt="Background Dots"
//           className="absolute inset-0 w-full h-full dark:opacity-25 object-cover pointer-events-none z-0"
//         /> */}

//         <div className="relative z-10 flex flex-col items-start space-y-6">
//           {/* Top line: Creative + gif */}
//           <div className="flex items-end justify-between w-full mb-4">
//             <motion.h1
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               viewport={{ once: true }}
//               className="text-5xl sm:text-6xl md:text-8xl lg:text-[8.2rem] font-italiana text-foreground">
//               Creative
//             </motion.h1>
//             <div className="ml-4 sm:ml-0 flex flex-col items-start">
//               <Image
//                 width="492"
//                 height="164"
//                 src="/hero_content.gif"
//                 alt="Hero Content"
//                 unoptimized
//                 className="rounded-3xl object-contain mb-2"
//               />
//               <motion.p
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 viewport={{ once: true }}
//                 className="text-xs sm:text-sm md:text-base text-left font-tiro text-muted-foreground tracking-wider">
//                 भारतीय <span className="text-primary font-bold">PRODUCT DESIGNER</span>,
//                 डिज़ाइन के <br />माध्यम से बेहतर मानव अनुभव बनाने में शामिल ।।
//               </motion.p>
//               {/* <motion.p
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 viewport={{ once: true }}
//                 className="text-xs sm:text-sm md:text-base text-left font-tiro text-muted-foreground tracking-wider"
//               >
//                 <TypingAnimation duration={100} delay={0} className="inline-block" startOnView={true}>
//                   {languagePhrases[currentLangIdx]}
//                 </TypingAnimation>
//               </motion.p> */}

//             </div>
//           </div>

//           {/* PRODUCT */}
//           <motion.h2
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="text-7xl sm:text-7xl md:text-9xl lg:text-[11.6rem] font-bold font-whyte text-primary leading-none relative">
//             PRODUCT
//             <div className="absolute left-[90px] top-[-32px] sm:left-[260px] sm:top-[-64px] w-[196px] h-[122px] sm:w-[320px] sm:h-[244px] z-10 blur-3xl opacity-50 rounded-full bg-gradient-to-r from-[#6F392A] to-[#AC2033] dark:from-[#092B44] dark:to-[#1A7F91]" />
//             <div className="absolute left-[100px] top-[-8px] sm:left-[264px] sm:top-[-16px] z-20 cursor-pointer group" onClick={handleToggle}>
//               <div className="w-[128px] h-[64px] sm:w-[320px] sm:h-[164px] rounded-full transition-all duration-300 ease-out bg-[url('/toggle_light_bg.png')] dark:bg-[url('/toggle_dark_bg.png')] bg-cover bg-center flex items-center pb-2 px-3 sm:pb-5 sm:px-6">
//                 <div className="w-[44px] h-[44px] sm:w-[112px] sm:h-[112px] bg-white rounded-full shadow-[inset_0_8px_12px_rgba(0,0,0,0.40)] drop-shadow-lg transform transition-transform duration-300 ease-out translate-x-0 dark:translate-x-[58px] sm:dark:translate-x-[154px]" />
//               </div>
//             </div>
//           </motion.h2>

//           {/* DESIGNER */}
//           <div className="flex flex-col items-start relative">
//             <motion.h2
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               viewport={{ once: true }}
//               className="relative text-7xl sm:text-7xl md:text-9xl lg:text-[11rem] font-bold font-whyte text-foreground flex items-center gap-1 sm:gap-2">
//               DES
//               <span className="relative w-[28px] h-[56px] sm:w-[60px] sm:h-[130px] -top-4 sm:-top-8 inline-block">
//                 <Image
//                   src="/i_overlay_light.png"
//                   alt="I Overlay Light"
//                   fill
//                   className="object-contain dark:hidden"
//                 />
//                 <Image
//                   src="/i_overlay_dark.png"
//                   alt="I Overlay Dark"
//                   fill
//                   className="object-contain hidden dark:block"
//                 />
//               </span>
//               GNER
//             </motion.h2>
//             <Image
//               src="/finder.png"
//               alt="Finder"
//               width={100}
//               height={100}
//               className="w-12 sm:w-20 sm:h-20 absolute right-[-32px] bottom-[4px] sm:right-[-44px] sm:bottom-[82px] rotate-[10deg] z-10"
//             />
//             {/* & DEVELOPER under DESIGNER */}
//             <div className="w-full flex justify-end">
//               <div className="font-whyte text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold text-foreground">
//                 <TypingAnimation duration={100} delay={0} className="inline-block" startOnView={false}>
//                   {roles[currentRoleIdx]}
//                 </TypingAnimation>
//               </div>
//             </div>
//           </div>

//           {/* Final line: Open to job offers */}
//           <div className="text-base sm:text-lg md:text-xl text-foreground font-medium mt-4 text-center w-full px-4">
//             <span className="text-foreground font-bold">Open</span> to new job offers{" "}
//             <span className="inline-block w-2 h-2 ml-2">🟢</span>
//           </div>
//         </div>
//       </section>
//       {/* lil intro */}
//       <section className="w-full max-w-6xl mx-auto px-4 mt-20">
//         <div className="font-inter font-semibold text-3xl sm:text-6xl flex justify-center items-center text-justify text-foreground">
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="leading-normal tracking-tight">
//             Hi, I am{" "}
//             <Image
//               src="/light_mini.png"
//               alt="Mini Light"
//               width={40}
//               height={40}
//               className="inline-block mx-2 align-baseline dark:hidden"
//             />
//             <Image
//               src="/dark_mini.png"
//               alt="Mini Dark"
//               width={40}
//               height={40}
//               className="mx-2 align-baseline hidden dark:inline"
//             />{" "}
//             Dhruv ✌🏻 practicing design since
//             <span className="hidden sm:inline absolute ml-6 mt-5 px-6 py-2 rounded-full border-2 border-foreground text-4xl">
//               2020
//             </span>
//             <span className="inline sm:hidden px-3 py-1 rounded-full border border-foreground text-lg mx-2">
//               2020
//             </span>
//             <span className="inline sm:hidden">focused on designing 🖌️ and building digital 🪐<br />products, brands{" "}</span>
//             <span className="hidden sm:inline"><br />focused on designing 🖌️ and building digital 🪐 products, brands{" "}</span>
//             <Image
//               src="/fingerprint.svg"
//               alt="FingerPrint"
//               width={50}
//               height={50}
//               className="inline-block dark:hidden"
//             />
//             <Image
//               src="/fingerprint2.svg"
//               alt="FingerPrint Dark"
//               width={50}
//               height={50}
//               className="hidden dark:inline-block"
//             />{" "}
//             and experiences 🪄.
//           </motion.h1>
//         </div>
//       </section>
//       {/* skills */}
//       <section className="flex justify-center items-center mt-28">
//         <div className="flex flex-col text-left w-full max-w-6xl px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="font-inter text-2xl font-semibold">
//             with my skills in:
//           </motion.h1>
//           <Image
//             src="/skills_light.svg"
//             alt="Skills"
//             width={1200}
//             height={1200}
//             className="block dark:hidden"
//           />
//           <Image
//             src="/skills_dark.svg"
//             alt="Skills Dark"
//             width={1200}
//             height={1200}
//             className="hidden dark:block"
//           />
//         </div>
//       </section>

//       {/* Featured Work */}
//       <FeaturedWork />

//       {/* timeline */}
//       <motion.section
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="w-full font-inter mt-32">
//         <div className="max-w-7xl mx-auto px-4">
//           {/* Section Title */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="text-7xl font-whyte font-bold mb-8"
//           >
//             Experience
//           </motion.h1>

//           {/* Table Header */}
//           <div className="grid grid-cols-3 text-sm font-bold text-foreground uppercase tracking-wide border-b pb-2 mb-4">
//             <span>Year</span>
//             <span>Projects</span>
//             <span className="justify-end flex"></span>
//           </div>

//           {/* Timeline Rows */}
//           <div className="divide-y divide-foreground/10">
//             {timeline.map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
//                 viewport={{ once: true }}
//                 className="grid grid-cols-3 py-4 items-center text-foreground hover:bg-foreground/5 transition-colors duration-300 px-2"
//               >
//                 <span className="text-lg">{item.year}</span>
//                 <span className="text-lg font-medium">{item.project}</span>
//                 <div className="flex justify-end">{getButton(item)}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Footer */}
//       <footer id="footer" className="min-h-screen w-full px-6 py-16 flex flex-col justify-end items-center text-center space-y-8 relative">
//         {/* Vertically centered main content */}
//         <div className="flex-grow flex flex-col justify-center items-center w-full">
//           {/* Heading + Peace Icon */}
//           <div className="flex items-baseline justify-center space-x-4">
//             <motion.h1
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               viewport={{ once: true }}
//               className="text-5xl md:text-7xl font-whyte">INTERESTED</motion.h1>
//             <>
//               <Image
//                 src="/peace_light.svg"
//                 alt="Peace Light"
//                 width={96}
//                 height={96}
//                 className="inline-block dark:hidden"
//               />
//               <Image
//                 src="/peace_dark.svg"
//                 alt="Peace Dark"
//                 width={96}
//                 height={96}
//                 className="hidden dark:inline-block"
//               />
//             </>
//           </div>
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="text-5xl md:text-7xl mt-4 font-whyte">IN WORKING TOGETHER?</motion.h1>

//           {/* Contact Email with polygon cursor */}
//           <div className="text-center mt-8">
//             <motion.p
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               viewport={{ once: true }}
//               className="text-base mb-1 sm:text-2xl font-semibold text-foreground">Connect with me:</motion.p>
//             <motion.p
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               viewport={{ once: true }}
//               className="text-xl sm:text-2xl hover:text-primary font-bold text-foreground relative inline-block">
//               dhruvtiwari.1130@gmail.com
//               <>
//                 <Image
//                   src="/Polygon 2.svg"
//                   alt="Cursor Polygon Light"
//                   width={50}
//                   height={50}
//                   className="absolute -right-4 -bottom-10 translate-x-6 translate-y-2 block dark:hidden animate-fly"
//                 />
//                 <Image
//                   src="/Polygon 1.svg"
//                   alt="Cursor Polygon Dark"
//                   width={50}
//                   height={50}
//                   className="absolute -right-4 -bottom-12 translate-x-6 translate-y-2 hidden dark:block animate-fly"
//                 />
//               </>
//             </motion.p>
//           </div>
//         </div>

//         {/* Bottom row: credits, socials, copyright */}
//         <div className="w-full flex flex-col md:flex-row items-center justify-between mt-auto text-sm text-muted-foreground space-y-4 md:space-y-0">

//           {/* Credits */}
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="text-left text-foreground">
//             Designed &amp; Developed by
//             <br />
//             <span className="text-primary font-bold">Dhruv Narayan Tiwari</span>
//           </motion.p>

//           {/* Social buttons */}
//           <div className="flex space-x-3">
//             {/* Instagram */}
//             <motion.a
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               viewport={{ once: true }}
//               href="https://instagram.com/dhruv_the_el_pee_da"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group flex items-center space-x-2 px-3 py-2 border rounded-full hover:bg-primary hover:text-white dark:hover:text-foreground transition"
//             >
//               <>
//                 {/* Light mode default: show dark icon */}
//                 <Image src="/instagram_dark.svg" alt="Instagram Dark" width={16} height={16} className="block dark:hidden group-hover:hidden" />
//                 {/* Dark mode default: show light icon */}
//                 <Image src="/instagram_light.svg" alt="Instagram Light" width={16} height={16} className="hidden dark:block group-hover:hidden" />
//                 {/* Hover (both light & dark): show light icon */}
//                 <Image src="/instagram_light.svg" alt="Instagram Light Hover" width={16} height={16} className="hidden group-hover:block" />
//               </>
//               <span>|</span>
//               <span>Instagram</span>
//             </motion.a>
//             {/* LinkedIn */}
//             <motion.a
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               viewport={{ once: true }}
//               href="https://linkedin.com/in/dhruvux"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group flex items-center space-x-2 px-3 py-2 border rounded-full hover:bg-primary hover:text-white dark:hover:text-foreground transition"
//             >
//               <>
//                 {/* Light mode default: show dark icon */}
//                 <Image src="/linkedin_dark.svg" alt="LinkedIn Dark" width={16} height={16} className="block dark:hidden group-hover:hidden" />
//                 {/* Dark mode default: show light icon */}
//                 <Image src="/linkedin_light.svg" alt="LinkedIn Light" width={16} height={16} className="hidden dark:block group-hover:hidden" />
//                 {/* Hover (both light & dark): show light icon */}
//                 <Image src="/linkedin_light.svg" alt="LinkedIn Light Hover" width={16} height={16} className="hidden group-hover:block" />
//               </>
//               <span>|</span>
//               <span>LinkedIn</span>
//             </motion.a>
//             {/* Behance */}
//             <motion.a
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               viewport={{ once: true }}
//               href="https://www.behance.net/dhruvui"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group flex items-center space-x-2 px-3 py-2 border rounded-full hover:bg-primary hover:text-white dark:hover:text-foreground transition">
//               <>
//                 {/* Light mode default: show dark icon */}
//                 <Image src="/behance_dark.svg" alt="Behance Dark" width={16} height={16} className="block dark:hidden group-hover:hidden" />
//                 {/* Dark mode default: show light icon */}
//                 <Image src="/behance_light.svg" alt="Behance Light" width={16} height={16} className="hidden dark:block group-hover:hidden" />
//                 {/* Hover (both light & dark): show light icon */}
//                 <Image src="/behance_light.svg" alt="Behance Light Hover" width={16} height={16} className="hidden group-hover:block" />
//               </>
//               <span>|</span>
//               <span>Behance</span>
//             </motion.a>
//             {/* Twitter/X */}
//             <motion.a
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               viewport={{ once: true }}
//               href="https://x.com/dhruv_is_here"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group flex items-center space-x-2 px-3 py-2 border rounded-full hover:bg-primary hover:text-white dark:hover:text-foreground transition">
//               <>
//                 {/* Light mode default: show dark icon */}
//                 <Image src="/x_dark.svg" alt="Twitter Dark" width={16} height={16} className="block dark:hidden group-hover:hidden" />
//                 {/* Dark mode default: show light icon */}
//                 <Image src="/x_light.svg" alt="Twitter Light" width={16} height={16} className="hidden dark:block group-hover:hidden" />
//                 {/* Hover (both light & dark): show light icon */}
//                 <Image src="/x_light.svg" alt="Twitter Light Hover" width={16} height={16} className="hidden group-hover:block" />
//               </>
//               <span>|</span>
//               <span>Twitter</span>
//             </motion.a>
//           </div>

//           {/* Copyright */}
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="hover:text-primary">© 2024 - All Rights Reserved</motion.p>
//         </div>

//         {/* Back to top button */}
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="absolute animate-fly-1 bottom-32 right-12 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition">
//           <ArrowUp size={30} />
//         </button>
//       </footer>

//       {/* Flying animation */}
//       <style jsx global>{`
//         @keyframes fly {
//           0% {
//             transform: translateY(0) scale(1) rotate(4deg);
//           }
//           20% {
//             transform: translateY(-10px) scale(1.04) rotate(-2deg);
//           }
//           40% {
//             transform: translateY(5px) scale(0.98) rotate(2deg);
//           }
//           60% {
//             transform: translateY(-8px) scale(1.02) rotate(-1deg);
//           }
//           80% {
//             transform: translateY(4px) scale(1.01) rotate(1deg);
//           }
//           100% {
//             transform: translateY(0) scale(1) rotate(0deg);
//           }
//         }
//         .animate-fly {
//           animation: fly 3.2s ease-in-out infinite;
//         }
        
//         .animate-fly-1 {
//           animation: fly 10s ease-in-out infinite;
//         }
//       `}</style>
//     </motion.main>
//   );
// }


// "use client";
// import NavBar from "@/components/NavBar"; // adjust path if needed
// import { AnimatePresence } from "framer-motion";
// import { TypingAnimation } from "@/components/magicui/typing-animation";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { ArrowUp } from 'lucide-react';
// import { motion } from "framer-motion";
// import FeaturedWork from "@/components/FeaturedWork";

// declare global {
//   interface Window {
//     updateFavicon?: () => void;
//   }
//   interface TimelineItem {
//     year: string;
//     project: string;
//     type: string;
//     link?: boolean;
//     external?: boolean;
//   }
// }

// const timeline: TimelineItem[] = [
//   { year: "2022 - Present", project: "Various Startups & Clients", type: "Freelancer", link: true, external: false },
//   { year: "Aug 2025 - Present", project: "Dev Ripples", type: "Product Design Lead", link: false, external: false },
//   { year: "Jul - Nov 2024", project: "Xeonic", type: "UI/UX Designer", link: false, external: false },
//   { year: "Aug 2023 - Nov 2024", project: "Vyapari Sang", type: "Product Designer", link: false, external: false },
//   { year: "Sept 2023 - 2024", project: "Google Developers Student Club", type: "UI/UX Design Campus Lead", link: false, external: false },
//   { year: "Feb 2020 - 2022", project: "Graphic Design & Content Writing", type: "Fiverr Freelancer", link: false, external: false },
// ];

// export default function Home() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   // const getButton = (item: TimelineItem) => {
//   //   const { type, link, external } = item;

//   //   const buttonContent = () => {
//   //     switch (type) {
//   //       case "case":
//   //         return (
//   //           <span className="px-4 py-1 rounded-full bg-primary text-white dark:bg-white dark:text-black text-sm font-semibold transition-all duration-300 hover:scale-105 cursor-pointer">
//   //             Case Study
//   //           </span>
//   //         );
//   //       case "website":
//   //         return (
//   //           <span className="px-4 py-1 rounded-full dark:bg-white dark:text-background bg-black text-white text-sm font-semibold transition-all duration-300 hover:scale-105 cursor-pointer">
//   //             Website Live
//   //           </span>
//   //         );
//   //       case "gallery":
//   //         return (
//   //           <span className="px-4 py-1 rounded-full bg-blue-600 dark:bg-orange-600 text-white text-sm font-semibold transition-all duration-300 hover:scale-105 cursor-pointer">
//   //             View Gallery
//   //           </span>
//   //         );
//   //       default:
//   //         return null;
//   //     }
//   //   };

//   //   if (external) {
//   //     return (
//   //       <a
//   //         href={link}
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //         className="inline-block hover:opacity-80 transition-opacity duration-300"
//   //       >
//   //         {buttonContent()}
//   //       </a>
//   //     );
//   //   } else {
//   //     return (
//   //       <Link
//   //         href={link}
//   //         className="inline-block hover:opacity-80 transition-opacity duration-300">
//   //         {buttonContent()}
//   //       </Link>
//   //     );
//   //   }
//   // };

//   const handleToggle = () => {
//     if (typeof window !== "undefined") {
//       const html = document.documentElement;
//       const currentTheme = html.classList.contains("dark") ? "dark" : "light";
//       const newTheme = currentTheme === "dark" ? "light" : "dark";
//       html.classList.remove(currentTheme);
//       html.classList.add(newTheme);
//       localStorage.setItem("theme", newTheme);
//       window.updateFavicon?.();
//     }
//   };

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const savedTheme = localStorage.getItem("theme");
//       const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//       const html = document.documentElement;

//       if (savedTheme) {
//         html.classList.add(savedTheme);
//       } else {
//         html.classList.add(prefersDark ? "dark" : "light");
//       }
//     }
//   });

//   // TypingAnimation role cycling logic
//   const roles = ["& DEVELOPER", "& Thinker", "& CREATOR"];
//   const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
//     }, 2500); // Change every 2.5 seconds
//     return () => clearInterval(interval);
//   }, [roles.length]);



//   // // Language switching animation (Hello → Bonjour → Hola → ...)
//   // const languagePhrases = [
//   //   "भारतीय PRODUCT DESIGNER, डिज़ाइन के माध्यम से बेहतर मानव अनुभव बनाने में शामिल ।।",
//   //   "Indian PRODUCT DESIGNER crafting better human experiences.",
//   //   "Bonjour, un PRODUCT DESIGNER créant de meilleures expériences humaines.",
//   //   "Hola, un PRODUCT DESIGNER creando mejores experiencias humanas.",
//   //   "やあ、より良い人間体験をデザインするPRODUCT DESIGNERです。",
//   //   "Hallo, ein PRODUCT DESIGNER, der bessere menschliche Erlebnisse schafft.",
//   //   "Ciao, un PRODUCT DESIGNER che crea migliori esperienze umane.",
//   //   "Salam, seorang PRODUCT DESIGNER yang menciptakan pengalaman manusia yang lebih baik."
//   // ];
//   // const [currentLangIdx, setCurrentLangIdx] = useState(0);

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setCurrentLangIdx((prev) => (prev + 1) % languagePhrases.length);
//   //   }, 4000); // 4 sec per switch, adjust as needed
//   //   return () => clearInterval(interval);
//   // }, [languagePhrases.length]);


//   return (
//     <>
//     <NavBar onMenuToggle={setMenuOpen} />
//     <motion.main
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: "easeOut" }}
//       viewport={{ once: true }}
//       className="relative w-full items-center justify-center px-4 pt-24 md:pt-32 lg:pt-28">
//       {/* Hero Section */}
//       <section className="relative max-w-5xl w-full mx-auto px-4 py-12">
//         {/* Dot grid background (only inside hero section) */}
//         {/* <Image
//           width="0"
//           height="0"
//           src="/dots.svg"
//           alt="Background Dots"
//           className="absolute inset-0 w-full h-full dark:opacity-25 object-cover pointer-events-none z-0"
//         /> */}

//         <div className="relative z-10 flex flex-col items-start space-y-6">
//           {/* Top line: Creative + gif */}
//           <div className="flex items-end justify-between w-full mb-4">
//             <motion.h1
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               viewport={{ once: true }}
//               className="text-5xl sm:text-6xl md:text-8xl lg:text-[8.2rem] font-italiana text-foreground">
//               Creative
//             </motion.h1>
//             <div className="ml-4 sm:ml-0 flex flex-col items-start">
//               <Image
//                 width="492"
//                 height="164"
//                 src="/hero_content.gif"
//                 alt="Hero Content"
//                 unoptimized
//                 className="rounded-3xl object-contain mb-2"
//               />
//               <motion.p
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 viewport={{ once: true }}
//                 className="text-xs sm:text-sm md:text-base text-left font-tiro text-muted-foreground tracking-wider">
//                 भारतीय <span className="text-primary font-bold">PRODUCT DESIGNER</span>,
//                 डिज़ाइन के <br />माध्यम से बेहतर मानव अनुभव बनाने में शामिल ।।
//               </motion.p>
//               {/* <motion.p
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 viewport={{ once: true }}
//                 className="text-xs sm:text-sm md:text-base text-left font-tiro text-muted-foreground tracking-wider"
//               >
//                 <TypingAnimation duration={100} delay={0} className="inline-block" startOnView={true}>
//                   {languagePhrases[currentLangIdx]}
//                 </TypingAnimation>
//               </motion.p> */}

//             </div>
//           </div>

//           {/* PRODUCT */}
//           <motion.h2
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="text-7xl sm:text-7xl md:text-9xl lg:text-[11.6rem] font-bold font-whyte text-primary leading-none relative">
//             PRODUCT
//             <div className="absolute left-[90px] top-[-32px] sm:left-[260px] sm:top-[-64px] w-[196px] h-[122px] sm:w-[320px] sm:h-[244px] z-10 blur-3xl opacity-50 rounded-full bg-gradient-to-r from-[#6F392A] to-[#AC2033] dark:from-[#092B44] dark:to-[#1A7F91]" />
//             <div className="absolute left-[100px] top-[-8px] sm:left-[264px] sm:top-[-16px] z-20 cursor-pointer group" onClick={handleToggle}>
//               <div className="w-[128px] h-[64px] sm:w-[320px] sm:h-[164px] rounded-full transition-all duration-300 ease-out bg-[url('/toggle_light_bg.png')] dark:bg-[url('/toggle_dark_bg.png')] bg-cover bg-center flex items-center pb-2 px-3 sm:pb-5 sm:px-6">
//                 <div className="w-[44px] h-[44px] sm:w-[112px] sm:h-[112px] bg-white rounded-full shadow-[inset_0_8px_12px_rgba(0,0,0,0.40)] drop-shadow-lg transform transition-transform duration-300 ease-out translate-x-0 dark:translate-x-[58px] sm:dark:translate-x-[154px]" />
//               </div>
//             </div>
//           </motion.h2>

//           {/* DESIGNER */}
//           <div className="flex flex-col items-start relative">
//             <motion.h2
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               viewport={{ once: true }}
//               className="relative text-7xl sm:text-7xl md:text-9xl lg:text-[11rem] font-bold font-whyte text-foreground flex items-center gap-1 sm:gap-2">
//               DES
//               <span className="relative w-[28px] h-[56px] sm:w-[60px] sm:h-[130px] -top-4 sm:-top-8 inline-block">
//                 <Image
//                   src="/i_overlay_light.png"
//                   alt="I Overlay Light"
//                   fill
//                   className="object-contain dark:hidden"
//                 />
//                 <Image
//                   src="/i_overlay_dark.png"
//                   alt="I Overlay Dark"
//                   fill
//                   className="object-contain hidden dark:block"
//                 />
//               </span>
//               GNER
//             </motion.h2>
//             <Image
//               src="/finder.png"
//               alt="Finder"
//               width={100}
//               height={100}
//               className="w-12 sm:w-20 sm:h-20 absolute right-[-32px] bottom-[4px] sm:right-[-44px] sm:bottom-[82px] rotate-[10deg] z-10"
//             />
//             {/* & DEVELOPER under DESIGNER */}
//             <div className="w-full flex justify-end">
//               <div className="font-whyte text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold text-foreground">
//                 <TypingAnimation duration={100} delay={0} className="inline-block" startOnView={false}>
//                   {roles[currentRoleIdx]}
//                 </TypingAnimation>
//               </div>
//             </div>
//           </div>

//           {/* Final line: Open to job offers */}
//           <div className="text-base sm:text-lg md:text-xl text-foreground font-medium mt-4 text-center w-full px-4">
//             <span className="text-foreground font-bold">Open</span> to new job offers{" "}
//             <span className="inline-block w-2 h-2 ml-2">🟢</span>
//           </div>
//         </div>
//       </section>
//       {/* lil intro */}
//       <section className="w-full max-w-6xl mx-auto px-4 mt-20">
//         <div className="font-inter font-semibold text-3xl sm:text-6xl flex justify-center items-center text-justify text-foreground">
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="leading-normal tracking-tight">
//             Hi, I am{" "}
//             <Image
//               src="/light_mini.png"
//               alt="Mini Light"
//               width={40}
//               height={40}
//               className="inline-block mx-2 align-baseline dark:hidden"
//             />
//             <Image
//               src="/dark_mini.png"
//               alt="Mini Dark"
//               width={40}
//               height={40}
//               className="mx-2 align-baseline hidden dark:inline"
//             />{" "}
//             Dhruv ✌🏻 practicing design since
//             <span className="hidden sm:inline absolute ml-6 mt-5 px-6 py-2 rounded-full border-2 border-foreground text-4xl">
//               2020
//             </span>
//             <span className="inline sm:hidden px-3 py-1 rounded-full border border-foreground text-lg mx-2">
//               2020
//             </span>
//             <span className="inline sm:hidden">focused on designing 🖌️ and building digital 🪐<br />products, brands{" "}</span>
//             <span className="hidden sm:inline"><br />focused on designing 🖌️ and building digital 🪐 products, brands{" "}</span>
//             <Image
//               src="/fingerprint.svg"
//               alt="FingerPrint"
//               width={50}
//               height={50}
//               className="inline-block dark:hidden"
//             />
//             <Image
//               src="/fingerprint2.svg"
//               alt="FingerPrint Dark"
//               width={50}
//               height={50}
//               className="hidden dark:inline-block"
//             />{" "}
//             and experiences 🪄.
//           </motion.h1>
//         </div>
//       </section>
//       {/* skills */}
//       <section className="flex justify-center items-center mt-28">
//         <div className="flex flex-col text-left w-full max-w-6xl px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="font-inter text-2xl font-semibold">
//             with my skills in:
//           </motion.h1>
//           <Image
//             src="/skills_light.svg"
//             alt="Skills"
//             width={1200}
//             height={1200}
//             className="block dark:hidden"
//           />
//           <Image
//             src="/skills_dark.svg"
//             alt="Skills Dark"
//             width={1200}
//             height={1200}
//             className="hidden dark:block"
//           />
//         </div>
//       </section>

//       {/* Featured Work */}
//       <FeaturedWork />

//       {/* timeline */}
// {/* Timeline Section */}
// <motion.section
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8, ease: "easeOut" }}
//   viewport={{ once: true }}
//   className="w-full font-inter mt-32"
// >
//   <div className="max-w-7xl mx-auto px-4">
//     {/* Section Title */}
//     <motion.h1
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       viewport={{ once: true }}
//       className="text-4xl sm:text-9xl md:text-6xl lg:text-7xl font-whyte font-bold mb-8">
//       Experience
//     </motion.h1>

//     {/* Timeline Rows */}
//     <div className="divide-y divide-foreground/10">
//       {timeline.map((item, i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
//           viewport={{ once: true }}
//           // ✅ MODIFIED LINE: Added a conditional class using a template literal
//           className={`grid grid-cols-3 py-4 items-center text-foreground hover:bg-foreground/15 transition-colors duration-300 px-2 ${
//             item.link ? 'bg-foreground/5 dark:bg-neutral-800/50' : ''
//           }`}
//         >
//           <span className="text-lg">{item.year}</span>
//           <span className="text-lg font-medium">{item.project}</span>
//           <div className="flex justify-end">
//             <span className="text-lg">{item.type}</span>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// </motion.section>

// {/* Experience Section (just list, no grid)
// <motion.section
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8, ease: "easeOut" }}
//   viewport={{ once: true }}
//   className="w-full font-inter mt-20"
// >
//   <div className="max-w-7xl mx-auto px-4">
//     <motion.h1
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       viewport={{ once: true }}
//       className="text-7xl font-whyte font-bold mb-8"
//     >
//       Experience
//     </motion.h1>

//     <ul className="space-y-4 text-lg font-medium text-foreground">
//       {timeline.map((item, i) => (
//         <motion.li
//           key={i}
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
//           viewport={{ once: true }}
//         >
//           {item.year} — {item.project}
//         </motion.li>
//       ))}
//     </ul>
//   </div>
// </motion.section> */}


//       {/* Footer */}
//       <footer id="footer" className="min-h-screen w-full px-6 py-16 flex flex-col justify-end items-center text-center space-y-8 relative">
//         {/* Vertically centered main content */}
//         <div className="flex-grow flex flex-col justify-center items-center w-full">
//           {/* Heading + Peace Icon */}
//           <div className="flex items-baseline justify-center space-x-4">
//             <motion.h1
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               viewport={{ once: true }}
//               className="text-5xl md:text-7xl font-whyte">INTERESTED</motion.h1>
//             <>
//               <Image
//                 src="/peace_light.svg"
//                 alt="Peace Light"
//                 width={96}
//                 height={96}
//                 className="inline-block dark:hidden"
//               />
//               <Image
//                 src="/peace_dark.svg"
//                 alt="Peace Dark"
//                 width={96}
//                 height={96}
//                 className="hidden dark:inline-block"
//               />
//             </>
//           </div>
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="text-5xl md:text-7xl mt-4 font-whyte">IN WORKING TOGETHER?</motion.h1>

//           {/* Contact Email with polygon cursor */}
//           <div className="text-center mt-8">
//             <motion.p
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               viewport={{ once: true }}
//               className="text-base mb-1 sm:text-2xl font-semibold text-foreground">Connect with me:</motion.p>
//             <motion.p
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               viewport={{ once: true }}
//               className="text-xl sm:text-2xl hover:text-primary font-bold text-foreground relative inline-block">
//               dhruvtiwari.1130@gmail.com
//               <>
//                 <Image
//                   src="/Polygon 2.svg"
//                   alt="Cursor Polygon Light"
//                   width={50}
//                   height={50}
//                   className="absolute -right-4 -bottom-10 translate-x-6 translate-y-2 block dark:hidden animate-fly"
//                 />
//                 <Image
//                   src="/Polygon 1.svg"
//                   alt="Cursor Polygon Dark"
//                   width={50}
//                   height={50}
//                   className="absolute -right-4 -bottom-12 translate-x-6 translate-y-2 hidden dark:block animate-fly"
//                 />
//               </>
//             </motion.p>
//           </div>
//         </div>

//         {/* Bottom row: credits, socials, copyright */}
//         <div className="w-full flex flex-col md:flex-row items-center justify-between mt-auto text-sm text-muted-foreground space-y-4 md:space-y-0">

//           {/* Credits */}
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="text-left text-foreground">
//             Designed &amp; Developed by
//             <br />
//             <span className="text-primary font-bold">Dhruv Narayan Tiwari</span>
//           </motion.p>

//           {/* Social buttons */}
//           <div className="flex space-x-3">
//             {/* Instagram */}
//             <motion.a
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               viewport={{ once: true }}
//               href="https://instagram.com/dhruv_the_el_pee_da"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group flex items-center space-x-2 px-3 py-2 border rounded-full hover:bg-primary hover:text-white dark:hover:text-foreground transition"
//             >
//               <>
//                 {/* Light mode default: show dark icon */}
//                 <Image src="/instagram_dark.svg" alt="Instagram Dark" width={16} height={16} className="block dark:hidden group-hover:hidden" />
//                 {/* Dark mode default: show light icon */}
//                 <Image src="/instagram_light.svg" alt="Instagram Light" width={16} height={16} className="hidden dark:block group-hover:hidden" />
//                 {/* Hover (both light & dark): show light icon */}
//                 <Image src="/instagram_light.svg" alt="Instagram Light Hover" width={16} height={16} className="hidden group-hover:block" />
//               </>
//               <span>|</span>
//               <span>Instagram</span>
//             </motion.a>
//             {/* LinkedIn */}
//             <motion.a
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               viewport={{ once: true }}
//               href="https://linkedin.com/in/dhruvux"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group flex items-center space-x-2 px-3 py-2 border rounded-full hover:bg-primary hover:text-white dark:hover:text-foreground transition"
//             >
//               <>
//                 {/* Light mode default: show dark icon */}
//                 <Image src="/linkedin_dark.svg" alt="LinkedIn Dark" width={16} height={16} className="block dark:hidden group-hover:hidden" />
//                 {/* Dark mode default: show light icon */}
//                 <Image src="/linkedin_light.svg" alt="LinkedIn Light" width={16} height={16} className="hidden dark:block group-hover:hidden" />
//                 {/* Hover (both light & dark): show light icon */}
//                 <Image src="/linkedin_light.svg" alt="LinkedIn Light Hover" width={16} height={16} className="hidden group-hover:block" />
//               </>
//               <span>|</span>
//               <span>LinkedIn</span>
//             </motion.a>
//             {/* Behance */}
//             <motion.a
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               viewport={{ once: true }}
//               href="https://www.behance.net/dhruvui"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group flex items-center space-x-2 px-3 py-2 border rounded-full hover:bg-primary hover:text-white dark:hover:text-foreground transition">
//               <>
//                 {/* Light mode default: show dark icon */}
//                 <Image src="/behance_dark.svg" alt="Behance Dark" width={16} height={16} className="block dark:hidden group-hover:hidden" />
//                 {/* Dark mode default: show light icon */}
//                 <Image src="/behance_light.svg" alt="Behance Light" width={16} height={16} className="hidden dark:block group-hover:hidden" />
//                 {/* Hover (both light & dark): show light icon */}
//                 <Image src="/behance_light.svg" alt="Behance Light Hover" width={16} height={16} className="hidden group-hover:block" />
//               </>
//               <span>|</span>
//               <span>Behance</span>
//             </motion.a>
//             {/* Twitter/X */}
//             <motion.a
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               viewport={{ once: true }}
//               href="https://x.com/dhruv_is_here"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group flex items-center space-x-2 px-3 py-2 border rounded-full hover:bg-primary hover:text-white dark:hover:text-foreground transition">
//               <>
//                 {/* Light mode default: show dark icon */}
//                 <Image src="/x_dark.svg" alt="Twitter Dark" width={16} height={16} className="block dark:hidden group-hover:hidden" />
//                 {/* Dark mode default: show light icon */}
//                 <Image src="/x_light.svg" alt="Twitter Light" width={16} height={16} className="hidden dark:block group-hover:hidden" />
//                 {/* Hover (both light & dark): show light icon */}
//                 <Image src="/x_light.svg" alt="Twitter Light Hover" width={16} height={16} className="hidden group-hover:block" />
//               </>
//               <span>|</span>
//               <span>Twitter</span>
//             </motion.a>
//           </div>

//           {/* Copyright */}
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="hover:text-primary">© 2025 - All Rights Reserved</motion.p>
//         </div>

//         {/* Back to top button */}
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="absolute animate-fly-1 bottom-32 right-12 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition">
//           <ArrowUp size={24} />
//         </button>
//       </footer>

//       {/* Flying animation */}
//       <style jsx global>{`
//         @keyframes fly {
//           0% {
//             transform: translateY(0) scale(1) rotate(4deg);
//           }
//           20% {
//             transform: translateY(-10px) scale(1.04) rotate(-2deg);
//           }
//           40% {
//             transform: translateY(5px) scale(0.98) rotate(2deg);
//           }
//           60% {
//             transform: translateY(-8px) scale(1.02) rotate(-1deg);
//           }
//           80% {
//             transform: translateY(4px) scale(1.01) rotate(1deg);
//           }
//           100% {
//             transform: translateY(0) scale(1) rotate(0deg);
//           }
//         }
//         .animate-fly {
//           animation: fly 3.2s ease-in-out infinite;
//         }
        
//         .animate-fly-1 {
//           animation: fly 15s ease-in-out infinite;
//         }
//       `}</style>
//     </motion.main>
//     {/* ✅ Animated Mobile Menu Overlay */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//   initial={{ opacity: 0, y: 50, scale: 0.95 }}
//   animate={{ opacity: 1, y: 0, scale: 1 }}
//   exit={{ opacity: 0, y: 50, scale: 0.95 }}
//   transition={{ duration: 0.4, ease: "easeOut" }}
//   className="fixed bottom-14 left-28 right-28 z-[100] bg-background/10 backdrop-blur-lg border border-foreground/10 shadow-lg rounded-3xl px-8 py-6 flex flex-col items-center space-y-5 w-[50%] max-w-sm">

//             <Link href="/about" className="text-lg font-semibold hover:text-primary">About</Link>
//             <Link href="/projects" className="text-lg font-semibold hover:text-primary">Projects</Link>
//             <Link
//               href="https://drive.google.com/file/d/1QajQRx9Xu8NeX3yaG_dmtDn6XNjkS4YO/view?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-lg font-semibold hover:text-primary"
//             >
//               Resume
//             </Link>
//             <Link href="#footer" className="text-lg font-semibold hover:text-primary">
//               Contact
//             </Link>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }



















"use client";
import { AnimatePresence } from "framer-motion";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUp } from 'lucide-react';
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
      
      {/* Hero Section */}
      <section className="relative max-w-5xl w-full mx-auto px-4 py-12">
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
                className="rounded-3xl object-contain mb-2"
              />
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-xs sm:text-sm md:text-base text-left font-tiro text-muted-foreground tracking-wider">
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
            className="text-7xl sm:text-7xl md:text-9xl lg:text-[11.6rem] font-bold font-whyte text-primary leading-none relative">
            PRODUCT
            <div className="absolute left-[90px] top-[-32px] sm:left-[260px] sm:top-[-64px] w-[196px] h-[122px] sm:w-[320px] sm:h-[244px] z-10 blur-3xl opacity-50 rounded-full bg-gradient-to-r from-[#6F392A] to-[#AC2033] dark:from-[#092B44] dark:to-[#1A7F91]" />
            <div className="absolute left-[100px] top-[-8px] sm:left-[264px] sm:top-[-16px] z-20 cursor-pointer group" onClick={handleToggle}>
              <div className="w-[128px] h-[64px] sm:w-[320px] sm:h-[164px] rounded-full transition-all duration-300 ease-out bg-[url('/toggle_light_bg.png')] dark:bg-[url('/toggle_dark_bg.png')] bg-cover bg-center flex items-center pb-2 px-3 sm:pb-5 sm:px-6">
                <div className="w-[44px] h-[44px] sm:w-[112px] sm:h-[112px] bg-white rounded-full shadow-[inset_0_8px_12px_rgba(0,0,0,0.40)] drop-shadow-lg transform transition-transform duration-300 ease-out translate-x-0 dark:translate-x-[58px] sm:dark:translate-x-[154px]" />
              </div>
            </div>
          </motion.h2>

          <div className="flex flex-col items-start relative">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative text-7xl sm:text-7xl md:text-9xl lg:text-[11rem] font-bold font-whyte text-foreground flex items-center gap-1 sm:gap-2">
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
            </motion.h2>
            <Image
              src="/finder.png"
              alt="Finder"
              width={100}
              height={100}
              className="w-12 sm:w-20 sm:h-20 absolute right-[-32px] bottom-[4px] sm:right-[-44px] sm:bottom-[82px] rotate-[10deg] z-10"
            />
            <div className="w-full flex justify-end">
              <div className="font-whyte text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold text-foreground">
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
        <div className="font-inter font-semibold text-3xl sm:text-6xl flex justify-center items-center text-justify text-foreground">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="leading-normal tracking-tight">
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
            <span className="hidden sm:inline absolute ml-6 mt-5 px-6 py-2 rounded-full border-2 border-foreground text-4xl">
              2020
            </span>
            <span className="inline sm:hidden px-3 py-1 rounded-full border border-foreground text-lg mx-2">
              2020
            </span>
            <span className="inline sm:hidden">focused on designing 🖌️ and building digital 🪐<br />products, brands{" "}</span>
            <span className="hidden sm:inline"><br />focused on designing 🖌️ and building digital 🪐 products, brands{" "}</span>
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
          </motion.h1>
        </div>
      </section>

      {/* skills */}
      <section className="flex justify-center items-center mt-28">
        <div className="flex flex-col text-left w-full max-w-6xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-inter text-2xl font-semibold">
            with my skills in:
          </motion.h1>
          <Image
            src="/skills_light.svg"
            alt="Skills"
            width={1200}
            height={1200}
            className="block dark:hidden"
          />
          <Image
            src="/skills_dark.svg"
            alt="Skills Dark"
            width={1200}
            height={1200}
            className="hidden dark:block"
          />
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
            Experience
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
                width={44}
                height={44}
                className="sm:w-32 inline-block dark:hidden"
              />
              <Image
                src="/peace_dark.svg"
                alt="Peace Dark"
                width={44}
                height={44}
                className="sm:w-32 hidden dark:inline-block"
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
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between mt-auto text-sm text-muted-foreground space-y-4 md:space-y-0">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-left text-foreground">
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
              className="group flex items-center space-x-2 px-3 py-2 border rounded-full hover:bg-primary hover:text-white dark:hover:text-foreground transition">
              <>
                <Image src="/instagram_dark.svg" alt="Instagram Dark" width={16} height={16} className="block dark:hidden group-hover:hidden" />
                <Image src="/instagram_light.svg" alt="Instagram Light" width={16} height={16} className="hidden dark:block group-hover:hidden" />
                <Image src="/instagram_light.svg" alt="Instagram Light Hover" width={16} height={16} className="hidden group-hover:block" />
              </>
              <span>|</span>
              <span>Instagram</span>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              href="https://linkedin.com/in/dhruvux"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 px-3 py-2 border rounded-full hover:bg-primary hover:text-white dark:hover:text-foreground transition">
              <>
                <Image src="/linkedin_dark.svg" alt="LinkedIn Dark" width={16} height={16} className="block dark:hidden group-hover:hidden" />
                <Image src="/linkedin_light.svg" alt="LinkedIn Light" width={16} height={16} className="hidden dark:block group-hover:hidden" />
                <Image src="/linkedin_light.svg" alt="LinkedIn Light Hover" width={16} height={16} className="hidden group-hover:block" />
              </>
              <span>|</span>
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              href="https://www.behance.net/dhruvui"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 px-3 py-2 border rounded-full hover:bg-primary hover:text-white dark:hover:text-foreground transition">
              <>
                <Image src="/behance_dark.svg" alt="Behance Dark" width={16} height={16} className="block dark:hidden group-hover:hidden" />
                <Image src="/behance_light.svg" alt="Behance Light" width={16} height={16} className="hidden dark:block group-hover:hidden" />
                <Image src="/behance_light.svg" alt="Behance Light Hover" width={16} height={16} className="hidden group-hover:block" />
              </>
              <span>|</span>
              <span>Behance</span>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              href="https://x.com/dhruv_is_here"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 px-3 py-2 border rounded-full hover:bg-primary hover:text-white dark:hover:text-foreground transition">
              <>
                <Image src="/x_dark.svg" alt="Twitter Dark" width={16} height={16} className="block dark:hidden group-hover:hidden" />
                <Image src="/x_light.svg" alt="Twitter Light" width={16} height={16} className="hidden dark:block group-hover:hidden" />
                <Image src="/x_light.svg" alt="Twitter Light Hover" width={16} height={16} className="hidden group-hover:block" />
              </>
              <span>|</span>
              <span>Twitter</span>
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
          className="absolute sm:animate-fly-1 sm:bottom-32 bottom-14 right-0 sm:right-12 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition">
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
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-14 left-28 right-28 z-[100] bg-background/10 backdrop-blur-lg border border-foreground/10 shadow-lg rounded-3xl px-8 py-6 flex flex-col items-center space-y-5 w-[50%] max-w-sm">
          <Link href="/about" className="text-lg font-semibold hover:text-primary">About</Link>
          <Link href="/projects" className="text-lg font-semibold hover:text-primary">Projects</Link>
          <Link
            href="https://drive.google.com/file/d/1QajQRx9Xu8NeX3yaG_dmtDn6XNjkS4YO/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold hover:text-primary">
            Resume
          </Link>
          <Link href="#footer" className="text-lg font-semibold hover:text-primary">
            Contact
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}