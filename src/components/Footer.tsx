import { Link } from 'react-router-dom';
import { Clock3, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ShieldCheck } from 'lucide-react';

const LOGO_SRC = '/images/medicoline-logo-full.png';
const CONTACT_EMAIL = 'info@medicolinehealthcare.com';

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-[#E7D9D6] bg-[#FBF9F8] text-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-8 grid grid-cols-1 items-start gap-8 md:mb-10 md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr_0.9fr] lg:gap-10">

          <div className="space-y-5">
            <Link to="/" className="inline-flex" aria-label="Medicoline home">
              <img
                src={LOGO_SRC}
                alt="Medicoline Healthcare logo"
                className="h-auto w-full max-w-[260px] shrink-0 object-contain sm:max-w-[300px]"
                loading="lazy"
                decoding="async"
              />
            </Link>

            <p className="max-w-xs text-sm leading-6 text-gray-600">
              Medicoline Healthcare | Your Health, Our Priority
            </p>

            <div className="space-y-3 pt-1">
              <a
                href="tel:+917654247569"
                className="flex items-center gap-2.5 text-gray-600 hover:text-[#C0392B] transition-colors duration-200 text-sm font-medium"
              >
                <Phone size={16} className="text-[#C0392B]" />
                <span>+91 7654247569</span>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2.5 text-gray-600 hover:text-[#C0392B] transition-colors duration-200 text-sm font-medium break-all"
              >
                <Mail size={16} className="text-[#C0392B]" />
                <span>{CONTACT_EMAIL}</span>
              </a>

              <div className="flex items-center gap-2.5 text-gray-600 text-sm font-medium">
                <MapPin size={16} className="text-[#C0392B] shrink-0" />
                <span>Warangal | Hanamkonda | Kazipet</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/we.medicoline/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7D9D6] bg-white text-gray-600 transition-colors duration-200 hover:border-[#C0392B] hover:text-[#C0392B]"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/we.medicoline/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7D9D6] bg-white text-gray-600 transition-colors duration-200 hover:border-[#C0392B] hover:text-[#C0392B]"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://in.linkedin.com/company/medicolinehealthcare"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7D9D6] bg-white text-gray-600 transition-colors duration-200 hover:border-[#C0392B] hover:text-[#C0392B]"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E7D9D6] bg-white px-3 py-1.5 text-xs font-semibold text-[#1F2937]">
                <ShieldCheck size={14} className="text-[#C0392B]" />
                Emergency Support
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E7D9D6] bg-white px-3 py-1.5 text-xs font-semibold text-[#1F2937]">
                <Clock3 size={14} className="text-[#C0392B]" />
                24/7 Available
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-[#C0392B] text-base font-bold uppercase tracking-wider mb-5 border-b border-gray-200 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/icu-at-home" className="text-gray-600 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  ICU At Home
                </Link>
              </li>
              <li>
                <Link to="/investors-partners" className="text-gray-600 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  Investors & Partners
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-600 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#C0392B] text-base font-bold uppercase tracking-wider mb-5 border-b border-gray-200 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services#nursing-care" className="text-gray-600 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  Nursing Care
                </Link>
              </li>
              <li>
                <Link to="/services#doctor-consultation" className="text-gray-600 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  Doctor Consultation
                </Link>
              </li>
              <li>
                <Link to="/services#ecg-at-home" className="text-gray-600 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  ECG At Home
                </Link>
              </li>
              <li>
                <Link to="/services#physiotherapy" className="text-gray-600 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  Physiotherapy
                </Link>
              </li>
              <li>
                <Link to="/services#lab-collection" className="text-gray-600 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  Lab Tests at Home
                </Link>
              </li>
              <li>
                <Link to="/icu-at-home" className="text-gray-600 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  ICU At Home
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-5 md:flex-row md:pt-6">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; 2026 Medicoline Healthcare. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <Link to="/privacy-policy" className="hover:text-[#C0392B] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-[#C0392B] transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
