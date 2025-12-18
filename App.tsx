
import React from 'react';
import { MessageCircle, Play } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen hero-gradient">
      <Header />
      
      <main>
        <Hero />
        
        <Features />

        {/* Privacy Policy Section Integrated into Main Page */}
        <PrivacyPolicy />

        {/* Call to Action Section */}
        <section id="download" className="py-20 px-6">
          <div className="max-w-5xl mx-auto glass-effect rounded-3xl p-10 md:p-16 text-center border border-sky-500/20 shadow-2xl shadow-sky-500/5">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">¿Listo para navegar sin límites?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Únete a miles de usuarios que ya disfrutan de una conexión segura, privada y extremadamente rápida con TurboMX VPN.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://play.google.com/store/apps/details?id=turbo.mx.anuncios"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black hover:bg-slate-200 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105"
              >
                <Play className="w-5 h-5 fill-current" />
                Play Store
              </a>
              
              <a 
                href="https://t.me/internetGratisMexico"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-sky-600 hover:bg-sky-500 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Telegram
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
