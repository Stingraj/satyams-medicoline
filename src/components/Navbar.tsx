import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, MessageSquare, Phone, X } from 'lucide-react';
import medicolineLogo from '../assets/images/medicoline-logo.png';

const FEEDBACK_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf_aVSCQif-5izo9gJFAnk9tBr2QjKKvpSQJfELdsR5h6veQA/viewform';

const navItems = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT US', to: '/about' },
  { label: 'SERVICES', to: '/services' },
  { label: "FOUNDER'S PAGE", to: '/founders' },
  { label: 'ICU@HOME', to: '/icu-at-home' },
  { label: 'INVESTORS & PARTNERS', to: '/investors-partners' },
  { label: 'CAREERS', to: '/careers' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'CONTACT', to: '/contact' },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [helpPopupStyle, setHelpPopupStyle] = useState<{ top: number; left: number; width: number } | null>(null);
  const location = useLocation();
  const helpTriggerRef = useRef<HTMLButtonElement | null>(null);
  const helpPopupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setHelpOpen(false);
  }, [location]);

  useEffect(() => {
    if (!helpOpen) {
      return;
    }

    const updatePopupPosition = () => {
      const triggerRect = helpTriggerRef.current?.getBoundingClientRect();
      if (!triggerRect) {
        return;
      }

      const popupWidth = window.innerWidth < 640 ? Math.min(window.innerWidth - 24, 350) : 350;
      const left = Math.min(
        Math.max(12, triggerRect.right - popupWidth),
        window.innerWidth - popupWidth - 12,
      );
      const top = triggerRect.bottom + 12;

      setHelpPopupStyle({ top, left, width: popupWidth });
    };

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        helpTriggerRef.current?.contains(target) ||
        helpPopupRef.current?.contains(target)
      ) {
        return;
      }

      setHelpOpen(false);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setHelpOpen(false);
      }
    };

    updatePopupPosition();
    window.addEventListener('resize', updatePopupPosition);
    window.addEventListener('scroll', updatePopupPosition, true);
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('resize', updatePopupPosition);
      window.removeEventListener('scroll', updatePopupPosition, true);
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [helpOpen]);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }

    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-[1000] bg-white transition-all duration-300 ${
          scrolled
            ? 'border-b border-[#E5E7EB] bg-white/95 shadow-[0_10px_30px_rgba(17,17,17,0.05)] backdrop-blur-md'
            : 'border-b border-[#E5E7EB]'
        }`}
      >
        <div className="mx-auto max-w-7xl px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex h-[56px] xs:h-[64px] items-center justify-between gap-1.5 xs:gap-3 lg:h-[86px]">
            <Link to="/" className="group flex shrink-0 items-center">
              <div className="flex h-6 xs:h-8 sm:h-10 lg:h-11 items-center">
                <img
                  src={medicolineLogo}
                  alt="Medicoline Healthcare logo"
                  className="h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </Link>

            <div className="hidden min-w-0 flex-1 items-center justify-center px-4 lg:flex">
              <div className="flex min-w-0 items-center justify-center">
                {navItems.map((item, index) => (
                  <div key={item.label} className="flex items-center">
                    <Link
                      to={item.to}
                      className={`whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.04em] transition-colors duration-200 xl:text-[12px] ${
                        isActive(item.to) ? 'text-[#C0392B]' : 'text-[#6B7280] hover:text-[#C0392B]'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {index < navItems.length - 1 && (
                      <span className="mx-3 text-[#C7CCD4] xl:mx-4">|</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <a
                href="tel:+917654247569"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C0392B] text-white transition-colors hover:bg-[#8F2D22]"
                aria-label="Call Medicoline Healthcare"
              >
                <Phone size={22} fill="currentColor" strokeWidth={1.5} />
              </a>

              <div className="relative">
                <button
                  ref={helpTriggerRef}
                  type="button"
                  onClick={() => setHelpOpen((prev) => !prev)}
                  className="flex h-12 w-12 items-center justify-center text-[#7B7B7B] transition-colors hover:text-[#C0392B] focus:outline-none"
                  aria-label="Open support information"
                  aria-expanded={helpOpen}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    <path d="M19 10v2c0 3.87-3.13 7-7 7s-7-3.13-7-7v-2h2v2c0 2.76 2.24 5 5 5s5-2.24 5-5v-2h-2z" />
                  </svg>
                </button>

                {helpOpen && (
                  <div
                    ref={helpPopupRef}
                    className="fixed z-[1400] rounded-2xl border border-[#E5E7EB] bg-white p-6 text-left shadow-[0_18px_40px_rgba(17,17,17,0.08)]"
                    style={{
                      top: helpPopupStyle?.top ?? 88,
                      left: helpPopupStyle?.left ?? 12,
                      width: helpPopupStyle?.width ?? 350,
                    }}
                  >
                    <div className="grid gap-5">
                      <div className="rounded-xl bg-[#F9FAFB] p-4">
                        <div className="mb-3 flex items-center gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C0392B] text-white">
                            <Phone size={16} fill="currentColor" strokeWidth={0} />
                          </span>
                          <div>
                            <h4 className="text-[16px] font-bold text-[#1F2937]">Support</h4>
                            <p className="text-[12px] uppercase tracking-[0.14em] text-[#9CA3AF]">Need help fast?</p>
                          </div>
                        </div>
                        <div className="space-y-2 text-[14px] leading-relaxed text-[#6B7280]">
                          <a href="mailto:support@medicolinehealthcare.com" className="block font-medium text-[#1F2937] transition-colors hover:text-[#C0392B]">
                            support@medicolinehealthcare.com
                          </a>
                          <a href="tel:+917654247569" className="block font-medium text-[#1F2937] transition-colors hover:text-[#C0392B]">
                            +91 7654247569
                          </a>
                        </div>
                      </div>

                      <div className="rounded-xl border border-[#E5E7EB] p-4">
                        <div className="mb-3 flex items-center gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F3F4F6] text-[#C0392B]">
                            <MessageSquare size={16} fill="currentColor" strokeWidth={0} />
                          </span>
                          <div>
                            <h4 className="text-[16px] font-bold text-[#1F2937]">Feedback</h4>
                            <p className="text-[12px] uppercase tracking-[0.14em] text-[#9CA3AF]">Reach the founder</p>
                          </div>
                        </div>
                        <a href="mailto:founder@medicolinehealthcare.com" className="block text-[14px] font-medium leading-relaxed text-[#1F2937] transition-colors hover:text-[#C0392B]">
                          founder@medicolinehealthcare.com
                        </a>
                        <a
                          href={FEEDBACK_FORM_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center rounded-full border border-[#C0392B]/15 bg-[#FFF6F4] px-4 py-2 text-[13px] font-semibold text-[#C0392B] transition-colors hover:border-[#C0392B] hover:bg-[#FDEAE5]"
                        >
                          Open Feedback Form
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-1.5 xs:gap-3 lg:hidden">
              <a
                href="tel:+917654247569"
                className="flex shrink-0 items-center justify-center rounded-full bg-[#C0392B] text-white p-2 xs:p-2.5 shadow-sm hover:bg-[#8F2D22] transition-colors"
                aria-label="Call Us"
              >
                <Phone size={16} className="xs:w-[18px] xs:h-[18px]" fill="currentColor" />
              </a>
              <button
                className="flex items-center justify-center rounded-full border border-gray-100 p-2 xs:p-2.5 text-[#374151] transition-colors hover:bg-gray-50 hover:text-[#C0392B] focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={18} className="xs:w-5 xs:h-5" /> : <Menu size={18} className="xs:w-5 xs:h-5" />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`fixed inset-x-0 bottom-0 top-[56px] xs:top-[64px] z-[999] border-t border-gray-100 bg-white transition-all duration-300 ease-in-out lg:hidden overflow-y-auto ${
            menuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
          }`}
        >
          <div className="flex flex-col min-h-full bg-white px-5 py-6 gap-6 justify-between">
            <div className="flex flex-col gap-2.5">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl border border-transparent px-4 py-2 font-heading text-[15px] sm:text-lg font-bold transition-all ${
                    isActive(item.to)
                      ? 'border-[#C0392B]/10 bg-[#fff5f5] pl-6 text-[#C0392B]'
                      : 'text-[#374151] hover:bg-[#F9FAFB] hover:text-[#C0392B]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3 border-t border-gray-100 pt-6 mt-4 pb-8">
              <a
                href="tel:+917654247569"
                className="flex items-center justify-center gap-2.5 rounded-full border border-gray-100 bg-gray-50 py-3.5 text-xs sm:text-sm font-bold text-[#374151]"
              >
                <Phone size={14} className="text-[#C0392B]" />
                Call +91 76542 47569
              </a>
              <a
                href="mailto:support@medicolinehealthcare.com"
                className="flex items-center justify-center gap-2.5 rounded-full border border-[#E5E7EB] px-5 py-3.5 text-xs sm:text-sm font-bold text-[#374151]"
              >
                <MessageSquare size={14} className="text-[#C0392B]" />
                Need Help? Email Support
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-[56px] xs:h-[64px] lg:h-[86px] bg-transparent" />
    </>
  );
}
