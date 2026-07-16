# Mindrailo

Mindrailo is an SEO-first static website for thoughtful quizzes and a child-friendly learning game.

## Production domain

- https://mindrailo.com

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
```

The static Cloudflare Pages output is generated in `out/`.

## Cloudflare Pages settings

- Framework preset: Next.js (Static HTML Export)
- Build command: `npm run build`
- Output directory: `out`
- Node version: `22`

## Privacy and safety

- No account is required.
- Quiz answers are processed in the browser.
- Mindrailo Kids does not request a child's name, email, school or location.
- Analytics loads only after consent and is disabled on the active kids game route.
