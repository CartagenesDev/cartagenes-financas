
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
  date: string;
  publishedAt?: string;
  readingTime: number;
  imageUrl: string;
  imageAlt?: string;
  slug?: string;
  tags?: string[];
  isTrending: boolean;
  content?: string[];
  keyPoints?: string[];
}

export interface UserData {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  memberSince: string;
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

