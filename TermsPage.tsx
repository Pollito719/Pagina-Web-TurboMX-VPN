import React, { useEffect } from 'react';
import TermsOfService from './components/TermsOfService';

const TermsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <div className="bg-slate-900/50 py-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-black text-white mb-6">Términos y <span className="text-sky-500">Condiciones</span></h1>
          <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            El marco legal que rige el uso de nuestros servicios y aplicaciones. Por favor, léelos detenidamente.
          </p>
        </div>
      </div>
      <TermsOfService />
    </div>
  );
};

export default TermsPage;
