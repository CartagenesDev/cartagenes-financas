import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Heart, Clock, Users, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const testimonials = [
  { name: "Carlos M.", role: "Investidor", text: "Mudou completamente minha saúde. Com mais energia, consegui focar melhor nos meus investimentos.", rating: 5 },
  { name: "Ana Silva", role: "Empreendedora", text: "Nunca pensei que faria tanta diferença. Os resultados chegaram em poucos dias.", rating: 5 },
  { name: "Roberto Santos", role: "Consultor", text: "Excelente custo-benefício. A consistência no uso é o segredo dos resultados.", rating: 5 },
];

const benefits = [
  { icon: Zap, title: "Energia Sustentada", desc: "Mais disposição ao longo do dia sem picos e quedas" },
  { icon: Heart, title: "Saúde Preventiva", desc: "Fortalecimento do sistema imunológico com base científica" },
  { icon: Users, title: "Foco Mental", desc: "Concentração para decisões importantes no dia a dia" },
  { icon: Clock, title: "Resultados Gradativos", desc: "Benefícios percebidos com uso consistente em semanas" },
];

const faqs = [
  { q: "Qual é a base científica desses suplementos?", a: "Os compostos com maior evidência científica incluem Magnésio, Vitamina D3+K2, Ômega-3 e Vitaminas do Complexo B. Veja nossos artigos de bem-estar para aprofundar." },
  { q: "Preciso de prescrição médica?", a: "Vitaminas e minerais de uso geral não exigem prescrição, mas sempre recomendamos consultar um médico ou nutricionista antes de iniciar qualquer suplementação." },
  { q: "Quanto tempo para notar diferença?", a: "Depende do estado nutricional inicial. Em casos de deficiência, melhoras podem ser sentidas em 2 a 4 semanas com uso consistente." },
  { q: "Onde posso comprar com segurança?", a: "Farmácias, drogarias e e-commerces especializados são os canais mais confiáveis. Prefira marcas com laudos de qualidade (NSF, ANVISA)." },
];

const PresellBuyGoodsPage: React.FC = () => {
  const [visibleFAQ, setVisibleFAQ] = useState<number | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <main className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <section className="text-center mb-12">
          <div className="mb-6 inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold">
            Conteúdo Educativo sobre Bem-estar e Alta Performance
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Saúde como Base da <span className="text-emerald-500">Alta Performance</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Entenda o que a ciência diz sobre nutrição, suplementação e hábitos que contribuem para mais energia, foco e disposição no dia a dia.
          </p>
          <Link
            to="/noticias?q=bem-estar"
            className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-black text-lg px-8 py-4 rounded-xl shadow-xl shadow-emerald-500/30 hover:shadow-2xl transition-all transform hover:scale-105 mb-6"
          >
            Ver Artigos de Bem-estar →
          </Link>
          <p className="text-sm text-gray-500 font-medium">Conteúdo informativo — sempre consulte um profissional de saúde</p>
        </section>

        {/* Benefícios */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-emerald-600" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            );
          })}
        </section>

        {/* Problema / Solução */}
        <section className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-black text-red-600 mb-6">O Problema</h2>
              <ul className="space-y-3">
                {[
                  "Fadiga crônica que compromete a produtividade",
                  "Dificuldade de concentração em tarefas importantes",
                  "Sono de baixa qualidade que prejudica a recuperação",
                  "Alimentação desequilibrada por falta de tempo ou conhecimento",
                  "Estresse elevado sem estratégias de manejo eficazes",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-500 font-black text-lg">✗</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black text-emerald-600 mb-6">Abordagem Baseada em Ciência</h2>
              <ul className="space-y-3">
                {[
                  "Identificar deficiências nutricionais com exames de rotina",
                  "Corrigir carências com alimentação variada e suplementação orientada",
                  "Melhorar higiene do sono com hábitos simples e consistentes",
                  "Incluir atividade física regular (mínimo 150 min/semana)",
                  "Aprender técnicas de gestão do estresse respaldadas por pesquisa",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-10">
            O que nossos leitores dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />)}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{t.text}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-8">Perguntas Frequentes</h2>
          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => setVisibleFAQ(visibleFAQ === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-bold text-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <span>{faq.q}</span>
                  <span className={`text-emerald-500 transition-transform ${visibleFAQ === idx ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {visibleFAQ === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-gradient-to-br from-emerald-800 to-emerald-900 p-8 rounded-xl text-white text-center">
          <h2 className="text-2xl font-black mb-4">Quer aprofundar o tema?</h2>
          <p className="text-emerald-100 mb-6 max-w-xl mx-auto">
            Temos vários artigos gratuitos sobre nutrição, suplementação com base científica e hábitos de alta performance.
          </p>
          <Link to="/noticias?q=bem-estar" className="inline-block bg-white text-emerald-700 font-black px-8 py-3 rounded-xl hover:bg-emerald-50 transition-all">
            Acessar Artigos de Bem-estar
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PresellBuyGoodsPage;
