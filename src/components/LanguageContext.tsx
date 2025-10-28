import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'kn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    companyName: "Kamadhenu Developers",
    home: "Home",
    properties: "Properties",
    aboutUs: "About Us",
    contact: "Contact",
    
    // Hero Section
    heroTitle: "10 Years of Excellence in Real Estate",
    heroSubtitle: "Your trusted partner for premium property development in Bagalkot",
    viewProperties: "View Properties",
    contactUs: "Contact Us",
    
    // Properties Section
    propertiesTitle: "Our Premium Properties",
    propertiesSubtitle: "Discover your dream plot in prime locations",
    registerNow: "Register Now",
    location: "Location",
    plotSizes: "Plot Sizes",
    
    // Property Details
    sikkeriTitle: "SIKKERI CROSS",
    sikkeriLocation: "Opp. KHB colony, near Teacher's layout",
    sikkeriSizes: "20x30, 30x40, 30x50 (ODD sizes)",
    
    vivekanandTitle: "VIVEKANAND NAGAR",
    vivekanandLocation: "100 mtrs from Railway station, Badami road, Bagalkot",
    vivekanandLandmark: "Bagalkot Railway Station",
    vivekanandSizes: "20x30, 30x40, 30x50, 40x60",
    
    indiTitle: "BASAVESHWAR COLONY",
    indiLocation: "Badami road, Bagalkot",
    indiLandmark: "Bagalkot Railway Station",
    indiSizes: "20x30, 30x40 (ODD Size)",
    
    simikeriTitle: "SIMIKERI",
    simikeriLocation: "500mtrs from Hubli-Vijayapura national highway",
    simikeriLandmark: "Near Jyoti School",
    simikeriSizes: "20x30, 30x40 (ODD Size)",
    
    // Features Section
    featuresTitle: "Why Choose Kamadhenu Developers?",
    experience: "10+ Years Experience",
    experienceDesc: "Over a decade of trust and excellence in real estate",
    primeLocations: "Prime Locations",
    primeLocationsDesc: "Strategic locations near key landmarks and amenities",
    flexibleSizes: "Flexible Plot Sizes",
    flexibleSizesDesc: "Various plot dimensions to suit your requirements",
    documentation: "Clear Documentation",
    documentationDesc: "Transparent and legally compliant property documents",
    paymentPlans: "Easy Payment Plans",
    paymentPlansDesc: "Bank loan facilities are available to fund the project's implementation and development.",
    reraApproved: "Government Approved",
    reraApprovedDesc: "All projects comply with government regulations",
    
    // About Section
    aboutTitle: "About Kamadhenu Developers",
    aboutContent: "With 10 years of unwavering commitment to excellence, Kamadhenu Developers has established itself as a trusted name in real estate development. We specialize in creating premium residential plots in strategically chosen locations that offer both convenience and investment potential.",
    mission: "Our Mission",
    missionContent: "To provide quality residential plots with clear documentation, excellent connectivity, and exceptional value for money.",
    vision: "Our Vision",
    visionContent: "To be the most trusted real estate developer in Karnataka, known for transparency, quality, and customer satisfaction.",
    
    // Contact Section
    contactTitle: "Get In Touch",
    contactSubtitle: "Ready to invest in your future? Contact us today!",
    name: "Name",
    phone: "Phone",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    officeAddress: "Office Address",
    
    // Footer
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    copyright: "© 2024 Kamadhenu Developers. All rights reserved.",
    
    // WhatsApp
    whatsappText: "Chat with us on WhatsApp"
  },
  kn: {
    // Header
    companyName: "ಕಾಮಧೇನು ಡೆವಲಪರ್ಸ್",
    home: "ಮುಖ್ಯ ಪುಟ",
    properties: "ಆಸ್ತಿಗಳು",
    aboutUs: "ನಮ್ಮ ಬಗ್ಗೆ",
    contact: "ಸಂಪರ್ಕಿಸಿ",
    
    // Hero Section
    heroTitle: "ರಿಯಲ್ ಎಸ್ಟೇಟ್‌ನಲ್ಲಿ 25 ವರ್ಷಗಳ ಶ್ರೇಷ್ಠತೆ",
    heroSubtitle: "ಬಾಗಲಕೋಟೆಯಲ್ಲಿ ಪ್ರೀಮಿಯಂ ಆಸ್ತಿ ಅಭಿವೃದ್ಧಿಗೆ ನಿಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ಪಾಲುದಾರ",
    viewProperties: "ಆಸ್ತಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    contactUs: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    
    // Properties Section
    propertiesTitle: "ನಮ್ಮ ಪ್ರೀಮಿಯಂ ಆಸ್ತಿಗಳು",
    propertiesSubtitle: "ಪ್ರಮುಖ ಸ್ಥಳಗಳಲ್ಲಿ ನಿಮ್ಮ ಕನಸಿನ ಪ್ಲಾಟ್ ಅನ್ನು ಕಂಡುಕೊಳ್ಳಿ",
    registerNow: "ಈಗ ನೋಂದಾಯಿಸಿ",
    location: "ಸ್ಥಳ",
    plotSizes: "ಪ್ಲಾಟ್ ಗಾತ್ರಗಳು",
    
    // Property Details
    sikkeriTitle: "ಸಿಕ್ಕೇರಿ ಕ್ರಾಸ್",
    sikkeriLocation: "KHB ಕಾಲೋನಿ ಎದುರು, ಶಿಕ್ಷಕರ ಲೇಔಟ್ ಹತ್ತಿರ",
    sikkeriSizes: "20x30, 30x40, 30x50 (ಆಡ್ ಸೈಜ್)",
    
    vivekanandTitle: "ವಿವೇಕಾನಂದ ನಗರ",
    vivekanandLocation: "ರೈಲ್ವೇ ನಿಲ್ದಾಣದಿಂದ 100 ಮೀಟರ್, ಬಾದಾಮಿ ರಸ್ತೆ, ಬಾಗಲಕೋಟೆ",
    vivekanandLandmark: "ಬಾಗಲಕೋಟೆ ರೈಲ್ವೇ ನಿಲ್ದಾಣ",
    vivekanandSizes: "20x30, 30x40, 30x50, 40x60",
    
    indiTitle: "ಬಸವೇಶ್ವರ ಕಾಲೋನಿ",
    indiLocation: "ಬಾದಾಮಿ ರಸ್ತೆ, ಬಾಗಲಕೋಟೆ",
    indiLandmark: "ಬಾಗಲಕೋಟೆ ರೈಲ್ವೇ ನಿಲ್ದಾಣ",
    indiSizes: "20x30, 30x40 (ಆಡ್ ಸೈಜ್)",
    
    simikeriTitle: "ಸಿಮಿಕೇರಿ",
    simikeriLocation: "ಹುಬ್ಬಳ್ಳಿ-ವಿಜಯಪುರ ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿಯಿಂದ 500 ಮೀಟರ್",
    simikeriLandmark: "ಜ್ಯೋತಿ ಶಾಲೆಯ ಹತ್ತಿರ",
    simikeriSizes: "20x30, 30x40 (ಆಡ್ ಸೈಜ್)",
    
    // Features Section
    featuresTitle: "ಕಾಮಧೇನು ಡೆವಲಪರ್ಸ್ ಅನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು?",
    experience: "10+ ವರ್ಷಗಳ ಅನುಭವ",
    experienceDesc: "ರಿಯಲ್ ಎಸ್ಟೇಟ್‌ನಲ್ಲಿ ಒಂದು ದಶಕದ ನಂಬಿಕೆ ಮತ್ತು ಶ್ರೇಷ್ಠತೆ",
    primeLocations: "ಪ್ರಮುಖ ಸ್ಥಳಗಳು",
    primeLocationsDesc: "ಮುಖ್ಯ ಮಾರ್ಗದರ್ಶಿಗಳು ಮತ್ತು ಸೌಕರ್ಯಗಳ ಹತ್ತಿರ ಕಾರ್ಯತಂತ್ರದ ಸ್ಥಳಗಳು",
    flexibleSizes: "ಹೊಂದಿಕೊಳ್ಳುವ ಪ್ಲಾಟ್ ಗಾತ್ರಗಳು",
    flexibleSizesDesc: "ನಿಮ್ಮ ಅಗತ್ಯಗಳಿಗೆ ಸರಿಹೊಂದುವ ವಿವಿಧ ಪ್ಲಾಟ್ ಆಯಾಮಗಳು",
    documentation: "ಸ್ಪಷ್ಟ ದಾಖಲಾತಿ",
    documentationDesc: "ಪಾರದರ್ಶಕ ಮತ್ತು ಕಾನೂನುಬದ್ಧವಾಗಿ ಅನುಸರಿಸುವ ಆಸ್ತಿ ದಾಖಲೆಗಳು",
    paymentPlans: "ಸುಲಭ ಪಾವತಿ ಯೋಜನೆಗಳು",
    paymentPlansDesc: "ಯೋಜನೆಯ ಅನುಷ್ಠಾನ ಮತ್ತು ಅಭಿವೃದ್ಧಿಗೆ ಹಣಕಾಸು ಒದಗಿಸಲು ಬ್ಯಾಂಕ್ ಸಾಲ ಸೌಲಭ್ಯಗಳು ಲಭ್ಯವಿದೆ.",
    reraApproved: "ಸರ್ಕಾರದ ಅನುಮೋದಿತ",
    reraApprovedDesc: "ಎಲ್ಲಾ ಯೋಜನೆಗಳು ಸರ್ಕಾರದ ನಿಯಮಗಳನ್ನು ಅನುಸರಿಸುತ್ತವೆ",
    
    // About Section
    aboutTitle: "ಕಾಮಧೇನು ಡೆವಲಪರ್ಸ್ ಬಗ್ಗೆ",
    aboutContent: "ಶ್ರೇಷ್ಠತೆಗೆ 10 ವರ್ಷಗಳ ಅಚಲ ಬದ್ಧತೆಯೊಂದಿಗೆ, ಕಾಮಧೇನು ಡೆವಲಪರ್ಸ್ ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಅಭಿವೃದ್ಧಿಯಲ್ಲಿ ವಿಶ್ವಾಸಾರ್ಹ ಹೆಸರಾಗಿ ತನ್ನನ್ನು ಸ್ಥಾಪಿಸಿದೆ.",
    mission: "ನಮ್ಮ ಧ್ಯೇಯ",
    missionContent: "ಸ್ಪಷ್ಟ ದಾಖಲಾತಿ, ಅತ್ಯುತ್ತಮ ಸಂಪರ್ಕ ಮತ್ತು ಹಣದ ಅಸಾಧಾರಣ ಮೌಲ್ಯದೊಂದಿಗೆ ಗುಣಮಟ್ಟದ ವಸತಿ ಪ್ಲಾಟ್‌ಗಳನ್ನು ಒದಗಿಸುವುದು.",
    vision: "ನಮ್ಮ ದೃಷ್ಟಿ",
    visionContent: "ಪಾರದರ್ಶಕತೆ, ಗುಣಮಟ್ಟ ಮತ್ತು ಗ್ರಾಹಕ ತೃಪ್ತಿಗೆ ಹೆಸರುವಾಸಿಯಾದ ಕರ್ನಾಟಕದಲ್ಲಿ ಅತ್ಯಂತ ವಿಶ್ವಾಸಾರ್ಹ ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಡೆವಲಪರ್ ಆಗುವುದು.",
    
    // Contact Section
    contactTitle: "ಸಂಪರ್ಕದಲ್ಲಿರಿ",
    contactSubtitle: "ನಿಮ್ಮ ಭವಿಷ್ಯದಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಲು ಸಿದ್ಧರೇ? ಇಂದೇ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ!",
    name: "ಹೆಸರು",
    phone: "ಫೋನ್",
    email: "ಇಮೇಲ್",
    message: "ಸಂದೇಶ",
    sendMessage: "ಸಂದೇಶ ಕಳುಹಿಸಿ",
    officeAddress: "ಕಚೇರಿ ವಿಳಾಸ",
    
    // Footer
    quickLinks: "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
    followUs: "ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ",
    copyright: "© 2024 ಕಾಮಧೇನು ಡೆವಲಪರ್ಸ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    
    // WhatsApp
    whatsappText: "WhatsApp ನಲ್ಲಿ ನಮ್ಮೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಿ"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};