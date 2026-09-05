import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
  exportAs: 'home',
})
export class Home {
  protected readonly isDarkTheme = signal(true);

  protected toggleTheme(): void {
    this.isDarkTheme.update((isDark) => !isDark);
  }
}
