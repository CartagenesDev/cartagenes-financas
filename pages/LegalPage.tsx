import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, Info } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LegalPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-black text-gray-900 mb-2">Informações Legais</h1>
          <p className="text-gray-500">Privacidade, termos de uso e transparência editorial.</p>
        </div>

        <div className="space-y-12">
          {/* Política de Privacidade */}
          <section id="privacy" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Shield className="text-emerald-600" size={24} />
              </div>
              <h2 className="text-2xl font-black text-gray-900">Política de Privacidade</h2>
            </div>
            <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
              <p className="text-sm text-gray-500 italic">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
              <h3 className="text-lg font-bold text-gray-900 mt-6">1. Informações que Coletamos</h3>
              <p>O Cartagenes coleta informações limitadas fornecidas voluntariamente ao usar nossas calculadoras, formulários de contato ou ao se inscrever em nossa newsletter. Dados de navegação (cookies) são utilizados exclusivamente para análise de uso e melhoria da experiência.</p>
              <h3 className="text-lg font-bold text-gray-900 mt-6">2. Como Usamos Suas Informações</h3>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Melhorar a experiência de navegação e personalização do conteúdo</li>
                <li>Enviar comunicações solicitadas (como newsletters)</li>
                <li>Análise de uso das ferramentas para aprimoramento contínuo</li>
                <li>Cumprir obrigações legais quando aplicável</li>
              </ul>
              <h3 className="text-lg font-bold text-gray-900 mt-6">3. Compartilhamento de Dados</h3>
              <p>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. Dados podem ser compartilhados apenas com prestadores de serviços essenciais sob acordos de confidencialidade.</p>
              <h3 className="text-lg font-bold text-gray-900 mt-6">4. Seus Direitos (LGPD)</h3>
              <p>Você tem o direito de acessar, corrigir ou solicitar a exclusão de suas informações pessoais a qualquer momento. Entre em contato através da página de <Link to="/contato" className="text-emerald-600 hover:underline font-semibold">Contato</Link>.</p>
            </div>
          </section>

          {/* Termos de Uso */}
          <section id="terms" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-amber-100 p-3 rounded-lg">
                <FileText className="text-amber-600" size={24} />
              </div>
              <h2 className="text-2xl font-black text-gray-900">Termos de Uso</h2>
            </div>
            <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
              <p className="text-sm text-gray-500 italic">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
              <h3 className="text-lg font-bold text-gray-900 mt-6">1. Aceitação dos Termos</h3>
              <p>Ao acessar e usar o site Cartagenes, você concorda em cumprir estes Termos de Uso.</p>
              <h3 className="text-lg font-bold text-gray-900 mt-6">2. Natureza do Conteúdo</h3>
              <p>Todo o conteúdo disponibilizado (artigos, calculadoras, análises) é fornecido <strong>exclusivamente para fins informativos e educacionais</strong>. Não constitui aconselhamento financeiro, jurídico ou fiscal profissional.</p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
                <p><strong className="text-red-700">Importante sobre as Calculadoras:</strong> Os resultados são estimativas hipotéticas e não garantem retornos futuros. O Cartagenes não se responsabiliza por decisões de investimento baseadas nestas ferramentas.</p>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-6">3. Propriedade Intelectual</h3>
              <p>O conteúdo, design e logotipos do Cartagenes são protegidos por direitos autorais. É permitido o compartilhamento de links, mas a reprodução total ou parcial sem autorização é proibida.</p>
              <h3 className="text-lg font-bold text-gray-900 mt-6">4. Limitação de Responsabilidade</h3>
              <p>O Cartagenes não se responsabiliza por perdas ou danos resultantes do uso das informações ou ferramentas disponibilizadas no site. Investimentos envolvem riscos e o desempenho passado não garante resultados futuros.</p>
            </div>
          </section>

          {/* Divulgação Editorial */}
          <section id="affiliate" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Info className="text-blue-600" size={24} />
              </div>
              <h2 className="text-2xl font-black text-gray-900">Transparência Editorial</h2>
            </div>
            <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
              <p className="text-sm text-gray-500 italic">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
              <p>O Cartagenes acredita em transparência absoluta com nossa audiência. Nossos conteúdos são produzidos com base em fontes públicas e confiáveis, com checagem editorial antes da publicação.</p>
              <h3 className="text-lg font-bold text-gray-900 mt-6">Nossa Promessa Editorial</h3>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Independência:</strong> Nossas análises e matérias não são influenciadas por interesses comerciais.</li>
                <li><strong>Fontes identificadas:</strong> Toda matéria cita fonte, autor e data de publicação.</li>
                <li><strong>Correções:</strong> Eventuais erros são corrigidos e identificados com transparência.</li>
                <li><strong>Inteligência Artificial:</strong> Podemos usar ferramentas de IA para pesquisa e estruturação de dados, mas todas as publicações passam por revisão humana.</li>
              </ul>
              <p className="bg-gray-50 p-4 rounded-lg border-l-4 border-emerald-500 mt-6">
                Dúvidas sobre nossa linha editorial? Entre em contato pela página de <Link to="/contato" className="text-emerald-600 hover:underline font-semibold">Contato</Link>.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalPage;
