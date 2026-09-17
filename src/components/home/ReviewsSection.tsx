import React from 'react';
import { REVIEWS } from '../../data/reviews';
import { StarRating } from '../common/StarRating';
import { Quote, CheckCircle2, Heart } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-emerald-800" />
            <span>Real Stories From Real Kitchens</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-extrabold text-[#2B2118]">
            Loved By Pickle Connoisseurs
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E51] mt-2">
            Over 10,000+ Indian households trust Takshvi Achaar to bring nostalgic flavours to their dining tables.
          </p>

        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EADCC9] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <StarRating rating={rev.rating} size="sm" showCount={false} />
                  <Quote className="w-7 h-7 text-[#D97706]/30 group-hover:text-[#8B1E1E]/50 transition-colors" />
                </div>

                {rev.highlight && (
                  <h4 className="font-serif-heading text-base font-bold text-[#2B2118]">
                    “{rev.highlight}”
                  </h4>
                )}

                <p className="text-xs sm:text-sm text-[#6B5E51] italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EADCC9]/60 flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-sm text-[#2B2118] flex items-center gap-1.5">
                    <span>{rev.author}</span>
                    {rev.verifiedPurchase && (
                      <span title="Verified Buyer">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                      </span>
                    )}
                  </h5>
                  <p className="text-[11px] text-stone-400">{rev.location}</p>
                </div>
                <span className="text-[11px] font-semibold text-[#8B1E1E] bg-[#8B1E1E]/10 px-2.5 py-1 rounded-full">
                  {rev.productName}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary trust bar */}
        <div className="mt-12 bg-[#FAF6F0] rounded-2xl p-6 border border-[#EADCC9] flex flex-col sm:flex-row items-center justify-around gap-4 text-center">
          <div>
            <span className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#8B1E1E]">
              4.9 / 5
            </span>
            <p className="text-xs text-[#6B5E51] font-medium mt-0.5">Average Customer Rating</p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-[#EADCC9]" />
          <div>
            <span className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#8B1E1E]">
              10,000+
            </span>
            <p className="text-xs text-[#6B5E51] font-medium mt-0.5">Jars Delivered Across India</p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-[#EADCC9]" />
          <div>
            <span className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#8B1E1E]">
              98.4%
            </span>
            <p className="text-xs text-[#6B5E51] font-medium mt-0.5">Repeat Order Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};
