import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import partnerLogo01 from '../assets/partners/PARTNER-LOGO-01.png';
import partnerLogo02 from '../assets/partners/PARTNER-LOGO-02.png';
import partnerLogo03 from '../assets/partners/PARTNER-LOGO-03.png';
import partnerLogo04 from '../assets/partners/PARTNER-LOGO-04.png';
import partnerLogo05 from '../assets/partners/PARTNER-LOGO-05.png';
import partnerLogo06 from '../assets/partners/PARTNER-LOGO-06.png';
import partnerLogo07 from '../assets/partners/PARTNER-LOGO-07.png';
import partnerLogo08 from '../assets/partners/PARTNER-LOGO-08.png';
import partnerLogo09 from '../assets/partners/PARTNER-LOGO-09.png';
import partnerLogo10 from '../assets/partners/PARTNER-LOGO-10.png';
import partnerLogo11 from '../assets/partners/PARTNER-LOGO-11.png';
import partnerLogo12 from '../assets/partners/PARTNER-LOGO-12.png';

import partner01 from '../assets/partners/partner-01.png';
import partner02 from '../assets/partners/partner-02.png';
import partner03 from '../assets/partners/partner-03.png';
import partner04 from '../assets/partners/partner-04.png';
import partner05 from '../assets/partners/partner-05.png';
import partner06 from '../assets/partners/partner-06.png';
import partner07 from '../assets/partners/partner-07.png';
import partner08 from '../assets/partners/partner-08.png';
import partner09 from '../assets/partners/partner-09.png';

type Partner = {
  name: string;
  src: string;
};

const partners: Partner[] = [
  { name: 'Apollo Diagnostics', src: partnerLogo01 },
  { name: 'Manipal TRUtest', src: partnerLogo02 },
  { name: 'Sri Chakra Super Speciality Hospital', src: partnerLogo03 },
  { name: "Dr. Divya's Polyclinic", src: partnerLogo04 },
  { name: 'Medisure Diagnostics', src: partnerLogo05 },
  { name: 'Sri Sri Neuro Centre / OP Neuro Cure', src: partnerLogo06 },
  { name: 'Hari Hospital', src: partnerLogo07 },
  { name: 'Fortis Hospitals', src: partnerLogo08 },
  { name: 'MGM Healthcare', src: partnerLogo09 },
  { name: 'Sakra World Hospital', src: partnerLogo10 },
  { name: 'S.L. Raheja Hospital', src: partnerLogo11 },
  { name: 'Saifee Hospital', src: partnerLogo12 },
  { name: 'Partner 01', src: partner01 },
  { name: 'Partner 02', src: partner02 },
  { name: 'Partner 03', src: partner03 },
  { name: 'Partner 04', src: partner04 },
  { name: 'Partner 05', src: partner05 },
  { name: 'Partner 06', src: partner06 },
  { name: 'Partner 07', src: partner07 },
  { name: 'Partner 08', src: partner08 },
  { name: 'Partner 09', src: partner09 },
];

// Create 3 copies for a seamless loop
const extendedPartners = [...partners, ...partners, ...partners];

export default function OurPartners() {
  const { ref, visible } = useScrollReveal();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(partners.length);
  const [isMobile, setIsMobile] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // States for Join as a Partner Form
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [partnerForm, setPartnerForm] = useState({
    fullName: '',
    organisationName: '',
    phone: '',
    email: '',
    partnershipType: 'Diagnostic Center',
    message: '',
  });

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'Partner Request',
          subject: 'New Partner Request — Medicoline Healthcare',
          userEmail: partnerForm.email,
          formData: {
            'Full Name': partnerForm.fullName,
            'Organisation Name': partnerForm.organisationName,
            'Phone': partnerForm.phone,
            'Email': partnerForm.email,
            'Type of Partnership': partnerForm.partnershipType,
            'Message': partnerForm.message,
          },
        }),
      });

      const resData = await response.json();
      if (resData.success) {
        setIsSuccess(true);
        setPartnerForm({
          fullName: '',
          organisationName: '',
          phone: '',
          email: '',
          partnershipType: 'Diagnostic Center',
          message: '',
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      alert('Failed to submit. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);

      if (trackRef.current) {
        const firstCard = trackRef.current.querySelector<HTMLDivElement>('[data-carousel-card]');
        if (firstCard) {
          setCardWidth(firstCard.getBoundingClientRect().width);
          setIsInitialized(true);
        }
      }
    };

    handleResize();
    const timer = setTimeout(handleResize, 100);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isResetting) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsResetting(false);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isResetting]);

  const handlePrev = () => {
    if (isResetting) return;
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    if (isResetting) return;
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (diff > threshold) {
      handleNext();
    } else if (diff < -threshold) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleTransitionEnd = () => {
    const N = partners.length;
    // If we've scrolled into the third copy (index >= 2 * N)
    if (currentIndex >= 2 * N) {
      setIsResetting(true);
      setCurrentIndex(currentIndex - N);
    }
    // If we've scrolled into the first copy (index < N)
    else if (currentIndex < N) {
      setIsResetting(true);
      setCurrentIndex(currentIndex + N);
    }
  };

  // Gap is 16px on mobile, 32px on desktop. Distance to slide per index = cardWidth + gap
  const gap = isMobile ? 16 : 32;
  const trackStyle = {
    transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
    transition: (!isInitialized || isResetting) ? 'none' : 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  return (
    <section className="bg-[#f8f9fa] py-[60px] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`${visible ? 'section-visible' : 'section-hidden'} flex flex-col items-center`}
        >
          {/* Centered title and subtitle with custom spacing */}
          <div className="text-center mb-14">
            <h2 className="font-bold text-gray-900 text-3xl sm:text-4xl mb-4 tracking-tight">
              Our Partners
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              We work alongside trusted hospitals and diagnostic centers to deliver fast, reliable care.
            </p>
          </div>

          {/* Carousel container with arrows outside */}
          <div className="relative w-full max-w-[1152px] mx-auto px-12 sm:px-16">
            {/* Arrow Prev */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 hover:shadow-sm transition-all duration-200 focus:outline-none"
              aria-label="Previous logos"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Carousel Slider Window */}
            <div className="overflow-hidden max-w-[1024px] mx-auto">
              <div
                ref={trackRef}
                className="flex gap-4 md:gap-8"
                style={trackStyle}
                onTransitionEnd={handleTransitionEnd}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {extendedPartners.map((partner, idx) => (
                  <div
                    key={`${partner.name}-${idx}`}
                    data-carousel-card
                    className="w-[calc((100%-16px)/2)] sm:w-[calc((100%-32px)/3)] md:w-[calc((100%-128px)/5)] h-[72px] sm:h-[90px] flex-shrink-0 flex items-center justify-center"
                  >
                    <img
                      src={partner.src}
                      alt={partner.name}
                      title={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow Next */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 hover:shadow-sm transition-all duration-200 focus:outline-none"
              aria-label="Next logos"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Join as Partner Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsSuccess(false);
            }}
            className="bg-[#cc0000] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#aa0000] transition-colors duration-200"
          >
            Join as a Partner
          </button>
        </div>

        {/* Modal for Partner Sign-up */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[1050] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-lg rounded-2xl p-6 sm:p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto text-left">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors text-2xl font-bold"
              >
                &times;
              </button>

              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#fff5f5] text-[#cc0000] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-extrabold text-2xl text-[#111111] mb-3">Partner Request Submitted!</h3>
                  <p className="text-gray-500 max-w-md mx-auto mb-8 text-sm">
                    Thank you, we will contact you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-[#cc0000] text-white px-8 py-2.5 rounded-full font-semibold hover:bg-[#aa0000] transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Join as a Partner</h3>
                  <form onSubmit={handlePartnerSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="partner-fullName" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="partner-fullName"
                        required
                        value={partnerForm.fullName}
                        onChange={(e) => setPartnerForm({ ...partnerForm, fullName: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#cc0000]/30 focus:border-[#cc0000] transition-shadow"
                      />
                    </div>

                    <div>
                      <label htmlFor="partner-organisationName" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                        Organisation Name *
                      </label>
                      <input
                        type="text"
                        id="partner-organisationName"
                        required
                        value={partnerForm.organisationName}
                        onChange={(e) => setPartnerForm({ ...partnerForm, organisationName: e.target.value })}
                        placeholder="Enter your company or organization name"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#cc0000]/30 focus:border-[#cc0000] transition-shadow"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="partner-phone" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="partner-phone"
                          required
                          value={partnerForm.phone}
                          onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                          placeholder="Your phone number"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#cc0000]/30 focus:border-[#cc0000] transition-shadow"
                        />
                      </div>

                      <div>
                        <label htmlFor="partner-email" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="partner-email"
                          required
                          value={partnerForm.email}
                          onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                          placeholder="you@email.com"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#cc0000]/30 focus:border-[#cc0000] transition-shadow"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="partner-partnershipType" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                        Type of Partnership *
                      </label>
                      <select
                        id="partner-partnershipType"
                        required
                        value={partnerForm.partnershipType}
                        onChange={(e) => setPartnerForm({ ...partnerForm, partnershipType: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#cc0000]/30 focus:border-[#cc0000] transition-shadow"
                      >
                        <option value="Diagnostic Center">Diagnostic Center</option>
                        <option value="Hospital">Hospital</option>
                        <option value="Polyclinic">Polyclinic</option>
                        <option value="Individual Doctor">Individual Doctor</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="partner-message" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                        Message *
                      </label>
                      <textarea
                        id="partner-message"
                        required
                        rows={4}
                        value={partnerForm.message}
                        onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                        placeholder="Tell us about the proposed collaboration..."
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#cc0000]/30 focus:border-[#cc0000] transition-shadow resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#cc0000] text-white font-semibold py-3.5 rounded-xl hover:bg-[#aa0000] transition-colors duration-200 shadow-md disabled:opacity-50 mt-2"
                    >
                      {isSubmitting ? 'Submitting Request...' : 'Submit Partner Request'}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
