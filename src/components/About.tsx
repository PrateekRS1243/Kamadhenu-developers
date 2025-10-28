import React from 'react';
import { Target, Eye, Star, Quote } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const About: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Prakash Vadvadgi",
      location: "Sikkeri Cross",
      designation: "Director, MBA College Bagalkot",
      contact: "9035058214",
      availability: "6 PM - 8 PM",
      text: "Excellent service and transparent dealings. I bought my plot 3 years ago and I'm very satisfied with my investment.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      location: "Vivekanand Nagar",
      text: "The team was very helpful throughout the process. Clear documentation and great location. Highly recommended!",
      rating: 5
    },
    {
      name: "Manjunath Reddy",
      location: "Indi Colony",
      text: "Been dealing with Kamadhenu Developers for years. They are trustworthy and deliver what they promise.",
      rating: 5
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white">
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
            {t('aboutTitle')}
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('aboutContent')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence has made us a household name in the region, with satisfied customers who trust us for their property investments.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-bold text-gray-900">{t('mission')}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t('missionContent')}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-6 h-6 text-blue-500" />
                  <h3 className="text-xl font-bold text-gray-900">{t('vision')}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t('visionContent')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTk4MTE1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Kamadhenu Developers Office"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Achievement Badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">10+</div>
                  <div className="text-sm text-gray-700">Years</div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-blue-600">5+</div>
                  <div className="text-xs text-gray-600">Projects</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-green-600">300+</div>
                  <div className="text-xs text-gray-600">Customers</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-gray-300 mb-4" />
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                  {testimonial.designation && (
                    <div className="text-sm text-blue-600 mt-1">{testimonial.designation}</div>
                  )}
                  {testimonial.contact && (
                    <div className="text-sm text-gray-600 mt-1">📞 {testimonial.contact}</div>
                  )}
                  {testimonial.availability && (
                    <div className="text-xs text-green-600 mt-1">Available: {testimonial.availability}</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
              <p className="text-xl opacity-90">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Transparency", desc: "Clear and honest communication in all dealings" },
                { title: "Quality", desc: "Uncompromising standards in every project" },
                { title: "Trust", desc: "Building long-term relationships with customers" },
                { title: "Innovation", desc: "Adopting modern practices and technologies" }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h4 className="font-bold mb-2">{value.title}</h4>
                  <p className="text-sm opacity-90">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;