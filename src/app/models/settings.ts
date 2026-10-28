export type SettingsSection =
  | 'account'
  | 'appearance'
  | 'security'
  | 'notifications'
  | 'privacy'
  | 'data';

export interface NotificationSettings {
  newMatches: boolean;
  applicationUpdates: boolean;
  jobRecommendations: boolean;
  productNews: boolean;
}

export interface PrivacySettings {
  discoverable: boolean;
  showPhone: boolean;
}

export interface AccountSettings {
  email: string;
  notifications: NotificationSettings;
  privacy: PrivacySettings;
}
