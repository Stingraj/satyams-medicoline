import { Activity, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { services } from '../data/services';

const serviceAnchors = [
  'nursing-care',
  'doctor-consultation',
  'ecg-at-home',
  'xray-at-home',
  'physiotherapy',
  'dietitian',
  'gda',
  'lab-collection',
  'medicine-delivery',
  'vaccination',
  'rental-equipment',
  'wound-care',
  'emergency-backup',
];

const expandedServices = [
  {
    id: 'nursing-care',
    title: 'Nursing Care Services',
    points: ['Medication administration', 'IV fluids and injections', 'Wound and surgical site care', 'Catheter and tube care', 'Post-operative and bedside nursing care'],
  },
  {
    id: 'doctor-consultation',
    title: 'Doctor Consultation',
    points: ['Certified doctors for teleconsultation and home visits', 'Prescription and clinical guidance', 'Specialist referral support'],
  },
  {
    id: 'ecg-at-home',
    title: 'ECG at Home',
    points: ['12-lead ECG performed at home', 'Digital report delivery', 'Ideal for cardiac monitoring and post-ICU follow-up'],
  },
  {
    id: 'xray-at-home',
    title: 'X-Ray at Home',
    points: ['Portable X-ray for bedridden patients', 'Reports shared digitally', 'Useful for chest, joint, spine, and mobility-restricted cases'],
  },
  {
    id: 'physiotherapy',
    title: 'Physiotherapy and Home Rehab',
    points: ['Limb and musculoskeletal physiotherapy', 'Mobility and functional training', 'Chest and respiratory physiotherapy', 'Neuro and geriatric physiotherapy', 'Post-ICU and critical care rehab', 'Advanced modalities on request'],
  },
  {
    id: 'dietitian',
    title: 'Dietitian and Personalised Diet Plan',
    points: ['Home visit and online consultation', 'Diet plans for diabetes, hypertension, recovery, and wellness', 'Pricing on request'],
  },
  {
    id: 'gda',
    title: 'General Duty Assistant GDA Services',
    points: ['Patient mobility and daily assistance', 'Hygiene and personal care', 'Feeding assistance', 'Basic monitoring and patient support'],
  },
  {
    id: 'lab-collection',
    title: 'Home Sample Collection Lab',
    points: ['Blood, urine, and diagnostic sample collection', 'Trained phlebotomists', 'Digital reports delivered promptly'],
  },
  {
    id: 'medicine-delivery',
    title: 'Medicine Home Delivery',
    points: ['Prescription-based medicine delivery', 'Coordination with registered pharmacy partners', 'Clear delivery timelines'],
  },
  {
    id: 'vaccination',
    title: 'Vaccination at Home',
    points: ['Government-schedule and seasonal vaccines', 'Cold-chain handling', 'Administered by trained nursing professionals'],
  },
  {
    id: 'rental-equipment',
    title: 'Rental Medical Equipment',
    points: ['Oxygen concentrator', 'BiPAP / CPAP machine', 'Suction machine', 'Hospital bed and air mattress', 'Wheelchair, walker, pulse oximeter, nebulizer'],
  },
  {
    id: 'wound-care',
    title: 'Wound Dressing and Care',
    points: ['Surgical wound dressing', 'Diabetic foot ulcers', 'Pressure sores, burns, stomas, and complex wounds'],
  },
  {
    id: 'emergency-backup',
    title: '24/7 Emergency Backup',
    points: ['Dedicated emergency coordination line', 'On-call clinical support', 'Emergency contact: +91 7654247569'],
  },
];

export default function ServicesPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredExpandedServices = useMemo(() => {
    if (!query) return expandedServices;
    const lowerQ = query.toLowerCase();
    return expandedServices.filter(s => 
      s.title.toLowerCase().includes(lowerQ) || 
      s.points.some(p => p.toLowerCase().includes(lowerQ))
    );
  }, [query]);

  return (
    <main className="bg-white pt-[76px]">
      <section className="bg-[#F9FAFB] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-[#C0392B]">Home Healthcare Services</p>
            <h1 className="mt-4 font-heading text-4xl font-black tracking-tight text-[#1F2937] sm:text-5xl">
              Comprehensive medical care at home.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#6B7280]">
              We offer a complete range of nursing, diagnostics, physiotherapy, GDA, equipment rental, and emergency backup services across Warangal | Hanamkonda | Kazipet.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C0392B] px-7 py-3 font-heading text-sm font-bold text-white">
                Book a Service
                <ArrowRight size={17} />
              </Link>
              <a href="tel:+917654247569" className="inline-flex items-center justify-center rounded-full border-2 border-[#C0392B] px-7 py-3 font-heading text-sm font-bold text-[#C0392B]">
                Call +91 7654247569
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E5E7EB] bg-white py-5">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 sm:px-6 lg:px-8">
          {expandedServices.map((service) => (
            <a key={service.id} href={`#${service.id}`} className="shrink-0 rounded-full border border-[#E5E7EB] px-4 py-2 text-xs font-bold text-[#6B7280] hover:border-[#C0392B] hover:text-[#C0392B]">
              {service.title.replace(' Services', '')}
            </a>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredExpandedServices.length === 0 ? (
            <div className="text-center py-12 text-[#6B7280]">
              <p className="text-xl font-bold">No services found matching "{query}"</p>
              <p className="mt-2">Try a different search term or explore all our services.</p>
              <Link to="/services" className="mt-4 inline-block text-[#C0392B] underline">Clear Search</Link>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredExpandedServices.map((service, index) => (
                <article id={service.id} key={service.id} className="scroll-mt-28 rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3F4F6] text-[#C0392B]">
                  {index % 3 === 0 ? <ShieldCheck size={23} /> : index % 3 === 1 ? <Activity size={23} /> : <CheckCircle2 size={23} />}
                </div>
                <h2 className="font-heading text-xl font-bold text-[#1F2937]">{service.title}</h2>
                <ul className="mt-5 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-[#6B7280]">
                      <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#C0392B]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          )}
        </div>
      </section>

      <section className="bg-[#F9FAFB] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-black text-[#1F2937]">Service quick view</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((service, index) => (
              <div key={service.title} className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
                <p className="text-xs font-bold text-[#C0392B]">0{index + 1}</p>
                <h3 className="mt-2 font-heading text-base font-bold text-[#1F2937]">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-sm text-[#6B7280]">
            {serviceAnchors.length} core service categories are available for home booking.
          </div>
        </div>
      </section>
    </main>
  );
}
