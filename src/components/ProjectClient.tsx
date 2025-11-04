/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Globe, X, ExternalLink } from "lucide-react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Link from "next/link";

// Case studies data
const caseStudiesData = [
  {
    id: '1',
    title: 'Vyapari Sang',
    readTime: '17 min Read',
    image: '/phd_1.png',
    caseStudy: 'Case Study 01',
    viewProject: true,
    behanceLink: 'https://www.behance.net/gallery/236124553/Vyapari-Sang',
    grad: false,
  },
  {
    id: '2',
    title: 'Xeonic',
    readTime: '8 min Read',
    image: '/phd_2.png',
    caseStudy: 'Case Study 02',
    behanceLink: 'https://www.behance.net/gallery/205515587/Xeonic',
    grad: false,
  },
  {
    id: '3',
    title: 'Macros',
    readTime: '5 min Read',
    image: '/phd_3.png',
    caseStudy: 'Case Study 03',
    behanceLink: 'https://www.behance.net/gallery/218717433/Macros-Food-Tracker-App-(UI-UX-Redesign)',
    grad: true,
  },
  {
    id: '4',
    title: 'IRCTC Redesign',
    readTime: '12 min Read',
    image: '/phd_4.png',
    caseStudy: 'Case Study 04',
    viewProject: true,
    behanceLink: 'https://www.behance.net/gallery/218713471/IRCTC-App-Redesign',
    grad: false,
  }
];

export default function ProjectClient({ projects = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<"development" | "case-studies">("case-studies");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <NavBar onMenuToggle={setMenuOpen} />
      <section className="m-auto px-6 md:px-44 pt-24">
        <div className="flex flex-col gap-4">
          <div className="w-full">
            <div className="flex items-center gap-4">
              <h1 className="font-extrabold text-4xl text-slate-950 dark:text-white leading-tight">
                Projects
              </h1>
            </div>
          </div>

          {/* Tab Buttons */}
          <div className="flex gap-8 mt-4 border-b border-black/10 dark:border-white/10">
            <button
              onClick={() => setActiveTab("case-studies")}
              className={`pb-2 text-lg font-medium transition-colors ${activeTab === "case-studies"
                  ? "text-slate-950 dark:text-white border-b-2 border-slate-950 dark:border-white"
                  : "text-slate-500 dark:text-slate-400"
                }`}
            >
              Design
            </button>
            <button
              onClick={() => setActiveTab("development")}
              className={`pb-2 text-lg font-medium transition-colors ${activeTab === "development"
                  ? "text-slate-950 dark:text-white border-b-2 border-slate-950 dark:border-white"
                  : "text-slate-500 dark:text-slate-400"
                }`}
            >
              Technical
            </button>
          </div>
        </div>

        <div className="my-projects mt-4 relative">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="card dark:bg-white/10 border border-black/10 backdrop-filter backdrop-blur-lg shadow-md rounded-xl p-4 dark:border-2 dark:border-white/10 animate-pulse"
                >
                  <div className="space-y-4">
                    <div className="h-8 w-3/4 dark:bg-white/50 bg-black/20 rounded"></div>
                    <div className="h-10 w-full dark:bg-white/50 bg-black/20 rounded"></div>
                    <div className="flex flex-wrap justify-between gap-y-2">
                      <div className="flex flex-wrap gap-2">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <div
                            key={i}
                            className="h-6 w-16 dark:bg-white/50 bg-black/20 rounded-full"
                          ></div>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <div className="h-6 w-6 dark:bg-white/50 bg-black/20 rounded-full"></div>
                        <div className="h-6 w-6 dark:bg-white/50 bg-black/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : activeTab === "development" ? (
            // Development Projects View
            projects.length === 0 ? (
              <p className="mt-4">No projects found.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {projects.map((project: any) => (
                  <div key={project.id} className="w-full">
                    <div className="card bg-white/10 dark:bg-black dark:border-white/10 rounded-xl p-4 text-slate-800 dark:text-white border border-black/10 h-full flex flex-col">
                      <div className="flex flex-col flex-grow">
                        <h1 className="text-lg font-semibold mt-3">
                          {project.properties.Name.title[0].plain_text}
                        </h1>
                        <p className="mt-3 text-sm text-slate-800 dark:text-slate-200">
                          {project.properties.Description.rich_text[0]?.text
                            .content || ""}
                        </p>
                      </div>

                      <div className="mt-auto pt-4 flex flex-wrap justify-between items-center gap-y-3">
                        <div className="flex flex-wrap gap-2 items-center">
                          {project.properties.Tags.multi_select.map(
                            (tag: any, index: number) => (
                              <span
                                key={index}
                                className="text-xs bg-black text-white dark:bg-white dark:text-black rounded-full px-2 py-1"
                              >
                                {tag.name}
                              </span>
                            )
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          {project.properties["Github URL"].url && (
                            <a
                              href={project.properties["Github URL"].url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-800 dark:text-white hover:text-violet-500 py-1 px-2 font-medium"
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          )}
                          {project.properties["Demo URL"].url && (
                            <a
                              href={project.properties["Demo URL"].url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-800 dark:text-white hover:text-violet-500 py-1 px-2 font-medium">
                              <Globe className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            // Case Studies View
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {caseStudiesData.map((caseStudy) => (
                <div key={caseStudy.id} className="w-full">
                  <div className="card bg-white/10 dark:bg-black dark:border-white/10 rounded-xl overflow-hidden text-slate-800 dark:text-white border border-black/10 h-full flex flex-col group hover:shadow-xl transition-shadow duration-300">
                    {/* Image Section */}
                    <div className="relative h-80 overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <Image
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-4 dark:bg-gray-800 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {caseStudy.caseStudy}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {caseStudy.readTime}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold mb-3">
                        {caseStudy.title}
                      </h2>

                      {/* Action Buttons */}
                      <div className="mt-auto items-center justify-center flex gap-3">
                        <a
                          href={caseStudy.behanceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-row hover:text-black flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/60 dark:hover:bg-slate-200 py-4 px-4 rounded-lg font-medium transition-colors text-sm">
                          View on Behance
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Animated Mobile Menu Overlay */}
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
          href="https://drive.google.com/file/d/12niEK0OIJFSsmz3T9NHv3khiqOONejkK/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl font-semibold hover:opacity-80">
          Resume
        </Link>
        <Link href="/#footer" className="text-4xl font-semibold hover:opacity-80"  onClick={() => setMenuOpen(false)}>
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