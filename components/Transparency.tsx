import React from 'react';
import { ShieldCheck, Info, FileSearch, Lock } from 'lucide-react';

const Transparency: React.FC = () => {
  const glossary = [
    { term: "Tunneling SSH", detail: "Proceso de encapsular paquetes de red dentro de una conexión cifrada SSH para evadir firewalls." },
    { term: "Cifrado Simétrico", detail: "Algoritmo que utiliza la misma llave para cifrar y descifrar, optimizado para alto rendimiento en móviles." },
    { term: "Latencia (Ping)", detail: "Tiempo de respuesta entre tu dispositivo y nuestros servidores, optimizado mediante enrutamiento directo." },
    { term: "Protocolo UDP", detail: "Protocolo de transporte rápido ideal para streaming y juegos que TurboMX utiliza en sus nodos premium." }
  ];

  return (
    <section id="transparency" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-black">Compromiso de <span className="text-sky-500">Transparencia</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              En TurboMX VPN, creemos que la seguridad no debe ser una "caja negra". Publicamos nuestros métodos técnicos para que la comunidad de ciberseguridad pueda validar nuestra integridad. No utilizamos técnicas de inyección de paquetes ni modificamos el tráfico HTTP de nuestros usuarios.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {glossary.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-sky-400 mb-2">{item.term}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-500/10 to-indigo-500/10 p-8 rounded-[2.5rem] border border-sky-500/20">
            <div className="flex items-center gap-3 mb-6">
              <FileSearch className="text-sky-500" />
              <h3 className="text-xl font-bold">Resumen de Auditoría</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                <span className="text-slate-400">Integridad de Datos</span>
                <span className="text-emerald-500 font-bold">100% OK</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                <span className="text-slate-400">Pruebas de Fuga DNS</span>
                <span className="text-emerald-500 font-bold">Protegido</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                <span className="text-slate-400">Logs Almacenados</span>
                <span className="text-sky-500 font-bold">Ninguno (0)</span>
              </div>
            </div>
            <div className="mt-8 p-4 bg-slate-950/50 rounded-xl">
              <p className="text-[10px] text-slate-500 uppercase font-black mb-2">Nota Técnica</p>
              <p className="text-xs text-slate-400 italic">"Nuestra infraestructura se reinicia cada 24 horas para purgar cualquier dato temporal en RAM, garantizando la política de Zero-Logs."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transparency;