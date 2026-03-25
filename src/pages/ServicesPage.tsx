import React from 'react';
import { SERVICES } from '../constants';
import { Truck, HardHat, Construction, ArrowRight, ShieldCheck, Zap, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ service, idx }: { service: any; idx: number }) => {
  const icons = { Truck, HardHat, Construction };
  const Icon = icons[service.icon as keyof typeof icons] || Truck;

  return (
    <div id={service.id} className={`py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
      <div className="section-container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={idx % 2 !== 0 ? 'lg:order-2' : ''}
          >
            <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-8">
              <Icon size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">{service.title}</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              {service.description} Oferecemos soluções personalizadas que garantem a máxima eficiência e segurança em cada etapa do seu projeto.
            </p>
            <ul className="space-y-4 mb-10">
              {['Equipa especializada e certificada', 'Frota moderna e monitorizada', 'Cumprimento rigoroso de prazos', 'Apoio técnico personalizado'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <ShieldCheck size={20} className="text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contacto" className="btn-primary">
              Solicitar Proposta
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`relative rounded-3xl overflow-hidden shadow-2xl aspect-video ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}
          >
            <img 
              src={`https://images.unsplash.com/photo-${idx === 0 ? '1586528116311-ad8dd3c8310d' : idx === 1 ? '1504307651254-35680f356dfd' : '1541888946425-d81bb19240f5'}?auto=format&fit=crop&q=80&w=800`} 
              alt={service.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export const ServicesPage = () => {
  return (
    <div className="pt-32">
      <div className="bg-primary text-white py-24">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-7xl mb-6">Nossos Serviços.</h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Desde o transporte de mercadorias pesadas até ao fornecimento de materiais essenciais para a sua obra.
          </p>
        </div>
      </div>

      {SERVICES.map((service, idx) => (
        <ServiceDetail key={service.id} service={service} idx={idx} />
      ))}

      <section className="bg-accent py-20 text-white">
        <div className="section-container flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-3xl md:text-4xl mb-4">Pronto para começar o seu projeto?</h3>
            <p className="text-white/80 text-lg">Contacte-nos hoje para um orçamento detalhado e sem compromisso.</p>
          </div>
          <Link to="/contacto" className="bg-white text-accent px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl">
            Falar com um Especialista
          </Link>
        </div>
      </section>
    </div>
  );
};
