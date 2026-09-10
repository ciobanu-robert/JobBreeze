import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguagePicker } from '../language-picker/language-picker';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  imports: [RouterLink, LanguagePicker],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  protected readonly theme = inject(ThemeService);
  protected readonly language = inject(LanguageService);
}
