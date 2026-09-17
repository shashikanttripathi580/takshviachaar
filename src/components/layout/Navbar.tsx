import React, { useState, useEffect } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { Search, ShoppingBag, Heart, Menu, X, Flame } from 'lucide-react';

interface NavbarProps {
  onOpenWishlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWishlist }) => {
  const { currentPath, navigate, searchQuery, setSearchQuery } = useNavigation();
  const { totalItemsCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/shop');
      setIsSearchOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Shop All Pickles', path: '/shop' },
    { label: 'Combos & Gifts', path: '/shop?category=combo' },
    { label: 'Our Story', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-md border-b border-[#EADCC9]'
          : 'bg-[#FDFBF7] border-b border-[#EADCC9]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#2B2118] hover:text-[#8B1E1E] hover:bg-[#FAF6F0] focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => navigate('/')}>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#8B1E1E] flex items-center justify-center text-white shadow-md border border-[#D97706]/40 shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.7">
                {/* Traditional Indian Barni / Martaban Motif */}
                <path d="M9 3h6v2H9z" fill="#F59E0B" stroke="#F59E0B" />
                <path d="M7 6h10c1 0 2 2 2 5v7c0 2-2 3-7 3s-7-1-7-3v-7c0-3 1-5 2-5z" stroke="#FAF6F0" fill="#FAF6F0" fillOpacity="0.1" />
                <path d="M7 6h10c0 0 1 2 1 4H6c0-2 1-4 1-4z" fill="#D97706" />
                <circle cx="12" cy="14" r="2" fill="#F59E0B" />
              </svg>
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#8B1E1E]">
                  Takshvi Achaar
                </span>
                <span className="text-[11px] font-medium text-[#D97706] tracking-wider uppercase hidden sm:inline">
                  तक्ष्वी अचार
                </span>

              </div>
              <p className="text-[11px] sm:text-xs text-[#6B5E51] italic font-medium -mt-1 tracking-wide">
                Har Bite Mein Ghar Ka Swad
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => navigate(link.path)}
                className={`text-sm font-semibold tracking-wide transition-colors relative py-1 cursor-pointer ${
                  isActive(link.path)
                    ? 'text-[#8B1E1E]'
                    : 'text-[#2B2118] hover:text-[#8B1E1E]'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B1E1E] rounded-full animate-fade-in" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Utilities (Search, Wishlist, Cart) */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Desktop / Expandable Search */}
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search pickles, mango, garlic..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-48 sm:w-64 pl-9 pr-8 py-1.5 text-xs sm:text-sm bg-white border border-[#D97706] rounded-full focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 text-[#2B2118]"
                  />
                  <Search className="w-4 h-4 text-[#8B1E1E] absolute left-3 pointer-events-none" />
                  <button
                    type="button"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="absolute right-2.5 text-stone-400 hover:text-stone-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 rounded-full text-[#2B2118] hover:text-[#8B1E1E] hover:bg-[#FAF6F0] transition-colors"
                  aria-label="Search pickles"
                  title="Search catalog"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="p-2 rounded-full text-[#2B2118] hover:text-[#8B1E1E] hover:bg-[#FAF6F0] transition-colors relative"
              aria-label="View Wishlist"
              title="My Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D97706] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-fade-in shadow">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-[#8B1E1E] hover:bg-[#731818] text-white px-3.5 py-2 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              aria-label="View Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-amber-200" />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-400 text-[#8B1E1E] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#8B1E1E]">
                    {totalItemsCount}
                  </span>
                )}
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide hidden sm:inline">
                Cart
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7] border-b border-[#EADCC9] px-4 pt-3 pb-6 space-y-4 animate-fade-in shadow-xl">
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search pickles, mango, garlic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-[#EADCC9] rounded-xl focus:outline-none focus:border-[#8B1E1E]"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
          </form>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  navigate(link.path);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-[#8B1E1E]/10 text-[#8B1E1E] font-semibold'
                    : 'text-[#2B2118] hover:bg-[#FAF6F0]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#EADCC9] flex items-center justify-between text-xs text-[#6B5E51]">
            <span className="flex items-center gap-1.5 font-medium">
              <Flame className="w-4 h-4 text-[#D97706]" /> 100% Homemade Taste
            </span>
            <button
              onClick={() => {
                navigate('/contact');
                setIsMobileMenuOpen(false);
              }}
              className="text-[#8B1E1E] font-semibold underline"
            >
              Need Help?
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
