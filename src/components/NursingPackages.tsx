import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const packages = [
  {
    title: 'Basic Health Checkup',
    badge: '33% OFF',
    price: '₹999',
    originalPrice: '₹1499',
    popular: false,
    features: [
      'Complete Blood Count (CBC)',
      'Blood Sugar (Fasting)',
      'Lipid Profile',
      'Liver Function Test (LFT)',
      'Kidney Function Test (KFT)',
      'Free Home Sample Collection',
    ],
  },
  {
    title: 'Full Body Checkup',
    badge: '37% OFF',
    popular: true,
    price: '₹2,499',
    originalPrice: '₹3,999',
    features: [
      'All Basic Checkup Tests',
      'Thyroid Profile (T3, T4, TSH)',
      'Vitamin D & B12',
      'HbA1c (Diabetes Screening)',
      'Urine Routine & Microscopy',
      'Free Doctor Consultation (Online)',
    ],
  },
  {
    title: 'Senior Citizen Package',
    badge: '30% OFF',
    price: '₹3,499',
    originalPrice: '₹4,999',
    popular: false,
    features: [
      'Full Body Checkup Tests',
      'ECG at Home',
      'Bone Mineral Density (BMD) Test',
      'PSA Test for Men',
      'Physiotherapy Assessment',
      'Priority Home Visit',
    ],
  },
];

export default function NursingPackages() {
  const { ref, visible } = useScrollReveal();
  const [selectedCard, setSelectedCard] = useState(1); // Default selected to middle card (index 1)

  return (
    <section id="packages" className="packages-section">
      <div className="bg-[#C0392B] text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight">
            Health Packages For Every Family
          </h2>
          <p className="font-body text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Affordable home healthcare packages with free sample collection
          </p>
        </div>
      </div>

      <div className="bg-[#F9FAFB] py-[60px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading font-black text-[#1F2937] text-3xl sm:text-4xl mb-3 tracking-tight">
              Offers &amp; Packages
            </h2>
            <div className="flex justify-center mb-5">
              <div className="w-14 h-1 bg-[#C0392B] rounded-full"></div>
            </div>
            <p className="font-body text-[#6B7280] text-base max-w-xl mx-auto">
              Affordable healthcare packages designed for your complete well-being.
            </p>
          </div>

          <div
            ref={ref}
            className={`packages-grid items-start ${visible ? 'section-visible' : 'section-hidden'
              }`}
          >
            {packages.map((pkg, i) => (
              <div
                key={i}
                onClick={() => setSelectedCard(i)}
                className={`bg-white rounded-xl border-2 p-8 relative flex flex-col cursor-pointer transition-all duration-200 ${selectedCard === i
                  ? 'border-[#C0392B] shadow-[0_18px_38px_rgba(192,57,43,0.14)] md:scale-105'
                  : 'border-gray-100 shadow-sm'
                  }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-[#F3F4F6] text-[#C0392B] text-xs font-heading font-bold px-3 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                  {pkg.popular && (
                    <span className="bg-[#C0392B] text-white text-xs font-heading font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-extrabold text-[#1F2937] text-xl mb-4 tracking-tight">{pkg.title}</h3>

                <div className="mb-6">
                  <span className="font-heading font-black text-[#C0392B] text-4xl tracking-tight">{pkg.price}</span>
                  <span className="font-body text-[#6B7280] text-sm line-through ml-2">{pkg.originalPrice}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#F3F4F6] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={11} color="#C0392B" strokeWidth={3} />
                      </div>
                      <span className="font-body text-sm text-[#374151]">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block text-center font-heading font-bold text-sm py-3 rounded-full transition-colors duration-200 ${selectedCard === i
                    ? 'bg-[#C0392B] text-white hover:bg-[#8F2D22]'
                    : 'border-2 border-[#C0392B] text-[#C0392B] hover:bg-[#8F2D22] hover:text-white'
                    }`}
                >
                  Book Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
