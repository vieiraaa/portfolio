import Link from "next/link";
import { ArrowUpRight, FileDown, Github, Linkedin } from "lucide-react";
import Reveal from "@/components/Reveal";
import TerminalHero from "@/components/TerminalHero";
import RoleRotator from "@/components/RoleRotator";
import ProjectCard from "@/components/ProjectCard";
import { ParticleField } from "@/components/ParticleField";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";
import { personal, projects, experiences, technologies } from "@/lib/data";

const featuredSlugs = ["jie-bnamiq", "rag-fastapi", "assistente-ia-suporte", "dashboard-executivo"];
const featuredProjects = projects.filter((p) => featuredSlugs.includes(p.slug));
const coreStack = technologies
  .flatMap((c) => c.items)
  .filter((i) => i.level === "Avançado")
  .slice(0, 10);

export default function HomePage() {
  return (
    <>
      <section className="section-shell grid gap-8 pt-5 md:grid-cols-2 md:items-center md:gap-16 md:pt-16">
        <Reveal>
          <p className="mb-2 font-mono text-sm text-inkSoft">
            <RoleRotator />
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-3.4rem]">
            Construindo<br></br><span className="theme-contrast"> sistemas inteligentes </span> para problemas reais.
          </h1>
          <p className="text-justify mt-6 max-w-lg text-base leading-relaxed text-inkSoft sm:text-lg">
            {personal.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/projetos"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accentInk transition hover:opacity-90"
            >
              Ver projetos
              <ArrowUpRight size={16} />
            </Link>
            <a
              href={personal.resumePdf}
              target="_blank"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-ink transition hover:bg-black/5 dark:hover:bg-white/5"
            >
              <FileDown size={16} />
              Currículo
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink transition hover:bg-black/5 dark:hover:bg-white/5"
            >
              <Github size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink transition hover:bg-black/5 dark:hover:bg-white/5"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <TerminalHero />
        </Reveal>
      </section>

      <section className="section-shell mt-12 md:mt-20 lg:mt-28">
        <div className="stat-table grid grid-cols-2 divide-y divide-border sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
          {personal.highlights.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06} className="stat-cell">
              <AnimatedCounter
                value={stat.value}
                className="theme-contrast font-mono text-3xl font-bold tabular-nums text-ink sm:text-4xl"
              />
              <p className="mt-2 text-xs leading-snug text-inkSoft">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell mt-12 md:mt-20 lg:mt-24">
        <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">Stack & Tecnologias</p>
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              As tecnologias por trás do que eu construo.
            </h2>
          </div>
          <Link
            href="/tecnologias"
            className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80"
          >
            Ver todas as tecnologias
            <ArrowUpRight size={15} />
          </Link>
        </Reveal>
        <div className="flex flex-wrap gap-2.5">
          {coreStack.map((tech, i) => (
            <Reveal key={tech.name} delay={i * 0.03}>
              <span className="rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs text-ink">
                {tech.name}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell mt-12 md:mt-20 lg:mt-24">
        <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">Projetos em destaque</p>
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Onde código, dados e IA viram produto.
            </h2>
          </div>
          <Link
            href="/projetos"
            className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80"
          >
            Ver todos os projetos
            <ArrowUpRight size={15} />
          </Link>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <section className="section-shell mt-12 md:mt-20 lg:mt-24">
        <Reveal className="mb-8">
          <p className="eyebrow mb-3">Experiência</p>
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Uma jornada construída entre indústria e tecnologia.
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.08}>
              <div className="card h-full p-5 sm:p-6">
                <p className="eyebrow mb-2">{exp.period}</p>
                <h3 className="font-display text-base font-semibold text-ink">
                  {exp.role}
                </h3>
                <p className="mt-1 text-sm text-inkSoft">{exp.company}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-6">
          <Link
            href="/experiencia"
            className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80"
          >
            Ver linha do tempo completa
            <ArrowUpRight size={15} />
          </Link>
        </Reveal>
      </section>

      <section className="section-shell mt-12 md:mt-20 lg:mt-24">
        <Reveal className="card relative overflow-hidden flex flex-col items-start justify-between gap-5 bg-ink p-6 sm:flex-row sm:items-center sm:p-8">
          <ParticleField density={18} />
          <div className="relative z-10">
            <h2 className="font-display text-2xl font-bold text-theme-contrast sm:text-3xl">
              Vamos conversar sobre o seu próximo sistema?
            </h2>
            <p className="mt-2 max-w-md text-sm text-theme-contrast/60 sm:text-base">
              Aberto a oportunidades como Full Stack, AI Engineer e consultorias em automação.
            </p>
          </div>
          <Link
            href="/contato"
            className="focus-ring relative z-10 inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accentInk transition hover:opacity-90"
          >
            Entrar em contato
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}