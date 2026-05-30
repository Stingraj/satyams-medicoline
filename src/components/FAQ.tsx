import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    q: 'What areas do you serve?',
    a: 'We currently serve Warangal, Hanamkonda, and Kazipet.',
  },
  {
    q: 'Are your nurses certified?',
    a: 'Yes. All our nursing staff are verified, trained professionals operating under a medico-legal framework.',
  },
  {
    q: 'How quickly can you send someone to my home?',
    a: 'We have 24/7 emergency backup and aim for the fastest response possible.',
  },
  {
    q: 'How do I book a service?',
    a: 'Call us at +91 7654247569 or email info.medicoline@gmail.com to book any service.',
  },
  {
    q: 'Do you offer ICU setup at home?',
    a: 'Yes. We provide comprehensive critical care setup at home with 24/7 monitoring.',
  },
  {
    q: 'What equipment can I rent?',
    a: 'BiPAP machines, Air Beds, Patient Beds, oxygen concentrators and more.',
  },
];

export default function FAQ() {
  const { ref, visible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-extrabold text-[#111111] text-3xl sm:text-4xl mb-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="flex justify-center mb-5">
            <div className="w-14 h-1 bg-[#cc0000] rounded-full"></div>
          </div>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Everything you need to know about our home care services.
          </p>
        </div>

        <div ref={ref} className={`space-y-0 ${visible ? 'section-visible' : 'section-hidden'}`}>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="font-bold text-[#cc0000] text-base sm:text-lg pr-4">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#fff5f5] flex items-center justify-center">
                  {openIndex === i ? (
                    <Minus size={16} color="#cc0000" strokeWidth={2.5} />
                  ) : (
                    <Plus size={16} color="#cc0000" strokeWidth={2.5} />
                  )}
                </span>
              </button>
              <div className={`accordion-content ${openIndex === i ? 'open' : ''}`}>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed pb-5 pr-12">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
