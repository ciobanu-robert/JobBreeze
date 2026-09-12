import { 
  Component, 
  inject 
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthCard } from '../../../components/auth-card/auth-card';
import { PageShell } from '../../../components/page-shell/page-shell';
import { PasswordField } from '../../../components/password-field/password-field';
import { SocialLoginButtons } from '../../../components/social-login-buttons/social-login-buttons';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, PageShell, AuthCard, SocialLoginButtons, PasswordField],
  styleUrls: ['../auth-forms.scss'],
  templateUrl: './login.html',
})
export class Login {
  protected readonly language = inject(LanguageService);
  private readonly router = inject(Router);

  protected signIn(): void {
    this.router.navigateByUrl('/browse');
  }
}
