import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import RotatingBadge from "@/components/RotatingBadge";
import Trajectory from "@/components/Trajectory";
import Footer from "@/components/Footer";
import { personal, trajectory } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Trajetória de João Victor Vieira: de Planejamento & Controle de Manutenção a Full Stack e IA.",
};

export default function SobrePage() {
  return (
    <>
      <section className="grid gap-10 pt-5 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-14 md:pt-12">
        <Reveal className="relative mx-auto w-full max-w-sm md:mx-100">
          <div className="card relative overflow-hidden rounded-[28px]">
            {/* Placeholder de banco de imagens — trocar por foto real em /public */}
            <img
              src="https://picsum.photos/seed/joaovieira/700/860"
              alt={personal.fullName}
              className="aspect-[4/5] w-full object-cover grayscale"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 rounded-full bg-bg p-2">
            <RotatingBadge text="DESENVOLVEDOR FULLSTACK" size={128} />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="pl-100 md:pl-6 lg:pl-10">
          <p className="eyebrow mb-4">Sobre mim</p>
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
            {personal.fullName}
          </h1>
          <p className="mt-3 text-base text-inkSoft sm:text-lg">
            {personal.role}
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-inkSoft">
            Comecei na operação industrial, migrei para desenvolvimento
            automatizando meu próprio trabalho, e hoje construo sistemas e
            agentes de IA do requisito ao deploy.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link 
              href="/projetos" 
              className="theme-contrast-bg fo   cus-ring inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Ver projetos
              <ArrowUpRight size={16} className="text-white" />
            </Link>
            <span className="inline-flex items-center gap-2 text-sm text-inkSoft">
              <MapPin size={15} className="text-accent2" />
              {personal.location}
            </span>
          </div>
        </Reveal>
      </section>

      <section className="mt-20 md:mt-28">
        <Reveal className="mb-14">
          <p className="eyebrow mb-3">Trajetória</p>
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Do chão de fábrica ao código em produção.
          </h2>
        </Reveal>
        <Trajectory items={trajectory} />
      </section>

      <Footer />
    </>
  );
}