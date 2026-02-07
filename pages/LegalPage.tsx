import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Shield, FileText, Info, Calculator } from 'lucide-react';

const LegalPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header com Breadcrumb */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link to="/" className="flex items-center gap-2 hover:text-amber-500 transition-colors group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold text-gray-700">Voltar para Home</span>
            </Link>
            <div className="mx-8 flex-1 h-px bg-gray-200"></div>
            <h1 className="text-xl font-black text-gray-900 uppercase tracking-wide">Informações Legais</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          
          {/* Privacy Policy */}
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
              <p>
                O Cartagenes coleta informações limitadas para fornecer nossos serviços de forma otimizada. 
                Isso pode incluir dados fornecidos voluntariamente ao usar nossas calculadoras, formulários de contato ou ao se inscrever em nossa newsletter.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6">2. Como Usamos Suas Informações</h3>
              <p>
                As informações coletadas são utilizadas exclusivamente para:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Melhorar a experiência de navegação e personalização do conteúdo</li>
                <li>Enviar comunicações solicitadas (como newsletters)</li>
                <li>Análise de uso das ferramentas para aprimoramento contínuo</li>
                <li>Cumprir obrigações legais quando aplicável</li>
              </ul>

              <h3 className="text-lg font-bold text-gray-900 mt-6">3. Compartilhamento de Dados</h3>
              <p>
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. 
                Dados podem ser compartilhados apenas com prestadores de serviços essenciais (hospedagem, análise) sob acordos de confidencialidade.
              </p>
              <p className="mt-4">
                <strong>Processamento Internacional:</strong> Ao utilizar nosso site, você está ciente de que seus dados (como cookies) 
                podem ser processados em servidores localizados fora do seu país de origem, sempre respeitando os padrões internacionais 
                de proteção de dados (LGPD, GDPR). Manteremos seus dados apenas pelo tempo necessário para cumprir as finalidades 
                descritas nesta política.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6">4. Cookies e Tecnologias Similares</h3>
              <p>
                Utilizamos cookies para melhorar sua experiência de navegação, lembrar preferências e analisar padrões de tráfego. 
                Você pode configurar seu navegador para recusar cookies, mas algumas funcionalidades podem ser afetadas.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6">5. Seus Direitos</h3>
              <p>
                Você tem o direito de acessar, corrigir ou solicitar a exclusão de suas informações pessoais a qualquer momento. 
                Entre em contato conosco através da página de <Link to="/contato" className="text-emerald-600 hover:underline font-semibold">Contato</Link>.
              </p>
            </div>
          </section>

          {/* Terms of Use */}
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
              <p>
                Ao acessar e usar o site Cartagenes, você concorda em cumprir estes Termos de Uso. 
                Se não concordar com algum termo, recomendamos que não utilize nossos serviços.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6">2. Uso do Conteúdo</h3>
              <p>
                Todo o conteúdo disponibilizado (artigos, calculadoras, análises) é fornecido apenas para fins informativos e educacionais. 
                <strong> Não constitui aconselhamento financeiro, jurídico ou fiscal profissional.</strong>
              </p>
              <p className="mt-4">
                <strong className="text-red-700">Importante sobre as Calculadoras:</strong> Os resultados das calculadoras são 
                estimativas hipotéticas baseadas nos dados inseridos e não garantem retornos futuros. O Cartagenes não se responsabiliza 
                por decisões de investimento baseadas nestas ferramentas. Rentabilidade passada não é garantia de resultados futuros.
              </p>
              <p className="mt-4">
                Recomendamos sempre consultar um profissional qualificado (consultor financeiro, contador ou advogado) antes de tomar 
                decisões de investimento.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6">3. Propriedade Intelectual</h3>
              <p>
                O conteúdo, design, logotipos e materiais do Cartagenes são protegidos por direitos autorais. 
                É permitido o compartilhamento de links, mas a reprodução total ou parcial sem autorização é proibida.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6">4. Limitação de Responsabilidade</h3>
              <p>
                O Cartagenes não se responsabiliza por perdas ou danos resultantes do uso (ou incapacidade de uso) 
                de informações ou ferramentas disponibilizadas no site. Investimentos envolvem riscos, e o desempenho passado 
                não garante resultados futuros.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6">5. Modificações</h3>
              <p>
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
                Alterações entram em vigor imediatamente após publicação no site.
              </p>
            </div>
          </section>

          {/* Affiliate Disclosure */}
          <section id="affiliate" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Info className="text-blue-600" size={24} />
              </div>
              <h2 className="text-2xl font-black text-gray-900">Divulgação de Afiliados</h2>
            </div>
            
            <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
              <p className="text-sm text-gray-500 italic">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
              
              <h3 className="text-lg font-bold text-gray-900 mt-6">Transparência Total</h3>
              <p>
                O Cartagenes acredita em transparência absoluta com nossa audiência. Este site pode conter links de afiliados, 
                o que significa que podemos receber uma comissão quando você clica em determinados links e realiza uma compra.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6">Como Funcionam os Links de Afiliados</h3>
              <p>
                Quando recomendamos produtos ou serviços (como livros, cursos, plataformas de investimento ou suplementos), 
                alguns desses links podem nos gerar uma pequena comissão <strong>sem custo adicional para você</strong>.
              </p>
              <p>
                Essas comissões ajudam a manter o site funcionando, permitindo que continuemos oferecendo conteúdo gratuito e ferramentas sem anúncios intrusivos.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6">Nossa Promessa</h3>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <strong>Recomendamos apenas o que acreditamos:</strong> Nunca promovemos produtos ou serviços que não consideramos valiosos 
                  ou que não usaríamos pessoalmente.
                </li>
                <li>
                  <strong>Opinião independente:</strong> Nossas análises e recomendações não são influenciadas por comissões. 
                  Se um produto não for bom, diremos isso claramente.
                </li>
                <li>
                  <strong>Seu interesse primeiro:</strong> Nosso compromisso é fornecer informações úteis e honestas, 
                  independentemente de haver ou não uma parceria de afiliado envolvida.
                </li>
                <li>
                  <strong>Uso de Inteligência Artificial:</strong> Podemos utilizar ferramentas de Inteligência Artificial para auxiliar 
                  na pesquisa e estruturação de dados, mas todas as recomendações finais e análises passam por revisão humana para 
                  garantir qualidade e ética.
                </li>
              </ul>

              <h3 className="text-lg font-bold text-gray-900 mt-6">Parceiros Atuais</h3>
              <p>
                Atualmente, podemos ter parcerias de afiliados com programas relacionados a:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Plataformas de investimento e corretoras</li>
                <li>Livros e cursos sobre finanças pessoais</li>
                <li>Produtos de saúde e bem-estar</li>
                <li>Ferramentas de produtividade e gestão financeira</li>
              </ul>

              <p className="bg-gray-50 p-4 rounded-lg border-l-4 border-emerald-500 mt-6">
                <strong>Importante:</strong> A presença de links de afiliados não afeta o preço que você paga. 
                Você sempre pagará o mesmo valor, independentemente de usar nosso link ou não. A única diferença 
                é que, ao usar nosso link, você nos ajuda a continuar produzindo conteúdo gratuito.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6">Dúvidas?</h3>
              <p>
                Se tiver alguma pergunta sobre nossas parcerias de afiliados, entre em contato conosco através da 
                página de <Link to="/contato" className="text-emerald-600 hover:underline font-semibold">Contato</Link>. 
                Teremos prazer em esclarecer qualquer dúvida.
              </p>
            </div>
          </section>

        </div>
      </main>

      {/* Footer Standard */}
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
                Sua fonte independente de informações sobre finanças, investimentos de longo prazo e bem-estar integral.
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

          <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Cartagenes - Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-3 text-gray-500">
              <span className="text-[10px] font-black uppercase tracking-widest">Powered by Compound Interest</span>
              <Calculator size={14} className="text-amber-500" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LegalPage;
