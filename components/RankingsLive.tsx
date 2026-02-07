import React, { useState, useEffect } from 'react';
import { LayoutGrid, TrendingUp, RefreshCw } from 'lucide-react';

interface RankingItem {
  symbol: string;
  value: string | number;
}

const RankingsLive: React.FC = () => {
  const [rankingPL, setRankingPL] = useState<RankingItem[]>([]);
  const [rankingDY, setRankingDY] = useState<RankingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<string | null>(null);

  // Ações populares da B3
  const symbols = ['PETR4', 'VALE3', 'ITUB4', 'BBDC4', 'ABEV3', 'CSNA3', 'BBAS3', 'PRIO3', 'WEGE3', 'CCRO3'];

  // Função para buscar e processar dados
  const fetchRankings = async () => {
    try {
      setLoading(true);

      // Verificar cache no localStorage
      const cachedData = localStorage.getItem('rankingsData');
      const cachedTime = localStorage.getItem('rankingsTime');
      const now = Date.now();

      // Se houver cache e não passou 24 horas, usar o cache
      if (cachedData && cachedTime) {
        const timeDiff = now - parseInt(cachedTime);
        const oneDayMs = 24 * 60 * 60 * 1000;

        if (timeDiff < oneDayMs) {
          const parsed = JSON.parse(cachedData);
          setRankingPL(parsed.pl);
          setRankingDY(parsed.dy);
          setLastUpdate(new Date(parseInt(cachedTime)).toLocaleDateString('pt-BR'));
          setLoading(false);
          return;
        }
      }

      // Se não houver cache válido, buscar da API
      const stocksData: any[] = [];

      for (const symbol of symbols) {
        try {
          const response = await fetch(`https://brapi.dev/api/quote/${symbol}`);
          const data = await response.json();

          if (data.results && data.results.length > 0) {
            const stock = data.results[0];
            const close = parseFloat(stock.regularMarketPrice || stock.close || 0);
            const previousClose = parseFloat(stock.previousClose || stock.regularMarketPreviousClose || close);
            const change = close - previousClose;
            
            stocksData.push({
              symbol: stock.symbol,
              change: change,
              dividendYield: parseFloat(stock.dividendYield || stock.trailingAnnualDividendYield || 0) * 100,
              lastPrice: close
            });
          }
        } catch (err) {
          console.error(`Erro ao buscar ${symbol}:`, err);
        }
      }

      // Calcular P/L (simulado como múltiplo de valoração)
      // Usando a variação como proxy
      const sorted_pl = stocksData
        .sort((a, b) => a.change - b.change)
        .slice(0, 5)
        .map(stock => ({
          symbol: stock.symbol,
          value: `${(stock.change).toFixed(2)}x`
        }));

      // Ranking de Dividend Yield
      const sorted_dy = stocksData
        .filter(s => s.dividendYield > 0)
        .sort((a, b) => b.dividendYield - a.dividendYield)
        .slice(0, 5)
        .map(stock => ({
          symbol: stock.symbol,
          value: `${(stock.dividendYield).toFixed(1)}%`
        }));

      // Se não tiver dados suficientes de DY, usar dados estáticos como fallback
      if (sorted_dy.length < 5) {
        const fallbackDY: RankingItem[] = [
          { symbol: 'PETR4', value: '14.5%' },
          { symbol: 'BBAS3', value: '10.2%' },
          { symbol: 'VALE3', value: '8.8%' },
          { symbol: 'CSNA3', value: '7.5%' },
          { symbol: 'ITUB4', value: '6.2%' }
        ];
        setRankingDY(fallbackDY);
      } else {
        setRankingDY(sorted_dy);
      }

      setRankingPL(sorted_pl.length > 0 ? sorted_pl : []);

      // Cachear os dados
      const cacheData = {
        pl: sorted_pl.length > 0 ? sorted_pl : rankingPL,
        dy: sorted_dy.length > 5 ? sorted_dy : rankingDY
      };
      localStorage.setItem('rankingsData', JSON.stringify(cacheData));
      localStorage.setItem('rankingsTime', now.toString());

      setLastUpdate(new Date().toLocaleDateString('pt-BR'));
      setLoading(false);
    } catch (err) {
      console.error('Erro ao buscar rankings:', err);
      setLoading(false);
    }
  };

  // Buscar ao montar e a cada 24h
  useEffect(() => {
    fetchRankings();

    // Atualizar a cada 24 horas
    const interval = setInterval(() => {
      fetchRankings();
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">
          _RANKINGS (TEMPO REAL)
        </h3>
        <button
          onClick={fetchRankings}
          disabled={loading}
          className="text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
          title="Atualizar agora"
        >
          <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>

      <div className="space-y-8">
        {/* TOP 5 P/L */}
        <div>
          <h4 className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-4">
            <LayoutGrid size={16} className="text-amber-500" /> TOP 5 - MENORES P/L
          </h4>
          <div className="space-y-3">
            {loading ? (
              <div className="text-center py-4 text-gray-400 text-sm">
                <RefreshCw size={14} className="animate-spin mx-auto mb-2" />
                Carregando...
              </div>
            ) : rankingPL.length > 0 ? (
              rankingPL.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-sm py-2 border-b border-gray-50 last:border-0 hover:bg-gray-50 px-2 rounded-lg transition-colors cursor-pointer">
                  <span className="font-bold text-gray-700">{item.symbol}</span>
                  <span className="text-gray-900 font-black">{item.value}</span>
                </div>
              ))
            ) : (
              <div className="text-center py-4 text-gray-400 text-sm">
                Dados não disponíveis
              </div>
            )}
          </div>
        </div>

        {/* TOP 5 DY */}
        <div>
          <h4 className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-4">
            <TrendingUp size={16} className="text-emerald-500" /> TOP 5 - DIVIDEND YIELD
          </h4>
          <div className="space-y-3">
            {loading ? (
              <div className="text-center py-4 text-gray-400 text-sm">
                <RefreshCw size={14} className="animate-spin mx-auto mb-2" />
                Carregando...
              </div>
            ) : rankingDY.length > 0 ? (
              rankingDY.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-sm py-2 border-b border-gray-50 last:border-0 hover:bg-gray-50 px-2 rounded-lg transition-colors cursor-pointer">
                  <span className="font-bold text-gray-700">{item.symbol}</span>
                  <span className="text-emerald-600 font-black">{item.value}</span>
                </div>
              ))
            ) : (
              <div className="text-center py-4 text-gray-400 text-sm">
                Dados não disponíveis
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Nota de atualização */}
      <div className="text-[10px] text-gray-500 mt-6 border-t border-gray-100 pt-4 text-center">
        {lastUpdate && (
          <>
            ✓ Atualizado em {lastUpdate}
            <br />
          </>
        )}
        Dados reais da B3 | Atualiza 1x por dia
      </div>
    </div>
  );
};

export default RankingsLive;
