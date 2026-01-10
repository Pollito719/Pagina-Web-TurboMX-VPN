import React from 'react';
import { Target, Users, Shield Check } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">Nuestra Misión: <span className="text-sky-500">Privacidad Digital</span></h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              TurboMX VPN nació con la visión de proporcionar una capa de seguridad robusta para los usuarios móviles en México y el mundo. En un entorno digital cada vez más vulnerable, creemos que la privacidad no es un lujo, sino un derecho fundamental.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Nuestro equipo está compuesto por ingenieros especializados en redes y ciberseguridad, dedicados a optimizar protocolos de conexión que permiten saltar la censura y proteger la identidad digital sin sacrificar la velocidad de conexión.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <Target className="text-sky-500 mb-4" />
                <h4 className="font-bold mb-2">Objetivo</h4>
                <p className="text-sm text-slate-500">Ser la VPN líder en estabilidad y soporte para la comunidad hispana.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <Users className="text-sky-500 mb-4" />
                <h4 className="font-bold mb-2">Comunidad</h4>
                <p className="text-sm text-slate-500">Más de 50,000 usuarios confían en nuestras herramientas diariamente.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-sky-500/20 blur-[100px] rounded-full"></div>
             <div className="glass-effect p-8 rounded-[3rem] border border-white/10 relative z-10">
                <blockquote className="text-2xl font-medium italic text-white mb-6">
                  "La verdadera libertad en internet comienza cuando nadie puede rastrear tus pasos. TurboMX es el escudo que necesitabas."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center font-bold">TMX</div>
                  <div>
                    <p className="font-bold">Equipo de Desarrollo</p>
                    <p className="text-sm text-slate-500">TurboMX VPN Global</p>
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