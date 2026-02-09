import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import {
  Search,
  User,
  LogOut,
  LayoutGrid,
  ChevronRight,
  Leaf,
  TrendingUp,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Calculator
} from 'lucide-react';
import StockTickerLive from './components/StockTickerLive';
import RankingsLive from './components/RankingsLive';
import Carousel from './components/Carousel';
import { NEWS_DATABASE } from './constants';
import { getAITip } from './geminiService';
import NoticiasPage from './pages/NoticiasPage';
import ContatoPage from './pages/ContatoPage';
import CalculadorasPage from './pages/CalculadorasPage';
import LegalPage from './pages/LegalPage';
import PerfilPage from './pages/PerfilPage';
import InvestimentosPage from './pages/InvestimentosPage';
import PresellBuyGoodsPage from './pages/PresellBuyGoodsPage';
import LoginPage from './pages/LoginPage';
import NoticiaDetalhePage from './pages/NoticiaDetalhePage';
import SobrePage from './pages/SobrePage';

const HomePage: React.FC = () => {
  const [aiTip, setAiTip] = useState<string>('Carregando insight do mercado...');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const navigate = useNavigate();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate(`/noticias?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  useEffect(() => {
    const fetchTip = async () => {
      const tip = await getAITip();
      setAiTip(tip);
    };
    fetchTip();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gray-900 text-gray-200 text-xs py-2 px-4 text-center font-medium">
        Portal de Notícias e Educação Financeira. Não realizamos recomendações.
      </div>

      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20">
            <Link to="/" className="flex items-center gap-2 group cursor-pointer mr-auto hover:opacity-80 transition-opacity">
              <div className="bg-emerald-500 p-2 rounded-lg group-hover:bg-amber-500 transition-colors">
                <TrendingUp className="text-white" size={24} />
              </div>
              <span className="text-2xl font-black tracking-tight text-gray-900">CARTAGENES</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm text-gray-600 pl-16">
              <Link to="/noticias" className="hover:text-amber-500 transition-colors">Notícias</Link>
              <Link to="/calculadoras" className="hover:text-amber-500 transition-colors">Calculadoras</Link>
              <Link to="/sobre" className="hover:text-amber-500 transition-colors">Sobre</Link>
              <Link to="/contato" className="hover:text-amber-500 transition-colors">Contato</Link>
            </nav>

            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-md mx-8 group border border-transparent focus-within:border-amber-200 focus-within:bg-white transition-all">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Pesquise notícias e conteúdo educativo..."
                className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
              />
            </div>

            <div className="hidden lg:flex items-center gap-3 border-l border-gray-200 pl-8">
              {isLoggedIn ? (
                <div className="relative group">
                  <button className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-xl transition-all">
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-bold text-gray-900">Caldino Araújo</span>
                      <span className="text-[10px] text-gray-500 font-medium">Investidor</span>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-2 rounded-full ring-2 ring-emerald-100">
                      <User size={18} className="text-white" />
                    </div>
                  </button>

                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-4 border-b border-gray-100">
                      <p className="text-sm font-bold text-gray-900">Caldino Araújo Cartagenes Junior</p>
                      <p className="text-xs text-gray-500 mt-1">caldino@example.com</p>
                    </div>
                    <div className="py-2">
                      <Link to="/perfil" className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors">
                        <User size={14} className="text-gray-400" />
                        Meu Perfil
                      </Link>
                      <Link to="/investimentos" className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors">
                        <TrendingUp size={14} className="text-gray-400" />
                        Meus Investimentos
                      </Link>
                    </div>
                    <div className="border-t border-gray-100 py-2">
                      <button onClick={() => { if(window.confirm('Deseja realmente sair?')) { setIsLoggedIn(false); localStorage.setItem('isLoggedIn', 'false'); } }} className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 font-semibold transition-colors">
                        <LogOut size={14} />
                        Sair da Conta
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link to="/login" className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-md hover:shadow-lg">
                  <User size={16} />
                  Entrar
                </Link>
              )}
            </div>

            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl">
            <nav className="flex flex-col gap-4 font-semibold text-gray-600">
              <Link to="/noticias" className="hover:text-amber-500 p-2 rounded-lg transition-colors">Notícias</Link>
              <Link to="/calculadoras" className="hover:text-amber-500 p-2 rounded-lg transition-colors">Calculadoras</Link>
              <Link to="/sobre" className="hover:text-amber-500 p-2 rounded-lg transition-colors">Sobre</Link>
              <Link to="/contato" className="hover:text-amber-500 p-2 rounded-lg transition-colors">Contato</Link>
            </nav>
          </div>
        )}
      </header>

      <StockTickerLive />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <Carousel />

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex-shrink-0">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-100 group-hover:scale-105 transition-transform duration-500">
                  <Leaf size={48} className="text-emerald-500" />
                </div>
              </div>
              <div className="relative z-10 text-center md:text-left flex-grow">
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  <Sparkles size={10} className="text-emerald-500" />
                  Oferta Exclusiva para Investidores
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">Potencialize sua Saúde e Foco</h3>
                <p className="text-gray-600 font-medium mb-6 leading-relaxed max-w-lg">
                  Alta performance exige um corpo saudável. Descubra os suplementos de elite que estão transformando a rotina de grandes executivos.
                </p>
                <a href="/sugar-report.html" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all flex items-center justify-center md:justify-start gap-3 w-full md:w-auto mx-auto md:mx-0 group hover:-translate-y-1">
                  Ver Oportunidade <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-gray-900">Em Destaque</h2>
                <Link to="/noticias" className="text-amber-500 font-bold text-sm hover:text-black transition-colors flex items-center gap-2">
                  Ver todas <ArrowRight size={16} />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {NEWS_DATABASE.filter(n => n.isTrending).slice(0, 4).map((article) => (
                  <Link key={article.id} to={`/noticias/${article.slug}`} className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col">
                    <div className="h-32 overflow-hidden">
                      <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="p-3 flex-grow flex flex-col">
                      <p className="text-xs font-bold text-amber-500 mb-1 uppercase">{article.category}</p>
                      <h3 className="text-xs font-bold leading-tight line-clamp-2 group-hover:text-amber-500 transition-colors flex-grow">{article.title}</h3>
                      <p className="text-[10px] text-gray-500 mt-2">{article.date}</p>
                    </div>
                    <div className="bg-gray-50 px-3 py-2 border-t border-gray-100">
                      <p className="text-[9px] text-gray-500 leading-tight">
                        Conteúdo informativo. Consulte um profissional certificado antes de investir.
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-black text-white p-6 rounded-2xl flex items-center gap-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sparkles size={120} />
              </div>
              <div className="bg-amber-500 p-3 rounded-xl shadow-lg shadow-amber-500/20 shrink-0">
                <Sparkles size={24} className="text-black" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-1 block">Dica do Dia (Powered by IA)</span>
                <p className="text-lg md:text-xl font-medium leading-tight">"{aiTip}"</p>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <RankingsLive />
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl text-white relative overflow-hidden shadow-xl group cursor-pointer">
              <div className="relative z-10">
                <div className="bg-amber-500/20 w-fit p-3 rounded-xl mb-6 backdrop-blur-sm">
                  <Calculator className="text-amber-500" size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4 leading-tight">Simule seus Rendimentos</h3>
                <p className="text-gray-400 mb-8 opacity-90 leading-relaxed font-medium max-w-xs">
                  Descubra o poder dos juros compostos com nossa calculadora profissional.
                </p>
                <Link to="/calculadoras" className="bg-amber-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-white transition-all flex items-center gap-2 group-hover:gap-4 w-fit">
                  Acessar Calculadora <ArrowRight size={18} />
                </Link>
              </div>
              <div className="absolute top-1/2 -right-12 -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity">
                <Calculator size={300} />
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="bg-[#111] text-[#888] py-10 px-5 text-center text-[12px] border-t border-[#333]">
        <div className="max-w-[1000px] mx-auto">
          <p className="font-bold uppercase">© {new Date().getFullYear()} CARTAGENES JR. - PORTAL DE NOTÍCIAS E EDUCAÇÃO</p>
          <p className="my-4 uppercase">
            <a href="/sobre.html" className="text-[#888] no-underline">SOBRE NÓS</a> |{' '}
            <Link to="/legal#privacy" className="text-[#888] no-underline">PRIVACIDADE</Link> |{' '}
            <Link to="/legal#terms" className="text-[#888] no-underline">TERMOS DE USO</Link>
          </p>
          <p className="text-[#555] leading-relaxed uppercase">
            O SITE CARTAGENES JR. É UM PORTAL EDUCATIVO E INFORMATIVO. NÃO REALIZAMOS RECOMENDAÇÕES DE INVESTIMENTO.
          </p>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/noticias" element={<NoticiasPage />} />
      <Route path="/contato" element={<ContatoPage />} />
      <Route path="/calculadoras" element={<CalculadorasPage />} />
      <Route path="/legal" element={<LegalPage />} />
      <Route path="/sobre" element={<SobrePage />} />
      <Route path="/perfil" element={<PerfilPage />} />
      <Route path="/investimentos" element={<InvestimentosPage />} />
      <Route path="/presell-buygoods" element={<PresellBuyGoodsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/noticias/:slug" element={<NoticiaDetalhePage />} />
    </Routes>
  );
};

export default App;
