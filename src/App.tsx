import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { StoriesPage } from './pages/StoriesPage';
import { ContactPage } from './pages/ContactPage';
import { ServicesPage } from './pages/ServicesPage';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/storytelling" element={<StoriesPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          {/* Fallback for "Sobre Nós" - can point to Home or a simple section */}
          <Route path="/sobre" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
