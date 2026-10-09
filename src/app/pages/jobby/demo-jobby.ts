import { JobbyChat, JobbyReply } from '../../models/jobby';

export const DEMO_JOBBY_CHATS: JobbyChat[] = [
  {
    id: 'jobby-1',
    title: 'Pregătire interviu Frontend',
    startedAt: '2026-10-06T18:20:00Z',
    messages: [
      {
        id: 'jobby-msg-1',
        sender: 'jobby',
        text:
          'Salut, Robert! Sunt Jobby. Îți cunosc deja ' +
          'profilul. Cu ce te pot ajuta?',
        sentAt: '2026-10-06T18:20:00Z',
      },
      {
        id: 'jobby-msg-2',
        sender: 'me',
        text:
          'Am un interviu tehnic pentru Frontend ' +
          'Engineer la Vela Software. Cum mă pregătesc?',
        sentAt: '2026-10-06T18:21:12Z',
      },
      {
        id: 'jobby-msg-3',
        sender: 'jobby',
        text:
          'Pe baza anunțului, m-aș concentra pe:\n' +
          '1. Angular: componente, signals, change ' +
          'detection\n' +
          '2. TypeScript: tipuri generice și strict mode\n' +
          '3. Un mic exercițiu live, de obicei un ' +
          'formular sau o listă cu filtrare\n\n' +
          'Vrei să facem o simulare de interviu?',
        sentAt: '2026-10-06T18:21:30Z',
      },
      {
        id: 'jobby-msg-4',
        sender: 'me',
        text: 'Da, pune-mi prima întrebare.',
        sentAt: '2026-10-06T18:23:05Z',
      },
      {
        id: 'jobby-msg-5',
        sender: 'jobby',
        text:
          'Perfect! Prima întrebare: care este ' +
          'diferența dintre un signal și un Observable ' +
          'și când ai folosi fiecare?',
        sentAt: '2026-10-06T18:23:20Z',
      },
    ],
  },
  {
    id: 'jobby-2',
    title: 'CV pentru roluri de design',
    startedAt: '2026-10-02T09:10:00Z',
    messages: [
      {
        id: 'jobby-msg-6',
        sender: 'jobby',
        text:
          'Salut, Robert! Sunt Jobby. Îți cunosc deja ' +
          'profilul. Cu ce te pot ajuta?',
        sentAt: '2026-10-02T09:10:00Z',
      },
      {
        id: 'jobby-msg-7',
        sender: 'me',
        text:
          'Vreau să aplic la roluri de UI/UX. Ce ar ' +
          'trebui să schimb în CV?',
        sentAt: '2026-10-02T09:11:40Z',
      },
      {
        id: 'jobby-msg-8',
        sender: 'jobby',
        text:
          'Pentru design, recrutorii se uită întâi la ' +
          'portofoliu. Ți-aș recomanda:\n' +
          '• un link spre portofoliu chiar sub nume\n' +
          '• 2-3 proiecte descrise ca studii de caz: ' +
          'problemă, proces, rezultat\n' +
          '• mai puțin accent pe tehnologii, mai mult ' +
          'pe impact și pe colaborarea cu echipa',
        sentAt: '2026-10-02T09:12:05Z',
      },
    ],
  },
];

export const JOBBY_REPLIES: JobbyReply[] = [
  {
    keywords: ['cv', 'resume', 'curriculum'],
    en:
      'Happy to help with your CV! Keep it to one page, ' +
      'lead every bullet with a result (numbers help) and ' +
      'tailor the top summary to the role. Want me to ' +
      'review a specific section?',
    ro:
      'Te ajut cu plăcere cu CV-ul! Păstrează-l la o ' +
      'pagină, începe fiecare punct cu un rezultat ' +
      '(cifrele ajută) și adaptează rezumatul de sus la ' +
      'rol. Vrei să mă uit pe o anumită secțiune?',
  },
  {
    keywords: ['interview', 'interviu'],
    en:
      'For interviews, prepare 3 short stories using the ' +
      'STAR method (situation, task, action, result), ' +
      'research the company and have 2 questions ready ' +
      'for them. Want to do a mock interview?',
    ro:
      'Pentru interviu, pregătește 3 povești scurte după ' +
      'metoda STAR (situație, sarcină, acțiune, ' +
      'rezultat), documentează-te despre companie și ' +
      'pregătește 2 întrebări pentru ei. Facem o ' +
      'simulare de interviu?',
  },
  {
    keywords: ['salary', 'salariu', 'negoci', 'negotiat'],
    en:
      'For a role like yours, offers in Romania usually ' +
      'range between €2,500 and €4,500 per month. Anchor ' +
      'your ask near the top of that range and back it ' +
      'up with your recent results.',
    ro:
      'Pentru un rol ca al tău, ofertele din România ' +
      'sunt de obicei între 2.500 și 4.500 € pe lună. ' +
      'Pornește negocierea spre partea de sus a ' +
      'intervalului și susține-o cu rezultatele tale ' +
      'recente.',
  },
  {
    keywords: ['job', 'role', 'rol', 'fit', 'potriv'],
    en:
      'Based on your profile, the best matches right now ' +
      'are Frontend Engineer at Vela Software and ' +
      'UX/UI Designer at Northwind Labs. You can find ' +
      'both in Browse.',
    ro:
      'Pe baza profilului tău, cele mai bune potriviri ' +
      'acum sunt Frontend Engineer la Vela Software și ' +
      'UX/UI Designer la Northwind Labs. Le găsești pe ' +
      'amândouă în Explorează.',
  },
  {
    keywords: [],
    en:
      'Good question! I can help with your CV, interview ' +
      'prep, salary negotiation or finding jobs that fit ' +
      'you. What would you like to start with?',
    ro:
      'Bună întrebare! Te pot ajuta cu CV-ul, pregătirea ' +
      'pentru interviu, negocierea salariului sau ' +
      'găsirea joburilor potrivite. Cu ce începem?',
  },
];

export const JOBBY_FILE_REPLY: Omit<
  JobbyReply,
  'keywords'
> = {
  en:
    "Thanks, I've got your file! Tell me what you'd like " +
    'me to look at and I will go through it.',
  ro:
    'Mulțumesc, am primit fișierul! Spune-mi la ce să ' +
    'mă uit și îl parcurg.',
};
