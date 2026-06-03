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
  className = 'h-full w-full object-cover',
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
    <div className="flex h-full w-full items-center justify-center bg-[#F3F4F6]">
      <img
        src={defaultDoctorAvatar}
        alt={`${doctor.name} default profile avatar`}
        className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
