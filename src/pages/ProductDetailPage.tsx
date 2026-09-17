import React, { useState, useEffect } from 'react';
import type { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { StarRating } from '../components/common/StarRating';
import { QuantitySelector } from '../components/common/QuantitySelector';
import { ProductCard } from '../components/common/ProductCard';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';
import { useNavigation } from '../context/NavigationContext';
import {
  ShoppingBag,
  Zap,
  Heart,
  Truck,
  ShieldCheck,
  Sun,
  Flame,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  MapPin,
  Utensils
} from 'lucide-react';


interface ProductDetailPageProps {
  slug: string;
  onQuickView: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  slug,
  onQuickView,
}) => {
  const { addToCart, setIsCartOpen } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { showToast } = useToast();
  const { navigate } = useNavigation();

  // Find product by slug or default to first
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState(product.defaultWeight);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'nutrition' | 'storage' | 'shipping'>('description');
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState<string | null>(null);

  // Sync state when product slug changes
  useEffect(() => {
    setActiveImageIndex(0);
    setSelectedWeight(product.defaultWeight);
    setQuantity(1);
    setActiveTab('description');
    setPincodeStatus(null);
  }, [product]);

  const activeWeightObj = product.weights.find((w) => w.weight === selectedWeight) || product.weights[0];
  const currentPrice = activeWeightObj ? activeWeightObj.price : product.price;
  const originalPrice = activeWeightObj?.originalPrice || product.originalPrice;
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedWeight, quantity);
    setIsCartOpen(true);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedWeight, quantity);
    navigate('/checkout');
  };

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (/^\d{6}$/.test(pincode)) {
      setPincodeStatus('Available! Express Delivery in 2-4 business days via BlueDart/Delhivery.');
      showToast('Delivery Available', 'We deliver to your location in 2-4 business days.', 'success');
    } else {
      setPincodeStatus('Please enter a valid 6-digit Indian PIN code.');
    }
  };

  // Related products
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="py-8 sm:py-12 bg-[#FDFBF7] min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#6B5E51]">
          <button onClick={() => navigate('/')} className="hover:text-[#8B1E1E]">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <button onClick={() => navigate('/shop')} className="hover:text-[#8B1E1E]">
            Shop Pickles
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="font-semibold text-[#2B2118] truncate">{product.name}</span>
        </nav>

        {/* Product Showcase: Gallery + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Preview */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#FAF6F0] border border-[#EADCC9] shadow-md group">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={`${product.name} view`}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* Wishlist Floating Button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md shadow-md transition-all ${
                  isWishlisted
                    ? 'bg-white text-red-600 shadow-red-200'
                    : 'bg-white/80 text-stone-600 hover:text-red-500 hover:bg-white'
                }`}
                aria-label="Save to Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-600 text-red-600' : ''}`} />
              </button>

              {/* Badge Tag */}
              {product.badge && (
                <div className="absolute top-4 left-4 bg-[#8B1E1E] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnail Carousel / Grid */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-[#8B1E1E] ring-2 ring-[#8B1E1E]/20 scale-102'
                        : 'border-[#EADCC9] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Spec & Purchase */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              {/* Category & Spice tag */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  {product.category.toUpperCase()} PICKLE
                </span>
                <span className="text-xs font-semibold text-stone-600 flex items-center gap-1 bg-stone-100 px-2.5 py-1 rounded-md">
                  <Flame className="w-3.5 h-3.5 text-red-500" />
                  {product.spiceLevel} Heat
                </span>
              </div>

              {/* Title & Hindi Subtitle */}
              <h1 className="font-serif-heading text-3xl sm:text-4xl font-extrabold text-[#2B2118] tracking-tight">
                {product.name}
              </h1>
              <p className="text-base font-semibold text-[#8B1E1E] mt-1">{product.hindiName}</p>

              {/* Rating */}
              <div className="mt-3 flex items-center gap-3">
                <StarRating rating={product.rating} reviewsCount={product.reviewsCount} size="md" />
                <span className="text-stone-300">|</span>
                <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> 100% In Stock & Hand-Packed
                </span>
              </div>
            </div>

            {/* Price section */}
            <div className="bg-[#FAF6F0] p-4 rounded-2xl border border-[#EADCC9] flex items-baseline justify-between">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#8B1E1E]">
                    ₹{currentPrice}
                  </span>
                  {originalPrice && originalPrice > currentPrice && (
                    <>
                      <span className="text-lg text-stone-400 line-through">₹{originalPrice}</span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        Save ₹{originalPrice - currentPrice}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-xs text-[#6B5E51] mt-1 font-medium">
                  Inclusive of all taxes. Free shipping on orders above ₹499.
                </p>
              </div>

              <div className="text-right text-xs text-[#8B1E1E] font-semibold bg-white px-3 py-1.5 rounded-xl border border-[#EADCC9]">
                {product.oilType}
              </div>
            </div>

            {/* Weight / Size Selector */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-[#2B2118] uppercase tracking-wider">
                  Select Jar Weight:
                </label>
                <span className="text-[#8B1E1E] font-semibold">Larger sizes save up to 20%</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {product.weights.map((w) => (
                  <button
                    key={w.weight}
                    onClick={() => setSelectedWeight(w.weight)}
                    className={`py-3 px-4 rounded-xl border-2 text-center transition-all cursor-pointer ${
                      selectedWeight === w.weight
                        ? 'border-[#8B1E1E] bg-[#8B1E1E]/5 shadow-xs'
                        : 'border-[#EADCC9] bg-white hover:bg-[#FAF6F0]'
                    }`}
                  >
                    <span className="block text-sm font-bold text-[#2B2118]">{w.weight}</span>
                    <span className="block text-xs text-[#8B1E1E] font-semibold mt-0.5">
                      ₹{w.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-4">
                <QuantitySelector quantity={quantity} onChange={setQuantity} size="lg" />
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#8B1E1E] hover:bg-[#731818] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
                >
                  <ShoppingBag className="w-5 h-5 text-amber-200" />
                  <span>Add to Cart (₹{currentPrice * quantity})</span>
                </button>
              </div>

              <button
                onClick={handleBuyNow}
                className="w-full bg-[#D97706] hover:bg-[#B45309] text-white py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
              >
                <Zap className="w-5 h-5 fill-white text-white" />
                <span>Buy Now (Instant Checkout)</span>
              </button>
            </div>

            {/* Delivery Pincode Checker */}
            <div className="bg-white p-4 rounded-2xl border border-[#EADCC9] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#2B2118] uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#8B1E1E]" />
                <span>Check Delivery to Your Pincode</span>
              </div>
              <form onSubmit={handleCheckPincode} className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Enter 6-digit Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                  className="flex-1 px-3 py-2 text-xs bg-[#FAF6F0] border border-[#EADCC9] rounded-lg focus:outline-none focus:border-[#8B1E1E]"
                />
                <button
                  type="submit"
                  className="bg-[#2B2118] hover:bg-[#8B1E1E] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Check
                </button>
              </form>
              {pincodeStatus && (
                <p className={`text-xs font-medium ${pincodeStatus.includes('Available') ? 'text-emerald-700' : 'text-red-600'}`}>
                  {pincodeStatus}
                </p>
              )}
            </div>

            {/* Guarantee Pills */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs text-[#6B5E51]">
              <div className="bg-[#FAF6F0] p-2.5 rounded-xl border border-[#EADCC9]/70 flex flex-col items-center gap-1">
                <Sun className="w-4 h-4 text-[#D97706]" />
                <span className="font-semibold text-[11px]">Sun Cured</span>
              </div>
              <div className="bg-[#FAF6F0] p-2.5 rounded-xl border border-[#EADCC9]/70 flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#D97706]" />
                <span className="font-semibold text-[11px]">No Chemicals</span>
              </div>
              <div className="bg-[#FAF6F0] p-2.5 rounded-xl border border-[#EADCC9]/70 flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-[#D97706]" />
                <span className="font-semibold text-[11px]">Safe Glass Pack</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Product Information */}
        <div className="bg-white rounded-3xl border border-[#EADCC9] p-6 sm:p-10 shadow-xs space-y-6">
          {/* Tab Navigation */}
          <div className="flex border-b border-[#EADCC9] overflow-x-auto gap-2 sm:gap-6 pb-2">
            {[
              { id: 'description', label: 'Description' },
              { id: 'ingredients', label: 'Ingredients & Spices' },
              { id: 'nutrition', label: 'Nutrition Facts' },
              { id: 'storage', label: 'Storage & Care' },
              { id: 'shipping', label: 'Shipping & Delivery' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-2.5 px-4 font-bold text-xs sm:text-sm whitespace-nowrap rounded-xl transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#8B1E1E] text-white shadow-xs'
                    : 'text-[#6B5E51] hover:text-[#8B1E1E] hover:bg-[#FAF6F0]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="text-sm leading-relaxed text-[#6B5E51] min-h-[160px]">
            {activeTab === 'description' && (
              <div className="space-y-4">
                <h3 className="font-serif-heading text-xl font-bold text-[#2B2118]">
                  The Heirloom Recipe Story
                </h3>
                <p className="leading-relaxed">{product.description}</p>
                <div className="bg-[#FAF6F0] p-4 rounded-2xl border border-[#EADCC9] max-w-xl">
                  <span className="font-bold text-xs text-[#8B1E1E] block mb-1">
                    Shelf Life Guarantee:
                  </span>
                  <p className="text-xs text-[#6B5E51]">{product.shelfLife}</p>
                </div>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="space-y-4">
                <h3 className="font-serif-heading text-xl font-bold text-[#2B2118]">
                  Hand-Selected Ingredients (No Artificial Additives)
                </h3>
                <p className="text-xs text-[#6B5E51]">
                  Every ingredient is cleaned, stone-ground, and sun-treated without chemical preservatives or artificial food colors.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {product.ingredients.map((ing, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 bg-[#FAF6F0] p-3 rounded-xl border border-[#EADCC9]"
                    >
                      <Sparkles className="w-4 h-4 text-[#D97706] shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-[#2B2118]">{ing}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div className="space-y-4">
                <h3 className="font-serif-heading text-xl font-bold text-[#2B2118]">
                  Nutritional Value (Per {product.nutrition.servingSize})
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-2xl pt-2">
                  <div className="bg-[#FAF6F0] p-4 rounded-2xl border border-[#EADCC9] text-center">
                    <span className="text-xs text-stone-500 block">Energy</span>
                    <span className="font-bold text-base text-[#8B1E1E] mt-1 block">{product.nutrition.calories}</span>
                  </div>
                  <div className="bg-[#FAF6F0] p-4 rounded-2xl border border-[#EADCC9] text-center">
                    <span className="text-xs text-stone-500 block">Protein</span>
                    <span className="font-bold text-base text-[#2B2118] mt-1 block">{product.nutrition.protein}</span>
                  </div>
                  <div className="bg-[#FAF6F0] p-4 rounded-2xl border border-[#EADCC9] text-center">
                    <span className="text-xs text-stone-500 block">Carbohydrates</span>
                    <span className="font-bold text-base text-[#2B2118] mt-1 block">{product.nutrition.carbs}</span>
                  </div>
                  <div className="bg-[#FAF6F0] p-4 rounded-2xl border border-[#EADCC9] text-center">
                    <span className="text-xs text-stone-500 block">Healthy Fats</span>
                    <span className="font-bold text-base text-[#2B2118] mt-1 block">{product.nutrition.fat}</span>
                  </div>
                  <div className="bg-[#FAF6F0] p-4 rounded-2xl border border-[#EADCC9] text-center">
                    <span className="text-xs text-stone-500 block">Sodium</span>
                    <span className="font-bold text-base text-[#2B2118] mt-1 block">{product.nutrition.sodium}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'storage' && (
              <div className="space-y-4">
                <h3 className="font-serif-heading text-xl font-bold text-[#2B2118]">
                  How To Store & Preserve Your Pickle
                </h3>
                <p className="leading-relaxed">{product.storage}</p>
                <ul className="space-y-2 text-xs sm:text-sm list-disc list-inside">
                  <li>Always use a clean, dry spoon to avoid moisture introduction.</li>
                  <li>Do not leave metal spoons inside the jar.</li>
                  <li>In summer or high humidity, keep the lid sealed tight and store in a cool dry pantry.</li>
                  <li>Natural sediment or darker color with age is proof of pure sun-fermentation.</li>
                </ul>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-4">
                <h3 className="font-serif-heading text-xl font-bold text-[#2B2118]">
                  Packaging & Delivery Details
                </h3>
                <p className="leading-relaxed">
                  Every glass jar is individually cushioned in biodegradable honeycomb wrap, enclosed in sturdy corrugated outer boxes to ensure zero leakage and zero breakage during transit.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#EADCC9]">
                    <span className="font-bold text-xs text-[#8B1E1E] block mb-1">Standard Delivery</span>
                    <p className="text-xs text-[#6B5E51]">2 to 4 business days to metro cities across India; 4 to 6 days to rest of India.</p>
                  </div>
                  <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#EADCC9]">
                    <span className="font-bold text-xs text-[#8B1E1E] block mb-1">Free Delivery Eligibility</span>
                    <p className="text-xs text-[#6B5E51]">Free shipping on all orders totaling ₹499 or more. Standard flat ₹49 fee on smaller orders.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* "Pairs Well With" Section */}
        <div className="bg-[#FAF6F0] rounded-3xl border border-[#EADCC9] p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#8B1E1E] text-white flex items-center justify-center">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-heading text-2xl font-bold text-[#2B2118]">
                Pairs Well With
              </h3>
              <p className="text-xs text-[#6B5E51]">Classic Indian dining combinations that bring out the true magic</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.pairings.map((pair, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-2xl border border-[#EADCC9] shadow-xs space-y-1"
              >
                <div className="flex items-center gap-2 text-[#8B1E1E] font-bold text-sm font-serif-heading">
                  <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                  <span>{pair.name}</span>
                </div>
                <p className="text-xs text-[#6B5E51] leading-relaxed pt-1">{pair.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* "You May Also Like" Recommendation Section */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#8B1E1E] uppercase tracking-wider">
                Curated Recommendations
              </span>
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-extrabold text-[#2B2118]">
                You May Also Like
              </h3>
            </div>
            <button
              onClick={() => navigate('/shop')}
              className="text-xs sm:text-sm font-bold text-[#8B1E1E] hover:underline"
            >
              View Full Catalog
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} onQuickView={onQuickView} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
