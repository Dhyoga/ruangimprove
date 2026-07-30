# RuangImprove

Landing page komunitas mahasiswa **RuangImprove** — dibangun dengan [Nuxt 4](https://nuxt.com) + [Tailwind CSS](https://tailwindcss.com) (via `@nuxtjs/tailwindcss`).

Proyek ini adalah hasil migrasi dari `index.html` statis menjadi arsitektur komponen Vue/Nuxt, tanpa mengubah desain maupun konten.

## Struktur

- `app/app.vue` — root layout, menyusun semua section.
- `app/components/` — komponen per-section: `TheHeader`, `HeroSection`, `PainPointsSection`, `AboutSection`, `ProgramsSection`, `JourneySection`, `TestimonialSection`, `CtaSection`, `TheFooter`.
- `app/composables/useRevealOnScroll.ts` — reveal-on-scroll animation (IntersectionObserver), pengganti script inline.
- `app/assets/css/main.css` — custom CSS variables & class 1:1 dari desain asli, plus Tailwind directives.
- `tailwind.config.js` — palet warna & font custom (violet, ink, paper, dll) diekspos sebagai Tailwind theme.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```
