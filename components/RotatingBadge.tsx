import { ArrowUpRight } from "lucide-react";

export default function RotatingBadge({
  text = "DESENVOLVEDOR FULLSTACK",
  size = 128,
  className = "",
}: {
  text?: string;
  size?: number;
  className?: string;
}) {
  const radius = size / 2 - 14;
  const pathId = "badge-circle-path";

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div className="absolute inset-0 animate-spinSlow">
        <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full">
          <path
            id={pathId}
            fill="none"
            d={`M ${size / 2}, ${size / 2} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${
              radius * 2
            },0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
          <text
            className="fill-ink font-mono"
            style={{ fontSize: 9.5, letterSpacing: "0.15em" }}
          >
            <textPath href={`#${pathId}`}>
              {`${text} • ${text} • `}
            </textPath>
          </text>
        </svg>
      </div>

      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accentInk">
        <ArrowUpRight size={18} />
      </div>
    </div>
  );
}
