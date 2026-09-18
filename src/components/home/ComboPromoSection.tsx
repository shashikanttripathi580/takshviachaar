import React from 'react';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useNavigation } from '../../context/NavigationContext';
import { ShoppingBag, Sparkles, Check, ArrowRight, Gift } from 'lucide-react';

export const ComboPromoSection: React.FC = () => {
  const { addToCart, setIsCartOpen } = useCart();
  const { navigate } = useNavigation();

  // Find the combo product
  const comboProduct = PRODUCTS.find((p) => p.category === 'combo') || PRODUCTS[0];

  const handleGetCombo = () => {
    addToCart(comboProduct, comboProduct.defaultWeight, 1);
    setIsCartOpen(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#8B1E1E] via-[#7B1818] to-[#5C1414] rounded-3xl text-white shadow-2xl border-4 border-[#D97706]/40 p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Subtle Mandala Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(#f59e0b1f_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Col: Details & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#D97706] text-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                <Gift className="w-4 h-4" />
                <span>Special Festive Gift Box</span>
              </div>

              <div>
                <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Pickle Lovers Combo
                </h2>
                <p className="text-amber-200 text-sm sm:text-base font-medium mt-1">
                  ४ पारंपारिक स्वादों का अनोखा संगम (Set of 4 Fresh Heritage Tubs)
                </p>
              </div>

              <p className="text-stone-200 text-sm sm:text-base leading-relaxed max-w-xl">
                Can’t decide which pickle to try first? Bring home our top handcrafted recipes packed in clean food-grade airtight containers with a complimentary wooden spoon.
              </p>

              {/* The 4 Jars Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/15">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold">1x Royal Dates Achaar (125gm)</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/15">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold">1x Desi Lahsun Achaar (125gm)</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/15">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold">1x Sun-Cured Lemon Achaar (125gm)</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/15">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold">1x Banarasi Aam Ka Achaar (125gm)</span>
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-6">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif-heading text-4xl sm:text-5xl font-extrabold text-amber-300">
                      ₹125
                    </span>
                    <span className="text-xl text-stone-300 line-through">
                      ₹165
                    </span>
                    <span className="bg-emerald-600 text-white font-bold text-xs px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Save ₹40
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 mt-1">
                    Special Introductory Price (Fresh 125gm Jars Set)
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleGetCombo}
                    className="bg-amber-400 hover:bg-amber-300 text-[#2B2118] px-8 py-4 rounded-xl font-bold text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-98"
                  >
                    <ShoppingBag className="w-5 h-5 text-[#8B1E1E]" />
                    <span>Get the Combo</span>
                  </button>
                  <button
                    onClick={() => navigate(`/product/${comboProduct.slug}`)}
                    className="bg-white/15 hover:bg-white/25 text-white px-5 py-4 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View Combo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Col: Visual Mockup */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-300/40 bg-black/20 group">
                <img
                  src="/images/combo-pickle-containers.jpg"
                  alt="Pickle Lovers Combo Quad Pack"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-[#8B1E1E] text-amber-300 border border-amber-400 px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Limited Batch Release</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
