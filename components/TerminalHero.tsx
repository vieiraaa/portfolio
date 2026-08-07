"use client";

import { useEffect, useState } from "react";

type Line = { prompt: string; output: string };

const lines: Line[] = [
  { prompt: "whoami", output: "João Victor Vieira — Full Stack & IA" },
  { prompt: "stack --core", output: "Python · TypeScript · Next.js · Node · PostgreSQL" },
  { prompt: "stack --ia", output: "OpenAI · Gemini · Claude · n8n · RAG · Embeddings" },
  { prompt: "status", output: "Disponível para novos projetos" },
];

const promptSpeed = 40;
const outputSpeed = 20;
const pauseBetweenStages = 300;
const pauseBetweenLines = 600;

export default function TerminalHero() {
  const [finishedLines, setFinishedLines] = useState<Line[]>([]);
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [currentOutput, setCurrentOutput] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [typingOutput, setTypingOutput] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    const typePrompt = (lineIndex: number, charIndex: number) => {
      const prompt = lines[lineIndex].prompt;
      if (charIndex <= prompt.length) {
        setCurrentPrompt(prompt.slice(0, charIndex));
        timers.push(
          setTimeout(() => typePrompt(lineIndex, charIndex + 1), promptSpeed)
        );
      } else {
        timers.push(
          setTimeout(() => {
            setTypingOutput(true);
            typeOutput(lineIndex, 0);
          }, pauseBetweenStages)
        );
      }
    };

    const typeOutput = (lineIndex: number, charIndex: number) => {
      const output = lines[lineIndex].output;
      if (charIndex <= output.length) {
        setCurrentOutput(output.slice(0, charIndex));
        timers.push(
          setTimeout(() => typeOutput(lineIndex, charIndex + 1), outputSpeed)
        );
      } else {
        setFinishedLines((prev) => [
          ...prev,
          { prompt: lines[lineIndex].prompt, output: output },
        ]);
        setCurrentPrompt("");
        setCurrentOutput("");
        setTypingOutput(false);
        if (lineIndex + 1 < lines.length) {
          timers.push(
            setTimeout(() => {
              setCurrentLine(lineIndex + 1);
              typePrompt(lineIndex + 1, 0);
            }, pauseBetweenLines)
          );
        }
      }
    };

    typePrompt(0, 0);

    return () => timers.forEach(clearTimeout);
  }, []);

  const isCurrentLineActive = currentLine < lines.length;
  const currentLineData = isCurrentLineActive ? lines[currentLine] : null;
  const cursorVisible = isCurrentLineActive;

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] text-inkSoft">
          joao@portfolio: ~
        </span>
      </div>
      <div className="min-h-[150px] p-4 sm:p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {finishedLines.map((line) => (
          <div key={line.prompt}>
            <p className="text-inkSoft">
              <span className="text-accent">➜</span> ~ {line.prompt}
            </p>
            <p className="mb-2.5 text-ink">{line.output}</p>
          </div>
        ))}

        {currentLineData && (
          <div>
            <p className="text-inkSoft">
              <span className="text-accent">➜</span> ~ {currentPrompt}
              {cursorVisible && !typingOutput && (
                <span className="ml-1 inline-block h-3.5 w-[7px] translate-y-0.5 animate-pulseSoft bg-accent" />
              )}
            </p>
            <p className="mb-2.5 text-ink">
              {currentOutput}
              {cursorVisible && typingOutput && (
                <span className="ml-1 inline-block h-3.5 w-[7px] translate-y-0.5 animate-pulseSoft bg-accent" />
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
