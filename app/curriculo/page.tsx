import type { Metadata } from "next";
import { FileDown } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { personal } from "@/lib/data";

export const metadata: Metadata = {
  title: "Currículo",
  description: "Visualize online ou baixe o currículo em PDF de João Victor Vieira.",
};

export default function CurriculoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Currículo"
        title="Visualize online ou baixe o PDF."
        description="Versão completa e atualizada, otimizada para leitura por ATS (Applicant Tracking Systems)."
      />

      <Reveal className="mb-6 flex flex-wrap gap-3">
        <a
          href={personal.resumePdf}
          download
          className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#0b0e11] transition hover:opacity-90"
        >
          <FileDown size={16} />
          Baixar PDF
        </a>
        <a
          href={personal.resumePdf}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-ink transition hover:bg-black/5 dark:hover:bg-white/5"
        >
          Abrir em nova aba
        </a>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="card overflow-hidden">
          <object
            data={`${personal.resumePdf}#view=FitH`}
            type="application/pdf"
            className="h-[75vh] w-full"
            aria-label="Currículo de João Victor Vieira em PDF"
          >
            <p className="p-6 text-sm text-inkSoft">
              Não foi possível exibir o PDF neste navegador.{" "}
              <a href={personal.resumePdf} className="text-accent underline">
                Clique aqui para baixar
              </a>
              .
            </p>
          </object>
        </div>
      </Reveal>

      <Footer />
    </>
  );
}
