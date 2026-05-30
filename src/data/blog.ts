export interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  imageBgColor: string; // Used for a colorful premium gradient placeholder if there is no image
}

export const blogPosts: BlogPost[] = [
  {
    id: 'elderly-care-tips',
    category: 'Elderly Care',
    title: '10 Essential Tips for Elderly Care at Home',
    excerpt: 'Caring for our elders requires patience, love, and a structured healthcare routine. Discover how to create a safe, supportive environment for senior citizens at home.',
    date: 'May 28, 2026',
    imageBgColor: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)',
  },
  {
    id: 'understanding-icu-at-home',
    category: 'ICU Care',
    title: 'Understanding ICU at Home: What Families Need to Know',
    excerpt: 'Setting up a critical care unit at home can be overwhelming. Learn about the essential medical equipment, nursing care, and monitoring required for an home ICU.',
    date: 'May 20, 2026',
    imageBgColor: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
  },
  {
    id: 'importance-of-checkups',
    category: 'Wellness',
    title: 'The Importance of Regular Health Checkups',
    excerpt: 'Preventive healthcare is the key to a long, healthy life. Find out why regular blood tests and body checkups are crucial, even when you feel completely fine.',
    date: 'May 15, 2026',
    imageBgColor: 'linear-gradient(135deg, #fdfbf7 0%, #e1e9c5 100%)',
  },
  {
    id: 'managing-chronic-diseases',
    category: 'Medical Care',
    title: 'Managing Chronic Diseases in the Comfort of Your Home',
    excerpt: 'From diabetes to hypertension, chronic health conditions can be effectively managed at home with the right professional medical guidance and nursing support.',
    date: 'May 10, 2026',
    imageBgColor: 'linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)',
  },
];
