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
              src="https://media.licdn.com/dms/image/v2/D4D03AQED0jav0OLHJA/profile-displayphoto-shrink_800_800/B4DZV_8w0DHkAc-/0/1741608390494?e=1787788800&v=beta&t=kfkT7drIFGKMr6CL5rTwKOV1bZwCx2gu3sXjeB_3iCc"
              alt={personal.fullName}
              className="aspect-[4/5] w-full object-cover grayscale"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 rounded-full bg-bg p-2">
            <RotatingBadge text="DESENVOLVEDOR FULLSTACK" size={128} />
          </div>
        </Reveal>
          <Reveal delay={0.1} className="md:pl-6 lg:pl-10">
          <p className="mx-4 sm:mx-0 eyebrow mb-4">Sobre mim</p>

          <h1 className="mx-4 sm:mx-0 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
            {personal.fullName}
          </h1>

          <p className="mx-4 sm:mx-0 mt-3 text-base text-inkSoft sm:text-lg">
            {personal.role}
          </p>
        
          <div className="mx-4 sm:mx-0 mt-6 max-w-xl space-y-4 text-base leading-relaxed text-inkSoft">
            <p>
              Minha trajetória começou na indústria, atuando diretamente com
              processos, planejamento e operação. Antes de desenvolver
              sistemas, aprendi a entender problemas reais de negócio, seus
              impactos e as pessoas que precisam resolvê-los.
            </p>

            <p>
              A programação surgiu como uma ferramenta para melhorar esses
              processos. Comecei automatizando tarefas da própria rotina com
              Python, VBA e dados, evoluindo para desenvolvimento Full Stack,
              integrações, Business Intelligence e, posteriormente,
              Inteligência Artificial.
            </p>

            <p>
              Hoje desenvolvo sistemas, APIs, automações e agentes de IA,
              conectando tecnologia à necessidade de quem está na operação —
              do levantamento do requisito ao deploy e à evolução da solução.
            </p>
          </div>

          <div className="mx-4 sm:mx-0  mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/projetos"
              className="theme-contrast-bg focus-ring inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Ver projetos
              <ArrowUpRight size={16} className="text-white" />
            </Link>

            <span className="mx-4 sm:mx-0 inline-flex items-center gap-2 text-sm text-inkSoft">
              <MapPin size={15} className="text-accent2" />
              {personal.location}
            </span>
          </div>
        </Reveal>
      </section>

      <section className="mt-20 md:mt-28">
        <Reveal className="mb-14">
          <p className="mx-4 sm:mx-0 eyebrow mb-3">Trajetória</p>

          <h2 className="mx-4 sm:mx-0 font-display text-2xl font-bold text-ink sm:text-3xl">
            Da operação à tecnologia.
          </h2>

          <p className="mx-4 sm:mx-0 mt-4 max-w-2xl text-base leading-relaxed text-inkSoft">
            Uma trajetória construída entre processos industriais, gestão
            técnica, dados, automação, desenvolvimento de software e
            Inteligência Artificial.
          </p>
        </Reveal>
        <div className="mx-4 sm:mx-0 ">
          <Trajectory items={trajectory} />
        </div>
      </section>
      <Footer />
    </>
  );
}