import React from 'react';
import { HeartHandshake, Sparkles, Flame, PackageCheck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustPillars = [
    {
      icon: HeartHandshake,
      title: 'Homemade Taste',
      hindiTag: 'घर जैसा स्वाद',
      description: 'Traditional recipes inspired by generations of Indian kitchens and dadi-nani handbooks.',
      accent: 'text-[#8B1E1E] bg-[#8B1E1E]/10',
    },
    {
      icon: Sparkles,
      title: 'Quality Ingredients',
      hindiTag: 'शुद्ध सामग्री',
      description: 'Carefully selected ingredients for authentic taste: handpicked raw mangoes, lemons, and whole spices.',
      accent: 'text-[#D97706] bg-[#D97706]/10',
    },
    {
      icon: Flame,
      title: 'Small Batch',
      hindiTag: 'धीमी आंच और धूप',
      description: 'Made in small batches for better freshness, flavour retention, and authentic aroma in every jar.',
      accent: 'text-[#2D6A4F] bg-[#2D6A4F]/10',
    },
    {
      icon: PackageCheck,
      title: 'Packed With Care',
      hindiTag: 'सुरक्षित पैकेजिंग',
      description: 'Sealed hygienically in food-grade glass jars and packed safely in shatter-proof boxes for delivery.',
      accent: 'text-[#8B1E1E] bg-[#8B1E1E]/10',
    },
  ];

  return (
    <section className="py-16 bg-[#FAF6F0] border-b border-[#EADCC9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#8B1E1E] tracking-widest uppercase bg-[#8B1E1E]/10 px-3 py-1 rounded-full">
            Our Purity Pledge
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-extrabold text-[#2B2118] mt-3">
            Why Choose Takshvi Achaar?
          </h2>

          <p className="text-sm sm:text-base text-[#6B5E51] mt-2">
            No preservatives, no artificial vinegar, and no shortcuts. Just pure tradition.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-[#EADCC9] shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${pillar.accent} flex items-center justify-center mb-5`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-serif-heading text-lg font-bold text-[#2B2118]">
                      {pillar.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold text-[#D97706] block mb-2">
                    {pillar.hindiTag}
                  </span>
                  <p className="text-xs sm:text-sm text-[#6B5E51] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
