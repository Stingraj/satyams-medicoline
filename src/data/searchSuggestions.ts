export type SearchSuggestion = {
  label: string;
  description: string;
  path: string;
  keywords: string[];
};

export const searchSuggestions: SearchSuggestion[] = [
  {
    label: 'Services',
    description: 'Browse all home healthcare services',
    path: '/services',
    keywords: ['services', 'service', 'home care', 'medical care'],
  },
  {
    label: 'Doctors',
    description: 'Meet our medical team',
    path: '/doctors#doctors',
    keywords: ['doctors', 'doctor', 'medical team', 'consultation'],
  },
  {
    label: 'Nursing Care',
    description: 'Open nursing care services',
    path: '/services#nursing-care',
    keywords: ['nursing', 'nurse', 'home nursing', 'nursing care'],
  },
  {
    label: 'Physiotherapy',
    description: 'Open physiotherapy services',
    path: '/services#physiotherapy',
    keywords: ['physiotherapy', 'physio', 'rehab', 'therapy'],
  },
  {
    label: 'Dietitian',
    description: 'Open dietitian consultations',
    path: '/services#dietitian',
    keywords: ['dietitian', 'diet', 'nutrition', 'wellness'],
  },
  {
    label: 'ICU@Home',
    description: 'View ICU at home care',
    path: '/icu-at-home',
    keywords: ['icu', 'icu@home', 'critical care', 'home icu'],
  },
  {
    label: 'Appointments',
    description: 'Book an appointment',
    path: '/contact#book-appointment',
    keywords: ['appointment', 'book', 'booking', 'schedule'],
  },
  {
    label: 'Contact',
    description: 'Open contact and enquiry section',
    path: '/contact#contact',
    keywords: ['contact', 'location', 'phone', 'map'],
  },
  {
    label: 'Email Directory',
    description: 'Jump to the footer email directory',
    path: '/#email-directory',
    keywords: ['email', 'directory', 'support email', 'founder email'],
  },
  {
    label: 'Careers',
    description: 'See careers and application form',
    path: '/careers#apply',
    keywords: ['careers', 'career', 'jobs', 'apply', 'hiring'],
  },
  {
    label: 'FAQs',
    description: 'Open frequently asked questions',
    path: '/faqs#faq',
    keywords: ['faq', 'faqs', 'questions', 'help'],
  },
  {
    label: 'Partners',
    description: 'View our home page partners section',
    path: '/#our-partners',
    keywords: ['partners', 'partnerships', 'investors', 'our partners'],
  },
  {
    label: 'Support',
    description: 'Open support and appointment contacts',
    path: '/contact#contact',
    keywords: ['support', 'need help', 'help', 'assistance'],
  },
];
