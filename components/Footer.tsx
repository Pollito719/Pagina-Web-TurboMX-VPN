import React from 'react';
import { Youtube, MessageCircle, Play, ArrowUp } from 'lucide-react';

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
        <div className="grid md:grid-cols-4 gap-16 mb-20">
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
              Dedicados a proporcionar la mejor experiencia de navegación segura en México. Sin registros, sin límites, solo velocidad turbo con TurboMX VPN.
            </p>
            <div className="flex gap-5">
               <a href="https://t.me/internetGratisMexico" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 rounded-2xl hover:bg-sky-600 transition-all hover:-translate-y-1 shadow-lg" aria-label="Telegram">
                  <MessageCircle size={24} />
               </a>
               <a href="https://youtube.com/shorts/54joHbjYCho?si=V37XU3_4euJzOw6o" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 rounded-2xl hover:bg-red-600 transition-all hover:-translate-y-1 shadow-lg" aria-label="YouTube">
                  <Youtube size={24} />
               </a>
               <a href="https://play.google.com/store/apps/details?id=turbo.mx.anuncios" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 rounded-2xl hover:bg-white hover:text-black transition-all hover:-translate-y-1 shadow-lg" aria-label="Play Store">
                  <Play size={24} fill="currentColor" />
               </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-xl mb-8 uppercase tracking-widest text-slate-400 text-sm">Información Legal</h4>
            <ul className="space-y-5 text-slate-500 font-bold">
              <li>
                <a 
                  href="#privacy" 
                  onClick={(e) => handleNavClick(e, '#privacy')}
                  className="hover:text-white transition-colors"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a 
                  href="#terms" 
                  onClick={(e) => handleNavClick(e, '#terms')}
                  className="hover:text-white transition-colors"
                >
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => handleNavClick(e, '#faq')}
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="hover:text-sky-500 transition-colors"
                >
                  Soporte
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xl mb-8 uppercase tracking-widest text-slate-400 text-sm">Oficial</h4>
            <p className="text-slate-500 mb-6 leading-relaxed">TurboMX VPN es un proyecto independiente enfocado en la ciberseguridad móvil.</p>
            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <span className="text-xs text-slate-500 block mb-1">Versión App</span>
              <span className="text-white font-bold">1.2.5 (Última versión)</span>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-600 font-bold text-sm">
            © {new Date().getFullYear()} TurboMX VPN. Todos los derechos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-slate-500 hover:text-white transition-colors font-black uppercase tracking-widest text-xs"
          >
            Volver Arriba
            <div className="p-3 bg-slate-900 rounded-xl border border-white/5 group-hover:bg-slate-800 transition-colors">
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;