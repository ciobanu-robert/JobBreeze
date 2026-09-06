import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthCard } from '../../../components/auth-card/auth-card';
import { PageShell } from '../../../components/page-shell/page-shell';

@Component({
  selector: 'app-reset-password',
  imports: [RouterLink, PageShell, AuthCard],
  styleUrls: ['../auth-forms.scss'],
  templateUrl: './reset-password.html',
})
export class ResetPassword {}

