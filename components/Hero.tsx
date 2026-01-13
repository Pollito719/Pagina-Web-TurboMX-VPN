import React from 'react';
import { Play, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const mainScreenshot = "https://www.dropbox.com/scl/fi/0oem5f1lstj29mje78upc/Screenshot_20251217_180952_Turbo-MX-VPN.jpg?rlkey=vm0r9862smam9mrnrk586k158&st=64lgij8j&raw=1";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden grid-pattern">
      {/* Luces de fondo dinámicas */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-500/20 blur-[150px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-black mb-8 uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(56,189,248,0.1)]">
          <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-ping"></span>
          Infraestructura de Grado Militar
        </div>
        
        {/* Título Principal */}
        <h1 className="text-6xl md:text-[140px] font-black leading-[0.8] tracking-tighter mb-8 animate-title drop-shadow-2xl">
          TURBO<span className="text-gradient">MX</span><br />
          <span className="text-white">VPN</span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-2xl mb-12 max-w-2xl leading-relaxed font-medium">
          Privacidad radical con la potencia de túneles SSH. 
          Navega, juega y transmite contenido global sin limitaciones.
        </p>

        {/* Botón de Play Store - Estilo Profesional */}
        <div className="flex flex-col items-center gap-12 mb-20">
          <a 
            href="https://play.google.com/store/apps/details?id=turbo.mx.anuncios"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-5 bg-[#000000] text-white pl-6 pr-10 py-4 rounded-2xl transition-all hover:scale-105 hover:shadow-[0_20px_50px_rgba(56,189,248,0.3)] border border-white/10"
          >
            <div className="p-2 transition-transform group-hover:rotate-12">
               <svg viewBox="0 0 512 512" className="w-10 h-10 fill-current">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.3 18-28.5-1.2-40.8zM325.3 277.7l-60.1 60.1L104.6 499l280.8-161.2-60.1-60.1z"></path>
               </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest leading-none mb-1">Disponible en</p>
              <p className="text-2xl font-bold tracking-tight leading-none">Google Play</p>
            </div>
          </a>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            <div className="flex items-center gap-3 text-slate-500 font-black uppercase tracking-widest text-[10px]">
              <ShieldCheck className="text-emerald-500" size={20} /> Sin Registros
            </div>
            <div className="flex items-center gap-3 text-slate-500 font-black uppercase tracking-widest text-[10px]">
              <Zap className="text-sky-500" size={20} /> Low Latency
            </div>
          </div>
        </div>

        {/* Preview de la App */}
        <div className="relative w-full max-w-4xl mt-10">
          <div className="absolute -inset-10 bg-sky-500/10 blur-[100px] rounded-full"></div>
          <div className="relative z-20 animate-float flex justify-center">
             <div className="glass p-5 rounded-[4.5rem] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
                <img 
                  src={mainScreenshot} 
                  alt="TurboMX App Interface" 
                  className="w-[300px] md:w-[380px] rounded-[3.5rem] border border-white/5"
                />
             </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes title-pop {
          0% { transform: scale(0.9) translateY(50px); opacity: 0; }
          100% { transform: scale(1) translateY(0px); opacity: 1; }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-title {
          animation: title-pop 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </section>
  );
};

export default Hero;