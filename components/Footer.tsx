import React from 'react';
import { Youtube, MessageCircle, Play, ArrowUp, Mail, Shield, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href === '#') {
      scrollToTop();
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const appIcon = "https://www.dropbox.com/scl/fi/h8fxjyge9nqnle2jbnj7s/turbo.png?rlkey=nnhw7iy2blbssn7wyxasrvp7t&st=7njbu0cq&raw=1";

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border border-sky-400/30">
                <img src={appIcon} alt="TurboMX VPN Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-3xl font-black tracking-tighter">
                Turbo<span className="text-sky-500">MX</span> <span className="text-white/80 font-bold">VPN</span>
              </span>
            </div>
            <p className="text-slate-500 text-lg mb-10 max-w-sm leading-relaxed">
              Líderes en ciberseguridad móvil regional. Proporcionamos túneles cifrados de alto rendimiento para garantizar que tu derecho a la privacidad sea respetado en cada conexión.
            </p>
            <div className="flex gap-4">
               <a href="https://t.me/internetGratisMexico" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 rounded-2xl hover:bg-sky-600 transition-all shadow-xl group" aria-label="Telegram">
                  <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
               </a>
               <a href="https://youtube.com/shorts/54joHbjYCho?si=V37XU3_4euJzOw6o" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 rounded-2xl hover:bg-red-600 transition-all shadow-xl group" aria-label="YouTube">
                  <Youtube size={22} className="group-hover:scale-110 transition-transform" />
               </a>
               <a href="mailto:alexishdzcabnas889@gmail.com" className="p-4 bg-slate-900 rounded-2xl hover:bg-emerald-600 transition-all shadow-xl group" aria-label="Email">
                  <Mail size={22} className="group-hover:scale-110 transition-transform" />
               </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-500 mb-8">Ecosistema Legal</h4>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li><a href="#privacy" onClick={(e) => handleNavClick(e, '#privacy')} className="hover:text-white transition-colors">Aviso de Privacidad</a></li>
              <li><a href="#terms" onClick={(e) => handleNavClick(e, '#terms')} className="hover:text-white transition-colors">Términos Legales</a></li>
              <li><a href="#technology" onClick={(e) => handleNavClick(e, '#technology')} className="hover:text-white transition-colors">Documentación Técnica</a></li>
              <li><a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-white transition-colors">Base de Conocimiento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-500 mb-8">Nuestra Seguridad</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-400">
                <ShieldCheck size={18} className="text-emerald-500" />
                <span className="text-sm font-bold">Cifrado AES-256</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <ShieldCheck size={18} className="text-emerald-500" />
                <span className="text-sm font-bold">Sin registros de logs</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <ShieldCheck size={18} className="text-emerald-500" />
                <span className="text-sm font-bold">Nodos regionales</span>
              </div>
              <div className="mt-6 inline-block bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <span className="text-[10px] text-slate-500 block mb-1 font-black">ESTADO DE SERVIDORES</span>
                <span className="text-emerald-400 text-xs font-black flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  OPERATIVO AL 100%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <p className="text-slate-600 font-bold text-xs uppercase tracking-widest">
              © {new Date().getFullYear()} TurboMX VPN Global
            </p>
            <span className="hidden md:block w-1.5 h-1.5 bg-slate-800 rounded-full"></span>
            <p className="text-slate-600 font-bold text-xs uppercase tracking-widest">Hecho en México con Pasión</p>
          </div>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-slate-500 hover:text-white transition-all font-black uppercase tracking-[0.2em] text-[10px]"
          >
            VOLVER AL INICIO
            <div className="p-3 bg-slate-900 rounded-xl border border-white/5 group-hover:bg-slate-800 transition-colors">
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;