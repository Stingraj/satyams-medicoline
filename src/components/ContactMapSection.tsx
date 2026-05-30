import { useState } from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, Youtube } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const MAP_EMBED_SRC =
  'https://maps.google.com/maps?q=MGM+Hospital+Warangal+Telangana+506007&hl=en&z=15&ie=UTF8&iwloc=&output=embed';
const CONTACT_EMAIL = 'info@medicolinehealthcare.com';

const inputClass =
  'w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0392B]/30 focus:border-[#C0392B] transition-shadow';

export default function ContactMapSection() {
  const { ref, visible } = useScrollReveal();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    service: 'Nursing Care',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
          formType: 'Contact Request',
          subject: 'New Contact Request — Medicoline Healthcare',
          userEmail: form.email,
          formData: {
            'Name': form.name,
            'Phone': form.phone,
            'Email': form.email,
            'Service selected': form.service,
            'Message': form.message,
            'Date submitted': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          },
        }),
      });

      const resData = await response.json();
      if (resData.success) {
        setSubmitted(true);
        setForm({
          name: '',
          service: 'Nursing Care',
          phone: '',
          email: '',
          message: '',
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
    <section className="bg-white py-12 md:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-extrabold text-[#111111] text-3xl sm:text-4xl tracking-tight mb-3">
            Get In Touch
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-14 h-1 bg-[#C0392B] rounded-full" />
          </div>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Send us a message or visit our headquarters in Warangal.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 ${
            visible ? 'section-visible' : 'section-hidden'
          }`}
        >
          <div className="bg-[#fbf9f8] rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col justify-center min-h-[380px]">
            {submitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-[#fff5f5] text-[#C0392B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-extrabold text-xl text-[#111111] mb-2">Message Sent!</h3>
                <p className="text-sm text-gray-500 max-w-sm mx-auto mb-6">
                  Thank you for reaching out. We have received your inquiry and our support team will get in touch with you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="bg-[#C0392B] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#A93226] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-[#111111] mb-1.5">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-service" className="block text-sm font-semibold text-[#111111] mb-1.5">
                      Service Selected *
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="Nursing Care">Nursing Care</option>
                      <option value="Physiotherapy">Physiotherapy</option>
                      <option value="Elderly Care">Elderly Care</option>
                      <option value="Diagnostic Test">Diagnostic Test</option>
                      <option value="Post Surgery Care">Post Surgery Care</option>
                      <option value="Other Services">Other Services</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-[#111111] mb-1.5">
                      Phone *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="+91 7654247569"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-[#111111] mb-1.5">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-[#111111] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us more about your appointment..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C0392B] text-white font-semibold py-4 rounded-xl hover:bg-[#A93226] transition-colors duration-200 shadow-sm disabled:opacity-50"
                >
                  {loading ? 'Sending Message...' : '✉ Send Message'}
                </button>
              </form>
            )}
          </div>

          <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm min-h-[360px] lg:min-h-full bg-gray-100">
            <iframe
              title="Medicoline location — Warangal"
              src={MAP_EMBED_SRC}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 flex gap-3 items-start">
              <span className="w-9 h-9 rounded-lg bg-[#fff5f5] flex items-center justify-center shrink-0 text-[#C0392B]">
                <MapPin size={18} />
              </span>
              <div className="space-y-2">
                <p className="text-sm text-[#111111] font-semibold leading-snug">
                  Medicoline HQ: Near MGM Hospital, Warangal, Telangana - 506007.
                </p>
                <a
                  href="tel:+917654247569"
                  className="inline-flex items-center gap-2 text-sm text-[#111111] font-semibold hover:text-[#C0392B] transition-colors"
                >
                  <Phone size={16} strokeWidth={2} className="text-[#C0392B]" />
                  <span>+91 76542 47569</span>
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 text-sm text-[#111111] font-semibold hover:text-[#C0392B] transition-colors"
                >
                  <Mail size={16} strokeWidth={2} className="text-[#C0392B]" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
                <div className="pt-2 border-t border-gray-100 mt-2">
                  <p className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Follow Us On</p>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.instagram.com/we.medicoline/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C0392B] hover:scale-110 transform transition-transform duration-200"
                      aria-label="Instagram"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-[#C0392B] hover:scale-110 transform transition-transform duration-200"
                      aria-label="Facebook"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-[#C0392B] hover:scale-110 transform transition-transform duration-200"
                      aria-label="YouTube"
                    >
                      <Youtube size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
