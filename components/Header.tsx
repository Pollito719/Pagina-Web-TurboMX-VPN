import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    { name: 'Inicio', href: '#' },
    { name: 'Misión', href: '#about' },
    { name: 'Tecnología', href: '#technology' },
    { name: 'Preguntas', href: '#faq' },
    { name: 'Contacto', href: '#contact' },
  ];

  const appIcon = "https://www.dropbox.com/scl/fi/h8fxjyge9nqnle2jbnj7s/turbo.png?rlkey=nnhw7iy2blbssn7wyxasrvp7t&st=7njbu0cq&raw=1";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-effect py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={(e) => handleNavClick(e as any, '#')}>
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <img src={appIcon} alt="TurboMX VPN Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-black tracking-tighter">
            Turbo<span className="text-sky-500">MX</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs uppercase tracking-widest font-black text-slate-400 hover:text-white transition-colors relative group"
            >
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
            Obtener App
          </a>
        </nav>

        <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-effect border-b border-white/10 py-10 px-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-black uppercase tracking-widest text-slate-300 hover:text-sky-400 transition-colors"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://play.google.com/store/apps/details?id=turbo.mx.anuncios"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 text-white py-5 rounded-2xl text-center font-black uppercase tracking-widest shadow-xl"
            >
              Descargar Ahora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;