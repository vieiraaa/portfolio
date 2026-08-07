import type { TechCategory } from "@/lib/data";
import Reveal from "@/components/Reveal";

const levelWidth: Record<string, string> = {
  Avançado: "w-full",
  Intermediário: "w-2/3",
  Básico: "w-1/3",
};

export default function TechGrid({ categories }: { categories: TechCategory[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {categories.map((cat, index) => (
        <Reveal key={cat.category} delay={index * 0.05}>
          <div className="card h-full p-6">
            <h3 className="mb-5 font-display text-base font-semibold text-ink">
              {cat.category}
            </h3>
            <ul className="space-y-3.5">
              {cat.items.map((item) => (
                <li key={item.name}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-sm text-ink">{item.name}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wide text-inkSoft">
                      {item.level}
                    </span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-surface2">
                    <div
                      className={`h-full rounded-full bg-accent ${levelWidth[item.level]}`}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
