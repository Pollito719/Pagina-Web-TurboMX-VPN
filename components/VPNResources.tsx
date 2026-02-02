import React from 'react';
import { BookOpen, ShieldCheck, Zap, Lock, Globe, Server, FileText, Share2, ShieldQuestion, Cpu, Network, Database, Terminal, Scale } from 'lucide-react';

const VPNResources: React.FC = () => {
  return (
    <section id="resources" className="py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Portal de <span className="text-sky-500">Documentación Técnica</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-4xl mx-auto leading-relaxed">
            Explora nuestra base de conocimientos sobre criptografía de última generación, protocolos de túnel seguro y el futuro de la privacidad digital en entornos corporativos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-24">
            {/* Artículo Extenso 1 */}
            <article className="glass p-12 rounded-[3.5rem] border-white/5 relative overflow-hidden group hover:border-sky-500/30 transition-all">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 blur-[100px]"></div>
              <header className="mb-10">
                <div className="flex items-center gap-3 text-sky-500 font-black text-xs uppercase tracking-[0.4em] mb-6">
                  <span className="p-2 bg-sky-500/10 rounded-lg"><Terminal size={16}/></span>
                  Whitepaper Técnico 2025
                </div>
                <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-white">
                  Evolución del Protocolo SSH hacia la Ofuscación Dinámica
                </h3>
              </header>
              <div className="text-slate-400 space-y-8 leading-relaxed text-lg text-justify">
                <p>
                  El protocolo <strong>SSH (Secure Shell)</strong> no nació como una herramienta de VPN, sino como un método de administración remota. Sin embargo, en TurboMX hemos rediseñado su núcleo para utilizarlo como un transporte de datos de alta seguridad. El reto principal en 2025 es la <strong>Inspección Profunda de Paquetes (DPI)</strong> utilizada por gobiernos e ISPs para censurar el tráfico.
                </p>
                <p>
                  Nuestra implementación utiliza una técnica llamada <em>Dynamic Payload Masking</em>. Al encapsular datos dentro de una sesión SSH, aplicamos una capa adicional de entropía aleatoria que rompe las firmas estadísticas que los firewalls buscan. Esto significa que incluso los algoritmos de IA de los proveedores de red ven el tráfico como una transferencia de archivos administrativa estándar.
                </p>
                <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 my-10 italic border-l-4 border-l-sky-500">
                  "La verdadera privacidad no reside en esconder el mensaje, sino en esconder el hecho de que existe un mensaje." 
                  <span className="block mt-2 font-bold text-sky-500">— Equipo de Criptografía TurboMX</span>
                </div>
                <p>
                  Además de la ofuscación, hemos optimizado el <strong>TCP Window Scaling</strong>. Tradicionalmente, SSH sufre de latencia en redes móviles debido al "congestion control". TurboMX ajusta dinámicamente el tamaño de la ventana de recepción basándose en la fluctuación del RTT (Round Trip Time), logrando velocidades de descarga un 40% superiores en redes 4G y 5G en toda Latinoamérica.
                </p>
              </div>
            </article>

            {/* Artículo Extenso 2 */}
            <article className="glass p-12 rounded-[3.5rem] border-white/5 relative overflow-hidden group hover:border-indigo-500/30 transition-all">
              <header className="mb-10 text-indigo-400">
                <div className="flex items-center gap-3 font-black text-xs uppercase tracking-[0.4em] mb-6">
                  <span className="p-2 bg-indigo-500/10 rounded-lg"><Database size={16}/></span>
                  Estándares de Seguridad
                </div>
                <h3 className="text-4xl font-black mb-8 leading-tight text-white">
                  Análisis Profundo: Cifrado Elíptico vs AES-256
                </h3>
              </header>
              <div className="text-slate-400 space-y-8 leading-relaxed text-lg">
                <p>
                  En el panorama actual de la ciberseguridad, el debate entre el uso de <strong>RSA</strong> y <strong>ECC (Criptografía de Curva Elíptica)</strong> es fundamental. TurboMX ha migrado su sistema de autenticación a <strong>Curve25519</strong>, proporcionando una seguridad equivalente a una llave RSA de 3072 bits pero con una fracción del costo computacional.
                </p>
                <div className="grid md:grid-cols-2 gap-8 my-10">
                  <div className="bg-slate-950 p-6 rounded-2xl border border-white/5">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <ShieldCheck size={18} className="text-emerald-500"/> AES-256-GCM
                    </h4>
                    <p className="text-sm">Utilizado para el cifrado del canal de datos. El modo GCM asegura que los datos no hayan sido manipulados durante el tránsito.</p>
                  </div>
                  <div className="bg-slate-950 p-6 rounded-2xl border border-white/5">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <Lock size={18} className="text-indigo-500"/> X25519
                    </h4>
                    <p className="text-sm">Protocolo de intercambio de llaves Diffie-Hellman que garantiza la "Perfect Forward Secrecy" (PFS).</p>
                  </div>
                </div>
                <p>
                  Este enfoque técnico nos permite asegurar que, incluso si una llave maestra fuera comprometida en el futuro (incluso por computación cuántica incipiente), las sesiones de navegación pasadas permanecerían seguras e imposibles de descifrar. Es lo que llamamos <strong>Arquitectura de Confianza Cero</strong>.
                </p>
              </div>
            </article>

            {/* Artículo Extenso 3: Privacidad y Ética */}
            <article className="glass p-12 rounded-[3.5rem] border-white/5 border-l-4 border-l-emerald-500">
              <header className="mb-10">
                <div className="flex items-center gap-3 text-emerald-500 font-black text-xs uppercase tracking-[0.4em] mb-6">
                  <span className="p-2 bg-emerald-500/10 rounded-lg"><Scale size={16}/></span>
                  Ética Digital
                </div>
                <h3 className="text-4xl font-black mb-8 leading-tight">
                  La Neutralidad de Red en Países en Vías de Desarrollo
                </h3>
              </header>
              <div className="text-slate-400 space-y-8 leading-relaxed text-lg text-justify">
                <p>
                  La neutralidad de red es un principio fundamental que establece que los ISPs deben tratar todo el tráfico de Internet por igual. Lamentablemente, en muchas regiones de Latinoamérica, observamos prácticas de "traffic shaping" donde se penaliza el uso de ciertas aplicaciones o se limita el ancho de banda según el tipo de contenido.
                </p>
                <p>
                  TurboMX VPN actúa como un ecualizador tecnológico. Al cifrar el tráfico, eliminamos la capacidad del proveedor de discriminar paquetes. Esto no solo protege la privacidad, sino que garantiza un acceso justo y democrático a la información, un pilar esencial para el desarrollo tecnológico y educativo de la región.
                </p>
                <p>
                  Nuestra misión va más allá de una aplicación; buscamos educar al usuario sobre sus derechos digitales. Una sociedad informada sobre los riesgos de la vigilancia masiva es una sociedad más libre.
                </p>
              </div>
            </article>
          </div>

          <aside className="space-y-12">
            <div className="bg-gradient-to-br from-sky-600/20 to-indigo-600/20 p-10 rounded-[3.5rem] border border-white/10 sticky top-24">
              <h4 className="text-2xl font-black mb-8 flex items-center gap-3 italic">
                <ShieldQuestion size={24} className="text-sky-500"/> FAQ Especializada
              </h4>
              <div className="space-y-10">
                <div className="group">
                  <h5 className="text-white font-bold mb-3 group-hover:text-sky-400 transition-colors">¿Qué es el Protocolo V2Ray?</h5>
                  <p className="text-sm text-slate-500 leading-relaxed">Es un framework de red que permite crear protocolos personalizados de ofuscación, ideal para entornos con firewalls dinámicos.</p>
                </div>
                <div className="group">
                  <h5 className="text-white font-bold mb-3 group-hover:text-sky-400 transition-colors">¿TurboMX soporta IPv6?</h5>
                  <p className="text-sm text-slate-500 leading-relaxed">Sí, nuestra red es Dual-Stack, permitiendo conexiones nativas IPv6 con cifrado completo para evitar fugas de IP.</p>
                </div>
                <div className="group">
                  <h5 className="text-white font-bold mb-3 group-hover:text-sky-400 transition-colors">¿Qué es el Kill Switch?</h5>
                  <p className="text-sm text-slate-500 leading-relaxed">Una medida de seguridad que bloquea el tráfico de red inmediatamente si el túnel VPN se desconecta accidentalmente.</p>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-black text-sky-500 border border-sky-500/20">ED</div>
                  <div>
                    <p className="text-xs font-black text-white uppercase">Editor Técnico</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Ing. Eduardo Díaz</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-10 rounded-[3rem] border-white/5">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Globe size={20} className="text-sky-500"/> Estado Global
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Nodos en Latam</span>
                  <span className="text-emerald-400">Activo (42)</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Nodos en USA</span>
                  <span className="text-emerald-400">Activo (18)</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Capacidad Total</span>
                  <span className="text-sky-500 font-bold">12.5 TB/s</span>
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