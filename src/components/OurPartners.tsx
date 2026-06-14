import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import partnerLogo01 from '../assets/partners/PARTNER-LOGO-01.png';
import partnerLogo02 from '../assets/partners/PARTNER-LOGO-02.png';
import partnerLogo03 from '../assets/partners/PARTNER-LOGO-03.png';
import partnerLogo04 from '../assets/partners/PARTNER-LOGO-04.png';
import partnerLogo05 from '../assets/partners/PARTNER-LOGO-05.png';
import partnerLogo06 from '../assets/partners/PARTNER-LOGO-06.png';
import partnerLogo07 from '../assets/partners/PARTNER-LOGO-07.png';

type Partner = {
  name: string;
  src?: string;
};

const partners: Partner[] = [
  { name: 'Apollo Labs', src: partnerLogo01 },
  { name: 'Manipal Labs', src: partnerLogo02 },
  { name: 'MedPlus', src: '/images/partners/medplus-logo.png' },
  { name: 'Hari Hospital', src: partnerLogo07 },
  { name: "Dr. Divya's Poly", src: partnerLogo04 },
  { name: 'Sri Chakra Hospital', src: partnerLogo03 },
  { name: 'Medisure', src: partnerLogo05 },
  { name: 'Dr. Om Prakash', src: partnerLogo06 },
];

export default function OurPartners() {
  const { ref, visible } = useScrollReveal();
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollPartners = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    const firstItem = carouselRef.current.querySelector<HTMLElement>('[data-partner-item]');
    if (!firstItem) return;

    const styles = window.getComputedStyle(carouselRef.current);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || '0');
    const itemWidth = firstItem.getBoundingClientRect().width;
    const amount = itemWidth + gap;

    carouselRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="our-partners" className="bg-white py-[72px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`${visible ? 'section-visible' : 'section-hidden'} flex flex-col items-center`}
        >
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
              Our Partners
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-[#667085] sm:text-lg lg:text-[1.05rem]">
              We work alongside trusted hospitals and diagnostic centers to deliver fast, reliable care.
            </p>
          </div>

          <div className="mx-auto w-full max-w-7xl">
            <div className="relative mx-auto flex w-full items-center">
              <button
                type="button"
                onClick={() => scrollPartners('left')}
                className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D9E2EC] bg-white text-[#1F2937] shadow-sm transition-colors hover:border-[#C0392B] hover:text-[#C0392B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B] focus-visible:ring-offset-2 sm:h-12 sm:w-12"
                aria-label="Previous partner"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="w-full px-14 sm:px-16 lg:px-20">
                <div
                  ref={carouselRef}
                  className="flex items-center gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-5 lg:gap-6"
                >
                  {partners.map((partner) => (
                    <article
                      key={partner.name}
                      data-partner-item
                      className="flex h-[124px] shrink-0 items-center justify-center basis-[calc((100%-2rem)/3)] md:basis-[calc((100%-3rem)/4)] lg:basis-[calc((100%-6rem)/5)]"
                    >
                      {partner.src ? (
                        <img
                          src={partner.src}
                          alt={partner.name}
                          title={partner.name}
                          className="max-h-[84px] w-auto max-w-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <p className="text-center text-[1.15rem] font-medium tracking-[-0.04em] text-[#1F2937] md:text-[1.3rem] lg:text-[1.45rem]">
                          {partner.name}
                        </p>
                      )}
                    </article>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => scrollPartners('right')}
                className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D9E2EC] bg-white text-[#1F2937] shadow-sm transition-colors hover:border-[#C0392B] hover:text-[#C0392B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B] focus-visible:ring-offset-2 sm:h-12 sm:w-12"
                aria-label="Next partner"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
