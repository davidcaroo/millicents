import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navigation: {
        home: 'Home',
        products: 'Products',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        title: 'Discover Your Natural Beauty',
        subtitle: 'Premium cosmetics for the modern woman',
        cta: 'Shop Now'
      },
      cart: {
        title: 'Shopping Cart',
        empty: 'Your cart is empty',
        total: 'Total',
        checkout: 'Proceed to Checkout',
        addToCart: 'Add to Cart'
      },
      chat: {
        title: 'Chat with us',
        welcome: 'Welcome to Millicent\'s! How can we help you today?',
        help: 'Please type your message, and our beauty expert will assist you shortly.',
        placeholder: 'Type your message...'
      },
      testimonials: {
        title: 'What Our Customers Say',
        comment1: 'The products are amazing! My skin has never looked better.',
        comment2: 'Excellent customer service and fast shipping. Highly recommended!',
        comment3: 'Love the natural ingredients and the results are fantastic.'
      },
      promoVideos: {
        title: 'Discover Our Products',
        video1: {
          title: 'sd',
          description: 'Discover our new summer essentials'
        },
        video2: {
          title: 'Skincare Routine',
          description: 'Learn how to achieve glowing skin'
        }
      },
      footer: {
        quickLinks: 'Quick Links',
        followUs: 'Follow Us',
        rights: 'All rights reserved.',
        address: '123 Beauty Street, Fashion City',
        phone: '+1 234 567 890',
        email: 'contact@millicents.com'
      },
      products: {
        title: 'Our Products',
        search: 'Search products...',
        categories: {
          all: 'All Products',
          skincare: 'Skincare',
          makeup: 'Makeup',
          fragrance: 'Fragrance'
        }
      },
      about: {
        title: 'About Millicent\'s',
        subtitle: 'Empowering beauty through quality and innovation',
        values: {
          passion: {
            title: 'Passion for Beauty',
            description: 'We are dedicated to helping you discover and enhance your natural beauty.'
          },
          quality: {
            title: 'Premium Quality',
            description: 'We use only the finest ingredients to create exceptional products.'
          },
          sustainability: {
            title: 'Eco-Friendly',
            description: 'Committed to sustainable practices and environmentally conscious products.'
          }
        },
        story: {
          title: 'Our Story',
          description: 'Founded in 2020, Millicent\'s has grown from a small local brand to a beloved beauty destination. Our commitment to quality and customer satisfaction remains at the heart of everything we do.',
          cta: 'Learn More'
        }
      }
    }
  },
  es: {
    translation: {
      navigation: {
        home: 'Inicio',
        products: 'Productos',
        about: 'Nosotros',
        contact: 'Contacto'
      },
      hero: {
        title: 'Descubre Tu Belleza Natural',
        subtitle: 'Cosméticos premium para la mujer moderna',
        cta: 'Comprar Ahora'
      },
      cart: {
        title: 'Carrito de Compras',
        empty: 'Tu carrito está vacío',
        total: 'Total',
        checkout: 'Proceder al Pago',
        addToCart: 'Añadir al Carrito'
      },
      chat: {
        title: 'Chatea con nosotros',
        welcome: '¡Bienvenida a Millicent\'s! ¿Cómo podemos ayudarte hoy?',
        help: 'Por favor, escribe tu mensaje y nuestra experta en belleza te atenderá en breve.',
        placeholder: 'Escribe tu mensaje...'
      },
      testimonials: {
        title: 'Lo Que Dicen Nuestros Clientes',
        comment1: '¡Los productos son increíbles! Mi piel nunca se había visto mejor.',
        comment2: 'Excelente servicio al cliente y envío rápido. ¡Altamente recomendado!',
        comment3: 'Me encantan los ingredientes naturales y los resultados son fantásticos.'
      },
      promoVideos: {
        title: 'Descubre Nuestros Productos',
        video1: {
          title: 'Colección Verano 2024',
          description: 'Descubre nuestros nuevos esenciales de verano'
        },
        video2: {
          title: 'Rutina de Cuidado de la Piel',
          description: 'Aprende a conseguir una piel radiante'
        }
      },
      footer: {
        quickLinks: 'Enlaces Rápidos',
        followUs: 'Síguenos',
        rights: 'Todos los derechos reservados.',
        address: '123 Calle Belleza, Ciudad de la Moda',
        phone: '+1 234 567 890',
        email: 'contacto@millicents.com'
      },
      products: {
        title: 'Nuestros Productos',
        search: 'Buscar productos...',
        categories: {
          all: 'Todos los Productos',
          skincare: 'Cuidado de la Piel',
          makeup: 'Maquillaje',
          fragrance: 'Fragancias'
        }
      },
      about: {
        title: 'Sobre Millicent\'s',
        subtitle: 'Potenciando la belleza a través de la calidad y la innovación',
        values: {
          passion: {
            title: 'Pasión por la Belleza',
            description: 'Nos dedicamos a ayudarte a descubrir y realzar tu belleza natural.'
          },
          quality: {
            title: 'Calidad Premium',
            description: 'Utilizamos solo los mejores ingredientes para crear productos excepcionales.'
          },
          sustainability: {
            title: 'Eco-Amigable',
            description: 'Comprometidos con prácticas sostenibles y productos respetuosos con el medio ambiente.'
          }
        },
        story: {
          title: 'Nuestra Historia',
          description: 'Fundada en 2020, Millicent\'s ha crecido de una pequeña marca local a un destino de belleza querido. Nuestro compromiso con la calidad y la satisfacción del cliente sigue siendo el corazón de todo lo que hacemos.',
          cta: 'Saber Más'
        }
      }
    }
  },
  fr: {
    translation: {
      navigation: {
        home: 'Accueil',
        products: 'Produits',
        about: 'À Propos',
        contact: 'Contact'
      },
      hero: {
        title: 'Découvrez Votre Beauté Naturelle',
        subtitle: 'Cosmétiques premium pour la femme moderne',
        cta: 'Acheter Maintenant'
      },
      cart: {
        title: 'Panier',
        empty: 'Votre panier est vide',
        total: 'Total',
        checkout: 'Procéder au Paiement',
        addToCart: 'Ajouter au Panier'
      },
      chat: {
        title: 'Chattez avec nous',
        welcome: 'Bienvenue chez Millicent\'s ! Comment pouvons-nous vous aider aujourd\'hui ?',
        help: 'Veuillez écrire votre message, notre experte en beauté vous assistera sous peu.',
        placeholder: 'Écrivez votre message...'
      },
      testimonials: {
        title: 'Ce Que Disent Nos Clients',
        comment1: 'Les produits sont incroyables ! Ma peau n\'a jamais été aussi belle.',
        comment2: 'Excellent service client et livraison rapide. Fortement recommandé !',
        comment3: 'J\'adore les ingrédients naturels et les résultats sont fantastiques.'
      },
      promoVideos: {
        title: 'Découvrez Nos Produits',
        video1: {
          title: 'Collection Été 2024',
          description: 'Découvrez nos nouveaux essentiels d\'été'
        },
        video2: {
          title: 'Routine de Soin',
          description: 'Apprenez à obtenir une peau éclatante'
        }
      },
      footer: {
        quickLinks: 'Liens Rapides',
        followUs: 'Suivez-nous',
        rights: 'Tous droits réservés.',
        address: '123 Rue de la Beauté, Ville de la Mode',
        phone: '+1 234 567 890',
        email: 'contact@millicents.com'
      },
      products: {
        title: 'Nos Produits',
        search: 'Rechercher des produits...',
        categories: {
          all: 'Tous les Produits',
          skincare: 'Soins de la Peau',
          makeup: 'Maquillage',
          fragrance: 'Parfums'
        }
      },
      about: {
        title: 'À Propos de Millicent\'s',
        subtitle: 'Valoriser la beauté par la qualité et l\'innovation',
        values: {
          passion: {
            title: 'Passion pour la Beauté',
            description: 'Nous nous consacrons à vous aider à découvrir et à mettre en valeur votre beauté naturelle.'
          },
          quality: {
            title: 'Qualité Premium',
            description: 'Nous utilisons uniquement les meilleurs ingrédients pour créer des produits exceptionnels.'
          },
          sustainability: {
            title: 'Éco-Responsable',
            description: 'Engagés dans des pratiques durables et des produits respectueux de l\'environnement.'
          }
        },
        story: {
          title: 'Notre Histoire',
          description: 'Fondée en 2020, Millicent\'s est passée d\'une petite marque locale à une destination beauté appréciée. Notre engagement envers la qualité et la satisfaction client reste au cœur de tout ce que nous faisons.',
          cta: 'En Savoir Plus'
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;