import React, { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import { Mail, Check, Sparkles } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { showToast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubscribed(true);
      showToast(
        'Welcome to the Takshvi Achaar Family! 🥭',
        'Use code SWAD10 on your first order for 10% discount.',
        'success'
      );
      setEmail('');
    } else {
      showToast('Invalid Email', 'Please enter a valid email address.', 'error');
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FDFBF7] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#EADCC9] shadow-lg relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="w-12 h-12 rounded-full bg-[#8B1E1E]/10 flex items-center justify-center text-[#8B1E1E] mx-auto mb-4">
            <Mail className="w-6 h-6" />
          </div>

          <span className="text-xs font-bold text-[#D97706] tracking-widest uppercase mb-2 inline-block">
            Stories & Special Offers
          </span>

          <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2B2118]">
            Stay Connected With Takshvi Achaar
          </h2>


          <p className="text-sm sm:text-base text-[#6B5E51] mt-3 max-w-xl mx-auto leading-relaxed">
            Get new product updates, special offers and delicious stories from our kitchen.
            Receive a secret 10% discount code upon subscribing!
          </p>

          {/* Form */}
          <form onSubmit={handleSubscribe} className="mt-8 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 text-sm bg-[#FAF6F0] border border-[#EADCC9] rounded-xl focus:outline-none focus:border-[#8B1E1E] focus:bg-white text-[#2B2118]"
                />
              </div>
              <button
                type="submit"
                className="bg-[#8B1E1E] hover:bg-[#731818] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer active:scale-98"
              >
                {isSubscribed ? (
                  <>
                    <Check className="w-4 h-4 text-amber-300" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="text-[11px] text-stone-400 mt-4">
            We value your privacy. No spam ever—just warm culinary stories.
          </p>
        </div>
      </div>
    </section>
  );
};
