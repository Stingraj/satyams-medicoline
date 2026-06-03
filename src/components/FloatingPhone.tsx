import { Phone } from 'lucide-react';

export default function FloatingPhone() {
  return (
    <a
      href="tel:+917654247569"
      aria-label="Call Medicoline Healthcare"
      className="fixed bottom-[92px] right-6 z-50 w-12 h-12 bg-[#C0392B] hover:bg-[#8F2D22] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
    >
      <Phone size={20} strokeWidth={2} />
      <span className="pointer-events-none absolute right-full mr-3 max-w-[calc(100vw-6rem)] rounded-lg bg-gray-800 px-3 py-1.5 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        +91 7654247569
      </span>
    </a>
  );
}
