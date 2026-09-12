import {
  Component,
  inject,
  input,
  signal,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  imports: [],
  selector: 'app-password-field',
  styleUrl: './password-field.scss',
  templateUrl: './password-field.html',
})
export class PasswordField {
  readonly fieldId = input.required<string>();
  readonly autocomplete = input<string>('current-password');

  protected readonly language = inject(LanguageService);
  protected readonly visible = signal(false);

  protected toggleVisibility(): void {
    this.visible.update((isVisible) => !isVisible);
  }
}
