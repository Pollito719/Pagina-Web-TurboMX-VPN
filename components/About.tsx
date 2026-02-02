import React from 'react';
import { Target, Users, ShieldCheck, Globe2, Award, Heart, Map, BookOpen, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-bold mb-6 uppercase tracking-widest">
              <Briefcase size={16} />
              Ciberseguridad Corporativa y Personal
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Nuestra Misión: <span className="text-sky-500">Democratizar la Privacidad</span></h2>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                <strong>TurboMX VPN</strong> nació como un proyecto de ingeniería de red enfocado en resolver las disparidades de seguridad digital en Latinoamérica. En un mundo donde los datos personales son el activo más valioso, nuestra misión es proporcionar herramientas de grado militar para el usuario común.
              </p>
              <p>
                No solo ofrecemos una aplicación; somos un colectivo de expertos en redes que defiende la <strong>Neutralidad de Red</strong>. Creemos que el acceso a la información no debe estar condicionado por la infraestructura local ni por políticas de inspección de tráfico invasivas.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-4">
                <div className="p-3 bg-white/5 rounded-xl h-fit border border-white/10 text-sky-500">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Ética Profesional</h4>
                  <p className="text-sm text-slate-500">Auditamos regularmente nuestros servidores para garantizar la transparencia total.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-3 bg-white/5 rounded-xl h-fit border border-white/10 text-sky-500">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Educación Digital</h4>
                  <p className="text-sm text-slate-500">Proveemos recursos educativos gratuitos sobre higiene digital y redes seguras.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-sky-500/20 blur-[120px] rounded-full"></div>
             <div className="glass p-10 rounded-[3.5rem] border border-white/10 relative z-10 shadow-3xl">
                <h4 className="text-2xl font-black text-white mb-10 flex items-center gap-3">
                  <Users className="text-sky-500" /> Equipo de Ingeniería
                </h4>
                <div className="space-y-8">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center font-black text-xl text-sky-400 border border-white/5">JD</div>
                    <div>
                      <p className="font-bold text-white">Ing. J. Domínguez</p>
                      <p className="text-xs text-slate-500 uppercase tracking-widest">Especialista en Protocolos SSH/SSL</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center font-black text-xl text-indigo-400 border border-white/5">AL</div>
                    <div>
                      <p className="font-bold text-white">Lic. A. López</p>
                      <p className="text-xs text-slate-500 uppercase tracking-widest">Consultor en Privacidad de Datos</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10 italic text-slate-400 text-sm leading-relaxed">
                  "Nuestro compromiso con la ciberseguridad se basa en la integridad técnica y el respeto absoluto a la libertad de comunicación."
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;