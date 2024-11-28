import React from 'react';
import { useTranslation } from 'react-i18next';

//Videos Import

//import Video from '../media/videos/video1.mp4';
import Video2 from '../media/videos/presentacion.mp4';

const videos = [
  {
    id: 2,
    title: 'promoVideos.video2.title',
    description: 'promoVideos.video2.description',
    src: Video2
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
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {videos.map((video) => (

            
            <div
              key={video.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >

              <video className="h-full w-full rounded-lg" controls autoPlay>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
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