
import React from 'react';
import { Stock, NewsItem, RankingItem, NewsArticle } from './types';

export const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || 'contato@cartagenes.com.br';

export const STOCKS: Stock[] = [
  { symbol: 'CSNA3', price: 14.52, change: 1.25 },
  { symbol: 'PETR4', price: 38.90, change: -0.45 },
  { symbol: 'VALE3', price: 62.15, change: 0.85 },
  { symbol: 'ITUB4', price: 34.20, change: 1.10 },
  { symbol: 'WEGE3', price: 41.55, change: -0.20 },
  { symbol: 'BBAS3', price: 27.85, change: 2.30 },
  { symbol: 'PRIO3', price: 45.10, change: -1.15 },
  { symbol: 'MGLU3', price: 2.15, change: -3.50 },
];

export const NEWS_DATABASE: NewsArticle[] = [
  {
    id: 1,
    category: "Finanças",
    title: "Ibovespa fecha semana acima dos 140 mil pontos com bancos e energia",
    excerpt: "O apetite por risco voltou após revisão do cenário externo. Bancos e empresas de energia lideraram os ganhos.",
    author: "João Silva",
    source: "Valor Econômico",
    date: "7 fev 2026",
    publishedAt: "2026-02-07T12:00:00Z",
    readingTime: 5,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Painel do mercado financeiro com gráficos",
    slug: "ibovespa-fecha-semana-acima-140-mil",
    tags: ["ibovespa", "bolsa", "mercado"],
    isTrending: true
  },
  {
    id: 2,
    category: "Bem-estar",
    title: "Suplementos para energia sustentada: o que a ciência diz em 2026",
    excerpt: "Especialistas apontam quais nutrientes têm melhor evidência para foco e disposição, sem promessas exageradas.",
    author: "Dra. Ana Costa",
    source: "Health Science",
    date: "7 fev 2026",
    publishedAt: "2026-02-07T10:30:00Z",
    readingTime: 7,
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Frascos de suplementos em bancada",
    slug: "suplementos-energia-sustentada-2026",
    tags: ["saude", "suplementos", "performance"],
    isTrending: true
  },
  {
    id: 3,
    category: "Economia",
    title: "Câmbio recua e melhora projeções para inflação de curto prazo",
    excerpt: "Com a entrada de fluxo externo, o real se valorizou e analistas revisaram a curva de juros.",
    author: "Maria Rocha",
    source: "Reuters",
    date: "7 fev 2026",
    publishedAt: "2026-02-07T09:15:00Z",
    readingTime: 6,
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Painel de câmbio com cotações",
    slug: "cambio-recua-e-inflacao-curto-prazo",
    tags: ["economia", "cambio"],
    isTrending: false
  },
  {
    id: 4,
    category: "Empresas",
    title: "Empresas de saúde digital aceleram crescimento com foco em longevidade",
    excerpt: "Plataformas de monitoramento e protocolos de bem-estar ganham tração com executivos e investidores.",
    author: "Carlos Mendes",
    source: "Exame",
    date: "6 fev 2026",
    publishedAt: "2026-02-06T18:00:00Z",
    readingTime: 4,
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Tecnologia aplicada à saúde",
    slug: "saude-digital-crescimento-longevidade",
    tags: ["saude", "tecnologia", "empresas"],
    isTrending: true
  },
  {
    id: 5,
    category: "Finanças",
    title: "Fundos de dividendos voltam a atrair fluxo em 2026",
    excerpt: "Com volatilidade controlada, investidores buscam renda recorrente e proteção de caixa.",
    author: "Ricardo Lopes",
    source: "Infomoney",
    date: "6 fev 2026",
    publishedAt: "2026-02-06T15:00:00Z",
    readingTime: 4,
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Gráfico de dividendos em alta",
    slug: "fundos-dividendos-voltam-atrair-fluxo",
    tags: ["dividendos", "renda"],
    isTrending: false
  },
  {
    id: 6,
    category: "Bem-estar",
    title: "Sono profundo e performance cognitiva: o guia prático de 2026",
    excerpt: "Rotina de sono, minerais e hábitos simples para melhorar foco e decisões no trabalho.",
    author: "Paulo Diniz",
    source: "Mental Wealth",
    date: "6 fev 2026",
    publishedAt: "2026-02-06T12:00:00Z",
    readingTime: 8,
    imageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Pessoa descansando em ambiente calmo",
    slug: "sono-profundo-performance-cognitiva-2026",
    tags: ["sono", "bem-estar", "foco"],
    isTrending: false
  },
  {
    id: 7,
    category: "Empresas",
    title: "Mercado global de suplementos premium cresce com foco em imunidade",
    excerpt: "Marcas com ingredientes naturais e rastreabilidade lideram a preferência do consumidor em 2026.",
    author: "Bia Venturi",
    source: "Global Health",
    date: "5 fev 2026",
    publishedAt: "2026-02-05T20:00:00Z",
    readingTime: 5,
    imageUrl: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Vitaminas e suplementos sobre mesa",
    slug: "suplementos-premium-crescimento-imunidade",
    tags: ["suplementos", "saude", "mercado"],
    isTrending: true
  },
  {
    id: 8,
    category: "Bem-estar",
    title: "Nutrição inteligente e metabolismo: tendências alinhadas à ciência",
    excerpt: "Ajustes simples de rotina e suplementação podem melhorar energia e composição corporal de forma segura.",
    author: "Mariana Silva",
    source: "Nutrition Today",
    date: "5 fev 2026",
    publishedAt: "2026-02-05T14:00:00Z",
    readingTime: 6,
    imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Alimentos saudáveis e suplementos",
    slug: "nutricao-inteligente-metabolismo-2026",
    tags: ["nutricao", "metabolismo", "saude"],
    isTrending: false
  },
];

export const NEWS_CAROUSEL: NewsItem[] = [
  {
    id: 1,
    title: "Mercado 2026: bancos e energia puxam a alta da semana",
    subtitle: "Ibovespa acima de 140 mil pontos e fluxo estrangeiro volta a ganhar força.",
    category: "MERCADO",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=60",
    cta: "Ler matéria completa",
    slug: "ibovespa-fecha-semana-acima-140-mil"
  },
  {
    id: 2,
    title: "Saúde & Performance: hábitos simples com grande impacto",
    subtitle: "Sono, nutrientes essenciais e rotina inteligente para foco e energia sustentada em 2026.",
    category: "BEM-ESTAR",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=60",
    cta: "Ver Guia Wellness",
    slug: "suplementos-energia-sustentada-2026"
  },
  {
    id: 3,
    title: "Suplementos premium: o mercado que cresce acima da média",
    subtitle: "Demanda por fórmulas naturais e rastreáveis impulsiona o setor de saúde e bem-estar.",
    category: "SAÚDE",
    imageUrl: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1600&q=60",
    cta: "Explorar Tendências",
    slug: "suplementos-premium-crescimento-imunidade"
  }
];

export const RANKING_PL: RankingItem[] = [
  { symbol: 'BBAS3', value: '4.2x' },
  { symbol: 'PETR4', value: '4.8x' },
  { symbol: 'VALE3', value: '5.5x' },
  { symbol: 'CSNA3', value: '6.1x' },
  { symbol: 'PRIO3', value: '7.2x' },
];

export const RANKING_DY: RankingItem[] = [
  { symbol: 'PETR4', value: '14.5%' },
  { symbol: 'BBAS3', value: '10.2%' },
  { symbol: 'VALE3', value: '8.8%' },
  { symbol: 'CSNA3', value: '7.5%' },
  { symbol: 'ITUB4', value: '6.2%' },
];
