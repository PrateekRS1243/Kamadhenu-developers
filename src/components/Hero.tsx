import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToProperties = () => {
    const element = document.getElementById('properties');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1648496674264-38664915b573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZWFsJTIwZXN0YXRlJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NTk4NDgxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Construction Site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t('heroTitle')}
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                {t('heroSubtitle')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={scrollToProperties}
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-medium hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span>{t('viewProperties')}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <span>{t('contactUs')}</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">300+</div>
                <div className="text-sm text-gray-300">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Property Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full mb-8 -mt-12"
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">10+ Years in Real Estate</span>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <ImageWithFallback
                    src="/2.jpg"
                    alt="Residential Development"
                    className="w-full h-auto object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-white font-medium">Premium Plots</h3>
                  <p className="text-gray-300 text-sm">In prime locations</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <ImageWithFallback
                    src="/clear.jpg"
                    alt="Plot Layout"
                    className="w-full h-auto object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-white font-medium">Clear Documentation</h3>
                  <p className="text-gray-300 text-sm">Government approved</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;