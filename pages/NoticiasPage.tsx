import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsLive from '../components/NewsLive';

const NoticiasPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>(searchParams.get('q') || '');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-gray-900 mb-2">Notícias & Análises</h1>
          <p className="text-gray-500">
            Cobertura em tempo real de finanças, economia e bem-estar — atualizada automaticamente.
          </p>
        </div>

        {/* Barra de busca */}
        <div className="mb-10 flex items-center bg-white rounded-full px-6 py-4 shadow-md border border-gray-100 max-w-2xl">
          <input
            type="text"
            placeholder="Buscar por título, fonte ou categoria..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-gray-400 hover:text-gray-600 ml-2 font-bold"
            >
              ✕
            </button>
          )}
        </div>

        <NewsLive searchQuery={searchQuery} />
      </main>

      <Footer />
    </div>
  );
};

export default NoticiasPage;
