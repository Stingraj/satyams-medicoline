import { useScrollReveal } from '../hooks/useScrollReveal';
import doctors from '../data/doctors';
import { Link } from 'react-router-dom';

export default function Doctors() {
  const { ref, visible } = useScrollReveal();
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  return (
    <section id="doctors" className="bg-white py-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-extrabold text-[#111111] text-3xl sm:text-4xl mb-3 tracking-tight">
            Our Medical Team
          </h2>
          <div className="flex justify-center mb-5">
            <div className="w-14 h-1 bg-[#C0392B] rounded-full"></div>
          </div>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Qualified specialists ready to deliver premium home healthcare.
          </p>
        </div>

        <div
          ref={ref}
          className={`doctors-grid grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ${visible ? 'section-visible' : 'section-hidden'
            }`}
        >
          {doctors.map((doc) => (
            <article
              key={doc.id}
              className="doctor-card bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full aspect-square overflow-hidden bg-gray-100">
                {doc.image && !imageErrors[doc.id] ? (
                  <img
                    src={doc.image}
                    alt={`${doc.name} profile`}
                    className="w-full h-full object-cover"
                    onError={() => {
                      setImageErrors((prev) => ({ ...prev, [doc.id]: true }));
                    }}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#F3F4F6]">
                    <span
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 700,
                        fontSize: '20px',
                        color: '#374151',
                      }}
                    >
                      {doc.name
                        .split(' ')
                        .filter((n: string) => n !== 'Dr.' && n !== 'Dr' && n !== 'Dr.')
                        .slice(0, 2)
                        .map((n: string) => n[0])
                        .join('')
                        .toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              <div className="px-3 py-4 sm:px-6 sm:py-6 text-center">
                {doc.id === 'satyam-suman' ? (
                  <>
                    <h3 className="font-extrabold text-[#111111] text-sm sm:text-xl md:text-2xl mb-1.5 leading-tight">
                      {doc.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-3">
                      Founder &amp; MD
                    </p>
                    <Link
                      to="/about#founder"
                      className="block w-full bg-[#C0392B] text-white text-xs sm:text-sm font-semibold px-2 py-2 sm:px-4 sm:py-2.5 rounded-full hover:bg-[#C0392B] transition-colors duration-200"
                    >
                      View Profile
                    </Link>
                  </>
                ) : (
                  <>
                    <h3 className="font-extrabold text-[#111111] text-sm sm:text-xl md:text-2xl mb-1.5 leading-tight">
                      {doc.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-1 truncate">{doc.qualification}</p>
                    <p className="text-[10px] sm:text-sm text-gray-500 leading-snug">{doc.specialty}</p>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
