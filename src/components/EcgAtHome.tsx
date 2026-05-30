import { useState } from 'react';
import { Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ecgBanner from '../assets/images/services/ecg-at-home/ecg-service-banner.jpg';

const ECG_BANNER_SRC = ecgBanner;

const features = [
  '12-Lead Digital ECG Monitoring',
  'Certified Empathetic Care Technicians',
  'Instant Digital Reports Shared with Your Doctor',
];

export default function EcgAtHome() {
  const { ref, visible } = useScrollReveal();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ecgForm, setEcgForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    date: '',
    message: '',
  });

  const handleEcgSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'ECG Booking',
          subject: 'New ECG Booking — Medicoline Healthcare',
          userEmail: ecgForm.email,
          formData: {
            'Name': ecgForm.name,
            'Phone': ecgForm.phone,
            'Email': ecgForm.email,
            'Address': ecgForm.address,
            'Preferred Date': ecgForm.date,
            'Message': ecgForm.message,
          },
        }),
      });

      const resData = await response.json();
      if (resData.success) {
        setIsSuccess(true);
        setEcgForm({
          name: '',
          phone: '',
          email: '',
          address: '',
          date: '',
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

  return (
    <section id="icu" className="bg-white py-[60px] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
            visible ? 'section-visible' : 'section-hidden'
          }`}
        >
          <div className="relative w-full min-h-[280px] sm:min-h-[360px] lg:min-h-[480px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100">
            <img
              src={ECG_BANNER_SRC}
              alt="Medicoline technician performing a 12-lead ECG at home"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="font-extrabold text-[#111111] text-3xl sm:text-4xl tracking-tight leading-tight mb-4">
              Professional ECG Test at Your Doorstep
            </h2>
            <div className="w-12 h-1 bg-[#C0392B] rounded-full mb-6" />
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Accurate cardiac monitoring in the comfort of your home, managed by certified healthcare professionals
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#fff5f5] flex items-center justify-center">
                    <Check size={14} className="text-[#C0392B]" strokeWidth={3} />
                  </span>
                  <span className="text-[#111111] text-base font-semibold leading-snug">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => {
                setIsModalOpen(true);
                setIsSuccess(false);
              }}
              className="inline-flex items-center justify-center self-start bg-[#C0392B] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#C0392B] transition-colors duration-200 text-base shadow-[0_14px_30px_rgba(192,57,43,0.22)]"
            >
              Book an ECG at Home
            </button>
          </div>
        </div>
      </div>

      {/* Modal for ECG Booking */}
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
                <div className="w-16 h-16 bg-[#fff5f5] text-[#C0392B] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-extrabold text-2xl text-[#111111] mb-3">ECG Booking Confirmed!</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-8 text-sm">
                  Thank you, we will contact you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-[#C0392B] text-white px-8 py-2.5 rounded-full font-semibold hover:bg-[#C0392B] transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Book ECG at Home</h3>
                <form onSubmit={handleEcgSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="ecg-name" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="ecg-name"
                      required
                      value={ecgForm.name}
                      onChange={(e) => setEcgForm({ ...ecgForm, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0392B]/30 focus:border-[#C0392B] transition-shadow"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ecg-phone" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="ecg-phone"
                        required
                        value={ecgForm.phone}
                        onChange={(e) => setEcgForm({ ...ecgForm, phone: e.target.value })}
                        placeholder="Your phone number"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0392B]/30 focus:border-[#C0392B] transition-shadow"
                      />
                    </div>

                    <div>
                      <label htmlFor="ecg-email" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="ecg-email"
                        required
                        value={ecgForm.email}
                        onChange={(e) => setEcgForm({ ...ecgForm, email: e.target.value })}
                        placeholder="you@email.com"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0392B]/30 focus:border-[#C0392B] transition-shadow"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="ecg-address" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Address *
                    </label>
                    <input
                      type="text"
                      id="ecg-address"
                      required
                      value={ecgForm.address}
                      onChange={(e) => setEcgForm({ ...ecgForm, address: e.target.value })}
                      placeholder="Home address for ECG visit"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0392B]/30 focus:border-[#C0392B] transition-shadow"
                    />
                  </div>

                  <div>
                    <label htmlFor="ecg-date" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="ecg-date"
                      required
                      value={ecgForm.date}
                      onChange={(e) => setEcgForm({ ...ecgForm, date: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#C0392B]/30 focus:border-[#C0392B] transition-shadow"
                    />
                  </div>

                  <div>
                    <label htmlFor="ecg-message" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      id="ecg-message"
                      required
                      rows={4}
                      value={ecgForm.message}
                      onChange={(e) => setEcgForm({ ...ecgForm, message: e.target.value })}
                      placeholder="Tell us about the patient's symptoms or requirements..."
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0392B]/30 focus:border-[#C0392B] transition-shadow resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C0392B] text-white font-semibold py-3.5 rounded-xl hover:bg-[#C0392B] transition-colors duration-200 shadow-md disabled:opacity-50 mt-2"
                  >
                    {isSubmitting ? 'Booking...' : 'Confirm ECG Booking'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
