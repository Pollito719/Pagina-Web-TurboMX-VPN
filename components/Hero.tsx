
import React from 'react';
import { Play, MessageCircle, ShieldCheck, Youtube } from 'lucide-react';

const Hero: React.FC = () => {
  // Main image requested by the user
  const mainImage = "https://www.dropbox.com/scl/fi/0oem5f1lstj29mje78upc/Screenshot_20251217_180952_Turbo-MX-VPN.jpg?rlkey=vm0r9862smam9mrnrk586k158&st=64lgij8j&raw=1";

  return (
    <section className="relative pt-32 lg:pt-48 pb-12 px-6 overflow-hidden">
      {/* Background blobs for visual flair */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-sky-500/10 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.95] tracking-tight mb-8">
            Turbo<span className="text-sky-500">MX</span> <br /> <span className="gradient-text">VPN</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Navegación profesional basada en protocolos TCP y UDP que garantizan velocidad extrema y privacidad absoluta. Conéctate hoy al servicio SSH-VPN más estable.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 justify-center mb-16">
            <a 
              href="https://play.google.com/store/apps/details?id=turbo.mx.anuncios"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black hover:bg-slate-100 px-8 py-4 rounded-2xl font-black text-base transition-all transform hover:scale-105 shadow-2xl shadow-white/10"
            >
              <Play className="w-5 h-5 fill-current" />
              Play Store
            </a>
            
            <a 
              href="https://t.me/internetGratisMexico"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-sky-600 hover:bg-sky-500 text-white px-8 py-4 rounded-2xl font-black text-base transition-all shadow-lg shadow-sky-600/20"
            >
              <MessageCircle className="w-5 h-5" />
              Telegram
            </a>

            <a 
              href="https://youtube.com/shorts/54joHbjYCho?si=V37XU3_4euJzOw6o"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-2xl font-black text-base transition-all shadow-lg shadow-red-600/20"
            >
              <Youtube className="w-5 h-5" />
              YouTube
            </a>
          </div>
        </div>

        {/* Main Image placed below the header content */}
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="relative z-10 animate-float">
            <div className="glass-effect p-3 md:p-6 rounded-[3rem] md:rounded-[4rem] border border-white/20 shadow-2xl transition-all duration-700 hover:scale-[1.02]">
               <img 
                 src={mainImage} 
                 alt="TurboMX App Interface" 
                 className="rounded-[2.5rem] md:rounded-[3rem] w-full shadow-inner object-cover border border-white/5"
               />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -right-8 md:-right-16 top-1/4 glass-effect p-4 md:p-6 rounded-3xl border border-sky-400/30 animate-pulse hidden md:block backdrop-blur-xl">
              <ShieldCheck className="text-sky-400 w-8 h-8 md:w-12 md:h-12" />
              <div className="mt-2 text-[10px] md:text-xs font-black uppercase text-sky-400">Protección Activa</div>
            </div>
            
            <div className="absolute -left-8 md:-left-20 bottom-1/4 glass-effect px-4 py-3 md:px-8 md:py-5 rounded-3xl border border-indigo-400/30 hidden md:block backdrop-blur-xl">
               <div className="flex items-center gap-2 md:gap-3">
                 <div className="w-2 h-2 md:w-3 md:h-3 bg-emerald-500 rounded-full animate-ping"></div>
                 <span className="text-white font-black text-sm md:text-base">Servidor Activo</span>
               </div>
               <span className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">Protocolo TCP/UDP</span>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
