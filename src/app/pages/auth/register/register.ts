import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthCard } from '../../../components/auth-card/auth-card';
import { PageShell } from '../../../components/page-shell/page-shell';
import { SocialLoginButtons } from '../../../components/social-login-buttons/social-login-buttons';

@Component({
  selector: 'app-register',
  imports: [RouterLink, PageShell, AuthCard, SocialLoginButtons],
  styleUrls: ['../auth-forms.scss'],
  templateUrl: './register.html',
})
export class Register {
  protected readonly role = signal<'seeker' | 'company'>('seeker');
}
