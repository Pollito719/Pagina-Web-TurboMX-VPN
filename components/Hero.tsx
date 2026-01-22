import React from 'react';
import { ShieldCheck, Zap, ChevronRight, Globe, Star, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const mainScreenshot = "https://www.dropbox.com/scl/fi/0oem5f1lstj29mje78upc/Screenshot_20251217_180952_Turbo-MX-VPN.jpg?rlkey=vm0r9862smam9mrnrk586k158&st=64lgij8j&raw=1";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-600/20 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-indigo-600/20 blur-[200px] rounded-full"></div>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(56,189,248,0.08)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sky-400 text-[10px] font-black mb-10 uppercase tracking-[0.3em] backdrop-blur-3xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
          </span>
          Latinoamérica & Global Coverage
          <ChevronRight size={12} />
        </div>
        
        {/* Massive Title */}
        <h1 className="text-7xl md:text-[140px] font-black leading-[0.85] tracking-tighter mb-8 select-none">
          <span className="text-white">TURBO</span>
          <br />
          <span className="text-gradient">MX VPN</span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-2xl mb-14 max-w-2xl leading-relaxed font-medium">
          Privacidad <span className="text-white font-black">Nivel Militar</span>. 
          Optimizado para <span className="text-sky-400 font-black italic">Latinoamérica</span>. 
          <br className="hidden md:block" /> Conexión ultra-rápida en México, Colombia, Perú, Argentina y más de 50 países.
        </p>

        {/* Play Store Button */}
        <div className="flex flex-col items-center gap-10 mb-20">
          <a 
            href="https://play.google.com/store/apps/details?id=turbo.mx.anuncios"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-6 bg-white text-black pl-8 pr-12 py-6 rounded-[2.5rem] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(56,189,248,0.4)] border-b-[6px] border-slate-300 active:translate-y-1 active:border-b-0 overflow-hidden"
          >
            <div className="p-3 bg-black rounded-2xl shadow-xl">
               <svg viewBox="0 0 512 512" className="w-10 h-10 fill-current text-white">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.3 18-28.5-1.2-40.8zM325.3 277.7l-60.1 60.1L104.6 499l280.8-161.2-60.1-60.1z"></path>
               </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase font-extrabold text-slate-500 tracking-[0.2em]">Disponible en</p>
              <p className="text-3xl font-black tracking-tighter leading-none">Play Store</p>
            </div>
            <div className="absolute -top-1 -right-1 bg-sky-500 text-white p-2 rounded-full shadow-lg border-2 border-[#020617]">
              <Star size={12} fill="white" />
            </div>
          </a>
          
          <div className="flex flex-wrap justify-center items-center gap-10 text-[10px] font-black text-slate-500 tracking-[0.3em] uppercase">
            <div className="flex items-center gap-3 text-emerald-400/80">
              <MapPin size={18} /> MULTI-PAÍS LATAM
            </div>
            <div className="flex items-center gap-3 text-sky-400/80">
              <Zap size={18} /> VELOCIDAD TURBO
            </div>
            <div className="flex items-center gap-3 text-indigo-400/80">
              <Globe size={18} /> RED GLOBAL
            </div>
          </div>
        </div>

        {/* Device Showcase */}
        <div className="relative w-full max-w-4xl px-4 group">
          <div className="absolute -inset-10 bg-sky-500/10 blur-[100px] rounded-full opacity-50"></div>
          <div className="relative z-20 transition-transform duration-1000">
             <div className="glass p-4 md:p-8 rounded-[4rem] border border-white/10 shadow-3xl overflow-hidden">
                <img 
                  src={mainScreenshot} 
                  alt="TurboMX VPN Preview" 
                  className="w-[280px] md:w-[420px] rounded-[3.5rem] mx-auto shadow-2xl transition-all"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;