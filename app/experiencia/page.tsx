import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import PageHeader from "@/components/PageHeader";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ParticleField } from "@/components/ParticleField";
import { experiences } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experiência",
  description:
    "Trajetória profissional de João Victor Vieira — operações industriais, dados, desenvolvimento Full Stack, automação e Inteligência Artificial.",
};

const evolution = [
  {
    number: "01",
    title: "Operação",
    description:
      "O início da trajetória, dentro da operação industrial, entendendo processos, pessoas, recursos e indicadores na prática.",
  },
  {
    number: "02",
    title: "Dados",
    description:
      "A transformação de informações operacionais em indicadores, dashboards e ferramentas para apoiar decisões.",
  },
  {
    number: "03",
    title: "Automação",
    description:
      "Python, VBA e integrações passaram a eliminar tarefas manuais e tornar processos mais eficientes.",
  },
  {
    number: "04",
    title: "Software",
    description:
      "Problemas do negócio passaram a ser traduzidos em aplicações, APIs, integrações e sistemas corporativos.",
  },
  {
    number: "05",
    title: "IA",
    description:
      "LLMs, RAG, agentes e automações ampliaram a capacidade dos sistemas de interpretar informações e executar processos.",
  },
];

export default function ExperienciaPage() {
  return (
    <>
      <main>
        {/* HERO */}
        <PageHeader
          eyebrow="Experiência"
          title={
            <>
              Do chão de fábrica
              <br />
              ao código em produção.
            </>
          }
          description="Minha trajetória começou dentro da operação industrial. Foi a partir dos problemas reais do negócio que surgiram o interesse por dados, automação, desenvolvimento de software e, posteriormente, Inteligência Artificial."
        />

        {/* EVOLUÇÃO */}
        <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
          <Reveal>
            <div className="overflow-visible rounded-3xl border border-border bg-surface">
              <div className="px-6 py-7 sm:px-8 sm:py-8 lg:px-10">
                {/* HEADER */}
                <div className="mb-10 flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      Evolução profissional
                    </p>
                  </div>

                  <span className="font-mono text-[10px] text-muted">
                    2017 — 2026
                  </span>
                </div>

                {/* DESKTOP TIMELINE */}
                <div className="relative hidden sm:block">
                  {/* linha */}
                  <div className="absolute left-0 right-0 top-[7px] h-px bg-border" />

                  <div className="relative grid grid-cols-5">
                    {evolution.map((item) => (
                      <div
                        key={item.number}
                        className="group relative"
                      >
                        {/* PONTO */}
                        <div className="relative z-20 flex h-4 w-4 items-center justify-center">
                          <span className="absolute h-4 w-4 rounded-full border border-border bg-surface transition-all duration-300 group-hover:h-5 group-hover:w-5 group-hover:border-ink" />

                          <span className="relative h-1.5 w-1.5 rounded-full bg-muted transition-all duration-300 group-hover:bg-ink" />
                        </div>

                        {/* TOOLTIP */}
                        <div className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-7 w-[250px] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <div className="rounded-2xl border border-border bg-bg p-5 shadow-[0_16px_50px_rgba(0,0,0,0.08)]">
                            <div className="flex items-center gap-3">
                              <span className="font-mono text-[9px] tracking-[0.18em] text-muted">
                                {item.number}
                              </span>

                              <span className="h-px w-5 bg-border" />

                              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                                Etapa
                              </span>
                            </div>

                            <h3 className="mt-3 font-display text-base font-semibold text-ink">
                              {item.title}
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-muted">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* TEXTO */}
                        <div className="mt-7">
                          <span className="font-mono text-[9px] text-muted">
                            {item.number}
                          </span>

                          <p className="mt-1 font-display text-sm font-semibold text-ink lg:text-base">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MOBILE */}
                <div className="space-y-5 sm:hidden">
                  {evolution.map((item) => (
                    <div
                      key={item.number}
                      className="flex gap-4 border-b border-border pb-5 last:border-0 last:pb-0"
                    >
                      <div className="flex shrink-0 flex-col items-center">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-ink">
                          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                        </span>

                        {item.number !== "05" && (
                          <span className="mt-2 h-full w-px bg-border" />
                        )}
                      </div>

                      <div className="pb-1">
                        <span className="font-mono text-[9px] text-muted">
                          {item.number}
                        </span>

                        <h3 className="mt-1 font-display text-base font-semibold text-ink">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* EXPERIÊNCIA */}
        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
            <Reveal>
              <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="eyebrow mb-3">Experiência profissional</p>

                  <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                    Experiência que virou
                    <br />
                    repertório.
                  </h2>
                </div>

                <p className="max-w-md text-sm leading-6 text-muted md:text-right">
                  Cada etapa adicionou uma nova camada à forma como eu
                  entendo problemas, desenvolvo soluções e trabalho com
                  tecnologia.
                </p>
              </div>
            </Reveal>

            <Timeline items={experiences} />
          </div>
        </section>

        {/* POSICIONAMENTO */}
        <section className="mx-auto max-w-7xl px-6 py-28 sm:px-8 lg:px-12">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-20">
              <div>
                <p className="eyebrow mb-5">Onde estou hoje</p>

                <h2 className="max-w-4xl font-display text-4xl font-bold leading-[1.04] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                  Entender o problema.
                  <br />
                  Construir a solução.
                  <br />
                  Gerar impacto.
                </h2>
              </div>

              <div className="flex flex-col justify-end lg:pb-1">
                <div className="mb-6 h-px w-10 bg-ink" />

                <p className="text-sm leading-7 text-muted">
                  Hoje atuo na interseção entre negócio e tecnologia,
                  combinando experiência operacional com desenvolvimento
                  Full Stack, dados, automação e Inteligência Artificial.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="section-shell mb-12 md:mb-20 lg:mb-24">
          <Reveal className="card relative overflow-hidden bg-ink p-6 sm:p-8 lg:p-10">
            <ParticleField density={18} />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-theme-contrast/50">
                  Próximo capítulo
                </p>

                <h2 className="mt-3 max-w-2xl font-display text-2xl font-bold text-theme-contrast sm:text-3xl">
                  O próximo problema pode ser o próximo projeto.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-theme-contrast/60">
                  Aberto a oportunidades em desenvolvimento Full Stack,
                  Inteligência Artificial, automação e sistemas corporativos.
                </p>
              </div>

              <Link
                href="/contato"
                className="focus-ring inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accentInk transition hover:opacity-90"
              >
                Entrar em contato
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}