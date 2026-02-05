import React, { useState } from 'react';
import { Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'motion/react';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/918884229175?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('sendUsMessage')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder={t('placeholderName')}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder={t('placeholderPhone')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  placeholder={t('placeholderEmail')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                  placeholder={t('placeholderMessage')}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-4 rounded-lg font-medium hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>{t('sendMessage')}</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t('callUs')}</h4>
                    <div className="space-y-1">
                      <a href="tel:+918884229175" className="text-orange-600 hover:text-orange-700 transition-colors block">
                        +91 8884229175
                      </a>
                      <a href="tel:8088841243" className="text-orange-600 hover:text-orange-700 transition-colors block">
                        +91 8088841243
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t('whatsapp')}</h4>
                    <a 
                      href="https://wa.me/918884229175" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      {t('chatInstantly')}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t('visitUs')}</h4>
                    <p className="text-gray-600">Sector 32, Plot 46E</p>
                    <p className="text-gray-600">Shivappayyana Math Building</p>
                    <p className="text-gray-600">Navanagar, Bagalkot - 587103</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t('officeHours')}</h4>
                    <p className="text-gray-600">{t('mondaySaturday')}</p>
                    <p className="text-sm text-gray-500">10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">{t('needHelpTitle')}</h4>
              <p className="mb-6 opacity-90">
                {t('needHelpSubtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+918884229175"
                  className="flex items-center justify-center space-x-2 bg-white text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t('callNow')}</span>
                </a>
                <a
                  href="https://wa.me/918884229175"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('whatsapp')}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">{t('findUs')}</h3>
              <p className="text-gray-600">Sector 32, Plot 46E, Shivappayyana Math Building, Navanagar, Bagalkot</p>
            </div>
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4139.074254948887!2d75.65840922735748!3d16.155311880357594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc77923ec373e4f%3A0xdfce2bef4348d5b1!2sSector%2032%2C%20Nava%20Nagar%2C%20Bagalkote%2C%20Karnataka%20587103!5e0!3m2!1sen!2sin!4v1761651230062!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kamadhenu Developers Location - Sector 32, Navanagar, Bagalkot"
                className="rounded-b-2xl"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;