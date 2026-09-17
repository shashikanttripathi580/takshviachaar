import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigation } from '../context/NavigationContext';
import { useToast } from '../context/ToastContext';
import type { CheckoutFormData, Order } from '../types';
import confetti from 'canvas-confetti';
import {
  ShieldCheck,
  CreditCard,
  QrCode,
  Banknote,
  Truck,
  Lock,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';


export const CheckoutPage: React.FC = () => {
  const { items, subtotal, discount, shippingFee, total, clearCart } = useCart();
  const { navigate, setLastOrder } = useNavigation();
  const { showToast } = useToast();

  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    apartment: '',
    city: '',
    state: 'Uttar Pradesh',
    pincode: '',
    deliveryNotes: '',
    paymentMethod: 'upi',
    upiId: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isProcessing, setIsProcessing] = useState(false);

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Delhi NCR', 'Chandigarh'
  ];

  const validateForm = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!formData.email.includes('@')) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.address.trim()) errs.address = 'Please enter your street address';
    if (!formData.city.trim()) errs.city = 'Please enter your city';
    if (!formData.pincode.trim()) {
      errs.pincode = 'Please enter your PIN code';
    } else if (!/^\d{6}$/.test(formData.pincode.trim())) {
      errs.pincode = 'Please enter a valid 6-digit PIN code';
    }

    if (formData.paymentMethod === 'upi' && !formData.upiId?.trim()) {
      errs.upiId = 'Please enter your UPI ID (e.g. mobile@upi)';
    }

    if (formData.paymentMethod === 'card') {
      if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, '').length < 16) {
        errs.cardNumber = 'Please enter a valid 16-digit card number';
      }
      if (!formData.cardExpiry) {
        errs.cardExpiry = 'MM/YY required';
      }
      if (!formData.cardCvv || formData.cardCvv.length < 3) {
        errs.cardCvv = 'CVV required';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (field: keyof CheckoutFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      showToast('Empty Cart', 'Please add items before placing an order.', 'error');
      navigate('/shop');
      return;
    }

    if (!validateForm()) {
      showToast('Form Error', 'Please complete all required shipping & payment fields.', 'error');
      return;
    }

    setIsProcessing(true);

    // Simulate order placement
    setTimeout(() => {
      const orderId = `TA-${Math.floor(100000 + Math.random() * 900000)}`;
      const deliveryDate = new Date();

      deliveryDate.setDate(deliveryDate.getDate() + 3);

      const placedOrder: Order = {
        orderId,
        date: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
        items: [...items],
        subtotal,
        discount,
        shipping: shippingFee,
        total,
        customer: formData,
        estimatedDelivery: deliveryDate.toLocaleDateString('en-IN', {
          weekday: 'long',
          day: 'numeric',
          month: 'short',
        }),
        status: 'confirmed',
      };

      setLastOrder(placedOrder);
      clearCart();
      setIsProcessing(false);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#8B1E1E', '#D97706', '#F59E0B', '#1B4332'],
        });
      } catch (err) {
        console.error('Confetti error', err);
      }

      navigate('/order-success');
    }, 1200);
  };

  if (items.length === 0) {
    return (
      <div className="py-20 bg-[#FDFBF7] min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-lg text-[#6B5E51]">Your cart is empty. Please add items to checkout.</p>
          <button
            onClick={() => navigate('/shop')}
            className="bg-[#8B1E1E] text-white px-6 py-2.5 rounded-xl font-bold text-sm"
          >
            Shop Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 sm:py-14 bg-[#FDFBF7] min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <button
          onClick={() => navigate('/cart')}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8B1E1E] hover:underline cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Cart</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Checkout Details Form */}
          <div className="lg:col-span-7 space-y-8">
            <form onSubmit={handlePlaceOrder} className="space-y-8">
              {/* Section 1: Customer Contact Info */}
              <div className="bg-white rounded-3xl border border-[#EADCC9] p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-[#EADCC9]">
                  <span className="w-6 h-6 rounded-full bg-[#8B1E1E] text-white text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <h2 className="font-serif-heading text-lg sm:text-xl font-bold text-[#2B2118]">
                    Contact Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2B2118] uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className={`w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border rounded-xl focus:outline-none focus:bg-white ${
                        errors.fullName ? 'border-red-500' : 'border-[#EADCC9] focus:border-[#8B1E1E]'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2B2118] uppercase mb-1">
                      Mobile Number (+91) *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border rounded-xl focus:outline-none focus:bg-white ${
                        errors.phone ? 'border-red-500' : 'border-[#EADCC9] focus:border-[#8B1E1E]'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-[#2B2118] uppercase mb-1">
                      Email Address (for order receipts & tracking) *
                    </label>
                    <input
                      type="email"
                      placeholder="priya@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border rounded-xl focus:outline-none focus:bg-white ${
                        errors.email ? 'border-red-500' : 'border-[#EADCC9] focus:border-[#8B1E1E]'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>
              </div>

              {/* Section 2: Delivery Address */}
              <div className="bg-white rounded-3xl border border-[#EADCC9] p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-[#EADCC9]">
                  <span className="w-6 h-6 rounded-full bg-[#8B1E1E] text-white text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <h2 className="font-serif-heading text-lg sm:text-xl font-bold text-[#2B2118]">
                    Shipping & Delivery Address
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-[#2B2118] uppercase mb-1">
                      House / Flat / Street Address *
                    </label>
                    <input
                      type="text"
                      placeholder="Flat 402, Royal Residency, M.G. Road"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className={`w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border rounded-xl focus:outline-none focus:bg-white ${
                        errors.address ? 'border-red-500' : 'border-[#EADCC9] focus:border-[#8B1E1E]'
                      }`}
                    />
                    {errors.address && <p className="text-xs text-red-600 mt-1">{errors.address}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2B2118] uppercase mb-1">
                      Landmark / Area (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Near Hanuman Temple"
                      value={formData.apartment || ''}
                      onChange={(e) => handleInputChange('apartment', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border border-[#EADCC9] rounded-xl focus:outline-none focus:border-[#8B1E1E] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2B2118] uppercase mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      placeholder="Varanasi"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className={`w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border rounded-xl focus:outline-none focus:bg-white ${
                        errors.city ? 'border-red-500' : 'border-[#EADCC9] focus:border-[#8B1E1E]'
                      }`}
                    />
                    {errors.city && <p className="text-xs text-red-600 mt-1">{errors.city}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2B2118] uppercase mb-1">
                      State *
                    </label>
                    <select
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border border-[#EADCC9] rounded-xl focus:outline-none focus:border-[#8B1E1E] focus:bg-white"
                    >
                      {indianStates.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2B2118] uppercase mb-1">
                      6-Digit PIN Code *
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      placeholder="221001"
                      value={formData.pincode}
                      onChange={(e) => handleInputChange('pincode', e.target.value.replace(/\D/g, ''))}
                      className={`w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border rounded-xl focus:outline-none focus:bg-white ${
                        errors.pincode ? 'border-red-500' : 'border-[#EADCC9] focus:border-[#8B1E1E]'
                      }`}
                    />
                    {errors.pincode && <p className="text-xs text-red-600 mt-1">{errors.pincode}</p>}
                  </div>
                </div>

                <div className="pt-2">
                  <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#EADCC9] flex items-center justify-between text-xs text-[#2B2118]">
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-[#8B1E1E]" />
                      <span className="font-semibold">Standard Express Delivery (2-4 Days)</span>
                    </div>
                    <span className="font-bold text-emerald-800">
                      {shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Section 3: Payment Options */}
              <div className="bg-white rounded-3xl border border-[#EADCC9] p-6 sm:p-8 shadow-xs space-y-5">
                <div className="flex items-center gap-2 pb-2 border-b border-[#EADCC9]">
                  <span className="w-6 h-6 rounded-full bg-[#8B1E1E] text-white text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <h2 className="font-serif-heading text-lg sm:text-xl font-bold text-[#2B2118]">
                    Payment Method
                  </h2>
                </div>

                {/* 3 Payment Methods Selector */}
                <div className="space-y-3">
                  {/* UPI */}
                  <label
                    className={`block p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      formData.paymentMethod === 'upi'
                        ? 'border-[#8B1E1E] bg-[#FAF6F0]'
                        : 'border-[#EADCC9] bg-white hover:bg-[#FAF6F0]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={formData.paymentMethod === 'upi'}
                          onChange={() => handleInputChange('paymentMethod', 'upi')}
                          className="text-[#8B1E1E] focus:ring-[#8B1E1E]"
                        />
                        <div className="flex items-center gap-2">
                          <QrCode className="w-5 h-5 text-[#8B1E1E]" />
                          <div>
                            <span className="font-bold text-sm text-[#2B2118] block">
                              UPI (GPay / PhonePe / Paytm / BHIM)
                            </span>
                            <span className="text-xs text-[#6B5E51]">
                              Instant, zero transaction fee
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                        Fastest
                      </span>
                    </div>

                    {formData.paymentMethod === 'upi' && (
                      <div className="mt-4 pt-3 border-t border-[#EADCC9] space-y-2">
                        <label className="block text-xs font-bold text-[#2B2118] uppercase">
                          Enter UPI ID / VPA
                        </label>
                        <input
                          type="text"
                          placeholder="yourname@okaxis or mobile@upi"
                          value={formData.upiId || ''}
                          onChange={(e) => handleInputChange('upiId', e.target.value)}
                          className={`w-full px-3 py-2 text-xs bg-white border rounded-lg focus:outline-none ${
                            errors.upiId ? 'border-red-500' : 'border-[#EADCC9] focus:border-[#8B1E1E]'
                          }`}
                        />
                        {errors.upiId && <p className="text-xs text-red-600">{errors.upiId}</p>}
                        <p className="text-[11px] text-stone-400">
                          A payment approval request will be sent to your UPI app.
                        </p>
                      </div>
                    )}
                  </label>

                  {/* Card */}
                  <label
                    className={`block p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      formData.paymentMethod === 'card'
                        ? 'border-[#8B1E1E] bg-[#FAF6F0]'
                        : 'border-[#EADCC9] bg-white hover:bg-[#FAF6F0]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={formData.paymentMethod === 'card'}
                          onChange={() => handleInputChange('paymentMethod', 'card')}
                          className="text-[#8B1E1E] focus:ring-[#8B1E1E]"
                        />
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-5 h-5 text-[#8B1E1E]" />
                          <div>
                            <span className="font-bold text-sm text-[#2B2118] block">
                              Credit / Debit Card
                            </span>
                            <span className="text-xs text-[#6B5E51]">
                              Visa, MasterCard, RuPay, Maestro
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {formData.paymentMethod === 'card' && (
                      <div className="mt-4 pt-3 border-t border-[#EADCC9] space-y-3">
                        <div>
                          <label className="block text-xs font-bold text-[#2B2118] uppercase mb-1">
                            Card Number
                          </label>
                          <input
                            type="text"
                            maxLength={19}
                            placeholder="4532 1234 5678 9010"
                            value={formData.cardNumber || ''}
                            onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                            className="w-full px-3 py-2 text-xs bg-white border border-[#EADCC9] rounded-lg focus:outline-none focus:border-[#8B1E1E]"
                          />
                          {errors.cardNumber && <p className="text-xs text-red-600 mt-1">{errors.cardNumber}</p>}
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-bold text-[#2B2118] uppercase mb-1">
                              Expiry (MM/YY)
                            </label>
                            <input
                              type="text"
                              maxLength={5}
                              placeholder="12/28"
                              value={formData.cardExpiry || ''}
                              onChange={(e) => handleInputChange('cardExpiry', e.target.value)}
                              className="w-full px-3 py-2 text-xs bg-white border border-[#EADCC9] rounded-lg focus:outline-none focus:border-[#8B1E1E]"
                            />
                            {errors.cardExpiry && <p className="text-xs text-red-600 mt-1">{errors.cardExpiry}</p>}
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-[#2B2118] uppercase mb-1">
                              CVV
                            </label>
                            <input
                              type="password"
                              maxLength={4}
                              placeholder="123"
                              value={formData.cardCvv || ''}
                              onChange={(e) => handleInputChange('cardCvv', e.target.value)}
                              className="w-full px-3 py-2 text-xs bg-white border border-[#EADCC9] rounded-lg focus:outline-none focus:border-[#8B1E1E]"
                            />
                            {errors.cardCvv && <p className="text-xs text-red-600 mt-1">{errors.cardCvv}</p>}
                          </div>
                        </div>
                      </div>
                    )}
                  </label>

                  {/* Cash On Delivery */}
                  <label
                    className={`block p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      formData.paymentMethod === 'cod'
                        ? 'border-[#8B1E1E] bg-[#FAF6F0]'
                        : 'border-[#EADCC9] bg-white hover:bg-[#FAF6F0]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={formData.paymentMethod === 'cod'}
                          onChange={() => handleInputChange('paymentMethod', 'cod')}
                          className="text-[#8B1E1E] focus:ring-[#8B1E1E]"
                        />
                        <div className="flex items-center gap-2">
                          <Banknote className="w-5 h-5 text-[#8B1E1E]" />
                          <div>
                            <span className="font-bold text-sm text-[#2B2118] block">
                              Cash on Delivery (COD)
                            </span>
                            <span className="text-xs text-[#6B5E51]">
                              Pay cash or scan courier QR at your door
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#8B1E1E] hover:bg-[#731818] text-white py-4 rounded-2xl font-bold text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing Your Order...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5 text-amber-200" />
                    <span>Place Order (₹{total})</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Sticky Order Summary */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div className="bg-white rounded-3xl border border-[#EADCC9] p-6 sm:p-8 shadow-xs space-y-6">
              <h3 className="font-serif-heading text-xl font-bold text-[#2B2118]">
                Your Order Items ({items.length})
              </h3>

              {/* Items List */}
              <div className="divide-y divide-[#EADCC9]/60 max-h-80 overflow-y-auto space-y-3">
                {items.map((item) => (
                  <div key={`${item.productId}-${item.weight}`} className="pt-3 flex gap-3 items-center">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-14 h-14 object-cover rounded-xl border border-stone-200 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif-heading text-xs sm:text-sm font-bold text-[#2B2118] truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-stone-500">
                        {item.weight} × {item.quantity}
                      </p>
                    </div>
                    <span className="font-bold text-sm text-[#8B1E1E]">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Calculation */}
              <div className="space-y-2.5 pt-4 border-t border-[#EADCC9] text-xs sm:text-sm text-[#6B5E51]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#2B2118]">₹{subtotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Coupon Discount</span>
                    <span className="font-bold">-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="font-bold text-[#2B2118]">
                    {shippingFee === 0 ? (
                      <span className="text-emerald-700 uppercase font-bold">FREE</span>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>

                <div className="pt-3 border-t border-[#EADCC9] flex justify-between items-baseline">
                  <span className="font-serif-heading text-base sm:text-lg font-bold text-[#2B2118]">
                    Grand Total
                  </span>
                  <div className="text-right">
                    <span className="font-serif-heading text-2xl font-bold text-[#8B1E1E]">
                      ₹{total}
                    </span>
                    <span className="text-[10px] text-stone-400 block">All Taxes Included</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-2 border-t border-[#EADCC9]/60 space-y-2 text-xs text-[#6B5E51]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Guaranteed Safe Delivery in Shatterproof Packaging</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Dispatch within 24 hours from Banaras Kitchen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
