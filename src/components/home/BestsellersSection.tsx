import React from 'react';
import type { Product } from '../../types';
import { ProductCard } from '../common/ProductCard';
import { useNavigation } from '../../context/NavigationContext';
import { ArrowRight, Flame } from 'lucide-react';

interface BestsellersSectionProps {
  products: Product[];
  onQuickView: (product: Product) => void;
}

export const BestsellersSection: React.FC<BestsellersSectionProps> = ({
  products,
  onQuickView,
}) => {
  const { navigate } = useNavigation();

  // Pick the 4 specified bestsellers
  const bestsellers = products.filter((p) => p.isBestseller).slice(0, 4);

  return (
    <section className="py-16 sm:py-20 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8B1E1E] uppercase tracking-wider mb-2">
              <Flame className="w-4 h-4 text-[#D97706]" />
              <span>Beloved By 10,000+ Families</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-extrabold text-[#2B2118]">
              Our Bestsellers
            </h2>
            <p className="text-sm sm:text-base text-[#6B5E51] mt-1">
              Hand-poured into glass barnis and delivered fresh to your dining table.
            </p>
          </div>

          <button
            onClick={() => navigate('/shop')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#8B1E1E] hover:text-[#731818] group cursor-pointer"
          >
            <span>View All Pickles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Cards Grid (2 cols on mobile, 4 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/shop')}
            className="bg-[#2B2118] hover:bg-[#8B1E1E] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Explore All 9 Handcrafted Varieties</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
