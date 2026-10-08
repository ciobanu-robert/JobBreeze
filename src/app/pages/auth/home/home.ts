import { Component, inject } from '@angular/core';
import { HeroCtaButtons } from '../../../components/hero-cta-buttons/hero-cta-buttons';
import { HomeBenefits } from '../../../components/home-benefits/home-benefits';
import { HomeHowItWorks } from '../../../components/home-how-it-works/home-how-it-works';
import { JobCardStack } from '../../../components/job-card-stack/job-card-stack';
import { PageShell } from '../../../components/page-shell/page-shell';
import { SiteFooter } from '../../../components/site-footer/site-footer';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
  imports: [
    PageShell,
    JobCardStack,
    HeroCtaButtons,
    HomeBenefits,
    HomeHowItWorks,
    SiteFooter,
  ],
})
export class Home {
  protected readonly language = inject(LanguageService);
}
