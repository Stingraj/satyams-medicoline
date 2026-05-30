import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import type { Service } from '../data/services';

type ServiceDetailModalProps = {
  service: Service;
  onClose: () => void;
};

export default function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.4)] backdrop-blur-[12px] backdrop-saturate-150"
        aria-hidden="true"
      />

      <div
        className="relative w-full max-w-lg bg-white rounded-xl shadow-[0_24px_64px_rgba(0,0,0,0.18)] border border-gray-100 p-6 sm:p-8 max-h-[min(85vh,640px)] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-[#111111] hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X size={20} strokeWidth={2} />
        </button>

        <div className="pr-8">
          <h3
            id="service-modal-title"
            className="font-extrabold text-[#111111] text-xl sm:text-2xl tracking-tight leading-snug"
          >
            {service.title}
          </h3>
          <div className="w-10 h-1 bg-[#cc0000] rounded-full mt-3 mb-5" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {service.details}
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
