import { Link } from 'react-router-dom';
import doctors from '../data/doctors';
import DoctorProfileImage from './DoctorProfileImage';
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
          className={`doctors-grid grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ${
            visible ? 'section-visible' : 'section-hidden'
          }`}
        >
          {doctors.map((doc) => {
            const cardContent = (
              <>
                <div className="w-full aspect-square overflow-hidden bg-gray-100 relative group">
                  <DoctorProfileImage doctor={doc} alt={`${doc.name} profile`} />
                  {doc.linkTo && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm font-semibold border-2 border-white px-3 py-1.5 rounded-full bg-black/20">
                        View Founder Profile
                      </span>
                    </div>
                  )}
                </div>
                <div className="px-3 py-4 sm:px-6 sm:py-6 text-center">
                  <h3 className="font-extrabold text-[#1F2937] text-sm sm:text-xl md:text-2xl mb-1.5 leading-tight group-hover:text-[#C0392B] transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-1">{doc.qualification}</p>
                  <p className="text-[10px] sm:text-sm text-gray-500 leading-snug">{doc.specialty}</p>
                </div>
              </>
            );

            return doc.linkTo ? (
              <Link
                key={doc.id}
                to={doc.linkTo}
                className="doctor-card group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow block cursor-pointer"
              >
                {cardContent}
              </Link>
            ) : (
              <article
                key={doc.id}
                className="doctor-card bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {cardContent}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
