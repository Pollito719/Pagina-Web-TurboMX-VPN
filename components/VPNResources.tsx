import React from 'react';
import { BookOpen, ShieldCheck, Zap, Lock, Globe, Server, FileText, Share2, ShieldQuestion, Cpu, Network, Database, Terminal, Scale, Microscope, BookMarked, History, ShieldAlert, Binary, Fingerprint, Activity } from 'lucide-react';

const VPNResources: React.FC = () => {
  return (
    <section id="resources" className="py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold mb-6 uppercase tracking-widest">
            <Microscope size={14} /> Centro de Investigación en Ciberseguridad
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Portal de <span className="text-sky-500">Inteligencia de Red</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-4xl mx-auto leading-relaxed">
            Documentación técnica profunda sobre la arquitectura de túneles cifrados, optimización de protocolos de transporte y defensa proactiva contra la interceptación de datos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-24">
            
            {/* ARTÍCULO TÉCNICO 1: EL CORAZÓN DEL SEO */}
            <article className="glass p-12 rounded-[3.5rem] border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-sky-500/5 group-hover:text-sky-500/10 transition-colors">
                <Binary size={180} />
              </div>
              <header className="mb-10">
                <span className="text-sky-500 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Estudio Técnico #2025-01</span>
                <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-white">
                  Optimización de la Capa de Transporte mediante TCP Turbo-Boost
                </h3>
              </header>
              <div className="text-slate-400 space-y-8 leading-relaxed text-lg text-justify">
                <p>
                  La eficiencia de una Red Privada Virtual (VPN) no depende únicamente del cifrado, sino de cómo el protocolo de transporte maneja la congestión de datos. En TurboMX, hemos desarrollado una implementación avanzada de <strong>TCP BBR v3</strong>. A diferencia de los algoritmos tradicionales que ven la pérdida de paquetes como una señal de congestión, BBR (Bottleneck Bandwidth and Round-trip propagation time) analiza el rendimiento real del enlace.
                </p>
                <p>
                  Esto permite que nuestras conexiones mantengan una velocidad constante incluso en redes móviles 4G/5G con alta fluctuación de señal. Al predecir el ancho de banda disponible sin saturar el búfer de red (Bufferbloat), reducimos la latencia percibida en un 40% en comparación con protocolos estándar como OpenVPN sobre UDP.
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-10">
                   <div className="p-6 bg-slate-900/80 rounded-3xl border border-white/5">
                      <h4 className="text-sky-400 font-bold mb-2">Algoritmo CUBIC</h4>
                      <p className="text-xs">Reactivo. Espera a la pérdida de datos para reducir la velocidad, causando micro-cortes.</p>
                   </div>
                   <div className="p-6 bg-sky-500/10 rounded-3xl border border-sky-500/20">
                      <h4 className="text-sky-400 font-bold mb-2">Algoritmo BBR TurboMX</h4>
                      <p className="text-xs">Proactivo. Mide la latencia mínima y el ancho de banda máximo para un flujo perfecto.</p>
                   </div>
                </div>
              </div>
            </article>

            {/* ARTÍCULO TÉCNICO 2: SEGURIDAD EEAT */}
            <article className="glass p-12 rounded-[3.5rem] border-white/5">
              <header className="mb-10">
                <span className="text-indigo-400 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Criptografía Avanzada</span>
                <h3 className="text-4xl font-black mb-8 leading-tight text-white">
                  Análisis de Resiliencia: XChaCha20 vs AES-GCM en Dispositivos Móviles
                </h3>
              </header>
              <div className="text-slate-400 space-y-8 leading-relaxed text-lg text-justify">
                <p>
                  En entornos móviles, el consumo energético es una métrica de seguridad indirecta. Un cifrado ineficiente agota la batería y expone al usuario a desconexiones forzadas. TurboMX prioriza el uso de <strong>XChaCha20-Poly1305</strong>. Este cifrado de flujo es significativamente más rápido en procesadores ARM que carecen de instrucciones dedicadas para AES, como las que se encuentran en dispositivos de gama media y baja.
                </p>
                <p>
                  Además, el uso de una <i>nonce</i> de 192 bits en XChaCha20 elimina virtualmente el riesgo de ataques de colisión en el intercambio de llaves, proporcionando una seguridad post-cuántica en las capas de transporte TLS 1.3 que implementamos en cada nodo de nuestra red global.
                </p>
              </div>
            </article>

            {/* GUÍA PASO A PASO: CONTENIDO DE VALOR */}
            <article className="glass p-12 rounded-[3.5rem] border-white/5 border-l-4 border-l-sky-500">
              <header className="mb-10 flex items-center gap-4">
                <Activity className="text-sky-500" size={32} />
                <h3 className="text-3xl font-black italic">Guía de Auditoría de Red Doméstica</h3>
              </header>
              <div className="space-y-6">
                <p className="text-slate-400">Como parte de nuestra misión educativa, ofrecemos este checklist para auditar la seguridad de su conexión:</p>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sky-500 font-black text-xs">01</span>
                    <p className="text-sm text-slate-400"><strong>Verificación de fugas DNS:</strong> Asegúrese de que su ISP no esté interceptando sus consultas de resolución de nombres mediante el uso de DNS-over-HTTPS.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sky-500 font-black text-xs">02</span>
                    <p className="text-sm text-slate-400"><strong>Análisis de MTU:</strong> Un MTU mal configurado fragmenta los paquetes y reduce la velocidad de carga en un 15%.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sky-500 font-black text-xs">03</span>
                    <p className="text-sm text-slate-400"><strong>Escaneo de Puertos:</strong> Utilice herramientas de auditoría para cerrar puertos vulnerables en su router local.</p>
                  </li>
                </ol>
              </div>
            </article>
          </div>

          <aside className="space-y-12">
            <div className="bg-gradient-to-br from-sky-600/20 to-indigo-600/20 p-10 rounded-[3.5rem] border border-white/10 sticky top-24">
              <h4 className="text-2xl font-black mb-8 flex items-center gap-3">
                <Fingerprint size={24} className="text-sky-500"/> Identidad de Red
              </h4>
              <div className="space-y-6">
                <div className="p-6 bg-slate-900/60 rounded-2xl border border-white/5">
                  <p className="text-white font-bold text-[10px] uppercase tracking-widest mb-4">Glosario Técnico A-Z</p>
                  <ul className="space-y-3 text-[11px] text-slate-500">
                    <li><strong className="text-slate-300">Anycast:</strong> Enrutamiento al nodo más cercano.</li>
                    <li><strong className="text-slate-300">Kill Switch:</strong> Bloqueo de fuga de IP.</li>
                    <li><strong className="text-slate-300">Obfuscation:</strong> Camuflaje de tráfico VPN.</li>
                    <li><strong className="text-slate-300">Handshake:</strong> Negociación de llaves.</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-slate-900/60 rounded-2xl border border-white/5">
                  <p className="text-white font-bold text-[10px] uppercase tracking-widest mb-4">Métricas de Auditoría</p>
                  <div className="space-y-4">
                    <div className="w-full bg-slate-800 h-1.5 rounded-full">
                       <div className="bg-sky-500 h-full w-[98%]"></div>
                    </div>
                    <p className="text-[9px] flex justify-between"><span>Seguridad TLS</span> <span>98%</span></p>
                  </div>
                </div>

                <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-[10px] text-emerald-400 italic">
                  "Nuestra red es auditada trimestralmente para garantizar el cumplimiento de los estándares de privacidad más exigentes."
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default VPNResources;