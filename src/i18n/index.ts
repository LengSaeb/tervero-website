import en from './en';
import zh from './zh';
import de from './de';
import { locales, defaultLocale, type Locale } from '../config';

export const dictionaries = { en, zh, de } as const;

export function t(locale: Locale) {
  return dictionaries[locale];
}

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Static paths for every page under src/pages/[lang]/. */
export function localePaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

/** Build a locale-prefixed path, e.g. href('zh', 'services') -> '/zh/services/'. */
export function href(locale: Locale, page = ''): string {
  const clean = page.replace(/^\/+|\/+$/g, '');
  return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}

/** Swap the locale segment of a pathname, keeping the rest of the path. */
export function switchLocale(pathname: string, target: Locale): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && isLocale(parts[0])) parts.shift();
  return href(target, parts.join('/'));
}

export { locales, defaultLocale };
export type { Locale };
