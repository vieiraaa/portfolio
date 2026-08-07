import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, Lightbulb, Target, Wrench } from "lucide-react";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <Reveal className="mb-10">
        <Link
          href="/projetos"
          className="focus-ring mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-inkSoft hover:text-ink"
        >
          <ArrowLeft size={15} />
          Todos os projetos
        </Link>
        <p className="eyebrow mb-3">{project.category}</p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-inkSoft sm:text-lg">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#0b0e11] transition hover:opacity-90"
            >
              Ver demo
              <ArrowUpRight size={15} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-black/5 dark:hover:bg-white/5"
            >
              <Github size={15} />
              Código
            </a>
          )}
          {project.needsDetail && !project.github && !project.demo && (
            <span className="rounded-full border border-dashed border-border px-4 py-2.5 font-mono text-xs text-inkSoft">
              Link do repositório/demo a confirmar
            </span>
          )}
        </div>
      </Reveal>

      <section className="grid gap-5 sm:grid-cols-3">
        <Reveal>
          <div className="card h-full p-6">
            <Target size={18} className="mb-3 text-accent" />
            <h2 className="mb-2 font-display text-sm font-semibold uppercase tracking-wide text-ink">
              Problema
            </h2>
            <p className="text-sm leading-relaxed text-inkSoft">{project.problem}</p>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="card h-full p-6">
            <Lightbulb size={18} className="mb-3 text-accent" />
            <h2 className="mb-2 font-display text-sm font-semibold uppercase tracking-wide text-ink">
              Solução
            </h2>
            <p className="text-sm leading-relaxed text-inkSoft">{project.solution}</p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="card h-full p-6">
            <Wrench size={18} className="mb-3 text-accent" />
            <h2 className="mb-2 font-display text-sm font-semibold uppercase tracking-wide text-ink">
              Resultados
            </h2>
            <p className="text-sm leading-relaxed text-inkSoft">
              {project.results ?? "Detalhamento de resultados a ser adicionado."}
            </p>
          </div>
        </Reveal>
      </section>

      <Reveal delay={0.16} className="mt-10">
        <p className="eyebrow mb-4">Stack utilizada</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-xs text-ink"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>

      {project.needsDetail && (
        <Reveal delay={0.2} className="mt-10 rounded-[var(--radius-panel)] border border-dashed border-border p-6">
          <p className="text-sm leading-relaxed text-inkSoft">
            Este projeto está listado a partir do currículo e ainda não tem
            screenshots, arquitetura detalhada ou link público documentados
            neste portfólio. Assim que esse material for organizado, esta
            página pode ser expandida com prints, diagrama de arquitetura e
            principais desafios técnicos.
          </p>
        </Reveal>
      )}

      <Footer />
    </>
  );
}
