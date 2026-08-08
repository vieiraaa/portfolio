import { Fragment } from "react";
import type { Experience } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Timeline({ items }: { items: Experience[] }) {
  return (
    <ol className="relative ml-2 border-l border-border pl-7">
      {items.map((exp, index) => (
        <Fragment key={`${exp.company}-${exp.role}`}>
          <Reveal delay={index * 0.08}>
            <li className="relative pb-12 last:pb-0">
              {/* Timeline marker */}
              <span
                className={`absolute -left-[35px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg ${
                  exp.current
                    ? "bg-accent animate-pulseSoft"
                    : "bg-inkSoft"
                }`}
                aria-hidden
              />

              {/* Period */}
              <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-inkSoft">
                {exp.period}
              </p>

              {/* Role */}
              <h3 className="font-display text-xl font-bold leading-tight text-ink sm:text-2xl">
                {exp.role}
              </h3>

              {/* Company + current status */}
              <div className="mt-1.5 flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-inkSoft">
                  {exp.company}
                </span>

                {exp.current && (
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
                    Atual
                  </span>
                )}
              </div>

              {/* Responsibilities */}
              <ul className="mt-5 mb-5 space-y-2.5">
                {exp.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-inkSoft sm:text-[15px]"
                  >
                    <span
                      className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-inkSoft/60"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Outcomes */}
              {exp.outcomes.length > 0 && (
                <div className="mb-5 rounded-[var(--radius-control)] border border-border bg-surface2/60 px-4 py-3.5">
                  <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-inkSoft">
                    Impacto
                  </p>

                  <div className="space-y-1.5">
                    {exp.outcomes.map((outcome) => (
                      <p
                        key={outcome}
                        className="text-sm font-medium leading-relaxed text-ink"
                      >
                        <span className="mr-1.5 text-accent">→</span>
                        {outcome}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-surface/40 px-2.5 py-1 font-mono text-[11px] text-inkSoft transition-colors hover:border-inkSoft/40 hover:text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          </Reveal>
        </Fragment>
      ))}
    </ol>
  );
}