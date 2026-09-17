import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import {
  CheckCircle2,
  PackageCheck,
  Truck,
  ArrowRight,
  Clock,
  MapPin,
  X,
  MessageCircle,
  Sparkles
} from 'lucide-react';


export const OrderSuccessPage: React.FC = () => {
  const { lastOrder, navigate } = useNavigation();
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);

  // Fallback if accessed directly
  const orderId = lastOrder?.orderId || 'TA-849214';
  const estimatedDelivery = lastOrder?.estimatedDelivery || 'in 3 business days';
  const total = lastOrder?.total || 699;
  const items = lastOrder?.items || [];
  const customer = lastOrder?.customer;

  return (
    <div className="py-12 sm:py-20 bg-[#FDFBF7] min-h-screen animate-fade-in">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Main Success Card */}
        <div className="bg-white rounded-3xl border border-[#EADCC9] p-8 sm:p-12 text-center shadow-lg space-y-6 relative overflow-hidden">
          {/* Top celebratory accent */}
          <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#8B1E1E] uppercase tracking-widest bg-[#8B1E1E]/10 px-3 py-1 rounded-full">
              Order Confirmed • आदेश स्वीकार हुआ
            </span>
            <h1 className="font-serif-heading text-3xl sm:text-4xl font-extrabold text-[#2B2118]">
              Thank You for Choosing Takshvi Achaar!
            </h1>

            <p className="text-sm sm:text-base text-[#6B5E51] max-w-lg mx-auto leading-relaxed">
              Your order <strong className="text-[#8B1E1E]">#{orderId}</strong> has been confirmed. Our kitchen will start hand-packing your fresh small-batch pickle jars today!
            </p>
          </div>

          {/* Key Order Highlight Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
            <div className="bg-[#FAF6F0] p-4 rounded-2xl border border-[#EADCC9]">
              <span className="text-xs text-stone-500 block">Order Number</span>
              <span className="font-bold text-sm text-[#8B1E1E] font-mono mt-0.5 block">
                #{orderId}
              </span>
            </div>

            <div className="bg-[#FAF6F0] p-4 rounded-2xl border border-[#EADCC9]">
              <span className="text-xs text-stone-500 block">Estimated Delivery</span>
              <span className="font-bold text-sm text-emerald-800 mt-0.5 block flex items-center gap-1">
                <Clock className="w-4 h-4 text-emerald-600" />
                {estimatedDelivery}
              </span>
            </div>

            <div className="bg-[#FAF6F0] p-4 rounded-2xl border border-[#EADCC9]">
              <span className="text-xs text-stone-500 block">Total Paid</span>
              <span className="font-bold text-sm text-[#2B2118] mt-0.5 block">
                ₹{total}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/shop')}
              className="w-full sm:w-auto bg-[#8B1E1E] hover:bg-[#731818] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Continue Shopping</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsTrackModalOpen(true)}
              className="w-full sm:w-auto bg-white hover:bg-[#FAF6F0] text-[#2B2118] border-2 border-[#EADCC9] px-7 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Truck className="w-4 h-4 text-[#D97706]" />
              <span>Track Order Status</span>
            </button>
          </div>
        </div>

        {/* Order Details Breakdown Card */}
        {customer && (
          <div className="bg-white rounded-3xl border border-[#EADCC9] p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="font-serif-heading text-lg font-bold text-[#2B2118] pb-2 border-b border-[#EADCC9]">
              Shipping & Customer Summary
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#6B5E51]">
              <div>
                <span className="font-bold text-[#2B2118] block mb-1">Delivering To:</span>
                <p className="font-semibold text-[#2B2118]">{customer.fullName}</p>
                <p>{customer.address}</p>
                {customer.apartment && <p>{customer.apartment}</p>}
                <p>{customer.city}, {customer.state} - {customer.pincode}</p>
                <p className="mt-1 font-mono text-stone-500">Phone: +91 {customer.phone}</p>
              </div>

              <div>
                <span className="font-bold text-[#2B2118] block mb-1">Payment & Dispatch:</span>
                <p className="capitalize">
                  Method: <strong>{customer.paymentMethod.toUpperCase()}</strong>
                </p>
                <p className="mt-1">
                  Dispatch: <strong>Express Courier (BlueDart/Delhivery)</strong>
                </p>
                <p className="mt-1 text-emerald-700 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  SMS & Email updates will be sent to {customer.email}
                </p>
              </div>
            </div>

            {items.length > 0 && (
              <div className="pt-4 border-t border-[#EADCC9] space-y-2">
                <span className="font-bold text-[#2B2118] text-xs block">Items In This Order:</span>
                <div className="divide-y divide-[#EADCC9]/50">
                  {items.map((it) => (
                    <div key={`${it.productId}-${it.weight}`} className="py-2 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <img src={it.product.images[0]} alt={it.product.name} className="w-10 h-10 object-cover rounded-lg border border-stone-200" />
                        <div>
                          <span className="font-bold text-[#2B2118] block">{it.product.name}</span>
                          <span className="text-stone-500">{it.weight} × {it.quantity}</span>
                        </div>
                      </div>
                      <span className="font-bold text-[#8B1E1E]">₹{it.price * it.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}



        {/* Help Banner */}
        <div className="bg-[#FAF6F0] rounded-2xl p-4 border border-[#EADCC9] flex items-center justify-between flex-wrap gap-3 text-xs text-[#6B5E51]">
          <span>Need help with your order? Our kitchen team is just a message away.</span>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-bold text-emerald-700 hover:underline"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Tracking Modal */}
      {isTrackModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            onClick={() => setIsTrackModalOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          />

          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#EADCC9] space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#EADCC9]">
                <div>
                  <h3 className="font-serif-heading text-lg font-bold text-[#2B2118]">
                    Tracking Order #{orderId}
                  </h3>
                  <span className="text-xs text-stone-500">Carrier: BlueDart Express Air</span>
                </div>
                <button
                  onClick={() => setIsTrackModalOpen(false)}
                  className="p-1 text-stone-400 hover:text-stone-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Step Timeline */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="w-0.5 h-12 bg-emerald-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#2B2118]">Order Confirmed</h5>
                    <p className="text-xs text-stone-500">Payment received and order sent to Banaras Kitchen.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#D97706] text-white flex items-center justify-center animate-pulse">
                      <PackageCheck className="w-5 h-5" />
                    </div>
                    <div className="w-0.5 h-12 bg-stone-200" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#2B2118]">Packing in Progress</h5>
                    <p className="text-xs text-stone-500">Jars sealed hygienically in shatterproof boxes.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-400 flex items-center justify-center">
                      <Truck className="w-4 h-4" />
                    </div>
                    <div className="w-0.5 h-12 bg-stone-200" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-stone-400">Handed over to BlueDart</h5>
                    <p className="text-xs text-stone-400">Scheduled for dispatch today evening.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-400 flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-stone-400">Out for Delivery</h5>
                    <p className="text-xs text-stone-400">Expected arrival: {estimatedDelivery}.</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsTrackModalOpen(false)}
                className="w-full bg-[#8B1E1E] text-white py-3 rounded-xl font-bold text-xs"
              >
                Close Tracking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
