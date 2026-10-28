import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-profile-settings-dialog',
  imports: [],
  styleUrl: './profile-settings-dialog.scss',
  templateUrl: './profile-settings-dialog.html',
})
export class ProfileSettingsDialog {
  protected readonly language = inject(LanguageService);
}
