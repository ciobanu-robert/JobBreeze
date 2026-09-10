import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  imports: [RouterLink],
  selector: 'app-hero-cta-buttons',
  styleUrl: './hero-cta-buttons.scss',
  templateUrl: './hero-cta-buttons.html',
})
export class HeroCtaButtons {
  protected readonly language = inject(LanguageService);
}
