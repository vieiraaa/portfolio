"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { TrajectoryMilestone } from "@/lib/data";

export default function Trajectory({ items }: { items: TrajectoryMilestone[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [markerTop, setMarkerTop] = useState(0);
  const desiredTop = useRef(0);

  // We don't need per-item intersection observers for this behavior — the marker
  // will follow the viewport center continuously. Keep activeIndex in case
  // other UI needs it later, but don't change it here.

  useEffect(() => {
    let rafId: number | null = null;
    let animId: number | null = null;

    const updateDesired = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      // compute position of viewport center relative to container (use viewport-space top)
      // markerTop = (viewportCenterY) - (containerViewportTop) => window.innerHeight/2 - containerRect.top
      let top = window.innerHeight * 0.5 - containerRect.top;
      // clamp within container
      top = Math.max(0, Math.min(top, containerRect.height));
      desiredTop.current = top;
    };

    const animate = () => {
      // lerp current markerTop towards desiredTop for smooth, slower movement
      setMarkerTop((current) => {
        const target = desiredTop.current;
        const lerp = 0.06; // smaller = slower / smoother
        const next = current + (target - current) * lerp;
        return Math.abs(target - next) < 0.5 ? target : next;
      });
      animId = requestAnimationFrame(animate);
    };

    // initial
    updateDesired();
    animate();

    const onScrollOrResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateDesired);
    };

    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("scroll", onScrollOrResize, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("scroll", onScrollOrResize);
    };
  }, [activeIndex, items]);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-6xl px-0 sm:px-2">
      {/* central baseline with filled trail */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="mx-auto h-full w-[2px] bg-border opacity-80 shadow-[0_0_8px_rgba(0,0,0,0.6)]" />
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] bg-white"
          style={{ height: `${markerTop}px` }}
        />
      </div>

      {/* floating marker that follows viewport center (positioned with inline top to match trail) */}
      <div
        className="pointer-events-none absolute left-1/2 hidden md:flex flex-col items-center"
        style={{ top: `${markerTop}px`, transform: "translate(-50%, -50%)" }}
      >
        <span className="h-5 w-5 rounded-full bg-black border-2 border-white shadow-[0_6px_20px_rgba(255,255,255,0.6),0_0_40px_rgba(255,255,255,0.4)] ring-1 ring-white/90" />
      </div>

      <ol className="space-y-14">
        {items.map((item, i) => (
          <motion.li
            key={item.year}
            ref={(el) => { itemRefs.current[i] = el }}
            data-index={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.1, ease: [0.22, 0.3, 0.36, 1] }}
            className={`relative grid gap-6 border-transparent md:grid-cols-[1fr_auto_1fr] md:p-8`}
          >
            {/* title: always left on desktop */}
            <div className={`space-y-3 md:col-start-1 md:text-right md:pr-6`}
            >
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-inkSoft">
                {item.year}
              </p>
              <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                {item.title}
              </h3>
            </div>

            {/* center spacer (baseline) */}
            <div className="relative flex justify-center md:col-start-2" />

            {/* description: always right on desktop */}
            <div className={`md:col-start-3 md:pl-6`}> 
              <p className="text-sm leading-relaxed text-inkSoft sm:text-base">{item.text}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
