import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-6">Soporte y Contacto</h2>
        <p className="text-slate-400 text-lg mb-12">
          ¿Tienes dudas o necesitas ayuda técnica? Estamos aquí para escucharte a través de nuestros canales oficiales.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-effect p-8 rounded-3xl border-sky-500/10 hover:border-sky-500/30 transition-all">
            <Mail className="w-10 h-10 text-sky-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Correo Electrónico</h3>
            <p className="text-slate-400 mb-4">Envíanos un mensaje directo para consultas comerciales o soporte.</p>
            <a href="mailto:alexishdzcabnas889@gmail.com" className="text-sky-400 font-bold hover:underline">alexishdzcabnas889@gmail.com</a>
          </div>
          
          <div className="glass-effect p-8 rounded-3xl border-indigo-500/10 hover:border-indigo-500/30 transition-all">
            <MessageSquare className="w-10 h-10 text-indigo-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Comunidad Telegram</h3>
            <p className="text-slate-400 mb-4">Soporte en tiempo real y comunidad de usuarios activa.</p>
            <a href="https://t.me/internetGratisMexico" target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-bold hover:underline">@internetGratisMexico</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;