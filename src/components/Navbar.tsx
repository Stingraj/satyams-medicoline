import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react';
import medicolineLogo from '../assets/images/medicoline-logo.png';
import { scrollToHashTarget } from '../utils/scroll';

const LOGO_SRC = medicolineLogo;
const CONTACT_EMAIL = 'info@medicolinehealthcare.com';

const navGroups = [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    items: [
      { label: 'Services', to: '/#services' },
      { label: 'Packages', to: '/#packages' },
    ],
  },
  { label: 'ICU@Home', to: '/icu-at-home' },
  {
    label: 'Team',
    items: [
      { label: 'Doctors', to: '/doctors#doctors' },
      { label: 'Our Founder', to: '/about#founder' },
    ],
  },
  {
    label: 'About',
    items: [
      { label: 'About', to: '/about#about' },
      { label: 'Careers', to: '/careers' },
    ],
  },
  { label: 'Contact', to: '/contact#contact' },
] as const;

const mobileNavItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/#services' },
  { label: 'ICU@Home', to: '/icu-at-home' },
  { label: 'Packages', to: '/#packages' },
  { label: 'Doctors', to: '/doctors#doctors' },
  { label: 'Our Founder', to: '/about#founder' },
  { label: 'About', to: '/about#about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact#contact' },
] as const;

type HomeSection = 'home' | 'services' | 'icu' | 'founder' | 'packages' | 'doctors';
type NavLinkItem = { label: string; to: string };

function getHomeSectionFromScroll(): HomeSection {
  const offset = 140;
  const y = window.scrollY + offset;
  const doctorsTop = document.getElementById('doctors')?.offsetTop ?? Infinity;
  const servicesTop = document.getElementById('services')?.offsetTop ?? Infinity;
  const founderTop = document.getElementById('founder')?.offsetTop ?? Infinity;
  const packagesTop = document.getElementById('packages')?.offsetTop ?? Infinity;
  const icuTop = document.getElementById('icu')?.offsetTop ?? Infinity;

  if (y >= doctorsTop) return 'doctors';
  if (y >= packagesTop) return 'packages';
  if (y >= founderTop) return 'founder';
  if (y >= icuTop) return 'icu';
  if (y >= servicesTop) return 'services';
  return 'home';
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [homeSection, setHomeSection] = useState<HomeSection>('home');
  const location = useLocation();
  const isHomeOnly = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    if (!isHomeOnly) return;

    const updateSection = () => setHomeSection(getHomeSectionFromScroll());
    updateSection();

    window.addEventListener('scroll', updateSection, { passive: true });
    window.addEventListener('resize', updateSection);
    window.addEventListener('hashchange', updateSection);

    return () => {
      window.removeEventListener('scroll', updateSection);
      window.removeEventListener('resize', updateSection);
      window.removeEventListener('hashchange', updateSection);
    };
  }, [isHomeOnly]);

  const isLinkActive = (link: NavLinkItem): boolean => {
    const [path, hash] = link.to.split('#');
    const isSamePath = location.pathname === path;

    if (!isSamePath) return false;

    if (isHomeOnly) {
      if (!hash) {
        return homeSection === 'home';
      }
      return homeSection === hash;
    }

    return true;
  };

  const isGroupActive = (group: (typeof navGroups)[number]) =>
    'items' in group ? group.items.some((item) => isLinkActive(item)) : isLinkActive(group);

  const handleLinkClick = (to: string) => {
    setMenuOpen(false);
    setOpenDropdown(null);

    const [path, hash] = to.split('#');
    if (location.pathname === path && hash) {
      scrollToHashTarget(hash, 50);
    }
  };

  const linkClass = (link: NavLinkItem) =>
    `text-sm font-medium transition-colors duration-200 ${
      isLinkActive(link) ? 'text-[#cc0000]' : 'text-gray-600 hover:text-[#cc0000]'
    }`;

  const renderNavLink = (link: NavLinkItem, extraClass = '') => {
    const className = `${linkClass(link)} ${extraClass}`.trim();

    return (
      <Link
        key={link.label}
        to={link.to}
        className={className}
        onClick={() => handleLinkClick(link.to)}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div className="hidden md:flex border-b border-[#e5e5e5] bg-white py-2 text-sm text-[#555555]">
        <div className="max-w-7xl mx-auto flex w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="tel:+917654247569" className="inline-flex items-center gap-2 hover:text-[#1a1a1a]">
            <Phone size={14} strokeWidth={2.1} />
            <span>+91 76542 47569</span>
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 hover:text-[#C0392B]"
          >
            <Mail size={14} strokeWidth={2.1} />
            <span>{CONTACT_EMAIL}</span>
          </a>
        </div>
      </div>

      <div className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link to="/" className="logo flex items-center gap-2.5 flex-shrink-0">
            <div className="h-10 flex items-center shrink-0">
              <img src={LOGO_SRC} alt="Medicoline Healthcare" className="brand-logo" />
            </div>
            <div className="leading-tight">
              <span className="font-extrabold text-[#cc0000] text-[15px] leading-none">Medicoline</span>
              <span className="block text-[9px] text-gray-500 tracking-[0.15em] uppercase leading-none mt-0.5 font-medium">
                Healthcare
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navGroups.map((group) => {
              if (!('items' in group)) return renderNavLink(group);

              const isOpen = openDropdown === group.label;
              const active = isGroupActive(group);

              return (
                <div
                  key={group.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(group.label)}
                  onMouseLeave={() => setOpenDropdown((current) => (current === group.label ? null : current))}
                >
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                      active ? 'text-[#cc0000]' : 'text-gray-600 hover:text-[#cc0000]'
                    }`}
                    onClick={() => setOpenDropdown((current) => (current === group.label ? null : group.label))}
                  >
                    {group.label}
                    <ChevronDown size={15} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Invisible hover tunnel to prevent dropdown from closing when moving mouse from button to menu */}
                  {isOpen && <div className="absolute left-0 right-0 top-full h-2 pointer-events-auto" />}

                  <div
                    className={`absolute left-1/2 top-full z-[999] mt-2 min-w-[200px] -translate-x-1/2 rounded-2xl border border-gray-100 bg-white py-2 text-[#1a1a1a] shadow-[0_18px_38px_rgba(52,12,14,0.28)] transition-all duration-200 ${
                      isOpen ? 'pointer-events-auto translate-y-0 scale-100 opacity-100' : 'pointer-events-none -translate-y-1 scale-95 opacity-0'
                    }`}
                  >
                    {group.items.map((item) => (
                      <div key={item.label} className="px-2">
                        {renderNavLink(item, 'block rounded-xl px-3 py-2 font-bold text-[#1a1a1a] hover:text-[#1a1a1a] hover:bg-[#f5f5f5]')}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden lg:flex nav-right items-center gap-3">
            <Link
              to="/contact"
              className="bg-[#cc0000] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#aa0000] transition-colors duration-200"
              onClick={() => handleLinkClick('/contact')}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Right Action Controls */}
          <div className="flex lg:hidden items-center">
            <button
              className="p-2 text-gray-600 hover:text-[#cc0000] focus:outline-none w-11 h-11 flex items-center justify-center shrink-0"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile Drawer (with smooth slide/fade 300ms transition) */}
      <div
        className={`lg:hidden fixed inset-0 z-[1001] bg-white px-6 py-6 flex flex-col justify-between overflow-y-auto transition-all duration-300 ease-in-out ${
          menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header Row */}
        <div className="flex items-center justify-between">
          <Link to="/" className="logo flex items-center gap-2.5 flex-shrink-0" onClick={() => handleLinkClick('/')}>
            <div className="h-10 flex items-center shrink-0">
              <img src={LOGO_SRC} alt="Medicoline Healthcare" className="brand-logo" />
            </div>
            <div className="leading-tight">
              <span className="font-extrabold text-[#cc0000] text-[15px] leading-none">Medicoline</span>
              <span className="block text-[9px] text-gray-500 tracking-[0.15em] uppercase leading-none mt-0.5 font-medium">
                Healthcare
              </span>
            </div>
          </Link>
          <button
            type="button"
            className="p-2 text-gray-600 hover:text-[#cc0000] focus:outline-none w-11 h-11 flex items-center justify-center"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{ minWidth: '44px', minHeight: '44px' }}
          >
            <X size={28} />
          </button>
        </div>

        {/* Large Navigation Menu Items */}
        <div className="flex-1 flex flex-col justify-center py-8 space-y-6">
          {mobileNavItems.map((item) => (
            <div key={item.label} className="block text-2xl font-bold py-2">
              {renderNavLink(item, 'text-2xl font-bold')}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
