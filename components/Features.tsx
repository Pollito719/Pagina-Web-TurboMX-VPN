
import React from 'react';
import { Zap, Shield, Globe, Lock, Cpu, Smartphone } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-sky-400" />,
      title: "Turbo Velocidad",
      description: "Optimizado con protocolos SSH, TCP y UDP para máxima fluidez en streaming y juegos."
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: "Privacidad Total",
      description: "No guardamos registros de tu tráfico ni actividad. Tu navegación es solo tuya."
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-400" />,
      title: "Acceso Global",
      description: "Conéctate a servidores de alto rendimiento estratégicamente ubicados para mejor latencia."
    },
    {
      icon: <Lock className="w-8 h-8 text-amber-400" />,
      title: "Seguridad SSH-VPN",
      description: "Túneles de conexión cifrados para proteger tus datos de cualquier amenaza externa."
    },
    {
      icon: <Cpu className="w-8 h-8 text-rose-400" />,
      title: "Bajo Consumo",
      description: "App ultra ligera diseñada para no agotar tu batería ni ralentizar tu dispositivo móvil."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
      title: "Interfaz Moderna",
      description: "Diseño intuitivo pensado en el usuario mexicano. Conexión en un solo toque."
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">¿Por qué elegir <span className="text-sky-500">TurboMX VPN</span>?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Combinamos tecnología de vanguardia con una experiencia de usuario simplificada para ofrecerte lo mejor en VPN.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="glass-effect p-8 rounded-2xl hover:bg-slate-800/50 transition-all border-white/5 group">
              <div className="mb-6 p-3 inline-block rounded-xl bg-slate-800 border border-white/10 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
