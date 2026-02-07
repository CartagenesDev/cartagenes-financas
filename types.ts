
export interface Stock {
  symbol: string;
  price: number;
  change: number;
}

export interface NewsItem {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
  cta: string;
  slug: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  category: 'Finanças' | 'Economia' | 'Empresas' | 'Bem-estar';
  author: string;
  source: string;
  date: string; // humanized string (UI)
  publishedAt?: string; // ISO timestamp for sorting/filtering
  readingTime: number; // minutes
  imageUrl: string;
  imageAlt?: string;
  slug?: string;
  tags?: string[];
  isTrending: boolean;
}

export interface RankingItem {
  symbol: string;
  value: string;
}

export enum Section {
  NEWS = 'NEWS',
  CALCULATORS = 'CALCULATORS',
  CONTACT = 'CONTACT'
}

