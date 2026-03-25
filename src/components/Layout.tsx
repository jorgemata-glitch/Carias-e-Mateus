import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Truck, Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Storytelling', path: '/storytelling' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-accent p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Truck className="text-white w-6 h-6" />
          </div>
          <span className={`text-xl font-display font-bold tracking-tighter ${scrolled ? 'text-primary' : 'text-primary md:text-white'}`}>
            CARIAS <span className="text-accent">&</span> MATEUS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === link.path ? 'text-accent' : scrolled ? 'text-slate-600' : 'text-slate-600 md:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contacto" className="btn-accent px-5 py-2 text-sm">
            Pedir Orçamento
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-primary" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium p-2 rounded-lg transition-colors ${
                  location.pathname === link.path ? 'bg-accent/10 text-accent' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contacto" 
              onClick={() => setIsOpen(false)}
              className="btn-accent w-full mt-2"
            >
              Pedir Orçamento
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="bg-accent p-1.5 rounded-lg">
              <Truck className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter">
              CARIAS <span className="text-accent">&</span> MATEUS
            </span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Especialistas em logística pesada e fornecimento de materiais de construção desde 1995. Qualidade e confiança em cada quilómetro.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent transition-colors"><Facebook size={18} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent transition-colors"><Instagram size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 text-lg">Serviços</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link to="/servicos" className="hover:text-accent transition-colors">Transporte de Mercadorias</Link></li>
            <li><Link to="/servicos" className="hover:text-accent transition-colors">Materiais de Construção</Link></li>
            <li><Link to="/servicos" className="hover:text-accent transition-colors">Aluguer de Máquinas</Link></li>
            <li><Link to="/servicos" className="hover:text-accent transition-colors">Logística Industrial</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 text-lg">Links Úteis</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link to="/storytelling" className="hover:text-accent transition-colors">Storytelling Hub</Link></li>
            <li><Link to="/sobre" className="hover:text-accent transition-colors">Sobre Nós</Link></li>
            <li><Link to="/contacto" className="hover:text-accent transition-colors">Contactos</Link></li>
            <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 text-lg">Contacto</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>Zona Industrial de Lamas, 6120-786 Mação, Portugal</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent shrink-0" />
              <span>+351 241 571 000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent shrink-0" />
              <span>geral@cariasemateus.pt</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2026 Carias & Mateus, Lda. Todos os direitos reservados.</p>
        <p>Desenvolvido com foco em acessibilidade e performance.</p>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
