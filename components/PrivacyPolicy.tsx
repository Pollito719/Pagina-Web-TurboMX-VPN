
import React from 'react';
import { ShieldAlert } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section id="privacy" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto glass-effect p-10 md:p-16 rounded-[3rem] border-white/5 shadow-2xl">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-sky-500/10 rounded-2xl border border-sky-500/20">
            <ShieldAlert className="text-sky-500 w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black">Política de Privacidad</h2>
        </div>
        
        <div className="space-y-12 text-slate-300 leading-relaxed text-lg">
          <section>
            <h3 className="text-2xl font-black text-white mb-6">Politica de Privacidad VPN</h3>
            <p>
              En TurboMX VPN, su privacidad es nuestra prioridad absoluta. A continuación detallamos cómo manejamos sus datos.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-black text-sky-400 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-sky-500 rounded-full"></span>
              === Uso de la VPN ===
            </h3>
            <p className="mb-6">
              Nuestra Aplicación de TurboMX VPN es basada en conexiones de Internet mediante Protocolos de conexion TCP y UDP que permiten al usuario navegar sin dificultad.
            </p>
            <div className="bg-sky-500/10 border border-sky-500/20 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-sky-500"></div>
              <p className="text-sky-100 font-bold italic leading-relaxed">
                "Pero no recopilamos ni registramos datos de Trafico o actividad de navegación de usuarios individuales conectados a nuestro Servicio SSH-VPN. Estamos Comprometidos con su Privacidad."
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-black text-sky-400 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-sky-500 rounded-full"></span>
              === Google AdMob ===
            </h3>
            <p className="mb-6">
              Permitimos que los servicios de publicidad de terceros (por ejemplo Admob) publiquen Anuncios y recompilen cierta información anónima cuando utiliza nuestra aplicación. Estos servicios Pueden Usar información anonima.
            </p>
            <p className="p-6 bg-slate-800/50 rounded-2xl border border-white/5">
              Como su ID de publicidad de Google, Actividad de navegación, Ubicación, las especificaciones de su dispositivo y otros datos Técnicos relacionados con él, Para Proporcionar Anuncios.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
