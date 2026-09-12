import { 
  Component, 
  inject 
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthCard } from '../../../components/auth-card/auth-card';
import { PageShell } from '../../../components/page-shell/page-shell';
import { PasswordField } from '../../../components/password-field/password-field';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-reset-password',
  imports: [RouterLink, PageShell, AuthCard, PasswordField],
  styleUrls: ['../auth-forms.scss'],
  templateUrl: './reset-password.html',
})
export class ResetPassword {
  protected readonly language = inject(LanguageService);
}
