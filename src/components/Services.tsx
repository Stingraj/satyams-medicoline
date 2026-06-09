import { ChevronLeft, ChevronRight, MapPin, MonitorSmartphone, Stethoscope } from 'lucide-react';
import { useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { services, type Service } from '../data/services';
import ServiceDetailModal from './ServiceDetailModal';

const serviceIcons = [
  <svg key="0" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18" /><path d="M3 12h18" /><circle cx="12" cy="12" r="9" /></svg>,
  <svg key="1" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  <svg key="2" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>,
  <svg key="3" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z" /></svg>,
  <svg key="4" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
  <svg key="5" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>,
  <svg key="6" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  <svg key="7" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  <svg key="8" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
  <svg key="9" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>,
  <svg key="10" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
  <svg key="11" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>,
  <svg key="12" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
];

const easyDoctorConsultationService: Service = {
  title: 'Easy Doctor Consultation',
  desc: 'Doctor consultation made easy and hassle-free',
  details:
    'Medicoline Healthcare – Home Care Services (HCS) made Doctor Consultation easy and hassle-free. Patient waiting time is reduced by 70% for outdoor consultation.',
};

const doctorConsultationOptions = [
  {
    title: 'Online Consultation',
    description: 'Connect with a Medicoline doctor remotely for fast guidance, prescriptions, and clinical review.',
    icon: <MonitorSmartphone size={24} strokeWidth={2} />,
  },
  {
    title: "Doctor's Home Visit",
    description: 'Schedule a doctor home visit for bedside assessment, follow-up review, and treatment planning.',
    icon: <MapPin size={24} strokeWidth={2} />,
  },
  {
    title: "Expert Doctor's Opinion",
    description: 'Get a trusted expert opinion for important care decisions, chronic cases, or complex recovery needs.',
    icon: <Stethoscope size={24} strokeWidth={2} />,
  },
  {
    title: 'Care Coordination Support',
    description: 'Receive smooth follow-up guidance, referral help, and coordinated support after consultation.',
    icon: <MonitorSmartphone size={24} strokeWidth={2} />,
  },
] as const;

export default function Services() {
  const { ref, visible } = useScrollReveal();
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const serviceItems = [easyDoctorConsultationService, ...services];

  const activeService = activeServiceIndex !== null ? serviceItems[activeServiceIndex] : null;

  const scrollByOneCard = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    const firstCard = carouselRef.current.querySelector<HTMLElement>('[data-service-card]');
    if (!firstCard) return;

    const gap = 24;
    const cardWidth = firstCard.getBoundingClientRect().width;
    const amount = cardWidth + gap;

    carouselRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="services" className="bg-white py-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-extrabold text-[#1F2937] text-3xl sm:text-4xl mb-3 tracking-tight">
            OUR SERVICES
          </h2>
          <div className="flex justify-center mb-5">
            <div className="w-14 h-1 bg-[#C0392B] rounded-full"></div>
          </div>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            We bring the hospital to your home
          </p>
        </div>

        <div
          ref={ref}
          className={`${visible ? 'section-visible' : 'section-hidden'}`}
        >
          <div className="mb-5 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => scrollByOneCard('left')}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9E2EC] bg-white text-[#1F2937] shadow-sm transition-colors hover:border-[#C0392B] hover:text-[#C0392B]"
              aria-label="Scroll services left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scrollByOneCard('right')}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9E2EC] bg-white text-[#1F2937] shadow-sm transition-colors hover:border-[#C0392B] hover:text-[#C0392B]"
              aria-label="Scroll services right"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {serviceItems.map((service, i) => (
              <button
                key={service.title}
                type="button"
                data-service-card
                onClick={() => setActiveServiceIndex(i)}
                className="service-card flex min-h-[220px] w-full shrink-0 snap-start flex-col rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 text-left shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B] focus-visible:ring-offset-2 sm:basis-[calc((100%-1.5rem)/2)] xl:basis-[calc((100%-3rem)/3)]"
                aria-haspopup="dialog"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3F4F6] text-[#C0392B]">
                  {serviceIcons[i]}
                </div>
                <h3 className="font-heading text-lg font-bold leading-snug text-[#1F2937]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                  {service.desc}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-[2rem] border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm sm:p-8 lg:p-10">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-[#C0392B]">
            Easy Doctor Consultation
          </p>
          <h3 className="mt-3 font-heading text-2xl font-black text-[#1F2937] sm:text-3xl">
            Doctor consultation made easy and hassle-free.
          </h3>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-[#6B7280] sm:text-base">
            Medicoline Healthcare – Home Care Services (HCS) made Doctor Consultation easy and hassle-free. Patient waiting time is reduced by 70% for outdoor consultation.
          </p>
          <p className="mt-5 text-sm font-bold text-[#1F2937] sm:text-base">
            Our Easy Doctor Consultation Offers
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {doctorConsultationOptions.map((option) => (
              <article key={option.title} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 text-left shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3F4F6] text-[#C0392B]">
                  {option.icon}
                </div>
                <h4 className="mt-4 font-heading text-lg font-bold text-[#1F2937]">{option.title}</h4>
                <p className="mt-3 text-sm leading-7 text-[#6B7280]">{option.description}</p>
              </article>
            ))}
          </div>
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
