import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, TrendingUp, Calculator } from 'lucide-react';
import { NEWS_DATABASE } from '../constants';

const NoticiaDetalhePage: React.FC = () => {
  const { slug } = useParams();
  const article = NEWS_DATABASE.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16">
              <Link to="/noticias" className="flex items-center gap-2 text-gray-700 hover:text-amber-500 transition-colors">
                <ArrowLeft size={18} />
                Voltar para Notícias
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-grow max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-black text-gray-900 mb-4">Notícia não encontrada</h1>
          <p className="text-gray-600 mb-8">A matéria solicitada não existe ou foi removida.</p>
          <Link to="/noticias" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-lg transition-colors">
            Voltar para Notícias
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link to="/noticias" className="flex items-center gap-2 text-gray-700 hover:text-amber-500 transition-colors">
              <ArrowLeft size={18} />
              Voltar para Notícias
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="w-full bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[360px] rounded-2xl overflow-hidden my-8">
            <img src={article.imageUrl} alt={article.imageAlt} className="w-full h-full object-cover brightness-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 bg-amber-500 text-black px-3 py-1 text-xs font-black uppercase tracking-widest rounded-full">
                {article.category}
              </span>
              <h1 className="text-white text-2xl md:text-4xl font-black mt-4 leading-tight">
                {article.title}
              </h1>
              <p className="text-gray-200 mt-2 max-w-3xl">
                {article.excerpt}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="flex-grow max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
          <span className="font-semibold text-gray-700">{article.author}</span>
          <span>•</span>
          <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
          <span>•</span>
          <span className="flex items-center gap-1"><Clock size={14} /> {article.readingTime} min</span>
        </div>

        <article className="prose prose-lg max-w-none text-gray-800">
          <p>
            {article.excerpt}
          </p>
          <p>
            Em 2026, o mercado segue atento à combinação entre cenário macroeconômico e fundamentos das empresas. Analistas
            destacam que decisões de alocação precisam equilibrar risco, liquidez e horizonte de tempo.
          </p>
          <p>
            No segmento de bem-estar, pesquisas recentes mostram aumento na procura por soluções de saúde preventiva e
            suplementação com maior rastreabilidade. O consumidor passou a valorizar consistência e transparência.
          </p>
          <h3>O que observar agora</h3>
          <ul>
            <li>Indicadores de inflação e juros reais</li>
            <li>Qualidade de caixa das empresas</li>
            <li>Adoção de hábitos de saúde sustentáveis</li>
            <li>Produtos com comprovação e garantia</li>
          </ul>
          <p>
            A estratégia vencedora em 2026 passa por dados, disciplina e visão de longo prazo — tanto nas finanças quanto
            na saúde pessoal.
          </p>
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10">
          {article.tags.map((tag) => (
            <span key={tag} className="flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              <Tag size={12} /> {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center">
              <TrendingUp size={18} />
            </div>
            <h3 className="text-xl font-black">Quer ir além?</h3>
          </div>
          <p className="text-emerald-100 mb-6">
            Acesse nossos conteúdos premium e descubra estratégias práticas para aumentar performance financeira e bem-estar.
          </p>
          <Link to="/presell-buygoods" className="inline-flex items-center gap-2 bg-white text-emerald-900 font-bold px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors">
            Ver oportunidade recomendada
          </Link>
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

export default NoticiaDetalhePage;
