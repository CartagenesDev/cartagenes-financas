import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, Tag, TrendingUp, CheckCircle } from 'lucide-react';
import { NEWS_DATABASE } from '../constants';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NoticiaDetalhePage: React.FC = () => {
  const { slug } = useParams();
  const article = NEWS_DATABASE.find((item) => item.slug === slug);
  const related = article
    ? NEWS_DATABASE.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 3)
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-black text-gray-900 mb-4">Notícia não encontrada</h1>
          <p className="text-gray-600 mb-8">A matéria solicitada não existe ou foi removida.</p>
          <Link to="/noticias" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-lg transition-colors">
            Voltar para Notícias
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Hero da matéria */}
      <div className="w-full bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[360px] rounded-2xl overflow-hidden my-8">
            <img
              src={article.imageUrl}
              alt={article.imageAlt || article.title}
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 bg-amber-500 text-black px-3 py-1 text-xs font-black uppercase tracking-widest rounded-full">
                {article.category}
              </span>
              <h1 className="text-white text-2xl md:text-4xl font-black mt-4 leading-tight">
                {article.title}
              </h1>
              <p className="text-gray-200 mt-2 max-w-3xl">{article.excerpt}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Artigo principal */}
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
              <span className="font-semibold text-gray-700">{article.author}</span>
              <span>•</span>
              <span className="text-xs text-gray-400">Fonte: {article.source}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {article.readingTime} min de leitura</span>
            </div>

            <article className="prose prose-lg max-w-none text-gray-800 space-y-5 mb-10">
              {article.content && article.content.length > 0 ? (
                article.content.map((paragraph, i) => (
                  <p key={i} className="leading-relaxed">{paragraph}</p>
                ))
              ) : (
                <>
                  <p className="leading-relaxed">{article.excerpt}</p>
                  <p className="leading-relaxed">
                    Em 2026, o mercado segue atento à combinação entre cenário macroeconômico e fundamentos das empresas.
                    Analistas destacam que decisões de alocação precisam equilibrar risco, liquidez e horizonte de tempo.
                  </p>
                  <p className="leading-relaxed">
                    A estratégia vencedora passa por dados, disciplina e visão de longo prazo — tanto nas finanças quanto na saúde pessoal.
                  </p>
                </>
              )}
            </article>

            {/* Pontos-chave */}
            {article.keyPoints && article.keyPoints.length > 0 && (
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-10">
                <h3 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle size={20} className="text-emerald-600" /> Pontos-Chave
                </h3>
                <ul className="space-y-3">
                  {article.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="bg-emerald-500 text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-gray-700 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-10">
                {article.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    <Tag size={12} /> {tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA de calculadora */}
            <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center">
                  <TrendingUp size={18} />
                </div>
                <h3 className="text-xl font-black">Simule seus investimentos</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Use nossa calculadora de juros compostos gratuita para projetar o crescimento do seu patrimônio ao longo do tempo.
              </p>
              <Link
                to="/calculadoras"
                className="inline-flex items-center gap-2 bg-amber-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors"
              >
                Acessar Calculadora
              </Link>
            </div>
          </div>

          {/* Sidebar: Artigos Relacionados */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <h3 className="text-lg font-black text-gray-900">Artigos Relacionados</h3>
              {related.length > 0 ? (
                <div className="space-y-4">
                  {related.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/noticias/${rel.slug}`}
                      className="group flex gap-4 bg-white rounded-xl p-3 border border-gray-100 shadow-sm hover:shadow-md transition-all"
                    >
                      <img
                        src={rel.imageUrl}
                        alt={rel.title}
                        className="w-20 h-20 object-cover rounded-lg shrink-0 group-hover:scale-105 transition-transform"
                      />
                      <div className="flex-grow min-w-0">
                        <p className="text-xs font-bold text-amber-500 uppercase mb-1">{rel.category}</p>
                        <h4 className="text-xs font-bold text-gray-900 leading-tight line-clamp-3 group-hover:text-amber-500 transition-colors">
                          {rel.title}
                        </h4>
                        <p className="text-[10px] text-gray-400 mt-2">{rel.readingTime} min</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">Sem artigos relacionados.</p>
              )}

              <Link
                to="/noticias"
                className="block text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-xl transition-colors text-sm"
              >
                Ver todas as notícias
              </Link>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NoticiaDetalhePage;
