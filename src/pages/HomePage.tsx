import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TrustSection } from '../components/home/TrustSection';
import { BestsellersSection } from '../components/home/BestsellersSection';
import { CategoriesSection } from '../components/home/CategoriesSection';
import { ComboPromoSection } from '../components/home/ComboPromoSection';
import { StorySection } from '../components/home/StorySection';
import { ReviewsSection } from '../components/home/ReviewsSection';
import { SocialGrid } from '../components/home/SocialGrid';
import { NewsletterSection } from '../components/home/NewsletterSection';
import { PRODUCTS } from '../data/products';
import type { Product } from '../types';


interface HomePageProps {
  onQuickView: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onQuickView }) => {
  return (
    <div className="space-y-0 animate-fade-in">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Section (Why Choose Takshvi Achaar?) */}

      <TrustSection />

      {/* 3. Bestsellers Section */}
      <BestsellersSection products={PRODUCTS} onQuickView={onQuickView} />

      {/* 4. Product Categories */}
      <CategoriesSection />

      {/* 5. Highlighted Combo Section */}
      <ComboPromoSection />

      {/* 6. Storytelling Section (From Our Kitchen To Yours) */}
      <StorySection />

      {/* 7. Customer Testimonials */}
      <ReviewsSection />

      {/* 8. Instagram Social Showcase */}
      <SocialGrid />

      {/* 9. Newsletter Email Capture */}
      <NewsletterSection />
    </div>
  );
};
