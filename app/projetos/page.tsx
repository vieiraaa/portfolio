import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos de Full Stack, Inteligência Artificial, Automação e Business Intelligence.",
};

export default function ProjetosPage() {
  return (
    <>
      <PageHeader
        eyebrow={`${projects.length} projetos`}
        title="Sistemas, integrações e agentes de IA em produção."
        description="Da plataforma comercial de uma joint venture industrial a agentes de IA para triagem de suporte — cada projeto abaixo resolve um problema de negócio real."
      />

      <section className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-7 lg:mt-16 lg:grid-cols-3 lg:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </section>

      <div className="mt-20 sm:mt-24 lg:mt-32">
        <Footer />
      </div>
    </>
  );
}