import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowLeft, CheckCircle, TrendingUp, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContatoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Simplificado (Style Match NoticiasPage) */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link to="/" className="flex items-center gap-2 hover:text-amber-500 transition-colors group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold text-gray-700">Voltar para Home</span>
            </Link>
            <div className="mx-8 flex-1 h-px bg-gray-200"></div>
            <h1 className="text-xl font-black text-gray-900 uppercase tracking-wide">Fale Conosco</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Estamos aqui para ajudar</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Tem alguma dúvida sobre nossos conteúdos, sugestão de melhoria ou proposta de parceria? 
                Entre em contato com nossa equipe.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Mail className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">contato@cartagenes.com.br</p>
                  <p className="text-gray-500 text-sm mt-1">Resposta em até 24h úteis</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Phone className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Telefone / WhatsApp</h3>
                  <a
                    href="https://wa.me/5598982127031"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                  >
                    +55 98 98212-7031
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Seg-Sex, 9h às 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Escritório</h3>
                  <p className="text-gray-600">Av. Paulista, 1000 - Bela Vista</p>
                  <p className="text-gray-600">São Paulo - SP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle className="text-emerald-500" size={40} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-600 max-w-xs mx-auto">
                  Obrigado pelo contato. Nossa equipe retornará o mais breve possível.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-amber-500 font-bold hover:text-amber-600"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-amber-500 focus:bg-white focus:ring-0 transition-colors outline-none"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Profissional</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-amber-500 focus:bg-white focus:ring-0 transition-colors outline-none"
                    placeholder="email@exemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">Assunto</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-amber-500 focus:bg-white focus:ring-0 transition-colors outline-none"
                  >
                    <option value="" disabled>Selecione um assunto</option>
                    <option value="duvida">Dúvida sobre conteúdo</option>
                    <option value="parceria">Parceria Comercial</option>
                    <option value="suporte">Suporte Técnico</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-amber-500 focus:bg-white focus:ring-0 transition-colors outline-none resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-gray-900 to-black text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      Enviar Mensagem <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      
      {/* Footer Section */}
      <footer className="bg-[#111] text-[#888] py-10 px-5 text-center text-[12px] border-t border-[#333]">
        <div className="max-w-[1000px] mx-auto">
          <p className="font-bold uppercase">© {new Date().getFullYear()} CARTAGENES JR. - PORTAL DE NOTÍCIAS E EDUCAÇÃO</p>
          <p className="my-4 uppercase">
            <Link to="/sobre" className="text-[#888] no-underline">SOBRE NÓS</Link> |{' '}
            <Link to="/legal#privacy" className="text-[#888] no-underline">PRIVACIDADE</Link> |{' '}
            <Link to="/legal#terms" className="text-[#888] no-underline">TERMOS DE USO</Link>
          </p>
          <p className="text-[#555] leading-relaxed uppercase">
            DISCLAIMER: ESTE PORTAL É ESTRITAMENTE INFORMATIVO. NÃO REALIZAMOS RECOMENDAÇÕES DE INVESTIMENTO E NÃO SOMOS CONSULTORIA CERTIFICADA.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContatoPage;
