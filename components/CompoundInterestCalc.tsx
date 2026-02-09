
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Calculator, Calendar, TrendingUp, ArrowUpRight, Trash2 } from 'lucide-react';
import { Chart, registerables } from 'chart.js';

// Registrar componentes necessários do Chart.js
Chart.register(...registerables);

const CompoundInterestCalc: React.FC = () => {
  const [initial, setInitial] = useState<number>(0);
  const [monthly, setMonthly] = useState<number>(0);
  const [rate, setRate] = useState<number>(0); 
  const [period, setPeriod] = useState<number>(0); 
  const [periodType, setPeriodType] = useState<'years' | 'months'>('years');
  const [result, setResult] = useState<{total: number, invested: number, interest: number} | null>(null);
  const [tableData, setTableData] = useState<Array<{month: number, interestEarned: number, totalInvested: number, totalInterest: number, totalaccumulated: number}>>([]);
  
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const handleCurrencyInput = (e: React.ChangeEvent<HTMLInputElement>, setter: (value: number) => void) => {
    const value = e.target.value.replace(/\D/g, '');
    setter(Number(value) / 100);
  };

  const calculate = useCallback(() => {
    const totalMonths = periodType === 'years' ? period * 12 : period;
    const monthlyRate = Math.pow(1 + rate / 100, 1 / 12) - 1; // Conversão de taxa anual para mensal real
    
    let currentBalance = initial;
    let totalInvested = initial;
    
    const historyData: number[] = [initial];
    const investedHist: number[] = [initial];
    const labels: string[] = ['Início'];
    
    // Preparar dados da tabela
    const newTableData: Array<{month: number, interestEarned: number, totalInvested: number, totalInterest: number, totalaccumulated: number}> = [];

    // Lógica de cálculo mês a mês
    for (let i = 1; i <= totalMonths; i++) {
      const interestEarned = currentBalance * monthlyRate;
      currentBalance = currentBalance + interestEarned + monthly;
      totalInvested += monthly;
      
      // Armazenar dados para a tabela
      newTableData.push({
        month: i,
        interestEarned: interestEarned,
        totalInvested: totalInvested,
        totalInterest: currentBalance - totalInvested,
        totalaccumulated: currentBalance
      });

      // Amostragem inteligente para o gráfico não ficar poluído em períodos longos
      if (totalMonths <= 24 || i % Math.ceil(totalMonths / 20) === 0 || i === totalMonths) {
        historyData.push(currentBalance);
        investedHist.push(totalInvested);
        labels.push(periodType === 'years' ? `Ano ${Math.floor(i/12)}` : `Mês ${i}`);
      }
    }

    setResult({
      total: currentBalance,
      invested: totalInvested,
      interest: currentBalance - totalInvested
    });
    
    setTableData(newTableData);

    // Atualizar Gráfico
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        const gradientTotal = ctx.createLinearGradient(0, 0, 0, 300);
        gradientTotal.addColorStop(0, 'rgba(16, 185, 129, 0.2)');
        gradientTotal.addColorStop(1, 'rgba(16, 185, 129, 0)');

        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels,
            datasets: [
              {
                label: 'Total Acumulado',
                data: historyData,
                borderColor: '#10b981', // Emerald 500
                backgroundColor: gradientTotal,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 4,
                borderWidth: 3
              },
              {
                label: 'Valor Investido',
                data: investedHist,
                borderColor: '#374151', // Gray 700 (Black-ish)
                backgroundColor: 'transparent',
                fill: false,
                tension: 0.1,
                pointRadius: 0,
                pointHoverRadius: 4,
                borderWidth: 2,
                borderDash: [5, 5]
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
              mode: 'index',
              intersect: false,
            },
            plugins: {
              legend: { 
                display: true,
                position: 'top',
                align: 'end',
                labels: { boxWidth: 10, usePointStyle: true, font: { size: 10 } }
              },
              tooltip: {
                backgroundColor: 'rgba(0,0,0,0.9)',
                titleFont: { size: 10 },
                bodyFont: { size: 11, weight: 'bold' },
                callbacks: {
                  label: (context) => ` ${context.dataset.label}: R$ ${context.parsed.y.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}`
                }
              }
            },
            scales: {
              x: { display: false },
              y: {
                beginAtZero: true,
                ticks: {
                  font: { size: 9 },
                  callback: (value) => 'R$ ' + Number(value).toLocaleString('pt-BR', { notation: 'compact' })
                },
                grid: { color: 'rgba(0,0,0,0.03)' },
                border: { display: false }
              }
            }
          }
        });
      }
    }
  }, [initial, monthly, rate, period, periodType]);

  const handleClear = () => {
    setInitial(0);
    setMonthly(0);
    setRate(0);
    setPeriod(0);
    setResult(null);
    setTableData([]);
    if (chartInstance.current) {
      chartInstance.current.destroy();
      chartInstance.current = null;
    }
  };

  // Efeito inicial e limpeza
  useEffect(() => {
    calculate();
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [calculate]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
            <Calculator size={20} />
          </div>
          <h3 className="font-bold text-lg text-gray-800">Calculadora de Juros Compostos</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controles */}
        <div className="space-y-4">
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Investimento Inicial</label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-400 text-sm font-bold">R$</span>
              <input
                type="text"
                value={formatCurrency(initial)}
                onChange={(e) => handleCurrencyInput(e, setInitial)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3 py-2.5 text-sm font-bold focus:ring-2 focus:ring-amber-500 outline-none transition-all placeholder-gray-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Aporte Mensal</label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-400 text-sm font-bold">R$</span>
              <input
                type="text"
                value={formatCurrency(monthly)}
                onChange={(e) => handleCurrencyInput(e, setMonthly)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3 py-2.5 text-sm font-bold focus:ring-2 focus:ring-amber-500 outline-none transition-all placeholder-gray-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Taxa Anual (%)</label>
              <input
                type="number"
                value={rate === 0 ? '' : rate}
                onChange={(e) => setRate(Number(e.target.value))}
                placeholder="0"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-bold focus:ring-2 focus:ring-amber-500 outline-none transition-all placeholder-gray-300"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Tempo ({periodType === 'years' ? 'Anos' : 'Meses'})</label>
              <div className="flex gap-1 bg-gray-100 p-1 rounded-xl">
                <input
                  type="number"
                  value={period === 0 ? '' : period}
                  onChange={(e) => setPeriod(Number(e.target.value))}
                  placeholder="0"
                  className="w-full bg-white border-none rounded-lg px-2 py-1 text-sm font-bold outline-none placeholder-gray-300 bg-transparent"
                />
                <button 
                  onClick={() => setPeriodType(prev => prev === 'years' ? 'months' : 'years')}
                  title="Trocar Anos/Meses"
                  className="bg-amber-500 text-white p-2 rounded-lg hover:bg-black transition-colors"
                >
                  <Calendar size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={calculate}
              className="flex-1 bg-black hover:bg-amber-500 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/10 group"
            >
              Calcular <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={handleClear}
              title="Limpar campos"
              className="bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 font-bold px-4 rounded-xl transition-all flex items-center justify-center"
            >
              <Trash2 size={18} />
            </button>
          </div>
          
        </div>

        {/* Resultados e Gráfico */}
        <div className="flex flex-col h-full min-h-[300px]">
          <div className="flex-grow relative mb-4">
             <canvas ref={chartRef}></canvas>
          </div>
          
          {result && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                <p className="text-[9px] font-black text-emerald-600 uppercase tracking-widest mb-1">Total Final</p>
                <p className="text-sm sm:text-base font-black text-emerald-900">R$ {result.total.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">Total Investido</p>
                <p className="text-sm sm:text-base font-black text-gray-800">R$ {result.invested.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</p>
              </div>
              <div className="bg-amber-50 p-3 rounded-xl border border-amber-100">
                <p className="text-[9px] font-black text-amber-600 uppercase tracking-widest mb-1">Total em Juros</p>
                <p className="text-sm sm:text-base font-black text-amber-900">R$ {result.interest.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
          )}
          {result && (
            <p style={{ fontSize: '10px', color: '#666', marginTop: '6px' }}>
              Simulação matemática. Não representa garantia de retorno.
            </p>
          )}
        </div>
      </div>
      
      {tableData.length > 0 && (
        <div className="mt-8 border-t border-gray-100 pt-8">
          <h4 className="text-lg font-bold text-red-700 mb-4 text-center">Tabela:</h4>
          <div className="overflow-x-auto overflow-y-auto max-h-[450px] rounded-lg border border-gray-100 shadow-inner">
            <table className="w-full text-sm relative">
              <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10 shadow-sm">
                <tr>
                  <th className="py-3 px-4 text-center font-bold">Mês</th>
                  <th className="py-3 px-4 text-center font-bold">Juros</th>
                  <th className="py-3 px-4 text-center font-bold">Total Investido</th>
                  <th className="py-3 px-4 text-center font-bold">Total Juros</th>
                  <th className="py-3 px-4 text-center font-bold">Total Acumulado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {tableData.map((row) => (
                  <tr key={row.month} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-center text-gray-600">{row.month}</td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      {row.interestEarned.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      {row.totalInvested.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      {row.totalInterest.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600 font-bold">
                      {row.totalaccumulated.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompoundInterestCalc;
