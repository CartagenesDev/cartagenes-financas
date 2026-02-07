import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Calculator } from 'lucide-react';
import CompoundInterestCalc from '../components/CompoundInterestCalc';
import { ADMIN_EMAIL } from '../constants';

const CalculadorasPage: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setNewsletterStatus('sending');
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(ADMIN_EMAIL)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: newsletterEmail,
          _subject: 'Nova inscrição na newsletter - Cartagenes',
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar');
      }

      setNewsletterStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 4000);
    } catch (error) {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 4000);
    }
  };

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
            <h1 className="text-xl font-black text-gray-900 uppercase tracking-wide">Calculadoras Financeiras</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Coluna Principal (Esquerda) */}
            <div className="lg:col-span-2 space-y-8">
                <div className="text-left mb-8">
                    <h2 className="text-3xl font-black text-gray-900 mb-2">Simule seu Futuro</h2>
                    <p className="text-gray-600 text-lg">Planeje sua liberdade financeira com inteligência.</p>
                </div>
            
                {/* Calculadora de Juros Compostos */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                    <CompoundInterestCalc />
                </div>

                {/* Conteúdo Educativo e Banner */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 pb-12">
                    <div className="w-full bg-emerald-900 aspect-[21/9] relative flex items-center justify-center overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop" 
                        alt="Treinamento do Zero ao Investidor" 
                        className="w-full h-full object-cover opacity-40 absolute inset-0"
                    />
                    <div className="relative z-10 text-center px-4">
                        <span className="text-amber-400 font-bold tracking-widest uppercase text-sm mb-2 block">Aprenda a Viver de Renda</span>
                        <h3 className="text-white text-2xl md:text-3xl font-black mb-2">Treinamento do Zero ao Investidor</h3>
                        <p className="text-gray-300 text-sm max-w-lg mx-auto">Entenda os fundamentos e proteja seu patrimônio.</p>
                    </div>
                    </div>

                    <div className="max-w-3xl mx-auto px-6 mt-8 space-y-8">
                        <div>
                            <h2 className="text-2xl font-black text-red-700 mb-6">Como Dominar os Juros Compostos</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Planejar seu futuro financeiro não precisa ser complicado. Nossa ferramenta é 100% gratuita e livre de anúncios.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <div className="bg-gray-100 px-3 py-1 rounded-lg font-bold text-gray-900">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Ponto de Partida</h4>
                                        <p className="text-sm text-gray-500 mt-1">Insira quanto você tem disponível hoje. Se for zero, tudo bem!</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="bg-gray-100 px-3 py-1 rounded-lg font-bold text-gray-900">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Constância</h4>
                                        <p className="text-sm text-gray-500 mt-1">Defina quanto pode guardar todo mês. A regularidade é o segredo.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="bg-gray-100 px-3 py-1 rounded-lg font-bold text-gray-900">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Tempo</h4>
                                        <p className="text-sm text-gray-500 mt-1">O tempo é o melhor amigo dos juros. Simule prazos longos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-amber-500">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">💡 O Poder dos Juros</h3>
                            <p className="text-gray-600 text-sm italic">
                                "Com R$ 1.000 mensais por 20 anos a 8% a.a., você acumula mais de <strong>R$ 573 mil</strong>. Mais da metade desse valor vem apenas dos juros trabalhando para você."
                            </p>
                        </div>

                        <hr className="border-gray-100" />

                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-gray-900">Entendendo a Fórmula (Sem Complicação)</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Os juros compostos funcionam de forma exponencial. Diferente dos juros simples, que crescem em uma linha reta previsível, 
                                os compostos aceleram com o tempo. A fórmula matemática é $M = C (1+i)^t$, mas o conceito é simples:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                                <li><strong>M (Montante):</strong> O valor final que você vai sacar.</li>
                                <li><strong>C (Capital):</strong> O dinheiro que saiu do seu bolso.</li>
                                <li><strong>i (Taxa):</strong> A velocidade de crescimento do dinheiro.</li>
                                <li><strong>t (Tempo):</strong> O fermento do bolo.</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed bg-blue-50 p-4 rounded-lg text-sm">
                                <strong>Dica Ninja:</strong> Ao usar nossa calculadora, lembre-se que a taxa deve conversar com o tempo. 
                                Se você pensa em meses, sua taxa deve ser mensal. Se pensa em anos, a taxa deve ser anual. Nós cuidamos dessa conversão 
                                automaticamente para você aqui!
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-gray-900">Investimentos vs. Dívidas: Os Dois Lados da Moeda</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Muitos conhecem os juros compostos como vilões na fatura do cartão de crédito ou no cheque especial, criando dívidas impagáveis. 
                                Porém, quando você muda de lado no balcão e se torna investidor, essa força passa a trabalhar <strong>para você</strong>.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Em aplicações como Tesouro Direto, CDBs, Fundos Imobiliários e Ações (com reinvestimento de dividendos), 
                                você é quem recebe os juros sobre juros. No longo prazo, isso significa que seu dinheiro começa a render mais do que 
                                o próprio valor que você deposita mensalmente.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-gray-900">Comparativo: Curto vs. Longo Prazo</h3>
                            <p className="text-gray-600 leading-relaxed">
                                A diferença entre juros simples e compostos pode parecer pequena em um ano, mas se torna brutal em décadas. 
                                Veja esta simulação de R$ 5.000 investidos a 1% ao mês (sem novos aportes):
                            </p>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-6">
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <span className="text-gray-400 text-xs uppercase font-bold tracking-widest block mb-1">5 Anos</span>
                                    <span className="text-emerald-600 font-bold block">R$ 9.083</span>
                                    <span className="text-gray-400 text-xs strike-through decoration-gray-400 line-through">Simples: R$ 8k</span>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg border-b-2 border-amber-400">
                                    <span className="text-gray-400 text-xs uppercase font-bold tracking-widest block mb-1">10 Anos</span>
                                    <span className="text-emerald-600 font-bold block">R$ 16.501</span>
                                    <span className="text-gray-400 text-xs line-through">Simples: R$ 11k</span>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg border-b-4 border-amber-500">
                                    <span className="text-gray-400 text-xs uppercase font-bold tracking-widest block mb-1">20 Anos</span>
                                    <span className="text-emerald-600 font-bold block">R$ 54.462</span>
                                    <span className="text-gray-400 text-xs line-through">Simples: R$ 17k</span>
                                </div>
                                <div className="p-4 bg-emerald-50 rounded-lg border-b-4 border-emerald-500 transform scale-105 shadow-md">
                                    <span className="text-emerald-800 text-xs uppercase font-bold tracking-widest block mb-1">30 Anos</span>
                                    <span className="text-emerald-700 font-black text-lg block">R$ 179.748</span>
                                    <span className="text-emerald-800/50 text-xs line-through">Simples: R$ 23k</span>
                                </div>
                            </div>
                            <p className="text-center text-xs text-gray-400 mt-2">Albert Einstein teria dito: "Juros compostos são a oitava maravilha do mundo". Quem entende, ganha; quem não entende, paga.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar (Direita) */}
            <div className="lg:col-span-1 space-y-6">
                
                {/* Card de Consultoria (Sticky) */}
                <div className="bg-emerald-900 rounded-2xl p-6 text-white text-center shadow-xl shadow-emerald-900/10 sticky top-24">
                    <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="text-emerald-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Consultoria Financeira Personalizada</h3>
                    <p className="text-emerald-100 text-sm mb-6 leading-relaxed">
                        Não sabe onde investir para atingir esses resultados? Conte com a gestão de patrimônio da Cartagenes para multiplicar seus rendimentos com inteligência.
                    </p>
                    <button className="w-full bg-white text-emerald-900 font-bold py-3.5 rounded-xl hover:bg-emerald-50 transition-colors shadow-lg shadow-black/20 transform hover:-translate-y-1 transition-transform">
                        Agendar uma Consulta ›
                    </button>
                    <p className="text-xs text-emerald-400/60 mt-4 border-t border-emerald-800/50 pt-4">
                        Atendimento exclusivo para investidores qualificados.
                    </p>
                </div>

                {/* Card Secundário (Ex: Newsletter ou Afiliado) */}
                <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200">
                     <h4 className="font-bold text-gray-900 mb-2">Receba novidades</h4>
                     <p className="text-gray-500 text-xs mb-4">As melhores oportunidades de investimento direto no seu e-mail.</p>
                     <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                        <input
                          type="email"
                          required
                          value={newsletterEmail}
                          onChange={(e) => setNewsletterEmail(e.target.value)}
                          placeholder="Seu melhor e-mail"
                          className="w-full p-2.5 rounded-lg border border-gray-300 text-sm"
                        />
                        <button
                          type="submit"
                          disabled={newsletterStatus === 'sending'}
                          className="w-full bg-black text-white text-sm font-bold py-2.5 rounded-lg hover:bg-gray-800 disabled:opacity-70"
                        >
                          {newsletterStatus === 'sending' ? 'Enviando...' : 'Inscrever-se'}
                        </button>
                        {newsletterStatus === 'success' && (
                          <p className="text-emerald-600 text-xs font-semibold">Cadastro enviado com sucesso!</p>
                        )}
                        {newsletterStatus === 'error' && (
                          <p className="text-red-600 text-xs font-semibold">Falha ao enviar. Tente novamente.</p>
                        )}
                     </form>
                </div>

            </div>

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

export default CalculadorasPage;
