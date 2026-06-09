import { ArrowRight, HeartHandshake, ShieldCheck, Stethoscope, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import teamImage from '../assets/images/medicoline-team.jpg';
import DoctorProfileCard from '../components/DoctorProfileCard';
import doctors from '../data/doctors';

const missionPoints = [
  'Deliver professional healthcare services at every patient doorstep',
  'Ensure dignity, comfort, and safety for every individual we serve',
  'Deploy only trained, verified, and clinically competent staff',
  'Maintain ethical practices with transparent and affordable pricing',
  'Build NABH-aligned clinical governance systems for home care',
  'Create flexible, rewarding income opportunities for healthcare professionals',
  'Expand access to quality healthcare beyond hospital boundaries',
] as const;

const valueItems = [
  {
    title: 'Patient First',
    description: 'Every decision, from staffing to protocols, centers on patient safety and comfort.',
    icon: HeartHandshake,
  },
  {
    title: 'Clinical Excellence',
    description: 'We follow evidence-based, protocol-driven practices aligned with NABH standards.',
    icon: Stethoscope,
  },
  {
    title: 'Transparency',
    description: 'No hidden charges, honest communication, and professional invoicing.',
    icon: ShieldCheck,
  },
  {
    title: 'Compassion',
    description: 'Every patient is treated with empathy, dignity, and human kindness.',
    icon: Users,
  },
  {
    title: 'Accountability',
    description: 'Our documentation and scrutiny systems ensure zero ambiguity in care delivery.',
    icon: Target,
  },
  {
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in every patient interaction and business decision.',
    icon: ShieldCheck,
  },
] as const;

const teamHighlights = [
  'Senior Consultant',
  'Diabetology',
  'Visiting Physician',
  'Critical Care',
  'Operations Team',
  'Lab Partners',
] as const;

export default function AboutPage() {
  const featuredDoctors = doctors.slice(0, 4);

  return (
    <main id="about" className="bg-white pt-[76px]">
      <section className="bg-[#F9FAFB] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-[#C0392B]">About Medicoline</p>
              <h1 className="mt-4 font-heading text-4xl font-black tracking-tight text-[#1F2937] sm:text-5xl">
                Professional home healthcare with structure, compassion, and trust.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6B7280]">
                Medicoline Healthcare is a professionally managed home healthcare organization providing safe,
                reliable, and compassionate medical services at patients homes in Warangal | Hanamkonda | Kazipet.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[#6B7280]">
                We bridge the gap between hospital-based treatment and home-based recovery, ensuring continuity of
                care under medical guidance while maintaining the dignity, comfort, and emotional well-being of our
                patients.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white shadow-sm">
              <img
                src={teamImage}
                alt="Medicoline Healthcare home healthcare team in Warangal"
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="mission-vision" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-[#C0392B]">Our Vision</p>
              <h2 className="mt-4 font-heading text-3xl font-black text-[#1F2937]">A trusted home healthcare platform for India.</h2>
              <p className="mt-5 text-base leading-8 text-[#6B7280]">
                Medicoline Healthcare envisions becoming Indias most trusted home healthcare platform, delivering
                affordable, high-quality, and accessible healthcare services directly to patients homes.
              </p>
              <p className="mt-4 text-base leading-8 text-[#6B7280]">
                We aim to formalize and standardize Indias decentralized home healthcare workforce, creating a
                governance-driven healthcare ecosystem that protects both patients and healthcare professionals.
              </p>
            </article>

            <article className="rounded-[2rem] border border-[#E5E7EB] bg-[#F9FAFB] p-8 shadow-sm">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-[#C0392B]">Our Mission</p>
              <h2 className="mt-4 font-heading text-3xl font-black text-[#1F2937]">Clinical excellence delivered at the doorstep.</h2>
              <ul className="mt-6 space-y-3">
                {missionPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-base leading-7 text-[#6B7280]">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#C0392B]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="team" className="bg-[#F9FAFB] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 text-center">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-[#C0392B]">Our Team</p>
            <h2 className="font-heading text-3xl font-black text-[#1F2937] sm:text-4xl">Clinical excellence powered by a committed team.</h2>
            <p className="mx-auto max-w-3xl text-base leading-8 text-[#6B7280]">
              Medicoline Healthcare is built by a team of dedicated healthcare professionals, operations experts,
              and patient care coordinators committed to clinical excellence.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredDoctors.map((doctor, index) => (
              <DoctorProfileCard
                key={doctor.id}
                doctor={doctor}
                eyebrow={teamHighlights[index] || 'Healthcare Team'}
              />
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

      <section id="core-values" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-[#C0392B]">Our Core Values</p>
            <h2 className="mt-4 font-heading text-3xl font-black text-[#1F2937] sm:text-4xl">The principles guiding every patient interaction.</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {valueItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-[1.75rem] border border-[#E5E7EB] bg-white p-7 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3F4F6] text-[#C0392B]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-[#1F2937]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#6B7280]">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="partners" className="bg-[#F9FAFB] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-[#C0392B]">Our Partners - Join Us</p>
                <h2 className="mt-4 font-heading text-3xl font-black text-[#1F2937]">Join a structured and professionally rewarding healthcare ecosystem.</h2>
                <p className="mt-5 text-base leading-8 text-[#6B7280]">
                  Medicoline Healthcare collaborates with a growing network of healthcare professionals and
                  institutional partners across Warangal | Hanamkonda | Kazipet.
                </p>
                <p className="mt-4 text-base leading-8 text-[#6B7280]">
                  Partner with Medicoline Healthcare and become part of a structured, legally compliant, and
                  professionally rewarding healthcare ecosystem.
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-[#F9FAFB] p-6">
                <ul className="space-y-4 text-sm leading-7 text-[#6B7280]">
                  <li><span className="font-bold text-[#1F2937]">Earn More:</span> Receive 10% referral earnings and attractive profit-sharing opportunities on eligible services.</li>
                  <li><span className="font-bold text-[#1F2937]">Retain Your Patients:</span> Patients stay connected to your care ecosystem even after leaving the hospital.</li>
                  <li><span className="font-bold text-[#1F2937]">No Loss of Follow-Ups:</span> Medicoline follows a doctor-first approach and refers patients back for reviews.</li>
                  <li><span className="font-bold text-[#1F2937]">Dedicated Relationship Support:</span> Our team coordinates patient services, updates, and communication.</li>
                </ul>

                <a
                  href="https://forms.gle/FWmQ9X469TheMoQ97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#C0392B] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#8F2D22]"
                >
                  Join as a Partner
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
