import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 md:hidden overflow-y-auto">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="p-2">
          <X size={24} className="text-[#151515]" />
        </button>
      </div>
      <div className="flex flex-col items-center gap-6 mt-8 pb-8">
        {[
          "About",
          "What We Do",
          "Jobs",
          "Projects",
          "TG Academy",
          "Strategic Partnership",
          "Pricing",
          "Book a Consultation",
        ].map((item) => (
          <a
            key={item}
            href="#"
            className="text-[#151515] text-[18px] font-sans font-normal hover:text-[#571244] transition-colors"
            onClick={onClose}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}