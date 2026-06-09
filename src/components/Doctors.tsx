import doctors from '../data/doctors';
import DoctorProfileCard from './DoctorProfileCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Doctors() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="doctors" className="bg-white py-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-extrabold text-[#1F2937] text-3xl sm:text-4xl mb-3 tracking-tight">
            Our Medical Team
          </h2>
          <div className="flex justify-center mb-5">
            <div className="w-14 h-1 bg-[#C0392B] rounded-full"></div>
          </div>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Meet our founder and the certified doctors and specialists supporting Medicoline home healthcare services.
          </p>
        </div>

        <div
          ref={ref}
          className={`doctors-grid mx-auto grid max-w-6xl auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 ${
            visible ? 'section-visible' : 'section-hidden'
          }`}
        >
          {doctors.map((doc) => (
            <DoctorProfileCard key={doc.id} doctor={doc} />
          ))}
        </div>
      </div>
    </section>
  );
}
