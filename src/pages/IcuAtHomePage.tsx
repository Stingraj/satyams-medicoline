import {
  Activity,
  CalendarDays,
  HeartPulse,
  Phone,
  ShieldCheck,
  Stethoscope,
  UserRound,
  Waypoints,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ICU_HOME_IMAGE_SRC = '/images/icu-at-home.jpg';

const icuTrustIndicators = [
  {
    title: '5+ Years Experience',
    description: 'Trusted clinical care',
    icon: <span className="text-[11px] font-black tracking-tighter">5+ Yrs</span>,
  },
  {
    title: '60 Min Response',
    description: 'Rapid emergency backup',
    icon: <Activity className="w-5 h-5" strokeWidth={2.5} />,
  },
  {
    title: 'Qualified ICU Staff',
    description: '100% Certified Nurses',
    icon: <UserRound className="w-5 h-5" strokeWidth={2.5} />,
  },
  {
    title: 'Home Critical Care',
    description: 'Hospital Setup at Home',
    icon: <ShieldCheck className="w-5 h-5" strokeWidth={2.5} />,
  },
] as const;

const icuServices = [
  {
    title: 'Ventilator Support',
    description: 'Advanced ventilator care managed by trained ICU professionals at home.',
    icon: <Waypoints className="w-5 h-5" strokeWidth={1.9} />,
  },
  {
    title: 'Nursing Care',
    description: 'Trained ICU nurses for medication, hygiene, and continuous patient care.',
    icon: <HeartPulse className="w-5 h-5" strokeWidth={1.9} />,
  },
  {
    title: 'Patient Monitoring',
    description: 'Continuous monitoring of vital parameters with advanced equipment.',
    icon: <Activity className="w-5 h-5" strokeWidth={1.9} />,
  },
  {
    title: 'Doctor Visits',
    description: 'Regular doctor visits and 24/7 tele-consultation for critical care.',
    icon: <Stethoscope className="w-5 h-5" strokeWidth={1.9} />,
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
    <div className="bg-[#F9FAFB] pt-0 pb-20 md:pb-0">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white py-6 sm:py-12 lg:py-16">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[#F9FAFB] opacity-30" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <div className="relative z-10 flex flex-col items-start text-left">
              {/* Pill badge spacing: 16px (mb-4) */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C0392B]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#C0392B] sm:text-xs">
                <HeartPulse size={12} className="animate-pulse shrink-0" />
                ICU-Grade Care at Home
              </div>

              {/* Title size: 30px on small, 34px on xs, line height: tight. Max 2-3 lines */}
              <h1 className="text-[30px] xs:text-[34px] font-black leading-tight tracking-tight text-[#1F2937] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem]">
                Critical ICU Care <br />
                <span className="text-[#C0392B]">In Your Own Home</span>
              </h1>

              {/* Body text size: 15px to 16px */}
              <p className="mt-4 max-w-[39rem] text-[15px] xs:text-[16px] leading-relaxed text-[#6B7280] sm:text-lg lg:text-xl">
                Advanced critical care setup managed by hospital-trained ICU nurses and senior doctors. Emergency backup and regular monitoring.
              </p>

              {/* Feature Checklist - scanable, 16px top spacing */}
              <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 w-full max-w-md">
                <div className="flex items-center gap-2 text-[13px] xs:text-[15px] font-semibold text-[#374151]">
                  <span className="text-[#C0392B] font-bold text-[15px]">✓</span> ICU-Trained Nurses
                </div>
                <div className="flex items-center gap-2 text-[13px] xs:text-[15px] font-semibold text-[#374151]">
                  <span className="text-[#C0392B] font-bold text-[15px]">✓</span> 24/7 Monitoring
                </div>
                <div className="flex items-center gap-2 text-[13px] xs:text-[15px] font-semibold text-[#374151]">
                  <span className="text-[#C0392B] font-bold text-[15px]">✓</span> Hospital-Level Care
                </div>
                <div className="flex items-center gap-2 text-[13px] xs:text-[15px] font-semibold text-[#374151]">
                  <span className="text-[#C0392B] font-bold text-[15px]">✓</span> Doctor Coordination
                </div>
              </div>

              {/* Buttons: above the fold on mobile viewports */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#C0392B] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_20px_rgba(192,57,43,0.15)] transition-all duration-200 hover:bg-[#8F2D22] w-full sm:w-auto text-center"
                >
                  <CalendarDays size={16} strokeWidth={2} />
                  Book ICU Consultation
                </Link>

                <a
                  href="tel:+917654247569"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#C0392B] bg-white px-6 py-3.5 text-sm font-bold text-[#C0392B] transition-colors duration-200 hover:bg-[#C0392B] hover:text-white w-full sm:w-auto text-center"
                >
                  <Phone size={16} strokeWidth={2} />
                  Call Now
                </a>
              </div>
            </div>

            {/* Compact Image Card */}
            <div className="relative z-10 w-full mt-4 lg:mt-0">
              <div className="relative h-[180px] xs:h-[220px] sm:h-[350px] lg:h-[480px] w-full overflow-hidden rounded-xl sm:rounded-[32px] border border-[#E5E7EB] bg-[#F3F4F6] shadow-sm">
                <img
                  src={ICU_HOME_IMAGE_SRC}
                  alt="Medicoline ICU setup at home"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,17,17,0.7)] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-left text-white sm:p-8">
                  <p className="text-[10px] sm:text-sm font-bold uppercase tracking-wider text-white/80">ICU@Home</p>
                  <h2 className="mt-1 text-sm xs:text-base sm:text-2xl font-bold leading-tight">
                    Intensive clinical monitoring at home
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION: Immediately below Hero Section. Grid spacing: 16px (gap-4) */}
      <section className="bg-[#F9FAFB] py-6 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {icuTrustIndicators.map((indicator) => (
              <div
                key={indicator.title}
                className="flex flex-col items-start rounded-xl border border-gray-100 bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C0392B]/10 text-[#C0392B] mb-3 shrink-0">
                  {indicator.icon}
                </div>
                <h3 className="text-[14px] sm:text-[16px] font-bold text-[#1F2937] leading-tight">
                  {indicator.title}
                </h3>
                <p className="mt-1 text-[11px] sm:text-[13px] leading-normal text-[#6B7280]">
                  {indicator.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ICU@HOME (Services layout) - spacing: 48px (py-12), card titles: 18px */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C0392B]">Specialized Home Care</p>
            {/* Title size: 24px */}
            <h2 className="mt-2 text-[24px] font-extrabold leading-tight text-[#1F2937] sm:text-3xl lg:text-4xl">
              Our ICU@Home Services
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {icuServices.map((service) => (
              <article
                key={service.title}
                className="group relative flex flex-col justify-between h-full rounded-xl border border-gray-100 bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#C0392B]/5 text-[#C0392B] shrink-0">
                    {service.icon}
                  </div>
                  {/* Card Title size: 18px */}
                  <h3 className="text-[15px] sm:text-[18px] font-bold leading-snug text-[#1F2937]">
                    {service.title}
                  </h3>
                  {/* Body Text size: 15px */}
                  <p className="mt-2 text-[12px] sm:text-[15px] leading-relaxed text-[#6B7280]">
                    {service.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-end">
                  <span className="text-lg font-light leading-none text-[#C0392B] transition-transform duration-300 group-hover:translate-x-1">
                    ›
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEFINITION SECTION - spacing: 48px (py-12) */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <article className="rounded-xl border border-gray-100 bg-[#F9FAFB] p-5 sm:p-8 shadow-sm">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C0392B]">Clinical Definition</p>
              {/* Title size: 24px */}
              <h2 className="mt-2 text-[20px] sm:text-[24px] font-bold text-[#1F2937]">What is ICU@Home?</h2>
              <p className="mt-4 text-[13px] sm:text-[15px] leading-relaxed text-[#6B7280]">
                ICU@Home is Medicoline Healthcare&apos;s advanced home-based critical care program designed for patients who
                require intensive monitoring and clinical support but are medically stable enough to be managed at home.
              </p>
            </article>

            <article className="rounded-xl border border-gray-100 bg-[#F9FAFB] p-5 sm:p-8 shadow-sm">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C0392B]">Patient Suitability</p>
              {/* Title size: 24px */}
              <h2 className="mt-2 text-[20px] sm:text-[24px] font-bold text-[#1F2937]">Ideal For</h2>
              <ul className="mt-4 space-y-2.5">
                {icuIdealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] sm:text-[15px] leading-relaxed text-[#6B7280]">
                    <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#C0392B]/10 text-[#C0392B] mt-0.5">
                      <ShieldCheck size={12} strokeWidth={2.5} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* SAFETY & GOVERNANCE - spacing: 48px (py-12) */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C0392B]">Safety First</p>
            {/* Title size: 24px */}
            <h2 className="mt-2 text-[24px] font-extrabold leading-tight text-[#1F2937]">Clinical Governance Standards</h2>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {clinicalGovernance.map((item) => (
              <article key={item} className="flex gap-4 rounded-xl border border-gray-100 bg-[#F9FAFB] p-4 shadow-sm items-center">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#C0392B] shadow-sm">
                  <ShieldCheck size={18} strokeWidth={2.2} />
                </div>
                <p className="text-[13px] sm:text-[15px] leading-relaxed text-[#6B7280]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE MEDICOLINE & PRICING - spacing: 48px (py-12) */}
      <section className="bg-[#F9FAFB] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C0392B]">Why Choose Medicoline ICU@Home?</p>
              {/* Title size: 24px */}
              <h2 className="mt-2 text-[24px] font-extrabold leading-tight text-[#1F2937] sm:text-3xl">Hospital-level support without the burden of a prolonged stay.</h2>
              <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2">
                {whyChooseIcu.map((item) => (
                  <article key={item.title} className="flex flex-col justify-between h-full rounded-xl border border-gray-100 bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
                    <div>
                      {/* Card Title size: 18px */}
                      <h3 className="text-[15px] sm:text-[18px] font-bold text-[#1F2937]">{item.title}</h3>
                      <p className="mt-2 text-[12px] sm:text-[15px] leading-relaxed text-[#6B7280]">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* ASSESSMENT & PRICING SECTION: Redesigned premium card with checkmarks */}
            <div className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full">
              <div>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C0392B]">Assessment & Pricing</p>
                <h3 className="mt-2 text-[20px] sm:text-[24px] font-black text-[#1F2937]">Custom Home ICU Planning</h3>
                <p className="mt-3 text-[13px] sm:text-[15px] leading-relaxed text-[#6B7280]">
                  Every critical care setup is planned individually based on patient status, equipment needs, and medical team requirements.
                </p>
                <ul className="mt-4 space-y-2.5 border-t border-gray-100 pt-4">
                  <li className="flex items-center gap-2 text-[13px] xs:text-[15px] font-semibold text-[#374151]">
                    <span className="text-[#C0392B] font-bold text-[15px]">✓</span> Personalized Assessment
                  </li>
                  <li className="flex items-center gap-2 text-[13px] xs:text-[15px] font-semibold text-[#374151]">
                    <span className="text-[#C0392B] font-bold text-[15px]">✓</span> Equipment Planning
                  </li>
                  <li className="flex items-center gap-2 text-[13px] xs:text-[15px] font-semibold text-[#374151]">
                    <span className="text-[#C0392B] font-bold text-[15px]">✓</span> ICU Staffing
                  </li>
                  <li className="flex items-center gap-2 text-[13px] xs:text-[15px] font-semibold text-[#374151]">
                    <span className="text-[#C0392B] font-bold text-[15px]">✓</span> Monthly Care Plan
                  </li>
                  <li className="flex items-center gap-2 text-[13px] xs:text-[15px] font-semibold text-[#374151]">
                    <span className="text-[#C0392B] font-bold text-[15px]">✓</span> Transparent Pricing
                  </li>
                </ul>
              </div>
              <Link
                to="/contact#book-appointment"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#C0392B] px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-[#8F2D22] w-full text-center"
              >
                Request Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION: Conversion-focused, one-click calls, WhatsApp, email */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C0392B]">Urgent Care Coordination</p>
          {/* Title size: 24px */}
          <h2 className="mt-2 text-[24px] font-extrabold text-[#1F2937]">Need Emergency Home ICU Support?</h2>
          <p className="mt-3 max-w-xl mx-auto text-[13px] sm:text-[15px] text-[#6B7280]">
            Speak directly with our clinical manager to set up equipment and schedule ICU nurses.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-2xl mx-auto">
            <a
              href="tel:+917654247569"
              className="flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-[#C0392B]/30 transition-colors"
            >
              <Phone className="w-5 h-5 text-[#C0392B] shrink-0" />
              <div className="text-left">
                <p className="text-[9px] font-bold text-gray-400 uppercase">One-Click Call</p>
                <p className="text-[14px] font-bold text-[#1F2937]">+91 76542 47569</p>
              </div>
            </a>

            <a
              href="https://wa.me/917654247569?text=EMERGENCY%20ICU:%20I%20need%20critical%20care%20setup."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-[#FFF] p-4 shadow-sm hover:border-green-300 transition-colors"
            >
              <svg className="w-5 h-5 fill-current text-[#25D366] shrink-0" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div className="text-left">
                <p className="text-[9px] font-bold text-gray-400 uppercase">One-Click WhatsApp</p>
                <p className="text-[14px] font-bold text-[#1F2937]">Chat with Doctor</p>
              </div>
            </a>

            <a
              href="mailto:support@medicolinehealthcare.com?subject=Home%20ICU%20Service%20Enquiry"
              className="flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-[#C0392B]/30 transition-colors"
            >
              <svg className="w-5 h-5 text-[#C0392B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="text-left">
                <p className="text-[9px] font-bold text-gray-400 uppercase">One-Click Email</p>
                <p className="text-[14px] font-bold text-[#1F2937]">Send Request</p>
              </div>
            </a>
          </div>

          <div className="mt-6 text-[12px] font-bold text-[#C0392B] uppercase tracking-wider flex items-center justify-center gap-2 animate-pulse">
            <span className="w-2.5 h-2.5 bg-[#C0392B] rounded-full inline-block"></span>
            Emergency Support Coordination Available 24/7
          </div>
        </div>
      </section>

      {/* STICKY MOBILE CTA ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-[999] md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 p-3 shadow-[0_-8px_30px_rgba(0,0,0,0.06)] flex gap-3">
        <a
          href="https://wa.me/917654247569?text=Hi,%20I%20am%20interested%20in%20Medicoline%20ICU@Home%20service.%20Please%20guide%20me."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl text-sm font-bold shadow-[0_4px_12px_rgba(37,211,102,0.2)] hover:bg-[#20ba59] active:scale-[0.98] transition-all"
        >
          💬 WhatsApp
        </a>
        <a
          href="tel:+917654247569"
          className="flex-1 flex items-center justify-center gap-2 bg-[#C0392B] text-white py-3 rounded-xl text-sm font-bold shadow-[0_4px_12px_rgba(192,57,43,0.2)] hover:bg-[#8F2D22] active:scale-[0.98] transition-all"
        >
          📞 Call Now
        </a>
      </div>
    </div>
  );
}
