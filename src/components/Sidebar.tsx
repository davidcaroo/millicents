import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white transform transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-serif text-primary">Bella Beauty</h2>
            <button onClick={onClose} className="text-primary">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="text-primary hover:text-secondary block" onClick={onClose}>
                {t('navigation.home')}
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-primary hover:text-secondary block" onClick={onClose}>
                {t('navigation.products')}
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-primary hover:text-secondary block" onClick={onClose}>
                {t('navigation.about')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-primary hover:text-secondary block" onClick={onClose}>
                {t('navigation.contact')}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};