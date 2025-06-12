// src/types/strapi.ts
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: T;
  meta: {};
}

// Media types for v5
export interface StrapiMedia {
  id: number;
  documentId: string;
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats?: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: string;
  url: string;
}

// User types for v5
export interface StrapiUser {
  id: number;
  documentId: string;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Category types for v5 (direct fields, no attributes wrapper)
export interface StrapiCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blog_posts: StrapiBlogPost[];
}

// Blog Post types for v5 (direct fields, no attributes wrapper)
export interface StrapiBlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: any; // Rich text content array
  excerpt?: string;
  published?: string; // Your custom published field
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  featured_image?: StrapiMedia | null;
  category?: StrapiCategory | null;
  author?: StrapiUser | null;
}

// API Response types
export type BlogPostsResponse = StrapiResponse<StrapiBlogPost[]>;
export type BlogPostResponse = StrapiResponse<StrapiBlogPost[]>; // Strapi returns array even for single filtered results
export type CategoriesResponse = StrapiResponse<StrapiCategory[]>;
