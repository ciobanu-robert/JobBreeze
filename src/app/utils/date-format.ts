import { LanguageCode } from '../i18n/translations';

const DATE_LOCALES: Record<LanguageCode, string> = {
  en: 'en-GB',
  ro: 'ro-RO',
};

export function formatDate(
  value: string,
  language: LanguageCode,
  options: Intl.DateTimeFormatOptions,
): string {
  return new Intl.DateTimeFormat(
    DATE_LOCALES[language],
    options,
  ).format(new Date(value));
}
