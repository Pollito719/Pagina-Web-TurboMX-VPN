import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Transparency from './components/Transparency';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-sky-500 selection:text-white bg-[#020617]">
      <Header />
      
      <main>
        <Hero />
        
        {/* Global Statistics Section */}
        <div className="relative z-10 -mt-24 px-6 mb-24">
          <div className="max-w-6xl mx-auto glass rounded-[4rem] p-10 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.5)] border-white/5">
             <div className="grid md:grid-cols-3 gap-12 text-center">
                <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                   <h3 className="text-5xl font-black text-white mb-3 tracking-tighter italic">1M+</h3>
                   <p className="text-slate-500 font-black uppercase tracking-[0.2em] text-[10px]">Usuarios Activos</p>
                </div>
                <div className="md:border-x border-white/10 py-8 md:py-0 md:px-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                   <h3 className="text-5xl font-black text-sky-500 mb-3 tracking-tighter italic">99.9%</h3>
                   <p className="text-slate-500 font-black uppercase tracking-[0.2em] text-[10px]">Uptime Garantizado</p>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                   <h3 className="text-5xl font-black text-indigo-400 mb-3 tracking-tighter italic">0</h3>
                   <p className="text-slate-500 font-black uppercase tracking-[0.2em] text-[10px]">Registros de Navegación</p>
                </div>
             </div>
          </div>
        </div>

        <About />
        <Features />
        <HowItWorks />
        <Transparency />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <CookieBanner />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;