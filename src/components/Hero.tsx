import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="bg-white pt-[72px] lg:pt-[104px]">
      <div
        ref={ref}
        className={`min-h-[calc(100svh-72px)] lg:min-h-[calc(100svh-104px)] sm:min-h-[85vh] flex items-center justify-center dot-pattern ${visible ? 'section-visible' : 'section-hidden'
          }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-20 lg:py-28 text-center">
          <div className="hidden sm:inline-flex items-center gap-2 bg-[#fff5f5] border border-red-100 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#cc0000] inline-block"></span>
            <span className="text-xs font-semibold text-[#cc0000] tracking-widest uppercase">
              Medicoline Home Care Services
            </span>
          </div>

          <h1 className="hero-title text-[1.55rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#111111] leading-[1.05] tracking-tight mb-3 sm:mb-6 px-2 sm:px-0">
            Professional Healthcare<br />
            <span className="text-[#cc0000]">at Your Doorstep</span>
          </h1>

          <p className="text-sm sm:text-xl text-[#cc0000] font-semibold mb-2 sm:mb-4 px-2 sm:px-0">
            Your Health, Our Priority — Warangal | Hanamkonda | Kazipet | Since 2020
          </p>

          {/* Desktop/Tablet description */}
          <p className="hidden sm:block text-sm sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10 px-4 sm:px-0">
            Expert doctors, nurses &amp; technicians visit your home. ECG, lab tests, physiotherapy, ICU care, nursing &amp; more — 24/7.
          </p>

          {/* Mobile description */}
          <p className="block sm:hidden text-[13px] text-gray-500 leading-5 max-w-[20rem] mx-auto mb-5 px-2">
            Expert doctors &amp; nurses at your home — ECG, nursing, physiotherapy &amp; more. 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px] sm:gap-4 w-full px-2 sm:px-0">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#cc0000] text-white font-semibold px-9 py-3 sm:py-4 rounded-full hover:bg-[#aa0000] transition-colors duration-200 text-base shadow-lg shadow-red-200"
            >
              Book Appointment
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+917654247569"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[#cc0000] text-[#cc0000] font-semibold px-9 py-3 sm:py-4 rounded-full hover:bg-[#fff5f5] transition-colors duration-200 text-base"
            >
              <Phone size={18} />
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
