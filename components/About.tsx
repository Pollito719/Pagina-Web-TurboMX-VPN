import React from 'react';
import { Target, Users, ShieldCheck, Globe2, Award, Heart, Map } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-bold mb-6 uppercase tracking-widest">
              <Map size={16} />
              Infraestructura Regional Estratégica
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">Conectamos a <span className="text-sky-500">Toda Latinoamérica</span></h2>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                <strong>TurboMX VPN</strong> ha sido diseñada específicamente para superar los retos de conectividad en <strong>Latinoamérica y países con restricciones severas</strong>. Entendemos que cada región tiene limitaciones de red distintas, por lo que hemos desplegado nodos de alta velocidad en puntos estratégicos del continente.
              </p>
              <p>
                Nuestra red no solo cubre México; tenemos servidores optimizados en <strong>Colombia, Perú, Chile, Argentina, Ecuador</strong> y expandimos nuestros túneles hacia <strong>Estados Unidos, Canadá, España y el resto del mundo</strong>. Esto garantiza que siempre tengas un servidor rápido cerca de ti, sin importar dónde te encuentres.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-4">
                <div className="p-3 bg-white/5 rounded-xl h-fit border border-white/10 text-sky-500">
                  <Globe2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Presencia en +50 Países</h4>
                  <p className="text-sm text-slate-500">Acceso a contenido global sin restricciones geográficas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-3 bg-white/5 rounded-xl h-fit border border-white/10 text-sky-500">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Libertad Digital</h4>
                  <p className="text-sm text-slate-500">Comprometidos con el acceso libre a la información en toda la región.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-sky-500/20 blur-[120px] rounded-full"></div>
             <div className="glass p-10 rounded-[3.5rem] border border-white/10 relative z-10 shadow-3xl">
                <div className="flex gap-4 mb-8">
                   <div className="p-4 bg-sky-500 rounded-2xl shadow-lg shadow-sky-500/20"><Globe2 size={28} /></div>
                   <div className="p-4 bg-indigo-500 rounded-2xl shadow-lg shadow-indigo-500/20"><Award size={28} /></div>
                </div>
                <blockquote className="text-2xl font-bold italic text-white mb-8 leading-tight">
                  "TurboMX VPN es la llave para una internet sin bordes. Conectamos a millones en toda Latinoamérica con el resto del mundo de forma segura."
                </blockquote>
                <div className="flex items-center gap-5 border-t border-white/10 pt-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center font-black text-2xl shadow-inner">T</div>
                  <div>
                    <p className="font-black text-lg text-white">Latam Support Team</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Red de Soporte Especializada</p>
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