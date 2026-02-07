
import React, { useEffect, useRef, useState } from 'react';
import { STOCKS } from '../constants';
import { TrendingUp, TrendingDown } from 'lucide-react';

const PIXELS_PER_SECOND = 80; // used to compute animation duration from content width

const StockTicker: React.FC = () => {
  const [items, setItems] = useState(() => STOCKS.map(s => ({ ...s })));
  const trackRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  // compute animation duration based on track width
  const updateAnimationDuration = () => {
    const track = trackRef.current;
    if (!track) return;
    // track contains duplicated items for seamless loop, distance = half scrollWidth
    const loopDistance = track.scrollWidth / 2 || track.offsetWidth;
    const duration = Math.max(12, loopDistance / PIXELS_PER_SECOND);
    track.style.animationDuration = `${duration}s`;
  };

  useEffect(() => {
    updateAnimationDuration();
    const onResize = () => updateAnimationDuration();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    // price update loop
    intervalRef.current = window.setInterval(() => {
      setItems(prev => {
        return prev.map((s) => {
          const pct = (Math.random() * 2.2 - 1); // -1% .. +1.2%
          const oldPrice = s.price;
          const newPrice = +(oldPrice * (1 + pct / 100)).toFixed(2);
          const changePct = ((newPrice - oldPrice) / oldPrice) * 100;
          return { ...s, price: newPrice, change: changePct };
        });
      });
    }, 1400);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const rendered = [...items, ...items];

  return (
    <div className="top-ticker" role="region" aria-label="Ticker de ações">
      <div className="ticker-viewport">
        <div className="ticker-track" ref={trackRef}>
          {rendered.map((stock, idx) => (
            <div key={`${stock.symbol}-${idx}`} className="ticker-item">
              <span className="ticker-symbol">{stock.symbol}</span>
              <span className={`ticker-price ${stock.change >= 0 ? 'up' : 'down'}`}>R$ {stock.price.toFixed(2)}</span>
              <span className={`ticker-change ${stock.change >= 0 ? 'up' : 'down'}`}>
                {stock.change >= 0 ? <TrendingUp size={12} className="inline-block mr-1" /> : <TrendingDown size={12} className="inline-block mr-1" />}
                {stock.change >= 0 ? '+' : ''}{Math.abs(stock.change).toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockTicker;
