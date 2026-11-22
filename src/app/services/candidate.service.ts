import {
  Injectable,
  computed,
  signal,
} from '@angular/core';
import {
  Candidate,
  CandidateStatus,
} from '../models/candidate';
import { DEMO_CANDIDATES } from '../components/job-swipe-deck/demo-candidates';

@Injectable({ providedIn: 'root' })
export class CandidateService {
  private readonly statuses = signal<
    Record<string, CandidateStatus>
  >({});

  readonly candidates = computed<Candidate[]>(() => {
    const statuses = this.statuses();
    return DEMO_CANDIDATES.map((candidate) => ({
      ...candidate,
      status: statuses[candidate.id] ?? candidate.status,
    }));
  });

  readonly shortlisted = computed(() =>
    this.candidates().filter(
      (candidate) => candidate.status === 'shortlisted',
    ),
  );

  setStatus(id: string, status: CandidateStatus): void {
    this.statuses.update((statuses) => ({
      ...statuses,
      [id]: status,
    }));
  }
}
