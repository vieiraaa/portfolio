import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Reveal delay={Math.min(index * 0.06, 0.3)}>
      <Link
        href={`/projetos/${project.slug}`}
        className="focus-ring card group flex h-full flex-col justify-between p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
      >
        <div>
          <div className="mb-4 flex items-start justify-between gap-3">
            <span className="eyebrow">{project.category}</span>
            <ArrowUpRight
              size={18}
              className="shrink-0 text-inkSoft transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
            />
          </div>
          <h3 className="font-display text-lg font-semibold text-ink">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-inkSoft line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-inkSoft"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-inkSoft">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
      </Link>
    </Reveal>
  );
}
