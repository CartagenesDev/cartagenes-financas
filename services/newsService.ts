export interface LiveNewsItem {
  title: string;
  link: string;
  pubDate: string;
  author: string;
  thumbnail: string;
  description: string;
  category: 'Financas' | 'Economia' | 'Bem-estar';
}

export const NEWS_CACHE_KEY = 'cartagenes_live_news_v2';
export const NEWS_CACHE_TTL = 30 * 60 * 1000;

const FEEDS = [
  {
    category: 'Financas' as const,
    url: 'https://www.infomoney.com.br/feed/',
  },
  {
    category: 'Economia' as const,
    url: 'https://news.google.com/rss/search?q=economia+brasil+investimento+dolar+inflacao+selic&hl=pt-BR&gl=BR&ceid=BR:pt-419',
  },
  {
    category: 'Bem-estar' as const,
    url: 'https://news.google.com/rss/search?q=saude+bem+estar+brasil&hl=pt-BR&gl=BR&ceid=BR:pt-419',
  },
];

const stripHtml = (html: string) =>
  html.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim();

const extractImgFromHtml = (html: string): string => {
  const match = html.match(/<img[^>]+src="([^"]+)"/i);
  return match ? match[1] : '';
};

const extractSource = (html: string): string => {
  const text = stripHtml(html).trim();
  const parts = text.split('  ').map((s) => s.trim()).filter(Boolean);
  return parts.length > 1 ? parts[parts.length - 1] : '';
};

const articleImage = (title: string): string => {
  const seed = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50);
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/800/440`;
};

export async function fetchLiveNews(force = false): Promise<LiveNewsItem[]> {
  if (!force) {
    try {
      const cached = localStorage.getItem(NEWS_CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < NEWS_CACHE_TTL && data.length > 0) {
          return data as LiveNewsItem[];
        }
      }
    } catch { /* ignora */ }
  }

  const allItems: LiveNewsItem[] = [];

  await Promise.all(
    FEEDS.map(async (feed) => {
      try {
        const res = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`
        );
        if (!res.ok) return;
        const data = await res.json();
        if (data.status !== 'ok' || !data.items?.length) return;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.items.forEach((item: any) => {
          const descHtml = item.description || item.content || '';
          const imgFromHtml = extractImgFromHtml(descHtml);
          const source = item.author || extractSource(descHtml) || feed.category;
          const descText = stripHtml(descHtml).slice(0, 160);

          allItems.push({
            title: item.title || '',
            link: item.link || '#',
            pubDate: item.pubDate || '',
            author: source,
            thumbnail: imgFromHtml || articleImage(item.title || String(Math.random())),
            description: descText,
            category: feed.category,
          });
        });
      } catch { /* feed falhou */ }
    })
  );

  if (allItems.length === 0) return [];

  const sorted = allItems.sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );

  try {
    localStorage.setItem(NEWS_CACHE_KEY, JSON.stringify({ data: sorted, timestamp: Date.now() }));
  } catch { /* storage cheio */ }

  return sorted;
}
