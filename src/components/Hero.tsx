import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, MapPinned, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import firstTimeCity from '../assets/images/1st-time-in-city.png';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { searchSuggestions } from '../data/searchSuggestions';

export default function Hero() {
  const { ref, visible } = useScrollReveal();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement | null>(null);

  const filteredSuggestions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return searchSuggestions.slice(0, 6);
    }

    return searchSuggestions.filter((item) => {
      const haystack = [item.label, item.description, ...item.keywords].join(' ').toLowerCase();
      return haystack.includes(query);
    });
  }, [searchQuery]);

  const visibleSuggestions = filteredSuggestions.slice(0, 6);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!searchRef.current?.contains(event.target as Node)) {
        setIsSuggestionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setActiveSuggestionIndex(0);
  }, [searchQuery]);

  const openSuggestion = (path: string) => {
    setIsSuggestionsOpen(false);
    navigate(path);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      return;
    }

    if (visibleSuggestions.length > 0) {
      openSuggestion(visibleSuggestions[activeSuggestionIndex]?.path || visibleSuggestions[0].path);
      return;
    }

    navigate(`/services?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <section className="bg-white pt-2 lg:pt-6">
      <div
        ref={ref}
        className={`relative flex overflow-visible ${visible ? 'section-visible' : 'section-hidden'
          }`}
      >
        <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 xl:flex">
          <div className="rounded-l-2xl bg-[#C0392B] px-4 py-8 text-center text-white shadow-[0_18px_38px_rgba(192,57,43,0.2)]">
            <span className="block font-heading text-xs font-bold tracking-[0.65em] [writing-mode:vertical-rl]">
              EMERGENCY
            </span>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-8 text-center sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <img
            src={firstTimeCity}
            alt="Medicoline Healthcare first time in city home healthcare announcement"
            className="mb-7 w-[220px] max-w-full sm:w-[270px] lg:w-[300px]"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />

          <h1 className="hero-title px-2 font-heading text-[2.7rem] font-black leading-[0.98] tracking-[-0.05em] text-[#1F2937] sm:text-6xl lg:text-[5.3rem]">
            Professional
            <br />
            Healthcare
            <br />
            <span className="text-[#C0392B]">at Your Doorstep!</span>
          </h1>

          <p className="mt-4 px-2 font-body text-lg text-[#6B7280] sm:text-[2rem] lg:text-[2.2rem]">
            Your Health, Our Priority
          </p>

          <div ref={searchRef} className="relative mt-8 w-full max-w-[38rem]">
            <form
              onSubmit={handleSearch}
              className="flex items-center rounded-full border-[3px] border-[#2A2A2A] bg-white px-5 py-1 shadow-[0_6px_14px_rgba(17,17,17,0.06)] sm:px-7 sm:py-1.5 transition-colors focus-within:border-[#C0392B]"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSuggestionsOpen(true);
                }}
                onFocus={() => setIsSuggestionsOpen(true)}
                onKeyDown={(e) => {
                  if (!visibleSuggestions.length) {
                    return;
                  }

                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setIsSuggestionsOpen(true);
                    setActiveSuggestionIndex((prev) => (prev + 1) % visibleSuggestions.length);
                  }

                  if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setIsSuggestionsOpen(true);
                    setActiveSuggestionIndex((prev) => (prev - 1 + visibleSuggestions.length) % visibleSuggestions.length);
                  }

                  if (e.key === 'Escape') {
                    setIsSuggestionsOpen(false);
                  }
                }}
                placeholder="Search services, doctors, appointments..."
                className="h-10 flex-1 bg-transparent text-[#1F2937] placeholder-[#9CA3AF] outline-none text-base sm:h-12 sm:text-lg"
                aria-label="Search website sections"
                aria-expanded={isSuggestionsOpen}
                aria-controls="hero-search-suggestions"
              />
              <button type="submit" aria-label="Search" className="ml-2 flex items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-100">
                <Search className="text-[#1F2937]" size={24} strokeWidth={1.5} />
              </button>
            </form>

            {isSuggestionsOpen && visibleSuggestions.length > 0 && (
              <div
                id="hero-search-suggestions"
                className="absolute left-0 right-0 top-[calc(100%+0.75rem)] z-[1200] max-h-[min(24rem,calc(100vh-10rem))] overflow-y-auto rounded-[1.5rem] border border-[#E5E7EB] bg-white text-left shadow-[0_18px_38px_rgba(17,17,17,0.08)]"
              >
                {visibleSuggestions.map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => openSuggestion(item.path)}
                    className={`flex w-full items-start justify-between gap-4 px-5 py-4 transition-colors ${
                      index === activeSuggestionIndex ? 'bg-[#F9FAFB]' : 'bg-white hover:bg-[#F9FAFB]'
                    }`}
                  >
                    <span>
                      <span className="block font-heading text-sm font-bold text-[#1F2937]">{item.label}</span>
                      <span className="mt-1 block text-sm text-[#6B7280]">{item.description}</span>
                    </span>
                    <ArrowRight size={16} className="mt-1 shrink-0 text-[#C0392B]" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mt-5 max-w-3xl px-2 font-body text-[14px] font-medium leading-relaxed text-[#1F2937] sm:text-[16px] lg:text-[17px]">
            <p>Expert Doctor, Nurses, Physiotherapist &amp; Dietitian visits</p>
            <p>Hospital-grade care at ease of Home</p>
          </div>

          <div className="mt-4 flex flex-col items-center justify-center gap-2 text-[#C0392B] sm:flex-row sm:gap-3">
            <MapPinned size={38} strokeWidth={1.5} className="text-[#4B5563]" />
            <p className="font-heading text-[1.4rem] font-bold tracking-tight sm:text-[1.5rem]">
              Warangal <span className="mx-1">|</span> Hanamkonda <span className="mx-1">|</span> Kazipet
            </p>
          </div>

          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 px-2 sm:flex-row sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex min-w-[10rem] items-center justify-center rounded-full bg-[#C0392B] px-6 py-2 font-heading text-[14px] font-bold text-white transition-colors duration-200 hover:bg-[#8F2D22]"
            >
              Book Appointment
            </Link>
            <a
              href="tel:+917654247569"
              className="inline-flex min-w-[10rem] items-center justify-center rounded-full border-2 border-[#C0392B] bg-white px-6 py-2 font-heading text-[14px] font-bold text-[#C0392B] transition-colors duration-200 hover:bg-[#C0392B] hover:text-white"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
