import React, { useEffect } from 'react';
import Contact from './components/Contact';
import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <div className="bg-slate-900/50 py-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Centro de <span className="text-sky-500">Soporte</span></h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            ¿Tienes dudas técnicas o comerciales? Nuestro equipo de ingenieros está listo para ayudarte las 24 horas del día.
          </p>
        </div>
      </div>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="glass p-8 rounded-3xl border-white/5">
              <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="text-sky-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Correo Electrónico</h3>
              <p className="text-slate-500 text-sm mb-4">Para consultas generales y soporte técnico oficial.</p>
              <a href="mailto:alexishdzcabnas889@gmail.com" className="text-sky-400 font-bold hover:underline">alexishdzcabnas889@gmail.com</a>
            </div>

            <div className="glass p-8 rounded-3xl border-white/5">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Telegram Oficial</h3>
              <p className="text-slate-500 text-sm mb-4">Únete a nuestra comunidad para actualizaciones en tiempo real.</p>
              <a href="https://t.me/internetGratisMexico" target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-bold hover:underline">@internetGratisMexico</a>
            </div>

            <div className="glass p-8 rounded-3xl border-white/5">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Horario de Atención</h3>
              <p className="text-slate-500 text-sm">Lunes a Domingo — 24/7</p>
              <p className="text-emerald-400 text-[10px] font-black mt-2 uppercase tracking-widest">Soporte Global Activo</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Contact />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
