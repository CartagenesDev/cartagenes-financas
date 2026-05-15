import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, User, LogOut, TrendingUp, Menu, X } from 'lucide-react';
import { UserData } from '../types';

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState<UserData | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    try {
      const stored = localStorage.getItem('userData');
      if (stored) setUserData(JSON.parse(stored));
      else setUserData(null);
    } catch {
      setUserData(null);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    if (window.confirm('Deseja realmente sair?')) {
      localStorage.setItem('isLoggedIn', 'false');
      setIsLoggedIn(false);
      setUserData(null);
      navigate('/');
    }
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      navigate(`/noticias?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setIsMobileMenuOpen(false);
    }
  };

  const displayName = userData?.name || 'Usuário';

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="bg-gray-900 text-gray-200 text-xs py-2 px-4 text-center font-medium">
        Portal de Notícias e Educação Financeira — Não realizamos recomendações de investimento.
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          <Link
            to="/"
            className="flex items-center gap-2 group cursor-pointer mr-auto hover:opacity-80 transition-opacity"
          >
            <img src="/logo.png" alt="Cartagenes" className="h-10 w-10 rounded-lg" />
            <span className="text-2xl font-black tracking-tight text-gray-900">CARTAGENES</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm text-gray-600 pl-16">
            <Link to="/noticias" className="hover:text-amber-500 transition-colors">Notícias</Link>
            <Link to="/calculadoras" className="hover:text-amber-500 transition-colors">Calculadora</Link>
            <Link to="/sobre" className="hover:text-amber-500 transition-colors">Sobre</Link>
            <Link to="/contato" className="hover:text-amber-500 transition-colors">Contato</Link>
          </nav>

          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-md mx-8 border border-transparent focus-within:border-amber-200 focus-within:bg-white transition-all">
            <Search size={18} className="text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Pesquise notícias e conteúdo educativo..."
              className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>

          <div className="hidden lg:flex items-center gap-3 border-l border-gray-200 pl-8">
            {isLoggedIn ? (
              <div className="relative group">
                <button className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-xl transition-all">
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-bold text-gray-900">{displayName}</span>
                    <span className="text-[10px] text-gray-500 font-medium">Membro</span>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-2 rounded-full ring-2 ring-emerald-100">
                    <User size={18} className="text-white" />
                  </div>
                </button>

                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 border-b border-gray-100">
                    <p className="text-sm font-bold text-gray-900">{displayName}</p>
                    {userData?.email && (
                      <p className="text-xs text-gray-500 mt-1 truncate">{userData.email}</p>
                    )}
                  </div>
                  <div className="py-2">
                    <Link
                      to="/perfil"
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors"
                    >
                      <User size={14} className="text-gray-400" /> Meu Perfil
                    </Link>
                    <Link
                      to="/investimentos"
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors"
                    >
                      <TrendingUp size={14} className="text-gray-400" /> Meus Investimentos
                    </Link>
                  </div>
                  <div className="border-t border-gray-100 py-2">
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 font-semibold transition-colors"
                    >
                      <LogOut size={14} /> Sair da Conta
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-md hover:shadow-lg"
              >
                <User size={16} /> Entrar
              </Link>
            )}
          </div>

          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 border border-transparent focus-within:border-amber-200 focus-within:bg-white transition-all">
            <Search size={18} className="text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Pesquisar..."
              className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
          <nav className="flex flex-col gap-2 font-semibold text-gray-600">
            <Link to="/noticias" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-500 p-2 rounded-lg transition-colors">Notícias</Link>
            <Link to="/calculadoras" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-500 p-2 rounded-lg transition-colors">Calculadora</Link>
            <Link to="/sobre" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-500 p-2 rounded-lg transition-colors">Sobre</Link>
            <Link to="/contato" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-500 p-2 rounded-lg transition-colors">Contato</Link>
          </nav>
          {isLoggedIn ? (
            <div className="border-t border-gray-100 pt-4 space-y-2">
              <Link to="/perfil" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 p-2 text-gray-700 font-semibold">
                <User size={16} className="text-emerald-500" /> Meu Perfil
              </Link>
              <button onClick={handleLogout} className="flex items-center gap-2 p-2 text-red-600 font-semibold w-full text-left">
                <LogOut size={16} /> Sair da Conta
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-emerald-500 text-white px-5 py-3 rounded-lg font-bold w-full"
            >
              <User size={16} /> Entrar
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
