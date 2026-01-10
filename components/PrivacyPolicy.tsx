import React from 'react';
import { ShieldAlert, Lock, EyeOff, ShieldCheck, Database, Server, Info } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section id="privacy" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-5xl mx-auto glass-effect p-10 md:p-16 rounded-[3rem] border-white/5 shadow-2xl">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-sky-500/10 rounded-2xl border border-sky-500/20">
            <ShieldAlert className="text-sky-500 w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black">Política de Transparencia y Datos</h2>
        </div>
        
        <div className="space-y-12 text-slate-300 leading-relaxed text-lg">
          <section>
            <div className="flex items-start gap-4 p-6 bg-sky-500/5 border border-sky-500/20 rounded-2xl mb-8">
               <Info className="text-sky-500 flex-shrink-0 mt-1" size={20} />
               <p className="text-sm italic">
                  Este sitio cumple con los estándares globales de protección de datos (GDPR/CCPA) y las políticas de calidad de contenido de Google. Al utilizar TurboMX VPN, usted acepta los términos aquí descritos que garantizan la integridad de su información.
               </p>
            </div>
            <p className="mb-4 font-bold text-sky-500 uppercase tracking-widest text-xs">Fecha de revisión: {new Date().toLocaleDateString()}</p>
            <p>
              En <strong>TurboMX VPN</strong>, no consideramos la privacidad como un producto, sino como el derecho fundamental sobre el cual se construye nuestra tecnología. Este documento detalla nuestros procesos técnicos de manejo de datos para asegurar que usted tenga visibilidad total sobre el funcionamiento de nuestra red.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3 uppercase tracking-wider border-l-4 border-sky-500 pl-4">
              <Database className="w-5 h-5 text-sky-500" />
              Recolección Mínima de Datos Técnicos
            </h3>
            <p className="mb-6">
              Para garantizar la calidad del servicio y la estabilidad de la red, recolectamos únicamente información técnica no identificable:
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 mb-6 text-slate-400">
              <li className="flex items-center gap-2 bg-white/5 p-3 rounded-lg text-sm border border-white/5">
                <ShieldCheck size={14} className="text-emerald-500" /> Versión de la App instalada
              </li>
              <li className="flex items-center gap-2 bg-white/5 p-3 rounded-lg text-sm border border-white/5">
                <ShieldCheck size={14} className="text-emerald-500" /> Carga de CPU del servidor
              </li>
              <li className="flex items-center gap-2 bg-white/5 p-3 rounded-lg text-sm border border-white/5">
                <ShieldCheck size={14} className="text-emerald-500" /> Ancho de banda total consumido
              </li>
              <li className="flex items-center gap-2 bg-white/5 p-3 rounded-lg text-sm border border-white/5">
                <ShieldCheck size={14} className="text-emerald-500" /> Reportes de errores de protocolo
              </li>
            </ul>
            <p className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-sm text-amber-400">
               <strong>IMPORTANTE:</strong> Nunca vinculamos estos datos técnicos con su identidad personal, número telefónico o dirección de correo electrónico.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3 uppercase tracking-wider border-l-4 border-sky-500 pl-4">
              <EyeOff className="w-5 h-5 text-sky-500" />
              Socio Publicitario (Google AdSense)
            </h3>
            <p className="mb-6">
              TurboMX VPN es un servicio de libre acceso. Para mantener la sostenibilidad de nuestra infraestructura de servidores globales de alta velocidad, mostramos publicidad gestionada por Google AdSense. 
            </p>
            <div className="bg-slate-800/50 border border-white/5 p-8 rounded-3xl">
              <p className="text-sm mb-4">
                Google utiliza cookies para publicar anuncios basados en las visitas previas de un usuario a nuestro sitio web o a otros sitios web. Los usuarios pueden informarse sobre cómo inhabilitar el uso de la cookie de DART a través del sitio oficial de Google.
              </p>
              <a href="https://policies.google.com/technologies/ads" className="text-sky-500 text-sm font-bold hover:underline" target="_blank" rel="noopener noreferrer">Ir a Políticas de Google →</a>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3 uppercase tracking-wider border-l-4 border-sky-500 pl-4">
              <Server className="w-5 h-5 text-sky-500" />
              Ubicación de Servidores y Jurisdicción
            </h3>
            <p>
              Nuestra infraestructura principal reside en centros de datos con certificaciones ISO 27001. Al operar de forma descentralizada, garantizamos que ninguna entidad gubernamental única tenga acceso físico a todos los nodos de la red simultáneamente, reforzando la seguridad de los túneles de datos creados por nuestros usuarios.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;