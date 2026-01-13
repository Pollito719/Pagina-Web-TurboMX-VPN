import React from 'react';
import { Target, Users, ShieldCheck, Globe2, Award, History, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-bold mb-6 uppercase tracking-widest">
              <ShieldCheck size={16} />
              Seguridad de Nivel Internacional
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">Nuestra Filosofía: <span className="text-sky-500">Conectividad Global Sin Censura</span></h2>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                <strong>TurboMX VPN</strong> surge como respuesta a la creciente centralización de los datos y la pérdida de anonimato en las redes móviles de Latinoamérica y el mundo. Nuestra visión es simple pero poderosa: proporcionar una herramienta que actúe como una "capa de invisibilidad" digital, permitiendo a periodistas, estudiantes y ciudadanos de cualquier país navegar sin el temor de ser rastreados.
              </p>
              <p>
                A diferencia de los proveedores genéricos, en TurboMX nos enfocamos en la optimización multiplataforma y multirregional. Entendemos las topologías de red en toda Latinoamérica, Estados Unidos y Europa, lo que nos permite ofrecer servidores que no solo son seguros, sino que están optimizados para el tráfico transoceánico.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-4">
                <div className="p-3 bg-white/5 rounded-xl h-fit border border-white/10 text-sky-500">
                  <History size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Alcance Global</h4>
                  <p className="text-sm text-slate-500">Nodos estratégicos en toda Latinoamérica y los principales hubs de internet extranjeros.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-3 bg-white/5 rounded-xl h-fit border border-white/10 text-sky-500">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Misión</h4>
                  <p className="text-sm text-slate-500">Democratizar el acceso seguro a la información sin importar tu ubicación geográfica.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-sky-500/20 blur-[120px] rounded-full"></div>
             <div className="glass-effect p-10 rounded-[3.5rem] border border-white/10 relative z-10 shadow-3xl">
                <div className="flex gap-4 mb-8">
                   <div className="p-4 bg-sky-500 rounded-2xl shadow-lg shadow-sky-500/20"><Globe2 size={28} /></div>
                   <div className="p-4 bg-indigo-500 rounded-2xl shadow-lg shadow-indigo-500/20"><Award size={28} /></div>
                </div>
                <blockquote className="text-2xl font-bold italic text-white mb-8 leading-tight">
                  "El derecho a la privacidad no tiene fronteras. Nuestra infraestructura está diseñada para protegerte ya sea que estés en Ciudad de México, Buenos Aires, Madrid o cualquier parte del mundo."
                </blockquote>
                <div className="flex items-center gap-5 border-t border-white/10 pt-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center font-black text-2xl shadow-inner">G</div>
                  <div>
                    <p className="font-black text-lg text-white">TurboMX Global Team</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Red de Seguridad Internacional</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;