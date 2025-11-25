import React from 'react';
import { MapPin, Ruler, Phone } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Property {
  id: string;
  titleKey: string;
  locationKey: string;
  landmarkKey?: string;
  sizesKey: string;
  image: string;
  highlights: string[];
}

const Properties: React.FC = () => {
  const { t } = useLanguage();

  const properties: Property[] = [
    {
      id: 'sikkeri',
      titleKey: 'sikkeriTitle',
      locationKey: 'sikkeriLocation',
      sizesKey: 'sikkeriSizes',
      image: '/1_.jpg',
      highlights: ['Prime Location', 'Near Teacher\'s Layout', 'ODD Sizes Available']
    },
    {
      id: 'vivekanand',
      titleKey: 'vivekanandTitle',
      locationKey: 'vivekanandLocation',
      landmarkKey: 'vivekanandLandmark',
      sizesKey: 'vivekanandSizes',
      image: '/4.jpg',
      highlights: ['Near Railway Station', 'Multiple Sizes', 'Bus Stand Proximity']
    },
    {
      id: 'indi',
      titleKey: 'indiTitle',
      locationKey: 'indiLocation',
      landmarkKey: 'indiLandmark',
      sizesKey: 'indiSizes',
      image: '/3.jpg',
      highlights: ['Railway Station 300m', 'Strategic Location', 'ODD Sizes']
    },
    {
      id: 'simikeri',
      titleKey: 'simikeriTitle',
      locationKey: 'simikeriLocation',
      landmarkKey: 'simikeriLandmark',
      sizesKey: 'simikeriSizes',
      image: '/5.jpg',
      highlights: ['Near School', 'National Highway Access', 'ODD Sizes']
    }
  ];

  const handleRegisterNow = (propertyTitle: string) => {
    const phoneNumber = '919448229175';
    const message = encodeURIComponent(`Hello, I am interested in ${propertyTitle}. Please provide more details.`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:9448229175';
  };

  return (
    <section id="properties" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            {t('propertiesTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('propertiesSubtitle')}
          </p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={property.image}
                  alt={t(property.titleKey)}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Available Now
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(property.titleKey)}
                </h3>

                {/* Landmark */}
                {property.landmarkKey && (
                  <div className="flex items-start space-x-2 mb-3">
                    <MapPin className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">
                      <strong>Landmark:</strong> {t(property.landmarkKey)}
                    </span>
                  </div>
                )}

                {/* Location */}
                <div className="flex items-start space-x-2 mb-3">
                  <MapPin className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    {t(property.locationKey)}
                  </span>
                </div>

                {/* Plot Sizes */}
                <div className="flex items-start space-x-2 mb-4">
                  <Ruler className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-sm text-gray-600">
                      <strong>{t('plotSizes')}:</strong> {t(property.sizesKey)}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {property.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleRegisterNow(t(property.titleKey))}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                  >
                    {t('registerNow')}
                  </button>
                  <button
                    onClick={handleCall}
                    className="flex items-center justify-center space-x-2 bg-green-100 text-green-800 px-4 py-3 rounded-lg font-medium hover:bg-green-200 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Invest in Your Future?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contact us today for site visits and detailed information about our properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9448229175"
                className="inline-flex items-center justify-center space-x-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call: 9448229175</span>
              </a>
              <a
                href="tel:8088841243"
                className="inline-flex items-center justify-center space-x-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call: 8088841243</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Properties;