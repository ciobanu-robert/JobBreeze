import { Component } from '@angular/core';
import { HeroCtaButtons } from '../../../components/hero-cta-buttons/hero-cta-buttons';
import { JobCardStack } from '../../../components/job-card-stack/job-card-stack';
import { PageShell } from '../../../components/page-shell/page-shell';

@Component({
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
  imports: [PageShell, JobCardStack, HeroCtaButtons],
})
export class Home {}
