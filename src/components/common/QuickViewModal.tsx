import React, { useState } from 'react';
import type { Product } from '../../types';
import { StarRating } from './StarRating';
import { QuantitySelector } from './QuantitySelector';
import { useCart } from '../../context/CartContext';
import { useNavigation } from '../../context/NavigationContext';
import { X, ShoppingBag, ArrowRight, Flame } from 'lucide-react';


interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart, setIsCartOpen } = useCart();
  const { navigate } = useNavigation();

  const [selectedWeight, setSelectedWeight] = useState(product?.defaultWeight || '125gm');
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const currentWeightObj = product.weights.find((w) => w.weight === selectedWeight) || product.weights[0];
  const price = currentWeightObj ? currentWeightObj.price : product.price;
  const originalPrice = currentWeightObj?.originalPrice || product.originalPrice;

  const handleAddToCart = () => {
    addToCart(product, selectedWeight, quantity);
    onClose();
    setIsCartOpen(true);
  };

  const handleViewFullDetails = () => {
    onClose();
    navigate(`/product/${product.slug}`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-[#FDFBF7] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#EADCC9] overflow-hidden animate-fade-in">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200/50 transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Image */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-[#FAF6F0] border border-[#EADCC9]">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="bg-[#8B1E1E]/10 text-[#8B1E1E] text-xs font-bold px-2.5 py-0.5 rounded-full">
                    {product.badge || 'Homemade'}
                  </span>
                  <span className="text-xs font-semibold text-stone-500 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-red-500" />
                    {product.spiceLevel}
                  </span>
                </div>

                <h3 className="font-serif-heading text-2xl font-bold text-[#2B2118]">
                  {product.name}
                </h3>
                <p className="text-xs text-[#8B1E1E] font-semibold">{product.hindiName}</p>

                <div className="mt-2">
                  <StarRating rating={product.rating} reviewsCount={product.reviewsCount} />
                </div>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-[#8B1E1E]">₹{price}</span>
                {originalPrice && originalPrice > price && (
                  <span className="text-sm text-stone-400 line-through">₹{originalPrice}</span>
                )}
                <span className="text-xs text-stone-500 font-medium">({selectedWeight})</span>
              </div>

              <p className="text-xs text-[#6B5E51] leading-relaxed line-clamp-3">
                {product.shortDescription}
              </p>

              {/* Weight Options */}
              <div>
                <label className="block text-xs font-bold text-[#2B2118] uppercase tracking-wider mb-1.5">
                  Select Size:
                </label>
                <div className="flex gap-2">
                  {product.weights.map((w) => (
                    <button
                      key={w.weight}
                      onClick={() => setSelectedWeight(w.weight)}
                      className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all ${
                        selectedWeight === w.weight
                          ? 'bg-[#8B1E1E] text-white border-[#8B1E1E] shadow-xs'
                          : 'bg-white text-[#2B2118] border-[#EADCC9] hover:bg-[#FAF6F0]'
                      }`}
                    >
                      {w.weight}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and CTA */}
              <div className="flex items-center gap-3 pt-2">
                <QuantitySelector quantity={quantity} onChange={setQuantity} size="sm" />
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#8B1E1E] hover:bg-[#731818] text-white py-2.5 px-4 rounded-xl text-xs font-bold shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-amber-200" />
                  <span>Add to Cart (₹{price * quantity})</span>
                </button>
              </div>

              <div className="pt-2 border-t border-[#EADCC9]">
                <button
                  onClick={handleViewFullDetails}
                  className="text-xs text-[#8B1E1E] hover:text-[#731818] font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>View Full Ingredients & Nutrition</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
