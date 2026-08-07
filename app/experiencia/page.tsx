import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import { experiences } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experiência",
  description: "Linha do tempo profissional: ATI Brasil, Guararapes Painéis e projetos freelance.",
};

export default function ExperienciaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trajetória"
        title="De Planejamento & Controle de Manutenção a Full Stack + IA."
        description="Seis anos de experiência profissional combinando gestão de operações industriais e desenvolvimento de software — hoje aplicados em sistemas corporativos e automações com IA."
      />
      <Timeline items={experiences} />
      <Footer />
    </>
  );
}
