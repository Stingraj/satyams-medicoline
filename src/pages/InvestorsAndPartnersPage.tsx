import { useEffect } from 'react';
import { scrollToHashTarget } from '../utils/scroll';

export default function InvestorsAndPartnersPage() {
    useEffect(() => {
        if (window.location.hash) {
            const hash = window.location.hash.slice(1);
            setTimeout(() => scrollToHashTarget(hash, 50), 100);
        }
    }, []);

    return (
        <div className="pt-[72px] lg:pt-[104px]">
            {/* Hero Section */}
            <section className="bg-[#C0392B] text-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Investors & Partners</h1>
                        <p className="text-xl text-gray-100">Building India's Healthcare Future Together</p>
                    </div>
                </div>
            </section>

            {/* About Us - Investor Perspective */}
            <section id="about-investor" className="py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 font-heading">About Medicoline Healthcare</h2>

                    <div className="bg-[#F9FAFB] p-8 rounded-lg border border-[#C0392B]/20 mb-8">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            <strong>Medicoline Healthcare</strong> is a structured, technology-enabled home healthcare ecosystem designed to organize, standardize, and legally safeguard independent healthcare professionals while delivering comprehensive, hospital-grade services at patients' homes.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            We are building <strong>India's organized backbone for the independent home healthcare workforce</strong> — currently valued as an unorganized, <strong>Rs. 15,000+ crore market</strong> in India with significant digitization potential and scaling opportunities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-[#C0392B] mb-4 font-heading">Market Opportunity</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C0392B] font-bold">•</span>
                                    <span>Rs. 15,000+ crore unorganized home healthcare market in India</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C0392B] font-bold">•</span>
                                    <span>Rapid growth driven by aging population and hospital demand reduction</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C0392B] font-bold">•</span>
                                    <span>Significant digitization and standardization potential</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C0392B] font-bold">•</span>
                                    <span>High demand for quality, regulated home healthcare services</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-[#C0392B] mb-4 font-heading">Value Proposition</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C0392B] font-bold">•</span>
                                    <span>Structured business model with proven unit economics</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C0392B] font-bold">•</span>
                                    <span>NABH-aligned quality standards and clinical governance</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C0392B] font-bold">•</span>
                                    <span>Dual marketplace model (similar to Ola/Rapido scalability)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C0392B] font-bold">•</span>
                                    <span>Rapid expansion potential across Tier-2 and Tier-3 cities</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Purpose */}
            <section id="purpose" className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 font-heading text-center">Our Purpose</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Protect Healthcare Professionals",
                                description: "Provide structured SOPs and institutional backing for legal and professional protection of healthcare workers"
                            },
                            {
                                title: "Deliver Quality Care",
                                description: "Provide safe, standardized, and affordable care to every patient through verified professionals"
                            },
                            {
                                title: "Digitize Healthcare",
                                description: "Digitize and scale the home healthcare economy with technology-driven solutions"
                            },
                            {
                                title: "Build Infrastructure",
                                description: "Create a replicable, investor-ready platform modeled on marketplace scalability"
                            },
                            {
                                title: "Reduce Hospital Burden",
                                description: "Reduce burden on overburdened hospital infrastructure by providing alternative care pathways"
                            },
                            {
                                title: "Create Impact",
                                description: "Generate positive social impact while building a sustainable, profitable business"
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold text-[#C0392B] mb-3 font-heading">{item.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Growth Model */}
            <section id="vision" className="py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:py-4xl font-bold mb-12 text-gray-900 font-heading text-center">Strategic Vision: 3-Phase Growth Model</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Phase 1 */}
                        <div className="bg-[#F9FAFB] p-8 rounded-lg border-2 border-[#C0392B]">
                            <div className="bg-[#C0392B] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 font-heading">1</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Phase 1: Controlled Market Entry</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                <strong>Current Focus</strong>
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Manual operations in Warangal-Hanamkonda-Kazipet</li>
                                <li>• Validated demand and pricing models</li>
                                <li>• Established SOP systems and protocols</li>
                                <li>• Built referral networks and brand foundation</li>
                                <li>• Proven unit economics</li>
                            </ul>
                        </div>

                        {/* Phase 2 */}
                        <div className="bg-[#F9FAFB] p-8 rounded-lg border-2 border-[#C0392B]">
                            <div className="bg-[#C0392B] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 font-heading">2</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Phase 2: Platform Automation</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                <strong>Timeline: 24-36 months</strong>
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Dual-sided digital marketplace platform</li>
                                <li>• Verified healthcare professional registration</li>
                                <li>• Patient digital booking and service tracking</li>
                                <li>• Real-time rating and feedback systems</li>
                                <li>• Automated scheduling and payments</li>
                            </ul>
                        </div>

                        {/* Phase 3 */}
                        <div className="bg-[#F9FAFB] p-8 rounded-lg border-2 border-[#C0392B]">
                            <div className="bg-[#C0392B] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 font-heading">3</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Phase 3: Expansion & Acquisition</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                <strong>Timeline: 18-24 months post Phase 2</strong>
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Scale across districts and urban clusters</li>
                                <li>• Onboard institutional healthcare partners</li>
                                <li>• Acquire smaller homecare operators</li>
                                <li>• Establish Medicoline as national brand</li>
                                <li>• National market standardization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Financial Snapshot */}
            <section id="financials" className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 font-heading text-center">Financial Snapshot & Projections</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-[#C0392B] mb-6 font-heading">Revenue Targets</h3>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex justify-between items-center pb-3 border-b border-gray-200">
                                    <span><strong>Phase 1 (Year 1):</strong></span>
                                    <span className="text-[#C0392B] font-bold">Rs. 4-7 Lakh/Month</span>
                                </li>
                                <li className="flex justify-between items-center pb-3 border-b border-gray-200">
                                    <span><strong>Phase 2 (24-36 months):</strong></span>
                                    <span className="text-[#C0392B] font-bold">Rs. 25-50 Lakhs/Month</span>
                                </li>
                                <li className="flex justify-between items-center pb-3 border-b border-gray-200">
                                    <span><strong>Long-term (18-24 months):</strong></span>
                                    <span className="text-[#C0392B] font-bold">Rs. 50L - Rs. 1Cr/Annum</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-[#C0392B] mb-6 font-heading">Business Metrics</h3>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex justify-between items-center pb-3 border-b border-gray-200">
                                    <span><strong>Platform Margin:</strong></span>
                                    <span className="text-[#C0392B] font-bold">25% (Blended)</span>
                                </li>
                                <li className="flex justify-between items-center pb-3 border-b border-gray-200">
                                    <span><strong>Customer Acquisition:</strong></span>
                                    <span className="text-[#C0392B] font-bold">Organic + Referral</span>
                                </li>
                                <li className="flex justify-between items-center pb-3 border-b border-gray-200">
                                    <span><strong>Service Categories:</strong></span>
                                    <span className="text-[#C0392B] font-bold">13+ Services</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span><strong>Network Size:</strong></span>
                                    <span className="text-[#C0392B] font-bold">100+ Professionals</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 bg-[#F9FAFB] p-8 rounded-lg border border-[#C0392B]/20">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 font-heading">Investment Highlights</h4>
                        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-[#C0392B] font-bold">✓</span>
                                <span>Proven unit economics with validated demand</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#C0392B] font-bold">✓</span>
                                <span>Scalable technology and operations platform</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#C0392B] font-bold">✓</span>
                                <span>Large addressable market (Rs. 15,000+ crore)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#C0392B] font-bold">✓</span>
                                <span>Experienced founder with healthcare background</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#C0392B] font-bold">✓</span>
                                <span>NABH-aligned quality and governance</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#C0392B] font-bold">✓</span>
                                <span>Multiple revenue streams and growth opportunities</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Why Partner With Medicoline */}
            <section id="why-partner" className="py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 font-heading text-center">Why Invest or Partner With Medicoline?</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Large Addressable Market",
                                description: "Rs. 15,000+ crore unorganized market with high growth potential and digitization opportunities"
                            },
                            {
                                title: "Proven Business Model",
                                description: "Validated demand, pricing, and unit economics with established operations and referral networks"
                            },
                            {
                                title: "Scalable Technology",
                                description: "Digital marketplace platform designed for rapid geographic and service expansion"
                            },
                            {
                                title: "Experienced Leadership",
                                description: "Healthcare industry veteran founder with 8+ years experience at Fortis and Max Healthcare"
                            },
                            {
                                title: "Quality Governance",
                                description: "NABH-aligned clinical standards, verified professionals, and regulatory compliance"
                            },
                            {
                                title: "Multiple Revenue Streams",
                                description: "13+ service categories with high margin potentials including ICU@Home and equipment rental"
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#C0392B] transition-all">
                                <h3 className="text-lg font-bold text-[#C0392B] mb-3 font-heading">{item.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Creativity Knows No Bounds */}
            <section className="py-16 md:py-20 bg-[#C0392B] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Creativity Knows No Bounds</h2>

                    <p className="text-lg leading-relaxed mb-8">
                        Medicoline is not just a homecare company — it is a <strong>healthcare innovation platform</strong>. We are building the systems, governance, and technology to scale quality care to every corner of India, regardless of geography or economic status.
                    </p>

                    <p className="text-lg leading-relaxed mb-8">
                        We welcome:
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-white/10 p-6 rounded-lg">
                            <h4 className="text-xl font-bold mb-2">Strategic Investors</h4>
                            <p>Institutional investors and angel investors with healthcare or healthcare tech interest</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-lg">
                            <h4 className="text-xl font-bold mb-2">Healthcare Partners</h4>
                            <p>Institutional healthcare partners, hospitals, and clinics for referral partnerships</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-lg">
                            <h4 className="text-xl font-bold mb-2">Technology Partners</h4>
                            <p>Healthcare technology partners for platform development and digital innovation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 font-heading">Let's Build Together</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Interested in investing or partnering with Medicoline Healthcare? Let's connect and explore opportunities together.
                    </p>
                    <div className="space-y-4">
                        <a
                            href="mailto:founder@medicolinehealthcare.com"
                            className="inline-block bg-[#C0392B] text-white px-8 py-3 rounded-full font-heading font-bold hover:bg-[#8F2D22] transition-colors"
                        >
                            Contact Founder
                        </a>
                        <p className="text-gray-600">
                            Email: <a href="mailto:founder@medicolinehealthcare.com" className="font-bold text-[#C0392B]">founder@medicolinehealthcare.com</a>
                        </p>
                        <p className="text-gray-600">
                            Phone: <a href="tel:+917654247569" className="font-bold text-[#C0392B]">+91 7654247569</a>
                        </p>
                        <p className="text-gray-600">
                            Website: <a href="https://www.medicolinehealthcare.com" className="font-bold text-[#C0392B]">www.medicolinehealthcare.com</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
