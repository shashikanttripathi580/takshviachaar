import React from 'react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { useNavigation } from '../../context/NavigationContext';
import { PRODUCTS } from '../../data/products';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({ isOpen, onClose }) => {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { navigate } = useNavigation();

  if (!isOpen) return null;

  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FDFBF7] shadow-2xl flex flex-col border-l border-[#EADCC9]">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-[#EADCC9] bg-[#FAF6F0] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#8B1E1E] fill-[#8B1E1E]" />
              <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#2B2118]">
                My Wishlist
              </h3>
              <span className="bg-[#D97706] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {wishlist.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-stone-500 hover:text-stone-800 hover:bg-stone-200/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#FAF6F0] border-2 border-dashed border-[#D97706] flex items-center justify-center text-[#8B1E1E]">
                  <Heart className="w-8 h-8 opacity-60" />
                </div>
                <h4 className="font-serif-heading text-lg font-bold text-[#2B2118]">
                  Wishlist Is Empty
                </h4>
                <p className="text-xs text-[#6B5E51] max-w-xs">
                  Save your favorite homemade pickles to order later or share with family!
                </p>
                <button
                  onClick={() => {
                    onClose();
                    navigate('/shop');
                  }}
                  className="mt-2 bg-[#8B1E1E] hover:bg-[#731818] text-white px-4 py-2 rounded-xl text-xs font-semibold shadow"
                >
                  Explore Pickles
                </button>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-3.5 p-3 rounded-xl bg-white border border-[#EADCC9] shadow-xs"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg shrink-0 border border-stone-200"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4
                          onClick={() => {
                            onClose();
                            navigate(`/product/${product.slug}`);
                          }}
                          className="font-serif-heading text-sm font-bold text-[#2B2118] truncate hover:text-[#8B1E1E] cursor-pointer"
                        >
                          {product.name}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="text-stone-400 hover:text-red-600 transition-colors p-1"
                          title="Remove from wishlist"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-[#8B1E1E] font-bold mt-1">₹{product.price}</p>
                    </div>

                    <button
                      onClick={() => {
                        addToCart(product);
                      }}
                      className="mt-2 flex items-center justify-center gap-1.5 bg-[#8B1E1E] hover:bg-[#731818] text-white py-1.5 px-3 rounded-lg text-xs font-semibold transition-all shadow-xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
