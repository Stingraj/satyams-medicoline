import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { services } from '../data/services';
import ServiceDetailModal from './ServiceDetailModal';

const serviceIcons = [
  <svg key="1" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  <svg key="2" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>,
  <svg key="3" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z" /></svg>,
  <svg key="4" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
  <svg key="5" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>,
  <svg key="6" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  <svg key="7" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  <svg key="8" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
  <svg key="9" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>,
  <svg key="10" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
  <svg key="11" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>,
  <svg key="12" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
];

export default function Services() {
  const { ref, visible } = useScrollReveal();
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);

  const activeService = activeServiceIndex !== null ? services[activeServiceIndex] : null;

  return (
    <section id="services" className="bg-white py-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-extrabold text-[#111111] text-3xl sm:text-4xl mb-3 tracking-tight">
            OUR SERVICES
          </h2>
          <div className="flex justify-center mb-5">
            <div className="w-14 h-1 bg-[#cc0000] rounded-full"></div>
          </div>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            We bring the hospital to your home
          </p>
        </div>

        <div
          ref={ref}
          className={`service-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${visible ? 'section-visible' : 'section-hidden'
            }`}
        >
          {services.map((service, i) => (
            <button
              key={service.title}
              type="button"
              onClick={() => setActiveServiceIndex(i)}
              className="service-card bg-white border border-gray-100 rounded-xl p-5 text-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cc0000] focus-visible:ring-offset-2"
              aria-haspopup="dialog"
            >
              <div className="mb-3 w-11 h-11 rounded-lg bg-[#fff5f5] flex items-center justify-center mx-auto">
                {serviceIcons[i]}
              </div>
              <h3 className="font-bold text-[#111111] text-sm mb-1 leading-snug">
                {service.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {service.desc}
              </p>
            </button>
          ))}
        </div>

      </div>

      {activeService && (
        <ServiceDetailModal
          service={activeService}
          onClose={() => setActiveServiceIndex(null)}
        />
      )}
    </section>
  );
}
