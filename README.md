# Portfólio — João Victor Vieira

Portfólio profissional Full Stack / IA / Automação, construído com Next.js 14 (App Router), TypeScript, TailwindCSS e Framer Motion.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Build de produção

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Suba este repositório para o GitHub.
2. Importe o repositório em https://vercel.com/new.
3. Nenhuma variável de ambiente é necessária — deploy automático.

## Pendências antes de publicar

- **`lib/data.ts` → `personal.github`**: está com placeholder (`https://github.com/`). Troque pelo seu usuário real.
- **`app/layout.tsx` → `siteUrl`** e **`app/sitemap.ts` / `app/robots.ts`**: usam `https://joaovieira.dev` como domínio de exemplo. Troque pelo domínio real após comprá-lo/configurá-lo na Vercel.
- **Projetos com `needsDetail: true`** em `lib/data.ts`: ainda não têm link de GitHub/demo nem screenshots. A página de detalhe já sinaliza isso visualmente — vale completar com prints e links reais.
- **`public/curriculo-joao-victor-vieira.pdf`**: já é o currículo enviado. Substitua o arquivo (mantendo o nome) sempre que atualizar o currículo.

## Estrutura

```
app/            rotas (App Router) — cada pasta é uma página
components/     componentes de UI reutilizáveis
lib/data.ts     única fonte de verdade: dados pessoais, projetos, experiências, tecnologias
public/         currículo em PDF, favicon
```

## Stack

Next.js 14 · TypeScript · TailwindCSS · Framer Motion · lucide-react · next-themes
