"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import Reveal from "@/components/Reveal";
import { useEffect, useRef } from "react";

interface ParticleFieldProps {
  /**
   * Partículas a cada 1.000px² de área do container.
   * 👉 AUMENTE ESSE NÚMERO PRA TER MAIS PARTÍCULAS (ex: 18 → 30)
   */
  density?: number;
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export function ParticleField({ density = 10, className = "" }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      const rect = parent!.getBoundingClientRect();
      width = canvas!.width = rect.width;
      height = canvas!.height = rect.height;

      // quantidade final de partículas calculada a partir de "density"
      const count = Math.floor(((width * height) / 50000) * density);

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.8,
      }));
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = parent!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function tick() {
      ctx!.clearRect(0, 0, width, height);

      // cor resolvida via CSS var (respeita a classe theme-contrast do tema atual)
      const style = getComputedStyle(canvas!);
      const color = style.getPropertyValue("--particle-color").trim() || "#ffffff";

      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = 90;
        if (dist < influence) {
          const force = (influence - dist) / influence;
          p.x += (dx / (dist || 1)) * force * 1.6;
          p.y += (dy / (dist || 1)) * force * 1.6;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 90) {
            ctx!.globalAlpha = 0.12 * (1 - d / 90);
            ctx!.strokeStyle = color;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      ctx!.globalAlpha = 0.85;
      ctx!.fillStyle = color;
      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;

      raf = requestAnimationFrame(tick);
    }

    resize();
    tick();

    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      style={{ ["--particle-color" as string]: "var(--theme-contrast, #ffffff)" }}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}