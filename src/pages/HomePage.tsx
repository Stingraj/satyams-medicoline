import Hero from '../components/Hero';
import Services from '../components/Services';
import EcgAtHome from '../components/EcgAtHome';
import NursingPackages from '../components/NursingPackages';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import BlogPreview from '../components/BlogPreview';

export default function HomePage() {
  return (
    <>
      <section id="hero" data-section="home">
        <Hero />
      </section>

      <div data-section="services">
        <Services />
      </div>

      <EcgAtHome />
      <NursingPackages />
      <WhyChooseUs />
      <FAQ />
      <BlogPreview />
    </>
  );
}
