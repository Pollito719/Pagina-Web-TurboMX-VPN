import React from 'react';
import { Mail, MessageSquare, MapPin, Clock, ShieldCheck, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Centro de <span className="text-sky-500">Soporte Técnico</span></h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Nuestro equipo de ingenieros de red está disponible para asistirte en la configuración de tus túneles seguros y resolver dudas sobre nuestra infraestructura global.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="glass p-10 rounded-[3rem] border-sky-500/10 hover:border-sky-500/30 transition-all text-left">
            <Mail className="w-10 h-10 text-sky-500 mb-6" />
            <h3 className="text-xl font-black mb-3">Consultas Técnicas</h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">Reportes de latencia, fallos en nodos regionales o auditorías de conectividad.</p>
            <a href="mailto:alexishdzcabnas889@gmail.com" className="text-sky-400 font-black hover:underline text-sm truncate block">alexishdzcabnas889@gmail.com</a>
          </div>
          
          <div className="glass p-10 rounded-[3rem] border-indigo-500/10 hover:border-indigo-500/30 transition-all text-left">
            <MessageSquare className="w-10 h-10 text-indigo-500 mb-6" />
            <h3 className="text-xl font-black mb-3">Canal Informativo</h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">Únete a nuestra comunidad para noticias de ciberseguridad y actualizaciones de red.</p>
            <a href="https://t.me/internetGratisMexico" target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-black hover:underline text-sm block">Comunidad de Ciberseguridad</a>
          </div>

          <div className="glass p-10 rounded-[3rem] border-emerald-500/10 hover:border-emerald-500/30 transition-all text-left">
            <Globe className="w-10 h-10 text-emerald-500 mb-6" />
            <h3 className="text-xl font-black mb-3">Red de Nodos</h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">Consulta el estado de nuestra red Anycast y disponibilidad por país en tiempo real.</p>
            <span className="text-emerald-500 font-black text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Estado: Operativo 24/7
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-10 border-y border-white/5">
           <div className="flex items-center gap-3 text-slate-500 font-black text-[10px] uppercase tracking-[0.3em]">
              <MapPin size={18} className="text-sky-500" /> Sede Técnica: Ciudad de México
           </div>
           <div className="flex items-center gap-3 text-slate-500 font-black text-[10px] uppercase tracking-[0.3em]">
              <ShieldCheck size={18} className="text-emerald-500" /> Certificado: TLS 1.3 Verified
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;