import { Injectable, signal } from '@angular/core';
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  LanguageCode,
  LanguageDefinition,
  TRANSLATIONS,
} from '../i18n/translations';

const LANGUAGE_STORAGE_KEY = 'jobbreeze-language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly languages: readonly LanguageDefinition[] =
    LANGUAGES;

  readonly currentLanguage = signal<LanguageCode>(
    this.loadInitialLanguage(),
  );

  setLanguage(code: LanguageCode): void {
    this.currentLanguage.set(code);
    this.persist(code);
  }

  t(key: string): string {
    const dictionary = TRANSLATIONS[this.currentLanguage()];
    return (
      dictionary[key] ??
      TRANSLATIONS[DEFAULT_LANGUAGE][key] ??
      key
    );
  }

  private loadInitialLanguage(): LanguageCode {
    if (typeof localStorage === 'undefined') {
      return DEFAULT_LANGUAGE;
    }
    const stored = localStorage.getItem(
      LANGUAGE_STORAGE_KEY,
    ) as LanguageCode | null;

    return stored && TRANSLATIONS[stored]
      ? stored
      : DEFAULT_LANGUAGE;
  }

  private persist(code: LanguageCode): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(LANGUAGE_STORAGE_KEY, code);
  }
}
