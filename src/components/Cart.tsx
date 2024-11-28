import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Trash2 } from 'lucide-react';
import type { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemoveItem }) => {
  const { t } = useTranslation();
  
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <h2 className="text-xl sm:text-2xl font-serif text-primary mb-6">{t('cart.title')}</h2>
      {items.length === 0 ? (
        <p className="text-center text-secondary">{t('cart.empty')}</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                  <img src={item.image} alt={item.name} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded" />
                  <div className="ml-4">
                    <h3 className="text-base sm:text-lg font-medium text-primary">{item.name}</h3>
                    <p className="text-secondary">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto space-x-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 sm:w-20 p-1 border rounded text-center"
                  />
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            <p className="text-xl font-bold text-primary text-right">
              {t('cart.total')}: ${total.toFixed(2)}
            </p>
            <div className="flex justify-end">
              <button className="bg-primary text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-secondary transition-colors text-sm sm:text-base">
                {t('cart.checkout')}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};