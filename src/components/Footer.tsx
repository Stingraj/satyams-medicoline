import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import medicolineLogo from '../assets/images/medicoline-logo.png';

const LOGO_SRC = medicolineLogo;
const CONTACT_EMAIL = 'info@medicolinehealthcare.com';

export default function Footer() {
  return (
    <footer className="bg-[#07122b] text-white">
      <div className="border-t-4 border-[#e30000]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center space-y-4 mb-8">
          <Link to="/" className="inline-flex items-center gap-2.5">
            <div className="h-10 flex items-center shrink-0">
              <img
                src={LOGO_SRC}
                alt="Medicoline Healthcare"
                className="brand-logo"
              />
            </div>
            <div>
              <span className="font-extrabold text-white text-[15px] leading-none">Medicoline</span>
              <span className="block text-[9px] text-gray-300 tracking-[0.15em] uppercase leading-none mt-0.5 font-medium">Healthcare</span>
            </div>
          </Link>

          <div>
            <p className="text-white font-semibold mb-2">Medicoline Healthcare</p>
            <p className="text-gray-300 text-sm mb-3">Your Health, Our Priority</p>
          </div>

          <div className="space-y-1">
            <a href="tel:+917654247569" className="block text-[#e30000] font-semibold hover:text-[#ff3333] transition-colors">
              +91-7654247569
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-[#e30000] font-semibold hover:text-[#C0392B] transition-colors"
            >
              <Mail size={16} strokeWidth={2} />
              <span>{CONTACT_EMAIL}</span>
            </a>
            <p className="text-gray-300 text-sm">
              Warangal | Hanamkonda | Kazipet
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Medicoline Healthcare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
