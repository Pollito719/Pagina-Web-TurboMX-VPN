import React, { useState, useEffect } from 'react';
import { Menu, X, Book, Shield, Info, HelpCircle, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const navLinks = [
    { name: 'Inicio', href: '#', icon: <Shield size={16}/> },
    { name: 'Documentación', href: '#resources', icon: <Book size={16}/> },
    { name: 'Tecnología', href: '#technology', icon: <Info size={16}/> },
    { name: 'Ayuda', href: '#faq', icon: <HelpCircle size={16}/> },
    { name: 'Soporte', href: '#contact', icon: <Mail size={16}/> },
  ];

  const appIcon = "https://www.dropbox.com/scl/fi/h8fxjyge9nqnle2jbnj7s/turbo.png?rlkey=nnhw7iy2blbssn7wyxasrvp7t&st=7njbu0cq&raw=1";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={(e) => handleNavClick(e as any, '#')}>
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <img src={appIcon} alt="TurboMX VPN Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-2xl font-black tracking-tighter">
            Turbo<span className="text-sky-500">MX</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-slate-400 hover:text-white transition-all relative group"
            >
              <span className="text-sky-500 opacity-50 group-hover:opacity-100">{link.icon}</span>
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="https://play.google.com/store/apps/details?id=turbo.mx.anuncios"
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-white text-black px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg hover:bg-sky-500 hover:text-white transform hover:-translate-y-0.5"
          >
            Play Store
          </a>
        </nav>

        <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil optimizado */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-slate-950/95 backdrop-blur-3xl z-[60] flex flex-col p-10 animate-in fade-in duration-300">
          <div className="flex justify-between items-center mb-16">
            <span className="text-2xl font-black italic">TurboMX</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-white/5 rounded-xl"><X size={24}/></button>
          </div>
          <div className="flex flex-col gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-3xl font-black uppercase tracking-tighter text-slate-300 flex items-center gap-4"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span className="text-sky-500">{link.icon}</span>
                {link.name}
              </a>
            ))}
            <a 
              href="https://play.google.com/store/apps/details?id=turbo.mx.anuncios"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 text-white py-6 rounded-3xl text-center text-xl font-black uppercase tracking-widest shadow-2xl mt-10"
            >
              Descargar App
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;