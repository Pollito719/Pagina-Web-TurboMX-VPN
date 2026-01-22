import React from 'react';
import { ShieldAlert, Lock, EyeOff, ShieldCheck, Database, Server, Info, Gavel } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section id="privacy" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto glass p-10 md:p-16 rounded-[4rem] border-white/5 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 border-b border-white/5 pb-10">
          <div className="flex items-center gap-5">
            <div className="p-4 bg-sky-500/10 rounded-3xl border border-sky-500/20">
              <ShieldAlert className="text-sky-500 w-10 h-10" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Política de Privacidad Integral</h2>
              <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs mt-2">Cumplimiento GDPR & Google Adsense</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sky-500 font-black text-sm uppercase tracking-widest">Última Revisión</p>
            <p className="text-white font-bold text-lg">{new Date().toLocaleDateString('es-ES', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-1 gap-12 text-slate-300 leading-relaxed text-lg">
          <section className="space-y-6">
            <div className="flex items-start gap-4 p-8 bg-sky-500/5 border border-sky-500/10 rounded-[2.5rem]">
               <Info className="text-sky-500 flex-shrink-0 mt-1" size={24} />
               <p className="text-sm italic">
                  Este portal informativo y de herramientas cumple con las directrices de calidad para editores de Google. El acceso a nuestro contenido técnico es gratuito y se sostiene mediante publicidad responsable.
               </p>
            </div>
            <p>
              En <strong>TurboMX VPN</strong>, entendemos que la privacidad no es una característica opcional, sino un derecho fundamental. Esta política detalla rigurosamente cómo gestionamos su información y su interacción con nuestros servicios publicitarios.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-12">
            <section className="bg-slate-950/40 p-10 rounded-[3rem] border border-white/5">
              <h3 className="text-xl font-black text-white mb-8 flex items-center gap-4 uppercase tracking-wider">
                <EyeOff className="w-6 h-6 text-sky-500" />
                Publicidad y Cookies de Google
              </h3>
              <div className="text-sm space-y-6 text-slate-400">
                <p>
                  Utilizamos Google AdSense para mostrar anuncios. Como proveedor externo, Google utiliza cookies para publicar anuncios en este sitio web.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 flex-shrink-0"></div>
                    <p><strong>Cookie DART de DoubleClick:</strong> Google utiliza la cookie de DART para permitirle a él y a sus socios publicar anuncios basados en las visitas realizadas por los usuarios a TurboMX VPN y a otros sitios de Internet.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 flex-shrink-0"></div>
                    <p><strong>Inhabilitación:</strong> Usted puede inhabilitar el uso de la cookie de DART visitando la política de privacidad de la red publicitaria de Google en <a href="https://policies.google.com/technologies/ads" className="text-sky-400 underline font-bold" target="_blank" rel="noopener">Google Ads Settings</a>.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-slate-950/40 p-10 rounded-[3rem] border border-white/5">
              <h3 className="text-xl font-black text-white mb-8 flex items-center gap-4 uppercase tracking-wider">
                <Database className="w-6 h-6 text-sky-500" />
                Política Estricta de No-Registros
              </h3>
              <p className="text-sm mb-6 text-slate-400">
                Nuestra arquitectura técnica impide físicamente la recolección de logs de actividad. Garantizamos que NO almacenamos:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/5 text-xs font-bold text-slate-300">
                  <ShieldCheck size={14} className="text-emerald-500" /> Historial de URLs visitadas
                </li>
                <li className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/5 text-xs font-bold text-slate-300">
                  <ShieldCheck size={14} className="text-emerald-500" /> Consultas de servidores DNS
                </li>
                <li className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/5 text-xs font-bold text-slate-300">
                  <ShieldCheck size={14} className="text-emerald-500" /> Direcciones IP de origen/destino
                </li>
              </ul>
            </section>
          </div>

          <section className="border-t border-white/5 pt-12">
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-4 uppercase tracking-wider">
              <Gavel className="w-6 h-6 text-sky-500" />
              Marco Legal Internacional
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              TurboMX VPN se alinea con los estándares de privacidad más exigentes, incluyendo el Reglamento General de Protección de Datos (GDPR) de la UE. Al navegar en este portal, usted reconoce y acepta el uso de tecnologías de rastreo necesarias para la personalización de la experiencia publicitaria, siempre bajo los marcos de seguridad aquí descritos.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;