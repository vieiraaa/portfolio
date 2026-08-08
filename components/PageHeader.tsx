import { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-inkSoft sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
