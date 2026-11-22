import {
  Component,
  computed,
  inject,
  input,
  linkedSignal,
  output,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Job } from '../../models/job';
import { SkillsInput } from '../skills-input/skills-input';

type TextField =
  'title' | 'location' | 'salary' | 'description';

type SelectField = 'workType' | 'contract' | 'seniority';

interface SelectOption {
  value: string;
  labelKey: string;
}

interface SelectConfig {
  field: SelectField;
  labelKey: string;
  options: SelectOption[];
}

const SELECTS: SelectConfig[] = [
  {
    field: 'workType',
    labelKey: 'browse.filtersRemoteModeLabel',
    options: [
      {
        value: 'Remote',
        labelKey: 'browse.remoteModeRemote',
      },
      {
        value: 'Hybrid',
        labelKey: 'browse.remoteModeHybrid',
      },
      {
        value: 'On-site',
        labelKey: 'browse.remoteModeOnSite',
      },
    ],
  },
  {
    field: 'contract',
    labelKey: 'browse.filtersContractLabel',
    options: [
      {
        value: 'Full-time',
        labelKey: 'browse.contractFullTime',
      },
      {
        value: 'Part-time',
        labelKey: 'browse.contractPartTime',
      },
      {
        value: 'Contract',
        labelKey: 'browse.contractContract',
      },
      {
        value: 'Internship',
        labelKey: 'browse.contractInternship',
      },
    ],
  },
  {
    field: 'seniority',
    labelKey: 'browse.filtersSeniorityLabel',
    options: [
      {
        value: 'Junior',
        labelKey: 'browse.seniorityJunior',
      },
      {
        value: 'Mid-level',
        labelKey: 'browse.seniorityMid',
      },
      {
        value: 'Senior',
        labelKey: 'browse.senioritySenior',
      },
      {
        value: 'Lead',
        labelKey: 'browse.seniorityLead',
      },
    ],
  },
];

@Component({
  selector: 'app-job-post-card',
  imports: [SkillsInput],
  styleUrl: './job-post-card.scss',
  templateUrl: './job-post-card.html',
})
export class JobPostCard {
  protected readonly language = inject(LanguageService);

  readonly job = input.required<Job>();
  readonly editing = input(false);
  readonly editRequested = output<void>();
  readonly removed = output<void>();
  readonly saved = output<Job>();
  readonly cancelled = output<void>();

  protected readonly selects = SELECTS;

  protected readonly draft = linkedSignal(() => ({
    ...this.job(),
  }));

  protected readonly canSave = computed(
    () =>
      this.draft().title.trim() !== '' &&
      this.draft().location.trim() !== '',
  );

  protected readonly meta = computed(() => {
    const job = this.job();
    const labels = SELECTS.map((select) =>
      this.optionLabel(select, job[select.field]),
    );
    return [job.location, ...labels]
      .filter(Boolean)
      .join(' · ');
  });

  protected setField(
    field: TextField | SelectField,
    event: Event,
  ): void {
    const value = (event.target as HTMLInputElement).value;
    this.draft.update((draft) => ({
      ...draft,
      [field]: value,
    }));
  }

  protected setTags(tags: string[]): void {
    this.draft.update((draft) => ({ ...draft, tags }));
  }

  protected submit(): void {
    if (!this.canSave()) {
      return;
    }
    const draft = this.draft();
    this.saved.emit({
      ...draft,
      title: draft.title.trim(),
      location: draft.location.trim(),
      salary: draft.salary.trim(),
      description: draft.description.trim(),
    });
  }

  private optionLabel(
    select: SelectConfig,
    value: string,
  ): string {
    const option = select.options.find(
      (item) => item.value === value,
    );
    return option
      ? this.language.t(option.labelKey)
      : value;
  }
}
