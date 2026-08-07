"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles = [
  "Full Stack Engineer",
  "Engenheiro de IA Aplicada",
  "Especialista em Automação",
  "Analista de Sistemas",
];

export default function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-flex h-[1.4em] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -14, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-accent"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
      <span className="ml-1 inline-block h-[0.85em] w-[2px] animate-pulseSoft bg-accent" />
    </span>
  );
}
