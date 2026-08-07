import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-start justify-center">
      <p className="font-mono text-xs text-inkSoft">
        <span className="text-accent">➜</span> ~ curl portfolio/essa-rota
      </p>
      <p className="mt-1 font-mono text-xs text-inkSoft">
        {"> "}
        <span className="text-accent">Error 404</span>: rota não encontrada no servidor.
      </p>
      <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl">
        404
      </h1>
      <p className="mt-3 max-w-md text-base leading-relaxed text-inkSoft">
        Essa página não existe — ou foi movida. Que tal voltar para o início e
        conferir os projetos em produção?
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#0b0e11] transition hover:opacity-90"
      >
        <ArrowLeft size={16} />
        Voltar para o início
      </Link>
    </section>
  );
}
