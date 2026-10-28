import { Injectable, signal } from '@angular/core';
import { CandidateProfile } from '../models/profile';
import { DEMO_PROFILE } from '../pages/profile/demo-profile';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly store =
    signal<CandidateProfile>(DEMO_PROFILE);

  readonly profile = this.store.asReadonly();

  set(profile: CandidateProfile): void {
    this.store.set(profile);
  }

  update(changes: Partial<CandidateProfile>): void {
    this.store.update((current) => ({
      ...current,
      ...changes,
    }));
  }
}
