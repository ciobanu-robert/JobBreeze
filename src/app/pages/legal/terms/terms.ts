import { Component } from '@angular/core';
import {
  LegalPage,
  LegalSection,
} from '../../../components/legal-page/legal-page';

const SECTIONS: LegalSection[] = [
  {
    headingKey: 'legal.terms.s1Heading',
    bodyKey: 'legal.terms.s1Body',
  },
  {
    headingKey: 'legal.terms.s2Heading',
    bodyKey: 'legal.terms.s2Body',
  },
  {
    headingKey: 'legal.terms.s3Heading',
    bodyKey: 'legal.terms.s3Body',
  },
  {
    headingKey: 'legal.terms.s4Heading',
    bodyKey: 'legal.terms.s4Body',
  },
];

@Component({
  selector: 'app-terms',
  templateUrl: './terms.html',
  imports: [LegalPage],
})
export class Terms {
  protected readonly titleKey = 'legal.terms.title';
  protected readonly introKey = 'legal.terms.intro';
  protected readonly sections = SECTIONS;
}
