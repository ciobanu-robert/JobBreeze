import { LanguageCode } from '../i18n/translations';

const UNITS = ['B', 'KB', 'MB', 'GB'];

export function formatFileSize(
  bytes: number,
  language: LanguageCode,
): string {
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < UNITS.length - 1) {
    value /= 1024;
    unit++;
  }

  const number = new Intl.NumberFormat(language, {
    maximumFractionDigits: unit === 0 ? 0 : 1,
  }).format(value);
  return `${number} ${UNITS[unit]}`;
}
