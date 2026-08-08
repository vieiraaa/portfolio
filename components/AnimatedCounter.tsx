"use client";

import { useEffect, useState } from "react";

export default function AnimatedCounter({
  value,
  className = "",
  duration = 1400,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const match = value.match(/-?\d[\d.]*/);
    if (!match) {
      setDisplayValue(0);
      return;
    }

    const rawNumber = Number(match[0].replace(/\./g, ""));
    const startTime = performance.now();

    let frameId = 0;

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(rawNumber * eased);

      setDisplayValue(nextValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [value, duration]);

  const numberMatch = value.match(/-?\d[\d.]*/);
  const prefix = numberMatch ? value.slice(0, numberMatch.index) : "";
  const suffix = numberMatch ? value.slice(numberMatch.index! + numberMatch[0].length) : value;
  const formattedNumber = new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 0,
  }).format(displayValue);

  return <p className={className}>{`${prefix}${formattedNumber}${suffix}`}</p>;
}
