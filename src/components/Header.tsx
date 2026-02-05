import React, { useState } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'kn' : 'en');
  };

  const scrollToSection = (id: string) => {
    // Close menu first
    setIsMenuOpen(false);
    
    // Delay scroll to allow menu animation to complete
    setTimeout(() => {
      const element = document.getElementById(id);
      
      if (element) {
        // Get the header height dynamically
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 100;
        
        // Get element position and add extra margin for better visibility
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight + 10; // Scroll a bit less
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 250);
  };

  const phoneNumbers = ['+918884229175', '+918088841243'];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
          >
            <img src="/logo.png" alt="Kamadhenu Developers" className="h-16 w-auto" />
            <div>
              <h1 className="text-lg font-bold text-gray-800">{t('companyName')}</h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition-colors">
              {t('home')}
            </button>
            <button onClick={() => scrollToSection('properties')} className="text-gray-700 hover:text-orange-600 transition-colors">
              {t('properties')}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors">
              {t('aboutUs')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition-colors">
              {t('contact')}
            </button>
          </nav>

          {/* Contact & Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {phoneNumbers.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone}`}
                  className="flex items-center space-x-1 text-sm text-gray-600 hover:text-orange-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{phone}</span>
                </a>
              ))}
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-2 bg-orange-100 hover:bg-orange-200 text-orange-800 rounded-lg transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700 hover:text-orange-600 transition-colors">
                {t('home')}
              </button>
              <button onClick={() => scrollToSection('properties')} className="block w-full text-left py-2 text-gray-700 hover:text-orange-600 transition-colors">
                {t('properties')}
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-orange-600 transition-colors">
                {t('aboutUs')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-orange-600 transition-colors">
                {t('contact')}
              </button>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="space-y-2">
                  {phoneNumbers.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone}`}
                      className="flex items-center space-x-2 text-sm text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{phone}</span>
                    </a>
                  ))}
                </div>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 mt-4 px-3 py-2 bg-orange-100 hover:bg-orange-200 text-orange-800 rounded-lg transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{language === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;