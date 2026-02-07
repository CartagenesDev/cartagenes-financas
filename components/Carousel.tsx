
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NEWS_CAROUSEL } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % NEWS_CAROUSEL.length);
  const prev = () => setCurrent((prev) => (prev - 1 + NEWS_CAROUSEL.length) % NEWS_CAROUSEL.length);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[450px] overflow-hidden rounded-2xl shadow-xl group">
      {NEWS_CAROUSEL.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none ${
            index === current ? 'opacity-100 pointer-events-auto' : 'opacity-0'
          }`}
        >
          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover brightness-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
            <span className="bg-amber-500 text-black px-3 py-1 text-xs font-bold rounded-full w-fit mb-4">
              {item.category}
            </span>
            <h2 className="text-white text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight">
              {item.title}
            </h2>
            <p className="text-gray-200 text-lg max-w-2xl mb-8 line-clamp-2">
              {item.subtitle}
            </p>
            <Link 
              to={`/noticias/${item.slug}`} 
              className="bg-white hover:bg-amber-500 text-black font-bold px-8 py-3 rounded-lg transition-colors w-fit"
            >
              {item.cta}
            </Link>
          </div>
        </div>
      ))}

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
        {NEWS_CAROUSEL.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 transition-all duration-300 rounded-full ${i === current ? 'w-8 bg-amber-500' : 'w-2 bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
