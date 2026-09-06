import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { ThemeService } from '../../services/theme.service';

@Component({
  imports: [Header],
  selector: 'app-page-shell',
  styleUrl: './page-shell.scss',
  templateUrl: './page-shell.html',
})
export class PageShell {
  protected readonly theme = inject(ThemeService);
}
