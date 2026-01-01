import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-5xl mx-auto glass-effect border border-white/20 p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h4 className="text-white font-bold text-lg mb-2">Aviso de Privacidad y Cookies 🍪</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Utilizamos cookies propias y de terceros (como Google AdSense) para mejorar su experiencia y mostrar anuncios relevantes. Al continuar navegando, acepta nuestra política de cookies.
          </p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={acceptCookies}
            className="whitespace-nowrap bg-sky-600 hover:bg-sky-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg"
          >
            Aceptar todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;