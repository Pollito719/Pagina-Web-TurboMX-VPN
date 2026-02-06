import React from 'react';
import { ShieldCheck, Globe2, Award, Users, BookOpen, Briefcase, Cpu, Database, Landmark, Scale } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-black mb-8 uppercase tracking-widest">
              <Landmark size={16} /> Gobierno y Ética de Red
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Expertos en <span className="text-sky-500">Ciberseguridad Móvil</span></h2>
            
            <div className="space-y-8 text-slate-400 text-lg leading-relaxed text-justify">
              <p>
                <strong>TurboMX VPN Engineering</strong> no es solo una aplicación de red; es un consorcio tecnológico dedicado a la investigación y desarrollo de infraestructuras de comunicaciones seguras. Desde nuestra fundación en México, hemos trabajado bajo la premisa de que la <strong>Neutralidad de Red</strong> es un pilar indispensable para el progreso democrático y la libertad de información.
              </p>
              <p>
                Nuestra misión corporativa es democratizar el acceso a herramientas de auditoría y protección de datos que anteriormente solo estaban disponibles para entornos empresariales de alto nivel. Implementamos políticas de <strong>Gobernanza de Datos</strong> estrictas, alineadas con las mejores prácticas internacionales de transparencia y seguridad.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-10 mt-12">
              <div className="flex gap-5">
                <div className="p-4 bg-white/5 rounded-2xl h-fit border border-white/10 text-sky-500">
                  <Scale size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Compromiso Ético</h4>
                  <p className="text-sm text-slate-500">Defendemos los derechos digitales mediante el desarrollo de software de código abierto.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="p-4 bg-white/5 rounded-2xl h-fit border border-white/10 text-sky-500">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Auditoría Externa</h4>
                  <p className="text-sm text-slate-500">Sometemos nuestra red a pruebas de penetración constantes por firmas independientes.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
             <div className="absolute inset-0 bg-sky-500/15 blur-[140px] rounded-full"></div>
             <div className="glass p-12 rounded-[4rem] border border-white/10 relative z-10">
                <h4 className="text-2xl font-black text-white mb-10 flex items-center gap-3 italic">
                  <Users className="text-sky-500" /> Cuerpo de Ingeniería
                </h4>
                <div className="space-y-10">
                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center font-black text-2xl text-sky-500 border border-white/5 group-hover:scale-110 transition-transform">JD</div>
                    <div>
                      <p className="font-black text-white text-lg">Ing. Joel Domínguez</p>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Arquitecto de Protocolos & Criptografía</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center font-black text-2xl text-indigo-400 border border-white/5 group-hover:scale-110 transition-transform">AL</div>
                    <div>
                      <p className="font-black text-white text-lg">Lic. Alexis López</p>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Especialista en Políticas de Privacidad</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-10 border-t border-white/5 text-slate-400 text-sm italic leading-relaxed">
                  "Un portal de tecnología se mide por la calidad de la información que comparte con su comunidad."
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;