import {
  Component,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import {
  CandidateProfile,
  ProfileEntry,
  ProfileEntryKind,
} from '../../models/profile';
import { LanguageService } from '../../services/language.service';
import { ProfileEntryCard } from '../profile-entry-card/profile-entry-card';
import { ProfileSectionHeader } from '../profile-section-header/profile-section-header';
import { SkillsInput } from '../skills-input/skills-input';

interface EntrySection {
  kind: ProfileEntryKind;
  icon: string;
  titleKey: string;
  hintKey: string;
  titleLabelKey: string;
  subtitleLabelKey: string;
}

const SECTIONS: EntrySection[] = [
  {
    kind: 'experience',
    icon: '/assets/jobs/briefcase.svg',
    titleKey: 'profile.experience',
    hintKey: 'profile.experienceHint',
    titleLabelKey: 'profile.role',
    subtitleLabelKey: 'profile.company',
  },
  {
    kind: 'education',
    icon: '/assets/jobs/graduation-cap.svg',
    titleKey: 'profile.education',
    hintKey: 'profile.educationHint',
    titleLabelKey: 'profile.school',
    subtitleLabelKey: 'profile.degree',
  },
  {
    kind: 'projects',
    icon: '/assets/jobs/folder-code.svg',
    titleKey: 'profile.projects',
    hintKey: 'profile.projectsHint',
    titleLabelKey: 'profile.projectName',
    subtitleLabelKey: 'profile.technologies',
  },
  {
    kind: 'certifications',
    icon: '/assets/jobs/award.svg',
    titleKey: 'profile.certifications',
    hintKey: 'profile.certificationsHint',
    titleLabelKey: 'profile.certificationName',
    subtitleLabelKey: 'profile.issuer',
  },
];

@Component({
  selector: 'app-profile-career-tab',
  imports: [
    ProfileSectionHeader,
    ProfileEntryCard,
    SkillsInput,
  ],
  styleUrl: './profile-career-tab.scss',
  templateUrl: './profile-career-tab.html',
})
export class ProfileCareerTab {
  protected readonly language = inject(LanguageService);

  readonly profile = input.required<CandidateProfile>();
  readonly changed = output<Partial<CandidateProfile>>();

  protected readonly sections = SECTIONS;
  protected readonly editingId = signal<string | null>(
    null,
  );

  protected addEntry(kind: ProfileEntryKind): void {
    const entry: ProfileEntry = {
      id: `${kind}-${Date.now()}`,
      title: '',
      subtitle: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    this.changed.emit({
      [kind]: [entry, ...this.profile()[kind]],
    });
    this.editingId.set(entry.id);
  }

  protected saveEntry(
    kind: ProfileEntryKind,
    updated: ProfileEntry,
  ): void {
    this.changed.emit({
      [kind]: this.profile()[kind].map((entry) =>
        entry.id === updated.id ? updated : entry,
      ),
    });
    this.editingId.set(null);
  }

  protected removeEntry(
    kind: ProfileEntryKind,
    id: string,
  ): void {
    this.changed.emit({
      [kind]: this.profile()[kind].filter(
        (entry) => entry.id !== id,
      ),
    });
    if (this.editingId() === id) {
      this.editingId.set(null);
    }
  }

  protected cancelEdit(
    kind: ProfileEntryKind,
    entry: ProfileEntry,
  ): void {
    if (!entry.title) {
      this.removeEntry(kind, entry.id);
    }
    this.editingId.set(null);
  }

  protected setSkills(skills: string[]): void {
    this.changed.emit({ skills });
  }
}
