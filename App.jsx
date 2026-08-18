'use client';

import { CartProvider } from './CartContext';
import Header from './Header';
import HeroSection from './HeroSection';
import ProductSection from './ProductSection';
import CartAndFooter from './CartAndFooter';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-stone-950">
        <Header />
        <HeroSection />
        <ProductSection />
        {/* يحتوي على درج السلة المنزلق (يظهر تلقائياً عند فتحه من الهيدر) والفوتر */}
        <CartAndFooter />
      </div>
    </CartProvider>
  );
}
