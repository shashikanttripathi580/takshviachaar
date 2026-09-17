import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { ArrowRight, Sun, Heart, Sparkles } from 'lucide-react';

export const StorySection: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section className="py-16 sm:py-24 bg-[#FAF6F0] border-b border-[#EADCC9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Grid */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-[#EADCC9] aspect-4/5">
                  <img
                    src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
                    alt="Traditional Indian Spices in Brass Bowls"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#8B1E1E] text-white p-5 rounded-2xl shadow-md space-y-1">
                  <p className="font-serif-heading text-2xl font-bold text-amber-300">1982</p>
                  <p className="text-xs text-stone-200">
                    Grandmother’s original recipe notes preserved through four decades.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="bg-white p-5 rounded-2xl border border-[#EADCC9] shadow-md space-y-1">
                  <div className="flex items-center gap-1.5 text-[#D97706]">
                    <Sun className="w-5 h-5" />
                    <span className="font-bold text-xs uppercase tracking-wide">Sun Cured</span>
                  </div>
                  <p className="text-xs text-[#6B5E51]">
                    Earthen barnis kept in open courtyards under pure natural sunlight.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-[#EADCC9] aspect-4/5">
                  <img
                    src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80"
                    alt="Ceramic Pickle Jars and Spices"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#8B1E1E]/10 text-[#8B1E1E] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-[#8B1E1E]" />
              <span>Rooted in Indian Heritage</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B2118] leading-tight">
              From Our Kitchen <br />
              <span className="text-[#8B1E1E]">To Yours</span>
            </h2>

            <p className="text-base text-[#6B5E51] leading-relaxed">
              Every Indian courtyard once echoed with the vibrant aroma of roasting fenugreek, cracked mustard seeds, and freshly crushed mangoes. Pickles weren’t just condiments—they were love letters packed into glazed white and brown ceramic barnis by our grandmothers.
            </p>

            <p className="text-sm text-[#6B5E51] leading-relaxed">
              At <strong>Takshvi Achaar</strong>, we honor that sacred heritage. We source tart Ramkela mangoes from designated orchards, cold-press our mustard oil on wooden chekkus, and allow the spices to slow-steep under the North Indian sun. No chemical preservatives. No synthetic food colors. Just pure, unadulterated nostalgia.
            </p>


            <div className="pt-2 flex items-center gap-6">
              <button
                onClick={() => navigate('/about')}
                className="bg-[#8B1E1E] hover:bg-[#731818] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <span>Read Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 border-l-2 border-[#EADCC9] pl-4">
                <Sparkles className="w-6 h-6 text-[#D97706]" />
                <span className="text-xs text-[#2B2118] font-semibold">
                  Handcrafted with <br />purity & devotion
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
