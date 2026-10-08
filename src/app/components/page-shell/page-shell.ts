import { Component, inject, input } from '@angular/core';
import { Header } from '../header/header';
import { ThemeService } from '../../services/theme.service';

@Component({
  imports: [Header],
  selector: 'app-page-shell',
  styleUrl: './page-shell.scss',
  templateUrl: './page-shell.html',
})
export class PageShell {
  readonly flushBottom = input(false);

  protected readonly theme = inject(ThemeService);
}
