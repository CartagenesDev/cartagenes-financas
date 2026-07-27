import React, { useState, useEffect, useCallback } from 'react';
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';

interface StockRank {
  symbol: string;
  changePercent: number;
  close: number;
}

// ─── Universo de ações monitorado para o ranking ─────────────────────────────
// Plano gratuito da brapi.dev: 1 símbolo por requisição.
// 30 ações cobrindo os principais setores da B3.
const RANKING_SYMBOLS = [
  // Bancos
  'ITUB4', 'BBDC4', 'BBAS3', 'SANB11', 'BPAC11',
  // Petróleo, energia e química
  'PETR4', 'PRIO3', 'CSAN3', 'RECV3', 'BRKM5',
  // Mineração e siderurgia
  'VALE3', 'CSNA3', 'GGBR4', 'USIM5',
  // Varejo
  'MGLU3', 'LREN3', 'VIVA3', 'AMER3',
  // Saúde
  'HAPV3', 'RDOR3', 'FLRY3',
  // Energia elétrica
  'ELET3', 'CMIG4', 'ENGI11', 'EQTL3',
  // Indústria e tecnologia
  'WEGE3', 'TOTS3', 'EMBR3',
  // Alimentos e bebidas
  'ABEV3', 'JBSS3', 'BEEF3',
];
// ─────────────────────────────────────────────────────────────────────────────

const INTERVAL_MS = 15 * 60 * 1_000; // 15 minutos

const RankingsLive: React.FC = () => {
  const [topAltas, setTopAltas] = useState<StockRank[]>([]);
  const [topQuedas, setTopQuedas] = useState<StockRank[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [error, setError] = useState(false);

  const fetchRankings = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const BATCH = 5;
      const all: StockRank[] = [];

      for (let i = 0; i < RANKING_SYMBOLS.length; i += BATCH) {
        const batch = RANKING_SYMBOLS.slice(i, i + BATCH);
        const fetches = batch.map(async (symbol) => {
          try {
            const res = await fetch(`/api/quote?symbol=${symbol}`);
            if (!res.ok) return null;
            const data = await res.json();
            if (!data.results?.length) return null;
            const s = data.results[0];
            const close = Number(s.regularMarketPrice) || 0;
            if (close <= 0) return null;
            // usa o campo direto da API, sem recalcular manualmente
            const changePercent = Number(s.regularMarketChangePercent) || 0;
            return { symbol: s.symbol || symbol, changePercent, close } as StockRank;
          } catch {
            return null;
          }
        });

        const results = await Promise.all(fetches);
        results.forEach((r) => r && all.push(r));
      }

      if (all.length === 0) {
        setError(true);
        return;
      }

      const altas = all
        .filter((s) => s.changePercent > 0)
        .sort((a, b) => b.changePercent - a.changePercent)
        .slice(0, 5);

      const quedas = all
        .filter((s) => s.changePercent < 0)
        .sort((a, b) => a.changePercent - b.changePercent)
        .slice(0, 5);

      setTopAltas(altas);
      setTopQuedas(quedas);
      setLastUpdate(new Date());
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRankings();
    const interval = setInterval(fetchRankings, INTERVAL_MS);
    return () => clearInterval(interval);
  }, [fetchRankings]);

  const timeAgo = () => {
    if (!lastUpdate) return '';
    const s = Math.floor((Date.now() - lastUpdate.getTime()) / 1000);
    if (s < 60) return `há ${s}s`;
    return `há ${Math.floor(s / 60)}m`;
  };

  const fmt = (v: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(v);

  const RankingList = ({
    items,
    type,
  }: {
    items: StockRank[];
    type: 'alta' | 'queda';
  }) => {
    const isAlta = type === 'alta';

    if (loading) {
      return (
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-9 bg-gray-100 rounded-lg animate-pulse" />
          ))}
        </div>
      );
    }

    if (error || items.length === 0) {
      return (
        <p className="text-xs text-gray-400 text-center py-3">
          Dados indisponíveis no momento.
        </p>
      );
    }

    return (
      <div className="space-y-1.5">
        {items.map((stock, idx) => (
          <div
            key={stock.symbol}
            className={`flex items-center justify-between px-3 py-2 rounded-xl border transition-colors ${
              isAlta
                ? 'bg-emerald-50 border-emerald-100 hover:bg-emerald-100'
                : 'bg-red-50 border-red-100 hover:bg-red-100'
            }`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`text-[10px] font-black w-4 text-center ${
                  isAlta ? 'text-emerald-600' : 'text-red-600'
                }`}
              >
                {idx + 1}
              </span>
              <div>
                <p className="text-sm font-black text-gray-900">{stock.symbol}</p>
                <p className="text-[10px] text-gray-500">{fmt(stock.close)}</p>
              </div>
            </div>

            <div
              className={`flex items-center gap-1 font-black text-sm ${
                isAlta ? 'text-emerald-600' : 'text-red-600'
              }`}
            >
              {isAlta ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              {isAlta ? '+' : ''}
              {stock.changePercent.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">
            Rankings B3
          </h3>
          <p className="text-[10px] text-gray-400 mt-0.5">
            {loading
              ? 'Atualizando...'
              : lastUpdate
              ? `Atualizado ${timeAgo()}`
              : '—'}
          </p>
        </div>
        <button
          onClick={fetchRankings}
          disabled={loading}
          className="text-gray-400 hover:text-gray-700 transition-colors disabled:opacity-40"
          title="Atualizar rankings"
        >
          <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="flex items-center gap-2 text-sm font-black text-gray-800 mb-3">
            <div className="bg-emerald-100 p-1 rounded-lg">
              <TrendingUp size={14} className="text-emerald-600" />
            </div>
            TOP 5 — MAIORES ALTAS
          </h4>
          <RankingList items={topAltas} type="alta" />
        </div>

        <div className="border-t border-gray-100" />

        <div>
          <h4 className="flex items-center gap-2 text-sm font-black text-gray-800 mb-3">
            <div className="bg-red-100 p-1 rounded-lg">
              <TrendingDown size={14} className="text-red-600" />
            </div>
            TOP 5 — MAIORES QUEDAS
          </h4>
          <RankingList items={topQuedas} type="queda" />
        </div>
      </div>

      <div className="text-[9px] text-gray-400 mt-5 border-t border-gray-100 pt-4 text-center leading-relaxed">
        {RANKING_SYMBOLS.length} ações monitoradas · Atualiza a cada 15min · Apenas informativo
      </div>
    </div>
  );
};

export default RankingsLive;
