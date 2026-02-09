import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, BookOpen, Users, AlertTriangle, TrendingUp, Calculator } from 'lucide-react';

const SobrePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link to="/" className="flex items-center gap-2 hover:text-amber-500 transition-colors group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold text-gray-700">Voltar para Home</span>
            </Link>
            <div className="mx-8 flex-1 h-px bg-gray-200"></div>
            <h1 className="text-xl font-black text-gray-900 uppercase tracking-wide">Quem Somos</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-emerald-900 to-teal-800 rounded-2xl p-12 text-white mb-12 shadow-xl">
          <h2 className="text-4xl font-black mb-4">Portal Cartagenes</h2>
          <p className="text-xl text-emerald-100 leading-relaxed">
            Democratizando o acesso à informação de qualidade sobre finanças, tecnologia e bem-estar.
          </p>
        </div>

        {/* Nossa Missão */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-emerald-100 p-3 rounded-lg">
              <BookOpen size={24} className="text-emerald-600" />
            </div>
            <h3 className="text-2xl font-black text-gray-900">Nossa Missão Educativa</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            O Cartagenes nasceu com a missão de democratizar o acesso à informação de qualidade sobre o universo das finanças, tecnologia e bem-estar. Em um mundo onde a informação circula de forma caótica, nosso papel é selecionar, analisar e traduzir os principais acontecimentos que impactam o seu bolso e a sua saúde.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Acreditamos que a educação é o ativo de maior rentabilidade.</strong> Por isso, oferecemos ferramentas gratuitas, como calculadoras de simulação, e notícias atualizadas para que nossos leitores possam desenvolver seu próprio senso crítico.
          </p>
        </section>

        {/* Transparência e Compliance */}
        <section className="bg-amber-50 rounded-2xl p-8 shadow-sm border-2 border-amber-200 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-amber-500 p-3 rounded-lg">
              <Shield size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-black text-gray-900">Transparência e Isenção (Compliance CVM)</h3>
          </div>
          
          <div className="bg-white rounded-xl p-6 mb-6 border-l-4 border-red-500">
            <p className="text-lg font-bold text-red-700 mb-3 flex items-center gap-2">
              <AlertTriangle size={20} />
              Declaração Importante
            </p>
            <p className="text-gray-800 leading-relaxed font-medium">
              É fundamental destacar que o <strong>Cartagenes</strong> não é uma casa de análise, consultoria financeira ou corretora de valores.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded">1</span>
                Sem Recomendações de Investimento
              </h4>
              <p className="text-gray-700 leading-relaxed ml-8">
                Nossos conteúdos são <strong>estritamente informativos</strong>. Não indicamos a compra ou venda de ativos específicos. Todo conteúdo publicado tem finalidade educacional e jornalística.
              </p>
            </div>

            <div>
              <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded">2</span>
                Nossa Equipe
              </h4>
              <p className="text-gray-700 leading-relaxed ml-8">
                Somos produtores de conteúdo e entusiastas do mercado. <strong>Não possuímos certificações de consultoria</strong> (como CNPI ou CEA da ANBIMA), e por isso, incentivamos que toda decisão financeira seja validada por um profissional certificado pela CVM.
              </p>
            </div>

            <div>
              <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded">3</span>
                Monetização Transparente
              </h4>
              <p className="text-gray-700 leading-relaxed ml-8">
                Para manter o portal gratuito, participamos de <strong>programas de afiliados</strong>. Isso significa que podemos receber comissões por produtos recomendados (como suplementos ou softwares), mas isso nunca compromete nossa integridade editorial. Toda parceria comercial é claramente identificada.
              </p>
            </div>

            <div>
              <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded">4</span>
                Aviso de Risco
              </h4>
              <p className="text-gray-700 leading-relaxed ml-8">
                <strong>Investimentos envolvem riscos.</strong> Rentabilidade passada não garante resultados futuros. As informações fornecidas neste portal não substituem a orientação de profissionais certificados e qualificados.
              </p>
            </div>
          </div>
        </section>

        {/* Nossa Equipe */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users size={24} className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-black text-gray-900">Quem Está Por Trás do Projeto</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Somos uma equipe de entusiastas, desenvolvedores e criadores de conteúdo apaixonados por finanças, tecnologia e qualidade de vida. Nosso objetivo é entregar informação de qualidade, acessível e sem barreiras.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Trabalhamos com rigor editorial, checagem de fontes e compromisso com a verdade. Mas reforçamos: <strong>não somos analistas credenciados</strong> e nosso conteúdo não deve ser interpretado como recomendação de investimento.
          </p>
        </section>

        {/* CTA Contato */}
        <section className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl font-black mb-4">Dúvidas ou Sugestões?</h3>
          <p className="mb-6 text-emerald-50">
            Entre em contato conosco através da nossa página de suporte. Valorizamos o feedback dos nossos leitores!
          </p>
          <Link 
            to="/contato" 
            className="inline-block bg-white text-emerald-600 font-bold px-8 py-3 rounded-lg hover:bg-emerald-50 transition-all shadow-lg"
          >
            Falar com o Suporte
          </Link>
        </section>

      </main>

      {/* Footer */}
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

export default SobrePage;
