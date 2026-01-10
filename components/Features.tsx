import React from 'react';
import { Zap, Shield, Globe, Lock, Cpu, Smartphone } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-sky-400" />,
      title: "Turbo Velocidad Optimizada",
      description: "Nuestra infraestructura utiliza protocolos SSH, TCP y UDP optimizados para reducir la latencia. Esto garantiza que el streaming de video en alta definición y los juegos en línea funcionen sin interrupciones, aprovechando al máximo el ancho de banda disponible."
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: "Cifrado de Extremo a Extremo",
      description: "Implementamos túneles de seguridad que cifran cada byte de información antes de que salga de tu dispositivo. Bajo una estricta política de no-registros, garantizamos que tu historial de navegación y datos personales permanezcan invisibles para terceros."
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-400" />,
      title: "Nodos de Acceso Global",
      description: "Contamos con una red de servidores distribuidos en puntos clave de intercambio de internet a nivel mundial. Esto permite a nuestros usuarios cambiar su ubicación virtual para acceder a contenido diverso y evitar limitaciones geográficas injustas."
    },
    {
      icon: <Lock className="w-8 h-8 text-amber-400" />,
      title: "Protocolos SSH-VPN Seguros",
      description: "A diferencia de las VPN convencionales, TurboMX utiliza Secure Shell (SSH) para crear túneles de datos altamente resistentes a la inspección profunda de paquetes (DPI), proporcionando una capa extra de anonimato incluso en redes restringidas."
    },
    {
      icon: <Cpu className="w-8 h-8 text-rose-400" />,
      title: "Arquitectura de Bajo Consumo",
      description: "Nuestra aplicación ha sido desarrollada con un motor ligero que minimiza el uso de CPU y memoria RAM. Esto se traduce en un menor impacto en la duración de la batería de tu dispositivo móvil, permitiendo una protección activa durante todo el día."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
      title: "Experiencia Centrada en el Usuario",
      description: "Diseñamos una interfaz intuitiva y moderna que permite establecer una conexión segura con un solo toque. Eliminamos las configuraciones complejas para que cualquier usuario, sin importar su nivel técnico, pueda proteger su privacidad instantáneamente."
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">¿Por qué elegir <span className="text-sky-500">TurboMX VPN</span>?</h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Combinamos tecnología de seguridad industrial con una experiencia simplificada. Nuestro compromiso es proporcionar una herramienta que sea tanto poderosa como fácil de usar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="glass-effect p-8 rounded-2xl hover:bg-slate-800/50 transition-all border-white/5 group">
              <div className="mb-6 p-3 inline-block rounded-xl bg-slate-800 border border-white/10 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;