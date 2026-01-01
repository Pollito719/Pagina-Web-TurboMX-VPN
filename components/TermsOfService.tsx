import React from 'react';
import { FileText } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <section id="terms" className="py-24 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto glass-effect p-10 md:p-16 rounded-[3rem] border-white/5 shadow-2xl">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20">
            <FileText className="text-amber-500 w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black">Términos de Servicio</h2>
        </div>
        
        <div className="space-y-8 text-slate-300 leading-relaxed text-lg">
          <section>
            <h3 className="text-xl font-black text-white mb-4 underline decoration-amber-500/30">1. Aceptación de Términos</h3>
            <p>
              Al descargar y utilizar TurboMX VPN, usted acepta cumplir con estos términos. El servicio se proporciona "tal cual" y su uso es bajo su propia responsabilidad.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-black text-white mb-4 underline decoration-amber-500/30">2. Uso Permitido</h3>
            <p>
              TurboMX VPN es una herramienta diseñada para mejorar la privacidad y seguridad en línea. Queda estrictamente prohibido el uso del servicio para actividades ilegales que violen las leyes locales o internacionales.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-black text-white mb-4 underline decoration-amber-500/30">3. Limitación de Responsabilidad</h3>
            <p>
              No nos hacemos responsables por el mal uso de la aplicación o por interrupciones en el servicio ajenas a nuestra infraestructura. La estabilidad de la conexión puede variar según el proveedor de internet del usuario.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;