import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthCard } from '../../../components/auth-card/auth-card';
import { PageShell } from '../../../components/page-shell/page-shell';
import { SocialLoginButtons } from '../../../components/social-login-buttons/social-login-buttons';

@Component({
  selector: 'app-login',
  imports: [RouterLink, PageShell, AuthCard, SocialLoginButtons],
  styleUrls: ['../auth-forms.scss'],
  templateUrl: './login.html',
})
export class Login {}
