import FounderSection from '../components/FounderSection';
import WhyChooseUs from '../components/WhyChooseUs';

export default function AboutPage() {
  return (
    <div id="about" className="pt-[72px] lg:pt-[104px]">
      <FounderSection />

      {/* Our Mission and Vision Section */}
      <section id="mission-vision" className="bg-white py-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To deliver accessible, high-quality, and compassionate home healthcare services that empower individuals and families to maintain their health and dignity in the comfort of their homes.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                We are committed to bridging the gap between hospital care and home care, providing expert medical guidance, nursing support, and holistic wellness solutions to every patient we serve.
              </p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To create a healthier India where quality healthcare is accessible, affordable, and delivered with compassion — right at home, when and where people need it most.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                We envision a future where innovative home care solutions transform healthcare delivery, reducing hospital burden, improving patient outcomes, and building a stronger, healthier community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </div>
  );
}
