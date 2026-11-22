import {
  Injectable,
  computed,
  signal,
} from '@angular/core';

export type UserRole = 'seeker' | 'company' | 'admin';

const ROLE_STORAGE_KEY = 'jobbreeze-role';
const USER_ROLES: UserRole[] = [
  'seeker',
  'company',
  'admin',
];

const DEMO_USER_NAMES: Record<UserRole, string> = {
  seeker: 'Robert Ciobanu',
  company: 'Laura Vasile',
  admin: 'JobBreeze Admin',
};

@Injectable({ providedIn: 'root' })
export class SessionService {
  readonly role = signal<UserRole>(this.loadInitialRole());
  readonly isCompany = computed(
    () => this.role() === 'company',
  );
  readonly isAdmin = computed(
    () => this.role() === 'admin',
  );
  readonly userName = computed(
    () => DEMO_USER_NAMES[this.role()],
  );
  readonly companyName = 'NovaTech Solutions';

  setRole(role: UserRole): void {
    this.role.set(role);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(ROLE_STORAGE_KEY, role);
    }
  }

  private loadInitialRole(): UserRole {
    if (typeof localStorage === 'undefined') {
      return 'seeker';
    }
    const stored = localStorage.getItem(ROLE_STORAGE_KEY);
    return (
      USER_ROLES.find((role) => role === stored) ?? 'seeker'
    );
  }
}
