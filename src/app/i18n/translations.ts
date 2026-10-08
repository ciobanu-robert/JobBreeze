export type LanguageCode = 'en' | 'ro';

export interface LanguageDefinition {
  code: LanguageCode;
  label: string;
  flagCode: string;
  flag: string;
}

export const LANGUAGES: LanguageDefinition[] = [
  {
    code: 'en',
    label: 'English',
    flagCode: 'GB',
    flag: '/assets/flags/gb.svg',
  },
  {
    code: 'ro',
    label: 'Română',
    flagCode: 'RO',
    flag: '/assets/flags/ro.svg',
  },
];

export const DEFAULT_LANGUAGE: LanguageCode = 'en';

type TranslationDictionary = Record<string, string>;

export const TRANSLATIONS: Record<
  LanguageCode,
  TranslationDictionary
> = {
  en: {
    'header.chooseLanguage': 'Choose language',
    'header.toggleTheme': 'Toggle theme',

    'home.heroTitlePlain': 'Find the dream job more',
    'home.heroTitleHighlight': 'easily',
    'home.heroDescription':
      'Looking for a new job takes time and energy. ' +
      'JobBreeze helps you find roles that fit your ' +
      'skills, your interests, and the life you want ' +
      'to build.',

    'home.benefitsTitle': 'Why choose JobBreeze',
    'home.benefitsSubtitle':
      'A faster, friendlier way to find your next ' +
      'role — or your next hire.',
    'home.benefits.matching.title': "Swipe, don't scroll",
    'home.benefits.matching.description':
      'Skip endless job boards. Swipe through roles ' +
      'picked for your skills and preferences in ' +
      'seconds.',
    'home.benefits.ai.title': 'Jobby AI on your side',
    'home.benefits.ai.description':
      'Get smart, personalized recommendations that ' +
      "learn what you're actually looking for.",
    'home.benefits.verified.title': 'Verified companies',
    'home.benefits.verified.description':
      'Every employer on JobBreeze is reviewed, so ' +
      "you always know who you're talking to.",
    'home.benefits.chat.title':
      'Talk directly, no middleman',
    'home.benefits.chat.description':
      'Match with a company and start chatting right ' +
      'away — no recruiters, no waiting.',
    'home.benefits.tracking.title':
      'Save and track everything',
    'home.benefits.tracking.description':
      'Bookmark jobs you love and follow every ' +
      'application from one simple dashboard.',
    'home.benefits.bothSides.title': 'Built for both sides',
    'home.benefits.bothSides.description':
      'One platform, two experiences: effortless ' +
      'swiping for seekers, powerful tools for ' +
      'companies.',

    'home.howItWorksTitle': 'How JobBreeze works',
    'home.howItWorksSubtitle':
      "Whether you're looking for work or looking to " +
      "hire, you'll be up and running in minutes.",
    'home.howItWorks.seekersLabel': 'For job seekers',
    'home.howItWorks.companiesLabel': 'For companies',
    'home.howItWorks.seekers.step1.title':
      'Create your profile',
    'home.howItWorks.seekers.step1.description':
      'Add your skills, experience, and what you are ' +
      'looking for — it takes just a few minutes.',
    'home.howItWorks.seekers.step2.title':
      'Swipe through curated jobs',
    'home.howItWorks.seekers.step2.description':
      'Browse roles matched to you and swipe right ' +
      'on the ones that catch your eye.',
    'home.howItWorks.seekers.step3.title': 'Match and chat',
    'home.howItWorks.seekers.step3.description':
      'When a company likes you back, start chatting ' +
      'directly inside JobBreeze.',
    'home.howItWorks.seekers.step4.title': 'Get hired',
    'home.howItWorks.seekers.step4.description':
      'Move from conversation to offer without ever ' +
      'leaving the app.',
    'home.howItWorks.companies.step1.title':
      'Set up your company profile',
    'home.howItWorks.companies.step1.description':
      'Showcase your team, culture, and open roles ' +
      'in a profile candidates can trust.',
    'home.howItWorks.companies.step2.title':
      'Post your openings',
    'home.howItWorks.companies.step2.description':
      'Publish a role in minutes and reach job ' +
      'seekers who match what you need.',
    'home.howItWorks.companies.step3.title':
      'Review matched candidates',
    'home.howItWorks.companies.step3.description':
      'See a curated stream of candidates who fit — ' +
      'no sorting through hundreds of resumes.',
    'home.howItWorks.companies.step4.title':
      'Hire the right fit',
    'home.howItWorks.companies.step4.description':
      'Chat, interview, and hire directly, all from ' +
      'one dashboard.',

    'cta.login': "Let's log in",
    'cta.register': 'Register',

    'jobCard.ariaLabel': 'Example job card',
    'jobCard.title': 'Product Designer',
    'jobCard.description':
      'Join a small team building tools people use ' +
      'every day. You will have room to do thoughtful ' +
      'work and make a visible difference.',
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
    'auth.reset.subtitle':
      'Choose a new password for your account.',
    'auth.newPasswordLabel': 'New password',
    'auth.updatePassword': 'Update password',
    'auth.backToSignIn': 'Back to sign in',

    'social.orContinueWith': 'or continue with',
    'social.google': 'Google',
    'social.apple': 'Apple',
    'social.facebook': 'Facebook',

    'nav.browse': 'Browse',
    'nav.applications': 'Applications',
    'nav.messages': 'Messages',
    'nav.jobbyAi': 'Jobby AI',
    'nav.profile': 'Profile',
    'nav.settings': 'Settings',
    'nav.signOut': 'Sign out',
    'nav.collapseSidebar': 'Collapse sidebar',
    'nav.expandSidebar': 'Expand sidebar',

    'browse.title': 'Browse jobs',
    'browse.filters': 'Filters',
    'browse.filtersCloseAria': 'Close filters',
    'browse.filtersLocationLabel': 'Location',
    'browse.filtersLocationPlaceholder': 'City or country',
    'browse.filtersRemoteModeLabel': 'Remote mode',
    'browse.filtersContractLabel': 'Contract',
    'browse.filtersSeniorityLabel': 'Seniority',
    'browse.filtersSalaryMinLabel': 'Salary min (€)',
    'browse.filtersAny': 'Any',
    'browse.filtersClear': 'Clear',
    'browse.filtersApply': 'Apply',
    'browse.remoteModeRemote': 'Remote',
    'browse.remoteModeHybrid': 'Hybrid',
    'browse.remoteModeOnSite': 'On-site',
    'browse.contractFullTime': 'Full-time',
    'browse.contractPartTime': 'Part-time',
    'browse.contractContract': 'Contract',
    'browse.contractInternship': 'Internship',
    'browse.seniorityJunior': 'Junior',
    'browse.seniorityMid': 'Mid-level',
    'browse.senioritySenior': 'Senior',
    'browse.seniorityLead': 'Lead',
    'browse.emptyTitle': 'No more jobs. Come back soon!',
    'browse.refresh': 'Refresh',

    'applications.title': 'Applications',
    'applications.statTotal': 'Total',
    'applications.statPending': 'Pending',
    'applications.statShortlisted': 'Shortlisted',
    'applications.statAccepted': 'Accepted',
    'applications.statusPending': 'pending',
    'applications.statusShortlisted': 'shortlisted',
    'applications.statusRejected': 'rejected',
    'applications.statusAccepted': 'accepted',
    'applications.openChat': 'Open chat',
    'applications.appliedOn': 'Applied on',
    'applications.emptyTitle':
      'You have no applications yet.',

    'swipeCard.like': 'Like',
    'swipeCard.nope': 'Nope',
    'swipeCard.save': 'Saved',
    'swipeCard.rejectAria': 'Skip this job',
    'swipeCard.bookmarkAria': 'Save this job',
    'swipeCard.likeAria': 'Like this job',
    'swipeCard.flagAria': 'Report this job',

    'footer.contact': 'Contact',
    'footer.legalTerms': 'Terms of service',
    'footer.legalPrivacy': 'Privacy policy',
    'footer.rightsReserved': 'All rights reserved.',

    'legal.backHome': 'Back to home',

    'contact.title': 'Contact',
    'contact.intro':
      'Have a question, feedback, or a partnership ' +
      "idea? We'd love to hear from you.",
    'contact.s1Heading': 'Get in touch',
    'contact.s1Body':
      'Email us at hello@jobbreeze.app and we will ' +
      'get back to you within one business day.',

    'legal.terms.title': 'Terms of Service',
    'legal.terms.intro':
      'These terms explain what you can expect from ' +
      'JobBreeze and what we expect from you as you ' +
      'use the platform.',
    'legal.terms.s1Heading': 'Using JobBreeze',
    'legal.terms.s1Body':
      'You agree to use JobBreeze only for lawful ' +
      'purposes, to provide accurate information, ' +
      'and to keep your account credentials secure.',
    'legal.terms.s2Heading': 'Accounts',
    'legal.terms.s2Body':
      'You are responsible for the activity on your ' +
      'account. Let us know right away if you think ' +
      'someone else has access to it.',
    'legal.terms.s3Heading':
      'Job postings and applications',
    'legal.terms.s3Body':
      'Companies are responsible for the accuracy ' +
      'of the roles they publish. Job seekers are ' +
      'responsible for the accuracy of their ' +
      'applications.',
    'legal.terms.s4Heading': 'Limitation of liability',
    'legal.terms.s4Body':
      'JobBreeze connects job seekers and companies ' +
      'but is not a party to any employment ' +
      'agreement reached between them.',

    'legal.privacy.title': 'Privacy Policy',
    'legal.privacy.intro':
      'This policy describes what information ' +
      "JobBreeze collects and how it's used to help " +
      'you find or fill a role.',
    'legal.privacy.s1Heading': 'Information we collect',
    'legal.privacy.s1Body':
      'We collect the information you provide ' +
      'directly, such as your profile details, job ' +
      'preferences, and messages sent through the ' +
      'platform.',
    'legal.privacy.s2Heading':
      'How we use your information',
    'legal.privacy.s2Body':
      'We use your information to match you with ' +
      'relevant jobs or candidates, and to keep the ' +
      'platform secure and working smoothly.',
    'legal.privacy.s3Heading': 'Data sharing',
    'legal.privacy.s3Body':
      'We only share your profile with companies or ' +
      'candidates you choose to interact with — ' +
      'never sold to third parties.',
    'legal.privacy.s4Heading': 'Your choices',
    'legal.privacy.s4Body':
      'You can update or delete your profile ' +
      'information at any time from your account ' +
      'settings.',
  },
  ro: {
    'header.chooseLanguage': 'Alege limba',
    'header.toggleTheme': 'Schimbă tema',

    'home.heroTitlePlain': 'Găsește jobul de vis mai',
    'home.heroTitleHighlight': 'ușor',
    'home.heroDescription':
      'Căutarea unui job nou necesită timp și energie. ' +
      'JobBreeze te ajută să găsești roluri potrivite ' +
      'abilităților, intereselor tale și vieții pe care ' +
      'vrei să o construiești.',

    'home.benefitsTitle': 'De ce să alegi JobBreeze',
    'home.benefitsSubtitle':
      'Un mod mai rapid și mai prietenos de a-ți ' +
      'găsi următorul job — sau următoarea angajare.',
    'home.benefits.matching.title':
      'Dă swipe, nu mai derula',
    'home.benefits.matching.description':
      'Uită de joburile fără sfârșit. Vezi roluri ' +
      'alese după abilitățile și preferințele tale, ' +
      'în câteva secunde.',
    'home.benefits.ai.title': 'Jobby AI de partea ta',
    'home.benefits.ai.description':
      'Primești recomandări inteligente și ' +
      'personalizate, care învață ce cauți cu ' +
      'adevărat.',
    'home.benefits.verified.title': 'Companii verificate',
    'home.benefits.verified.description':
      'Fiecare angajator de pe JobBreeze este ' +
      'verificat, ca să știi mereu cu cine vorbești.',
    'home.benefits.chat.title':
      'Vorbești direct, fără intermediari',
    'home.benefits.chat.description':
      'Te potrivești cu o companie și poți începe ' +
      'conversația imediat — fără recrutori, fără ' +
      'așteptare.',
    'home.benefits.tracking.title':
      'Salvezi și urmărești totul',
    'home.benefits.tracking.description':
      'Salvează joburile care îți plac și urmărește ' +
      'fiecare candidatură dintr-un singur loc.',
    'home.benefits.bothSides.title':
      'Gândit pentru ambele părți',
    'home.benefits.bothSides.description':
      'O singură platformă, două experiențe: swipe ' +
      'simplu pentru candidați, instrumente ' +
      'puternice pentru companii.',

    'home.howItWorksTitle': 'Cum funcționează JobBreeze',
    'home.howItWorksSubtitle':
      'Fie că cauți un job sau vrei să angajezi, ' +
      'ești gata în câteva minute.',
    'home.howItWorks.seekersLabel': 'Pentru candidați',
    'home.howItWorks.companiesLabel': 'Pentru companii',
    'home.howItWorks.seekers.step1.title':
      'Creează-ți profilul',
    'home.howItWorks.seekers.step1.description':
      'Adaugă-ți abilitățile, experiența și ce ' +
      'anume cauți — durează doar câteva minute.',
    'home.howItWorks.seekers.step2.title':
      'Vezi joburi alese pentru tine',
    'home.howItWorks.seekers.step2.description':
      'Explorează roluri potrivite ție și dă swipe ' +
      'la dreapta celor care îți plac.',
    'home.howItWorks.seekers.step3.title':
      'Te potrivești și discuți',
    'home.howItWorks.seekers.step3.description':
      'Când o companie te apreciază și ea, poți ' +
      'începe o conversație direct în JobBreeze.',
    'home.howItWorks.seekers.step4.title': 'Fii angajat',
    'home.howItWorks.seekers.step4.description':
      'Treci de la conversație la ofertă fără să ' +
      'părăsești aplicația.',
    'home.howItWorks.companies.step1.title':
      'Configurează profilul companiei',
    'home.howItWorks.companies.step1.description':
      'Prezintă-ți echipa, cultura și rolurile ' +
      'deschise într-un profil de încredere pentru ' +
      'candidați.',
    'home.howItWorks.companies.step2.title':
      'Publică rolurile deschise',
    'home.howItWorks.companies.step2.description':
      'Publică un rol în câteva minute și ajungi la ' +
      'candidați potriviți nevoilor tale.',
    'home.howItWorks.companies.step3.title':
      'Analizează candidații potriviți',
    'home.howItWorks.companies.step3.description':
      'Vezi un flux de candidați deja filtrați — ' +
      'fără să treci prin sute de CV-uri.',
    'home.howItWorks.companies.step4.title':
      'Angajează persoana potrivită',
    'home.howItWorks.companies.step4.description':
      'Discută, intervievează și angajează direct, ' +
      'dintr-un singur loc.',

    'cta.login': 'Autentificare',
    'cta.register': 'Înregistrare',

    'jobCard.ariaLabel': 'Exemplu de anunț de job',
    'jobCard.title': 'Product Designer',
    'jobCard.description':
      'Alătură-te unei echipe mici care construiește ' +
      'instrumente folosite zilnic. Vei avea spațiu ' +
      'pentru muncă atentă și pentru a face o diferență ' +
      'vizibilă.',
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
    'auth.register.subtitle':
      'Viitorul căutării unui loc de muncă.',
    'auth.fullNameLabel': 'Nume complet',
    'auth.roleLabel': 'Sunt',
    'auth.roleSeeker': 'Căutător de job',
    'auth.roleCompany': 'Companie angajatoare',
    'auth.createAccount': 'Creează cont',
    'auth.haveAccount': 'Ai deja un cont?',

    'auth.forgot.title': 'Resetează-ți parola',
    'auth.forgot.subtitle':
      'Îți vom trimite un link de resetare pe email.',
    'auth.sendResetLink': 'Trimite link de resetare',
    'auth.rememberPassword': 'Îți amintești parola?',

    'auth.reset.title': 'Resetează-ți parola',
    'auth.reset.subtitle':
      'Alege o parolă nouă pentru contul tău.',
    'auth.newPasswordLabel': 'Parolă nouă',
    'auth.updatePassword': 'Actualizează parola',
    'auth.backToSignIn': 'Înapoi la autentificare',

    'social.orContinueWith': 'sau continuă cu',
    'social.google': 'Google',
    'social.apple': 'Apple',
    'social.facebook': 'Facebook',

    'nav.browse': 'Explorează',
    'nav.applications': 'Candidaturi',
    'nav.messages': 'Mesaje',
    'nav.jobbyAi': 'Jobby AI',
    'nav.profile': 'Profil',
    'nav.settings': 'Setări',
    'nav.signOut': 'Deconectare',
    'nav.collapseSidebar': 'Restrânge meniul',
    'nav.expandSidebar': 'Extinde meniul',

    'browse.title': 'Explorează joburi',
    'browse.filters': 'Filtre',
    'browse.filtersCloseAria': 'Închide filtrele',
    'browse.filtersLocationLabel': 'Locație',
    'browse.filtersLocationPlaceholder': 'Oraș sau țară',
    'browse.filtersRemoteModeLabel': 'Mod de lucru',
    'browse.filtersContractLabel': 'Tip de contract',
    'browse.filtersSeniorityLabel': 'Senioritate',
    'browse.filtersSalaryMinLabel': 'Salariu minim (€)',
    'browse.filtersAny': 'Oricare',
    'browse.filtersClear': 'Resetează',
    'browse.filtersApply': 'Aplică',
    'browse.remoteModeRemote': 'Remote',
    'browse.remoteModeHybrid': 'Hibrid',
    'browse.remoteModeOnSite': 'La birou',
    'browse.contractFullTime': 'Full-time',
    'browse.contractPartTime': 'Part-time',
    'browse.contractContract': 'Colaborare',
    'browse.contractInternship': 'Internship',
    'browse.seniorityJunior': 'Junior',
    'browse.seniorityMid': 'Mid-level',
    'browse.senioritySenior': 'Senior',
    'browse.seniorityLead': 'Lead',
    'browse.emptyTitle':
      'Nu mai sunt joburi. Revino curând!',
    'browse.refresh': 'Reîncearcă',

    'applications.title': 'Candidaturi',
    'applications.statTotal': 'Total',
    'applications.statPending': 'În așteptare',
    'applications.statShortlisted': 'Preselectate',
    'applications.statAccepted': 'Acceptat',
    'applications.statusPending': 'în așteptare',
    'applications.statusShortlisted': 'preselectat',
    'applications.statusRejected': 'respins',
    'applications.statusAccepted': 'acceptat',
    'applications.openChat': 'Deschide chat',
    'applications.appliedOn': 'Aplicat pe',
    'applications.emptyTitle':
      'Nu ai încă nicio candidatură.',

    'swipeCard.like': 'Îmi place',
    'swipeCard.nope': 'Respins',
    'swipeCard.save': 'Salvat',
    'swipeCard.rejectAria': 'Respinge acest job',
    'swipeCard.bookmarkAria': 'Salvează acest job',
    'swipeCard.likeAria': 'Apreciază acest job',
    'swipeCard.flagAria': 'Raportează acest job',

    'footer.contact': 'Contact',
    'footer.legalTerms': 'Termeni și condiții',
    'footer.legalPrivacy': 'Politica de confidențialitate',
    'footer.rightsReserved': 'Toate drepturile rezervate.',

    'legal.backHome': 'Înapoi acasă',

    'contact.title': 'Contact',
    'contact.intro':
      'Ai o întrebare, un feedback sau o idee de ' +
      'parteneriat? Ne-ar plăcea să auzim de la tine.',
    'contact.s1Heading': 'Ia legătura cu noi',
    'contact.s1Body':
      'Scrie-ne la hello@jobbreeze.app și îți vom ' +
      'răspunde în cel mult o zi lucrătoare.',

    'legal.terms.title': 'Termeni și condiții',
    'legal.terms.intro':
      'Acești termeni explică la ce te poți aștepta ' +
      'din partea JobBreeze și ce așteptăm noi de la ' +
      'tine atunci când folosești platforma.',
    'legal.terms.s1Heading': 'Folosirea JobBreeze',
    'legal.terms.s1Body':
      'Ești de acord să folosești JobBreeze doar în ' +
      'scopuri legale, să oferi informații corecte ' +
      'și să îți păstrezi datele de autentificare în ' +
      'siguranță.',
    'legal.terms.s2Heading': 'Conturi',
    'legal.terms.s2Body':
      'Ești responsabil pentru activitatea din ' +
      'contul tău. Anunță-ne imediat dacă bănuiești ' +
      'că altcineva are acces la el.',
    'legal.terms.s3Heading':
      'Anunțuri de job și candidaturi',
    'legal.terms.s3Body':
      'Companiile răspund de corectitudinea ' +
      'rolurilor publicate. Candidații răspund de ' +
      'corectitudinea candidaturilor lor.',
    'legal.terms.s4Heading': 'Limitarea răspunderii',
    'legal.terms.s4Body':
      'JobBreeze conectează candidați și companii, ' +
      'dar nu este parte în niciun contract de ' +
      'muncă încheiat între aceștia.',

    'legal.privacy.title': 'Politica de confidențialitate',
    'legal.privacy.intro':
      'Această politică descrie ce informații ' +
      'colectează JobBreeze și cum sunt folosite ' +
      'pentru a te ajuta să găsești sau să ocupi un ' +
      'rol.',
    'legal.privacy.s1Heading':
      'Informațiile pe care le colectăm',
    'legal.privacy.s1Body':
      'Colectăm informațiile pe care ni le oferi ' +
      'direct, precum detaliile profilului, ' +
      'preferințele de job și mesajele trimise prin ' +
      'platformă.',
    'legal.privacy.s2Heading':
      'Cum folosim informațiile tale',
    'legal.privacy.s2Body':
      'Folosim informațiile tale pentru a te ' +
      'potrivi cu joburi sau candidați relevanți și ' +
      'pentru a menține platforma sigură și ' +
      'funcțională.',
    'legal.privacy.s3Heading': 'Partajarea datelor',
    'legal.privacy.s3Body':
      'Îți partajăm profilul doar cu companiile sau ' +
      'candidații cu care alegi să interacționezi — ' +
      'nu îl vindem niciodată către terți.',
    'legal.privacy.s4Heading': 'Alegerile tale',
    'legal.privacy.s4Body':
      'Poți actualiza sau șterge informațiile din ' +
      'profil oricând, din setările contului.',
  },
};
