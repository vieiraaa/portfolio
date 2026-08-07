"use client";

import { motion } from "framer-motion";
import type { TrajectoryMilestone } from "@/lib/data";

export default function Trajectory({ items }: { items: TrajectoryMilestone[] }) {
  return (
    <ol className="relative border-l border-border pl-8 sm:pl-10">
      {items.map((item, i) => (
        <motion.li
          key={item.year}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 last:mb-0"
        >
          <span
            className={`absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg ${
              i === items.length - 1 ? "bg-accent2 animate-pulseSoft" : "bg-inkSoft"
            }`}
            aria-hidden
          />
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-inkSoft">
            {item.year}
          </p>
          <h3 className="mt-1.5 font-display text-lg font-semibold text-ink sm:text-xl">
            {item.title}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-inkSoft sm:text-base">
            {item.text}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}
