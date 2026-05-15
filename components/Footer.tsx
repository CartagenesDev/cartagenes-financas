import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="bg-[#111] text-[#888] py-10 px-5 text-center text-[12px] border-t border-[#333]">
    <div className="max-w-[1000px] mx-auto">
      <p className="font-bold uppercase">
        © {new Date().getFullYear()} CARTAGENES JR. — PORTAL DE NOTÍCIAS E EDUCAÇÃO
      </p>
      <p className="my-4 uppercase space-x-2">
        <Link to="/sobre" className="text-[#888] hover:text-white transition-colors">SOBRE NÓS</Link>
        <span>|</span>
        <Link to="/legal#privacy" className="text-[#888] hover:text-white transition-colors">PRIVACIDADE</Link>
        <span>|</span>
        <Link to="/legal#terms" className="text-[#888] hover:text-white transition-colors">TERMOS DE USO</Link>
        <span>|</span>
        <Link to="/contato" className="text-[#888] hover:text-white transition-colors">CONTATO</Link>
      </p>
      <p className="text-[#555] leading-relaxed uppercase">
        O SITE CARTAGENES JR. É UM PORTAL EDUCATIVO E INFORMATIVO. NÃO REALIZAMOS RECOMENDAÇÕES DE INVESTIMENTO.
        CONSULTE UM PROFISSIONAL CERTIFICADO ANTES DE INVESTIR.
      </p>
    </div>
  </footer>
);

export default Footer;
