import { 
  effect, 
  Injectable, 
  signal 
} from '@angular/core';

const THEME_STORAGE_KEY = 'jobbreeze-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isDarkTheme = signal(this.loadInitialTheme());

  constructor() {
    effect(() => {
      const isDark = this.isDarkTheme();
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark-theme', isDark);
      }
    });
  }

  toggleTheme(): void {
    this.isDarkTheme.update((isDark) => {
      const next = !isDark;
      this.persist(next);
      return next;
    });
  }

  private loadInitialTheme(): boolean {
    if (typeof localStorage === 'undefined') {
      return true;
    }
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === null ? true : stored === 'dark';
  }

  private persist(isDark: boolean): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
  }
}
