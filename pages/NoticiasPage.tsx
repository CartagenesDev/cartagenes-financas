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
      <footer className="bg-[#111] text-[#888] py-10 px-5 text-center text-[12px] border-t border-[#333]">
        <div className="max-w-[1000px] mx-auto">
          <p className="font-bold uppercase">© {new Date().getFullYear()} CARTAGENES JR. - PORTAL DE NOTÍCIAS E EDUCAÇÃO</p>
          <p className="my-4 uppercase">
            <a href="/sobre.html" className="text-[#888] no-underline">SOBRE NÓS</a> |{' '}
            <Link to="/legal#privacy" className="text-[#888] no-underline">PRIVACIDADE</Link> |{' '}
            <Link to="/legal#terms" className="text-[#888] no-underline">TERMOS DE USO</Link>
          </p>
          <p className="text-[#555] leading-relaxed uppercase">
            O SITE CARTAGENES JR. É UM PORTAL EDUCATIVO E INFORMATIVO. NÃO REALIZAMOS RECOMENDAÇÕES DE INVESTIMENTO.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NoticiasPage;
