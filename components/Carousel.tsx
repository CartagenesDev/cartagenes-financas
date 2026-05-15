import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { LiveNewsItem } from '../services/newsService';

interface Props {
  items: LiveNewsItem[];
}

const CATEGORY_COLORS: Record<string, string> = {
  Financas: 'bg-blue-500 text-white',
  Economia: 'bg-violet-500 text-white',
  'Bem-estar': 'bg-emerald-500 text-white',
};

const CATEGORY_LABELS: Record<string, string> = {
  Financas: 'Finanças',
  Economia: 'Economia',
  'Bem-estar': 'Bem-estar',
};

const Carousel: React.FC<Props> = ({ items }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % items.length);
  const prev = () => setCurrent((prev) => (prev - 1 + items.length) % items.length);

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  if (items.length === 0) {
    return (
      <div className="w-full h-[450px] rounded-2xl bg-gray-200 animate-pulse" />
    );
  }

  return (
    <div className="relative w-full h-[450px] overflow-hidden rounded-2xl shadow-xl group">
      {items.map((item, index) => (
        <div
          key={`${item.link}-${index}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none ${
            index === current ? 'opacity-100 pointer-events-auto' : 'opacity-0'
          }`}
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover brightness-50"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=60';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
            <span
              className={`px-3 py-1 text-xs font-bold rounded-full w-fit mb-4 ${
                CATEGORY_COLORS[item.category] ?? 'bg-amber-500 text-black'
              }`}
            >
              {CATEGORY_LABELS[item.category] ?? item.category}
            </span>
            <h2 className="text-white text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight line-clamp-2">
              {item.title}
            </h2>
            {item.author && (
              <p className="text-gray-300 text-sm mb-6">
                {item.author}
                {item.pubDate && (
                  <span className="ml-2 text-gray-400">
                    · {new Date(item.pubDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </span>
                )}
              </p>
            )}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-amber-500 text-black font-bold px-8 py-3 rounded-lg transition-colors w-fit flex items-center gap-2"
            >
              Ler matéria completa <ExternalLink size={16} />
            </a>
          </div>
        </div>
      ))}

      {items.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-6 right-8 flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  i === current ? 'w-8 bg-amber-500' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
