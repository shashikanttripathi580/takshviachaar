export type SpiceLevel = 'Mild' | 'Medium' | 'Spicy' | 'Extra Spicy';

export type ProductCategory = 'mango' | 'lemon' | 'chilli' | 'mixed' | 'special' | 'combo';

export interface ProductWeightOption {
  weight: string; // e.g. '250g', '500g', '1kg'
  price: number;
  originalPrice?: number;
  inStock: boolean;
}

export interface FoodPairing {
  name: string;
  desc: string;
}

export interface NutritionInfo {
  servingSize: string;
  calories: string;
  protein: string;
  carbs: string;
  fat: string;
  sodium: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  hindiName: string;
  shortDescription: string;
  description: string;
  category: ProductCategory;
  spiceLevel: SpiceLevel;
  rating: number;
  reviewsCount: number;
  price: number; // base price for default weight
  originalPrice?: number;
  defaultWeight: string;
  weights: ProductWeightOption[];
  images: string[];
  badge?: string;
  ingredients: string[];
  nutrition: NutritionInfo;
  storage: string;
  shelfLife: string;
  oilType: string;
  pairings: FoodPairing[];
  isBestseller?: boolean;
}

export interface CartItem {
  productId: string;
  product: Product;
  weight: string;
  price: number;
  originalPrice?: number;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  verifiedPurchase: boolean;
  productName: string;
  highlight?: string;
}

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  hindiName: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface CheckoutFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  pincode: string;
  deliveryNotes?: string;
  paymentMethod: 'upi' | 'card' | 'cod';
  upiId?: string;
  cardNumber?: string;
  cardExpiry?: string;
  cardCvv?: string;
}

export interface Order {
  orderId: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  customer: CheckoutFormData;
  estimatedDelivery: string;
  status: 'confirmed' | 'processing' | 'shipped' | 'delivered';
}

export type ToastType = 'success' | 'info' | 'warning' | 'error';

export interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
}
