import React from 'react';
import { Target, Users, ShieldCheck, Globe2, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-bold mb-6">
              <ShieldCheck size={16} />
              Infraestructura Global Confiable
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">Nuestra Misión: <span className="text-sky-500">Privacidad Digital Sin Fronteras</span></h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              En TurboMX VPN, no solo construimos una aplicación; forjamos un ecosistema de seguridad digital diseñado para el usuario moderno. En un entorno donde la vigilancia de datos y las brechas de seguridad son moneda corriente, nuestra misión es devolver el control de la información a sus legítimos dueños: los usuarios.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Nuestra red se sustenta en nodos de alto rendimiento distribuidos estratégicamente para garantizar latencias mínimas y un cifrado de grado militar. No comprometemos la velocidad por la seguridad; optimizamos ambos para ofrecer una experiencia de navegación fluida, privada y transparente.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/30 transition-all">
                <Target className="text-sky-500 mb-4" />
                <h4 className="font-bold mb-2">Enfoque Técnico</h4>
                <p className="text-sm text-slate-500 italic">Desarrollamos algoritmos de enrutamiento que reducen la pérdida de paquetes en conexiones inestables.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/30 transition-all">
                <Users className="text-sky-500 mb-4" />
                <h4 className="font-bold mb-2">Impacto Social</h4>
                <p className="text-sm text-slate-500 italic">Facilitamos el acceso a la información libre en regiones con censura digital activa, promoviendo el conocimiento global.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-sky-500/20 blur-[100px] rounded-full"></div>
             <div className="glass-effect p-8 rounded-[3rem] border border-white/10 relative z-10">
                <div className="flex gap-4 mb-6">
                   <div className="p-3 bg-sky-500 rounded-2xl"><Globe2 size={24} /></div>
                   <div className="p-3 bg-indigo-500 rounded-2xl"><Award size={24} /></div>
                </div>
                <blockquote className="text-2xl font-medium italic text-white mb-6">
                  "La ciberseguridad no debería ser complicada ni costosa. TurboMX VPN democratiza la protección de datos con tecnología de vanguardia accesible para todos."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-xl">TMX</div>
                  <div>
                    <p className="font-bold">Dirección Técnica</p>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-black">TurboMX Security Lab</p>
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