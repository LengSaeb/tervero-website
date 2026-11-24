# Tervero Website (泰帆诺)

Official website for **Tervero (泰帆诺)**: Europe FDE (forward-deployed engineering), AI transformation (deploying AI capabilities and applications into production-grade systems), and EU compliance consulting and implementation for companies expanding into Europe.

Legal entity: Tervero UG (haftungsbeschränkt), Berlin (in formation).

## Stack

- [Astro 5](https://astro.build), static output, TypeScript strict
- Three locales with path prefixes: `/en/` (default), `/zh/`, `/de/`
- Plain CSS with design tokens in `src/styles/global.css`, mobile first
- Self-hosted fonts (Hanken Grotesk, Noto Sans SC) via Fontsource: no Google services, so the site loads in mainland China
- No cookies, no analytics, no third-party scripts
- Hosting: Vercel (framework preset "Astro", no extra config needed)

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + static build into dist/
npm run preview
```

## Structure

```
src/
  config.ts            site settings (contact email, booking link: TODO)
  i18n/en.ts           English copy, defines the content shape
  i18n/zh.ts, de.ts    translations, type-checked against en.ts
  i18n/index.ts        helpers: t(), href(), switchLocale()
  layouts/Base.astro   <head>, hreflang, header, footer, mobile CTA dock
  components/          Header, Footer, Dock, Route, ServiceCards, EprCheck
  pages/index.astro    root: redirects to the visitor's language (default en)
  pages/[lang]/        home, services, check, insights, about, contact, impressum, privacy
```

## Content workflow

- Edit copy in `src/i18n/*.ts`. Adding a key to `en.ts` makes the build fail until `zh.ts` and `de.ts` have it too.
- Keep regulation names and codes (GPSR, CRA, EPR...) consistent across languages.
- Legal pages (Impressum, Datenschutz) are German and binding for all locales.

## Deploy on Vercel

Live project: Vercel team **Novawerk**, project `tervero-website`. Every push to `main` deploys to production; other branches get preview URLs.

1. In Vercel, "Add New Project" and import `LengSaeb/tervero-website`.
2. Keep the detected "Astro" preset. Build command `npm run build`, output `dist`.
3. Optional: set `SITE_URL` (e.g. `https://tervero-website.vercel.app`) so canonical and hreflang URLs use the final domain.

## Before going public

- [ ] `src/config.ts`: set `contactEmail` (enables the contact form) and `bookingUrl`
- [ ] Impressum: address, managing director, register court and number, VAT ID (after register entry)
- [ ] Privacy policy: legal review
- [ ] `src/config.ts`: set `indexable: true` (removes the site-wide `noindex`)
- [ ] Test in the WeChat in-app browser and on a mid-range Android phone

## Related knowledge

- `LengSaeb/project-draco`: DPP (Digital Product Passport) knowledge base, source for the Insights section.
- `LengSaeb/draco-epr-check`: EPR registration self-check (WeChat mini program + registry verification backend). The website's `/check` page is a simplified, client-side version for Germany.
