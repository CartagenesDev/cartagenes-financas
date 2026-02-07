import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, Shield } from 'lucide-react';

const PerfilPage: React.FC = () => {
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
            <h1 className="text-xl font-black text-gray-900 uppercase tracking-wide">Meu Perfil</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          
          {/* Profile Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-2xl ring-4 ring-emerald-100">
                <User size={48} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-gray-900">Caldino Araújo Cartagenes Junior</h2>
                <p className="text-gray-500 mt-1">Investidor desde 2020</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <Mail className="text-emerald-600" size={20} />
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Email</p>
                  <p className="text-sm font-bold text-gray-900">caldino@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <Phone className="text-emerald-600" size={20} />
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Telefone</p>
                  <p className="text-sm font-bold text-gray-900">+55 (11) 98765-4321</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <MapPin className="text-emerald-600" size={20} />
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Localização</p>
                  <p className="text-sm font-bold text-gray-900">São Paulo, Brasil</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <Calendar className="text-emerald-600" size={20} />
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Membro desde</p>
                  <p className="text-sm font-bold text-gray-900">Janeiro 2020</p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-amber-500" size={24} />
              <h3 className="text-xl font-black text-gray-900">Segurança</h3>
            </div>
            <div className="space-y-4">
              <button className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors flex items-center justify-between group">
                <span className="font-semibold text-gray-700">Alterar Senha</span>
                <ArrowLeft className="rotate-180 text-gray-400 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors flex items-center justify-between group">
                <span className="font-semibold text-gray-700">Autenticação em Dois Fatores</span>
                <ArrowLeft className="rotate-180 text-gray-400 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default PerfilPage;
