"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  User,
  FolderGit2,
  Briefcase,
  Cpu,
  Mail,
  Search,
  Github,
  Linkedin,
  MessageCircle,
  FileDown,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import CommandPalette from "./CommandPalette";
import { personal } from "@/lib/data";

const links = [
  { href: "/", label: "Início", icon: Home },
  { href: "/sobre", label: "Sobre", icon: User },
  { href: "/projetos", label: "Projetos", icon: FolderGit2 },
  { href: "/experiencia", label: "Experiência", icon: Briefcase },
  { href: "/tecnologias", label: "Tecnologias", icon: Cpu },
  { href: "/contato", label: "Contato", icon: Mail },
];

const socialLinks = [
  { href: personal.github, label: "GitHub", icon: Github },
  { href: personal.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: personal.whatsapp, label: "WhatsApp", icon: MessageCircle },
];

export default function Sidebar() {
  const [hovered, setHovered] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const pathname = usePathname();
  const isExpanded = hovered;

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Mobile top bar */}
      <div className="glass-panel md:hidden fixed top-3 left-3 right-3 z-40 flex items-center justify-between rounded-[var(--radius-panel)] px-4 py-3">
        <Link
          href="/"
          className="focus-ring font-[family-name:var(--font-display)] font-bold tracking-tight text-ink"
        >
          JV<span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-1">
          <button
            aria-label="Buscar (CTRL + K)"
            onClick={() => setPaletteOpen(true)}
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full text-inkSoft transition hover:bg-black/5 dark:hover:bg-white/5"
          >
            <Search size={17} />
          </button>
          <ThemeToggle />
          <a
            href={personal.resumePdf}
            download
            aria-label="Baixar currículo em PDF"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full text-inkSoft transition hover:bg-black/5 dark:hover:bg-white/5"
          >
            <FileDown size={17} />
          </a>
        </div>
      </div>

      {/* Desktop sidebar */}
      <motion.aside
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ width: isExpanded ? 236 : 69 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel hidden md:flex fixed top-4 left-4 bottom-4 z-[70] flex-col rounded-[var(--radius-panel)] py-5 px-3 overflow-visible items-center"
      >
        <Link href="/" className="flex items-center justify-center gap-2 px-2 mb-8 min-h-8 w-full">
          <div className="relative w-8 h-8 shrink-0 rounded-[10px] bg-accent flex items-center justify-center text-[#0b0e11] font-[family-name:var(--font-display)] font-extrabold text-xs">
            JV
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-accent2 ring-2 ring-surface animate-pulseSoft" />
          </div>
          {isExpanded && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.08 }}
              className="font-[family-name:var(--font-display)] font-bold text-sm whitespace-nowrap text-ink"
            >
              Vieira
            </motion.span>
          )}
        </Link>

        <nav className="flex flex-col gap-1 flex-1 w-full">
          {links.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`focus-ring group relative flex items-center gap-3 rounded-[var(--radius-control)] px-3 py-3 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  active
                    ? "bg-accent text-[#0b0e11] shadow-[0_6px_16px_-6px_rgba(255,176,32,0.55)]"
                    : "text-inkSoft hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                <Icon size={18} className="shrink-0" />
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm font-medium whitespace-nowrap"
                  >
                    {link.label}
                  </motion.span>
                )}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setPaletteOpen(true)}
          className="focus-ring flex items-center gap-3 rounded-[var(--radius-control)] px-2.5 py-2.5 mb-1 w-full text-inkSoft hover:bg-black/5 dark:hover:bg-white/5 transition"
        >
          <Search size={18} className="shrink-0" />
          {isExpanded && (
            <span className="text-sm font-medium flex-1 text-left whitespace-nowrap">Buscar</span>
          )}
          {isExpanded && (
            <kbd className="whitespace-nowrap rounded-md border border-border px-1.5 py-0.5 font-mono text-[10px] text-inkSoft">
              CTRL + K
            </kbd>
          )}
        </button>

        <a
          href={personal.resumePdf}
          download
          className="focus-ring flex items-center gap-3 rounded-[var(--radius-control)] px-2.5 py-2.5 mb-3 w-full text-inkSoft hover:bg-black/5 dark:hover:bg-white/5 transition"
        >
          <FileDown size={18} className="shrink-0" />
          {isExpanded && (
            <span className="text-sm font-medium flex-1 text-left whitespace-nowrap">Currículo</span>
          )}
        </a>

        <div className="w-full border-t border-border pt-3">
          <ThemeToggle className="mx-auto" />
        </div>
      </motion.aside>

      {/* Desktop social dock */}
      <div
        className="glass-panel hidden md:flex fixed bottom-4 z-[70] items-center gap-2 rounded-[var(--radius-panel)] px-3 py-3"
        style={{ right: 16 }}
      >
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-surface2 text-ink transition hover:bg-accent hover:text-[#0b0e11]"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>

      {/* Mobile social bar */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-panel flex items-center gap-3 rounded-full px-4 py-3">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-surface2 text-ink transition-all duration-300 hover:bg-accent hover:text-[#0b0e11] active:scale-95"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}
