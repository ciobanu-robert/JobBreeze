import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthCard } from '../../../components/auth-card/auth-card';
import { PageShell } from '../../../components/page-shell/page-shell';
import { PasswordField } from '../../../components/password-field/password-field';
import { SocialLoginButtons } from '../../../components/social-login-buttons/social-login-buttons';
import { LanguageService } from '../../../services/language.service';
import {
  SessionService,
  UserRole,
} from '../../../services/session.service';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    PageShell,
    AuthCard,
    SocialLoginButtons,
    PasswordField,
  ],
  styleUrls: ['../auth-forms.scss'],
  templateUrl: './login.html',
})
export class Login {
  protected readonly language = inject(LanguageService);
  private readonly router = inject(Router);
  private readonly session = inject(SessionService);

  protected readonly roles: {
    value: UserRole;
    labelKey: string;
  }[] = [
    { value: 'seeker', labelKey: 'auth.demoRoleSeeker' },
    { value: 'company', labelKey: 'auth.demoRoleCompany' },
    { value: 'admin', labelKey: 'auth.roleAdmin' },
  ];
  protected readonly role = signal<UserRole>(
    this.session.role(),
  );

  protected signIn(): void {
    this.session.setRole(this.role());
    this.router.navigateByUrl('/browse');
  }
}
