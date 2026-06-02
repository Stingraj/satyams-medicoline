import { Phone } from 'lucide-react';

export default function FloatingPhone() {
  return (
    <a
      href="tel:+917654247569"
      aria-label="Call Medicoline Healthcare"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#C0392B] text-white rounded-full shadow-lg hover:bg-[#A93226] hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
    >
      <Phone size={20} strokeWidth={2} />
      <span className="absolute right-14 bg-[#2B2B2B] text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        +91 7654247569
      </span>
    </a>
  );
}
