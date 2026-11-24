// @ts-check
import { defineConfig } from 'astro/config';

// Set SITE_URL in the Vercel project settings once the final domain is known.
const site = process.env.SITE_URL ?? 'https://tervero-website.vercel.app';

export default defineConfig({
  site,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'de'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
