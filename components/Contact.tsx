
import React from 'react';
import { Mail, MessageSquare, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-6">Centro de Soporte y Atención</h2>
        <p className="text-slate-400 text-lg mb-12">
          Nuestro equipo técnico está disponible para resolver cualquier inconveniente con los nodos o la aplicación en tiempo real.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="glass-effect p-8 rounded-3xl border-sky-500/10 hover:border-sky-500/30 transition-all text-left">
            <Mail className="w-10 h-10 text-sky-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Consultas Técnicas</h3>
            <p className="text-slate-500 text-sm mb-4 leading-relaxed">Para reportar fallos en servidores específicos o problemas de conexión regional.</p>
            <a href="mailto:alexishdzcabnas889@gmail.com" className="text-sky-400 font-bold hover:underline">alexishdzcabnas889@gmail.com</a>
          </div>
          
          <div className="glass-effect p-8 rounded-3xl border-indigo-500/10 hover:border-indigo-500/30 transition-all text-left">
            <MessageSquare className="w-10 h-10 text-indigo-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Canal de Telegram</h3>
            <p className="text-slate-500 text-sm mb-4 leading-relaxed">Únete a nuestra comunidad para actualizaciones de payloads y nuevos servidores.</p>
            <a href="https://t.me/internetGratisMexico" target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-bold hover:underline">@internetGratisMexico</a>
          </div>
        </div>

        <div className="inline-flex flex-wrap justify-center gap-10 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">
           <div className="flex items-center gap-2">
              <MapPin size={14} className="text-slate-400" /> Sede Técnica: México
           </div>
           <div className="flex items-center gap-2">
              <Clock size={14} className="text-slate-400" /> Atención: 24/7 Soporte Digital
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
