import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { Testimonials } from './components/Testimonials';
import { PromoVideos } from './components/PromoVideos';
import { FloatingButtons } from './components/FloatingButtons';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import type { Product, CartItem } from './types';
import './i18n';

// Import Images
import Producto1 from './media/images/Premiun-foundation.webp';
import Producto2 from './media/images/Skin-serum.webp';

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Luxury Lipstick',
    description: 'Long-lasting, moisturizing lipstick',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    category: 'lips'
  },
  {
    id: '2',
    name: 'Premium Foundation',
    description: 'Lightweight, full-coverage foundation',
    price: 39.99,
    image: Producto1,
    category: 'face'
  },
  {
    id: '3',
    name: 'Eye Shadow Palette',
    description: 'Professional-grade eyeshadow palette',
    price: 49.99,
    image: Producto2,
    category: 'eyes'
  }
];

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col">
        <Header onMenuClick={() => setIsSidebarOpen(true)} cartItems={cartItems} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ProductGrid
                  products={SAMPLE_PRODUCTS}
                  onAddToCart={handleAddToCart}
                />
                <PromoVideos />
                <Testimonials />
              </>
            } />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={
              <Cart
                items={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
              />
            } />
          </Routes>
        </main>

        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;