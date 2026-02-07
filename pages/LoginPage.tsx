import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TrendingUp, User, Lock } from 'lucide-react';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/perfil');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="bg-emerald-500 p-1.5 rounded-lg">
              <TrendingUp className="text-white" size={20} />
            </div>
            <span className="text-lg font-black text-gray-900">CARTAGENES</span>
          </Link>
          <Link to="/" className="text-sm font-semibold text-gray-600 hover:text-amber-500 transition-colors">
            ← Voltar
          </Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="text-center mb-8">
            <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="text-emerald-600" size={24} />
            </div>
            <h1 className="text-2xl font-black text-gray-900">Entrar</h1>
            <p className="text-sm text-gray-500 mt-2">Acesse sua conta para continuar</p>
          </div>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="text-sm font-semibold text-gray-700">E-mail</label>
              <div className="mt-2 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seuemail@exemplo.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">Senha</label>
              <div className="mt-2 relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              Entrar
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-6">
            Ao continuar, você concorda com os termos e políticas do portal.
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
