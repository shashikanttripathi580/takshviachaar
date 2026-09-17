import React from 'react';
import type { Product } from '../../types';
import { ProductCard } from '../common/ProductCard';
import { ShoppingBag, RotateCcw } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  onResetFilters?: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onQuickView,
  onResetFilters,
}) => {
  if (products.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-[#EADCC9] p-12 text-center max-w-lg mx-auto space-y-4 my-8 shadow-xs">
        <div className="w-16 h-16 rounded-full bg-[#FAF6F0] border-2 border-dashed border-[#D97706] flex items-center justify-center text-[#8B1E1E] mx-auto">
          <ShoppingBag className="w-8 h-8 opacity-50" />
        </div>
        <h3 className="font-serif-heading text-xl font-bold text-[#2B2118]">
          No Pickles Match Your Selection
        </h3>
        <p className="text-xs sm:text-sm text-[#6B5E51]">
          Try clearing your search query or selecting a different category or spice level.
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="bg-[#8B1E1E] hover:bg-[#731818] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onQuickView={onQuickView}
        />
      ))}
    </div>
  );
};
