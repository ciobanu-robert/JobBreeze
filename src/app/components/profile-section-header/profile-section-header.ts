import {
  Component,
  inject,
  input,
  output,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-profile-section-header',
  imports: [],
  styleUrl: './profile-section-header.scss',
  templateUrl: './profile-section-header.html',
})
export class ProfileSectionHeader {
  protected readonly language = inject(LanguageService);

  readonly icon = input.required<string>();
  readonly titleKey = input.required<string>();
  readonly count = input<number | null>(null);
  readonly addable = input(false);
  readonly add = output<void>();
  readonly hintKey = input<string | null>(null);
  readonly danger = input(false);
}
