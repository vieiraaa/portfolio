"use client";

import Reveal from "@/components/Reveal";
import type { TechCategory, TechLevel } from "@/lib/data";

type TechGridProps = {
  categories: TechCategory[];
};

const levelWidth: Record<TechLevel, string> = {
  Especialista: "w-full",
  Avançado: "w-3/4",
  Intermediário: "w-1/2",
};

const levelSegments: Record<TechLevel, number> = {
  Especialista: 4,
  Avançado: 3,
  Intermediário: 2,
};

function LevelIndicator({ level }: { level: TechLevel }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-1">
        {[0, 1, 2, 3].map((segment) => (
          <span
            key={segment}
            className={[
              "h-1 w-5 rounded-full",
              segment < levelSegments[level] ? "bg-ink" : "bg-border",
            ].join(" ")}
          />
        ))}
      </div>

      <span className="hidden min-w-[82px] text-right font-mono text-[10px] uppercase tracking-[0.14em] text-muted sm:block">
        {level}
      </span>
    </div>
  );
}

export default function TechGrid({ categories }: TechGridProps) {
  return (
    <div className="space-y-20">
      {categories.map((category, categoryIndex) => (
        <Reveal key={category.category}>
          <section>
            {/* CATEGORY HEADER */}
            <div className="mb-7 grid gap-5 border-b border-border pb-6 md:grid-cols-[1fr_360px] md:items-end">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-muted">
                    {String(categoryIndex + 1).padStart(2, "0")}
                  </span>

                  <span className="h-px w-8 bg-border" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    Stack
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {category.category}
                </h3>
              </div>

              <p className="max-w-md text-sm leading-6 text-muted md:text-right">
                {category.description}
              </p>
            </div>

            {/* TECHNOLOGY LIST */}
            <div className="divide-y divide-border border-y border-border">
              {category.items.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group grid gap-3 px-0 py-5 transition-colors duration-300 hover:bg-surface sm:grid-cols-[42px_1fr_auto] sm:items-center sm:gap-5"
                >
                  {/* INDEX */}
                  <span className="hidden font-mono text-[10px] text-muted sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* TECHNOLOGY */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <h4 className="font-display text-base font-semibold text-ink transition-transform duration-300 group-hover:translate-x-1">
                        {tech.name}
                      </h4>

                      <span className="h-1 w-1 rounded-full bg-border" />
                    </div>

                    {tech.description && (
                      <p className="mt-1 max-w-2xl text-xs leading-5 text-muted">
                        {tech.description}
                      </p>
                    )}
                  </div>

                  {/* LEVEL */}
                  <LevelIndicator level={tech.level} />
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      ))}
    </div>
  );
}