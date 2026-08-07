import { Fragment } from "react";
import type { Experience } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Timeline({ items }: { items: Experience[] }) {
  return (
    <ol className="relative border-l border-border pl-8 sm:pl-10">
      {items.map((exp, index) => (
        <Fragment key={exp.company}>
          <Reveal delay={index * 0.08}>
            <li className="mb-14 last:mb-0">
              <span
                className={`absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg ${
                  exp.current ? "bg-accent animate-pulseSoft" : "bg-inkSoft"
                }`}
                aria-hidden
              />
              <p className="eyebrow mb-1.5">{exp.period}</p>
              <h3 className="font-display text-xl font-semibold text-ink">
                {exp.role}
              </h3>
              <p className="mb-4 text-sm font-medium text-inkSoft">
                {exp.company}
                {exp.current && (
                  <span className="ml-2 rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent">
                    Atual
                  </span>
                )}
              </p>

              <ul className="mb-4 space-y-2">
                {exp.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-relaxed text-inkSoft"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-inkSoft/60" />
                    {item}
                  </li>
                ))}
              </ul>

              {exp.outcomes.length > 0 && (
                <div className="mb-4 space-y-1.5 rounded-[var(--radius-control)] border border-border bg-surface2/60 px-4 py-3">
                  {exp.outcomes.map((outcome) => (
                    <p
                      key={outcome}
                      className="text-sm font-medium leading-relaxed text-ink"
                    >
                      → {outcome}
                    </p>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-1.5">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-inkSoft"
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
