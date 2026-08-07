"use client";

import { useEffect, useMemo, useState } from "react";

const roles = [
  "Full Stack Engineer",
  "Engenheiro de IA Aplicada",
  "Especialista em Automação",
  "Analista de Sistemas",
];

const TYPING_SPEED = 60;
const DELETING_SPEED = 35;
const HOLD_TIME = 1200;

export default function RoleRotator() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = useMemo(() => roles[index], [index]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentRole.slice(0, text.length + 1);
        setText(nextText);

        if (nextText === currentRole) {
          setTimeout(() => setIsDeleting(true), HOLD_TIME);
        }
      } else {
        if (text.length === 0) {
          setIsDeleting(false);
          setIndex((current) => (current + 1) % roles.length);
        } else {
          setText(currentRole.slice(0, text.length - 1));
        }
      }
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [currentRole, isDeleting, text]);

  return (
    <span className="inline-flex h-[1.4em] items-center overflow-hidden align-bottom">
      <span className="text-accent font-medium tracking-tight">{text}</span>
      <span className="ml-1 inline-block h-[0.85em] w-[2px] animate-pulseSoft bg-accent" />
    </span>
  );
}
