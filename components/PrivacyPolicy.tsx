import React from 'react';
import { ShieldAlert, Lock, EyeOff, ShieldCheck, Database, Server } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section id="privacy" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-5xl mx-auto glass-effect p-10 md:p-16 rounded-[3rem] border-white/5 shadow-2xl">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-sky-500/10 rounded-2xl border border-sky-500/20">
            <ShieldAlert className="text-sky-500 w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black">Política de Privacidad y Cookies</h2>
        </div>
        
        <div className="space-y-12 text-slate-300 leading-relaxed text-lg">
          <section>
            <p className="mb-4 font-bold text-sky-500">Última actualización: {new Date().toLocaleDateString()}</p>
            <p>
              En <strong>TurboMX VPN</strong>, la privacidad de nuestros usuarios es el núcleo de nuestra existencia. Esta política detalla qué información recopilamos (y más importante aún, qué NO recopilamos), cómo la protegemos y cómo cumplimos con las normativas internacionales de protección de datos como el RGPD y la CCPA.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3 uppercase tracking-wider border-l-4 border-sky-500 pl-4">
              <Database className="w-5 h-5 text-sky-500" />
              Política de No-Registros (Zero Logs)
            </h3>
            <p className="mb-4">
              TurboMX VPN opera bajo una política técnica estricta que impide el almacenamiento de logs de actividad. No rastreamos, recopilamos ni almacenamos:
            </p>
            <ul className="list-disc pl-6 space-y-4 mb-6 text-slate-400">
              <li>Historial de navegación o consultas DNS.</li>
              <li>Contenido de los datos transmitidos o recibidos.</li>
              <li>Direcciones IP de origen o destino de la conexión.</li>
              <li>Marcas de tiempo de inicio o fin de sesión.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3 uppercase tracking-wider border-l-4 border-sky-500 pl-4">
              <EyeOff className="w-5 h-5 text-sky-500" />
              Publicidad y Cookies de Terceros
            </h3>
            <p className="mb-6">
              Para financiar el mantenimiento de nuestros servidores globales, mostramos anuncios a través de la red de Google AdSense y AdMob. Google puede utilizar cookies de DART para mostrar anuncios basados en intereses. Esto no compromete el cifrado de tu túnel VPN, ya que la publicidad se gestiona fuera del túnel de datos.
            </p>
            <div className="bg-slate-800/50 border border-white/5 p-6 rounded-2xl">
              <p className="text-sm">
                Puedes gestionar tus preferencias de anuncios o deshabilitar las cookies de publicidad personalizada visitando la configuración de anuncios de Google en: <a href="https://adssettings.google.com" className="text-sky-500 underline" target="_blank" rel="noopener noreferrer">https://adssettings.google.com</a>
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3 uppercase tracking-wider border-l-4 border-sky-500 pl-4">
              <Server className="w-5 h-5 text-sky-500" />
              Seguridad de Infraestructura
            </h3>
            <p>
              Nuestros servidores están protegidos por múltiples capas de firewalls y sistemas de detección de intrusos. Los datos en tránsito están cifrados con el protocolo AES-256-GCM, lo que garantiza la integridad y confidencialidad de cada paquete de red enviado a través de TurboMX VPN.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;