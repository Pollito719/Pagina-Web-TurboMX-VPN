import React from 'react';
import { FileText, Gavel, AlertTriangle, ShieldCheck } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <section id="terms" className="py-24 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto glass-effect p-10 md:p-16 rounded-[3rem] border-white/5 shadow-2xl">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20">
            <FileText className="text-amber-500 w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black">Términos y Condiciones de Uso</h2>
        </div>
        
        <div className="space-y-10 text-slate-300 leading-relaxed text-lg">
          <section>
            <p>Bienvenido a TurboMX VPN. Al acceder a nuestro sitio web o utilizar nuestra aplicación, usted acepta estar sujeto a estos términos de servicio y a todas las leyes y regulaciones aplicables.</p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <Gavel className="text-amber-500 w-5 h-5" />
                1. Licencia de Uso
              </h3>
              <p className="text-sm text-slate-400">
                Se concede permiso para descargar temporalmente una copia de la aplicación para uso personal y no comercial de forma transitoria. Esta es la concesión de una licencia, no una transferencia de título. Bajo esta licencia, usted no puede modificar ni copiar los materiales.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <AlertTriangle className="text-amber-500 w-5 h-5" />
                2. Restricciones de Uso
              </h3>
              <p className="text-sm text-slate-400">
                Usted acepta no utilizar TurboMX VPN para: (a) actividades ilegales; (b) transmitir malware; (c) interferir con la seguridad de la red; (d) violar derechos de propiedad intelectual. El incumplimiento resultará en la terminación inmediata del servicio.
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <ShieldCheck className="text-amber-500 w-5 h-5" />
                3. Propiedad Intelectual
              </h3>
              <p className="text-sm text-slate-400">
                Todo el contenido, logotipos, diseños y software en este sitio son propiedad exclusiva de TurboMX Engineering Research Group y están protegidos por leyes internacionales de derechos de autor.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <FileText className="text-amber-500 w-5 h-5" />
                4. Ley Aplicable
              </h3>
              <p className="text-sm text-slate-400">
                Cualquier reclamo relacionado con TurboMX VPN se regirá por las leyes de la Ciudad de México, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-black text-white mb-4 underline decoration-amber-500/30">3. Exención de Responsabilidad</h3>
            <p>
              Los materiales en TurboMX VPN se proporcionan "tal cual". No ofrecemos garantías, expresas o implícitas, y por la presente renunciamos a todas las demás garantías, incluidas, sin limitación, las garantías implícitas o condiciones de comerciabilidad o idoneidad para un propósito particular.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-black text-white mb-4 underline decoration-amber-500/30">4. Limitaciones</h3>
            <p>
              En ningún caso TurboMX VPN o sus proveedores serán responsables de ningún daño (incluidos, entre otros, los daños por pérdida de datos o beneficios, o debido a la interrupción del negocio) que surja del uso o la imposibilidad de usar el servicio.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;