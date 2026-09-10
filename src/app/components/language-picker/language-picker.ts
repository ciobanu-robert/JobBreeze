import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { LanguageCode } from '../../i18n/translations';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  imports: [],
  selector: 'app-language-picker',
  styleUrl: './language-picker.scss',
  templateUrl: './language-picker.html',
})
export class LanguagePicker {
  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);
  protected readonly isOpen = signal(false);

  private readonly elementRef = inject(ElementRef<HTMLElement>);

  protected toggle(): void {
    this.isOpen.update((open) => !open);
  }

  protected select(code: LanguageCode): void {
    this.language.setLanguage(code);
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  protected onDocumentClick(event: MouseEvent): void {
    if (this.isOpen() && !this.elementRef.nativeElement.contains(event.target as Node)) {
      this.isOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.isOpen.set(false);
  }
}
