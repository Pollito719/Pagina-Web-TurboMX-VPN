import React, { useEffect } from 'react';
import Blog from './components/Blog';

const BlogPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <div className="bg-slate-900/50 py-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Blog <span className="text-sky-500">Técnico</span></h1>
          <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            Investigaciones profundas sobre ciberseguridad, protocolos de red y el futuro de la privacidad digital.
          </p>
        </div>
      </div>
      <Blog />
    </div>
  );
};

export default BlogPage;
