import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  imports: [],
  selector: 'app-social-login-buttons',
  styleUrl: './social-login-buttons.scss',
  templateUrl: './social-login-buttons.html',
})
export class SocialLoginButtons {
  protected readonly theme = inject(ThemeService);
  protected readonly language = inject(LanguageService);
}
