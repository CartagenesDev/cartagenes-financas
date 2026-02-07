import React, { useState, useMemo } from 'react';
import { Flame, Clock, User, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NEWS_DATABASE } from '../constants';
import { NewsArticle } from '../types';

const CATEGORIES = ['Todos', 'Finanças', 'Economia', 'Empresas', 'Bem-estar'] as const;

const CATEGORY_ICONS: Record<string, string> = {
  'Finanças': '💰',
  'Economia': '📊',
  'Empresas': '🏢',
  'Bem-estar': '🧘',
};

interface NewsSectionProps {
  searchQuery?: string;
}

const NewsSection: React.FC<NewsSectionProps> = ({ searchQuery = '' }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const filteredNews = useMemo(() => {
    return NEWS_DATABASE.filter(article => {
      const matchesCategory =
        activeCategory === 'Todos' || article.category === activeCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* News Ticker */}
      <div className="bg-gradient-to-r from-amber-500 to-emerald-500 p-4 rounded-xl overflow-hidden">
        <div className="flex items-center gap-3 animate-scroll whitespace-nowrap">
          <span className="text-white font-bold uppercase tracking-widest text-xs shrink-0">
            🔥 ÚLTIMAS NOTÍCIAS
          </span>
          {NEWS_DATABASE.filter(n => n.isTrending).map((article, idx) => (
            <span key={idx} className="text-white font-semibold text-sm shrink-0">
              • {article.title}
            </span>
          ))}
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 pb-6 border-b border-gray-200">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
              activeCategory === category
                ? 'bg-black text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* News Grid */}
      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredNews.map((article: NewsArticle) => (
            <Link
              to={`/noticias/${article.slug}`}
              key={article.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:scale-105 no-underline"
            >
              {/* Image Container */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.imageAlt || article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Trending Badge */}
                {article.isTrending && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-black flex items-center gap-1">
                    <Flame size={14} />
                    EM ALTA
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <span>{CATEGORY_ICONS[article.category]}</span>
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-black text-sm leading-tight mb-2 group-hover:text-amber-500 transition-colors line-clamp-2 text-black">
                  {article.title}
                </h3>

                <p className="text-xs text-gray-600 mb-4 line-clamp-2 flex-grow">
                  {article.excerpt}
                </p>

                {/* Metadados */}
                <div className="space-y-2 mb-4 pt-4 border-t border-gray-100 text-[11px] text-gray-500">
                  <div className="flex items-center gap-2">
                    <User size={12} />
                    <span className="font-semibold">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Newspaper size={12} />
                    <span>{article.source}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
                    <Clock size={12} />
                    {article.date} • {article.readingTime} min
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-4 w-full bg-black group-hover:bg-amber-500 text-white font-bold py-2 rounded-lg transition-colors text-center text-xs">
                  Ler matéria
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 font-semibold">
            Nenhuma notícia encontrada para "{searchQuery}"
          </p>
        </div>
      )}
    </div>
  );
};

export default NewsSection;
