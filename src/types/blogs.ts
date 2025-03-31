// types/blog.ts
export interface BlogAuthor {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  coverImage: string;
  authorId: number;
  publishedAt: string;
  category: string;
  tags: string[];
  featured?: boolean;
  readingTime?: number;
}
