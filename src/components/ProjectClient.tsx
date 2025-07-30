/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { Github, Globe } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function ProjectClient({ projects }) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className={`m-auto p-24 ${inter.className}`}>
      <div className="flex flex-col gap-4">
        <div className="w-full">
          <div className="flex items-center gap-4">
            <h1 className="font-extrabold text-4xl text-slate-950 dark:text-white leading-tight">
              Projects.
            </h1>
          </div>
        </div>
      </div>
      <div className="my-projects mt-4 relative">
        {projects.length === 0 ? (
          <p className="mt-4">No projects found.</p>
        ) : loading ? (
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
                          className="text-slate-800 dark:text-white hover:text-violet-500 py-1 px-2 font-medium"
                        >
                          <Globe className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}