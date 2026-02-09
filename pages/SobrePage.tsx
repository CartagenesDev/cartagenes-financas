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
      <footer className="bg-black text-white py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-emerald-500 p-1.5 rounded-lg">
                  <TrendingUp className="text-white" size={20} />
                </div>
                <span className="text-xl font-black tracking-tight">CARTAGENES</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Portal independente de notícias e educação financeira. Conteúdo informativo sobre finanças e bem-estar.
              </p>
            </div>

            <div>
              <h4 className="text-amber-500 font-black uppercase text-xs tracking-widest mb-6">Recursos</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-medium">
                <li><Link to="/calculadoras" className="hover:text-white transition-colors">Calculadoras e Simuladores</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-amber-500 font-black uppercase text-xs tracking-widest mb-6">Sobre</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-medium">
                <li><Link to="/sobre" className="hover:text-white transition-colors">Quem Somos</Link></li>
                <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-amber-500 font-black uppercase text-xs tracking-widest mb-6">Jurídico</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-medium">
                <li><Link to="/legal#privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/legal#terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
                <li><Link to="/legal#affiliate" className="hover:text-white transition-colors">Affiliate Disclosure</Link></li>
              </ul>
            </div>

          </div>

          {/* Aviso Legal CVM */}
          <div className="pt-8 border-t border-gray-800">
            <div className="bg-gray-800 border border-amber-500/30 rounded-xl p-6 mb-8">
              <p className="text-amber-400 font-black uppercase text-xs tracking-widest mb-3">⚠️ AVISO LEGAL</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                O site <strong>Cartagenes</strong> é um portal de conteúdo educativo e informativo. <strong>Não somos corretora, consultores certificados pela CVM ou gestores de patrimônio.</strong> Todo conteúdo publicado tem finalidade exclusivamente educacional e jornalística. <strong>Investimentos envolvem riscos.</strong> Consulte sempre um profissional certificado antes de tomar decisões financeiras.
              </p>
            </div>
          </div>
          
          <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Cartagenes - Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-3 text-gray-500">
              <span className="text-[10px] font-black uppercase tracking-widest">Portal de Educação Financeira</span>
              <Calculator size={14} className="text-amber-500" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SobrePage;
