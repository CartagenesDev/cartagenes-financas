import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, TrendingUp, Sparkles, ArrowRight, Calculator, ExternalLink, Clock } from 'lucide-react';
import StockTickerLive from '../components/StockTickerLive';
import RankingsLive from '../components/RankingsLive';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAITip } from '../geminiService';
import { fetchLiveNews, LiveNewsItem } from '../services/newsService';

const CATEGORY_LABELS: Record<string, string> = {
  Financas: 'Finanças',
  Economia: 'Economia',
  'Bem-estar': 'Bem-estar',
};

const BADGE_COLORS: Record<string, string> = {
  Financas: 'text-blue-500',
  Economia: 'text-violet-500',
  'Bem-estar': 'text-emerald-500',
};

const fmtDate = (str: string) => {
  try {
    return new Date(str).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  } catch {
    return '';
  }
};

const HomePage: React.FC = () => {
  const [aiTip, setAiTip] = useState<string>('Carregando insight do mercado...');
  const [liveNews, setLiveNews] = useState<LiveNewsItem[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getAITip().then(setAiTip);
    fetchLiveNews().then(setLiveNews);
  }, []);

  // Top 5 para o carousel (mistura de categorias)
  const carouselItems = liveNews.slice(0, 5);

  // Top 4 para Em Destaque (exclui os do carousel para não repetir)
  const destaqueItems = liveNews.slice(5, 9);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StockTickerLive />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">

            {/* Carousel com notícias ao vivo */}
            <Carousel items={carouselItems} />

            {/* Banner Wellness */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl" />
              <div className="relative z-10 flex-shrink-0">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-100 group-hover:scale-105 transition-transform duration-500">
                  <Leaf size={48} className="text-emerald-500" />
                </div>
              </div>
              <div className="relative z-10 text-center md:text-left flex-grow">
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  <Sparkles size={10} className="text-emerald-500" />
                  Conteúdo Educativo
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">Saúde e Alta Performance</h3>
                <p className="text-gray-600 font-medium mb-6 leading-relaxed max-w-lg">
                  Descubra o que a ciência diz sobre suplementação, sono e nutrição para manter foco e energia no longo prazo.
                </p>
                <Link
                  to="/noticias?q=bem-estar"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all flex items-center justify-center md:justify-start gap-3 w-full md:w-auto mx-auto md:mx-0 group hover:-translate-y-1"
                >
                  Ver Artigos de Bem-estar <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Em Destaque — notícias ao vivo */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-gray-900">Em Destaque</h2>
                <Link
                  to="/noticias"
                  className="text-amber-500 font-bold text-sm hover:text-black transition-colors flex items-center gap-2"
                >
                  Ver todas <ArrowRight size={16} />
                </Link>
              </div>

              {destaqueItems.length === 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm animate-pulse">
                      <div className="h-32 bg-gray-200" />
                      <div className="p-3 space-y-2">
                        <div className="h-3 bg-gray-200 rounded w-1/3" />
                        <div className="h-4 bg-gray-200 rounded" />
                        <div className="h-3 bg-gray-200 rounded w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {destaqueItems.map((article, idx) => (
                    <a
                      key={`${article.link}-${idx}`}
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col"
                    >
                      <div className="h-32 overflow-hidden bg-gray-100">
                        <img
                          src={article.thumbnail}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=400&q=60';
                          }}
                        />
                      </div>
                      <div className="p-3 flex-grow flex flex-col">
                        <p className={`text-xs font-bold mb-1 uppercase ${BADGE_COLORS[article.category] ?? 'text-amber-500'}`}>
                          {CATEGORY_LABELS[article.category] ?? article.category}
                        </p>
                        <h3 className="text-xs font-bold leading-tight line-clamp-2 group-hover:text-amber-500 transition-colors flex-grow">
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-1 mt-2 text-[10px] text-gray-400">
                          <Clock size={9} />
                          <span>{fmtDate(article.pubDate)}</span>
                          {article.author && <span>· {article.author}</span>}
                        </div>
                      </div>
                      <div className="px-3 py-2 border-t border-gray-50 flex items-center justify-between">
                        <span className="text-[9px] text-gray-400">Leia na fonte original</span>
                        <ExternalLink size={10} className="text-gray-300 group-hover:text-amber-500 transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Dica de IA */}
            <div className="bg-black text-white p-6 rounded-2xl flex items-center gap-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sparkles size={120} />
              </div>
              <div className="bg-amber-500 p-3 rounded-xl shadow-lg shadow-amber-500/20 shrink-0">
                <Sparkles size={24} className="text-black" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-1 block">
                  Dica do Dia (Powered by IA)
                </span>
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
                  Descubra o poder dos juros compostos com nossa calculadora profissional gratuita.
                </p>
                <Link
                  to="/calculadoras"
                  className="bg-amber-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-white transition-all flex items-center gap-2 group-hover:gap-4 w-fit"
                >
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

      <Footer />
    </div>
  );
};

export default HomePage;
