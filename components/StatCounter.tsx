"use client";

import { useEffect, useState } from "react";

type StatCounterProps = {
  value: string;
  className?: string;
};

function parseStatValue(raw: string) {
  const match = raw.match(/\d[\d.,]*/);
  if (!match) {
    return { target: 0, suffix: raw };
  }

  const numericRaw = match[0].replace(".", "").replace(",", "");
  const suffix = raw.replace(match[0], "");

  return {
    target: Number(numericRaw || 0),
    suffix,
  };
}

export default function StatCounter({ value, className = "" }: StatCounterProps) {
  const { target, suffix } = parseStatValue(value);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 3000;

    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(target * eased);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  const formatted = `${Math.round(displayValue).toLocaleString("pt-BR")}${suffix}`;

  return <span className={className}>{formatted}</span>;
}
