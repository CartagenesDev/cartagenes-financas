import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TrendingUp, User, Lock, Eye, EyeOff } from 'lucide-react';
import { UserData } from '../types';

type Tab = 'login' | 'cadastro';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '', confirm: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem('isLoggedIn') === 'true') {
      navigate('/perfil');
    }
  }, [navigate]);

  const saveUser = (data: UserData) => {
    localStorage.setItem('userData', JSON.stringify(data));
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const stored = localStorage.getItem('userData');
    if (stored) {
      const user: UserData = JSON.parse(stored);
      if (user.email === loginForm.email) {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/perfil');
        return;
      }
      setError('E-mail não encontrado. Crie uma conta primeiro.');
      return;
    }
    // Sem usuário cadastrado: cria automaticamente
    const autoUser: UserData = {
      name: loginForm.email.split('@')[0],
      email: loginForm.email,
      memberSince: new Date().toISOString().split('T')[0],
    };
    saveUser(autoUser);
    navigate('/perfil');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (registerForm.password !== registerForm.confirm) {
      setError('As senhas não coincidem.');
      return;
    }
    if (registerForm.password.length < 6) {
      setError('A senha deve ter ao menos 6 caracteres.');
      return;
    }
    const user: UserData = {
      name: registerForm.name.trim(),
      email: registerForm.email.trim().toLowerCase(),
      memberSince: new Date().toISOString().split('T')[0],
    };
    saveUser(user);
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
            <h1 className="text-2xl font-black text-gray-900">Área do Membro</h1>
            <p className="text-sm text-gray-500 mt-2">Acesse ou crie sua conta gratuitamente</p>
          </div>

          {/* Tabs */}
          <div className="flex rounded-xl bg-gray-100 p-1 mb-6">
            <button
              onClick={() => { setTab('login'); setError(''); }}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${tab === 'login' ? 'bg-white shadow text-gray-900' : 'text-gray-500'}`}
            >
              Entrar
            </button>
            <button
              onClick={() => { setTab('cadastro'); setError(''); }}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${tab === 'cadastro' ? 'bg-white shadow text-gray-900' : 'text-gray-500'}`}
            >
              Criar Conta
            </button>
          </div>

          {error && (
            <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 font-semibold">
              {error}
            </div>
          )}

          {tab === 'login' ? (
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="text-sm font-semibold text-gray-700">E-mail</label>
                <div className="mt-2 relative">
                  <input
                    type="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
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
                    type={showPassword ? 'text' : 'password'}
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg">
                Entrar
              </button>
              <p className="text-center text-sm text-gray-500">
                Não tem conta?{' '}
                <button type="button" onClick={() => setTab('cadastro')} className="text-emerald-600 font-bold hover:underline">
                  Criar agora
                </button>
              </p>
            </form>
          ) : (
            <form className="space-y-4" onSubmit={handleRegister}>
              <div>
                <label className="text-sm font-semibold text-gray-700">Nome completo</label>
                <div className="mt-2 relative">
                  <input
                    type="text"
                    value={registerForm.name}
                    onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                    placeholder="Seu nome"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">E-mail</label>
                <div className="mt-2 relative">
                  <input
                    type="email"
                    value={registerForm.email}
                    onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
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
                    type={showPassword ? 'text' : 'password'}
                    value={registerForm.password}
                    onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                    placeholder="Mínimo 6 caracteres"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Confirmar senha</label>
                <div className="mt-2 relative">
                  <input
                    type="password"
                    value={registerForm.confirm}
                    onChange={(e) => setRegisterForm({ ...registerForm, confirm: e.target.value })}
                    placeholder="Repita a senha"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                </div>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg">
                Criar Conta Gratuita
              </button>
              <p className="text-center text-sm text-gray-500">
                Já tem conta?{' '}
                <button type="button" onClick={() => setTab('login')} className="text-emerald-600 font-bold hover:underline">
                  Entrar
                </button>
              </p>
            </form>
          )}

          <p className="text-xs text-gray-400 text-center mt-6">
            Ao continuar, você concorda com nossos{' '}
            <Link to="/legal#terms" className="text-emerald-600 hover:underline">Termos de Uso</Link>
            {' '}e{' '}
            <Link to="/legal#privacy" className="text-emerald-600 hover:underline">Política de Privacidade</Link>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
