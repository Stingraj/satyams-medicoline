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
      <div className="bg-gradient-to-br from-[#C0392B] to-[#9A2E22] text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight">
            Health Packages For Every Family
          </h1>
          <p className="text-lg sm:text-xl text-red-100 max-w-2xl mx-auto">
            Affordable home healthcare packages with free sample collection
          </p>
        </div>
      </div>

      <div className="bg-[#fbf9f8] py-[60px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-extrabold text-[#111111] text-3xl sm:text-4xl mb-3 tracking-tight">
              Offers &amp; Packages
            </h2>
            <div className="flex justify-center mb-5">
              <div className="w-14 h-1 bg-[#cc0000] rounded-full"></div>
            </div>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
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
                  ? 'border-[#cc0000] shadow-xl shadow-red-100 md:scale-105'
                  : 'border-gray-100 shadow-sm'
                  }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-[#fff5f5] text-[#cc0000] text-xs font-bold px-3 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                  {pkg.popular && (
                    <span className="bg-[#cc0000] text-white text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>

                <h3 className="font-extrabold text-[#111111] text-xl mb-4 tracking-tight">{pkg.title}</h3>

                <div className="mb-6">
                  <span className="font-extrabold text-[#cc0000] text-4xl tracking-tight">{pkg.price}</span>
                  <span className="text-gray-400 text-sm line-through ml-2">{pkg.originalPrice}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#fff5f5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={11} color="#cc0000" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block text-center font-semibold text-sm py-3 rounded-full transition-colors duration-200 ${pkg.popular
                    ? 'bg-[#cc0000] text-white hover:bg-[#aa0000]'
                    : 'border-2 border-[#cc0000] text-[#cc0000] hover:bg-[#fff5f5]'
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
