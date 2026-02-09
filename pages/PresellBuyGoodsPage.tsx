import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Check, Star, Heart, ArrowRight, AlertCircle, Clock, Users, Zap, Calculator } from 'lucide-react';

const PresellBuyGoodsPage: React.FC = () => {
  const [visibleFAQ, setVisibleFAQ] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Carlos M.",
      role: "Investidor",
      text: "Mudou completamente minha saúde. Com mais energia, consegui focar melhor nos meus investimentos.",
      rating: 5
    },
    {
      name: "Ana Silva",
      role: "Empreendedora",
      text: "Nunca pensei que faria tanta diferença. Recomendo para todos os meus clientes agora.",
      rating: 5
    },
    {
      name: "Roberto Santos",
      role: "Consultor",
      text: "Os resultados chegaram mais rápido do que esperava. Excelente custo-benefício.",
      rating: 5
    }
  ];

  const benefits = [
    { icon: Zap, title: "Energia 24/7", desc: "Mais disposição para trabalhar e investir" },
    { icon: Heart, title: "Saúde Plena", desc: "Sistema imunológico fortalecido" },
    { icon: TrendingUp, title: "Foco Mental", desc: "Concentração para suas decisões financeiras" },
    { icon: Clock, title: "Resultados Rápidos", desc: "Primeiros efeitos em 7-14 dias" }
  ];

  const faqs = [
    { q: "Quanto tempo para ver resultados?", a: "A maioria dos clientes relata melhoras entre 7 a 14 dias. Resultados mais significativos em 30 dias de uso contínuo." },
    { q: "É seguro? Tem efeitos colaterais?", a: "100% natural, formulado por especialistas em saúde. Sem contraindicações. Consulte seu médico antes de usar." },
    { q: "Qual é a garantia?", a: "Garantia de 30 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas." },
    { q: "Como usar?", a: "A dosagem é simples: tome conforme indicado na embalagem. Recomendamos consistência para melhores resultados." },
    { q: "Funciona para qualquer pessoa?", a: "Funciona para adultos em geral. Se você toma medicações contínuas, consulte seu médico antes." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="bg-emerald-500 p-1.5 rounded-lg">
              <TrendingUp className="text-white" size={20} />
            </div>
            <span className="text-lg font-black text-gray-900">CARTAGENES</span>
          </Link>
          <Link to="/" className="text-sm font-semibold text-gray-600 hover:text-amber-500 transition-colors">
            ← Voltar
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="mb-6 inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold">
            ⏰ OFERTA LIMITADA: Desconto Especial por Tempo Limitado
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Recupere Sua Energia e <span className="text-emerald-500">Saúde Integral</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Fórmula premium desenvolvida especialmente para investidores e empreendedores que querem <strong>máxima performance mental e física</strong>
          </p>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-lg mb-8 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
              <div className="text-left">
                <p className="font-bold text-emerald-900 mb-2">⚡ Atenção: Esta oferta expira em 48 horas</p>
                <p className="text-emerald-800 text-sm">Depois disso, o preço especial não estará mais disponível. Aproveite agora.</p>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <a 
            href="https://buygoods.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-black text-lg px-8 py-4 rounded-xl shadow-xl shadow-emerald-500/30 hover:shadow-2xl transition-all transform hover:scale-105 mb-6"
          >
            🎁 GARANTIR MEU DESCONTO AGORA
          </a>

          <p className="text-sm text-gray-600 font-semibold">✓ Entrega rápida | ✓ Garantia de 30 dias | ✓ Pagamento seguro</p>
        </section>

        {/* Benefits Grid */}
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

        {/* Problem/Solution Section */}
        <section className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-black text-red-600 mb-6">❌ O Problema</h2>
              <ul className="space-y-3">
                {[
                  "Cansaço constante dificultando foco nos investimentos",
                  "Baixa imunidade = mais dias perdidos por doença",
                  "Falta de energia para gerenciar negócios",
                  "Dificuldade de concentração em decisões financeiras",
                  "Envelhecimento acelerado prejudicando sua imagem"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-500 font-black text-lg">✗</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-black text-emerald-600 mb-6">✅ A Solução</h2>
              <ul className="space-y-3">
                {[
                  "Energia renovada para trabalhar 12h+ com disposição",
                  "Imunidade fortalecida contra problemas de saúde",
                  "Performance mental de elite para decisões melhores",
                  "Foco extremo nos seus objetivos financeiros",
                  "Aparência jovem e saudável transmitindo confiança"
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

        {/* Social Proof - Testimonials */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-12">
            Veja o que nossos clientes falam 💬
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Results/Stats Section */}
        <section className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-8 text-white mb-12">
          <h2 className="text-2xl font-black mb-8 text-center">Resultados Comprovados</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { stat: "98%", label: "De satisfação dos clientes" },
              { stat: "15K+", label: "Vidas transformadas" },
              { stat: "7-14 dias", label: "Primeiros resultados" },
              { stat: "30 dias", label: "Garantia de devolução" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-black mb-2">{item.stat}</div>
                <p className="text-emerald-100">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Como Funciona?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Faça seu pedido", desc: "Clique no botão abaixo e complete seu pedido em 60 segundos" },
              { step: "2", title: "Receba em casa", desc: "Entrega rápida e segura. Acompanhamento direto" },
              { step: "3", title: "Veja os resultados", desc: "Use por 7-14 dias e sinta a transformação" }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -top-4 -left-4 bg-emerald-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-lg">
                  {item.step}
                </div>
                <div className="bg-gray-50 p-6 rounded-lg pt-8">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Secondary CTA */}
        <section className="text-center mb-12">
          <a 
            href="https://buygoods.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-black text-lg px-8 py-4 rounded-xl shadow-xl shadow-red-500/30 hover:shadow-2xl transition-all transform hover:scale-105"
          >
            🚀 NÃO PERDA! APROVEITAR OFERTA ESPECIAL
          </a>
          <p className="text-gray-600 font-semibold mt-4">Quantidade limitada | Oferta expira em 48 horas</p>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-8">Dúvidas Frequentes</h2>
          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => setVisibleFAQ(visibleFAQ === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-bold text-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <span>{faq.q}</span>
                  <span className={`text-emerald-500 transition-transform ${visibleFAQ === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
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

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl text-white text-center mb-12">
          <h2 className="text-3xl font-black mb-6">Está pronto para transformar sua saúde?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Não é sobre ser perfeito. É sobre ser melhor do que você era ontem. Tomar essa ação agora pode mudar tudo.
          </p>
          <a 
            href="https://buygoods.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-black text-lg px-8 py-4 rounded-xl shadow-xl shadow-emerald-500/30 hover:shadow-2xl transition-all transform hover:scale-105"
          >
            ✓ COMEÇAR AGORA - APROVEITAR DESCONTO
          </a>
        </section>
      </main>

      {/* Footer Standard */}
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

export default PresellBuyGoodsPage;
