import React from 'react';
import { useTranslation } from 'react-i18next';
import { Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'promoVideos.video1.title',
    description: 'promoVideos.video1.description',
    thumbnail: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'promoVideos.video2.title',
    description: 'promoVideos.video2.description',
    thumbnail: 'https://images.unsplash.com/photo-1596704017367-c06d8f4e6e8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export const PromoVideos = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-primary text-center mb-12">
          {t('promoVideos.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                src={video.thumbnail}
                alt={t(video.title)}
                className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-16 h-16 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-medium text-white mb-2">
                  {t(video.title)}
                </h3>
                <p className="text-white text-sm">{t(video.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};