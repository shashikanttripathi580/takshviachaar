import React, { useState } from 'react';
import { ToastProvider } from './context/ToastContext';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';

import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/layout/CartDrawer';
import { WishlistDrawer } from './components/common/WishlistDrawer';
import { QuickViewModal } from './components/common/QuickViewModal';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { OrderSuccessPage } from './pages/OrderSuccessPage';

import type { Product } from './types';


const MainRouter: React.FC = () => {
  const { currentPath } = useNavigation();

  // Modal states
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Extract route
  const renderPage = () => {
    // Check product detail route: /product/:slug
    if (currentPath.startsWith('/product/')) {
      const slug = currentPath.replace('/product/', '').split('?')[0];
      return <ProductDetailPage slug={slug} onQuickView={setQuickViewProduct} />;
    }

    // Check query params if any
    const basePath = currentPath.split('?')[0];

    switch (basePath) {
      case '/':
        return <HomePage onQuickView={setQuickViewProduct} />;
      case '/shop':
        return <ShopPage onQuickView={setQuickViewProduct} />;
      case '/cart':
        return <CartPage />;
      case '/checkout':
        return <CheckoutPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      case '/order-success':
        return <OrderSuccessPage />;
      default:
        return <HomePage onQuickView={setQuickViewProduct} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#2B2118]">
      {/* Top Banner */}
      <AnnouncementBar />

      {/* Main Sticky Navbar */}
      <Navbar onOpenWishlist={() => setIsWishlistOpen(true)} />

      {/* Dynamic Page View */}
      <main className="flex-1">{renderPage()}</main>

      {/* Global Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer />

      {/* Slide-over Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};

export default function App() {
  return (
    <ToastProvider>
      <WishlistProvider>
        <CartProvider>
          <NavigationProvider>
            <MainRouter />
          </NavigationProvider>
        </CartProvider>
      </WishlistProvider>
    </ToastProvider>
  );
}
