"use client";

import { ProjectParalaxEffect } from "@/components/ProjectParalaxEffect";
import { projects } from "@/constants/project";

export const SectionProjects = () => {
  return (
    <section id="projects" className="w-full bg-black">
      {projects.map((project, index) => (
        <ProjectParalaxEffect
          key={project.id}
          project={project}
          index={index}
        />
      ))}
    </section>
  );
};
