import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Heart, Shield, Leaf } from 'lucide-react';

//images
import Boutique from '../media/images/boutique.jpg'
import Boutique2 from '../media/images/boutique2.jpg'

export const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-primary mb-6">
              {t('about.title')}
            </h1>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-serif text-primary mb-2">{t('about.values.passion.title')}</h3>
              <p className="text-secondary">{t('about.values.passion.description')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-serif text-primary mb-2">{t('about.values.quality.title')}</h3>
              <p className="text-secondary">{t('about.values.quality.description')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-serif text-primary mb-2">{t('about.values.sustainability.title')}</h3>
              <p className="text-secondary">{t('about.values.sustainability.description')}</p>
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="Our Story"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-1/2 md:p-8">
                <h2 className="text-2xl font-serif text-primary mb-4">{t('about.story.title')}</h2>
                <p className="text-secondary mb-4">{t('about.story.description')}</p>
                <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors">
                  {t('about.story.cta')}
                </button>
              </div>
            </div>
          </div>

          {/* gallery photos store */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={Boutique}
              alt="boutique 1"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <img
              src={Boutique2}
              alt="boutique 2"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />  
          </div>
        </motion.div>
      </div>
    </div>
  );
};