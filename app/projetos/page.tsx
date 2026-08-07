import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos de Full Stack, Inteligência Artificial, Automação e Business Intelligence.",
};

export default function ProjetosPage() {
  return (
    <>
      <PageHeader
        eyebrow={`${projects.length} projetos`}
        title="Sistemas, integrações e agentes de IA em produção."
        description="Da plataforma comercial de uma joint venture industrial a agentes de IA para triagem de suporte — cada projeto abaixo resolve um problema de negócio real."
      />

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </section>

      <Footer />
    </>
  );
}
