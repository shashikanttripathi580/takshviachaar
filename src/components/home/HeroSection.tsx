import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { ArrowRight, Sparkles, Sun, ShieldCheck, Award } from 'lucide-react';


export const HeroSection: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#FAF6F0] to-[#FDFBF7] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#EADCC9]">
      {/* Decorative Traditional Indian Mandala Accent Watermark */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(#d9770618_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[radial-gradient(#8b1e1e12_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none rounded-tr-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
            {/* Heritage Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#8B1E1E]/10 border border-[#8B1E1E]/20 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#8B1E1E] animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-[#8B1E1E] tracking-wider uppercase">
                100% Homemade • Sun-Cured Heritage Recipes
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2B2118] tracking-tight leading-[1.15]">
              Har Bite Mein <br />
              <span className="text-[#8B1E1E] relative inline-block">
                Ghar Ka Swad
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#D97706]/40"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0 Q50,12 100,0" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-[#6B5E51] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Paramparik tareeke se bane authentic Indian pickles, bilkul ghar ke swaad jaise.
              Aged naturally under the golden sun with 100% cold-pressed mustard oil and hand-pounded spices.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => navigate('/shop')}
                className="w-full sm:w-auto bg-[#8B1E1E] hover:bg-[#731818] text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 cursor-pointer group active:scale-98"
              >
                <span>Shop Pickles</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigate('/about')}
                className="w-full sm:w-auto bg-white hover:bg-[#FAF6F0] text-[#2B2118] border-2 border-[#EADCC9] hover:border-[#8B1E1E] px-7 py-3.5 rounded-xl font-bold text-base shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Our Story</span>
              </button>
            </div>

            {/* Mini Trust Highlights */}
            <div className="pt-6 border-t border-[#EADCC9] grid grid-cols-3 gap-3 text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Sun className="w-5 h-5 text-[#D97706] shrink-0" />
                <span className="text-xs font-semibold text-[#2B2118]">21-Day Sun Cured</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Award className="w-5 h-5 text-[#D97706] shrink-0" />
                <span className="text-xs font-semibold text-[#2B2118]">Cold-Pressed Mustard Oil</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <ShieldCheck className="w-5 h-5 text-[#D97706] shrink-0" />
                <span className="text-xs font-semibold text-[#2B2118]">No Chemical Vinegar</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Column */}
          <div className="lg:col-span-5 relative">
            {/* Highlight Card Backdrop Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#D97706]/20 to-[#8B1E1E]/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

            <div className="relative bg-white p-3 sm:p-4 rounded-3xl shadow-2xl border border-[#EADCC9]">
              {/* Primary Appetizing Pickle Jar Visual */}
              <div className="relative aspect-4/3 sm:aspect-5/4 rounded-2xl overflow-hidden bg-[#FAF6F0]">
                <img
                  src="/images/mango-pickle-container.jpg"
                  alt="Authentic Homemade Indian Achaar in Premium Food-Grade Container"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Seal of Purity */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-[#EADCC9]">
                  <Sparkles className="w-4 h-4 text-[#D97706]" />
                  <span className="text-xs font-bold text-[#8B1E1E]">100% Traditional Recipe</span>
                </div>

                {/* Floating Bestseller Callout */}
                <div className="absolute bottom-4 right-4 bg-[#8B1E1E] text-white p-3 rounded-2xl shadow-xl flex items-center gap-3 border border-amber-300/40">
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-bold text-amber-300">Bestseller</p>
                    <p className="font-serif-heading text-sm font-bold leading-tight">Banarasi Aam Ka Achaar</p>
                    <p className="text-xs font-bold text-amber-200">₹199 / 250g</p>
                  </div>
                  <button
                    onClick={() => navigate('/product/aam-ka-achaar')}
                    className="w-8 h-8 rounded-full bg-white text-[#8B1E1E] flex items-center justify-center shadow hover:scale-105 transition-transform"
                    aria-label="View Banarasi Aam Ka Achaar"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Mini Gallery Strip below hero jar */}
              <div className="grid grid-cols-3 gap-2.5 mt-3">
                <div
                  onClick={() => navigate('/product/nimbu-ka-achaar')}
                  className="rounded-xl overflow-hidden aspect-4/3 relative group cursor-pointer border border-[#EADCC9]"
                >
                  <img
                    src="/images/lemon-pickle-container.jpg"
                    alt="Nimbu Pickle Container"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent flex items-end p-1.5">
                    <span className="text-[11px] font-bold text-white leading-tight">Nimbu</span>
                  </div>
                </div>

                <div
                  onClick={() => navigate('/product/mirchi-ka-achaar')}
                  className="rounded-xl overflow-hidden aspect-4/3 relative group cursor-pointer border border-[#EADCC9]"
                >
                  <img
                    src="/images/red-chilli-container.jpg"
                    alt="Lal Mirchi Pickle Container"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent flex items-end p-1.5">
                    <span className="text-[11px] font-bold text-white leading-tight">Lal Mirchi</span>
                  </div>
                </div>

                <div
                  onClick={() => navigate('/product/mix-achaar')}
                  className="rounded-xl overflow-hidden aspect-4/3 relative group cursor-pointer border border-[#EADCC9]"
                >
                  <img
                    src="/images/mixed-pickle-container.jpg"
                    alt="Panchranga Mix Pickle Container"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent flex items-end p-1.5">
                    <span className="text-[11px] font-bold text-white leading-tight">Mix Achaar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
