import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import DoctorProfileImage from './DoctorProfileImage';
import type { DoctorProfile } from '../data/doctors';

type DoctorProfileCardProps = {
  doctor: DoctorProfile;
  eyebrow?: string;
  footer?: ReactNode;
};

export default function DoctorProfileCard({
  doctor,
  eyebrow = 'Medicoline Team',
  footer,
}: DoctorProfileCardProps) {
  const cardContent = (
    <>
      <div className="aspect-[1/1] w-full overflow-hidden border-b border-[#E8EEF5] bg-[#F4F7FA]">
        <DoctorProfileImage
          doctor={doctor}
          alt={doctor.name}
          className="h-full w-full object-cover object-[center_top]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#C0392B]">
            {eyebrow}
          </p>
          <h3 className="mt-3 font-heading text-[1.3rem] font-bold leading-tight text-[#1F2937] sm:text-[1.45rem]">
            {doctor.name}
          </h3>
        </div>

        <div className="mt-4 flex-1 space-y-2">
          <p className="text-sm font-semibold leading-6 text-[#4B5563]">
            {doctor.qualification}
          </p>
          {doctor.specialty ? (
            <p className="text-sm leading-6 text-[#6B7280]">{doctor.specialty}</p>
          ) : null}
        </div>

        {doctor.linkTo || footer ? (
          <div className="mt-5">
            {footer || (
              <span className="inline-flex items-center rounded-full border border-[#E4EAF0] bg-[#F8FAFC] px-3 py-1.5 text-xs font-semibold text-[#1F2937]">
                View Founder Profile
              </span>
            )}
          </div>
        ) : null}
      </div>
    </>
  );

  const cardClassName =
    'group flex h-full min-h-[28rem] w-full flex-col overflow-hidden rounded-[1.6rem] border border-[#DCE5EE] bg-white shadow-[0_14px_32px_rgba(15,23,42,0.07)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.1)]';

  if (doctor.linkTo) {
    return (
      <Link to={doctor.linkTo} className={cardClassName}>
        {cardContent}
      </Link>
    );
  }

  return <article className={cardClassName}>{cardContent}</article>;
}
