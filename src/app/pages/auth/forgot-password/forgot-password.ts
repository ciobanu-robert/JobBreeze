import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthCard } from '../../../components/auth-card/auth-card';
import { PageShell } from '../../../components/page-shell/page-shell';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-forgot-password',
  imports: [RouterLink, PageShell, AuthCard],
  styleUrls: ['../auth-forms.scss'],
  templateUrl: './forgot-password.html',
})
export class ForgotPassword {
  protected readonly language = inject(LanguageService);
}
