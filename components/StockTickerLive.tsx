import React, { useState, useEffect } from 'react';
import { RefreshCw, TrendingUp, TrendingDown } from 'lucide-react';

interface StockData {
  symbol: string;
  name: string;
  close: number;
  change: number;
  changePercent: number;
  volume: number;
}

// ─── Adicione ou remova ações aqui para personalizar o ticker ──────────────
const TICKER_SYMBOLS = [
  // Bancos
  'ITUB4', 'BBDC4', 'BBAS3', 'SANB11',
  // Petróleo e energia
  'PETR4', 'PRIO3', 'CSAN3', 'RECV3',
  // Mineração e siderurgia
  'VALE3', 'CSNA3', 'GGBR4', 'USIM5',
  // Varejo
  'MGLU3', 'LREN3', 'VIVA3',
  // Saúde
  'HAPV3', 'RDOR3',
  // Utilidades e energia elétrica
  'ELET3', 'CMIG4', 'ENGI11',
  // Indústria e tecnologia
  'WEGE3', 'TOTS3', 'EMBR3',
  // Alimentos e bebidas
  'ABEV3', 'JBSS3',
];
// ─────────────────────────────────────────────────────────────────────────────

const StockTickerLive: React.FC = () => {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchStocks = async () => {
    try {
      setLoading(true);
      setError(null);

      const BATCH = 5;
      const results: StockData[] = [];

      for (let i = 0; i < TICKER_SYMBOLS.length; i += BATCH) {
        const batch = TICKER_SYMBOLS.slice(i, i + BATCH);
        const fetches = batch.map(async (symbol) => {
          try {
            const res = await fetch(`/api/quote?symbol=${symbol}`);
            if (!res.ok) return null;
            const data = await res.json();
            if (!data.results?.length) return null;
            const s = data.results[0];
            const close = Number(s.regularMarketPrice) || 0;
            if (close <= 0) return null;
            return {
              symbol: s.symbol || symbol,
              name: s.shortName || s.longName || symbol,
              close,
              change: Number(s.regularMarketChange) || 0,
              changePercent: Number(s.regularMarketChangePercent) || 0,
              volume: Number(s.regularMarketVolume) || 0,
            } as StockData;
          } catch {
            return null;
          }
        });

        const batchResults = await Promise.all(fetches);
        batchResults.forEach((r) => r && results.push(r));
      }

      if (results.length > 0) {
        setStocks(results);
        setLastUpdate(new Date());
      }
    } catch {
      setError('Erro ao carregar dados. Tentando novamente...');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStocks();
    const interval = setInterval(fetchStocks, 60_000);
    return () => clearInterval(interval);
  }, []);

  const fmt = (v: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(v);

  const fmtVol = (v: number) =>
    v >= 1_000_000 ? `${(v / 1_000_000).toFixed(1)}M` : v >= 1_000 ? `${(v / 1_000).toFixed(1)}K` : String(v);

  const timeAgo = () => {
    if (!lastUpdate) return '';
    const s = Math.floor((Date.now() - lastUpdate.getTime()) / 1000);
    if (s < 60) return `há ${s}s`;
    if (s < 3600) return `há ${Math.floor(s / 60)}m`;
    return `há ${Math.floor(s / 3600)}h`;
  };

  // Velocidade: cada ação ocupa ~180px, scroll a ~60px/s
  const duration = Math.max(stocks.length * 3, 40);

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 to-black py-4 sticky top-20 z-30 shadow-lg border-b border-gray-700 overflow-hidden">
      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: ticker-scroll ${duration}s linear infinite;
          will-change: transform;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">
              Mercado B3 — Tempo Real
            </h3>
            <div className="flex items-center gap-2">
              {loading ? (
                <RefreshCw size={14} className="text-amber-500 animate-spin" />
              ) : (
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              )}
              <span className="text-[10px] text-gray-500 font-medium">
                {loading ? 'Atualizando...' : `Atualizado ${timeAgo()}`}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-gray-600 font-medium hidden sm:block">
              {stocks.length} ações monitoradas
            </span>
            <button
              onClick={fetchStocks}
              disabled={loading}
              className="text-gray-400 hover:text-white transition-colors disabled:opacity-50"
              title="Atualizar agora"
            >
              <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-900/20 border border-red-500/30 text-red-300 text-xs px-3 py-2 rounded mb-3">
            {error}
          </div>
        )}

        {stocks.length > 0 ? (
          /* Faixas laterais para suavizar entrada/saída */
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden">
              {/* Duplica as ações para loop contínuo */}
              <div className="ticker-track flex gap-4 w-max">
                {[...stocks, ...stocks].map((stock, i) => (
                  <div
                    key={`${stock.symbol}-${i}`}
                    className="flex items-center gap-3 bg-gray-800/40 px-4 py-2.5 rounded-xl flex-shrink-0 border border-gray-700/30 cursor-default"
                  >
                    <div>
                      <p className="text-sm font-black text-white">{stock.symbol}</p>
                      <p className="text-[9px] text-gray-500 uppercase tracking-widest truncate max-w-[80px]">
                        {stock.name}
                      </p>
                    </div>

                    <div className="w-px h-8 bg-gray-700" />

                    <p className="text-sm font-bold text-white">{fmt(stock.close)}</p>

                    <div
                      className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold ${
                        stock.change >= 0
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {stock.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      {stock.change >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                    </div>

                    <div className="hidden lg:block text-right">
                      <p className="text-[9px] text-gray-600 uppercase tracking-widest">Vol</p>
                      <p className="text-xs font-semibold text-gray-400">{fmtVol(stock.volume)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : !loading && (
          <div className="text-center py-4 text-gray-500 text-sm">
            {error || 'Carregando dados de mercado...'}
          </div>
        )}

        <div className="text-[10px] text-gray-600 mt-3 border-t border-gray-800 pt-3 flex items-center justify-between">
          <span>Dados da B3 com atualização a cada 60 segundos. Apenas informativos.</span>
          <span className="text-gray-700">brapi.dev</span>
        </div>
      </div>
    </div>
  );
};

export default StockTickerLive;
