import React from 'react';
import { Network, ShieldCheck, Zap, Lock, Terminal, Globe } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="technology" className="py-24 px-6 bg-slate-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Tecnología de <span className="text-sky-500">Vanguardia Global</span></h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Nuestra arquitectura de red está diseñada para ser resiliente en cualquier país. TurboMX VPN utiliza túneles de alta capacidad que se adaptan dinámicamente a la infraestructura local de cada región.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="p-4 bg-sky-500/10 rounded-2xl w-fit">
              <Terminal className="text-sky-500 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Túneles SSH Multi-Región</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Utilizamos el protocolo SSH para crear túneles encriptados que son virtualmente indistinguibles del tráfico administrativo estándar. Esto permite superar firewalls nacionales y censuras gubernamentales en países con restricciones severas.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-indigo-500/10 rounded-2xl w-fit">
              <Lock className="text-indigo-500 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Cifrado Militar de 256 bits</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Implementamos AES-256 en toda nuestra red global. Tus datos viajan protegidos bajo el mismo estándar utilizado por instituciones bancarias e inteligencia internacional, asegurando que nadie pueda interceptar tu tráfico en tránsito.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-emerald-500/10 rounded-2xl w-fit">
              <Network className="text-emerald-500 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Enrutamiento Inteligente Anycast</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Nuestra red utiliza tecnología Anycast para dirigirte automáticamente al servidor más cercano y menos congestionado, sin importar si estás en Latinoamérica, Estados Unidos o el extranjero, garantizando siempre el ping más bajo posible.
            </p>
          </div>
        </div>

        <div className="mt-20 p-8 md:p-12 glass-effect rounded-[3rem] border-white/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <Globe size={200} />
           </div>
           <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-2xl font-bold mb-4">Conexión Internacional en 3 pasos:</h4>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center font-bold">1</div>
                    <p className="text-slate-400"><strong>Detección de Nodo:</strong> El sistema identifica el punto de intercambio de internet (IXP) más eficiente para tu ubicación actual.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center font-bold">2</div>
                    <p className="text-slate-400"><strong>Handshake Seguro:</strong> Se establece una conexión TLS de alta seguridad para validar los certificados del servidor internacional.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center font-bold">3</div>
                    <p className="text-slate-400"><strong>Optimización de Paquetes:</strong> Se ajusta el MTU para compensar la latencia de larga distancia, ideal para usuarios en el extranjero.</p>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 font-mono text-xs text-sky-400/70">
                <p className="mb-2"># Debugging International Connection log</p>
                <p>[INFO] Initializing TurboMX Global Mesh v2.5</p>
                <p>[GEO] User detected in: LATAM / INTER-REGIONAL</p>
                <p>[AUTH] Verified with ECC-384 certificate</p>
                <p>[NETWORK] Route optimized for trans-border latency...</p>
                <p className="text-emerald-500">[SUCCESS] Secure tunnel active via Node Global-LATAM-HighSpeed</p>
                <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-full animate-pulse"></div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;