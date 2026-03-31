import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-sky-500 selection:text-white bg-[#020617]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Layout;
