"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function CursorDot() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) return;

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    const handlePointerState = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const isInteractive = !!target && !!target.closest(
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

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handlePointerState);
    window.addEventListener("mouseout", handlePointerState);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handlePointerState);
      window.removeEventListener("mouseout", handlePointerState);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!visible) return null;

  return createPortal(
  <div
    aria-hidden
    className="cursor-root"
  >
    <div
      className={`cursor-ring ${interactive ? "is-active" : ""}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
      }}
    />

    <div
      className={`cursor-dot ${interactive ? "is-active" : ""}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
      }}
    />
  </div>,
  document.body
);
}