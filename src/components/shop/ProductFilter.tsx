import React from 'react';
import { Search, RotateCcw } from 'lucide-react';


interface ProductFilterProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedSpice: string;
  onSelectSpice: (spice: string) => void;
  selectedPriceRange: string;
  onSelectPriceRange: (range: string) => void;
  sortBy: string;
  onSelectSortBy: (sort: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onReset: () => void;
  activeFilterCount: number;
}

export const ProductFilter: React.FC<ProductFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedSpice,
  onSelectSpice,
  selectedPriceRange,
  onSelectPriceRange,
  sortBy,
  onSelectSortBy,
  searchQuery,
  onSearchChange,
  onReset,
  activeFilterCount,
}) => {
  const categories: { label: string; value: string }[] = [
    { label: 'All Pickles', value: 'all' },
    { label: 'Mango (आम)', value: 'mango' },
    { label: 'Lemon (नींबू)', value: 'lemon' },
    { label: 'Chilli (मिर्च)', value: 'chilli' },
    { label: 'Mixed (पचरंगा)', value: 'mixed' },
    { label: 'Special & Garlic', value: 'special' },
    { label: 'Combos & Gift Packs', value: 'combo' },
  ];

  const spiceLevels: { label: string; value: string }[] = [
    { label: 'All Spice Levels', value: 'all' },
    { label: 'Mild (हल्का)', value: 'Mild' },
    { label: 'Medium (मध्यम)', value: 'Medium' },
    { label: 'Spicy (तीखा)', value: 'Spicy' },
    { label: 'Extra Spicy (अति तीखा)', value: 'Extra Spicy' },
  ];

  const priceRanges: { label: string; value: string }[] = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under ₹50', value: 'under-50' },
    { label: '₹50 - ₹100', value: '50-100' },
    { label: 'Above ₹100', value: 'above-100' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-[#EADCC9] p-5 sm:p-6 shadow-xs space-y-6">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search by pickle name, ingredient (mango, garlic)..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FAF6F0] border border-[#EADCC9] rounded-xl focus:outline-none focus:border-[#8B1E1E] focus:bg-white text-[#2B2118]"
        />
        <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
      </div>

      {/* Category Pills */}
      <div>
        <label className="block text-xs font-bold text-[#2B2118] uppercase tracking-wider mb-2.5">
          Pickle Category
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onSelectCategory(cat.value)}
              className={`text-xs font-semibold px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-[#8B1E1E] text-white shadow-xs'
                  : 'bg-[#FAF6F0] text-[#6B5E51] hover:bg-stone-200/70 border border-[#EADCC9]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Spice & Price & Sort Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#EADCC9]/60">
        {/* Spice Level */}
        <div>
          <label className="block text-xs font-bold text-[#2B2118] uppercase tracking-wider mb-1.5">
            Spice Level
          </label>
          <select
            value={selectedSpice}
            onChange={(e) => onSelectSpice(e.target.value)}
            className="w-full px-3 py-2 text-xs font-semibold bg-[#FAF6F0] border border-[#EADCC9] rounded-xl text-[#2B2118] focus:outline-none focus:border-[#8B1E1E]"
          >
            {spiceLevels.map((lvl) => (
              <option key={lvl.value} value={lvl.value}>
                {lvl.label}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-xs font-bold text-[#2B2118] uppercase tracking-wider mb-1.5">
            Price Range
          </label>
          <select
            value={selectedPriceRange}
            onChange={(e) => onSelectPriceRange(e.target.value)}
            className="w-full px-3 py-2 text-xs font-semibold bg-[#FAF6F0] border border-[#EADCC9] rounded-xl text-[#2B2118] focus:outline-none focus:border-[#8B1E1E]"
          >
            {priceRanges.map((pr) => (
              <option key={pr.value} value={pr.value}>
                {pr.label}
              </option>
            ))}
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-xs font-bold text-[#2B2118] uppercase tracking-wider mb-1.5">
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => onSelectSortBy(e.target.value)}
            className="w-full px-3 py-2 text-xs font-semibold bg-[#FAF6F0] border border-[#EADCC9] rounded-xl text-[#2B2118] focus:outline-none focus:border-[#8B1E1E]"
          >
            <option value="featured">Featured / Recommendations</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Customer Rating</option>
            <option value="reviews">Most Popular (Reviews)</option>
          </select>
        </div>
      </div>

      {/* Active filters status & reset */}
      {activeFilterCount > 0 && (
        <div className="flex items-center justify-between pt-2 text-xs text-[#6B5E51]">
          <span>
            <strong>{activeFilterCount}</strong> active filter{activeFilterCount > 1 ? 's' : ''} applied
          </span>
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-[#8B1E1E] font-bold hover:underline cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
};
