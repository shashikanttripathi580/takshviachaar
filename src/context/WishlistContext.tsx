import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';
import { PRODUCTS } from '../data/products';

interface WishlistContextType {
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('takshvi_achaar_wishlist') || localStorage.getItem('achaar_ghar_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const { showToast } = useToast();

  useEffect(() => {
    try {
      localStorage.setItem('takshvi_achaar_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error('Error saving wishlist to localStorage', e);
    }
  }, [wishlist]);


  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const toggleWishlist = (productId: string) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    const productName = product ? product.name : 'Item';

    setWishlist((prev) => {
      if (prev.includes(productId)) {
        showToast('Removed from Wishlist', `${productName} has been removed from your wishlist.`, 'info');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Added to Wishlist', `${productName} is now in your wishlist.`, 'success');
        return [...prev, productId];
      }
    });
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        wishlistCount: wishlist.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
