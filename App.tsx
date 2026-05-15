import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NoticiasPage from './pages/NoticiasPage';
import ContatoPage from './pages/ContatoPage';
import CalculadorasPage from './pages/CalculadorasPage';
import LegalPage from './pages/LegalPage';
import SobrePage from './pages/SobrePage';
import PerfilPage from './pages/PerfilPage';
import InvestimentosPage from './pages/InvestimentosPage';
import PresellBuyGoodsPage from './pages/PresellBuyGoodsPage';
import LoginPage from './pages/LoginPage';
import NoticiaDetalhePage from './pages/NoticiaDetalhePage';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/noticias" element={<NoticiasPage />} />
    <Route path="/noticias/:slug" element={<NoticiaDetalhePage />} />
    <Route path="/contato" element={<ContatoPage />} />
    <Route path="/calculadoras" element={<CalculadorasPage />} />
    <Route path="/legal" element={<LegalPage />} />
    <Route path="/sobre" element={<SobrePage />} />
    <Route path="/perfil" element={<PerfilPage />} />
    <Route path="/investimentos" element={<InvestimentosPage />} />
    <Route path="/presell-buygoods" element={<PresellBuyGoodsPage />} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
);

export default App;
