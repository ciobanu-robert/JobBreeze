import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { LanguageCode } from '../../i18n/translations';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

const VIEWPORT_MARGIN = 16;
const ESTIMATED_MENU_WIDTH = 166;

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
  protected readonly openUpward = signal(false);
  protected readonly alignLeft = signal(false);

  private readonly elementRef = inject(ElementRef<HTMLElement>);

  protected toggle(): void {
    const opening = !this.isOpen();
    if (opening) {
      this.updatePlacement();
    }
    this.isOpen.set(opening);
  }

  private updatePlacement(): void {
    if (typeof window === 'undefined') {
      return;
    }
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const estimatedHeight = this.language.languages.length * 42 + 16;

    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    this.openUpward.set(spaceBelow < estimatedHeight + VIEWPORT_MARGIN && spaceAbove > spaceBelow);

    // Anchored right-aligned by default (menu extends left from the button's right edge).
    // If there isn't enough room to the left, flip to anchor left-aligned instead.
    this.alignLeft.set(rect.right - ESTIMATED_MENU_WIDTH < VIEWPORT_MARGIN);
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
