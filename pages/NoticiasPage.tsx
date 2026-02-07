import React, { useState } from 'react';
import { Search, ArrowLeft, TrendingUp, Calculator } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import NewsSection from '../components/NewsSection';

const NoticiasPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>(searchParams.get('q') || '');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header com Breadcrumb */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link to="/" className="flex items-center gap-2 hover:text-amber-500 transition-colors group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold text-gray-700">Voltar</span>
            </Link>
            <div className="mx-8 flex-1 h-px bg-gray-200"></div>
            <h1 className="text-2xl font-black text-gray-900">Notícias & Análises</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-12 flex items-center bg-white rounded-full px-6 py-4 shadow-md border border-gray-100 max-w-2xl mx-auto">
          <Search size={20} className="text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Buscar notícias por título, categoria ou autor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none"
          />
        </div>

        {/* News Section Full Width */}
        <NewsSection searchQuery={searchQuery} />
      </main>

      {/* Footer Section */}
      <footer className="bg-black text-white py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-emerald-500 p-1.5 rounded-lg">
                  <TrendingUp className="text-white" size={20} />
                </div>
                <span className="text-xl font-black tracking-tight">CARTAGENES</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Sua fonte independente de informações sobre finanças, investimentos de longo prazo e bem-estar integral.
              </p>
            </div>

            <div>
              <h4 className="text-amber-500 font-black uppercase text-xs tracking-widest mb-6">Recursos</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-medium">
                <li><Link to="/calculadoras" className="hover:text-white transition-colors">Calculadoras e Simuladores</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-amber-500 font-black uppercase text-xs tracking-widest mb-6">Sobre</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-medium">
                <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-amber-500 font-black uppercase text-xs tracking-widest mb-6">Jurídico</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-medium">
                <li><Link to="/legal#privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/legal#terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
                <li><Link to="/legal#affiliate" className="hover:text-white transition-colors">Affiliate Disclosure</Link></li>
              </ul>
            </div>

          </div>

          <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Cartagenes - Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-3 text-gray-500">
              <span className="text-[10px] font-black uppercase tracking-widest">Powered by Compound Interest</span>
              <Calculator size={14} className="text-amber-500" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NoticiasPage;
