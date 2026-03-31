import React, { useEffect } from 'react';
import VPNResources from './components/VPNResources';

const ResourcesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <div className="bg-slate-900/50 py-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Documentación <span className="text-sky-500">Técnica</span></h1>
          <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            Whitepapers, guías de implementación y análisis de infraestructura de red para profesionales de TI.
          </p>
        </div>
      </div>
      <VPNResources />
    </div>
  );
};

export default ResourcesPage;
