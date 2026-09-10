export type LanguageCode = 'en' | 'ro';

export interface LanguageDefinition {
  code: LanguageCode;
  label: string;
  flagCode: string;
  flag: string;
}

// Add a new language by appending its definition here (with its flag svg
// under src/assets/flags/) and a matching dictionary entry in TRANSLATIONS
// below — nothing else needs to change.
export const LANGUAGES: LanguageDefinition[] = [
  { code: 'en', label: 'English', flagCode: 'GB', flag: '/assets/flags/gb.svg' },
  { code: 'ro', label: 'Română', flagCode: 'RO', flag: '/assets/flags/ro.svg' },
];

export const DEFAULT_LANGUAGE: LanguageCode = 'en';

type TranslationDictionary = Record<string, string>;

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  en: {
    'header.chooseLanguage': 'Choose language',
    'header.toggleTheme': 'Toggle theme',

    'home.heroTitlePlain': 'Find the dream job more',
    'home.heroTitleHighlight': 'easily',
    'home.heroDescription':
      'Looking for a new job takes time and energy. JobBreeze helps you find roles that fit your skills, your interests, and the life you want to build.',

    'cta.login': "Let's log in",
    'cta.register': 'Register',

    'jobCard.ariaLabel': 'Example job card',
    'jobCard.title': 'Product Designer',
    'jobCard.description':
      'Join a small team building tools people use every day. You will have room to do thoughtful work and make a visible difference.',
    'jobCard.tagRemote': 'Remote',
    'jobCard.tagFullTime': 'Full-time',
    'jobCard.skipAria': 'Skip job',
    'jobCard.likeAria': 'Like job',

    'auth.emailLabel': 'Email',
    'auth.passwordLabel': 'Password',
    'auth.showPassword': 'Show password',
    'auth.hidePassword': 'Hide password',

    'auth.login.title': 'Nice to see you back',
    'auth.login.subtitle': 'We are glad to see you return.',
    'auth.forgotPassword': 'Forgot password?',
    'auth.signIn': 'Sign in',
    'auth.noAccount': "Don't have an account?",
    'auth.signUp': 'Sign up',

    'auth.register.title': 'Welcome to JobBreeze',
    'auth.register.subtitle': 'The future of job hunting.',
    'auth.fullNameLabel': 'Full name',
    'auth.roleLabel': 'I am a',
    'auth.roleSeeker': 'Job seeker',
    'auth.roleCompany': 'Hiring company',
    'auth.createAccount': 'Create account',
    'auth.haveAccount': 'Already have an account?',

    'auth.forgot.title': 'Reset your password',
    'auth.forgot.subtitle': "We'll email you a reset link.",
    'auth.sendResetLink': 'Send reset link',
    'auth.rememberPassword': 'Remember your password?',

    'auth.reset.title': 'Reset your password',
    'auth.reset.subtitle': 'Choose a new password for your account.',
    'auth.newPasswordLabel': 'New password',
    'auth.updatePassword': 'Update password',
    'auth.backToSignIn': 'Back to sign in',

    'social.orContinueWith': 'or continue with',
    'social.google': 'Google',
    'social.apple': 'Apple',
    'social.facebook': 'Facebook',
  },
  ro: {
    'header.chooseLanguage': 'Alege limba',
    'header.toggleTheme': 'Schimbă tema',

    'home.heroTitlePlain': 'Găsește jobul de vis mai',
    'home.heroTitleHighlight': 'ușor',
    'home.heroDescription':
      'Căutarea unui job nou necesită timp și energie. JobBreeze te ajută să găsești roluri potrivite abilităților, intereselor tale și vieții pe care vrei să o construiești.',

    'cta.login': 'Autentificare',
    'cta.register': 'Înregistrare',

    'jobCard.ariaLabel': 'Exemplu de anunț de job',
    'jobCard.title': 'Product Designer',
    'jobCard.description':
      'Alătură-te unei echipe mici care construiește instrumente folosite zilnic. Vei avea spațiu pentru muncă atentă și pentru a face o diferență vizibilă.',
    'jobCard.tagRemote': 'Remote',
    'jobCard.tagFullTime': 'Full-time',
    'jobCard.skipAria': 'Respinge jobul',
    'jobCard.likeAria': 'Apreciază jobul',

    'auth.emailLabel': 'Email',
    'auth.passwordLabel': 'Parolă',
    'auth.showPassword': 'Arată parola',
    'auth.hidePassword': 'Ascunde parola',

    'auth.login.title': 'Bine ai revenit',
    'auth.login.subtitle': 'Ne bucurăm că te-ai întors.',
    'auth.forgotPassword': 'Ai uitat parola?',
    'auth.signIn': 'Autentificare',
    'auth.noAccount': 'Nu ai cont?',
    'auth.signUp': 'Înregistrează-te',

    'auth.register.title': 'Bun venit pe JobBreeze',
    'auth.register.subtitle': 'Viitorul căutării unui loc de muncă.',
    'auth.fullNameLabel': 'Nume complet',
    'auth.roleLabel': 'Sunt',
    'auth.roleSeeker': 'Căutător de job',
    'auth.roleCompany': 'Companie angajatoare',
    'auth.createAccount': 'Creează cont',
    'auth.haveAccount': 'Ai deja un cont?',

    'auth.forgot.title': 'Resetează-ți parola',
    'auth.forgot.subtitle': 'Îți vom trimite un link de resetare pe email.',
    'auth.sendResetLink': 'Trimite link de resetare',
    'auth.rememberPassword': 'Îți amintești parola?',

    'auth.reset.title': 'Resetează-ți parola',
    'auth.reset.subtitle': 'Alege o parolă nouă pentru contul tău.',
    'auth.newPasswordLabel': 'Parolă nouă',
    'auth.updatePassword': 'Actualizează parola',
    'auth.backToSignIn': 'Înapoi la autentificare',

    'social.orContinueWith': 'sau continuă cu',
    'social.google': 'Google',
    'social.apple': 'Apple',
    'social.facebook': 'Facebook',
  },
};
