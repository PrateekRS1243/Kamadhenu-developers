import React from 'react';
import { LanguageProvider } from './components/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Properties from './components/Properties';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white overflow-x-hidden max-w-full">
        <Header />
        <main className="overflow-x-hidden max-w-full">
          <Hero />
          <Properties />
          <Features />
          <About />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}