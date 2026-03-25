import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Truck, HardHat, Construction, Quote, CheckCircle2, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, STORIES } from '../constants';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/static.ais.studio/user-uploads/guerradamata@gmail.com/1742752523277-image.png" 
          alt="Instalações e frota da Carias & Mateus" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
      </div>

      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Líderes em Logística & Construção
          </div>
          <h1 className="text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
            Transportamos o <span className="text-accent">Futuro</span>, Construímos a <span className="text-accent">Confiança</span>.
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
            Soluções integradas de transporte pesado e fornecimento de materiais de construção. Eficiência, segurança e compromisso com o seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contacto" className="btn-accent text-lg px-8 py-4 group">
              Pedir Orçamento Gratuito
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/servicos" className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all">
              Explorar Serviços
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-display font-bold text-white">25+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-white">500k+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Toneladas Transportadas</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-white">100%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Compromisso</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const icons = { Truck, HardHat, Construction };

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">O que fazemos</h2>
            <h3 className="text-4xl md:text-5xl text-primary">Soluções Completas para a sua Obra.</h3>
          </div>
          <Link to="/servicos" className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors group">
            Ver todos os serviços <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = icons[service.icon as keyof typeof icons] || Truck;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 bg-slate-50 rounded-2xl border border-slate-100 card-hover"
              >
                <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <Icon size={28} />
                </div>
                <h4 className="text-2xl mb-4 group-hover:text-accent transition-colors">{service.title}</h4>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link to={`/servicos#${service.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:translate-x-2 transition-transform">
                  Saber mais <ArrowRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const StorytellingPreview = () => {
  return (
    <section className="bg-primary py-24 md:py-32 text-white overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Storytelling Hub</h2>
            <h3 className="text-4xl md:text-5xl mb-8">Histórias que Moldam a Indústria.</h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Não somos apenas transportes e betão. Fazemos parte de uma indústria milenar que move o mundo. Explore as curiosidades e os marcos que definem o nosso setor.
            </p>
            <Link to="/storytelling" className="btn-accent px-8 py-4">
              Explorar o Hub de Histórias
            </Link>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {STORIES.slice(0, 2).map((story, idx) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden group"
                >
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                    <span className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">{story.category}</span>
                    <h4 className="text-lg font-bold leading-tight">{story.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4">Parceiros de Confiança</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
            {/* Placeholder Logos */}
            <div className="text-2xl font-display font-black">LOGOTIPO A</div>
            <div className="text-2xl font-display font-black">LOGOTIPO B</div>
            <div className="text-2xl font-display font-black">LOGOTIPO C</div>
            <div className="text-2xl font-display font-black">LOGOTIPO D</div>
            <div className="text-2xl font-display font-black">LOGOTIPO E</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
          <div className="bg-slate-50 p-12 rounded-3xl relative">
            <Quote className="text-accent/20 absolute top-8 right-8 w-16 h-16" />
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map(i => <CheckCircle2 key={i} size={16} className="text-accent fill-accent/10" />)}
            </div>
            <p className="text-xl text-primary italic mb-8 leading-relaxed">
              "A Carias & Mateus tem sido o nosso parceiro logístico de eleição há mais de uma década. A pontualidade e o cuidado com a carga são exemplares."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full" />
              <div>
                <div className="font-bold">Eng. Ricardo Silva</div>
                <div className="text-sm text-slate-500">Diretor de Produção, Construtora Tejo</div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-12 rounded-3xl relative">
            <Quote className="text-accent/20 absolute top-8 right-8 w-16 h-16" />
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map(i => <CheckCircle2 key={i} size={16} className="text-accent fill-accent/10" />)}
            </div>
            <p className="text-xl text-primary italic mb-8 leading-relaxed">
              "Qualidade superior nos materiais e um serviço de entrega que nunca nos deixou ficar mal, mesmo nos projetos mais complexos em Mação."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full" />
              <div>
                <div className="font-bold">Maria João Antunes</div>
                <div className="text-sm text-slate-500">Gestora de Projetos, Urbanismo XXI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LocationPreview = () => {
  return (
    <section className="bg-slate-50 py-24 overflow-hidden">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Onde Estamos</h2>
          <h3 className="text-4xl mb-8">Visite-nos em Mação.</h3>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            Estamos localizados estrategicamente na Zona Industrial de Lamas, prontos para servir toda a região centro e o país.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-accent shadow-sm shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <div className="font-bold">Morada</div>
                <div className="text-slate-600">Zona Industrial de Lamas, 6120-786 Mação</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-accent shadow-sm shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <div className="font-bold">Telefone</div>
                <div className="text-slate-600">+351 241 571 000</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-accent shadow-sm shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <div className="font-bold">E-mail</div>
                <div className="text-slate-600">geral@cariasemateus.pt</div>
              </div>
            </div>
          </div>
          <Link to="/contacto" className="btn-primary mt-12 w-full sm:w-auto">
            Contactar Agora
          </Link>
        </div>

        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
          <iframe
            title="Localização Carias & Mateus em Mação"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3083.824844391629!2d-7.99401492349071!3d39.55225097159111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18f92600000001%3A0x8f7f1f1f1f1f1f1f!2sZona%20Industrial%20de%20Lamas%2C%206120-786%20Ma%C3%A7%C3%A3o!5e0!3m2!1spt!2spt!4v1711111111111!5m2!1spt!2spt"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export const HomePage = () => {
  return (
    <div className="bg-white">
      <Hero />
      <ServicesSection />
      <StorytellingPreview />
      <TrustSection />
      <LocationPreview />
    </div>
  );
};
