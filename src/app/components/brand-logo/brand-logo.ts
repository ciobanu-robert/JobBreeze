import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  imports: [RouterLink],
  selector: 'app-brand-logo',
  styleUrl: './brand-logo.scss',
  templateUrl: './brand-logo.html',
})
export class BrandLogo {
  readonly compact = input(false);
  protected readonly theme = inject(ThemeService);
}
