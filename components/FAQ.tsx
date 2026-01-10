import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Cómo garantiza TurboMX VPN mi anonimato en línea?",
      answer: "TurboMX VPN utiliza protocolos de cifrado AES-256 bits, el estándar de la industria para seguridad gubernamental. Además, nuestra infraestructura está configurada para no generar registros de actividad (Logs), lo que significa que no almacenamos información sobre qué sitios visitas o qué datos transmites a través de nuestros servidores."
    },
    {
      question: "¿Es compatible con todas las redes móviles y Wi-Fi?",
      answer: "Sí. Nuestra tecnología está diseñada para funcionar sin problemas en redes 3G, 4G, 5G y cualquier conexión Wi-Fi pública o privada. Los protocolos SSH y SSL que utilizamos son expertos en atravesar firewalls y restricciones de red que a menudo bloquean las VPN tradicionales."
    },
    {
      question: "¿Por qué TurboMX es más rápida que otras aplicaciones similares?",
      answer: "Utilizamos una arquitectura de servidores de 'baja densidad', lo que significa que no saturamos nuestros nodos con miles de usuarios. Además, optimizamos la pila TCP/IP de nuestros servidores para priorizar los paquetes de datos de streaming y juegos, reduciendo significativamente el ping."
    },
    {
      question: "¿Debo configurar algo manualmente para que funcione?",
      answer: "No es necesario. TurboMX VPN viene pre-configurada con los mejores ajustes para la mayoría de los usuarios. Solo debes presionar el botón de conectar y la aplicación seleccionará automáticamente el protocolo y el servidor más eficiente para tu ubicación actual."
    },
    {
      question: "¿El servicio es totalmente gratuito?",
      answer: "Ofrecemos una versión gratuita funcional financiada mediante anuncios mínimos (Google AdSense/AdMob). Esto nos permite costear el mantenimiento de servidores de alta gama y ofrecer un servicio de calidad profesional sin que el usuario final deba pagar una suscripción mensual."
    },
    {
      question: "¿Cómo puedo contactar con el soporte técnico?",
      answer: "Puedes contactarnos directamente a través de nuestro correo oficial soporte@turbomxvpn.com o unirte a nuestra comunidad oficial en Telegram, donde nuestros desarrolladores y moderadores ayudan a los usuarios en tiempo real con cualquier duda técnica."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-slate-900/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <HelpCircle className="text-sky-500 w-8 h-8" />
          <h2 className="text-3xl md:text-4xl font-black">Centro de Ayuda y Preguntas Frecuentes</h2>
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
                <div className="px-8 pb-6 text-slate-400 animate-in fade-in slide-in-from-top-2 leading-relaxed">
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