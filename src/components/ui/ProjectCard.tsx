import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from '../../data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border border-border hover:border-border-strong transition-colors duration-300">
      <div className="aspect-[16/10] overflow-hidden border-b border-border bg-bg-raised">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="h-full w-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-[filter] duration-500"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-display text-5xl text-text-muted/40 select-none">
              {project.title.slice(0, 2)}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl text-text">{project.title}</h3>
          <span className="font-mono text-xs text-text-muted shrink-0">{project.year}</span>
        </div>

        <p className="mt-1 font-mono text-xs text-secondary">{project.category}</p>

        <p className="mt-4 text-[0.95rem] leading-relaxed text-text-muted max-w-[62ch]">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-sm border border-border px-2 py-1 font-mono text-[0.7rem] text-text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text hover:text-accent transition-colors"
            >
              <FaGithub size={15} />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text hover:text-accent transition-colors"
            >
              Live
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
