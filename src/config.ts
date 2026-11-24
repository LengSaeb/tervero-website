// Site-wide settings. Fill in the TODO values once the company is registered.
export const site = {
  brand: 'Tervero',
  brandZh: '泰帆诺',
  legalName: 'Tervero UG (haftungsbeschränkt)',
  city: 'Berlin',
  // TODO: public contact address, e.g. hello@<domain>. Leave empty to hide email links.
  contactEmail: '',
  // TODO: booking link (e.g. Cal.com) for the 30-minute diagnosis. Leave empty to hide.
  bookingUrl: '',
};

export const locales = ['en', 'zh', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const htmlLang: Record<Locale, string> = { en: 'en', zh: 'zh-CN', de: 'de' };
export const localeLabel: Record<Locale, string> = { en: 'EN', zh: '中', de: 'DE' };
export const localeName: Record<Locale, string> = { en: 'English', zh: '中文', de: 'Deutsch' };
