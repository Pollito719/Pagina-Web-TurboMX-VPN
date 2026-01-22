import React from 'react';
import { BookOpen, ShieldCheck, Zap, Lock, Globe, Server, CheckCircle2, FileText, Share2, ShieldQuestion } from 'lucide-react';

const VPNResources: React.FC = () => {
  return (
    <section id="resources" className="py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Centro de <span className="text-sky-500">Conocimiento Técnico</span></h2>
          <p className="text-slate-400 text-lg max-w-4xl mx-auto leading-relaxed">
            Nuestra biblioteca de recursos está diseñada para educar a los usuarios sobre la arquitectura de red moderna, 
            el cifrado de grado militar y las mejores prácticas en seguridad digital.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            <article className="glass p-12 rounded-[4rem] border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck size={180} />
              </div>
              <header className="mb-8">
                <div className="flex items-center gap-3 text-sky-500 font-black text-xs uppercase tracking-[0.3em] mb-4">
                  <span className="p-2 bg-sky-500/10 rounded-lg"><FileText size={16}/></span>
                  Artículo Técnico #001
                </div>
                <h3 className="text-3xl font-black mb-6">Evolución de los Protocolos de Tunelización: De SSH a V2Ray</h3>
              </header>
              <div className="text-slate-400 space-y-6 leading-relaxed text-lg">
                <p>
                  En el panorama actual de la ciberseguridad, la simple protección por contraseña ya no es suficiente. TurboMX VPN implementa protocolos de <strong>Siguiente Generación (Next-Gen)</strong> que no solo cifran la información, sino que la hacen invisible.
                </p>
                <p>
                  El protocolo <strong>SSH (Secure Shell)</strong> actúa como un túnel blindado. Al encapsular datos dentro de una sesión SSH, utilizamos criptografía asimétrica para el intercambio de llaves. Esto previene ataques de <i>Man-in-the-Middle (MitM)</i>, asegurando que incluso si un atacante intercepta la conexión en un Wi-Fi público, solo vea ruido estadístico ilegible.
                </p>
                <p>
                  Además, exploramos el uso de <strong>V2Ray/VMess</strong>, una tecnología avanzada que permite la ofuscación de tráfico mediante WebSockets y TLS. Esto es vital en regiones con censura estricta, ya que el tráfico de la VPN parece una simple visita a un sitio web seguro (HTTPS).
                </p>
              </div>
              <footer className="mt-10 pt-10 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-4">
                   <span className="text-xs bg-white/5 px-4 py-2 rounded-full font-bold text-slate-500 uppercase">Redes</span>
                   <span className="text-xs bg-white/5 px-4 py-2 rounded-full font-bold text-slate-500 uppercase">Seguridad</span>
                </div>
                <Share2 className="text-slate-600 hover:text-sky-500 cursor-pointer transition-colors" size={20} />
              </footer>
            </article>

            <article className="glass p-12 rounded-[4rem] border-white/5">
              <header className="mb-8 text-indigo-400">
                <div className="flex items-center gap-3 font-black text-xs uppercase tracking-[0.3em] mb-4">
                  <span className="p-2 bg-indigo-500/10 rounded-lg"><Server size={16}/></span>
                  Infraestructura Global
                </div>
                <h3 className="text-3xl font-black mb-6 text-white">Anatomía de un Nodo de Alta Velocidad</h3>
              </header>
              <div className="text-slate-400 space-y-6 leading-relaxed">
                <p>
                  Cada nodo de TurboMX VPN es una unidad de procesamiento dedicada alojada en centros de datos Tier 3 y Tier 4. 
                  A diferencia de las VPN comerciales saturadas, nuestros servidores mantienen una carga de CPU inferior al 40%.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <Zap size={18} className="text-amber-500"/> Optimizador de Latencia
                    </h4>
                    <p className="text-sm">Implementamos algoritmos de control de congestión BBR de Google para maximizar el rendimiento en redes inestables.</p>
                  </div>
                  <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <Lock size={18} className="text-emerald-500"/> Hardware de Seguridad
                    </h4>
                    <p className="text-sm">Nuestros servidores operan únicamente en memoria RAM. Cualquier interrupción física purga instantáneamente todos los datos.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <aside className="space-y-12">
            <div className="bg-gradient-to-br from-sky-600/20 to-indigo-600/20 p-10 rounded-[3rem] border border-white/10">
              <h4 className="text-2xl font-black mb-8 flex items-center gap-3 italic">
                <ShieldQuestion size={24} className="text-sky-500"/> FAQ Técnico
              </h4>
              <div className="space-y-8">
                <div>
                  <h5 className="text-white font-bold mb-2">¿Qué es AES-256-GCM?</h5>
                  <p className="text-sm text-slate-400 leading-relaxed">Es el estándar de cifrado simétrico más seguro disponible, utilizado por agencias gubernamentales para proteger secretos nacionales.</p>
                </div>
                <div>
                  <h5 className="text-white font-bold mb-2">¿Cómo evaden los bloqueos?</h5>
                  <p className="text-sm text-slate-400 leading-relaxed">Mediante el uso de payloads dinámicos y proxies reversos que ocultan la naturaleza del tráfico VPN.</p>
                </div>
              </div>
            </div>

            <div className="glass p-10 rounded-[3rem] border-white/5">
              <div className="w-16 h-16 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-500 mb-6">
                <BookOpen size={32} />
              </div>
              <h4 className="text-xl font-black mb-4 uppercase tracking-tighter">Compromiso con la Verdad</h4>
              <p className="text-sm text-slate-500 leading-relaxed italic">
                "La ciberseguridad es una responsabilidad compartida. Proveemos las herramientas, pero el conocimiento es su verdadera protección."
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default VPNResources;