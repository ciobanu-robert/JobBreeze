import {
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import {
  CandidateProfile,
  ProfileEntryKind,
} from '../../models/profile';
import { CompanyProfile } from '../../models/company';
import { ChatAttachment } from '../../models/conversation';
import { PROFILE_ENTRY_SECTIONS } from '../profile-career-tab/profile-career-tab';
import { ProfileEntryCard } from '../profile-entry-card/profile-entry-card';
import { AttachmentChip } from '../attachment-chip/attachment-chip';

interface ProfileLink {
  label: string;
  url: string;
}

export type CardPart = 'front' | 'back';

const FRONT_KINDS: ProfileEntryKind[] = [
  'experience',
  'education',
];

const DEMO_CV_URL = '/demo/demo-cv.pdf';
const DEMO_CV_SIZE = 761;

@Component({
  selector: 'app-card-profile-details',
  imports: [ProfileEntryCard, AttachmentChip],
  styleUrl: './card-profile-details.scss',
  templateUrl: './card-profile-details.html',
})
export class CardProfileDetails {
  protected readonly language = inject(LanguageService);

  readonly candidate = input<CandidateProfile>();
  readonly company = input<CompanyProfile>();
  readonly jobLocation = input('');
  readonly part = input<CardPart>('back');

  protected readonly sections = computed(() =>
    PROFILE_ENTRY_SECTIONS.filter((section) =>
      FRONT_KINDS.includes(section.kind)
        ? this.part() === 'front'
        : this.part() === 'back',
    ),
  );

  protected readonly links = computed<ProfileLink[]>(() => {
    const links =
      this.candidate()?.links ?? this.company()?.links;
    if (!links) {
      return [];
    }
    const github = this.candidate()?.links.github ?? '';
    return [
      { label: 'LinkedIn', url: links.linkedin },
      { label: 'GitHub', url: github },
      { label: 'Website', url: links.website },
    ].filter((link) => link.url !== '');
  });

  protected readonly cv = computed<ChatAttachment | null>(
    () => {
      const fileName = this.candidate()?.cvFileName;
      if (!fileName) {
        return null;
      }
      return {
        id: fileName,
        name: fileName,
        size: DEMO_CV_SIZE,
        type: 'application/pdf',
        url: DEMO_CV_URL,
      };
    },
  );

  protected readonly showHeadquarters = computed(() => {
    const location = this.company()?.location ?? '';
    return (
      location !== '' &&
      location.toLowerCase() !==
        this.jobLocation().toLowerCase()
    );
  });
}
