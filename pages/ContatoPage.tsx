import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ADMIN_EMAIL } from '../constants';

const ContatoPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(ADMIN_EMAIL)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `Contato Cartagenes: ${formData.subject}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-black text-gray-900 mb-2">Fale Conosco</h1>
          <p className="text-gray-500">Dúvidas, sugestões ou parcerias? Estamos aqui.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-gray-600 text-lg leading-relaxed">
              Tem alguma dúvida sobre nossos conteúdos, sugestão de melhoria ou proposta de parceria?
              Entre em contato com nossa equipe.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg"><Mail className="text-emerald-600" size={24} /></div>
                <div>
                  <h3 className="font-bold text-gray-900">E-mail</h3>
                  <p className="text-gray-600">contato@cartagenes.com.br</p>
                  <p className="text-gray-500 text-sm mt-1">Resposta em até 24h úteis</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg"><Phone className="text-amber-600" size={24} /></div>
                <div>
                  <h3 className="font-bold text-gray-900">WhatsApp</h3>
                  <a href="https://wa.me/5598982127031" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                    +55 98 98212-7031
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Seg–Sex, 9h às 18h</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg"><MapPin className="text-blue-600" size={24} /></div>
                <div>
                  <h3 className="font-bold text-gray-900">Localização</h3>
                  <p className="text-gray-600">São Luís, Maranhão — Brasil</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-emerald-500" size={40} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-600 max-w-xs mx-auto">
                  Obrigado pelo contato. Nossa equipe retornará o mais breve possível.
                </p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-amber-500 font-bold hover:text-amber-600">
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-amber-500 focus:bg-white outline-none transition-colors"
                    placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">E-mail</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-amber-500 focus:bg-white outline-none transition-colors"
                    placeholder="email@exemplo.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Assunto</label>
                  <select name="subject" required value={formData.subject} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-amber-500 focus:bg-white outline-none transition-colors">
                    <option value="" disabled>Selecione um assunto</option>
                    <option value="Dúvida sobre conteúdo">Dúvida sobre conteúdo</option>
                    <option value="Parceria Comercial">Parceria Comercial</option>
                    <option value="Suporte Técnico">Suporte Técnico</option>
                    <option value="Sugestão de pauta">Sugestão de pauta</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Mensagem</label>
                  <textarea name="message" required rows={4} value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-amber-500 focus:bg-white outline-none transition-colors resize-none"
                    placeholder="Como podemos ajudar?" />
                </div>
                {status === 'error' && (
                  <p className="text-red-600 text-sm font-semibold">Falha ao enviar. Tente novamente.</p>
                )}
                <button type="submit" disabled={status === 'sending'}
                  className="w-full bg-gradient-to-r from-gray-900 to-black text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100">
                  {status === 'sending' ? 'Enviando...' : <><Send size={18} /> Enviar Mensagem</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContatoPage;
