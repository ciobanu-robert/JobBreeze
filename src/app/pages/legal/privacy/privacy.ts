import { Component } from '@angular/core';
import {
  LegalPage,
  LegalSection,
} from '../../../components/legal-page/legal-page';

const SECTIONS: LegalSection[] = [
  {
    headingKey: 'legal.privacy.s1Heading',
    bodyKey: 'legal.privacy.s1Body',
  },
  {
    headingKey: 'legal.privacy.s2Heading',
    bodyKey: 'legal.privacy.s2Body',
  },
  {
    headingKey: 'legal.privacy.s3Heading',
    bodyKey: 'legal.privacy.s3Body',
  },
  {
    headingKey: 'legal.privacy.s4Heading',
    bodyKey: 'legal.privacy.s4Body',
  },
];

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.html',
  imports: [LegalPage],
})
export class Privacy {
  protected readonly titleKey = 'legal.privacy.title';
  protected readonly introKey = 'legal.privacy.intro';
  protected readonly sections = SECTIONS;
}
