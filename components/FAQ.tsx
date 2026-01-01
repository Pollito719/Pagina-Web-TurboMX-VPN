import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Es TurboMX VPN realmente seguro?",
      answer: "Sí. Utilizamos protocolos de túnel SSH-VPN avanzados con cifrado de grado militar. No almacenamos registros de actividad de navegación de nuestros usuarios."
    },
    {
      question: "¿En qué dispositivos puedo usar TurboMX VPN?",
      answer: "Nuestra aplicación está optimizada para dispositivos Android. Puedes descargar la versión oficial directamente desde la Google Play Store."
    },
    {
      question: "¿Ofrecen soporte técnico?",
      answer: "Contamos con una comunidad activa en Telegram donde brindamos soporte y compartimos actualizaciones constantes sobre el estado de nuestros servidores."
    },
    {
      question: "¿Cómo funciona el protocolo TCP/UDP?",
      answer: "El protocolo UDP es ideal para streaming y juegos por su baja latencia, mientras que TCP garantiza que todos los paquetes de datos lleguen correctamente, ideal para navegación web segura."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-slate-900/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <HelpCircle className="text-sky-500 w-8 h-8" />
          <h2 className="text-3xl md:text-4xl font-black">Preguntas Frecuentes</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-effect rounded-2xl overflow-hidden border-white/5">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                {openIndex === idx ? <ChevronUp className="text-sky-500" /> : <ChevronDown className="text-slate-500" />}
              </button>
              {openIndex === idx && (
                <div className="px-8 pb-6 text-slate-400 animate-in fade-in slide-in-from-top-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;