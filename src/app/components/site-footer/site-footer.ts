import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { BrandLogo } from '../brand-logo/brand-logo';

@Component({
  selector: 'app-site-footer',
  styleUrl: './site-footer.scss',
  templateUrl: './site-footer.html',
  imports: [RouterLink, BrandLogo],
})
export class SiteFooter {
  protected readonly language = inject(LanguageService);
  protected readonly currentYear = new Date().getFullYear();
}
