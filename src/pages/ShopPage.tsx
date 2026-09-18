import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import type { Product } from '../types';

import { ProductFilter } from '../components/shop/ProductFilter';
import { ProductGrid } from '../components/shop/ProductGrid';
import { useNavigation } from '../../src/context/NavigationContext';
import { Sparkles, Package } from 'lucide-react';

interface ShopPageProps {
  onQuickView: (product: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ onQuickView }) => {
  const { searchQuery, setSearchQuery } = useNavigation();

  // Read URL query params if any (e.g. ?category=mango)
  const getInitialCategory = () => {
    const hash = window.location.hash;
    const match = hash.match(/category=([a-zA-Z0-9_-]+)/);
    return match ? match[1] : 'all';
  };

  const [selectedCategory, setSelectedCategory] = useState<string>(getInitialCategory);
  const [selectedSpice, setSelectedSpice] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Update category when URL hash changes with a category param
  useEffect(() => {
    const cat = getInitialCategory();
    if (cat) setSelectedCategory(cat);
  }, []);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedSpice('all');
    setSelectedPriceRange('all');
    setSortBy('featured');
    setSearchQuery('');
  };

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== 'all') count++;
    if (selectedSpice !== 'all') count++;
    if (selectedPriceRange !== 'all') count++;
    if (searchQuery.trim() !== '') count++;
    return count;
  }, [selectedCategory, selectedSpice, selectedPriceRange, searchQuery]);

  // Filtering & Sorting logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Spice level filter
      if (selectedSpice !== 'all' && product.spiceLevel !== selectedSpice) {
        return false;
      }

      // Price filter
      if (selectedPriceRange === 'under-50' && product.price >= 50) {
        return false;
      }
      if (selectedPriceRange === '50-100' && (product.price < 50 || product.price > 100)) {
        return false;
      }
      if (selectedPriceRange === 'above-100' && product.price <= 100) {
        return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesHindi = product.hindiName.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesIng = product.ingredients.some((ing) => ing.toLowerCase().includes(query));
        if (!matchesName && !matchesHindi && !matchesDesc && !matchesIng) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviewsCount - a.reviewsCount;
      return 0; // featured default
    });
  }, [selectedCategory, selectedSpice, selectedPriceRange, sortBy, searchQuery]);

  return (
    <div className="py-10 sm:py-14 bg-[#FDFBF7] min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-[#FAF6F0] via-white to-[#FAF6F0] rounded-3xl p-8 sm:p-10 border border-[#EADCC9] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#8B1E1E]/10 text-[#8B1E1E] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span>100% Homemade & Sun-Cured</span>
            </div>
            <h1 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B2118]">
              Shop Our Pickles
            </h1>
            <p className="text-sm sm:text-base text-[#6B5E51] max-w-xl">
              Authentic Indian achaar made in small batches with cold-pressed mustard oil, pure rock salt, and whole aromatic spices.
            </p>
          </div>

          <div className="bg-[#FAF6F0] px-5 py-3 rounded-2xl border border-[#EADCC9] flex items-center gap-3 shrink-0">
            <Package className="w-6 h-6 text-[#8B1E1E]" />
            <div>
              <span className="font-bold text-sm text-[#2B2118] block">
                {filteredProducts.length} of {PRODUCTS.length} Varieties
              </span>
              <span className="text-xs text-[#6B5E51]">Available for Delivery</span>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <ProductFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedSpice={selectedSpice}
          onSelectSpice={setSelectedSpice}
          selectedPriceRange={selectedPriceRange}
          onSelectPriceRange={setSelectedPriceRange}
          sortBy={sortBy}
          onSelectSortBy={setSortBy}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onReset={handleResetFilters}
          activeFilterCount={activeFilterCount}
        />

        {/* Product Grid */}
        <ProductGrid
          products={filteredProducts}
          onQuickView={onQuickView}
          onResetFilters={handleResetFilters}
        />
      </div>
    </div>
  );
};
