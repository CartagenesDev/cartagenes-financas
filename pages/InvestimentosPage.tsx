import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, DollarSign, PieChart, ArrowUpRight, Calendar } from 'lucide-react';

const InvestimentosPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link to="/" className="flex items-center gap-2 hover:text-amber-500 transition-colors group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold text-gray-700">Voltar para Home</span>
            </Link>
            <div className="mx-8 flex-1 h-px bg-gray-200"></div>
            <h1 className="text-xl font-black text-gray-900 uppercase tracking-wide">Meus Investimentos</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          
          {/* Portfolio Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <DollarSign size={32} className="opacity-80" />
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full font-bold">Total</span>
              </div>
              <p className="text-sm opacity-80 mb-2">Patrimônio Total</p>
              <p className="text-3xl font-black">R$ 127.450,00</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp size={32} className="text-green-500" />
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">+12.5%</span>
              </div>
              <p className="text-sm text-gray-500 mb-2">Rentabilidade (12m)</p>
              <p className="text-3xl font-black text-gray-900">+R$ 14.200</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <PieChart size={32} className="text-amber-500" />
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-bold">6 ativos</span>
              </div>
              <p className="text-sm text-gray-500 mb-2">Diversificação</p>
              <p className="text-3xl font-black text-gray-900">Moderada</p>
            </div>
          </div>

          {/* Holdings */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-black text-gray-900">Carteira de Investimentos</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                { nome: 'Tesouro Selic 2029', tipo: 'Renda Fixa', valor: 'R$ 45.000,00', rentabilidade: '+8.2%', cor: 'emerald' },
                { nome: 'IVVB11', tipo: 'ETF Internacional', valor: 'R$ 32.500,00', rentabilidade: '+15.7%', cor: 'blue' },
                { nome: 'MXRF11', tipo: 'FII Tijolo', valor: 'R$ 18.200,00', rentabilidade: '+6.3%', cor: 'purple' },
                { nome: 'CDB Banco XP', tipo: 'Renda Fixa', valor: 'R$ 15.000,00', rentabilidade: '+9.1%', cor: 'emerald' },
                { nome: 'PETR4', tipo: 'Ação', valor: 'R$ 10.750,00', rentabilidade: '+22.5%', cor: 'amber' },
                { nome: 'VALE3', tipo: 'Ação', valor: 'R$ 6.000,00', rentabilidade: '-3.2%', cor: 'red' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`bg-${item.cor}-100 p-3 rounded-xl`}>
                        <TrendingUp className={`text-${item.cor}-600`} size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{item.nome}</p>
                        <p className="text-xs text-gray-500 mt-1">{item.tipo}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-gray-900">{item.valor}</p>
                      <p className={`text-sm font-bold mt-1 ${item.rentabilidade.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {item.rentabilidade}
                      </p>
                    </div>
                    <ArrowUpRight className="text-gray-300 group-hover:text-amber-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="text-gray-400" size={24} />
              <h3 className="text-xl font-black text-gray-900">Atividade Recente</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-50">
                <div>
                  <p className="font-semibold text-gray-900">Compra: IVVB11</p>
                  <p className="text-xs text-gray-500 mt-1">02/02/2026</p>
                </div>
                <span className="text-sm font-bold text-gray-900">R$ 5.000,00</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-50">
                <div>
                  <p className="font-semibold text-gray-900">Dividendos: MXRF11</p>
                  <p className="text-xs text-gray-500 mt-1">15/01/2026</p>
                </div>
                <span className="text-sm font-bold text-green-600">+R$ 280,00</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-semibold text-gray-900">Venda Parcial: PETR4</p>
                  <p className="text-xs text-gray-500 mt-1">10/01/2026</p>
                </div>
                <span className="text-sm font-bold text-gray-900">R$ 3.200,00</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default InvestimentosPage;
