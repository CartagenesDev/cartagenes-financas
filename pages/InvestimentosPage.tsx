import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TrendingUp, DollarSign, PieChart, ArrowUpRight, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const holdings = [
  { nome: 'Tesouro Selic 2029', tipo: 'Renda Fixa', valor: 'R$ 45.000,00', rentabilidade: '+8.2%', cor: 'emerald' },
  { nome: 'IVVB11', tipo: 'ETF Internacional', valor: 'R$ 32.500,00', rentabilidade: '+15.7%', cor: 'blue' },
  { nome: 'MXRF11', tipo: 'FII Tijolo', valor: 'R$ 18.200,00', rentabilidade: '+6.3%', cor: 'purple' },
  { nome: 'CDB Banco XP', tipo: 'Renda Fixa', valor: 'R$ 15.000,00', rentabilidade: '+9.1%', cor: 'emerald' },
  { nome: 'PETR4', tipo: 'Ação', valor: 'R$ 10.750,00', rentabilidade: '+22.5%', cor: 'amber' },
  { nome: 'VALE3', tipo: 'Ação', valor: 'R$ 6.000,00', rentabilidade: '-3.2%', cor: 'red' },
];

const activity = [
  { desc: 'Compra: IVVB11', date: '02/02/2026', valor: 'R$ 5.000,00', positive: null },
  { desc: 'Dividendos: MXRF11', date: '15/01/2026', valor: '+R$ 280,00', positive: true },
  { desc: 'Venda Parcial: PETR4', date: '10/01/2026', valor: 'R$ 3.200,00', positive: null },
];

const InvestimentosPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-gray-900 mb-1">Meus Investimentos</h1>
          <p className="text-gray-500 text-sm">Carteira simulada para fins educativos. <Link to="/calculadoras" className="text-emerald-600 font-semibold hover:underline">Simule a sua →</Link></p>
        </div>

        <div className="space-y-8">
          {/* Cards de resumo */}
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

          {/* Aviso educativo */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800 font-medium">
            ⚠️ Esta carteira é <strong>simulada e educativa</strong>. Não representa recomendação de investimento. Consulte um assessor certificado antes de investir.
          </div>

          {/* Tabela de holdings */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-black text-gray-900">Carteira de Investimentos</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {holdings.map((item, idx) => (
                <div key={idx} className="p-6 hover:bg-gray-50 transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className={`bg-${item.cor}-100 p-3 rounded-xl`}>
                      <TrendingUp className={`text-${item.cor}-600`} size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{item.nome}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.tipo}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="font-black text-gray-900">{item.valor}</p>
                      <p className={`text-sm font-bold mt-0.5 ${item.rentabilidade.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {item.rentabilidade}
                      </p>
                    </div>
                    <ArrowUpRight className="text-gray-300 group-hover:text-amber-500 transition-colors" size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Atividade recente */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="text-gray-400" size={24} />
              <h3 className="text-xl font-black text-gray-900">Atividade Recente</h3>
            </div>
            <div className="space-y-4">
              {activity.map((a, idx) => (
                <div key={idx} className={`flex items-center justify-between py-3 ${idx < activity.length - 1 ? 'border-b border-gray-50' : ''}`}>
                  <div>
                    <p className="font-semibold text-gray-900">{a.desc}</p>
                    <p className="text-xs text-gray-500 mt-1">{a.date}</p>
                  </div>
                  <span className={`text-sm font-bold ${a.positive === true ? 'text-green-600' : 'text-gray-900'}`}>{a.valor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InvestimentosPage;
