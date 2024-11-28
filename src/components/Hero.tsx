import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Portada from '../media/images/portada.jpg';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-[67vh] sm:min-h-[70vh] lg:min-h-[80vh] bg-background">
      <div className="absolute inset-0">
        <img
          //src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          src={Portada}
          alt="Beauty Products"
          className="w-full h-full object-cover opacity-50"
          //style={{ objectPosition: 'top center' }} // Muestra la parte superior
        />
      </div>
      <div className="relative pt-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg mx-auto sm:mx-0"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary text-center sm:text-left mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-base sm:text-lg text-secondary text-center sm:text-left mb-6 sm:mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="text-center sm:text-left">
              <button className="bg-primary text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-secondary transition-colors text-sm sm:text-base">
                {t('hero.cta')}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};