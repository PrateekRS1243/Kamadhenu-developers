import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'motion/react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gray-900 text-white relative" style={{ backgroundImage: 'none' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Kamadhenu Developers" className="h-16 w-auto" />
              <div>
                <h3 className="text-lg font-bold">{t('companyName')}</h3>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t('footerAbout')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-bold">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('properties')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('properties')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('aboutUs')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('contact')}
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Properties */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
          <h4 className="text-lg font-bold">{t('ourProperties')}</h4>
            <ul className="space-y-3">
              <li>
             <span className="text-gray-400">{t('sikkeriTitle')}</span>
              </li>
              <li>
             <span className="text-gray-400">{t('vivekanandTitle')}</span>
              </li>
              <li>
             <span className="text-gray-400">{t('indiTitle')}</span>
              </li>
              <li>
             <span className="text-gray-400">{t('simikeriTitle')}</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-bold">{t('contactInfo')}</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <div>
                  <a href="tel:9448229175" className="text-gray-400 hover:text-white transition-colors block">
                    +91 9448229175
                  </a>
                  <a href="tel:8088841243" className="text-gray-400 hover:text-white transition-colors block">
                    +91 8088841243
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <a href="mailto:info@kamadhenudevelopers.com" className="text-gray-400 hover:text-white transition-colors">
                  info@kamadhenudevelopers.com
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                <div className="text-gray-400">
                  <p>Sector 32, Plot 46E</p>
                  <p>Shivappayyana Math Building</p>
                  <p>Navanagar, Bagalkot - 587103</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mb-6">
            <p className="text-gray-400 text-sm">
              {t('copyright')}
            </p>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <span>{t('reraApproved')}</span>
              <span>•</span>
              <span>{t('experience')}</span>
            </div>
          </div>

          {/* Designer Credit */}
          <div className="text-center pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-xs">
              Designed by <span className="text-orange-500">Hrishikesh</span> • <a href="tel:9353030118" className="text-gray-400 hover:text-orange-500 transition-colors">9353030118</a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        onClick={() => scrollToSection('home')}
        className="fixed bottom-20 left-6 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition-colors duration-300 z-40"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;