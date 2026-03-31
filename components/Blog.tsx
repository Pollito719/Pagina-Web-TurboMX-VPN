import React from 'react';
import { BookOpen, Clock, ChevronRight, Share2, MessageSquare, Shield, Terminal, Cpu, Network, ShieldAlert, Globe } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "Optimización de Latencia en Redes Móviles 5G mediante Protocolos de Túnel",
    excerpt: "Un estudio detallado sobre cómo la fragmentación de paquetes afecta la experiencia del usuario en redes de alta velocidad y cómo mitigarlo.",
    category: "Ingeniería de Redes",
    readTime: "12 min",
    date: "24 Feb, 2025",
    icon: <Cpu className="text-sky-500" size={20} />,
    content: "La llegada de las redes 5G ha prometido latencias ultra-bajas, sin embargo, en la práctica, los usuarios a menudo experimentan fluctuaciones significativas (jitter). En TurboMX, hemos investigado el impacto de la Maximum Transmission Unit (MTU) en túneles cifrados. Cuando un paquete VPN es más grande que el MTU de la red física, se produce fragmentación, lo que duplica la carga del procesador y aumenta la latencia en un 40%..."
  },
  {
    id: 2,
    title: "Criptografía Post-Cuántica: Preparando la Privacidad del Mañana",
    excerpt: "Análisis de los algoritmos de cifrado que resistirán la capacidad de procesamiento de las futuras computadoras cuánticas.",
    category: "Ciberseguridad",
    readTime: "15 min",
    date: "20 Feb, 2025",
    icon: <Shield className="text-indigo-400" size={20} />,
    content: "La computación cuántica representa la mayor amenaza para el cifrado RSA y ECC actual. Algoritmos como Shor podrían romper llaves de 2048 bits en segundos. En este artículo, exploramos la implementación de Lattice-based cryptography y cómo los protocolos de comunicación segura están evolucionando para integrar estas defensas antes de que la amenaza sea una realidad comercial..."
  },
  {
    id: 3,
    title: "Arquitectura de Servidores 'Diskless' para Privacidad Total",
    excerpt: "Cómo configurar nodos de red que operan exclusivamente en memoria RAM para garantizar que no existan registros físicos de datos.",
    category: "Infraestructura",
    readTime: "10 min",
    date: "15 Feb, 2025",
    icon: <Terminal className="text-emerald-400" size={20} />,
    content: "La política de 'No-Logs' es a menudo una promesa de marketing, pero en TurboMX la convertimos en una imposibilidad técnica. Mediante el uso de sistemas operativos personalizados que cargan el kernel directamente en la memoria volátil (RAM), eliminamos cualquier posibilidad de persistencia de datos. Si un servidor es desconectado o reiniciado, toda la información de la sesión desaparece instantáneamente sin dejar rastro forense..."
  },
  {
    id: 4,
    title: "Protocolos de Ofuscación: Evadiendo la Inspección Profunda de Paquetes (DPI)",
    excerpt: "Técnicas avanzadas para hacer que el tráfico VPN parezca navegación web estándar (HTTPS) y evitar bloqueos regionales.",
    category: "Seguridad",
    readTime: "14 min",
    date: "10 Mar, 2025",
    icon: <Network className="text-sky-400" size={20} />,
    content: "La Inspección Profunda de Paquetes (DPI) permite a los ISPs identificar y bloquear tráfico VPN mediante el análisis de firmas de protocolo. En TurboMX, implementamos técnicas de ofuscación como TLS-in-TLS y WebSocket tunneling. Al envolver el tráfico cifrado dentro de una sesión TLS estándar que imita el comportamiento de un navegador, logramos que la red sea indistinguible del tráfico web legítimo, garantizando el acceso a la información sin censura."
  },
  {
    id: 5,
    title: "Seguridad en Redes Wi-Fi Públicas: El Peligro de los Ataques 'Man-in-the-Middle'",
    excerpt: "Guía técnica sobre cómo los atacantes interceptan datos en aeropuertos y cafeterías, y cómo un túnel cifrado neutraliza la amenaza.",
    category: "Educación",
    readTime: "8 min",
    date: "05 Mar, 2025",
    icon: <ShieldAlert className="text-red-400" size={20} />,
    content: "Conectarse a un Wi-Fi público sin protección es equivalente a gritar tus contraseñas en una habitación llena de gente. Los ataques de 'Evil Twin' y el secuestro de sesiones son triviales de ejecutar en redes abiertas. Este artículo detalla el proceso de cifrado de extremo a extremo que TurboMX aplica desde el dispositivo del usuario hasta nuestros servidores seguros, creando un escudo impenetrable contra cualquier intento de interceptación local."
  },
  {
    id: 6,
    title: "El Futuro del Protocolo IPv6 y su Impacto en la Privacidad Global",
    excerpt: "Análisis de cómo la transición a IPv6 cambia el panorama del rastreo digital y las nuevas medidas de protección necesarias.",
    category: "Tecnología",
    readTime: "11 min",
    date: "01 Mar, 2025",
    icon: <Globe className="text-indigo-500" size={20} />,
    content: "IPv6 ofrece un espacio de direcciones casi infinito, pero también introduce nuevos desafíos para el anonimato. A diferencia de IPv4, donde el NAT oculta múltiples dispositivos tras una sola IP, IPv6 puede asignar una dirección única y persistente a cada gadget. En TurboMX, hemos desarrollado mecanismos de rotación dinámica de prefijos IPv6 para asegurar que la huella digital de nuestros usuarios permanezca fragmentada y difícil de rastrear por redes publicitarias."
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-32 px-6 bg-[#020617] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold mb-6 uppercase tracking-widest">
              <BookOpen size={14} /> Centro de Conocimiento
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Artículos de <span className="text-gradient">Investigación</span>
            </h2>
            <p className="text-slate-400 text-lg mt-6 leading-relaxed">
              Explora nuestra biblioteca de contenido técnico especializado. Información de alto valor para profesionales de TI y entusiastas de la privacidad.
            </p>
          </div>
          <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white font-bold transition-all flex items-center gap-3 group">
            Ver todo el archivo <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="glass rounded-[2.5rem] border-white/5 overflow-hidden group hover:border-sky-500/30 transition-all duration-500 flex flex-col">
              <div className="p-8 flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-900 rounded-lg border border-white/5">
                      {article.icon}
                    </div>
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{article.category}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-[10px] font-bold">
                    <Clock size={12} /> {article.readTime}
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-sky-400 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {article.excerpt}
                </p>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{article.date}</span>
                  <div className="flex gap-4">
                    <button className="text-slate-500 hover:text-white transition-colors"><Share2 size={16} /></button>
                    <button className="text-slate-500 hover:text-white transition-colors"><MessageSquare size={16} /></button>
                  </div>
                </div>
              </div>
              
              <button className="w-full py-5 bg-white/5 group-hover:bg-sky-500 group-hover:text-black transition-all font-black text-xs uppercase tracking-[0.2em] border-t border-white/5">
                Leer Artículo Completo
              </button>
            </article>
          ))}
        </div>

        {/* AdSense Placeholder - Crucial for approval to show where ads will go */}
        <div className="mt-24 p-12 glass rounded-[3rem] border-dashed border-white/10 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
            <Shield className="text-slate-700" size={32} />
          </div>
          <p className="text-slate-600 text-xs font-bold uppercase tracking-[0.3em]">Espacio Reservado para Contenido Patrocinado</p>
          <p className="text-slate-700 text-[10px] mt-2 max-w-md">Anuncios relevantes basados en tus intereses de tecnología y privacidad.</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
