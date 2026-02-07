import React, { useState, useEffect, useRef } from 'react';
import { RefreshCw, TrendingUp, TrendingDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface StockData {
  symbol: string;
  name: string;
  close: number;
  change: number;
  changePercent: number;
  volume: number;
}

const StockTickerLive: React.FC = () => {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Ações B3 para monitorar
  const symbols = ['PETR4', 'VALE3', 'ITUB4', 'ABEV3', 'BBDC4'];

  // Função para buscar dados da API
  const fetchStocks = async () => {
    try {
      setLoading(true);
      setError(null);

      const fetchPromises = symbols.map(symbol =>
        fetch(`https://brapi.dev/api/quote/${symbol}`)
          .then(res => res.json())
          .then(data => {
            if (data.results && data.results.length > 0) {
              const stock = data.results[0];
              const close = parseFloat(stock.regularMarketPrice || stock.close || 0);
              const previousClose = parseFloat(stock.previousClose || stock.regularMarketPreviousClose || close);
              const change = close - previousClose;
              const changePercent = previousClose > 0 ? ((change / previousClose) * 100) : 0;
              
              return {
                symbol: stock.symbol,
                name: stock.shortName || stock.longName || symbol,
                close: close,
                change: change,
                changePercent: changePercent,
                volume: parseInt(stock.regularMarketVolume || stock.volume || 0)
              };
            }
            return null;
          })
          .catch(err => {
            console.error(`Erro ao buscar ${symbol}:`, err);
            return null;
          })
      );

      const results = await Promise.all(fetchPromises);
      const validStocks = results.filter(stock => stock !== null) as StockData[];

      setStocks(validStocks);
      setLastUpdate(new Date());
      setLoading(false);
    } catch (err) {
      console.error('Erro ao buscar dados de ações:', err);
      setError('Erro ao carregar dados. Tentando novamente...');
      setLoading(false);
    }
  };

  // Buscar dados ao montar o componente
  useEffect(() => {
    fetchStocks();

    // Auto-refresh a cada 60 segundos
    const interval = setInterval(() => {
      fetchStocks();
    }, 60000); // 60 segundos

    return () => clearInterval(interval);
  }, []);

  // Verificar scroll position
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [stocks]);

  // Funções de scroll
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  // Formatar valor em moeda
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  // Formatar volume
  const formatVolume = (volume: number) => {
    if (volume >= 1000000) {
      return `${(volume / 1000000).toFixed(1)}M`;
    } else if (volume >= 1000) {
      return `${(volume / 1000).toFixed(1)}K`;
    }
    return volume.toString();
  };

  // Calcular tempo desde última atualização
  const getTimeAgo = () => {
    if (!lastUpdate) return '';
    const seconds = Math.floor((Date.now() - lastUpdate.getTime()) / 1000);
    if (seconds < 60) return `há ${seconds}s`;
    if (seconds < 3600) return `há ${Math.floor(seconds / 60)}m`;
    return `há ${Math.floor(seconds / 3600)}h`;
  };

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 to-black py-4 sticky top-20 z-30 shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header com status */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">
              Mercado B3 - Tempo Real
            </h3>
            <div className="flex items-center gap-2">
              {loading ? (
                <RefreshCw size={14} className="text-amber-500 animate-spin" />
              ) : (
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              )}
              <span className="text-[10px] text-gray-500 font-medium">
                {loading ? 'Atualizando...' : `Atualizado ${getTimeAgo()}`}
              </span>
            </div>
          </div>
          <button
            onClick={fetchStocks}
            disabled={loading}
            className="text-gray-400 hover:text-white transition-colors disabled:opacity-50"
            title="Atualizar agora"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>

        {/* Erro message */}
        {error && (
          <div className="bg-red-900/20 border border-red-500/30 text-red-300 text-xs px-3 py-2 rounded mb-3">
            {error}
          </div>
        )}

        {/* Ticker com scroll */}
        {stocks.length > 0 ? (
          <div className="relative flex items-center gap-2">
            {/* Botão esquerdo */}
            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-gray-900 to-transparent p-2 text-gray-400 hover:text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            {/* Container de scroll */}
            <div
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="flex-1 overflow-x-auto scroll-smooth"
              style={{ scrollBehavior: 'smooth' }}
            >
              <div className="flex gap-6 pb-2 px-2">
                {stocks.map(stock => (
                  <div
                    key={stock.symbol}
                    className="flex items-center gap-4 bg-gray-800/30 px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer flex-shrink-0"
                  >
                    {/* Símbolo e Nome */}
                    <div>
                      <p className="text-sm font-black text-white hover:text-amber-500 transition-colors">
                        {stock.symbol}
                      </p>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                        {stock.name}
                      </p>
                    </div>

                    {/* Divisor */}
                    <div className="w-px h-8 bg-gray-700"></div>

                    {/* Preço */}
                    <div>
                      <p className="text-sm font-bold text-white">
                        {formatCurrency(stock.close)}
                      </p>
                    </div>

                    {/* Variação */}
                    <div
                      className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
                        stock.change >= 0
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {stock.change >= 0 ? (
                        <TrendingUp size={14} />
                      ) : (
                        <TrendingDown size={14} />
                      )}
                      <span className="text-sm font-bold">
                        {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} (
                        {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                      </span>
                    </div>

                    {/* Volume (opcional, hidden em mobile) */}
                    <div className="hidden md:block text-right">
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                        Vol
                      </p>
                      <p className="text-xs font-semibold text-gray-300">
                        {formatVolume(stock.volume)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Botão direito */}
            {canScrollRight && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-gray-900 to-transparent p-2 text-gray-400 hover:text-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        ) : !loading && (
          <div className="text-center py-4 text-gray-400 text-sm">
            {error ? 'Não foi possível carregar os dados. Tentando novamente...' : 'Carregando dados de mercado...'}
          </div>
        )}

        {/* Nota de disclaimer */}
        <div className="text-[10px] text-gray-500 mt-3 border-t border-gray-700 pt-3">
          ℹ️ Dados da B3 com atualização a cada 60 segundos. Utilizado para fins informativos apenas.
        </div>
      </div>
    </div>
  );
};

export default StockTickerLive;
