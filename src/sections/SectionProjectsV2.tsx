"use client";

import { DesktopSectionProject } from "@/components/DesktopSectionProject";
import { ProjectParalaxEffect } from "@/components/ProjectParalaxEffect";
import { projects } from "@/constants/project";
import { useEffect, useRef, useState } from "react";

export const SectionProjectsV2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideHeight, setSlideHeight] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);

  const STICKY_OFFSET = 96;

  useEffect(() => {
    const update = () => {
      setSlideHeight(window.innerHeight - STICKY_OFFSET);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full scroll-mt-24"
      style={{
        height: slideHeight * projects.length + STICKY_OFFSET,
      }}
    >
      <div className="md:sticky top-24 h-[calc(100vh-96px)] flex">
        <div className="w-full min-h-full gap-0 flex flex-col md:flex-row">
          {/* LEFT CONTAINER */}
          <div className="p-6 flex flex-1 flex-col justify-between">
            <h2 className="text-7xl font-bold text-neutral-950">
              RECENT WORKS
            </h2>

            <div className="gap-4 hidden md:flex flex-col">
              {projects.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={item.id}
                    className={`flex justify-between items-center transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-30"
                    }`}
                  >
                    <div className="flex gap-2 items-center">
                      <p>0{index + 1}</p>
                      <p className={isActive ? "font-semibold" : ""}>
                        {item.title}
                      </p>
                    </div>

                    <p className={isActive ? "font-semibold" : ""}>
                      {item.period}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE VIEW RIGHT CONTAINER */}
          <div className="flex md:hidden flex-1 flex-col">
            {projects.map((project, index) => (
              <ProjectParalaxEffect
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* DESKTOP VIEW RIGHT CONTAINER */}
          <div className="hidden md:flex flex-1 flex-col">
            <DesktopSectionProject
              sectionRef={sectionRef}
              slideHeight={slideHeight}
              setActiveIndex={setActiveIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
