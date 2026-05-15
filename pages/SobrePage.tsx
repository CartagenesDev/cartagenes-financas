import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, Users, AlertTriangle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SobrePage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Header />

    <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-br from-emerald-900 to-teal-800 rounded-2xl p-12 text-white mb-12 shadow-xl">
        <h1 className="text-4xl font-black mb-4">Portal Cartagenes</h1>
        <p className="text-xl text-emerald-100 leading-relaxed">
          Democratizando o acesso à informação de qualidade sobre finanças, tecnologia e bem-estar.
        </p>
      </div>

      <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-emerald-100 p-3 rounded-lg">
            <BookOpen size={24} className="text-emerald-600" />
          </div>
          <h2 className="text-2xl font-black text-gray-900">Nossa Missão Educativa</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          O Cartagenes nasceu com a missão de democratizar o acesso à informação de qualidade sobre o universo das finanças, tecnologia e bem-estar. Em um mundo onde a informação circula de forma caótica, nosso papel é selecionar, analisar e traduzir os principais acontecimentos que impactam o seu bolso e a sua saúde.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Acreditamos que a educação é o ativo de maior rentabilidade.</strong> Por isso, oferecemos ferramentas gratuitas, como calculadoras de simulação, e notícias atualizadas para que nossos leitores possam desenvolver seu próprio senso crítico.
        </p>
      </section>

      <section className="bg-amber-50 rounded-2xl p-8 shadow-sm border-2 border-amber-200 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-amber-500 p-3 rounded-lg">
            <Shield size={24} className="text-white" />
          </div>
          <h2 className="text-2xl font-black text-gray-900">Transparência e Isenção</h2>
        </div>

        <div className="bg-white rounded-xl p-6 mb-6 border-l-4 border-red-500">
          <p className="text-lg font-bold text-red-700 mb-3 flex items-center gap-2">
            <AlertTriangle size={20} /> Declaração Importante
          </p>
          <p className="text-gray-800 leading-relaxed font-medium">
            O <strong>Cartagenes</strong> não é uma casa de análise, consultoria financeira ou corretora de valores. Não realizamos recomendações de investimento.
          </p>
        </div>

        <div className="space-y-5">
          {[
            {
              n: '1', title: 'Sem Recomendações de Investimento',
              text: 'Nossos conteúdos são estritamente informativos. Não indicamos a compra ou venda de ativos específicos. Todo conteúdo publicado tem finalidade educacional e jornalística.'
            },
            {
              n: '2', title: 'Nossa Equipe',
              text: 'Somos produtores de conteúdo e entusiastas do mercado. Não possuímos certificações de consultoria (como CNPI ou CEA da ANBIMA), e por isso incentivamos que toda decisão financeira seja validada por um profissional certificado pela CVM.'
            },
            {
              n: '3', title: 'Aviso de Risco',
              text: 'Investimentos envolvem riscos. Rentabilidade passada não garante resultados futuros. As informações fornecidas neste portal não substituem a orientação de profissionais certificados.'
            },
          ].map(({ n, title, text }) => (
            <div key={n}>
              <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded">{n}</span>
                {title}
              </h4>
              <p className="text-gray-700 leading-relaxed ml-8">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-100 p-3 rounded-lg">
            <Users size={24} className="text-blue-600" />
          </div>
          <h2 className="text-2xl font-black text-gray-900">Quem Está Por Trás do Projeto</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Somos uma equipe de entusiastas, desenvolvedores e criadores de conteúdo apaixonados por finanças, tecnologia e qualidade de vida. Nosso objetivo é entregar informação de qualidade, acessível e sem barreiras.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Trabalhamos com rigor editorial, checagem de fontes e compromisso com a verdade. Reforçamos: <strong>não somos analistas credenciados</strong> e nosso conteúdo não deve ser interpretado como recomendação de investimento.
        </p>
      </section>

      <section className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white text-center shadow-xl">
        <h3 className="text-2xl font-black mb-4">Dúvidas ou Sugestões?</h3>
        <p className="mb-6 text-emerald-50">Entre em contato conosco. Valorizamos o feedback dos nossos leitores!</p>
        <Link to="/contato" className="inline-block bg-white text-emerald-600 font-bold px-8 py-3 rounded-lg hover:bg-emerald-50 transition-all shadow-lg">
          Falar com o Suporte
        </Link>
      </section>
    </main>

    <Footer />
  </div>
  );
};

export default SobrePage;
