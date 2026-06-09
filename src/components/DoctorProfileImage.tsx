import { useState } from 'react';
import defaultDoctorAvatar from '../assets/images/default-doctor-avatar.svg';
import type { DoctorProfile } from '../data/doctors';

type DoctorProfileImageProps = {
  doctor: DoctorProfile;
  alt?: string;
  className?: string;
};

export default function DoctorProfileImage({
  doctor,
  alt,
  className = 'h-full w-full object-cover object-top',
}: DoctorProfileImageProps) {
  const [imageError, setImageError] = useState(false);
  const showRealPhoto = Boolean(doctor.image && doctor.hasRealPhoto && !imageError);

  if (showRealPhoto) {
    return (
      <img
        src={doctor.image}
        alt={alt || doctor.name}
        className={className}
        loading="lazy"
        decoding="async"
        onError={() => setImageError(true)}
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF2F7_100%)] px-5 py-6 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#D9E2EC] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.08)] sm:h-28 sm:w-28">
        <img
          src={defaultDoctorAvatar}
          alt={`${doctor.name} default profile avatar`}
          className="h-16 w-16 object-contain opacity-90 sm:h-20 sm:w-20"
          loading="lazy"
          decoding="async"
        />
      </div>
      <p className="mt-5 text-sm font-semibold leading-6 text-[#4B5563]">
        Profile photo coming soon
      </p>
    </div>
  );
}
