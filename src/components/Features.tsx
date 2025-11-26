import React from 'react';
import { 
  Award, 
  MapPin, 
  Layers, 
  FileText, 
  CreditCard, 
  Shield,
  Clock,
  Users
} from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'motion/react';

interface Feature {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  color: string;
}

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features: Feature[] = [
    {
      icon: <Award className="w-8 h-8" />,
      titleKey: 'experience',
      descriptionKey: 'experienceDesc',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      titleKey: 'primeLocations',
      descriptionKey: 'primeLocationsDesc',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      titleKey: 'flexibleSizes',
      descriptionKey: 'flexibleSizesDesc',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      titleKey: 'documentation',
      descriptionKey: 'documentationDesc',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      titleKey: 'paymentPlans',
      descriptionKey: 'paymentPlansDesc',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      titleKey: 'reraApproved',
      descriptionKey: 'reraApprovedDesc',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
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
            {t('featuresTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('featuresBlurb')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                {t(feature.titleKey)}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {t(feature.descriptionKey)}
              </p>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 -z-10`}
                   style={{ margin: '-2px' }}></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {t('trustTitle')}
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {t('trustDesc')}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">300+</div>
                    <div className="text-sm text-gray-600">{t('satisfiedCustomers')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">{t('legalCompliance')}</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <Clock className="w-8 h-8 text-blue-500 mb-3" />
                    <h4 className="font-medium text-gray-900 mb-2">{t('quickProcessing')}</h4>
                    <p className="text-sm text-gray-600">{t('fastDocumentation')}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <Users className="w-8 h-8 text-green-500 mb-3" />
                    <h4 className="font-medium text-gray-900 mb-2">{t('expertTeam')}</h4>
                    <p className="text-sm text-gray-600">{t('expertProfessionals')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;