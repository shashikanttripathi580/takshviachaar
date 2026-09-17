import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigation } from '../context/NavigationContext';
import { PRODUCTS } from '../data/products';
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Tag,
  ShieldCheck,
  Truck,
  ArrowLeft
} from 'lucide-react';

export const CartPage: React.FC = () => {
  const {
    items,
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
    addToCart,
  } = useCart();

  const { navigate } = useNavigation();
  const [couponCode, setCouponCode] = useState('');

  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim()) {
      const success = applyCoupon(couponCode);
      if (success) setCouponCode('');
    }
  };

  // Upsell candidates: items not in cart
  const inCartIds = items.map((i) => i.productId);
  const upsellItems = PRODUCTS.filter((p) => !inCartIds.includes(p.id)).slice(0, 2);

  if (items.length === 0) {
    return (
      <div className="py-20 bg-[#FDFBF7] min-h-[70vh] flex items-center justify-center animate-fade-in">
        <div className="max-w-md w-full mx-auto text-center px-4 space-y-6">
          <div className="w-24 h-24 rounded-full bg-[#FAF6F0] border-2 border-dashed border-[#D97706] flex items-center justify-center text-[#8B1E1E] mx-auto">
            <ShoppingBag className="w-12 h-12 opacity-40" />
          </div>
          <div>
            <h2 className="font-serif-heading text-3xl font-extrabold text-[#2B2118]">
              Your Cart Is Empty
            </h2>
            <p className="text-sm text-[#6B5E51] mt-2 leading-relaxed">
              Looks like you haven’t added any delicious homemade pickles yet. Explore our authentic recipes to find your family’s favorite swad.
            </p>
          </div>
          <button
            onClick={() => navigate('/shop')}
            className="bg-[#8B1E1E] hover:bg-[#731818] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Pickles Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 sm:py-14 bg-[#FDFBF7] min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EADCC9] pb-6">
          <div>
            <h1 className="font-serif-heading text-3xl sm:text-4xl font-extrabold text-[#2B2118]">
              Shopping Cart
            </h1>
            <p className="text-xs sm:text-sm text-[#6B5E51] mt-1">
              You have {items.length} item{items.length > 1 ? 's' : ''} in your cart
            </p>
          </div>
          <button
            onClick={() => navigate('/shop')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8B1E1E] hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </button>
        </div>

        {/* Free Shipping Alert Bar */}
        <div className="bg-[#FAF6F0] p-4 sm:p-5 rounded-2xl border border-[#EADCC9] shadow-xs">
          <div className="flex items-center justify-between flex-wrap gap-2 text-xs sm:text-sm">
            <span className="font-bold text-[#2B2118] flex items-center gap-2">
              <Truck className="w-5 h-5 text-[#D97706]" />
              {amountNeededForFreeShipping > 0 ? (
                <>
                  Add <span className="text-[#8B1E1E]">₹{amountNeededForFreeShipping}</span> more to get <span className="text-emerald-700 font-bold uppercase">FREE Shipping</span>
                </>
              ) : (
                <span className="text-emerald-700 font-bold">
                  🎉 You’ve unlocked FREE Pan-India Delivery!
                </span>
              )}
            </span>
            <span className="text-xs text-[#6B5E51]">Threshold: ₹{freeShippingThreshold}</span>
          </div>
          <div className="w-full bg-[#EADCC9] h-2.5 rounded-full mt-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#D97706] to-[#8B1E1E] h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Main Grid: Item Table + Sticky Order Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Items Table */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white rounded-3xl border border-[#EADCC9] shadow-xs overflow-hidden">
              <div className="divide-y divide-[#EADCC9]/70">
                {items.map((item) => (
                  <div
                    key={`${item.productId}-${item.weight}`}
                    className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-[#FAF6F0]/40 transition-colors"
                  >
                    {/* Img + Title */}
                    <div className="flex items-center gap-4">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-2xl border border-stone-200 shrink-0"
                      />
                      <div className="space-y-1">
                        <h3
                          onClick={() => navigate(`/product/${item.product.slug}`)}
                          className="font-serif-heading text-base sm:text-lg font-bold text-[#2B2118] hover:text-[#8B1E1E] cursor-pointer"
                        >
                          {item.product.name}
                        </h3>
                        <p className="text-xs text-[#8B1E1E] font-medium">
                          {item.product.hindiName}
                        </p>
                        <span className="inline-block bg-[#FAF6F0] text-[#6B5E51] text-xs font-semibold px-2.5 py-0.5 rounded-md border border-[#EADCC9]">
                          Weight: {item.weight}
                        </span>
                      </div>
                    </div>

                    {/* Quantity + Price + Delete */}
                    <div className="flex items-center justify-between w-full sm:w-auto sm:gap-8">
                      {/* Stepper */}
                      <div className="flex items-center border border-[#EADCC9] rounded-xl bg-white shadow-2xs">
                        <button
                          onClick={() => updateQuantity(item.productId, item.weight, item.quantity - 1)}
                          className="p-2 text-stone-500 hover:text-[#8B1E1E] hover:bg-[#FAF6F0] rounded-l-xl transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs sm:text-sm font-bold text-[#2B2118]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.weight, item.quantity + 1)}
                          className="p-2 text-stone-500 hover:text-[#8B1E1E] hover:bg-[#FAF6F0] rounded-r-xl transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right min-w-[5rem]">
                        <span className="font-serif-heading text-lg font-bold text-[#8B1E1E] block">
                          ₹{item.price * item.quantity}
                        </span>
                        {item.quantity > 1 && (
                          <span className="text-[11px] text-stone-400 block">
                            (₹{item.price} each)
                          </span>
                        )}
                      </div>

                      {/* Trash */}
                      <button
                        onClick={() => removeFromCart(item.productId, item.weight)}
                        className="text-stone-400 hover:text-red-600 transition-colors p-2"
                        title="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Add-ons */}
            {upsellItems.length > 0 && (
              <div className="bg-[#FAF6F0] rounded-3xl border border-[#EADCC9] p-6 space-y-4">
                <h4 className="font-serif-heading text-base font-bold text-[#2B2118]">
                  Complete Your Pickle Pantry:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {upsellItems.map((prod) => (
                    <div
                      key={prod.id}
                      className="bg-white p-3.5 rounded-2xl border border-[#EADCC9] flex items-center justify-between gap-3"
                    >
                      <img
                        src={prod.images[0]}
                        alt={prod.name}
                        className="w-14 h-14 object-cover rounded-xl shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-serif-heading text-xs font-bold text-[#2B2118] truncate">
                          {prod.name}
                        </h5>
                        <span className="text-xs font-bold text-[#8B1E1E]">₹{prod.price}</span>
                      </div>
                      <button
                        onClick={() => addToCart(prod, prod.defaultWeight, 1)}
                        className="bg-[#FAF6F0] hover:bg-[#8B1E1E] hover:text-white text-[#8B1E1E] border border-[#EADCC9] text-xs font-bold px-3 py-1.5 rounded-xl transition-all shrink-0 cursor-pointer"
                      >
                        + Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Order Summary */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="bg-white rounded-3xl border border-[#EADCC9] p-6 sm:p-7 shadow-xs space-y-6">
              <h3 className="font-serif-heading text-xl font-bold text-[#2B2118]">
                Order Summary
              </h3>

              {/* Promo code */}
              {!appliedCoupon ? (
                <form onSubmit={handleApplyCoupon} className="space-y-2">
                  <label className="block text-xs font-bold text-[#2B2118] uppercase tracking-wider">
                    Discount Coupon
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 text-xs bg-[#FAF6F0] border border-[#EADCC9] rounded-xl focus:outline-none focus:border-[#8B1E1E] uppercase"
                      />
                      <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
                    </div>
                    <button
                      type="submit"
                      className="bg-[#2B2118] hover:bg-[#8B1E1E] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                  <span className="text-[11px] text-stone-400 block">
                    Try code <strong className="text-[#8B1E1E]">SWAD10</strong> for 10% off
                  </span>
                </form>
              ) : (
                <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 p-3 rounded-xl text-xs">
                  <div>
                    <span className="font-bold text-emerald-900 block">Coupon: {appliedCoupon}</span>
                    <span className="text-emerald-700">You saved ₹{discount}!</span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-red-600 font-bold underline hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              )}

              {/* Calculations */}
              <div className="space-y-3 text-sm text-[#6B5E51] border-t border-[#EADCC9]/60 pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#2B2118]">₹{subtotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount</span>
                    <span className="font-bold">-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Standard Shipping</span>
                  <span className="font-bold text-[#2B2118]">
                    {shippingFee === 0 ? (
                      <span className="text-emerald-700 uppercase font-bold">FREE</span>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>

                <div className="border-t border-[#EADCC9] pt-3 flex justify-between items-baseline">
                  <span className="font-serif-heading text-lg font-bold text-[#2B2118]">
                    Total
                  </span>
                  <div className="text-right">
                    <span className="font-serif-heading text-2xl font-bold text-[#8B1E1E]">
                      ₹{total}
                    </span>
                    <span className="text-[10px] text-stone-400 block">
                      Inclusive of all GST
                    </span>
                  </div>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-[#8B1E1E] hover:bg-[#731818] text-white py-4 rounded-xl font-bold text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-stone-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Encrypted & Safe Payments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
