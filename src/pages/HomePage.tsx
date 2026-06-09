import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles, Star, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import EcgAtHome from '../components/EcgAtHome';
import NursingPackages from '../components/NursingPackages';
import FAQ from '../components/FAQ';
import OurPartners from '../components/OurPartners';
import DoctorProfileCard from '../components/DoctorProfileCard';
import doctors from '../data/doctors';

const missionPoints = [
  'To deliver professional healthcare services at the patient doorstep',
  'To ensure dignity, comfort, and safety for every patient',
  'To provide trained and verified nursing and support staff',
  'To maintain ethical practices and transparent pricing',
  'To standardize home healthcare with NABH-aligned quality benchmarks',
] as const;

const stats = [
  { value: '200+', label: 'Patients Served' },
  { value: '100+', label: 'Verified Professionals' },
  { value: '24/7', label: 'Emergency Backup' },
  { value: 'NABH', label: 'Aligned Protocols' },
] as const;

const values = [
  { title: 'Compassion', description: 'Provide care with empathy and respect.', icon: HeartHandshake },
  { title: 'Excellence', description: 'Maintain the highest standards of clinical quality.', icon: ShieldCheck },
  { title: 'Integrity', description: 'Operate with honesty, transparency, and accountability.', icon: Target },
  { title: 'Innovation', description: 'Continuously improve healthcare delivery.', icon: Sparkles },
  { title: 'Trust', description: 'Build long-term relationships with patients and families.', icon: Users },
] as const;

const testimonials = [
  {
    quote: 'The Medicoline team supported our family with timely nursing care and clear communication.',
    name: 'Kamala Devi',
    rating: 4,
  },
  {
    quote: 'Home physiotherapy made recovery easier and more consistent after discharge.',
    name: 'Narsaiah',
    rating: 5,
  },
  {
    quote: 'The emergency backup and monitoring support gave us confidence during home care.',
    name: 'Kamalamma',
    rating: 3,
  },
] as const;

export default function HomePage() {
  const teamPreview = doctors.slice(0, 4);

  return (
    <>
      <section id="hero" data-section="home">
        <Hero />
      </section>

      <section id="home-about" className="bg-[#F9FAFB] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-[#C0392B]">About Medicoline</p>
              <h2 className="mt-4 font-heading text-3xl font-black text-[#1F2937] sm:text-4xl">
                Home healthcare that bridges recovery, dignity, and continuity of care.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[#6B7280]">
                Medicoline Healthcare is a professionally managed home healthcare organization providing safe,
                reliable, and compassionate medical services at patients homes in Warangal | Hanamkonda | Kazipet.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#6B7280]">
                We bridge the gap between hospital-based treatment and home-based recovery, ensuring continuity of care
                under medical guidance while maintaining the dignity, comfort, and emotional well-being of our patients.
              </p>
              <p className="mt-6 text-lg font-semibold text-[#1F2937]">
                Your Health, Our Priority - Quality Healthcare at Your Doorstep
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <article className="rounded-[1.75rem] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#C0392B]">Our Vision</p>
                <p className="mt-4 text-sm leading-7 text-[#6B7280]">
                  To become a trusted and leading home healthcare provider by offering affordable, high-quality,
                  and accessible healthcare services across India.
                </p>
              </article>
              <article className="rounded-[1.75rem] border border-[#E5E7EB] bg-white p-6 shadow-sm sm:col-span-2">
                <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#C0392B]">Our Mission</p>
                <ul className="mt-4 space-y-3">
                  {missionPoints.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-7 text-[#6B7280]">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#C0392B]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <div data-section="services">
        <Services />
      </div>

      <section id="home-team" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 text-center">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-[#C0392B]">Our Team Snapshot</p>
            <h2 className="font-heading text-3xl font-black text-[#1F2937] sm:text-4xl">Verified healthcare professionals with clinical excellence.</h2>
            <p className="mx-auto max-w-3xl text-base leading-8 text-[#6B7280]">
              Our team of verified healthcare professionals brings clinical excellence and compassionate care to your home.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teamPreview.map((doctor) => (
              <DoctorProfileCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/doctors#doctors"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C0392B] px-6 py-3 text-sm font-bold text-[#C0392B] transition-colors hover:bg-[#8F2D22] hover:text-white"
            >
              View All Doctors
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section id="home-values" className="bg-[#F9FAFB] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-[#C0392B]">Our Core Values</p>
            <h2 className="mt-4 font-heading text-3xl font-black text-[#1F2937] sm:text-4xl">The principles behind every visit and every decision.</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3F4F6] text-[#C0392B]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-[#1F2937]">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#6B7280]">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="home-stats" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <article key={stat.label} className="rounded-[1.75rem] border border-[#E5E7EB] bg-[#F9FAFB] p-7 text-center shadow-sm">
                <p className="font-heading text-4xl font-black text-[#C0392B]">{stat.value}</p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#6B7280]">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="home-testimonials" className="bg-[#F9FAFB] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 text-center">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-[#C0392B]">Patient Testimonials Preview</p>
            <h2 className="font-heading text-3xl font-black text-[#1F2937] sm:text-4xl">Real stories from families we support.</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-[1.75rem] border border-[#E5E7EB] bg-white p-7 shadow-sm">
                <div className="flex items-center gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, index) => {
                    const filled = index < testimonial.rating;
                    return (
                      <Star
                        key={`${testimonial.name}-star-${index}`}
                        size={18}
                        className={filled ? 'text-[#FBBF24]' : 'text-[#FCD34D]'}
                        fill={filled ? '#FBBF24' : 'none'}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    );
                  })}
                </div>
                <p className="mt-4 text-sm leading-7 text-[#6B7280]">"{testimonial.quote}"</p>
                <p className="mt-5 font-heading text-base font-bold text-[#1F2937]">{testimonial.name}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/faqs"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C0392B] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#8F2D22]"
            >
              Read More Reviews
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <EcgAtHome />
      <NursingPackages />
      <FAQ />
      <OurPartners />
    </>
  );
}
