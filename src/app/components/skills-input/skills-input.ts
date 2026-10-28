import {
  Component,
  inject,
  output,
  input,
  signal,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills-input',
  imports: [],
  styleUrl: './skills-input.scss',
  templateUrl: './skills-input.html',
})
export class SkillsInput {
  protected readonly language = inject(LanguageService);

  readonly skills = input.required<string[]>();
  readonly changed = output<string[]>();

  protected readonly draft = signal('');

  protected addSkill(): void {
    const skill = this.draft().trim();
    if (!skill) {
      return;
    }
    const exists = this.skills().some(
      (item) => item.toLowerCase() === skill.toLowerCase(),
    );
    if (!exists) {
      this.changed.emit([...this.skills(), skill]);
    }
    this.draft.set('');
  }

  protected removeSkill(skill: string): void {
    this.changed.emit(
      this.skills().filter((item) => item !== skill),
    );
  }
}
