import React, { useState } from 'react';
import type { Product } from '../../types';
import { StarRating } from './StarRating';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useNavigation } from '../../context/NavigationContext';
import { Heart, ShoppingBag, Eye, Flame, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { navigate } = useNavigation();

  const [selectedWeight, setSelectedWeight] = useState(product.defaultWeight);
  const [isAdded, setIsAdded] = useState(false);

  const activeWeightObj = product.weights.find((w) => w.weight === selectedWeight) || product.weights[0];
  const currentPrice = activeWeightObj ? activeWeightObj.price : product.price;
  const originalPrice = activeWeightObj?.originalPrice || product.originalPrice;
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedWeight, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1200);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleOpenDetail = () => {
    navigate(`/product/${product.slug}`);
  };

  const getSpiceBadgeColor = (level: string) => {
    switch (level) {
      case 'Mild':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Medium':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Spicy':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Extra Spicy':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-stone-100 text-stone-700 border-stone-200';
    }
  };

  return (
    <div
      onClick={handleOpenDetail}
      className="group bg-white rounded-2xl border border-[#EADCC9] shadow-xs hover:shadow-xl hover:border-[#D97706]/50 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer relative"
    >
      {/* Badges Top Bar */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex flex-col gap-1 items-start">
          {product.badge && (
            <span className="bg-[#8B1E1E] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md tracking-wider uppercase">
              {product.badge}
            </span>
          )}
          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border shadow-2xs flex items-center gap-1 ${getSpiceBadgeColor(
              product.spiceLevel
            )}`}
          >
            <Flame className="w-3 h-3 text-red-500" />
            {product.spiceLevel}
          </span>
        </div>

        {/* Wishlist Heart */}
        <button
          onClick={handleToggleWishlist}
          className={`p-2 rounded-full backdrop-blur-md transition-all pointer-events-auto shadow-sm ${
            isWishlisted
              ? 'bg-white text-red-600'
              : 'bg-white/80 text-stone-500 hover:text-red-500 hover:bg-white'
          }`}
          aria-label="Toggle wishlist"
        >
          <Heart
            className={`w-4 h-4 ${isWishlisted ? 'fill-red-600 text-red-600' : ''}`}
          />
        </button>
      </div>

      {/* Image Container with Hover Zoom */}
      <div className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-[#FAF6F0]">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transform group-hover:scale-106 transition-transform duration-500"
        />

        {/* Quick View Button overlay on hover */}
        {onQuickView && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-white text-[#2B2118] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-[#8B1E1E]" />
            <span>Quick View</span>
          </button>
        )}
      </div>

      {/* Product Information */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Rating */}
          <div className="flex items-center justify-between">
            <StarRating rating={product.rating} reviewsCount={product.reviewsCount} size="sm" />
            <span className="text-[11px] font-medium text-[#D97706] tracking-wide">
              {product.oilType.includes('Oil-Free') ? 'Oil-Free' : 'Mustard Oil'}
            </span>
          </div>

          {/* Title & Hindi Subtitle */}
          <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#2B2118] group-hover:text-[#8B1E1E] transition-colors mt-1.5 leading-snug">
            {product.name}
          </h3>
          <p className="text-xs text-[#8B1E1E] font-medium tracking-wide">
            {product.hindiName}
          </p>

          {/* Description */}
          <p className="text-xs text-[#6B5E51] mt-1 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Weight Selector & Price */}
        <div className="space-y-2.5 pt-2 border-t border-[#EADCC9]/60">
          {/* Weight Chips */}
          <div className="flex items-center gap-1.5 flex-wrap" onClick={(e) => e.stopPropagation()}>
            {product.weights.map((w) => (
              <button
                key={w.weight}
                onClick={() => setSelectedWeight(w.weight)}
                className={`text-[11px] font-semibold px-2 py-0.5 rounded-md transition-all ${
                  selectedWeight === w.weight
                    ? 'bg-[#8B1E1E] text-white shadow-2xs'
                    : 'bg-[#FAF6F0] text-[#6B5E51] hover:bg-stone-200/70 border border-[#EADCC9]'
                }`}
              >
                {w.weight}
              </button>
            ))}
          </div>

          {/* Price & Add to Cart */}
          <div className="flex items-center justify-between pt-1">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg sm:text-xl font-bold text-[#8B1E1E]">
                  ₹{currentPrice}
                </span>
                {originalPrice && originalPrice > currentPrice && (
                  <span className="text-xs text-stone-400 line-through">
                    ₹{originalPrice}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-stone-500 font-medium block -mt-0.5">
                Inc. of all taxes
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer ${
                isAdded
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#8B1E1E] hover:bg-[#731818] text-white hover:shadow-md'
              }`}
              aria-label={`Add ${product.name} to cart`}
            >
              {isAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-amber-200" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
