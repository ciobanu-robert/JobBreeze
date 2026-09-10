import { Component } from '@angular/core';
import { BrandLogo } from '../brand-logo/brand-logo';
import { LanguagePicker } from '../language-picker/language-picker';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  imports: [BrandLogo, LanguagePicker, ThemeToggle],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {}
