import React from 'react';
import { Network, ShieldCheck, Zap, Lock, Terminal, Globe } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="technology" className="py-24 px-6 bg-slate-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Tecnología de <span className="text-sky-500">Vanguardia</span></h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Entender cómo protegemos tus datos es el primer paso hacia una navegación responsable. TurboMX VPN utiliza una arquitectura de capas diseñada para resistir la inspección profunda de paquetes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="p-4 bg-sky-500/10 rounded-2xl w-fit">
              <Terminal className="text-sky-500 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Túneles SSH Progresivos</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Utilizamos el protocolo Secure Shell (SSH) para crear un túnel encriptado entre tu dispositivo y nuestros nodos. Este protocolo es tradicionalmente usado para administración de servidores, lo que lo hace extremadamente difícil de identificar como tráfico de VPN por los proveedores de internet convencionales.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-indigo-500/10 rounded-2xl w-fit">
              <Lock className="text-indigo-500 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Cifrado Simétrico AES-256</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Cada bit que viaja por TurboMX es procesado mediante Advanced Encryption Standard con una llave de 256 bits. Para poner esto en perspectiva, una computadora moderna tardaría billones de años en descifrar una sola sesión de navegación, garantizando privacidad absoluta.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-emerald-500/10 rounded-2xl w-fit">
              <Network className="text-emerald-500 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Optimización de MTU dinámica</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Ajustamos automáticamente el Maximum Transmission Unit (MTU) de tu conexión. Esto evita la fragmentación de paquetes de red en redes móviles inestables, lo que resulta en una navegación más rápida y estable incluso en zonas con cobertura limitada.
            </p>
          </div>
        </div>

        <div className="mt-20 p-8 md:p-12 glass-effect rounded-[3rem] border-white/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <Globe size={200} />
           </div>
           <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-2xl font-bold mb-4">El proceso de conexión en 3 pasos:</h4>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center font-bold">1</div>
                    <p className="text-slate-400"><strong>Handshake Seguro:</strong> Tu app inicia una solicitud de protocolo TLS para verificar la identidad del servidor de TurboMX.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center font-bold">2</div>
                    <p className="text-slate-400"><strong>Intercambio de Llaves:</strong> Se genera una llave de sesión única que nunca se almacena en disco, protegiendo tus datos contra futuras vulnerabilidades.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center font-bold">3</div>
                    <p className="text-slate-400"><strong>Encapsulamiento:</strong> Tu tráfico de internet se "envuelve" en paquetes seguros que viajan directos a nuestro nodo de salida.</p>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 font-mono text-xs text-sky-400/70">
                <p className="mb-2"># Debugging Connection log</p>
                <p>[INFO] Starting TMX Secure Tunnel v1.2.5</p>
                <p>[AUTH] Negotiating SSH-2.0-OpenSSH_8.9p1</p>
                <p>[CRYPTO] KexAlgorithm: curve25519-sha256</p>
                <p>[NETWORK] Tuning TCP window size for mobile optimization...</p>
                <p className="text-emerald-500">[SUCCESS] Connection established via Node Mexico-East-04</p>
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