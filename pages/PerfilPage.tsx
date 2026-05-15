import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Calendar, Shield, Edit2, Save, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { UserData } from '../types';

const PerfilPage: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<UserData | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      navigate('/login');
      return;
    }
    try {
      const stored = localStorage.getItem('userData');
      if (stored) {
        const data: UserData = JSON.parse(stored);
        setUserData(data);
        setEditForm(data);
      }
    } catch {
      navigate('/login');
    }
  }, [navigate]);

  const handleSave = () => {
    if (!editForm) return;
    localStorage.setItem('userData', JSON.stringify(editForm));
    setUserData(editForm);
    setIsEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleCancel = () => {
    setEditForm(userData);
    setIsEditing(false);
  };

  const formatMemberSince = (dateStr?: string) => {
    if (!dateStr) return '—';
    try {
      return new Date(dateStr).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  if (!userData) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-black text-gray-900">Meu Perfil</h1>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors"
            >
              <Edit2 size={16} /> Editar
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors"
              >
                <Save size={16} /> Salvar
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-colors"
              >
                <X size={16} /> Cancelar
              </button>
            </div>
          )}
        </div>

        {saved && (
          <div className="mb-6 px-4 py-3 bg-emerald-50 border border-emerald-200 rounded-xl text-sm text-emerald-700 font-semibold">
            Perfil atualizado com sucesso!
          </div>
        )}

        <div className="space-y-6">
          {/* Card Principal */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-2xl ring-4 ring-emerald-100 shrink-0">
                <User size={40} className="text-white" />
              </div>
              <div className="flex-grow">
                {isEditing ? (
                  <input
                    type="text"
                    value={editForm?.name || ''}
                    onChange={(e) => setEditForm(prev => prev ? { ...prev, name: e.target.value } : prev)}
                    className="text-2xl font-black text-gray-900 border-b-2 border-emerald-400 outline-none bg-transparent w-full"
                  />
                ) : (
                  <h2 className="text-2xl font-black text-gray-900">{userData.name}</h2>
                )}
                <p className="text-gray-500 mt-1">
                  Membro desde {formatMemberSince(userData.memberSince)}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* E-mail */}
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <Mail className="text-emerald-600 shrink-0" size={20} />
                <div className="flex-grow min-w-0">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">E-mail</p>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editForm?.email || ''}
                      onChange={(e) => setEditForm(prev => prev ? { ...prev, email: e.target.value } : prev)}
                      className="text-sm font-bold text-gray-900 border-b border-emerald-400 outline-none bg-transparent w-full"
                    />
                  ) : (
                    <p className="text-sm font-bold text-gray-900 truncate">{userData.email}</p>
                  )}
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <Phone className="text-emerald-600 shrink-0" size={20} />
                <div className="flex-grow">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Telefone</p>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editForm?.phone || ''}
                      onChange={(e) => setEditForm(prev => prev ? { ...prev, phone: e.target.value } : prev)}
                      placeholder="+55 (11) 99999-9999"
                      className="text-sm font-bold text-gray-900 border-b border-emerald-400 outline-none bg-transparent w-full"
                    />
                  ) : (
                    <p className="text-sm font-bold text-gray-900">{userData.phone || '—'}</p>
                  )}
                </div>
              </div>

              {/* Localização */}
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <MapPin className="text-emerald-600 shrink-0" size={20} />
                <div className="flex-grow">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Localização</p>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm?.location || ''}
                      onChange={(e) => setEditForm(prev => prev ? { ...prev, location: e.target.value } : prev)}
                      placeholder="Cidade, Estado"
                      className="text-sm font-bold text-gray-900 border-b border-emerald-400 outline-none bg-transparent w-full"
                    />
                  ) : (
                    <p className="text-sm font-bold text-gray-900">{userData.location || '—'}</p>
                  )}
                </div>
              </div>

              {/* Membro desde */}
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <Calendar className="text-emerald-600 shrink-0" size={20} />
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Membro desde</p>
                  <p className="text-sm font-bold text-gray-900">{formatMemberSince(userData.memberSince)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links rápidos */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-amber-500" size={24} />
              <h3 className="text-xl font-black text-gray-900">Acesso Rápido</h3>
            </div>
            <div className="space-y-3">
              <Link
                to="/investimentos"
                className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors flex items-center justify-between group"
              >
                <span className="font-semibold text-gray-700">Meus Investimentos</span>
                <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                to="/calculadoras"
                className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors flex items-center justify-between group"
              >
                <span className="font-semibold text-gray-700">Calculadora de Juros Compostos</span>
                <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                to="/noticias"
                className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors flex items-center justify-between group"
              >
                <span className="font-semibold text-gray-700">Últimas Notícias</span>
                <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PerfilPage;
