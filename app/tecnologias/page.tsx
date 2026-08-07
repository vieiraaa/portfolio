import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TechGrid from "@/components/TechGrid";
import Footer from "@/components/Footer";
import { technologies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tecnologias",
  description: "Stack técnica por categoria: linguagens, frontend, backend, dados, cloud, DevOps, IA e BI.",
};

export default function TecnologiasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Stack técnica"
        title="Ferramentas organizadas por camada do sistema."
        description="Nível de domínio autodeclarado, calibrado por tempo de uso profissional e complexidade dos projetos entregues em cada tecnologia."
      />
      <TechGrid categories={technologies} />
      <Footer />
    </>
  );
}
