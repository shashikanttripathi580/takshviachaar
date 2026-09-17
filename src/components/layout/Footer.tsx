import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Sun,
  Award,
  Truck,
  Heart
} from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
  </svg>
);


export const Footer: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <footer className="bg-[#2B1B17] text-[#FAF6F0] pt-16 pb-12 border-t-4 border-[#D97706]">
      {/* Brand Trust Badges Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-400 mb-3">
              <Sun className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-sm text-white">Sun-Cured Naturally</h4>
            <p className="text-xs text-stone-400 mt-1">Slow matured in ceramic barnis</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-400 mb-3">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-sm text-white">100% Wood-Pressed Oil</h4>
            <p className="text-xs text-stone-400 mt-1">Pure Kachi Ghani Mustard Oil</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-400 mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-sm text-white">Zero Preservatives</h4>
            <p className="text-xs text-stone-400 mt-1">No chemical colors or vinegar</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-400 mb-3">
              <Truck className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-sm text-white">Shatterproof Packaging</h4>
            <p className="text-xs text-stone-400 mt-1">Safe delivery to your doorstep</p>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#8B1E1E] flex items-center justify-center text-white shadow-md border border-[#D97706]/40">
                <span className="font-serif-heading font-bold text-lg">त</span>
              </div>
              <div>
                <span className="font-serif-heading text-2xl font-bold tracking-tight text-amber-300">
                  Takshvi Achaar
                </span>
                <p className="text-xs text-stone-300 italic">Har Bite Mein Ghar Ka Swad</p>
              </div>

            </div>

            <p className="text-sm text-stone-300 leading-relaxed max-w-sm">
              Crafted in small batches using traditional Indian recipes passed down through generations.
              We use 100% cold-pressed mustard oil, whole spices, and natural sunlight to bring you the
              authentic taste of home.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#8B1E1E] flex items-center justify-center text-stone-300 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#8B1E1E] flex items-center justify-center text-stone-300 hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#8B1E1E] flex items-center justify-center text-stone-300 hover:text-white transition-colors"
                aria-label="Subscribe on YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif-heading text-base font-semibold text-amber-200 mb-4 tracking-wider uppercase text-xs">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <button onClick={() => navigate('/')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/shop')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  All Pickles
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/shop?category=combo')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Combo Packs
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/about')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Our Story & Heritage
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Care & Policies */}
          <div>
            <h4 className="font-serif-heading text-base font-semibold text-amber-200 mb-4 tracking-wider uppercase text-xs">
              Policies & Help
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Shipping Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Returns & Refunds
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Storage & Shelf Life
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Support & Kitchen Contact */}
          <div>
            <h4 className="font-serif-heading text-base font-semibold text-amber-200 mb-4 tracking-wider uppercase text-xs">
              Customer Support
            </h4>
            <div className="space-y-3 text-sm text-stone-300">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-amber-300 transition-colors text-emerald-400"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp: +91 98765 43210</span>
              </a>
              <a
                href="mailto:namaste@takshviachaar.com"
                className="flex items-center gap-2 hover:text-amber-300 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-amber-400" />
                <span>namaste@takshviachaar.com</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 text-amber-400" />
                <span>+91 (0) 98765 43210</span>
              </a>
              <div className="flex items-start gap-2 pt-1 text-xs text-stone-400">
                <MapPin className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                <span>Traditional Kitchen Workshop, Kabir Chaura, Varanasi, UP - 221001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & payment strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Takshvi Achaar. Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Indian Pickle Lovers.
          </p>


          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] text-stone-400">100% Safe Payments:</span>
            <span className="bg-stone-800 px-2 py-0.5 rounded text-[10px] text-stone-200 font-semibold">UPI</span>
            <span className="bg-stone-800 px-2 py-0.5 rounded text-[10px] text-stone-200 font-semibold">RuPay</span>
            <span className="bg-stone-800 px-2 py-0.5 rounded text-[10px] text-stone-200 font-semibold">Visa / MC</span>
            <span className="bg-stone-800 px-2 py-0.5 rounded text-[10px] text-stone-200 font-semibold">Cash On Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
