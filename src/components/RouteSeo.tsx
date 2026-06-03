import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Medicoline Healthcare';
const SITE_URL = 'https://www.medicolinehealthcare.com';
const DEFAULT_IMAGE = `${SITE_URL}/assets/images/1st-time-in-city.png`;

type SeoConfig = {
  title: string;
  description: string;
  path: string;
  schemaName?: string;
};

const pageSeo: Record<string, SeoConfig> = {
  '/': {
    title: 'Home Healthcare Services in Warangal | Medicoline Healthcare',
    description:
      'Book trusted home healthcare services in Warangal, Hanamkonda, and Kazipet including nursing care, physiotherapy, doctor visits, diagnostics, and ICU at home.',
    path: '/',
    schemaName: 'Home',
  },
  '/about': {
    title: 'About Medicoline Healthcare | Professional Home Care in Warangal',
    description:
      'Learn about Medicoline Healthcare, our mission, vision, clinical standards, and the team delivering compassionate home healthcare across Warangal, Hanamkonda, and Kazipet.',
    path: '/about',
    schemaName: 'About',
  },
  '/services': {
    title: 'Home Healthcare Services | Nursing, Physiotherapy, Diagnostics & More',
    description:
      'Explore Medicoline Healthcare services including nursing care, doctor consultation, ECG at home, physiotherapy, dietitian support, lab collection, equipment rental, and emergency backup.',
    path: '/services',
    schemaName: 'Services',
  },
  '/doctors': {
    title: 'Our Medical Team | 20+ Doctors and Specialists | Medicoline Healthcare',
    description:
      'Meet all our certified doctors, medical experts, and care specialists supporting Medicoline Home Healthcare services in Warangal, Hanamkonda, and Kazipet.',
    path: '/doctors',
    schemaName: 'Doctors',
  },
  '/founders': {
    title: "Founder’s Page | Satyam Suman | Medicoline Healthcare",
    description:
      'Read about Satyam Suman, Founder and Managing Director of Medicoline Healthcare, his healthcare experience, vision, and leadership journey.',
    path: '/founders',
    schemaName: "Founder's Page",
  },
  '/icu-at-home': {
    title: 'ICU at Home Services in Warangal | Medicoline Healthcare',
    description:
      'Access ICU at Home services with critical care setup, trained ICU nurses, oxygen support, patient monitoring, ventilator care, and doctor supervision at home.',
    path: '/icu-at-home',
    schemaName: 'ICU at Home',
  },
  '/investors-partners': {
    title: 'Investors & Partners | Medicoline Healthcare',
    description:
      'Discover partnership and investment opportunities with Medicoline Healthcare, including growth vision, market opportunity, financial outlook, and strategic collaboration.',
    path: '/investors-partners',
    schemaName: 'Investors and Partners',
  },
  '/careers': {
    title: 'Careers at Medicoline Healthcare | Join Our Home Healthcare Team',
    description:
      'Apply for careers at Medicoline Healthcare in nursing, physiotherapy, diagnostics, care coordination, and allied healthcare services across Warangal, Hanamkonda, and Kazipet.',
    path: '/careers',
    schemaName: 'Careers',
  },
  '/blog': {
    title: 'Health & Wellness Blog | Medicoline Healthcare',
    description:
      'Stay updated with medical articles, wellness tips, home healthcare guides, and clinical insights written by Medicoline doctors and nursing specialists.',
    path: '/blog',
    schemaName: 'Blog',
  },
  '/faqs': {
    title: 'FAQs, Reviews & Patient Stories | Medicoline Healthcare',
    description:
      'Find answers to common questions, explore patient reviews, and learn how Medicoline Healthcare supports families with reliable home healthcare services.',
    path: '/faqs',
    schemaName: 'FAQs',
  },
  '/contact': {
    title: 'Contact Medicoline Healthcare | Book Appointments & Home Care Support',
    description:
      'Contact Medicoline Healthcare to book appointments, request home healthcare services, ask support questions, or connect with our team in Warangal, Hanamkonda, and Kazipet.',
    path: '/contact',
    schemaName: 'Contact',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Medicoline Healthcare',
    description:
      'Read the Medicoline Healthcare Privacy Policy to understand how we collect, use, protect, and handle your personal and medical information.',
    path: '/privacy-policy',
    schemaName: 'Privacy Policy',
  },
  '/terms-of-service': {
    title: 'Terms of Service | Medicoline Healthcare',
    description:
      'Review the Terms of Service for using the Medicoline Healthcare website, booking home care services, appointments, and consultations.',
    path: '/terms-of-service',
    schemaName: 'Terms of Service',
  },
};

const defaultSeo = pageSeo['/'];

function upsertMeta(selector: string, attributes: Record<string, string>, content: string) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(selector: string, rel: string, href: string) {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

export default function RouteSeo() {
  const location = useLocation();

  useEffect(() => {
    const seo = pageSeo[location.pathname] || defaultSeo;
    const canonicalUrl = `${SITE_URL}${seo.path}`;

    document.title = seo.title;

    upsertMeta('meta[name="description"]', { name: 'description' }, seo.description);
    upsertMeta('meta[name="robots"]', { name: 'robots' }, 'index, follow, max-image-preview:large');
    upsertMeta('meta[property="og:type"]', { property: 'og:type' }, 'website');
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name' }, SITE_NAME);
    upsertMeta('meta[property="og:title"]', { property: 'og:title' }, seo.title);
    upsertMeta('meta[property="og:description"]', { property: 'og:description' }, seo.description);
    upsertMeta('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl);
    upsertMeta('meta[property="og:image"]', { property: 'og:image' }, DEFAULT_IMAGE);
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt' }, 'Medicoline Healthcare home healthcare services');
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, seo.title);
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, seo.description);
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, DEFAULT_IMAGE);
    upsertLink('link[rel="canonical"]', 'canonical', canonicalUrl);

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: SITE_NAME,
      url: canonicalUrl,
      image: DEFAULT_IMAGE,
      logo: `${SITE_URL}/medicoline-logo.png`,
      description: seo.description,
      telephone: '+91 7654247569',
      email: 'info@medicolinehealthcare.com',
      areaServed: ['Warangal', 'Hanamkonda', 'Kazipet', 'Telangana'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Warangal',
        addressRegion: 'Telangana',
        addressCountry: 'IN',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          telephone: '+91 7654247569',
          email: 'support@medicolinehealthcare.com',
          areaServed: 'IN',
          availableLanguage: ['en', 'te'],
        },
      ],
      sameAs: ['https://www.instagram.com/we.medicoline/'],
      department: seo.schemaName,
    };

    let schemaTag = document.head.querySelector('script[data-seo-schema="medical-business"]') as HTMLScriptElement | null;
    if (!schemaTag) {
      schemaTag = document.createElement('script');
      schemaTag.type = 'application/ld+json';
      schemaTag.dataset.seoSchema = 'medical-business';
      document.head.appendChild(schemaTag);
    }
    schemaTag.textContent = JSON.stringify(schema);
  }, [location.pathname]);

  return null;
}
