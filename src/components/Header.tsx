import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShoppingBag, MessageCircle, Globe, Menu } from 'lucide-react';
import type { CartItem } from '../types';

interface HeaderProps {
  onMenuClick: () => void;
  cartItems: CartItem[];
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, cartItems }) => {
  const { t, i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const languages = ['en', 'es', 'fr'];
    const currentIndex = languages.indexOf(i18n.language);
    const nextIndex = (currentIndex + 1) % languages.length;
    i18n.changeLanguage(languages[nextIndex]);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-background shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={onMenuClick} className="mr-4 sm:hidden text-primary hover:text-secondary transition-colors">
              <Menu className="w-6 h-6" />
            </button>
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl font-serif text-primary">Millicent's</span>
            </Link>
          </div>
          
          <nav className="hidden sm:flex items-center space-x-8">
            <Link to="/" className="text-primary hover:text-secondary transition-colors">{t('navigation.home')}</Link>
            <Link to="/products" className="text-primary hover:text-secondary transition-colors">{t('navigation.products')}</Link>
            <Link to="/about" className="text-primary hover:text-secondary transition-colors">{t('navigation.about')}</Link>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button 
              onClick={toggleLanguage} 
              className="p-2 flex items-center space-x-1 text-primary hover:text-secondary transition-colors"
              aria-label="Change language"
            >
              <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm font-medium hidden sm:inline">
                {i18n.language.toUpperCase()}
              </span>
            </button>
            <Link 
              to="/cart" 
              className="p-2 relative text-primary hover:text-secondary transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <button 
              className="p-2 text-primary hover:text-secondary transition-colors"
              aria-label="Chat with us"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};