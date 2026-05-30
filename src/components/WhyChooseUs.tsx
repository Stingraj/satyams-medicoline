import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
  { title: 'Experienced & Certified Technicians', desc: 'Trained professionals you can trust' },
  { title: 'Latest Portable Medical Equipment', desc: 'Hospital-grade tools at your doorstep' },
  { title: 'Available 24/7 for Emergencies', desc: 'Round-the-clock care whenever you need' },
  { title: 'Instant & Detailed Reports', desc: 'Fast accurate results delivered online' },
  { title: 'Affordable & Transparent Pricing', desc: 'No hidden costs, clear packages' },
  { title: 'Home Dressing Services', desc: 'Professional wound & surgical dressing at home' },
];

export default function WhyChooseUs() {
  const { ref, visible } = useScrollReveal();

  return (
    <>
      <section className="bg-white py-[60px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-extrabold text-[#111111] text-3xl sm:text-4xl mb-3 tracking-tight">
              Why Choose Medicoline?
            </h2>
            <div className="flex justify-center mb-5">
              <div className="w-14 h-1 bg-[#C0392B] rounded-full"></div>
            </div>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              We are committed to providing the highest standard of medical care in the comfort of your home.
            </p>
          </div>

          <div
            ref={ref}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ${
              visible ? 'section-visible' : 'section-hidden'
            }`}
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="service-card bg-white border border-gray-100 rounded-xl p-6 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-[#fff5f5] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#C0392B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#111111] text-base leading-snug mb-1">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#C0392B] py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white text-sm sm:text-base font-medium flex items-center justify-center gap-2 flex-wrap">
            <span>Serving Warangal | Hanamkonda | Kazipet</span>
            <span className="hidden sm:inline">—</span>
            <span>Since 2020</span>
            <span>|</span>
            <span>24/7 Available</span>
            <span>|</span>
            <a href="tel:+917654247569" className="font-bold underline underline-offset-2">
              +91 7654247569
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
