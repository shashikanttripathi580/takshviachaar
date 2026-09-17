import React from 'react';
import { Sparkles, Truck } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export const AnnouncementBar: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="bg-[#8B1E1E] text-white text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2 relative z-30 shadow-inner">
      <div className="flex items-center gap-2 flex-wrap justify-center">
        <span className="inline-flex items-center gap-1.5 bg-[#9E2A2B] px-2 py-0.5 rounded-full text-[11px] font-semibold text-amber-200">
          <Sparkles className="w-3.5 h-3.5" /> FESTIVAL OFFER
        </span>
        <span>Use code <strong className="text-amber-300 tracking-wide underline decoration-dotted">SWAD10</strong> for 10% OFF</span>
        <span className="hidden md:inline">•</span>
        <span className="hidden md:inline-flex items-center gap-1">
          <Truck className="w-3.5 h-3.5 text-amber-200" />
          Free Shipping across India on orders above ₹499
        </span>
        <button
          onClick={() => navigate('/shop')}
          className="text-amber-200 hover:text-white underline text-xs font-semibold ml-1 cursor-pointer transition-colors"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};
