import { Component } from '@angular/core';
import {
  LegalPage,
  LegalSection,
} from '../../components/legal-page/legal-page';

const SECTIONS: LegalSection[] = [
  {
    headingKey: 'contact.s1Heading',
    bodyKey: 'contact.s1Body',
  },
];

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  imports: [LegalPage],
})
export class Contact {
  protected readonly titleKey = 'contact.title';
  protected readonly introKey = 'contact.intro';
  protected readonly sections = SECTIONS;
}
