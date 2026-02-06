import React from 'react';
import { ShieldCheck, Zap, ChevronRight, Globe, Star, MapPin, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  const mainScreenshot = "https://www.dropbox.com/scl/fi/0oem5f1lstj29mje78upc/Screenshot_20251217_180952_Turbo-MX-VPN.jpg?rlkey=vm0r9862smam9mrnrk586k158&st=64lgij8j&raw=1";

  const scrollToResources = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('resources');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-600/20 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-indigo-600/20 blur-[200px] rounded-full"></div>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(56,189,248,0.08)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sky-400 text-[10px] font-black mb-10 uppercase tracking-[0.3em] backdrop-blur-3xl">
          Latinoamérica & Global Coverage
          <ChevronRight size={12} />
        </div>
        
        <h1 className="text-7xl md:text-[140px] font-black leading-[0.85] tracking-tighter mb-8 select-none">
          <span className="text-white">TURBO</span>
          <br />
          <span className="text-gradient">MX VPN</span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-2xl mb-14 max-w-3xl leading-relaxed font-medium">
          Infraestructura de red de <span className="text-white font-black uppercase tracking-widest">Grado Industrial</span>. 
          <br /> Auditoría de seguridad, privacidad absoluta y optimización de latencia regional.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 mb-20">
          <a 
            href="https://play.google.com/store/apps/details?id=turbo.mx.anuncios"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-6 bg-white text-black pl-8 pr-12 py-6 rounded-[2.5rem] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(56,189,248,0.4)] border-b-[6px] border-slate-300 active:translate-y-1 active:border-b-0 overflow-hidden"
          >
            <div className="p-3 bg-black rounded-2xl shadow-xl">
               <svg viewBox="0 0 512 512" className="w-8 h-8 fill-current text-white">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.3 18-28.5-1.2-40.8zM325.3 277.7l-60.1 60.1L104.6 499l280.8-161.2-60.1-60.1z"></path>
               </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase font-extrabold text-slate-500 tracking-[0.2em]">Disponible en</p>
              <p className="text-2xl font-black tracking-tighter leading-none">Play Store</p>
            </div>
          </a>

          <a 
            href="#resources"
            onClick={scrollToResources}
            className="flex items-center gap-4 bg-slate-900 text-white px-10 py-7 rounded-[2.5rem] border border-white/10 hover:bg-slate-800 transition-all font-black uppercase tracking-widest text-xs"
          >
            <BookOpen className="text-sky-500" />
            Explorar Documentación
          </a>
        </div>

        <div className="relative w-full max-w-4xl px-4 group">
          <div className="absolute -inset-10 bg-sky-500/10 blur-[100px] rounded-full opacity-50"></div>
          <div className="relative z-20">
             <div className="glass p-4 md:p-8 rounded-[4rem] border border-white/10 shadow-3xl overflow-hidden">
                <img 
                  src={mainScreenshot} 
                  alt="TurboMX VPN Technical Interface" 
                  className="w-[280px] md:w-[380px] rounded-[3.5rem] mx-auto shadow-2xl"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;