import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  imports: [],
  selector: 'app-job-card-stack',
  styleUrl: './job-card-stack.scss',
  templateUrl: './job-card-stack.html',
})
export class JobCardStack {
  protected readonly language = inject(LanguageService);
}
