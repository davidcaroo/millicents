import React, { useState } from 'react';
import { MessageCircle, MessageSquare, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const FloatingButtons = () => {
  const { t } = useTranslation();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 flex flex-col space-y-4">
        <button
          onClick={() => setIsChatOpen(true)}
          className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-secondary transition-colors"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {isChatOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl">
          <div className="p-4 bg-primary text-white rounded-t-lg flex justify-between items-center">
            <span>{t('chat.title')}</span>
            <button onClick={() => setIsChatOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 h-80 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm">{t('chat.welcome')}</p>
              </div>
              <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                <p className="text-sm">{t('chat.help')}</p>
              </div>
            </div>
          </div>
          <div className="p-4 border-t">
            <input
              type="text"
              placeholder={t('chat.placeholder')}
              className="w-full p-2 border rounded-lg"
              disabled
            />
          </div>
        </div>
      )}
    </>
  );
};