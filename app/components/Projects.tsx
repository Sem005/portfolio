"use client";

import { FC, useState } from "react";
import { CARD_CLASS, TAG_CLASS } from "../constants/design_constants";
import { PROJECTS } from "../data/data";
import { SectionHeader, Wrap } from "../primitives/primitives";
import { Project } from "../types/portfolio_types";

interface ProjectCardProps {
  project: Project;
  delay: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, delay }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`reveal ${CARD_CLASS} overflow-hidden flex flex-col ${delay}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="h-62.5 flex items-center justify-center relative overflow-hidden"
        style={{ background: project.bg }}
      >
        {/* Image container qui remplit l'espace */}
        <div className="w-full h-full flex items-center justify-center p-8">
          <div className="relative w-full h-full">{project.icon}</div>
        </div>
        <span className="absolute top-3 right-3 text-[0.72rem] text-[#8B9BAD] px-3 py-1 rounded-full border border-white/10 bg-[rgba(0,0,0,.5)] backdrop-blur-[8px]">
          {project.badge}
        </span>
      </div>
      <div className="p-7 flex flex-col flex-1">
        <div className="text-[0.72rem] tracking-[.12em] uppercase text-[#00E5FF] font-medium mb-2">
          {project.cat}
        </div>
        <h3 className="text-[1.15rem] font-bold text-[#F0F4F8] mb-3 font-syne">
          {project.title}
        </h3>
        <p className="text-[0.9rem] text-[#8B9BAD] leading-relaxed flex-1">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-1.5 my-5">
          {project.stack.map((tech) => (
            <span key={tech} className={TAG_CLASS}>
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-5 border-t border-white/5">
          <a
            href=  {project.view}
            className="text-[#00E5FF] text-[0.85rem] font-semibold no-underline flex items-center gap-1.5 transition-all hover:gap-3"
          >
            Voir le projet →
          </a>{" "}
         
        </div>
      </div>
    </div>
  );
};

const Projects: FC = () => {
  return (
    <section id="projects" className="py-[clamp(80px,10vw,140px)] bg-[#0D1117]">
      <Wrap>
        <SectionHeader
          label="Mes réalisations"
          title="Projets qui font la différence"
          sub="Chaque projet est construit avec un objectif précis : générer de la valeur réelle pour votre business."
        />
        <div className="grid gap-7 grid-cols-[repeat(auto-fit,minmax(340px,1fr))]">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={`delay-${(i % 3) + 1}00`}
            />
          ))}
        </div>
      </Wrap>
    </section>
  );
};

export default Projects;
