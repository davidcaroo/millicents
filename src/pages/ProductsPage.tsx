import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ProductGrid } from '../components/ProductGrid';
import type { Product } from '../types';

const PRODUCTS: Product[] = [
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
    image: 'https://images.unsplash.com/photo-1590156206657-aec9b2c46071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    category: 'face'
  },
  {
    id: '3',
    name: 'Eye Shadow Palette',
    description: 'Professional-grade eyeshadow palette',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1583241749708-a482c1aeea1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    category: 'eyes'
  },
  {
    id: '4',
    name: 'Mascara Volume Plus',
    description: 'Volumizing and lengthening mascara',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    category: 'eyes'
  },
  {
    id: '5',
    name: 'Skin Serum',
    description: 'Hydrating and rejuvenating serum',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4a8ae66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    category: 'skincare'
  },
  {
    id: '6',
    name: 'Facial Moisturizer',
    description: 'Daily hydrating moisturizer',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1556229164-5f679977d53d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    category: 'skincare'
  }
];

export const ProductsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-serif text-primary text-center mb-8">
            {t('products.title')}
          </h1>
          <div className="mb-8">
            <input
              type="text"
              placeholder={t('products.search')}
              className="w-full max-w-md mx-auto block px-4 py-2 rounded-full border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <ProductGrid products={PRODUCTS} onAddToCart={() => {}} />
        </motion.div>
      </div>
    </div>
  );
};