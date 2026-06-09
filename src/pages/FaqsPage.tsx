import { Star } from 'lucide-react';
import FAQ from '../components/FAQ';

const patientReviews = [
  {
    name: 'Kamala Devi',
    service: 'Nursing Care',
    quote: 'The Medicoline team supported our family with timely nursing care and clear communication.',
    rating: 4,
  },
  {
    name: 'Narsaiah',
    service: 'Physiotherapy',
    quote: 'Home physiotherapy made recovery easier and more consistent after discharge.',
    rating: 5,
  },
  {
    name: 'Kamalamma',
    service: 'ICU@Home',
    quote: 'The emergency backup and monitoring support gave us confidence during home care.',
    rating: 3,
  },
  {
    name: 'Shusheela',
    service: "Doctor's Home Visit",
    quote: 'The doctor home visit was timely, respectful, and very reassuring for our family.',
    rating: 4,
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
            Learn how Medicoline Healthcare supports families across Warangal | Hanamkonda | Kazipet.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <h2 className="font-heading text-xl font-bold text-[#1F2937]">Patient Testimonial Videos</h2>
              <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                Watch approved patient testimonial videos from Medicoline Healthcare on Instagram.
              </p>
              <a
                href="https://www.instagram.com/we.medicoline/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full bg-[#C0392B] px-5 py-2.5 text-sm font-bold text-white"
              >
                Watch on Instagram
              </a>
            </div>
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <h2 className="font-heading text-xl font-bold text-[#1F2937]">Patient Testimonial Posts</h2>
              <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                Browse Medicoline Healthcare patient testimonial posts and updates on Facebook.
              </p>
              <a
                href="https://www.facebook.com/we.medicoline/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full border-2 border-[#C0392B] px-5 py-2.5 text-sm font-bold text-[#C0392B]"
              >
                View on Facebook
              </a>
            </div>
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <h2 className="font-heading text-xl font-bold text-[#1F2937]">Share Your Feedback</h2>
              <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                Share your feedback with Medicoline Healthcare through the official patient feedback form.
              </p>
              <a
                href="https://forms.gle/tvkVuSEDb4asGfnN9"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full border-2 border-[#C0392B] px-5 py-2.5 text-sm font-bold text-[#C0392B]"
              >
                Share Your Feedback
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-black text-[#1F2937]">What Our Patients Say</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {patientReviews.map((review) => (
              <article key={review.name} className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-[#C0392B]">{review.service}</p>
                <div className="mt-4 flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, index) => {
                    const filled = index < review.rating;
                    return (
                      <Star
                        key={`${review.name}-star-${index}`}
                        size={16}
                        className={filled ? 'text-[#FBBF24]' : 'text-[#FCD34D]'}
                        fill={filled ? '#FBBF24' : 'none'}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    );
                  })}
                </div>
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
