import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'motion/react';

const WhatsAppButton: React.FC = () => {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    const phoneNumber = '918884229175'; // Remove + and spaces
    const message = encodeURIComponent('Hello, I am interested in your properties. Please provide more information.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {t('whatsappText')}
      </span>
    </motion.button>
  );
};

export default WhatsAppButton;