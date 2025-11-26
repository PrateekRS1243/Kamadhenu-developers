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
    heroTitle: "10+ Years of Excellence in Real Estate",
    heroSubtitle: "Your trusted partner for premium property development in Bagalkot",
    viewProperties: "View Properties",
    contactUs: "Contact Us",
    yearsExperienceLabel: "Years Experience",
    happyCustomers: "Happy Customers",
    projectsCompleted: "Projects Completed",
    experienceBadge: "10+ Years in Real Estate",
    premiumPlots: "Premium Plots",
    inPrimeLocations: "In prime locations",
    
    // Properties Section
    propertiesTitle: "Our Premium Properties",
    propertiesSubtitle: "Discover your dream plot in prime locations",
    registerNow: "Register Now",
    location: "Location",
    plotSizes: "Plot Sizes",
    availableNow: "Available Now",
    landmarkLabel: "Landmark",
    call: "Call",
    callColon: "Call:",
    
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
    governmentApproved: "Government Approved",
    paymentPlans: "Easy Payment Plans",
    paymentPlansDesc: "Bank loan facilities are available to fund the project's implementation and development.",
    reraApproved: "Government Approved",
    reraApprovedDesc: "All projects comply with government regulations",
    featuresBlurb: "We have been serving our customers with excellence and trust for over 10 years. Here's what makes us different.",
    trustTitle: "Your Trust, Our Commitment",
    trustDesc: "For 10 years, we have been building not just properties, but lasting relationships with our customers. Every plot we develop comes with our guarantee of quality, transparency, and legal compliance.",
    satisfiedCustomers: "Satisfied Customers",
    legalCompliance: "Legal Compliance",
    quickProcessing: "Quick Processing",
    fastDocumentation: "Fast documentation and registration process",
    expertTeam: "Expert Team",
    expertProfessionals: "Experienced professionals at your service",
    
    // About Section
    aboutTitle: "About Kamadhenu Developers",
    aboutContent: "With 10 years of unwavering commitment to excellence, Kamadhenu Developers has established itself as a trusted name in real estate development. We specialize in creating premium residential plots in strategically chosen locations that offer both convenience and investment potential.",
    commitmentLine: "Our commitment to excellence has made us a household name in the region, with satisfied customers who trust us for their property investments.",
    mission: "Our Mission",
    missionContent: "To provide quality residential plots with clear documentation, excellent connectivity, and exceptional value for money.",
    vision: "Our Vision",
    visionContent: "To be the most trusted real estate developer in Karnataka, known for transparency, quality, and customer satisfaction.",
    yearsLabel: "Years",
    projectsLabel: "Projects",
    customersLabel: "Customers",
    testimonialsTitle: "What Our Customers Say",
    availabilityLabel: "Available:",
    coreValuesTitle: "Our Core Values",
    coreValuesSubtitle: "The principles that guide everything we do",
    valueTransparency: "Transparency",
    valueTransparencyDesc: "Clear and honest communication in all dealings",
    valueQuality: "Quality",
    valueQualityDesc: "Uncompromising standards in every project",
    valueTrust: "Trust",
    valueTrustDesc: "Building long-term relationships with customers",
    valueInnovation: "Innovation",
    valueInnovationDesc: "Adopting modern practices and technologies",
    
    // Contact Section
    contactTitle: "Get In Touch",
    contactSubtitle: "Ready to invest in your future? Contact us today!",
    name: "Name",
    phone: "Phone",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    officeAddress: "Office Address",
    sendUsMessage: "Send us a Message",
    placeholderName: "Your full name",
    placeholderPhone: "Your phone number",
    placeholderEmail: "Your email address",
    placeholderMessage: "Tell us about your requirements...",
    callUs: "Call Us",
    whatsapp: "WhatsApp",
    chatInstantly: "Chat with us instantly",
    visitUs: "Visit Us",
    officeHours: "Office Hours",
    mondaySaturday: "Monday - Saturday",
    needHelpTitle: "Need Immediate Assistance?",
    needHelpSubtitle: "Our team is ready to help you with site visits, documentation, and any queries you may have.",
    callNow: "Call Now",
    findUs: "Find Us",
    ctaTitle: "Ready to Invest in Your Future?",
    ctaSubtitle: "Contact us today for site visits and detailed information about our properties.",

    // Property highlights
    highlightPrimeLocation: "Prime Location",
    highlightNearTeachersLayout: "Near Teacher's Layout",
    highlightOddSizesAvailable: "ODD Sizes Available",
    highlightNearRailwayStation: "Near Railway Station",
    highlightMultipleSizes: "Multiple Sizes",
    highlightBusStandProximity: "Bus Stand Proximity",
    highlightRailwayStation300m: "Railway Station 300m",
    highlightStrategicLocation: "Strategic Location",
    highlightOddSizes: "ODD Sizes",
    highlightNearSchool: "Near School",
    highlightHighwayAccess: "National Highway Access",
    
    // Footer
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    ourProperties: "Our Properties",
  contactInfo: "Contact Info",
  footerAbout: "10 years of excellence in real estate development. Your trusted partner for premium property investments in Bagalkot.",
  isoCertified: "ISO Certified",
    copyright: "© 2025 Kamadhenu Developers. All rights reserved.",
    
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
  heroTitle: "ರಿಯಲ್ ಎಸ್ಟೇಟ್‌ನಲ್ಲಿ 10+ ವರ್ಷಗಳ ಶ್ರೇಷ್ಠತೆ",
    heroSubtitle: "ಬಾಗಲಕೋಟೆಯಲ್ಲಿ ಪ್ರೀಮಿಯಂ ಆಸ್ತಿ ಅಭಿವೃದ್ಧಿಗೆ ನಿಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ಪಾಲುದಾರ",
    viewProperties: "ಆಸ್ತಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    contactUs: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    yearsExperienceLabel: "ವರ್ಷಗಳ ಅನುಭವ",
    happyCustomers: "ಸಂತೋಷದ ಗ್ರಾಹಕರು",
    projectsCompleted: "ಪೂರ್ತಿಗೊಂಡ ಯೋಜನೆಗಳು",
    experienceBadge: "ರಿಯಲ್ ಎಸ್ಟೇಟ್‌ನಲ್ಲಿ 10+ ವರ್ಷಗಳು",
    premiumPlots: "ಪ್ರೀಮಿಯಂ ಪ್ಲಾಟ್ಸ್",
    inPrimeLocations: "ಪ್ರಮುಖ ಸ್ಥಳಗಳಲ್ಲಿ",
    
    // Properties Section
    propertiesTitle: "ನಮ್ಮ ಪ್ರೀಮಿಯಂ ಆಸ್ತಿಗಳು",
    propertiesSubtitle: "ಪ್ರಮುಖ ಸ್ಥಳಗಳಲ್ಲಿ ನಿಮ್ಮ ಕನಸಿನ ಪ್ಲಾಟ್ ಅನ್ನು ಕಂಡುಕೊಳ್ಳಿ",
    registerNow: "ಈಗ ನೋಂದಾಯಿಸಿ",
    location: "ಸ್ಥಳ",
    plotSizes: "ಪ್ಲಾಟ್ ಗಾತ್ರಗಳು",
    availableNow: "ಈಗ ಲಭ್ಯ",
    landmarkLabel: "ಸೂಚ್ಯಂಕ ಸ್ಥಳ",
    call: "ಕರೆ",
    callColon: "ಕರೆ:",
    
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
    governmentApproved: "ಸರ್ಕಾರದ ಅನುಮೋದಿತ",
    paymentPlans: "ಸುಲಭ ಪಾವತಿ ಯೋಜನೆಗಳು",
    paymentPlansDesc: "ಯೋಜನೆಯ ಅನುಷ್ಠಾನ ಮತ್ತು ಅಭಿವೃದ್ಧಿಗೆ ಹಣಕಾಸು ಒದಗಿಸಲು ಬ್ಯಾಂಕ್ ಸಾಲ ಸೌಲಭ್ಯಗಳು ಲಭ್ಯವಿದೆ.",
    reraApproved: "ಸರ್ಕಾರದ ಅನುಮೋದಿತ",
    reraApprovedDesc: "ಎಲ್ಲಾ ಯೋಜನೆಗಳು ಸರ್ಕಾರದ ನಿಯಮಗಳನ್ನು ಅನುಸರಿಸುತ್ತವೆ",
    featuresBlurb: "10 ವರ್ಷಗಳಿಂದ ನಾವು ಶ್ರೇಷ್ಠತೆ ಮತ್ತು ವಿಶ್ವಾಸದೊಂದಿಗೆ ಗ್ರಾಹಕರಿಗೆ ಸೇವೆ ನೀಡುತ್ತಿದ್ದೇವೆ. ನಮ್ಮನ್ನು ವಿಭಿನ್ನ ಮಾಡುವುದು ಇಲ್ಲಿದೆ.",
    trustTitle: "ನಿಮ್ಮ ವಿಶ್ವಾಸ, ನಮ್ಮ ಬದ್ಧತೆ",
    trustDesc: "10 ವರ್ಷಗಳಿಂದ ನಾವು ಆಸ್ತಿಗಳನ್ನು ಮಾತ್ರವಲ್ಲ, ನಮ್ಮ ಗ್ರಾಹಕರೊಂದಿಗೆ ದೀರ್ಘಕಾಲಿಕ ಸಂಬಂಧಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತಿದ್ದೇವೆ. ಪ್ರತಿಯೊಂದು ಪ್ಲಾಟ್‌ಗೂ ಗುಣಮಟ್ಟ, ಪಾರದರ್ಶಕತೆ ಮತ್ತು ಕಾನೂನು ಪಾಲನೆಯ ನಮ್ಮ ಭರವಸೆ ಇದೆ.",
    satisfiedCustomers: "ಸಂತೃಪ್ತ ಗ್ರಾಹಕರು",
    legalCompliance: "ಕಾನೂನು ಪಾಲನೆ",
    quickProcessing: "ವೇಗವಾದ ಪ್ರಕ್ರಿಯೆ",
    fastDocumentation: "ತ್ವರಿತ ದಾಖಲೆ ಮತ್ತು ನೋಂದಣಿ ಪ್ರಕ್ರಿಯೆ",
    expertTeam: "ತಜ್ಞರ ತಂಡ",
    expertProfessionals: "ಅನುಭವಸಂಪನ್ನ ವೃತ್ತಿಪರರು ನಿಮ್ಮ ಸೇವೆಗೆ",
    
    // About Section
    aboutTitle: "ಕಾಮಧೇನು ಡೆವಲಪರ್ಸ್ ಬಗ್ಗೆ",
    aboutContent: "ಶ್ರೇಷ್ಠತೆಗೆ 10 ವರ್ಷಗಳ ಅಚಲ ಬದ್ಧತೆಯೊಂದಿಗೆ, ಕಾಮಧೇನು ಡೆವಲಪರ್ಸ್ ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಅಭಿವೃದ್ಧಿಯಲ್ಲಿ ವಿಶ್ವಾಸಾರ್ಹ ಹೆಸರಾಗಿ ತನ್ನನ್ನು ಸ್ಥಾಪಿಸಿದೆ.",
    commitmentLine: "ಶ್ರೇಷ್ಠತೆಯ ಮೇಲಿನ ನಮ್ಮ ಬದ್ಧತೆಯು ಈ ಪ್ರದೇಶದಲ್ಲಿ ಮನೆಮಾತಾಗುವ ಹಾಗೆ ಮಾಡಿದೆ; ಆಸ್ತಿ ಹೂಡಿಕೆಗಾಗಿ ನಮ್ಮನ್ನು ನಂಬಿರುವ ಸಂತೃಪ್ತ ಗ್ರಾಹಕರು ನಮ್ಮೊಂದಿಗೆ ಇದ್ದಾರೆ.",
    mission: "ನಮ್ಮ ಧ್ಯೇಯ",
    missionContent: "ಸ್ಪಷ್ಟ ದಾಖಲಾತಿ, ಅತ್ಯುತ್ತಮ ಸಂಪರ್ಕ ಮತ್ತು ಹಣದ ಅಸಾಧಾರಣ ಮೌಲ್ಯದೊಂದಿಗೆ ಗುಣಮಟ್ಟದ ವಸತಿ ಪ್ಲಾಟ್‌ಗಳನ್ನು ಒದಗಿಸುವುದು.",
    vision: "ನಮ್ಮ ದೃಷ್ಟಿ",
    visionContent: "ಪಾರದರ್ಶಕತೆ, ಗುಣಮಟ್ಟ ಮತ್ತು ಗ್ರಾಹಕ ತೃಪ್ತಿಗೆ ಹೆಸರುವಾಸಿಯಾದ ಕರ್ನಾಟಕದಲ್ಲಿ ಅತ್ಯಂತ ವಿಶ್ವಾಸಾರ್ಹ ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಡೆವಲಪರ್ ಆಗುವುದು.",
    yearsLabel: "ವರ್ಷಗಳು",
    projectsLabel: "ಯೋಜನೆಗಳು",
    customersLabel: "ಗ್ರಾಹಕರು",
    testimonialsTitle: "ನಮ್ಮ ಗ್ರಾಹಕರು ಏನು ಹೇಳುತ್ತಾರೆ",
    availabilityLabel: "ಲಭ್ಯವಿರುವ ಸಮಯ:",
    coreValuesTitle: "ನಮ್ಮ ಮುಖ್ಯ ಮೌಲ್ಯಗಳು",
    coreValuesSubtitle: "ನಾವು ಮಾಡುವ ಎಲ್ಲ ಕೆಲಸಗಳನ್ನು ಮಾರ್ಗದರ್ಶಿಸುವ ತತ್ವಗಳು",
    valueTransparency: "ಪಾರದರ್ಶಕತೆ",
    valueTransparencyDesc: "ಎಲ್ಲಾ ವ್ಯವಹಾರಗಳಲ್ಲಿ ಸ್ಪಷ್ಟ ಮತ್ತು ಪ್ರಾಮಾಣಿಕ ಸಂವಹನ",
    valueQuality: "ಗುಣಮಟ್ಟ",
    valueQualityDesc: "ಪ್ರತಿ ಯೋಜನೆಯಲ್ಲಿ ಅಸಂಯಮಿತ ಪ್ರಮಾಣ",
    valueTrust: "ವಿಶ್ವಾಸ",
    valueTrustDesc: "ಗ್ರಾಹಕರೊಂದಿಗೆ ದೀರ್ಘಕಾಲಿಕ ಸಂಬಂಧಗಳನ್ನು ನಿರ್ಮಿಸುವುದು",
    valueInnovation: "ನವೀನತೆ",
    valueInnovationDesc: "ಆಧುನಿಕ ಪದ್ಧತಿ ಮತ್ತು ತಂತ್ರಜ್ಞಾನಗಳನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳುವುದು",
    
    // Contact Section
    contactTitle: "ಸಂಪರ್ಕದಲ್ಲಿರಿ",
    contactSubtitle: "ನಿಮ್ಮ ಭವಿಷ್ಯದಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಲು ಸಿದ್ಧರೇ? ಇಂದೇ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ!",
    name: "ಹೆಸರು",
    phone: "ಫೋನ್",
    email: "ಇಮೇಲ್",
    message: "ಸಂದೇಶ",
    sendMessage: "ಸಂದೇಶ ಕಳುಹಿಸಿ",
    officeAddress: "ಕಚೇರಿ ವಿಳಾಸ",
    sendUsMessage: "ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ",
    placeholderName: "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು",
    placeholderPhone: "ನಿಮ್ಮ ಫೋನ್ ಸಂಖ್ಯೆ",
    placeholderEmail: "ನಿಮ್ಮ ಈಮೇಲ್ ವಿಳಾಸ",
    placeholderMessage: "ನಿಮ್ಮ ಅಗತ್ಯಗಳ ಬಗ್ಗೆ ತಿಳಿಸಿ...",
    callUs: "ನಮಗೆ ಕರೆ ಮಾಡಿ",
    whatsapp: "ವಾಟ್ಸಾಪ್",
    chatInstantly: "ಕ್ಷಣದಲ್ಲೇ ನಮ್ಮೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಿ",
    visitUs: "ನಮ್ಮನ್ನು ಭೇಟಿಿಸಿ",
    officeHours: "ಕಚೇರಿ ಸಮಯ",
    mondaySaturday: "ಸೋಮವಾರ - ಶನಿವಾರ",
    needHelpTitle: "ತಕ್ಷಣದ ಸಹಾಯ ಬೇಕೆ?",
    needHelpSubtitle: "ಸೈಟ್ ವೀಕ್ಷಣೆ, ದಾಖಲೆ ಮತ್ತು ನಿಮ್ಮ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿಗೆ ನಮ್ಮ ತಂಡ ಸಿದ್ದವಾಗಿದೆ.",
    callNow: "ಈಗ ಕರೆ ಮಾಡಿ",
    findUs: "ನಮ್ಮನ್ನು ಹುಡುಕಿ",
    ctaTitle: "ನಿಮ್ಮ ಭವಿಷ್ಯದಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಲು ಸಿದ್ಧವೇ?",
    ctaSubtitle: "ಸೈಟ್ ವೀಕ್ಷಣೆ ಮತ್ತು ನಮ್ಮ ಆಸ್ತಿಗಳ ವಿವರಗಳಿಗಾಗಿ ಇಂದೇ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.",

    // Property highlights
    highlightPrimeLocation: "ಪ್ರಮುಖ ಸ್ಥಳ",
    highlightNearTeachersLayout: "ಶಿಕ್ಷಕರ ಲೇಔಟ್ ಹತ್ತಿರ",
    highlightOddSizesAvailable: "ODD ಗಾತ್ರಗಳು ಲಭ್ಯ",
    highlightNearRailwayStation: "ರೈಲ್ವೇ ನಿಲ್ದಾಣದ ಹತ್ತಿರ",
    highlightMultipleSizes: "ಬಹುವಿಧ ಗಾತ್ರಗಳು",
    highlightBusStandProximity: "ಬಸ್ ಸ್ಟ್ಯಾಂಡ್ ಹತ್ತಿರ",
    highlightRailwayStation300m: "ರೈಲ್ವೇ ನಿಲ್ದಾಣ 300 ಮೀ",
    highlightStrategicLocation: "ಯುಕ್ತವಾದ ಸ್ಥಳ",
    highlightOddSizes: "ODD ಗಾತ್ರಗಳು",
    highlightNearSchool: "ಶಾಲೆಯ ಹತ್ತಿರ",
    highlightHighwayAccess: "ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿ ಸಂಪರ್ಕ",
    
    // Footer
  quickLinks: "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
  followUs: "ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ",
  ourProperties: "ನಮ್ಮ ಆಸ್ತಿಗಳು",
  contactInfo: "ಸಂಪರ್ಕ ಮಾಹಿತಿ",
  footerAbout: "ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಅಭಿವೃದ್ಧಿಯಲ್ಲಿ 10 ವರ್ಷಗಳ ಶ್ರೇಷ್ಠತೆ. ಬಾಗಲಕೋಟೆಯಲ್ಲಿ ಪ್ರೀಮಿಯಂ ಆಸ್ತಿ ಹೂಡಿಕೆಗೆ ನಿಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ಪಾಲುದಾರ.",
  isoCertified: "ಐಎಸ್ಒ ಪ್ರಮಾಣೀಕೃತ",
    copyright: "© 2025 ಕಾಮಧೇನು ಡೆವಲಪರ್ಸ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    
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