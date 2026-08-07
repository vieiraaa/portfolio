"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, CornerDownLeft, FileText, Folder } from "lucide-react";
import { navLinks, projects } from "@/lib/data";

type Item = {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  group: "Navegação" | "Projetos";
};

export default function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const items: Item[] = useMemo(() => {
    const navItems: Item[] = navLinks.map((l) => ({
      id: `nav-${l.href}`,
      title: l.label,
      href: l.href,
      group: "Navegação",
    }));
    const projectItems: Item[] = projects.map((p) => ({
      id: `proj-${p.slug}`,
      title: p.name,
      subtitle: p.category,
      href: `/projetos/${p.slug}`,
      group: "Projetos",
    }));
    return [...navItems, ...projectItems];
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        i.subtitle?.toLowerCase().includes(q)
    );
  }, [query, items]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, open]);

  useEffect(() => {
    if (open) {
      setQuery("");
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter" && filtered[activeIndex]) {
        e.preventDefault();
        router.push(filtered[activeIndex].href);
        onClose();
      }
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, filtered, activeIndex, onClose, router]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Busca rápida"
            className="glass-panel fixed left-1/2 top-24 z-[95] w-[92vw] max-w-lg -translate-x-1/2 overflow-hidden rounded-[var(--radius-panel)]"
          >
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <Search size={17} className="shrink-0 text-inkSoft" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar páginas ou projetos..."
                className="w-full bg-transparent font-body text-sm text-ink placeholder:text-inkSoft focus:outline-none"
                aria-label="Buscar páginas ou projetos"
              />
              <kbd className="hidden shrink-0 rounded-md border border-border px-1.5 py-0.5 font-mono text-[10px] text-inkSoft sm:block">
                ESC
              </kbd>
            </div>

            <div className="max-h-[50vh] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center font-body text-sm text-inkSoft">
                  Nada encontrado para &ldquo;{query}&rdquo;.
                </p>
              )}

              {["Navegação", "Projetos"].map((group) => {
                const groupItems = filtered.filter((i) => i.group === group);
                if (groupItems.length === 0) return null;
                return (
                  <div key={group} className="mb-1">
                    <p className="px-3 pb-1 pt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-inkSoft">
                      {group}
                    </p>
                    {groupItems.map((item) => {
                      const globalIndex = filtered.indexOf(item);
                      const active = globalIndex === activeIndex;
                      const Icon = group === "Projetos" ? Folder : FileText;
                      return (
                        <button
                          key={item.id}
                          onMouseEnter={() => setActiveIndex(globalIndex)}
                          onClick={() => {
                            router.push(item.href);
                            onClose();
                          }}
                          className={`flex w-full items-center justify-between gap-3 rounded-[var(--radius-control)] px-3 py-2.5 text-left transition-colors ${
                            active
                              ? "bg-accent text-accentInk"
                              : "text-ink hover:bg-black/5 dark:hover:bg-white/5"
                          }`}
                        >
                          <span className="flex items-center gap-2.5 min-w-0">
                            <Icon size={15} className="shrink-0 opacity-70" />
                            <span className="truncate">
                              <span className="block truncate text-sm font-medium">
                                {item.title}
                              </span>
                              {item.subtitle && (
                                <span className="block truncate text-xs opacity-70">
                                  {item.subtitle}
                                </span>
                              )}
                            </span>
                          </span>
                          {active && <CornerDownLeft size={14} className="shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
