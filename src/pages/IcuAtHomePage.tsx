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

export default function IcuAtHomePage() {
  return (
    <div className="bg-[#f7f9fd] pt-[72px] lg:pt-[104px]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,1)_0%,rgba(255,255,255,0.97)_48%,rgba(248,249,252,1)_100%)]">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(247,249,253,0)_0%,rgba(247,249,253,0.92)_65%,rgba(247,249,253,1)_100%)]" />

        <div className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-16 lg:pt-10">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.26em] text-[#244d95] sm:text-xs">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C0392B] text-white shadow-[0_10px_24px_rgba(192,57,43,0.22)]">
                  <HeartPulse size={18} strokeWidth={2.4} />
                </span>
                Complete Critical Care At Home
              </div>

              <h1 className="text-[3.2rem] font-black leading-[0.95] tracking-[-0.05em] text-[#07122b] sm:text-[4.8rem] lg:text-[6rem] xl:text-[6.7rem]">
                ICU@
                <span className="text-[#C0392B]">Home</span>
              </h1>

              <p className="mt-6 max-w-[39rem] text-[18px] leading-[1.7] text-[#3f4a5b] sm:text-[20px] lg:text-[21px]">
                Advanced critical care at home with ICU setup, trained nurses, monitoring, oxygen support,
                ventilator care, and 24/7 doctor supervision.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C0392B] px-8 py-4 text-base font-semibold text-white shadow-[0_14px_30px_rgba(192,57,43,0.18)] transition-all duration-200 hover:bg-[#A93226]"
                >
                  <CalendarDays size={19} strokeWidth={2.1} />
                  Book ICU Consultation
                </Link>

                <a
                  href="tel:+917654247569"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-[#C0392B] bg-white px-8 py-4 text-base font-semibold text-[#C0392B] transition-colors duration-200 hover:bg-[#C0392B] hover:text-white"
                >
                  <Phone size={19} strokeWidth={2.1} />
                  Call Now
                </a>
              </div>

              <div className="mt-10 grid gap-4 border-t border-[#d8dde8] pt-7 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0 xl:pt-8">
                {icuHighlights.map((item, index) => (
                  <div
                    key={`${item.title}-${item.description}`}
                    className={`flex items-start gap-4 xl:px-5 ${index < icuHighlights.length - 1 ? 'xl:border-r xl:border-[#d8dde8]' : ''} ${
                      index === 0 ? 'xl:pl-0' : ''
                    }`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#1f4fa1] text-[#1f4fa1]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[13px] font-extrabold leading-5 text-[#07122b] sm:text-[15px]">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-[#4b5563]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="absolute -left-10 top-12 h-36 w-36 rounded-full bg-[#ffd9d9] blur-3xl" aria-hidden="true" />
              <div className="absolute -right-12 bottom-10 h-40 w-40 rounded-full bg-[#dce8ff] blur-3xl" aria-hidden="true" />
              <div className="relative flex h-[320px] w-full items-center justify-center rounded-[26px] border border-[#e2e8f3] bg-[linear-gradient(135deg,#eef4ff_0%,#ffffff_48%,#fff2f2_100%)] p-8 text-center shadow-[0_20px_60px_rgba(7,18,43,0.12)] sm:h-[440px] lg:h-[610px] lg:rounded-[32px]">
                <div className="max-w-sm">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#C0392B] shadow-sm">
                    <HeartPulse size={34} strokeWidth={2} />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#C0392B]">ICU@Home</p>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#07122b] sm:text-4xl">
                    Image coming soon
                  </h2>
                  <p className="mt-4 text-base leading-7 text-[#4b5563]">
                    This space is reserved for the final ICU-at-home hero image once the approved real photo is ready.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-20 mt-10 grid gap-5 md:grid-cols-2 xl:mt-[-18px] xl:grid-cols-4">
            {icuServices.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[22px] border border-[#eef1f6] bg-white p-7 shadow-[0_10px_28px_rgba(14,30,62,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(14,30,62,0.1)]"
              >
                <div className="mb-5 flex h-[86px] w-[86px] items-center justify-center rounded-full bg-[#eef4ff] text-[#2754a0]">
                  {service.icon}
                </div>
                <h2 className="pr-8 text-[1.55rem] font-extrabold leading-tight tracking-[-0.03em] text-[#07122b]">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-[16rem] text-[15px] leading-8 text-[#4b5563]">{service.description}</p>
                <span className="absolute bottom-7 right-7 text-[31px] font-light leading-none text-[#C0392B] transition-transform duration-300 group-hover:translate-x-1">
                  ›
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
