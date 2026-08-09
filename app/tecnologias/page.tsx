import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import PageHeader from "@/components/PageHeader";
import TechGrid from "@/components/TechGrid";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ParticleField } from "@/components/ParticleField";
import { technologies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tecnologias",
  description:
    "Stack técnica de João Victor Vieira: desenvolvimento full stack, dados, automação, IA, BI, cloud e DevOps.",
};

const highlights = [
  {
    number: "01",
    title: "Desenvolvimento",
    description:
      "Aplicações web, APIs e sistemas internos construídos do frontend ao backend.",
  },
  {
    number: "02",
    title: "Dados & BI",
    description:
      "ETL, bancos relacionais, dashboards e transformação de dados em informação útil.",
  },
  {
    number: "03",
    title: "IA & Automação",
    description:
      "Integração de LLMs, RAG, agentes, embeddings e automações orientadas a processos.",
  },
];

export default function TecnologiasPage() {
  return (
    <>
      {/* HERO */}
      <div className="mx-4 sm:mx-0">
      <PageHeader
        eyebrow="Stack técnica"
        title={
          <>
            Tecnologia para transformar
            <br />
            problemas em soluções.
          </>
        }
        description="Uma stack construída na prática, combinando desenvolvimento full stack, dados, automação, inteligência artificial e ferramentas de negócio."
      />
    </div>
      <main className="px-4 sm:px-0">
        {/* RESUMO DA STACK */}
        <section className="mx-auto max-w-7xl pb-16 sm:pb-20 lg:pb-24">
          <div className="grid overflow-hidden rounded-3xl border border-border bg-surface md:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={item.number}
                className={[
                  "group relative p-6 sm:p-8 lg:p-9",
                  index !== highlights.length - 1
                    ? "border-b border-border md:border-b-0 md:border-r"
                    : "",
                ].join(" ")}
              >
                <div className="mb-8 flex items-center justify-between sm:mb-10">
                  <span className="font-mono text-xs text-muted">
                    {item.number}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-ink transition-transform duration-300 group-hover:scale-150" />
                </div>

                <h2 className="mb-3 font-display text-xl font-semibold text-ink">
                  {item.title}
                </h2>

                <p className="max-w-sm text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* STACK */}
        <section className="mx-auto max-w-7xl pb-20 sm:pb-24 lg:pb-28">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:mb-12">
            <div>
              <p className="eyebrow mb-3">Tecnologias</p>

              <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Ferramentas que fazem
                <br />
                parte do meu trabalho.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-muted md:text-right">
              O nível de domínio representa minha experiência prática com cada
              tecnologia — considerando contexto profissional, projetos
              desenvolvidos e complexidade das soluções entregues.
            </p>
          </div>

          <TechGrid categories={technologies} />
        </section>
      </main>

      {/* COMO EU TRABALHO */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="eyebrow mb-3">Além da stack</p>

              <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                A ferramenta é só parte da solução.
              </h2>
            </div>

            <div className="space-y-8">
              <div className="border-b border-border pb-8">
                <span className="font-mono text-xs text-muted">
                  01 — CONTEXTO
                </span>

                <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
                  Antes de escolher uma tecnologia, procuro entender o
                  problema, os usuários, os dados envolvidos e o resultado
                  esperado.
                </p>
              </div>

              <div className="border-b border-border pb-8">
                <span className="font-mono text-xs text-muted">
                  02 — ARQUITETURA
                </span>

                <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
                  A stack é definida de acordo com o cenário: simplicidade,
                  manutenção, performance, integração e capacidade de
                  evolução.
                </p>
              </div>

              <div>
                <span className="font-mono text-xs text-muted">
                  03 — ENTREGA
                </span>

                <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
                  O objetivo não é apenas colocar código em produção, mas
                  entregar uma solução que realmente resolva o problema e
                  possa continuar evoluindo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-shell mt-10 px-4 sm:mt-16 sm:px-0 md:mt-20 lg:mt-24">
        <Reveal className="card relative flex flex-col items-start justify-between gap-6 overflow-hidden bg-ink p-6 sm:flex-row sm:items-center sm:p-8">
          <ParticleField density={18} />

          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-theme-contrast sm:text-3xl">
              Vamos conversar sobre o seu próximo sistema?
            </h2>

            <p className="mt-2 max-w-md text-sm text-theme-contrast/60 sm:text-base">
              Aberto a oportunidades como Full Stack, AI Engineer e
              consultorias em automação.
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