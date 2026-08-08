"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function CursorDot() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);

  const cursorRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const position = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    setMounted(true);

    const media = window.matchMedia("(pointer: fine)");

    if (!media.matches) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handlePointerState = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      const isInteractive =
        !!target &&
        !!target.closest(
          [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "[role='button']",
            "[tabindex]",
          ].join(",")
        );

      setInteractive(isInteractive);
    };

    let animationFrame: number;

    const animate = () => {
      const current = position.current;
      const target = mouse.current;

      current.x += (target.x - current.x) * 0.9;
      current.y += (target.y - current.y) * 0.9;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(${current.x}px, ${current.y}px, 0)
          translate(-50%, -50%)
        `;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `
          translate3d(${current.x}px, ${current.y}px, 0)
        `;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handlePointerState);
    window.addEventListener("mouseout", handlePointerState);
    document.addEventListener("mouseleave", handleMouseLeave);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handlePointerState);
      window.removeEventListener("mouseout", handlePointerState);
      document.removeEventListener("mouseleave", handleMouseLeave);

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  if (!mounted || !visible) {
    return null;
  }

return createPortal(
  <>
    {/* Ring externo */}
    <div className="cursor-root">
      <div
        ref={ringRef}
        className="cursor-ring"
      >
        <div
          className={`cursor-ring-pulse ${
            interactive ? "is-active" : ""
          }`}
        />
      </div>
    </div>

    {/* Ponto central */}
    <div
      ref={cursorRef}
      className={`cursor-dot ${
        interactive ? "is-active" : ""
      }`}
    />
  </>,
  document.body
);
}