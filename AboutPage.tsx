import React, { useEffect } from 'react';
import About from './components/About';
import Transparency from './components/Transparency';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <div className="bg-slate-900/50 py-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Sobre <span className="text-sky-500">Nosotros</span></h1>
          <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            Conoce la misión, el equipo y la tecnología que impulsa a TurboMX VPN hacia la vanguardia de la privacidad digital en Latinoamérica.
          </p>
        </div>
      </div>
      <About />
      <Transparency />
      <section className="py-24 px-6 bg-[#020617]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-8">Nuestra Misión</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-12">
            En TurboMX, creemos que la privacidad no es un lujo, sino un derecho fundamental. Nuestra misión es democratizar el acceso a herramientas de seguridad de grado militar, permitiendo que cualquier usuario, independientemente de su conocimiento técnico, pueda navegar de forma segura y anónima.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="glass p-8 rounded-3xl border-white/5">
              <h3 className="text-xl font-bold text-white mb-4">Integridad Técnica</h3>
              <p className="text-slate-500 text-sm">Desarrollamos nuestra propia infraestructura para garantizar que no existan intermediarios ni puntos ciegos en nuestra red.</p>
            </div>
            <div className="glass p-8 rounded-3xl border-white/5">
              <h3 className="text-xl font-bold text-white mb-4">Compromiso Social</h3>
              <p className="text-slate-500 text-sm">Apoyamos activamente a periodistas y defensores de derechos humanos con herramientas de comunicación segura.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
