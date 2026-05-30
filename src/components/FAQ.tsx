import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    q: 'What areas do you serve?',
    a: 'We currently serve Warangal, Hanamkonda, and Kazipet. We are expanding to more areas soon.',
  },
  {
    q: 'How quickly can a doctor visit my home?',
    a: 'We typically arrange home visits within 2 to 4 hours of booking. For emergencies we prioritize immediately.',
  },
  {
    q: 'What services are available 24/7?',
    a: 'ICU at home, nursing care, and emergency doctor visits are available round the clock.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'You can book through our website, call us at +91 76542 47569, or WhatsApp us directly.',
  },
  {
    q: 'Are your doctors verified and certified?',
    a: 'Yes, all our doctors and healthcare professionals are verified, licensed, and experienced.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, UPI, net banking, and all major credit and debit cards.',
  },
  {
    q: 'Do you provide services for senior citizens?',
    a: 'Yes, we have a dedicated Senior Citizen Package with specialized care and priority visits.',
  },
  {
    q: 'Can I reschedule or cancel my appointment?',
    a: 'Yes, you can reschedule or cancel up to 2 hours before your scheduled visit by calling us.',
  },
];

export default function FAQ() {
  const { ref, visible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question open by default

  return (
    <section id="faq" className="bg-[#fbf9f8] py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered section title with red underline */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-[#111111] text-3xl sm:text-4xl tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <div className="flex justify-center mb-5">
            <div className="w-16 h-1 bg-[#C0392B] rounded-full"></div>
          </div>
          <p className="font-body text-[#6B7280] text-base max-w-xl mx-auto">
            Everything you need to know about our home care services.
          </p>
        </div>

        {/* Accordion Wrapper */}
        <div
          ref={ref}
          className={`space-y-4 ${visible ? 'section-visible' : 'section-hidden'}`}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors duration-200"
                >
                  <span
                    className={`font-heading font-bold text-base sm:text-lg pr-4 transition-colors duration-200 ${isOpen ? 'text-[#C0392B]' : 'text-gray-800 hover:text-[#C0392B]'
                      }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${isOpen ? 'bg-[#fff5f5]' : 'bg-gray-50'
                      }`}
                  >
                    {isOpen ? (
                      <Minus size={16} className="text-[#C0392B]" strokeWidth={2.5} />
                    ) : (
                      <Plus size={16} className="text-gray-500" strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                {/* Accordion Body */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-gray-50' : 'max-h-0'
                    }`}
                >
                  <div className="p-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
