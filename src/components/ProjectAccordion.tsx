"use client";

import Image from "next/image";
import { useState } from "react";
import { Project } from "@/lib/projects";

export default function ProjectAccordion({
  projects,
}: {
  projects: Project[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      {projects.map((project, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={project.name} className="border-t border-white/10">
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full py-6 text-left group"
            >
              <span className="text-lg sm:text-xl font-semibold tracking-tight text-white group-hover:text-white/70 transition-colors duration-200">
                {project.name}
              </span>
              <span
                className={`text-white/40 text-lg transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
              >
                ↓
              </span>
            </button>

            <div
              className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-12 pb-10">
                  <div className="w-full sm:w-[420px] sm:h-[260px] aspect-video sm:aspect-auto shrink-0 overflow-hidden bg-white/5 rounded-sm">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={420}
                      height={260}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  <div className="flex flex-col gap-5 sm:pt-1">
                    <p className="text-sm leading-relaxed text-white/55 font-light sm:max-w-sm">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 text-xs tracking-widest uppercase border border-white/20 text-white/60 hover:border-white hover:text-white transition-colors duration-200 font-light"
                      >
                        GitHub
                      </a>
                      {project.visit && (
                        <a
                          href={project.visit}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2 text-xs tracking-widest uppercase bg-white text-black hover:bg-white/80 transition-colors duration-200 font-light"
                        >
                          Visit
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="border-t border-white/10" />
    </div>
  );
}
