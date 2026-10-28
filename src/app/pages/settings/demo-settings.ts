import { AccountSettings } from '../../models/settings';

export const DEMO_SETTINGS: AccountSettings = {
  email: 'robert.ciobanu@jobbreeze.app',
  notifications: {
    newMatches: true,
    applicationUpdates: true,
    jobRecommendations: true,
    productNews: false,
  },
  privacy: {
    discoverable: true,
    showPhone: false,
  },
};
