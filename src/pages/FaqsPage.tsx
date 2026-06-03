import FAQ from '../components/FAQ';

const patientReviews = [
  {
    name: 'Patient Family',
    service: 'Nursing Care',
    quote: 'The Medicoline team supported our family with timely nursing care and clear communication.',
  },
  {
    name: 'Warangal Resident',
    service: 'Physiotherapy',
    quote: 'Home physiotherapy made recovery easier and more consistent after discharge.',
  },
  {
    name: 'Caregiver',
    service: 'ICU@Home',
    quote: 'The emergency backup and monitoring support gave us confidence during home care.',
  },
];

export default function FaqsPage() {
  return (
    <main className="bg-white pt-[76px]">
      <section className="bg-[#F9FAFB] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-[#C0392B]">Reviews and FAQs</p>
          <h1 className="mt-4 font-heading text-4xl font-black tracking-tight text-[#1F2937] sm:text-5xl">
            Answers, feedback, and patient stories.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6B7280]">
            Learn how Medicoline Healthcare supports families across Warangal, Hanamkonda, and Kazipet.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <h2 className="font-heading text-xl font-bold text-[#1F2937]">Real Patients, Real Stories</h2>
              <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                Patient feedback videos will be embedded here when approved videos are available.
              </p>
              <a
                href="https://wa.me/917654247569?text=Hello%20Medicoline%20Healthcare%2C%20I%20would%20like%20to%20share%20my%20experience."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full bg-[#C0392B] px-5 py-2.5 text-sm font-bold text-white"
              >
                Share Your Experience Video
              </a>
            </div>
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <h2 className="font-heading text-xl font-bold text-[#1F2937]">Google Reviews</h2>
              <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                Had a great experience with Medicoline Healthcare? Please leave us a Google Review. It helps more families find quality home care.
              </p>
              <a href="#" className="mt-5 inline-flex rounded-full border-2 border-[#C0392B] px-5 py-2.5 text-sm font-bold text-[#C0392B]">
                Write a Google Review
              </a>
            </div>
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <h2 className="font-heading text-xl font-bold text-[#1F2937]">Share Your Feedback</h2>
              <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                A detailed feedback form can be connected here when the final Google Form or backend endpoint is available.
              </p>
              <a href="/contact" className="mt-5 inline-flex rounded-full border-2 border-[#C0392B] px-5 py-2.5 text-sm font-bold text-[#C0392B]">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-black text-[#1F2937]">What Our Patients Say</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {patientReviews.map((review) => (
              <article key={review.name} className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-[#C0392B]">{review.service}</p>
                <p className="mt-4 text-sm leading-7 text-[#6B7280]">"{review.quote}"</p>
                <p className="mt-4 font-heading text-sm font-bold text-[#1F2937]">{review.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </main>
  );
}
