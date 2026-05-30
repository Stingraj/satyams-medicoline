import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import medicolineLogo from '../assets/images/medicoline-logo.png';

const LOGO_SRC = medicolineLogo;
const CONTACT_EMAIL = 'info@medicolinehealthcare.com';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white w-full border-t-4 border-[#C0392B] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Four Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">

          {/* Column 1: Brand & Contacts */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <img
                src={LOGO_SRC}
                alt="Medicoline Healthcare"
                style={{ objectFit: 'cover', maxHeight: '40px' }}
                className="shrink-0"
              />
              <div className="leading-tight">
                <span className="font-heading font-black text-white text-[17px] tracking-tight block">Medicoline</span>
                <span className="block text-[10px] text-gray-400 tracking-[0.15em] uppercase font-body font-medium">Healthcare</span>
              </div>
            </Link>

            <p className="text-gray-300 text-sm italic">“Your Health, Our Priority”</p>

            <div className="space-y-2.5 pt-2">
              <a
                href="tel:+917654247569"
                className="flex items-center gap-2.5 text-gray-300 hover:text-[#C0392B] transition-colors duration-200 text-sm font-medium"
              >
                <Phone size={16} className="text-[#C0392B]" />
                <span>+91 76542 47569</span>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2.5 text-gray-300 hover:text-[#C0392B] transition-colors duration-200 text-sm font-medium break-all"
              >
                <Mail size={16} className="text-[#C0392B]" />
                <span>{CONTACT_EMAIL}</span>
              </a>

              <div className="flex items-center gap-2.5 text-gray-300 text-sm font-medium">
                <MapPin size={16} className="text-[#C0392B] shrink-0" />
                <span>Warangal | Hanamkonda | Kazipet</span>
              </div>
            </div>

            {/* Social Icons row for Column 1 */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/we.medicoline/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#C0392B] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#C0392B] transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#C0392B] transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-base font-bold uppercase tracking-wider mb-5 border-b border-gray-700/50 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/icu-at-home" className="text-gray-300 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  ICU At Home
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  Doctors
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-white text-base font-bold uppercase tracking-wider mb-5 border-b border-gray-700/50 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/#packages" className="text-gray-300 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  Basic Health Checkup
                </Link>
              </li>
              <li>
                <Link to="/#packages" className="text-gray-300 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  Full Body Checkup
                </Link>
              </li>
              <li>
                <Link to="/#packages" className="text-gray-300 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  Senior Citizen Package
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  ECG At Home
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  Nursing Care
                </Link>
              </li>
              <li>
                <Link to="/icu-at-home" className="text-gray-300 hover:text-[#C0392B] transition-colors duration-200 block py-0.5">
                  ICU At Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Working Hours & Social */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold uppercase tracking-wider border-b border-gray-700/50 pb-2 mb-1">
              Working Hours
            </h3>
            <div className="space-y-1.5 text-sm text-gray-300">
              <p className="flex justify-between">
                <span>Monday - Saturday:</span>
                <span className="font-semibold text-white">8AM to 8PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-semibold text-white">9AM to 5PM</span>
              </p>
              <p className="flex justify-between text-[#C0392B] font-bold">
                <span>Emergency Support:</span>
                <span>24/7 Available</span>
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/contact#contact"
                className="w-full text-center block bg-[#C0392B] text-white text-sm font-bold py-2.5 px-4 rounded-xl hover:bg-[#C0392B] transition-colors duration-200 shadow-md"
              >
                Book Appointment
              </Link>
            </div>

            {/* Follow Us Section */}
            <div className="pt-3">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-3">
                Follow Us
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/we.medicoline/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#C0392B] transition-colors duration-200 hover:scale-110 transform"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#C0392B] transition-colors duration-200 hover:scale-110 transform"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#C0392B] transition-colors duration-200 hover:scale-110 transform"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-[rgba(255,255,255,0.1)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs text-center md:text-left">
            &copy; 2026 Medicoline Healthcare. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-400">
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
