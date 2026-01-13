import React from 'react';
import { Shield, Zap, Globe, Play, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const mainScreenshot = "https://www.dropbox.com/scl/fi/0oem5f1lstj29mje78upc/Screenshot_20251217_180952_Turbo-MX-VPN.jpg?rlkey=vm0r9862smam9mrnrk586k158&st=64lgij8j&raw=1";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden grid-pattern">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] aspect-square bg-sky-600/5 blur-[160px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-sky-500/5 border border-sky-500/10 text-sky-400 text-[11px] font-black mb-10 uppercase tracking-[0.4em] shadow-2xl animate-fade-in">
          <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse"></span>
          Infraestructura Global v2.5
        </div>
        
        {/* Main Heading */}
        <h1 className="text-6xl md:text-[110px] font-black leading-[0.8] tracking-tighter mb-10 animate-title max-w-4xl">
          CONECTIVIDAD <br />
          <span className="text-gradient">GLOBAL</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-slate-400 text-lg md:text-2xl mb-14 max-w-2xl leading-relaxed font-medium">
          Privacidad de grado militar optimizada para Latinoamérica y el extranjero. 
          Navega a máxima velocidad en cualquier país con un solo toque.
        </p>

        {/* Play Store Button */}
        <div className="flex flex-col items-center gap-8 mb-24">
          <a 
            href="https://play.google.com/store/apps/details?id=turbo.mx.anuncios"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-5 bg-white text-black px-14 py-7 rounded-[3rem] font-black transition-all hover:scale-105 hover:shadow-[0_20px_80px_rgba(56,189,248,0.4)] active:scale-95"
          >
            <div className="bg-black text-white p-2.5 rounded-2xl group-hover:rotate-[15deg] transition-transform duration-500">
              <Play className="w-9 h-9 fill-current" />
            </div>
            <div className="text-left leading-tight">
              <span className="text-[12px] uppercase block font-bold opacity-40 tracking-[0.2em]">Disponible en</span>
              <span className="text-3xl tracking-tighter">Google Play</span>
            </div>
          </a>
          
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group"
          >
            Explorar Tecnología <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* App Mockup */}
        <div className="relative w-full max-w-4xl flex justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-20 animate-float">
             <div className="glass p-5 md:p-7 rounded-[5rem] border border-white/10 shadow-[0_60px_120px_rgba(0,0,0,0.7)] relative overflow-hidden backdrop-blur-3xl">
                <img 
                  src={mainScreenshot} 
                  alt="TurboMX Interface" 
                  className="w-[300px] md:w-[420px] rounded-[3.8rem] shadow-inner border border-white/5"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
             </div>

             {/* Floating UI Elements */}
             <div className="absolute -top-10 -right-16 glass px-8 py-5 rounded-3xl hidden lg:flex items-center gap-4 border-emerald-500/20 shadow-2xl shadow-emerald-500/5">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Estado</span>
                  <span className="text-sm font-black text-white uppercase tracking-tighter">Servidores Online</span>
                </div>
             </div>

             <div className="absolute -bottom-6 -left-16 glass px-8 py-6 rounded-[2.5rem] hidden lg:flex flex-col border-sky-500/20 shadow-2xl">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Red Global</span>
                <span className="text-2xl font-black text-sky-400 tracking-tighter">Latinoamérica</span>
                <div className="flex gap-1 mt-2">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full opacity-40"></div>
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full opacity-70"></div>
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(0.8deg); }
        }
        @keyframes title-pop {
          0% { transform: scale(0.95) translateY(20px); opacity: 0; }
          100% { transform: scale(1) translateY(0px); opacity: 1; }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .animate-title {
          animation: title-pop 1s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default Hero;