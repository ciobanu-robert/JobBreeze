import {
  Component,
  inject,
  computed,
  input,
  linkedSignal,
  output,
} from '@angular/core';
import { ProfileEntry } from '../../models/profile';
import { LanguageService } from '../../services/language.service';
import { formatDate } from '../../utils/date-format';

type EntryField =
  'title' | 'subtitle' | 'startDate' | 'description';

@Component({
  selector: 'app-profile-entry-card',
  imports: [],
  styleUrl: './profile-entry-card.scss',
  templateUrl: './profile-entry-card.html',
})
export class ProfileEntryCard {
  protected readonly language = inject(LanguageService);

  readonly entry = input.required<ProfileEntry>();
  readonly editing = input(false);
  readonly titleLabelKey = input.required<string>();
  readonly subtitleLabelKey = input.required<string>();
  readonly editRequested = output<void>();
  readonly removed = output<void>();
  readonly saved = output<ProfileEntry>();
  readonly cancelled = output<void>();

  protected readonly draft = linkedSignal(() => ({
    ...this.entry(),
  }));

  protected readonly canSave = computed(
    () =>
      this.draft().title.trim() !== '' &&
      this.draft().startDate !== '',
  );

  protected readonly period = computed(() => {
    const { startDate, endDate } = this.entry();
    if (!startDate) {
      return '';
    }
    const start = this.formatMonth(startDate);
    if (endDate === null) {
      return `${start} - ${this.language.t('profile.present')}`;
    }
    return endDate
      ? `${start} - ${this.formatMonth(endDate)}`
      : start;
  });

  protected setField(
    field: EntryField,
    event: Event,
  ): void {
    const value = (event.target as HTMLInputElement).value;
    this.draft.update((draft) => ({
      ...draft,
      [field]: value,
    }));
  }

  protected setEndDate(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.draft.update((draft) => ({
      ...draft,
      endDate: value,
    }));
  }

  protected toggleOngoing(event: Event): void {
    const checked = (event.target as HTMLInputElement)
      .checked;
    this.draft.update((draft) => ({
      ...draft,
      endDate: checked ? null : '',
    }));
  }

  protected submit(): void {
    if (!this.canSave()) {
      return;
    }
    const draft = this.draft();
    this.saved.emit({
      ...draft,
      title: draft.title.trim(),
      subtitle: draft.subtitle.trim(),
      description: draft.description.trim(),
    });
  }

  private formatMonth(value: string): string {
    return formatDate(
      `${value}-01`,
      this.language.currentLanguage(),
      {
        month: 'short',
        year: 'numeric',
      },
    );
  }
}
