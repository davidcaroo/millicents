import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart }) => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="relative h-48 sm:h-56 lg:h-64">
              <img
                src={product.image}
                alt={product.name}
                className="absolute w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">{product.name}</h3>
              <p className="text-secondary text-sm sm:text-base mb-4 flex-grow">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-primary">${product.price}</span>
                <button
                  onClick={() => onAddToCart(product)}
                  className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors text-sm sm:text-base"
                >
                  {t('addToCart')}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};