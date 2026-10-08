import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { PageShell } from '../page-shell/page-shell';
import { SiteFooter } from '../site-footer/site-footer';

export interface LegalSection {
  headingKey: string;
  bodyKey: string;
}

@Component({
  selector: 'app-legal-page',
  styleUrl: './legal-page.scss',
  templateUrl: './legal-page.html',
  imports: [RouterLink, PageShell, SiteFooter],
})
export class LegalPage {
  readonly titleKey = input.required<string>();
  readonly introKey = input.required<string>();
  readonly sections = input.required<LegalSection[]>();

  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);
}
