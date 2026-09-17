import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigation } from '../../context/NavigationContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, ShieldCheck, Truck } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    shippingFee,
    freeShippingThreshold,
    amountNeededForFreeShipping,
    appliedCoupon,
    discount,
    applyCoupon,
    removeCoupon,
    total,
    totalItemsCount,
  } = useCart();

  const { navigate } = useNavigation();
  const [couponInput, setCouponInput] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponInput.trim()) {
      const success = applyCoupon(couponInput);
      if (success) setCouponInput('');
    }
  };

  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FDFBF7] shadow-2xl flex flex-col border-l border-[#EADCC9]">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-[#EADCC9] bg-[#FAF6F0] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#8B1E1E]" />
              <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#2B2118]">
                Your Pickle Jar
              </h3>
              <span className="bg-[#8B1E1E] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItemsCount}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full text-stone-500 hover:text-stone-800 hover:bg-stone-200/50 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free shipping progress bar */}
          <div className="bg-[#FFF8EE] px-4 sm:px-6 py-3 border-b border-[#EADCC9] text-xs">
            {amountNeededForFreeShipping > 0 ? (
              <div>
                <p className="text-[#8B1E1E] font-medium flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#D97706]" />
                  Add <strong className="text-[#D97706]">₹{amountNeededForFreeShipping}</strong> more to unlock <span className="font-bold text-[#8B1E1E]">FREE Delivery</span>!
                </p>
                <div className="w-full bg-[#EADCC9] h-2 rounded-full mt-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#D97706] to-[#8B1E1E] h-full rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-[#1B4332] font-semibold">
                <span className="text-base">🎉</span>
                <span>Congratulations! You have unlocked <strong>FREE Delivery</strong> across India!</span>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-[#FAF6F0] border-2 border-dashed border-[#D97706] flex items-center justify-center text-[#8B1E1E]">
                  <ShoppingBag className="w-10 h-10 opacity-60" />
                </div>
                <div>
                  <h4 className="font-serif-heading text-lg font-bold text-[#2B2118]">
                    Your Jar Is Empty
                  </h4>
                  <p className="text-xs text-[#6B5E51] mt-1 max-w-xs">
                    No delicious pickles yet! Explore our handcrafted heirloom recipes made with pure mustard oil.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/shop');
                  }}
                  className="bg-[#8B1E1E] hover:bg-[#731818] text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md transition-all cursor-pointer"
                >
                  Shop Authentic Pickles
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.productId}-${item.weight}`}
                  className="flex gap-3.5 p-3 rounded-xl bg-white border border-[#EADCC9] shadow-xs"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg shrink-0 border border-stone-200"
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4
                          onClick={() => {
                            setIsCartOpen(false);
                            navigate(`/product/${item.product.slug}`);
                          }}
                          className="font-serif-heading text-sm font-bold text-[#2B2118] truncate hover:text-[#8B1E1E] cursor-pointer"
                        >
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.productId, item.weight)}
                          className="text-stone-400 hover:text-[#8B1E1E] transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="inline-block bg-[#FAF6F0] text-[#6B5E51] text-[11px] font-medium px-2 py-0.5 rounded mt-0.5">
                        Jar: {item.weight}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Modifier */}
                      <div className="flex items-center border border-[#EADCC9] rounded-lg bg-[#FAF6F0]">
                        <button
                          onClick={() => updateQuantity(item.productId, item.weight, item.quantity - 1)}
                          className="p-1 hover:bg-stone-200 rounded-l transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5 text-stone-600" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-[#2B2118]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.weight, item.quantity + 1)}
                          className="p-1 hover:bg-stone-200 rounded-r transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5 text-stone-600" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="font-bold text-sm text-[#8B1E1E]">
                          ₹{item.price * item.quantity}
                        </div>
                        {item.quantity > 1 && (
                          <div className="text-[10px] text-stone-400">
                            (₹{item.price} each)
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Order Summary */}
          {items.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-[#EADCC9] bg-[#FAF6F0] space-y-4">
              {/* Coupon Code Box */}
              {!appliedCoupon ? (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Coupon (e.g. SWAD10)"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 text-xs bg-white border border-[#EADCC9] rounded-lg focus:outline-none focus:border-[#8B1E1E] uppercase"
                    />
                    <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#2B2118] hover:bg-[#8B1E1E] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                    <Tag className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Coupon <strong>{appliedCoupon}</strong> applied (-₹{discount})</span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-red-600 hover:text-red-800 font-bold ml-2 underline text-[11px]"
                  >
                    Remove
                  </button>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#6B5E51]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#2B2118]">₹{subtotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount</span>
                    <span className="font-semibold">-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Standard Shipping</span>
                  <span className="font-semibold text-[#2B2118]">
                    {shippingFee === 0 ? (
                      <span className="text-emerald-700 font-bold uppercase">FREE</span>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#EADCC9] flex justify-between text-sm font-bold text-[#2B2118]">
                  <span>Total Amount</span>
                  <span className="text-base text-[#8B1E1E]">₹{total}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/checkout');
                  }}
                  className="w-full bg-[#8B1E1E] hover:bg-[#731818] text-white py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/cart');
                  }}
                  className="w-full bg-white hover:bg-stone-100 text-[#2B2118] border border-[#EADCC9] py-2 rounded-xl font-semibold text-xs transition-colors cursor-pointer"
                >
                  View Full Cart
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Secure Checkout & Shatter-Proof Packing</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
