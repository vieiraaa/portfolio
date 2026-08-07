import type { Metadata } from "next";
import { Github, Linkedin, Mail, MessageCircle, MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { personal } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com João Victor Vieira por e-mail, WhatsApp, LinkedIn ou GitHub.",
};

const channels = [
  {
    label: "E-mail",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
    hint: "Resposta em até 1 dia útil",
  },
  {
    label: "WhatsApp",
    value: "+55 (49) 99127-0949",
    href: personal.whatsapp,
    icon: MessageCircle,
    hint: "Melhor canal para contato rápido",
  },
  {
    label: "LinkedIn",
    value: "/in/joao-vieira-1a8360161",
    href: personal.linkedin,
    icon: Linkedin,
    hint: "Networking e oportunidades",
  },
  {
    label: "GitHub",
    value: "Repositórios e código",
    href: personal.github,
    icon: Github,
    hint: "Veja implementações reais",
  },
];

export default function ContatoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Bora conversar sobre o próximo projeto."
        description="Aberto a posições full-time, consultorias e projetos freelance em desenvolvimento Full Stack, engenharia de IA e automação."
      />

      <section className="grid gap-4 sm:grid-cols-2">
        {channels.map((channel, i) => {
          const Icon = channel.icon;
          return (
            <Reveal key={channel.label} delay={i * 0.06}>
              <a
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className="focus-ring card group flex items-center gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface2 text-ink transition group-hover:bg-accent group-hover:text-[#0b0e11]">
                  <Icon size={19} />
                </span>
                <span>
                  <span className="block font-display text-base font-semibold text-ink">
                    {channel.label}
                  </span>
                  <span className="block text-sm text-inkSoft">{channel.value}</span>
                  <span className="mt-0.5 block font-mono text-[11px] text-inkSoft/70">
                    {channel.hint}
                  </span>
                </span>
              </a>
            </Reveal>
          );
        })}
      </section>

      <Reveal delay={0.24} className="mt-10 flex items-center gap-2.5 text-sm text-inkSoft">
        <MapPin size={16} className="text-accent" />
        {personal.location}
      </Reveal>

      <Footer />
    </>
  );
}
