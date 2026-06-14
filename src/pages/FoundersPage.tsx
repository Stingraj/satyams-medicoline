import { useEffect } from 'react';
import { scrollToHashTarget } from '../utils/scroll';
import satyamPortrait from '../assets/founder/satyam-suman.jpg';

export default function FoundersPage() {
    useEffect(() => {
        if (window.location.hash) {
            const hash = window.location.hash.slice(1);
            setTimeout(() => scrollToHashTarget(hash, 50), 100);
        }
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-[#C0392B] text-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Satyam Suman</h1>
                        <p className="text-xl text-gray-100">Founder & Managing Director, Medicoline Healthcare</p>
                    </div>
                </div>
            </section>

            {/* About Founder Section */}
            <section id="about" className="py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-12 items-start">
                        {/* Image Placeholder */}
                        <div className="md:col-span-1">
                            <div className="overflow-hidden rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] shadow-sm">
                                <img
                                    src={satyamPortrait}
                                    alt="Portrait of Satyam Suman, Founder and Managing Director of Medicoline Healthcare"
                                    className="aspect-square w-full object-cover object-top"
                                    loading="eager"
                                    decoding="async"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="md:col-span-2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-heading">About the Founder</h2>

                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Medicoline Healthcare is founded and led by <strong>Mr. Satyam Suman</strong>, a healthcare industry veteran with <strong>8+ years of experience</strong> building and scaling professional healthcare organizations.
                            </p>

                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                With a deep-rooted passion for patient-centric care and a vision to formalize the fragmented home healthcare ecosystem, Mr. Satyam founded Medicoline Healthcare to bridge the gap between hospital-grade clinical services and the comfort of patients' homes.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                His mission is to create a structured, scalable, and ethical home healthcare platform that protects both patients and healthcare professionals while delivering exceptional care outcomes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section id="journey" className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-[#C0392B] mb-2">Our Story</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">Our Journey</h2>
                        <div className="w-14 h-1 bg-[#C0392B] rounded-full mx-auto mt-4"></div>
                    </div>

                    <div className="relative mt-12">
                        {/* Vertical line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

                        <div className="space-y-12">
                            {/* 2020 */}
                            <div className="relative flex flex-col md:flex-row items-start justify-between">
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#C0392B] rounded-full -translate-x-1/2 z-10 journey-node journey-node-active top-[26px]"></div>
                                <div className="w-full md:w-[calc(50%-2.5rem)] pl-10 md:pl-0 md:text-right">
                                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow inline-block text-left w-full">
                                        <span className="inline-block bg-[#C0392B]/10 text-[#C0392B] font-bold text-xs px-3 py-1 rounded-full mb-3">2020</span>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">Founded</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Medicoline started with a vision to bring health awareness to patients during the COVID pandemic.
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:block w-[calc(50%-2.5rem)]"></div>
                            </div>

                            {/* 2021 */}
                            <div className="relative flex flex-col md:flex-row-reverse items-start justify-between">
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#C0392B] rounded-full -translate-x-1/2 z-10 journey-node journey-node-active top-[26px]"></div>
                                <div className="w-full md:w-[calc(50%-2.5rem)] pl-10 md:pl-0">
                                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow w-full">
                                        <span className="inline-block bg-[#C0392B]/10 text-[#C0392B] font-bold text-xs px-3 py-1 rounded-full mb-3">2021</span>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">Social Media Healthcare Channel</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Medicoline started taking patient queries through social media, especially Instagram, and began building awareness online.
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:block w-[calc(50%-2.5rem)]"></div>
                            </div>

                            {/* 2022–2025 */}
                            <div className="relative flex flex-col md:flex-row items-start justify-between">
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#C0392B] rounded-full -translate-x-1/2 z-10 journey-node journey-node-active top-[26px]"></div>
                                <div className="w-full md:w-[calc(50%-2.5rem)] pl-10 md:pl-0 md:text-right">
                                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow inline-block text-left w-full">
                                        <span className="inline-block bg-[#C0392B]/10 text-[#C0392B] font-bold text-xs px-3 py-1 rounded-full mb-3">2022–2025</span>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">Market Research</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Medicoline did deep research on what patients actually need in today’s healthcare world.
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:block w-[calc(50%-2.5rem)]"></div>
                            </div>

                            {/* 2026 */}
                            <div className="relative flex flex-col md:flex-row-reverse items-start justify-between">
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#C0392B] rounded-full -translate-x-1/2 z-10 journey-node journey-node-active top-[26px]"></div>
                                <div className="w-full md:w-[calc(50%-2.5rem)] pl-10 md:pl-0">
                                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow w-full">
                                        <span className="inline-block bg-[#C0392B]/10 text-[#C0392B] font-bold text-xs px-3 py-1 rounded-full mb-3">2026</span>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">Controlled Entry to the Market</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Medicoline initiated a controlled entry into the market, starting from Warangal | Hanamkonda | Kazipet.
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:block w-[calc(50%-2.5rem)]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 font-heading text-center">Professional Experience</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "8+ Years of Healthcare Industry Experience",
                                description: "Extensive background in building, scaling, and managing professional healthcare organizations from ground up."
                            },
                            {
                                title: "World-Class Healthcare Brands",
                                description: "Worked with leading healthcare organizations including Fortis Healthcare and Max Healthcare, learning best practices in clinical excellence and patient care."
                            },
                            {
                                title: "Healthcare Research & Publications",
                                description: "Keen interest in healthcare research with international publications in peer-reviewed medical journals including Elsevier and Wolters Kluwer."
                            },
                            {
                                title: "End-to-End Healthcare Operations",
                                description: "Built comprehensive healthcare operations including clinical protocols, staffing systems, quality assurance frameworks, and patient care management systems."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-[#C0392B] font-heading">{item.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section id="achievements" className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 font-heading text-center">Key Achievements</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: "🏆",
                                title: "India Book of Records",
                                description: "Holder of India Book of Records — World Record Achievement in healthcare innovation and social impact."
                            },
                            {
                                icon: "🌍",
                                title: "International Recognition",
                                description: "Holder of International Book of Records for contributions to healthcare industry and professional excellence."
                            },
                            {
                                icon: "📚",
                                title: "Research Publications",
                                description: "International research publications in peer-reviewed medical journals including Elsevier and Wolters Kluwer, contributing to medical knowledge advancement."
                            },
                            {
                                icon: "🏥",
                                title: "Medicoline Healthcare",
                                description: "Founder of Medicoline Healthcare — a NABH-aligned, structured home healthcare organization setting new standards for quality and professionalism."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg border border-[#C0392B]/20 hover:border-[#C0392B] transition-colors">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">{item.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section id="vision" className="py-16 md:py-20 bg-[#F9FAFB]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 font-heading text-center">Vision & Mission</h2>

                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-md border-l-4 border-[#C0392B]">
                        <blockquote className="text-2xl font-bold text-[#C0392B] mb-6 italic font-heading">
                            "Our mission is to make quality healthcare accessible and personalized for every home, every family."
                        </blockquote>
                        <p className="text-gray-600 text-right font-semibold">— Satyam Suman, Founder & MD</p>
                    </div>

                    <div className="mt-12 grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="text-2xl font-bold text-[#C0392B] mb-4 font-heading">Strategic Vision</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Satyam's vision for Medicoline Healthcare extends beyond service delivery. He aims to transform India's home healthcare landscape through structural innovation, professional standards, and technological advancement.
                            </p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C0392B] font-bold">✓</span>
                                    <span><strong>India's Most Trusted Platform:</strong> Build India's most trusted home healthcare governance platform</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C0392B] font-bold">✓</span>
                                    <span><strong>Professional Protection:</strong> Protect healthcare professionals legally with structured SOPs and institutional backing</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C0392B] font-bold">✓</span>
                                    <span><strong>Digital Transformation:</strong> Digitize and scale the home healthcare economy across Tier-2 and Tier-3 cities</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="text-2xl font-bold text-[#C0392B] mb-4 font-heading">Growth Roadmap</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Through a phased growth strategy, Medicoline is building a replicable, scalable, and investor-ready healthcare infrastructure.
                            </p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C0392B] font-bold">→</span>
                                    <span><strong>Phase 1:</strong> Controlled market entry with validated demand and SOPs</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C0392B] font-bold">→</span>
                                    <span><strong>Phase 2:</strong> Platform automation with dual-sided digital marketplace</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C0392B] font-bold">→</span>
                                    <span><strong>Phase 3:</strong> National expansion and standardization across India</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Connect Section */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 font-heading">Connect With Founder</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        For inquiries, partnership opportunities, or investment discussions, please reach out to the founder directly.
                    </p>
                    <div className="space-y-4">
                        <a
                            href="mailto:founder@medicolinehealthcare.com"
                            className="inline-block bg-[#C0392B] text-white px-8 py-3 rounded-full font-heading font-bold hover:bg-[#8F2D22] transition-colors"
                        >
                            Email: founder@medicolinehealthcare.com
                        </a>
                        <p className="text-gray-600">
                            Or call <a href="tel:+917654247569" className="font-bold text-[#C0392B] hover:underline">+91 7654247569</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
