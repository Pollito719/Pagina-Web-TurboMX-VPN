import React from 'react';
import { MessageCircle, Play } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Transparency from './components/Transparency';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

const App: React.FC = () => {
  return (
    <div className="min-h-screen hero-gradient">
      <Header />
      
      <main>
        <Hero />
        
        <About />

        <Features />

        <HowItWorks />

        <Transparency />

        <FAQ />

        <section id="download" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-sky-500/5 -z-10"></div>
          <div className="max-w-5xl mx-auto glass-effect rounded-[3rem] p-10 md:p-20 text-center border border-sky-500/20 shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Privacidad total a un <br/><span className="text-sky-500 underline decoration-sky-500/30">solo clic</span> de distancia</h2>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              TurboMX VPN es la herramienta definitiva para quienes valoran su seguridad en redes Wi-Fi públicas y la integridad de sus comunicaciones móviles en México y el mundo.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://play.google.com/store/apps/details?id=turbo.mx.anuncios"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-lg transition-all transform hover:scale-105 shadow-xl"
              >
                <Play className="w-6 h-6 fill-current" />
                Obtener en Play Store
              </a>
              
              <a 
                href="https://t.me/internetGratisMexico"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-sky-600 hover:bg-sky-500 px-10 py-5 rounded-2xl font-black text-lg transition-all transform hover:scale-105 shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                Grupo de Soporte
              </a>
            </div>
            
            <p className="mt-8 text-slate-500 text-sm font-medium">Compatible con Android 7.0 o superior | Optimizado para redes 4G/5G</p>
          </div>
        </section>

        <Contact />

        <div id="legal" className="space-y-0">
          <PrivacyPolicy />
          <TermsOfService />
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default App;