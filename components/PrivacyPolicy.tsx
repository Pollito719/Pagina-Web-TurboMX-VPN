import React from 'react';
import { ShieldAlert, Lock, EyeOff, ShieldCheck } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section id="privacy" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-5xl mx-auto glass-effect p-10 md:p-16 rounded-[3rem] border-white/5 shadow-2xl">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-sky-500/10 rounded-2xl border border-sky-500/20">
            <ShieldAlert className="text-sky-500 w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black">Política de Privacidad Completa</h2>
        </div>
        
        <div className="space-y-12 text-slate-300 leading-relaxed text-lg">
          <section>
            <p className="mb-4">Última actualización: {new Date().toLocaleDateString()}</p>
            <p>
              En <strong>TurboMX VPN</strong>, accesible desde nuestra aplicación móvil y sitio web oficial, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene tipos de información que son recopilados y registrados por TurboMX VPN y cómo la utilizamos.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-black text-sky-400 mb-6 flex items-center gap-3 uppercase tracking-wider">
              <Lock className="w-5 h-5" />
              Recopilación de Información
            </h3>
            <p className="mb-4">
              TurboMX VPN opera bajo una estricta política de <strong>No-Logs</strong> (Sin registros). Esto significa:
            </p>
            <ul className="list-disc pl-6 space-y-4 mb-6">
              <li>No recopilamos información sobre los sitios web que visita ni las aplicaciones que utiliza mientras está conectado a nuestra VPN.</li>
              <li>No registramos su dirección IP de origen ni la dirección IP del servidor VPN que utiliza.</li>
              <li>No almacenamos marcas de tiempo de conexión ni la duración de sus sesiones.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-black text-sky-400 mb-6 flex items-center gap-3 uppercase tracking-wider">
              <EyeOff className="w-5 h-5" />
              Publicidad de Terceros (Google AdSense/AdMob)
            </h3>
            <p className="mb-6">
              Para mantener nuestro servicio gratuito, utilizamos publicidad de terceros. Google, como proveedor externo, utiliza cookies para publicar anuncios en nuestra aplicación y sitio. El uso de la cookie de DART por parte de Google le permite servir anuncios a nuestros usuarios basados en su visita a nuestros sitios y otros sitios en Internet.
            </p>
            <div className="bg-slate-800/50 border border-white/5 p-6 rounded-2xl">
              <p className="text-sm">
                Los usuarios pueden optar por no participar en el uso de la cookie de DART visitando la Política de privacidad de la red de contenido y anuncios de Google en la siguiente URL: <a href="https://policies.google.com/technologies/ads" className="text-sky-500 underline">https://policies.google.com/technologies/ads</a>
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-black text-sky-400 mb-6 flex items-center gap-3 uppercase tracking-wider">
              <ShieldCheck className="w-5 h-5" />
              Seguridad de los Datos
            </h3>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la pérdida accidental o la destrucción. Utilizamos cifrado AES de 256 bits para el tráfico de datos y protocolos SSH/UDP optimizados para garantizar que la información transmitida sea ilegible para terceros.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;