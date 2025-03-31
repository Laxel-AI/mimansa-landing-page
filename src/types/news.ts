// types/news.ts
export interface NewsItem {
  id: number;
  slug: string;
  type: string;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featured?: boolean;
}
