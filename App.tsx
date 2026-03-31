import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import AboutPage from './AboutPage';
import BlogPage from './BlogPage';
import ResourcesPage from './ResourcesPage';
import ContactPage from './ContactPage';
import PrivacyPage from './PrivacyPage';
import TermsPage from './TermsPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre-nosotros" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="recursos" element={<ResourcesPage />} />
          <Route path="contacto" element={<ContactPage />} />
          <Route path="privacidad" element={<PrivacyPage />} />
          <Route path="terminos" element={<TermsPage />} />
          {/* Fallback to home for any other route to avoid 404s which AdSense dislikes */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
