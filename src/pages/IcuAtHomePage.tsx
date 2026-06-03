import {
  Activity,
  CalendarDays,
  HeartPulse,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
  UserRound,
  Waypoints,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import icuHomeCareHero from '../assets/images/icu-home-care-hero.svg';

const icuHighlights = [
  {
    title: '24/7',
    description: 'Emergency Support',
    icon: <span className="text-[15px] font-extrabold tracking-tight">24/7</span>,
  },
  {
    title: 'Experienced',
    description: 'ICU Team',
    icon: <UserRound size={24} strokeWidth={2.1} />,
  },
  {
    title: 'Warangal | Hanamkonda |',
    description: 'Kazipet',
    icon: <MapPin size={24} strokeWidth={2.1} />,
  },
  {
    title: 'Since',
    description: '2020',
    icon: <ShieldCheck size={24} strokeWidth={2.1} />,
  },
] as const;

const icuServices = [
  {
    title: 'Ventilator Support',
    description: 'Advanced ventilator care managed by trained ICU professionals at home.',
    icon: <Waypoints size={34} strokeWidth={1.9} />,
  },
  {
    title: 'Nursing Care',
    description: 'Trained ICU nurses for medication, hygiene, and continuous patient care.',
    icon: <HeartPulse size={34} strokeWidth={1.9} />,
  },
  {
    title: 'Patient Monitoring',
    description: 'Continuous monitoring of vital parameters with advanced equipment.',
    icon: <Activity size={34} strokeWidth={1.9} />,
  },
  {
    title: 'Doctor Visits',
    description: 'Regular doctor visits and 24/7 tele-consultation for critical care.',
    icon: <Stethoscope size={34} strokeWidth={1.9} />,
  },
] as const;

const icuIdealFor = [
  'Post-ICU discharge patients requiring continued monitoring',
  'Ventilator-dependent or oxygen-dependent patients',
  'Patients with multi-organ complications in recovery',
  'Palliative care requiring intensive symptom management',
  'Elderly patients needing 24/7 clinical oversight',
] as const;

const clinicalGovernance = [
  'Pre-service clinical assessment',
  'Doctor prescription and care plan verification',
  'High-risk procedure consent documentation',
  'Emergency escalation protocol and direct hospital referral pathway',
  'Daily documentation and digital care logs',
  'Regular family briefing and care coordination',
] as const;

const whyChooseIcu = [
  {
    title: 'Skilled ICU-Trained Nurses',
    description: 'Hospital-grade clinical competence at home for critical recovery and long-term support.',
  },
  {
    title: '24/7 Emergency Backup',
    description: 'Immediate escalation support with doctor coordination whenever the case demands it.',
  },
  {
    title: 'Transparent Pricing',
    description: 'Custom monthly packages with assessment-based planning and no surprise billing.',
  },
  {
    title: 'Equipment Included',
    description: 'Rental support for oxygen, monitoring, suction, BiPAP, and other critical-care essentials.',
  },
  {
    title: 'Digital Documentation',
    description: 'Real-time progress updates to family members and the treating physician.',
  },
] as const;

export default function IcuAtHomePage() {
  return (
    <div className="bg-[#F9FAFB] pt-[72px] lg:pt-[104px]">
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[#F3F4F6]" />

        <div className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-16 lg:pt-10">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.26em] text-[#374151] sm:text-xs">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C0392B] text-white shadow-[0_10px_24px_rgba(192,57,43,0.22)]">
                  <HeartPulse size={18} strokeWidth={2.4} />
                </span>
                Complete Critical Care At Home
              </div>

              <h1 className="text-[3.2rem] font-black leading-[0.95] tracking-[-0.05em] text-[#1F2937] sm:text-[4.8rem] lg:text-[6rem] xl:text-[6.7rem]">
                ICU@
                <span className="text-[#C0392B]">Home</span>
              </h1>

              <p className="mt-6 max-w-[39rem] text-[18px] leading-[1.7] text-[#6B7280] sm:text-[20px] lg:text-[21px]">
                Advanced critical care at home with ICU setup, trained nurses, monitoring, oxygen support,
                ventilator care, and 24/7 doctor supervision.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C0392B] px-8 py-4 text-base font-semibold text-white shadow-[0_14px_30px_rgba(192,57,43,0.18)] transition-all duration-200 hover:bg-[#8F2D22]"
                >
                  <CalendarDays size={19} strokeWidth={2.1} />
                  Book ICU Consultation
                </Link>

                <a
                  href="tel:+917654247569"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-[#C0392B] bg-white px-8 py-4 text-base font-semibold text-[#C0392B] transition-colors duration-200 hover:bg-[#8F2D22] hover:text-white"
                >
                  <Phone size={19} strokeWidth={2.1} />
                  Call Now
                </a>
              </div>

              <div className="mt-10 grid gap-4 border-t border-[#E5E7EB] pt-7 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0 xl:pt-8">
                {icuHighlights.map((item, index) => (
                  <div
                    key={`${item.title}-${item.description}`}
                    className={`flex items-start gap-4 xl:px-5 ${index < icuHighlights.length - 1 ? 'xl:border-r xl:border-[#E5E7EB]' : ''} ${
                      index === 0 ? 'xl:pl-0' : ''
                    }`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#C0392B] text-[#C0392B]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[13px] font-extrabold leading-5 text-[#1F2937] sm:text-[15px]">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-[#6B7280]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="absolute -left-10 top-12 h-36 w-36 rounded-full bg-[#F3F4F6] blur-3xl" aria-hidden="true" />
              <div className="absolute -right-12 bottom-10 h-40 w-40 rounded-full bg-[#F3F4F6] blur-3xl" aria-hidden="true" />
              <div className="relative h-[320px] w-full overflow-hidden rounded-[26px] border border-[#E5E7EB] bg-[#F3F4F6] shadow-[0_20px_60px_rgba(17,17,17,0.12)] sm:h-[440px] lg:h-[610px] lg:rounded-[32px]">
                <img
                  src={icuHomeCareHero}
                  alt="ICU at home setup with patient monitoring, critical care nurse, and family support"
                  className="h-full w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-[rgba(17,17,17,0.28)]" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-left text-white sm:p-10">
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/80">ICU@Home</p>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Intensive monitoring and clinical support at home
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-7 text-white/85">
                    Managed home critical care with equipment, trained nurses, doctor coordination, and emergency backup.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-20 mt-10 grid gap-5 md:grid-cols-2 xl:mt-[-18px] xl:grid-cols-4">
            {icuServices.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[22px] border border-[#E5E7EB] bg-white p-7 shadow-[0_10px_28px_rgba(17,17,17,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(17,17,17,0.1)]"
              >
                <div className="mb-5 flex h-[86px] w-[86px] items-center justify-center rounded-full bg-[#F3F4F6] text-[#C0392B]">
                  {service.icon}
                </div>
                <h2 className="pr-8 text-[1.55rem] font-extrabold leading-tight tracking-[-0.03em] text-[#1F2937]">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-[16rem] text-[15px] leading-8 text-[#6B7280]">{service.description}</p>
                <span className="absolute bottom-7 right-7 text-[31px] font-light leading-none text-[#C0392B] transition-transform duration-300 group-hover:translate-x-1">
                  ›
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <article className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-[#C0392B]">What is ICU@Home?</p>
              <h2 className="mt-4 font-heading text-3xl font-black text-[#1F2937]">Advanced home-based critical care for medically stable patients.</h2>
              <p className="mt-5 text-base leading-8 text-[#6B7280]">
                ICU@Home is Medicoline Healthcare advanced home-based critical care program designed for patients who
                require intensive monitoring and clinical support but are medically stable enough to be managed at home.
              </p>
            </article>

            <article className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-[#C0392B]">Ideal For</p>
              <ul className="mt-5 space-y-3">
                {icuIdealFor.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-[#6B7280]">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#C0392B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-[#C0392B]">Safety and Clinical Governance</p>
            <h2 className="mt-4 font-heading text-3xl font-black text-[#1F2937] sm:text-4xl">Protocol-driven care with daily oversight and escalation pathways.</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {clinicalGovernance.map((item) => (
              <article key={item} className="rounded-[1.75rem] border border-[#E5E7EB] bg-[#F9FAFB] p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#C0392B] shadow-sm">
                  <ShieldCheck size={22} />
                </div>
                <p className="mt-5 text-sm leading-7 text-[#6B7280]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-[#C0392B]">Why Choose Medicoline ICU@Home?</p>
              <h2 className="mt-4 font-heading text-3xl font-black text-[#1F2937] sm:text-4xl">Hospital-level support without the burden of a prolonged stay.</h2>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {whyChooseIcu.map((item) => (
                  <article key={item.title} className="rounded-[1.75rem] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                    <h3 className="font-heading text-xl font-bold text-[#1F2937]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#6B7280]">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-[#C0392B]">Assessment and Pricing</p>
              <h3 className="mt-4 font-heading text-2xl font-black text-[#1F2937]">Custom package pricing based on case assessment.</h3>
              <p className="mt-5 text-base leading-8 text-[#6B7280]">
                Every ICU@Home case is planned around patient condition, equipment needs, nursing intensity, and
                escalation support. Contact us for a detailed care plan and cost estimate.
              </p>
              <div className="mt-8 space-y-4 rounded-[1.5rem] bg-[#F9FAFB] p-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C0392B]">ICU Contact</p>
                <a href="tel:+917654247569" className="block text-lg font-bold text-[#1F2937] hover:text-[#C0392B]">
                  +91 7654247569
                </a>
                <a href="mailto:support@medicolinehealthcare.com" className="block text-base font-semibold text-[#6B7280] hover:text-[#C0392B]">
                  support@medicolinehealthcare.com
                </a>
              </div>
              <Link
                to="/contact#book-appointment"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#C0392B] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#8F2D22]"
              >
                Request ICU@Home Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
