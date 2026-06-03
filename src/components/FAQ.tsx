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
    a: 'You can book through our website, call us at +91 7654247569, or WhatsApp us directly.',
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
    <section id="faq" className="bg-[#F9FAFB] py-20 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered section title with red underline */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-black text-[#1F2937] text-3xl sm:text-4xl tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-[60px] h-[3px] bg-[#C0392B] mx-auto mb-5"></div>
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
                className="bg-white border-b border-[#E5E7EB] transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-[16px] px-[20px] text-left focus:outline-none transition-colors duration-200"
                >
                  <span
                    className={`font-heading font-bold text-[16px] transition-colors duration-200 ${isOpen ? 'text-[#C0392B]' : 'text-[#1F2937] hover:text-[#C0392B]'
                      }`}
                  >
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 ml-4">
                    {isOpen ? (
                      <Minus size={18} className="text-[#C0392B]" />
                    ) : (
                      <Plus size={18} className="text-[#C0392B]" />
                    )}
                  </span>
                </button>

                {/* Accordion Body */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px]' : 'max-h-0'
                    }`}
                >
                  <div className="pb-[16px] px-[20px] pt-0 text-[#374151] font-body text-[15px] font-normal leading-relaxed">
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
