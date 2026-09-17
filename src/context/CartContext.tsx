import React, { createContext, useContext, useState, useEffect } from 'react';
import type { CartItem, Product } from '../types';
import { useToast } from './ToastContext';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, weight?: string, quantity?: number) => void;
  removeFromCart: (productId: string, weight: string) => void;
  updateQuantity: (productId: string, weight: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  shippingFee: number;
  freeShippingThreshold: number;
  amountNeededForFreeShipping: number;
  appliedCoupon: string | null;
  discount: number;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  total: number;
  totalItemsCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('takshvi_achaar_cart') || localStorage.getItem('achaar_ghar_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(() => {
    try {
      return localStorage.getItem('takshvi_achaar_coupon') || localStorage.getItem('achaar_ghar_coupon') || null;
    } catch {
      return null;
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const { showToast } = useToast();

  const FREE_SHIPPING_THRESHOLD = 499;

  useEffect(() => {
    try {
      localStorage.setItem('takshvi_achaar_cart', JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [items]);

  useEffect(() => {
    try {
      if (appliedCoupon) {
        localStorage.setItem('takshvi_achaar_coupon', appliedCoupon);
      } else {
        localStorage.removeItem('takshvi_achaar_coupon');
      }
    } catch (e) {
      console.error('Failed to save coupon to localStorage', e);
    }
  }, [appliedCoupon]);


  const addToCart = (product: Product, selectedWeight?: string, quantity = 1) => {
    const weightToUse = selectedWeight || product.defaultWeight;
    const weightObj = product.weights.find((w) => w.weight === weightToUse);
    const unitPrice = weightObj ? weightObj.price : product.price;
    const origPrice = weightObj ? weightObj.originalPrice : product.originalPrice;

    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.productId === product.id && item.weight === weightToUse
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      } else {
        return [
          ...prevItems,
          {
            productId: product.id,
            product,
            weight: weightToUse,
            price: unitPrice,
            originalPrice: origPrice,
            quantity,
          },
        ];
      }
    });

    showToast(
      'Added to Cart!',
      `${product.name} (${weightToUse}) × ${quantity} added.`,
      'success'
    );
  };

  const removeFromCart = (productId: string, weight: string) => {
    const itemToRemove = items.find(
      (item) => item.productId === productId && item.weight === weight
    );
    setItems((prev) =>
      prev.filter((item) => !(item.productId === productId && item.weight === weight))
    );

    if (itemToRemove) {
      showToast('Item Removed', `${itemToRemove.product.name} removed from cart.`, 'info');
    }
  };

  const updateQuantity = (productId: string, weight: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, weight);
      return;
    }

    setItems((prev) =>
      prev.map((item) => {
        if (item.productId === productId && item.weight === weight) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setItems([]);
    setAppliedCoupon(null);
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const shippingFee = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 49;
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  let discount = 0;
  if (appliedCoupon === 'SWAD10') {
    discount = Math.round(subtotal * 0.1); // 10% off
  } else if (appliedCoupon === 'DESI50') {
    discount = Math.min(50, subtotal);
  }

  const total = Math.max(0, subtotal - discount + shippingFee);
  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const applyCoupon = (code: string): boolean => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'SWAD10') {
      setAppliedCoupon('SWAD10');
      showToast('Coupon Applied! 🎉', '10% discount has been applied to your order.', 'success');
      return true;
    } else if (cleanCode === 'DESI50') {
      setAppliedCoupon('DESI50');
      showToast('Coupon Applied! 🎉', 'Flat ₹50 discount applied.', 'success');
      return true;
    } else {
      showToast('Invalid Coupon', 'Please enter a valid coupon code like SWAD10.', 'error');
      return false;
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon Removed', 'Coupon code has been removed.', 'info');
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        shippingFee,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        amountNeededForFreeShipping,
        appliedCoupon,
        discount,
        applyCoupon,
        removeCoupon,
        total,
        totalItemsCount,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
