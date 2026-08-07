import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Sidebar from "@/components/Sidebar";
import { personal } from "@/lib/data";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://joaovieira.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personal.name} — Full Stack Engineer & IA`,
    template: `%s — ${personal.name}`,
  },
  description: personal.summary,
  keywords: [
    "João Victor Vieira",
    "Desenvolvedor Full Stack",
    "Engenheiro de Software",
    "Inteligência Artificial",
    "Automação",
    "Next.js",
    "Python",
    "React",
    "n8n",
    "RAG",
  ],
  authors: [{ name: personal.fullName }],
  creator: personal.fullName,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: `${personal.name} — Portfólio`,
    title: `${personal.name} — Full Stack Engineer & IA`,
    description: personal.summary,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — Full Stack Engineer & IA`,
    description: personal.summary,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-dot-grid">
        <ThemeProvider>
          <Sidebar />
          <main className="min-h-screen pb-24 pt-20 md:pb-24 md:pl-28 md:pt-12 lg:pl-32">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
