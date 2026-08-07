import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        surface2: "var(--color-surface-2)",
        ink: "var(--color-ink)",
        inkSoft: "var(--color-ink-soft)",
        accent: "var(--color-accent)",
        accentInk: "var(--color-accent-ink)",
        accent2: "var(--color-accent-2)",
        border: "var(--color-border)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        panel: "var(--radius-panel)",
        control: "var(--radius-control)",
      },
      backgroundImage: {
        grid: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
      },
      keyframes: {
        dash: {
          to: { strokeDashoffset: "-200" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        floatUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        dash: "dash 6s linear infinite",
        pulseSoft: "pulseSoft 2.4s ease-in-out infinite",
        floatUp: "floatUp 0.6s cubic-bezier(0.22,1,0.36,1) both",
        spinSlow: "spin 14s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
