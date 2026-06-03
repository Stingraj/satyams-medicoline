import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import medicolineLogo from '../assets/images/medicoline-logo.png';

const LOGO_SRC = medicolineLogo;
const CONTACT_EMAIL = 'info@medicolinehealthcare.com';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 w-full border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Four Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">

          {/* Column 1: Brand & Contacts */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <img
                src={LOGO_SRC}
                alt="Medicoline Healthcare logo"
                style={{ objectFit: 'cover', maxHeight: '40px' }}
                className="shrink-0"
                loading="lazy"
                decoding="async"
              />
              <div className="leading-tight">
                <span className="font-heading font-black text-[#1F2937] text-[17px] tracking-tight block">Medicoline</span>
                <span className="block text-[10px] text-gray-500 tracking-[0.15em] uppercase font-body font-medium">Healthcare</span>
              </div>
            </Link>

            <p className="text-gray-600 text-sm italic">Medicoline Healthcare | Your Health, Our Priority</p>

            <div className="space-y-2.5 pt-2">
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
                <span>Warangal | Hanamkonda | Kazipet, Telangana</span>
              </div>
            </div>

            {/* Social Icons row for Column 1 */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/we.medicoline/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#C0392B] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#C0392B] transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#C0392B] transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
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

          {/* Column 3: Our Services */}
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

          {/* Column 4: Email Directory & Support */}
          <div id="email-directory" className="space-y-4 rounded-[1.75rem] bg-white border border-gray-200 p-6 text-[#1F2937] shadow-sm">
            <h3 className="mb-1 border-b border-gray-200 pb-2 text-base font-bold uppercase tracking-wider text-[#1F2937]">
              Email Directory
            </h3>
            <div className="space-y-2.5 text-sm text-[#4B5563]">
              <p className="leading-relaxed">
                <span className="text-gray-500 text-xs uppercase font-semibold">Website:</span>
                <br />
                <a href="https://www.medicolinehealthcare.com" className="text-[#C0392B] hover:text-[#8F2D22] hover:underline break-all font-medium">
                  www.medicolinehealthcare.com
                </a>
              </p>
              <p className="leading-relaxed">
                <span className="text-gray-500 text-xs uppercase font-semibold">Info:</span>
                <br />
                <a href="mailto:info@medicolinehealthcare.com" className="text-[#C0392B] hover:text-[#8F2D22] hover:underline break-all font-medium">
                  info@medicolinehealthcare.com
                </a>
              </p>
              <p className="leading-relaxed">
                <span className="text-gray-500 text-xs uppercase font-semibold">Founder:</span>
                <br />
                <a href="mailto:founder@medicolinehealthcare.com" className="text-[#C0392B] hover:text-[#8F2D22] hover:underline break-all font-medium">
                  founder@medicolinehealthcare.com
                </a>
              </p>
              <p className="leading-relaxed">
                <span className="text-gray-500 text-xs uppercase font-semibold">Support:</span>
                <br />
                <a href="mailto:support@medicolinehealthcare.com" className="text-[#C0392B] hover:text-[#8F2D22] hover:underline break-all font-medium">
                  support@medicolinehealthcare.com
                </a>
              </p>
              <p className="leading-relaxed">
                <span className="text-gray-500 text-xs uppercase font-semibold">Careers:</span>
                <br />
                <a href="mailto:careers@medicolinehealthcare.com" className="text-[#C0392B] hover:text-[#8F2D22] hover:underline break-all font-medium">
                  careers@medicolinehealthcare.com
                </a>
              </p>
            </div>

            <div className="border-t border-gray-200 pt-2">
              <p className="flex items-center justify-between text-sm text-[#C0392B] font-bold">
                <span>Emergency Support:</span>
                <span className="text-gray-600">24/7 Available</span>
              </p>
            </div>

            <div className="pt-3">
              <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#1F2937]">
                Follow Us
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/we.medicoline/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform text-gray-500 transition-colors duration-200 hover:scale-110 hover:text-[#C0392B]"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="transform text-gray-500 transition-colors duration-200 hover:scale-110 hover:text-[#C0392B]"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="transform text-gray-500 transition-colors duration-200 hover:scale-110 hover:text-[#C0392B]"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; 2026 Medicoline Healthcare LLP. All Rights Reserved.
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
