import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthCard } from '../../../components/auth-card/auth-card';
import { PageShell } from '../../../components/page-shell/page-shell';
import { PasswordField } from '../../../components/password-field/password-field';
import { SocialLoginButtons } from '../../../components/social-login-buttons/social-login-buttons';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    PageShell,
    AuthCard,
    SocialLoginButtons,
    PasswordField,
  ],
  styleUrls: ['../auth-forms.scss'],
  templateUrl: './register.html',
})
export class Register {
  protected readonly language = inject(LanguageService);
  protected readonly role = signal<'seeker' | 'company'>(
    'seeker',
  );
  private readonly router = inject(Router);

  protected createAccount(): void {
    if (this.role() === 'seeker') {
      this.router.navigateByUrl('/browse');
    }
  }
}
