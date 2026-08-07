import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="section-shell mt-32 border-t border-border pt-14 pb-20 md:mt-36 md:pt-16 md:pb-24">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-inkSoft">
          © {new Date().getFullYear()} {personal.fullName}. Todos os direitos reservados.
        </p>
        <p className="font-mono text-xs text-inkSoft">
          Construído com Next.js, TypeScript &amp; TailwindCSS · {personal.location}
        </p>
      </div>
    </footer>
  );
}
