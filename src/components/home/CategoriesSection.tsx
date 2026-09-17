import React from 'react';
import { CATEGORIES } from '../../data/categories';
import { useNavigation } from '../../context/NavigationContext';
import { ArrowRight } from 'lucide-react';

export const CategoriesSection: React.FC = () => {
  const { navigate } = useNavigation();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/shop?category=${categoryId}`);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FAF6F0] border-y border-[#EADCC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#8B1E1E] uppercase tracking-wider bg-[#8B1E1E]/10 px-3 py-1 rounded-full">
            Taste The Diversity
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-extrabold text-[#2B2118] mt-3">
            Explore By Category
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E51] mt-2">
            From the tart tang of raw mangoes to fiery Banarasi stuffed chillies.
          </p>
        </div>

        {/* 6 Category Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="group bg-white rounded-2xl border border-[#EADCC9] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#D97706] transition-all duration-300 cursor-pointer flex flex-col text-center"
            >
              <div className="aspect-square overflow-hidden bg-stone-100 relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-2 left-2 right-2 text-white">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-amber-300">
                    {cat.hindiName}
                  </p>
                </div>
              </div>

              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-heading text-sm sm:text-base font-bold text-[#2B2118] group-hover:text-[#8B1E1E] transition-colors leading-tight">
                    {cat.name}
                  </h3>
                  <span className="text-[11px] text-[#6B5E51] mt-1 block">
                    {cat.itemCount} {cat.itemCount === 1 ? 'Variety' : 'Varieties'}
                  </span>
                </div>

                <div className="mt-2 text-[#8B1E1E] font-bold text-xs flex items-center justify-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
