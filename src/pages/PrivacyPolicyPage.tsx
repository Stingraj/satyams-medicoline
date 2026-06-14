import { useScrollReveal } from '../hooks/useScrollReveal';

export default function PrivacyPolicyPage() {
  const { ref, visible } = useScrollReveal();

  return (
    <div>
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h1 className="font-extrabold text-[#1F2937] text-3xl sm:text-4xl tracking-tight mb-4 text-center">
              Privacy Policy
            </h1>
            <div className="flex justify-center mb-10">
              <div className="w-14 h-1 bg-[#C0392B] rounded-full" />
            </div>

            <div className="prose prose-red max-w-none text-gray-600 space-y-6 text-base leading-relaxed">
              <p>
                <strong>Last Updated: June 3, 2026</strong>
              </p>

              <p>
                Medicoline Healthcare LLP ("we", "us", or "our") operates the website{' '}
                <a href="https://www.medicolinehealthcare.com" className="text-[#C0392B] hover:underline font-semibold">
                  www.medicolinehealthcare.com
                </a>{' '}
                (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>

              <h2 className="text-xl font-bold text-[#1F2937] pt-4">1. Information Collection and Use</h2>
              <p>
                We collect several different types of information for various purposes to provide and improve our home healthcare services to you.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include your full name, phone number, email address, physical address (for home care visits), health requirements, and medical history.</li>
                <li><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used. This may include information such as your computer's IP address, browser type, page visits, time and date of visits, time spent on pages, and other diagnostic data.</li>
              </ul>

              <h2 className="text-xl font-bold text-[#1F2937] pt-4">2. Use of Data</h2>
              <p>Medicoline Healthcare uses the collected data for various purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, coordinate, and maintain our home healthcare services.</li>
                <li>To contact you to confirm bookings, appointments, and application updates.</li>
                <li>To allow you to participate in interactive features of our Service.</li>
                <li>To provide customer support and respond to inquiries.</li>
                <li>To gather analysis or valuable information so that we can improve our Service.</li>
                <li>To monitor the usage of our Service and detect, prevent, and address technical issues.</li>
              </ul>

              <h2 className="text-xl font-bold text-[#1F2937] pt-4">3. Transfer of Data</h2>
              <p>
                Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
              </p>

              <h2 className="text-xl font-bold text-[#1F2937] pt-4">4. Disclosure of Data</h2>
              <p>
                We may disclose your Personal Data in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend the rights or property of Medicoline Healthcare, prevent or investigate possible wrongdoing in connection with the Service, protect the personal safety of users of the Service or the public, or protect against legal liability.
              </p>

              <h2 className="text-xl font-bold text-[#1F2937] pt-4">5. Security of Data</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>

              <h2 className="text-xl font-bold text-[#1F2937] pt-4">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us by email at{' '}
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
