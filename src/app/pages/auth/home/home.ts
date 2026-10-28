import { Component, inject } from '@angular/core';
import { HeroCtaButtons } from '../../../components/hero-cta-buttons/hero-cta-buttons';
import { JobCardStack } from '../../../components/job-card-stack/job-card-stack';
import { PageShell } from '../../../components/page-shell/page-shell';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
  imports: [PageShell, JobCardStack, HeroCtaButtons],
})
export class Home {
  protected readonly language = inject(LanguageService);
}
