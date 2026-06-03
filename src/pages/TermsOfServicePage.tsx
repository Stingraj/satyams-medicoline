import { useScrollReveal } from '../hooks/useScrollReveal';

export default function TermsOfServicePage() {
  const { ref, visible } = useScrollReveal();

  return (
    <div className="pt-[76px] lg:pt-[86px]">
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h1 className="font-extrabold text-[#1F2937] text-3xl sm:text-4xl tracking-tight mb-4 text-center">
              Terms of Service
            </h1>
            <div className="flex justify-center mb-10">
              <div className="w-14 h-1 bg-[#C0392B] rounded-full" />
            </div>

            <div className="prose prose-red max-w-none text-gray-600 space-y-6 text-base leading-relaxed">
              <p>
                <strong>Last Updated: June 3, 2026</strong>
              </p>

              <p>
                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the{' '}
                <a href="https://www.medicolinehealthcare.com" className="text-[#C0392B] hover:underline font-semibold">
                  www.medicolinehealthcare.com
                </a>{' '}
                website (the "Service") operated by Medicoline Healthcare LLP ("us", "we", or "our").
              </p>

              <p>
                Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>

              <p>
                By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
              </p>

              <h2 className="text-xl font-bold text-[#1F2937] pt-4">1. Home Healthcare Bookings & Services</h2>
              <p>
                Our Service allows you to request bookings for home healthcare services, including nursing care, physiotherapist visits, ICU setup at home, and clinical diagnostics.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Confirmations:</strong> Any booking request submitted via the website is subject to review and confirmation by our support team. A booking is only finalized after manual coordination and confirmation over the phone or email.</li>
                <li><strong>Medical Disclaimer:</strong> Home healthcare is provided by certified healthcare partners. While we verify partner credentials, patients and families must consult primary doctors for specialized medical diagnoses. For emergencies, contact local emergency services immediately.</li>
              </ul>

              <h2 className="text-xl font-bold text-[#1F2937] pt-4">2. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of Medicoline Healthcare LLP and its licensors.
              </p>

              <h2 className="text-xl font-bold text-[#1F2937] pt-4">3. Links To Other Web Sites</h2>
              <p>
                Our Service may contain links to third-party web sites or services that are not owned or controlled by Medicoline Healthcare. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods, or services available on or through any such web sites or services.
              </p>

              <h2 className="text-xl font-bold text-[#1F2937] pt-4">4. Limitation Of Liability</h2>
              <p>
                In no event shall Medicoline Healthcare LLP, nor its partners, directors, employees, or agents, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>

              <h2 className="text-xl font-bold text-[#1F2937] pt-4">5. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>

              <h2 className="text-xl font-bold text-[#1F2937] pt-4">6. Changes</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>

              <h2 className="text-xl font-bold text-[#1F2937] pt-4">7. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us by email at{' '}
                <a href="mailto:info@medicolinehealthcare.com" className="text-[#C0392B] hover:underline font-semibold">
                  info@medicolinehealthcare.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
