import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100">
      <h2 className="text-3xl mb-8">Envie-nos uma Mensagem</h2>
      
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Mensagem Enviada!</h3>
            <p className="text-slate-600 mb-8">Obrigado pelo seu contacto. A nossa equipa irá responder-lhe o mais brevemente possível.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="btn-primary"
            >
              Enviar nova mensagem
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
            action="https://formspark.io/example" // Placeholder for static backend
            method="POST"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Nome Completo *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="input-field" 
                  placeholder="Ex: João Silva"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-700 uppercase tracking-wider">E-mail *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="input-field" 
                  placeholder="Ex: joao@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Telefone (Opcional)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="input-field" 
                  placeholder="Ex: +351 912 345 678"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Assunto *</label>
                <select id="subject" name="subject" required className="input-field appearance-none">
                  <option value="">Selecione um assunto</option>
                  <option value="orcamento">Pedido de Orçamento</option>
                  <option value="transporte">Serviço de Transporte</option>
                  <option value="materiais">Materiais de Construção</option>
                  <option value="outro">Outro Assunto</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Mensagem *</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={5} 
                className="input-field resize-none" 
                placeholder="Como podemos ajudar?"
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
              <AlertCircle size={14} />
              <span>Ao enviar este formulário, concorda com a nossa política de privacidade.</span>
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="btn-accent w-full py-4 text-lg group"
            >
              {status === 'loading' ? (
                <span className="flex items-center gap-2">
                  <motion.span 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                  A enviar...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Enviar Mensagem <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ContactPage = () => {
  return (
    <div className="bg-surface pt-32 pb-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Info Column */}
          <div className="lg:col-span-5">
            <h1 className="text-5xl md:text-6xl mb-8">Vamos Falar.</h1>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Tem um projeto em mãos ou precisa de uma solução logística personalizada? A nossa equipa está pronta para ajudar.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent shadow-sm shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Sede</div>
                  <div className="text-xl font-bold">Zona Industrial de Lamas</div>
                  <div className="text-slate-600">6120-786 Mação, Portugal</div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent shadow-sm shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Telefone</div>
                  <div className="text-xl font-bold">+351 241 571 000</div>
                  <div className="text-slate-600">Seg - Sex: 08:30 - 18:30</div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent shadow-sm shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">E-mail</div>
                  <div className="text-xl font-bold">geral@cariasemateus.pt</div>
                  <div className="text-slate-600">Respondemos em 24h úteis</div>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-primary text-white rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="text-accent" />
                <h4 className="font-bold">Horário de Funcionamento</h4>
              </div>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex justify-between">
                  <span>Segunda a Sexta</span>
                  <span className="text-white">08:30 - 18:30</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span className="text-white">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span className="text-white">Encerrado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Map Full Width */}
        <div className="mt-24 h-[600px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
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
    </div>
  );
};
