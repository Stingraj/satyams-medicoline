import { useState } from 'react';
import {
  Activity,
  ArrowRight,
  FlaskConical,
  HeartPulse,
  Mail,
  MoreHorizontal,
  Stethoscope,
  Users,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SERVICE_OPTIONS = [
  { id: 'nursing', label: 'Nursing Care', icon: HeartPulse },
  { id: 'physio', label: 'Physiotherapy', icon: Activity },
  { id: 'elderly', label: 'Elderly Care', icon: Users },
  { id: 'diagnostic', label: 'Diagnostic Test', icon: FlaskConical },
  { id: 'post-surgery', label: 'Post Surgery Care', icon: Stethoscope },
  { id: 'other', label: 'Other Services', icon: MoreHorizontal },
] as const;

const inputClass =
  'w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#cc0000]/30 focus:border-[#cc0000] transition-shadow';
const CONTACT_EMAIL = 'info@medicolinehealthcare.com';

export default function AppointmentBooking() {
  const { ref, visible } = useScrollReveal();
  const [selectedService, setSelectedService] = useState<string>(SERVICE_OPTIONS[0].id);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    date: '',
    time: '',
    notes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'Appointment Booking Form',
          subject: 'New Appointment Booking — Medicoline Healthcare',
          userEmail: form.email,
          formData: {
            'Name': form.fullName,
            'Phone': form.phone,
            'Email': form.email,
            'Address': form.address,
            'Service selected': SERVICE_OPTIONS.find((s) => s.id === selectedService)?.label ?? selectedService,
            'Preferred Date': form.date,
            'Preferred Time': form.time,
            'Additional Notes': form.notes || 'None',
          },
        }),
      });

      const resData = await response.json();
      if (resData.success) {
        setSubmitted(true);
        setForm({
          fullName: '',
          phone: '',
          email: '',
          address: '',
          date: '',
          time: '',
          notes: '',
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      alert('Failed to submit. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="book-appointment" className="bg-[#fbf9f8] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-extrabold text-[#111111] text-3xl sm:text-4xl tracking-tight mb-3">
            Book Your Appointment
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-14 h-1 bg-[#cc0000] rounded-full" />
          </div>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Schedule trusted home healthcare in minutes — we&apos;ll confirm your visit shortly.
          </p>
        </div>

        <div
          ref={ref}
          className={`max-w-5xl mx-auto bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 md:p-10 ${
            visible ? 'section-visible' : 'section-hidden'
          }`}
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#fff5f5] text-[#cc0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-extrabold text-2xl text-[#111111] mb-3">Booking Requested!</h3>
              <p className="text-gray-500 max-w-md mx-auto mb-8">
                Thank you for choosing Medicoline Healthcare. Our support team will call you shortly to confirm your booking and coordinate details.
              </p>
              <p className="text-sm text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
                A confirmation will be sent to your email.
                <br />
                For urgent queries contact{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-1 text-[#cc0000] hover:text-[#C0392B] transition-colors"
                >
                  <Mail size={14} strokeWidth={2} />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="bg-[#cc0000] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#aa0000] transition-colors"
              >
                Book Another Visit
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-[#111111] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#111111] mb-1.5">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="+91 76542 47569"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#111111] mb-1.5">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-[#111111] mb-1.5">
                    Address *
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    required
                    value={form.address}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Home address for visit"
                  />
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#111111] mb-3">Select Service</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {SERVICE_OPTIONS.map(({ id, label, icon: Icon }) => {
                    const selected = selectedService === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setSelectedService(id)}
                        className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${
                          selected
                            ? 'border-[#cc0000] bg-[#fff5f5] shadow-sm ring-2 ring-[#cc0000]/20'
                            : 'border-gray-200 bg-white hover:border-[#cc0000]/40'
                        }`}
                      >
                        <span
                          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                            selected ? 'bg-[#cc0000] text-white' : 'bg-[#fff5f5] text-[#cc0000]'
                          }`}
                        >
                          <Icon size={20} strokeWidth={2} />
                        </span>
                        <span
                          className={`text-xs sm:text-sm font-semibold leading-snug ${
                            selected ? 'text-[#cc0000]' : 'text-[#111111]'
                          }`}
                        >
                          {label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-[#111111] mb-1.5">
                    Preferred Date *
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-semibold text-[#111111] mb-1.5">
                    Preferred Time *
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    required
                    value={form.time}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-[#111111] mb-1.5">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={form.notes}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  placeholder="Share symptoms, care needs, or special instructions..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-[#cc0000] text-white font-semibold py-4 rounded-xl hover:bg-[#aa0000] transition-colors duration-200 shadow-lg shadow-red-200/60 disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Book Appointment'}
                <ArrowRight size={18} />
              </button>

              <p className="text-center text-xs text-[#888888] leading-relaxed">
                Or email us directly at{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-1 text-[#cc0000] hover:text-[#C0392B] transition-colors"
                >
                  <Mail size={14} strokeWidth={2} />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </p>

              <p className="text-center text-xs text-gray-500 leading-relaxed">
                By booking, you agree to our terms of service. For emergencies, call{' '}
                <a href="tel:+917654247569" className="text-[#cc0000] font-semibold hover:underline">
                  +91 7654247569
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
