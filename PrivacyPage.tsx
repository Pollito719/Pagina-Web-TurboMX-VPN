import React, { useEffect } from 'react';
import PrivacyPolicy from './components/PrivacyPolicy';

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <div className="bg-slate-900/50 py-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-black text-white mb-6">Aviso de <span className="text-sky-500">Privacidad</span></h1>
          <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            Tu privacidad es nuestra prioridad absoluta. Aquí detallamos cómo protegemos tus datos y qué información (no) recolectamos.
          </p>
        </div>
      </div>
      <PrivacyPolicy />
      <section className="py-20 px-6 bg-[#020617]">
        <div className="max-w-4xl mx-auto glass p-12 rounded-[3rem] border-white/5">
          <h2 className="text-2xl font-black text-white mb-6">Cumplimiento GDPR y LFPDPPP</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            TurboMX VPN cumple estrictamente con el Reglamento General de Protección de Datos (GDPR) de la Unión Europea y la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de México.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Nuestros servidores están configurados para no almacenar registros de IP, marcas de tiempo de conexión o historial de navegación. La poca información técnica que procesamos se utiliza exclusivamente para la optimización de la carga del servidor en tiempo real y se elimina inmediatamente después de que la sesión finaliza.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
