import React, { useState, useEffect, useCallback } from 'react';
import { ExternalLink, Clock, RefreshCw, Newspaper, AlertCircle } from 'lucide-react';

interface LiveNewsItem {
  title: string;
  link: string;
  pubDate: string;
  author: string;
  thumbnail: string;
  description: string;
  category: 'Financas' | 'Economia' | 'Bem-estar';
}

const FEEDS = [
  {
    category: 'Financas' as const,
    label: 'Financas',
    badgeClass: 'bg-blue-100 text-blue-700',
    url: 'https://www.infomoney.com.br/feed/',
  },
  {
    category: 'Economia' as const,
    label: 'Economia',
    badgeClass: 'bg-violet-100 text-violet-700',
    url: 'https://news.google.com/rss/search?q=economia+brasil+investimento+dolar+inflacao+selic&hl=pt-BR&gl=BR&ceid=BR:pt-419',
  },
  {
    category: 'Bem-estar' as const,
    label: 'Bem-estar',
    badgeClass: 'bg-emerald-100 text-emerald-700',
    url: 'https://news.google.com/rss/search?q=saude+bem+estar+brasil&hl=pt-BR&gl=BR&ceid=BR:pt-419',
  },
];

const CACHE_KEY = 'cartagenes_live_news_v2';
const CACHE_TTL = 30 * 60 * 1000;

const stripHtml = (html: string) =>
  html.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim();

const extractImgFromHtml = (html: string): string => {
  const match = html.match(/<img[^>]+src="([^"]+)"/i);
  return match ? match[1] : '';
};

const extractSourceFromDesc = (html: string): string => {
  const text = stripHtml(html).trim();
  const parts = text.split('  ').map((s) => s.trim()).filter(Boolean);
  return parts.length > 1 ? parts[parts.length - 1] : '';
};

// Gera imagem unica por artigo usando o titulo como seed (picsum.photos)
const articleImage = (title: string): string => {
  const seed = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50);
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/800/440`;
};

const fmtDate = (str: string) => {
  try {
    return new Date(str).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return '';
  }
};

const CATEGORIES = ['Todos', 'Financas', 'Economia', 'Bem-estar'] as const;
const CATEGORY_LABELS: Record<string, string> = {
  Todos: 'Todos',
  Financas: 'Finanças',
  Economia: 'Economia',
  'Bem-estar': 'Bem-estar',
};
type Category = typeof CATEGORIES[number];

interface Props {
  searchQuery?: string;
}

const NewsLive: React.FC<Props> = ({ searchQuery = '' }) => {
  const [news, setNews] = useState<LiveNewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');

  const fetchNews = useCallback(async (force = false) => {
    setLoading(true);
    setError(false);

    if (!force) {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_TTL && data.length > 0) {
            setNews(data);
            setLastUpdate(new Date(timestamp));
            setLoading(false);
            return;
          }
        }
      } catch { /* ignora */ }
    }

    try {
      const allItems: LiveNewsItem[] = [];

      await Promise.all(
        FEEDS.map(async (feed) => {
          try {
            const res = await fetch(
              `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`
            );
            if (!res.ok) return;
            const data = await res.json();
            if (data.status !== 'ok' || !data.items?.length) return;

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data.items.forEach((item: any) => {
              const descHtml = item.description || item.content || '';
              // Tenta extrair imagem real do HTML (funciona no InfoMoney)
              const imgFromHtml = extractImgFromHtml(descHtml);
              // Fonte: campo author ou extraido do Google News description
              const source = item.author || extractSourceFromDesc(descHtml) || feed.label;
              // Descricao limpa em texto
              const descText = stripHtml(descHtml).slice(0, 160);

              allItems.push({
                title: item.title || '',
                link: item.link || '#',
                pubDate: item.pubDate || '',
                author: source,
                // Prioridade: img do HTML > picsum unica por artigo
                thumbnail: imgFromHtml || articleImage(item.title || String(Math.random())),
                description: descText,
                category: feed.category,
              });
            });
          } catch { /* feed falhou */ }
        })
      );

      if (allItems.length === 0) {
        setError(true);
      } else {
        const sorted = allItems.sort(
          (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
        );
        setNews(sorted);
        setLastUpdate(new Date());
        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ data: sorted, timestamp: Date.now() })
          );
        } catch { /* storage cheio */ }
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const filtered = news.filter((item) => {
    const matchesCategory =
      activeCategory === 'Todos' || item.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.author.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const badgeClass = (cat: string) =>
    FEEDS.find((f) => f.category === cat)?.badgeClass ?? 'bg-gray-100 text-gray-600';

  if (loading) {
    return (
      <div>
        <div className="flex gap-2 mb-8">
          {CATEGORIES.map((c) => (
            <div key={c} className="h-8 w-20 bg-gray-200 rounded-full animate-pulse" />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse"
            >
              <div className="h-44 bg-gray-200" />
              <div className="p-4 space-y-3">
                <div className="h-3 bg-gray-200 rounded w-1/3" />
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded w-4/5" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <AlertCircle size={48} className="text-gray-300 mb-4" />
        <p className="text-gray-600 font-semibold text-lg">
          Não foi possível carregar as notícias
        </p>
        <p className="text-gray-400 text-sm mt-1 mb-6">
          Verifique sua conexão e tente novamente.
        </p>
        <button
          onClick={() => fetchNews(true)}
          className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-bold hover:bg-emerald-700 transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Info + botao atualizar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Newspaper size={15} className="text-gray-400" />
          <span>
            {filtered.length} {filtered.length === 1 ? 'notícia' : 'notícias'}
            {lastUpdate &&
              ` · Atualizado às ${lastUpdate.toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit',
              })}`}
          </span>
        </div>
        <button
          onClick={() => fetchNews(true)}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 transition-colors"
        >
          <RefreshCw size={12} />
          Atualizar
        </button>
      </div>

      {/* Abas de categoria */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
              activeCategory === cat
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
            }`}
          >
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          {searchQuery
            ? `Nenhuma notícia encontrada para "${searchQuery}".`
            : 'Nenhuma notícia disponível no momento.'}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <a
              key={`${item.link}-${idx}`}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col"
            >
              {/* Imagem */}
              <div className="relative h-44 overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = articleImage(item.title + '-fallback');
                  }}
                />
                <span
                  className={`absolute top-3 left-3 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${badgeClass(item.category)}`}
                >
                  {CATEGORY_LABELS[item.category] ?? item.category}
                </span>
              </div>

              {/* Conteudo */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-sm font-black text-gray-900 leading-snug mb-2 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">
                    {item.description}
                  </p>
                )}

                <div className="mt-auto flex items-center justify-between pt-2 border-t border-gray-50">
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-400 min-w-0">
                    <Clock size={10} className="flex-shrink-0" />
                    <span className="flex-shrink-0">{fmtDate(item.pubDate)}</span>
                    {item.author && (
                      <>
                        <span className="flex-shrink-0">·</span>
                        <span className="truncate">{item.author}</span>
                      </>
                    )}
                  </div>
                  <ExternalLink
                    size={12}
                    className="text-gray-300 group-hover:text-emerald-500 transition-colors flex-shrink-0 ml-2"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      <p className="text-[10px] text-gray-400 mt-10 text-center">
        Notícias via InfoMoney e Google News · Conteúdo de responsabilidade dos veículos originais · Apenas informativo
      </p>
    </div>
  );
};

export default NewsLive;
