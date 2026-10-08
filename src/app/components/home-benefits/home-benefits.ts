import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface Benefit {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: '/assets/brand/zap.svg',
    titleKey: 'home.benefits.matching.title',
    descriptionKey: 'home.benefits.matching.description',
  },
  {
    icon: '/assets/communication/sparkles.svg',
    titleKey: 'home.benefits.ai.title',
    descriptionKey: 'home.benefits.ai.description',
  },
  {
    icon: '/assets/ui/shield.svg',
    titleKey: 'home.benefits.verified.title',
    descriptionKey: 'home.benefits.verified.description',
  },
  {
    icon: '/assets/communication/message-circle.svg',
    titleKey: 'home.benefits.chat.title',
    descriptionKey: 'home.benefits.chat.description',
  },
  {
    icon: '/assets/jobs/bookmark.svg',
    titleKey: 'home.benefits.tracking.title',
    descriptionKey: 'home.benefits.tracking.description',
  },
  {
    icon: '/assets/jobs/users.svg',
    titleKey: 'home.benefits.bothSides.title',
    descriptionKey: 'home.benefits.bothSides.description',
  },
];

@Component({
  selector: 'app-home-benefits',
  styleUrl: './home-benefits.scss',
  templateUrl: './home-benefits.html',
  imports: [],
})
export class HomeBenefits {
  protected readonly language = inject(LanguageService);
  protected readonly benefits = BENEFITS;
}
