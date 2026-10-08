import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface Step {
  titleKey: string;
  descriptionKey: string;
}

const SEEKER_STEPS: Step[] = [
  {
    titleKey: 'home.howItWorks.seekers.step1.title',
    descriptionKey:
      'home.howItWorks.seekers.step1.description',
  },
  {
    titleKey: 'home.howItWorks.seekers.step2.title',
    descriptionKey:
      'home.howItWorks.seekers.step2.description',
  },
  {
    titleKey: 'home.howItWorks.seekers.step3.title',
    descriptionKey:
      'home.howItWorks.seekers.step3.description',
  },
  {
    titleKey: 'home.howItWorks.seekers.step4.title',
    descriptionKey:
      'home.howItWorks.seekers.step4.description',
  },
];

const COMPANY_STEPS: Step[] = [
  {
    titleKey: 'home.howItWorks.companies.step1.title',
    descriptionKey:
      'home.howItWorks.companies.step1.description',
  },
  {
    titleKey: 'home.howItWorks.companies.step2.title',
    descriptionKey:
      'home.howItWorks.companies.step2.description',
  },
  {
    titleKey: 'home.howItWorks.companies.step3.title',
    descriptionKey:
      'home.howItWorks.companies.step3.description',
  },
  {
    titleKey: 'home.howItWorks.companies.step4.title',
    descriptionKey:
      'home.howItWorks.companies.step4.description',
  },
];

@Component({
  selector: 'app-home-how-it-works',
  styleUrl: './home-how-it-works.scss',
  templateUrl: './home-how-it-works.html',
  imports: [],
})
export class HomeHowItWorks {
  protected readonly language = inject(LanguageService);
  protected readonly seekerSteps = SEEKER_STEPS;
  protected readonly companySteps = COMPANY_STEPS;
}
