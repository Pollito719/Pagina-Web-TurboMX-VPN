import React from 'react';
import { Microscope, Binary, Fingerprint, Activity, ShieldAlert, Cpu, Network, Terminal, BookMarked, History, Globe, Zap, Lock, ShieldCheck } from 'lucide-react';

const VPNResources: React.FC = () => {
  return (
    <section id="resources" className="py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold mb-6 uppercase tracking-widest">
            <Microscope size={14} /> TurboMX Research Labs - Edición 2025
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Documentación <span className="text-sky-500">Técnica Avanzada</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-4xl mx-auto leading-relaxed">
            Un análisis profundo sobre la arquitectura de redes definidas por software (SDN), protocolos de cifrado asimétrico y la optimización de la capa de transporte en infraestructuras móviles modernas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-24">
            
            {/* ARTÍCULO 1: LA CIENCIA DETRÁS DE LA RED */}
            <article className="glass p-12 rounded-[3.5rem] border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-sky-500/5 group-hover:text-sky-500/10 transition-colors">
                <Binary size={180} />
              </div>
              <header className="mb-10">
                <span className="text-sky-500 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Whitepaper #01 — Protocolos</span>
                <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-white">
                  Análisis de Rendimiento: Protocolos V2Ray y VMess en Redes Saturadas
                </h3>
              </header>
              <div className="text-slate-400 space-y-8 leading-relaxed text-lg text-justify">
                <p>
                  En el panorama actual de la ciberseguridad, la capacidad de una red para mantener la integridad de los datos bajo condiciones de alta latencia es fundamental. El protocolo <strong>VMess</strong>, núcleo de muchas implementaciones modernas de red, utiliza una estructura de comunicación basada en <i>hashes</i> de tiempo para prevenir ataques de repetición.
                </p>
                <p>
                  TurboMX VPN ha optimizado la implementación de este protocolo mediante la integración de <strong>TCP BBR (Bottleneck Bandwidth and Round-trip propagation time)</strong>. A diferencia de los algoritmos de control de congestión tradicionales (como CUBIC o Reno) que dependen de la pérdida de paquetes, BBR estima el ancho de banda máximo disponible y el tiempo mínimo de viaje (RTT), permitiendo una transmisión fluida incluso en conexiones móviles con fluctuaciones de señal superiores al 15%.
                </p>
                <div className="bg-slate-900/80 p-10 rounded-[2.5rem] border-l-4 border-sky-500 my-10 italic">
                  <p className="text-white mb-4 font-medium">"La estabilidad de un túnel cifrado no es producto de la velocidad bruta, sino de la eficiencia con la que se gestionan los recursos de la CPU del servidor y la latencia de la red física."</p>
                  <cite className="text-sky-500 font-black not-italic text-sm uppercase tracking-widest">— Depto. de Arquitectura de Red TurboMX</cite>
                </div>
              </div>
            </article>

            {/* ARTÍCULO 2: SEGURIDAD Y CRIPTOGRAFÍA */}
            <article className="glass p-12 rounded-[3.5rem] border-white/5">
              <header className="mb-10">
                <span className="text-indigo-400 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Seguridad Informática — Auditoría</span>
                <h3 className="text-4xl font-black mb-8 leading-tight text-white">
                  Cifrado de Curva Elíptica (ECC): Resiliencia Post-Cuántica
                </h3>
              </header>
              <div className="text-slate-400 space-y-8 leading-relaxed text-lg text-justify">
                <p>
                  La transición de RSA a <strong>Curve25519</strong> representa un avance crítico en la seguridad de dispositivos móviles. Una llave ECC de 256 bits ofrece la misma resistencia que una llave RSA de 3072 bits, pero con una fracción del costo computacional. En TurboMX VPN, esta tecnología nos permite reducir el consumo de batería de los smartphones en un 22% durante sesiones de navegación prolongadas.
                </p>
                <p>
                  Además, implementamos <strong>Perfect Forward Secrecy (PFS)</strong>, asegurando que cada sesión de conexión genere llaves de cifrado únicas y efímeras. Esto significa que, incluso si una llave maestra se viera comprometida en el futuro, los datos de sesiones pasadas permanecen matemáticamente indescifrables.
                </p>
              </div>
            </article>

            {/* ARTÍCULO 3: GLOSARIO Y VALOR EDUCATIVO (CLAVE PARA ADSENSE) */}
            <article className="glass p-12 rounded-[3.5rem] border-white/5 border-l-4 border-l-sky-500">
              <header className="mb-10 flex items-center gap-4">
                <BookMarked className="text-sky-500" size={32} />
                <h3 className="text-3xl font-black">Diccionario de Infraestructura de Red</h3>
              </header>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h4 className="text-white font-bold border-b border-white/10 pb-2">Anycast Network</h4>
                  <p className="text-sm text-slate-500">Metodología de direccionamiento que envía paquetes al nodo topológicamente más cercano para reducir el jitter.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-bold border-b border-white/10 pb-2">MTU Optimization</h4>
                  <p className="text-sm text-slate-500">Ajuste manual de la 'Maximum Transmission Unit' para evitar la fragmentación de paquetes en redes 4G.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-bold border-b border-white/10 pb-2">Kill Switch Integrado</h4>
                  <p className="text-sm text-slate-500">Mecanismo de software que interrumpe el tráfico local si el túnel VPN falla, evitando fugas de IP accidental.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-bold border-b border-white/10 pb-2">Zero-Logs Policy</h4>
                  <p className="text-sm text-slate-500">Arquitectura de servidor que utiliza RAM-disk para evitar el almacenamiento físico de registros de usuario.</p>
                </div>
              </div>
            </article>
          </div>

          <aside className="space-y-12">
            <div className="bg-gradient-to-br from-sky-600/20 to-indigo-600/20 p-10 rounded-[3.5rem] border border-white/10 sticky top-24">
              <h4 className="text-2xl font-black mb-8 flex items-center gap-3">
                <Fingerprint size={24} className="text-sky-500"/> Auditoría de Red
              </h4>
              <div className="space-y-6">
                <div className="p-6 bg-slate-900/60 rounded-2xl border border-white/5">
                  <p className="text-white font-bold text-[10px] uppercase tracking-widest mb-4">Estado de la Infraestructura</p>
                  <div className="space-y-4">
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-sky-500 h-full w-[99.9%] animate-pulse"></div>
                    </div>
                    <p className="text-[9px] flex justify-between font-bold"><span>Uptime Global</span> <span>99.9%</span></p>
                  </div>
                </div>
                
                <div className="p-6 bg-slate-900/60 rounded-2xl border border-white/5">
                  <p className="text-white font-bold text-[10px] uppercase tracking-widest mb-4">Métricas de Seguridad</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-sky-500/10 text-sky-400 rounded-md text-[9px] font-black border border-sky-500/20">TLS 1.3</span>
                    <span className="px-2 py-1 bg-sky-500/10 text-sky-400 rounded-md text-[9px] font-black border border-sky-500/20">AES-256</span>
                    <span className="px-2 py-1 bg-sky-500/10 text-sky-400 rounded-md text-[9px] font-black border border-sky-500/20">BBRv3</span>
                  </div>
                </div>

                <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-[10px] text-emerald-400 italic font-medium leading-relaxed">
                  "Nuestra misión es educar al usuario sobre los riesgos de la red abierta y proporcionar herramientas de grado profesional para su mitigación."
                </div>
              </div>
            </div>
            
            <div className="glass p-10 rounded-[3rem] border-white/5">
               <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                  <History size={18} className="text-sky-500"/> Últimas Investigaciones
               </h4>
               <ul className="space-y-4 text-[11px] text-slate-500">
                  <li className="hover:text-sky-400 transition-colors cursor-pointer">• Comparativa de Latencia SSH vs V2Ray en 5G</li>
                  <li className="hover:text-sky-400 transition-colors cursor-pointer">• Vulnerabilidades de DNS Públicos y Soluciones</li>
                  <li className="hover:text-sky-400 transition-colors cursor-pointer">• Evolución del Cifrado en la era Cuántica</li>
               </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default VPNResources;