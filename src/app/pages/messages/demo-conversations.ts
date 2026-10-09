import { Conversation } from '../../models/conversation';

export const DEMO_CONVERSATIONS: Conversation[] = [
  {
    id: 'conv-1',
    applicationId: 'app-13',
    company: 'FinPulse',
    avatarInitials: 'F',
    jobTitle: 'Full-stack Developer',
    messages: [
      {
        id: 'msg-1',
        sender: 'company',
        text:
          'Salut Robert, suntem FinPulse. Avem un rol ' +
          'full-stack care ți s-ar potrivi. Îți trimitem ' +
          'un mic exercițiu tehnic?',
        sentAt: '2026-10-03T10:08:34Z',
      },
      {
        id: 'msg-2',
        sender: 'me',
        text: 'Salut! Sigur, abia aștept.',
        sentAt: '2026-10-03T12:15:02Z',
      },
      {
        id: 'msg-3',
        sender: 'company',
        text:
          'Perfect! Exercițiul e un mic API REST cu un ' +
          'frontend Angular. Ai la dispoziție 5 zile. ' +
          'Îți trimitem linkul pe email.',
        sentAt: '2026-10-03T12:40:47Z',
      },
      {
        id: 'msg-4',
        sender: 'me',
        text:
          'Am primit emailul, mulțumesc. Pot folosi ' +
          'orice bază de date?',
        sentAt: '2026-10-03T16:02:19Z',
      },
      {
        id: 'msg-5',
        sender: 'company',
        text:
          'Da, alegerea e a ta. Ne interesează mai mult ' +
          'structura codului și testele.',
        sentAt: '2026-10-04T08:31:55Z',
      },
      {
        id: 'msg-6',
        sender: 'me',
        text:
          'Am terminat exercițiul și l-am urcat pe ' +
          'GitHub.\nAm adăugat și un README cu pașii ' +
          'de rulare.',
        sentAt: '2026-10-07T21:27:28Z',
      },
      {
        id: 'msg-7',
        sender: 'company',
        text:
          'Mulțumim, Robert! Echipa tehnică se uită ' +
          'mâine și revenim cu feedback.',
        sentAt: '2026-10-08T07:45:10Z',
      },
    ],
  },
  {
    id: 'conv-2',
    applicationId: 'app-14',
    company: 'PixelForge Studio',
    avatarInitials: 'PS',
    jobTitle: 'UI/UX Designer',
    messages: [
      {
        id: 'msg-8',
        sender: 'company',
        text:
          'Bună! Ne-a plăcut portofoliul tău. Ai timp ' +
          'de un call de 30 de minute săptămâna asta?',
        sentAt: '2026-10-01T14:12:05Z',
      },
      {
        id: 'msg-9',
        sender: 'me',
        text: 'Bună! Da, cu plăcere. Ce zile vă convin?',
        sentAt: '2026-10-01T18:40:51Z',
      },
      {
        id: 'msg-10',
        sender: 'company',
        text: 'Marți sau miercuri dimineața. Alege tu!',
        sentAt: '2026-10-02T09:03:17Z',
      },
      {
        id: 'msg-11',
        sender: 'me',
        text: 'Marți la 10:00 ar fi perfect.',
        sentAt: '2026-10-02T09:20:44Z',
      },
      {
        id: 'msg-12',
        sender: 'company',
        text:
          'Super, ți-am trimis invitația în calendar. ' +
          'Ne vedem pe Google Meet!',
        sentAt: '2026-10-02T09:26:30Z',
      },
    ],
  },
  {
    id: 'conv-3',
    applicationId: 'app-10',
    company: 'NovaTech Solutions',
    avatarInitials: 'NS',
    jobTitle: 'QA Automation Intern',
    messages: [
      {
        id: 'msg-13',
        sender: 'company',
        text:
          'Salut! Mulțumim pentru aplicare. Te-am ' +
          'preselectat pentru internship-ul de QA ' +
          'Automation.',
        sentAt: '2026-09-27T11:20:00Z',
      },
      {
        id: 'msg-14',
        sender: 'me',
        text: 'Mulțumesc mult! Care sunt următorii pași?',
        sentAt: '2026-09-27T13:05:12Z',
      },
      {
        id: 'msg-15',
        sender: 'company',
        text:
          'Urmează un interviu scurt cu team leadul ' +
          'de QA. Ai experiență cu Cypress sau ' +
          'Playwright?',
        sentAt: '2026-09-28T10:14:38Z',
      },
      {
        id: 'msg-16',
        sender: 'me',
        text:
          'Am lucrat cu Playwright într-un proiect ' +
          'personal, iar Cypress l-am folosit la facultate.',
        sentAt: '2026-09-28T11:02:09Z',
      },
    ],
  },
  {
    id: 'conv-4',
    applicationId: 'app-12',
    company: 'GreenWave Energy',
    avatarInitials: 'GE',
    jobTitle: 'Data Analyst',
    messages: [
      {
        id: 'msg-17',
        sender: 'company',
        text:
          'Felicitări, Robert! Ne bucurăm să-ți ' +
          'confirmăm că ai fost acceptat pentru rolul ' +
          'de Data Analyst.',
        sentAt: '2026-10-06T09:00:00Z',
      },
      {
        id: 'msg-18',
        sender: 'me',
        text: 'Ce veste bună! Vă mulțumesc foarte mult!',
        sentAt: '2026-10-06T09:12:33Z',
      },
      {
        id: 'msg-19',
        sender: 'company',
        text:
          'Îți trimitem oferta și contractul până ' +
          'vineri. Prima zi ar fi pe 2 noiembrie, ' +
          'îți convine?',
        sentAt: '2026-10-06T10:30:21Z',
      },
      {
        id: 'msg-20',
        sender: 'me',
        text: 'Da, 2 noiembrie e perfect.',
        sentAt: '2026-10-06T11:47:05Z',
      },
    ],
  },
  {
    id: 'conv-5',
    applicationId: 'app-11',
    company: 'MediCore Health',
    avatarInitials: 'MH',
    jobTitle: 'Customer Support Specialist',
    messages: [
      {
        id: 'msg-21',
        sender: 'company',
        text:
          'Bună ziua! Am văzut aplicarea ta. Rolul este ' +
          'complet remote, în tura de zi. Ești ' +
          'disponibil pentru un scurt apel telefonic?',
        sentAt: '2026-09-22T15:33:48Z',
      },
    ],
  },
  {
    id: 'conv-6',
    applicationId: 'app-1',
    company: 'Overpoly',
    avatarInitials: 'O',
    jobTitle: 'Senior Developer',
    messages: [
      {
        id: 'msg-22',
        sender: 'me',
        text:
          'Bună ziua! Am aplicat pentru rolul de Senior ' +
          'Developer și voiam să întreb dacă poziția ' +
          'permite și lucrul hibrid.',
        sentAt: '2026-10-07T17:05:00Z',
      },
      {
        id: 'msg-23',
        sender: 'company',
        text:
          'Bună, Robert! Da, lucrăm hibrid: 2 zile pe ' +
          'săptămână la birou în București.',
        sentAt: '2026-10-08T08:10:26Z',
      },
    ],
  },
  {
    id: 'conv-7',
    applicationId: 'app-9',
    company: 'NovaTech Solutions',
    avatarInitials: 'NS',
    jobTitle: 'Senior React Developer',
    messages: [
      {
        id: 'msg-24',
        sender: 'company',
        text:
          'Salut, Robert! Sunt Ioana, recruiter la ' +
          'NovaTech. Profilul tău ne-a atras atenția ' +
          'pentru poziția de Senior React Developer.',
        sentAt: '2026-09-29T08:45:12Z',
      },
      {
        id: 'msg-25',
        sender: 'me',
        text:
          'Bună, Ioana! Mulțumesc pentru mesaj. Îmi ' +
          'poți spune mai multe despre echipă?',
        sentAt: '2026-09-29T10:02:40Z',
      },
      {
        id: 'msg-26',
        sender: 'company',
        text:
          'Echipa are 6 developeri și lucrează la o ' +
          'platformă de e-commerce folosită în 4 țări. ' +
          'Stack-ul e React, TypeScript și Node.js.',
        sentAt: '2026-09-29T10:20:05Z',
      },
      {
        id: 'msg-27',
        sender: 'me',
        text: 'Sună interesant! Ce beneficii oferiți?',
        sentAt: '2026-09-29T11:48:33Z',
      },
      {
        id: 'msg-28',
        sender: 'company',
        text:
          'Avem asigurare medicală privată, 25 de zile ' +
          'de concediu, buget anual de training și ' +
          'program flexibil.',
        sentAt: '2026-09-29T12:10:59Z',
      },
      {
        id: 'msg-29',
        sender: 'me',
        text:
          'Foarte bine. Care ar fi pașii procesului ' +
          'de recrutare?',
        sentAt: '2026-09-29T13:31:20Z',
      },
      {
        id: 'msg-30',
        sender: 'company',
        text:
          'Sunt 3 etape:\n1. Discuție cu HR (30 min)\n' +
          '2. Interviu tehnic (1h30)\n' +
          '3. Discuție finală cu CTO-ul',
        sentAt: '2026-09-29T14:02:47Z',
      },
      {
        id: 'msg-31',
        sender: 'me',
        text: 'Perfect, putem începe cu prima etapă.',
        sentAt: '2026-09-30T07:55:16Z',
      },
      {
        id: 'msg-32',
        sender: 'company',
        text:
          'Super! Joi la 15:00 îți convine pentru ' +
          'discuția cu HR?',
        sentAt: '2026-09-30T09:18:08Z',
      },
      {
        id: 'msg-33',
        sender: 'me',
        text: 'Da, joi la 15:00 e în regulă. Mulțumesc!',
        sentAt: '2026-09-30T09:40:51Z',
      },
    ],
  },
  {
    id: 'conv-8',
    applicationId: 'app-3',
    company: 'GreenWave Energy',
    avatarInitials: 'GE',
    jobTitle: 'Inginer IoT',
    messages: [
      {
        id: 'msg-34',
        sender: 'company',
        text:
          'Bună, Robert! Am văzut că ai aplicat și ' +
          'pentru rolul de Inginer IoT. Ai lucrat ' +
          'până acum cu senzori sau microcontrolere?',
        sentAt: '2026-10-05T13:22:10Z',
      },
      {
        id: 'msg-35',
        sender: 'me',
        text:
          'Da, am lucrat cu ESP32 și Raspberry Pi ' +
          'pentru un proiect de monitorizare a ' +
          'temperaturii.',
        sentAt: '2026-10-05T15:40:02Z',
      },
      {
        id: 'msg-36',
        sender: 'company',
        text:
          'Foarte bine! Poți să ne trimiți un link ' +
          'către proiect?',
        sentAt: '2026-10-05T16:05:44Z',
      },
    ],
  },
  {
    id: 'conv-9',
    applicationId: 'app-8',
    company: 'PixelForge Studio',
    avatarInitials: 'PS',
    jobTitle: 'Flutter Developer',
    messages: [
      {
        id: 'msg-37',
        sender: 'company',
        text:
          'Salut! Căutăm un Flutter Developer pentru o ' +
          'aplicație de fitness. Ai publicat aplicații ' +
          'în App Store sau Google Play?',
        sentAt: '2026-09-24T09:12:30Z',
      },
      {
        id: 'msg-38',
        sender: 'me',
        text:
          'Bună! Am o aplicație publicată în Google ' +
          'Play, un tracker de cheltuieli făcut în ' +
          'Flutter.',
        sentAt: '2026-09-24T12:33:17Z',
      },
      {
        id: 'msg-39',
        sender: 'company',
        text:
          'Excelent! Ne-ar plăcea să o vedem. Revenim ' +
          'cu detalii despre interviu.',
        sentAt: '2026-09-24T14:50:03Z',
      },
      {
        id: 'msg-40',
        sender: 'me',
        text: 'Mulțumesc, aștept cu interes!',
        sentAt: '2026-09-24T15:01:29Z',
      },
    ],
  },
  {
    id: 'conv-10',
    applicationId: 'app-15',
    company: 'FinPulse',
    avatarInitials: 'F',
    jobTitle: 'Security Engineer',
    messages: [
      {
        id: 'msg-41',
        sender: 'company',
        text:
          'Bună, Robert! Îți mulțumim pentru interesul ' +
          'arătat. Din păcate, am ales un candidat cu ' +
          'mai multă experiență în securitate.',
        sentAt: '2026-09-02T10:15:00Z',
      },
      {
        id: 'msg-42',
        sender: 'me',
        text:
          'Înțeleg, mulțumesc pentru răspuns! Aș ' +
          'aprecia orice feedback.',
        sentAt: '2026-09-02T11:30:45Z',
      },
      {
        id: 'msg-43',
        sender: 'company',
        text:
          'Sigur! Ți-ar prinde bine o certificare ' +
          'precum Security+ sau CEH. Te încurajăm să ' +
          'aplici din nou în viitor.',
        sentAt: '2026-09-03T08:05:22Z',
      },
    ],
  },
  {
    id: 'conv-11',
    applicationId: 'app-4',
    company: 'MediCore Health',
    avatarInitials: 'MH',
    jobTitle: 'HR Business Partner',
    messages: [
      {
        id: 'msg-44',
        sender: 'me',
        text:
          'Bună ziua! Aș dori să știu dacă poziția de ' +
          'HR Business Partner mai este disponibilă.',
        sentAt: '2026-09-30T18:20:00Z',
      },
      {
        id: 'msg-45',
        sender: 'company',
        text:
          'Bună ziua! Da, poziția este încă deschisă. ' +
          'Analizăm aplicațiile până la sfârșitul ' +
          'lunii.',
        sentAt: '2026-10-01T07:42:13Z',
      },
    ],
  },
  {
    id: 'conv-12',
    applicationId: 'app-2',
    company: 'Overpoly',
    avatarInitials: 'O',
    jobTitle: 'UX/UI Designer',
    messages: [
      {
        id: 'msg-46',
        sender: 'company',
        text:
          'Salut! Pentru rolul de UX/UI Designer, ne ' +
          'poți trimite 2-3 studii de caz din ' +
          'portofoliu?',
        sentAt: '2026-10-07T12:00:41Z',
      },
      {
        id: 'msg-47',
        sender: 'me',
        text:
          'Sigur! Vă trimit diseară un PDF cu trei ' +
          'proiecte: o aplicație bancară, un ' +
          'dashboard și un site de e-commerce.',
        sentAt: '2026-10-07T13:15:09Z',
      },
    ],
  },
  {
    id: 'conv-13',
    applicationId: 'app-7',
    company: 'GreenWave Energy',
    avatarInitials: 'GE',
    jobTitle: 'DevOps Engineer',
    messages: [
      {
        id: 'msg-48',
        sender: 'company',
        text:
          'Salut, Robert! Ai experiență cu Kubernetes ' +
          'și pipeline-uri CI/CD?',
        sentAt: '2026-09-26T09:30:00Z',
      },
      {
        id: 'msg-49',
        sender: 'me',
        text:
          'Bună! Am folosit GitHub Actions și Docker ' +
          'zilnic. Cu Kubernetes am lucrat mai puțin, ' +
          'dar învăț repede.',
        sentAt: '2026-09-26T11:14:52Z',
      },
      {
        id: 'msg-50',
        sender: 'company',
        text:
          'Mulțumim! Vom discuta în echipă și revenim ' +
          'cât de curând.',
        sentAt: '2026-09-26T14:47:36Z',
      },
    ],
  },
  {
    id: 'conv-14',
    applicationId: 'app-5',
    company: 'PixelForge Studio',
    avatarInitials: 'PS',
    jobTitle: 'Motion Designer',
    messages: [
      {
        id: 'msg-51',
        sender: 'company',
        text:
          'Bună! Am primit aplicația pentru Motion ' +
          'Designer. Lucrezi în After Effects?',
        sentAt: '2026-10-04T10:10:10Z',
      },
    ],
  },
];
