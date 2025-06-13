// src/lib/api.ts
import sdk from "@/utils/sdk";
import {
  BlogPostsResponse,
  CategoriesResponse,
  StrapiBlogPost,
} from "../types/strapi";

// Get all blog posts (simple version - backwards compatible)
export async function getBlogPosts(): Promise<BlogPostsResponse> {
  try {
    const response = await sdk.collection("blog-posts").find({
      populate: "*",
      sort: "createdAt:desc",
    });

    // console.log("getBlogPosts response:", response);
    return response as BlogPostsResponse;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
}

// Get blog posts with pagination, search, and filtering (Professional version)
export async function getBlogPostsPaginated(
  page: number = 1,
  queryString: string = "",
  category: string = ""
): Promise<BlogPostsResponse> {
  try {
    const pageSize = 6;

    // Build filters object
    let filters: any = {};

    // Add search filter
    if (queryString.trim()) {
      filters.title = { $containsi: queryString.trim() };
    }

    // Add category filter
    if (category.trim()) {
      filters.category = { name: { $eq: category.trim() } };
    }

    const queryParams: any = {
      populate: "*",
      sort: "createdAt:desc",
      pagination: {
        page: page,
        pageSize: pageSize,
      },
    };

    // Only add filters if they exist
    if (Object.keys(filters).length > 0) {
      queryParams.filters = filters;
    }

    const response = await sdk.collection("blog-posts").find(queryParams);

    // console.log("getBlogPostsPaginated response:", response);
    return response as BlogPostsResponse;
  } catch (error) {
    console.error("Error fetching paginated blog posts:", error);
    throw error;
  }
}

// Get a single blog post by slug
export async function getBlogPost(
  slug: string
): Promise<StrapiBlogPost | null> {
  try {
    const response = await sdk.collection("blog-posts").find({
      filters: {
        slug: { $eq: slug },
      },
      populate: "*",
    });

    // console.log("getBlogPost response:", response);
    return (response?.data?.[0] as StrapiBlogPost) || null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    throw error;
  }
}

// Get all categories
export async function getCategories(): Promise<CategoriesResponse> {
  try {
    const response = await sdk.collection("categories").find({
      populate: "*",
      sort: "name:asc",
    });

    // console.log("getCategories response:", response);
    return response as CategoriesResponse;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

// Get blog posts by category
export async function getBlogPostsByCategory(
  categorySlug: string
): Promise<BlogPostsResponse> {
  try {
    const response = await sdk.collection("blog-posts").find({
      filters: {
        category: {
          slug: { $eq: categorySlug },
        },
      },
      populate: "*",
      sort: "createdAt:desc",
    });

    // console.log("getBlogPostsByCategory response:", response);
    return response as BlogPostsResponse;
  } catch (error) {
    console.error("Error fetching blog posts by category:", error);
    throw error;
  }
}

// Get all blog post slugs for static generation
export async function getAllBlogSlugs() {
  try {
    const response = await sdk.collection("blog-posts").find({
      fields: ["slug"],
    });

    // console.log("getAllBlogSlugs response:", response);
    return response?.data?.map((post) => ({ slug: post.slug })) || [];
  } catch (error) {
    console.error("Error fetching blog slugs:", error);
    return [];
  }
}

// Search blog posts with multiple field search
export async function searchBlogPosts(
  query: string
): Promise<BlogPostsResponse> {
  try {
    if (!query.trim()) {
      return {
        data: [],
        meta: {
          pagination: { page: 1, pageSize: 0, pageCount: 0, total: 0 },
        },
      };
    }

    const response = await sdk.collection("blog-posts").find({
      filters: {
        $or: [
          { title: { $containsi: query } },
          { excerpt: { $containsi: query } },
          { content: { $containsi: query } },
        ],
      },
      populate: "*",
      sort: "createdAt:desc",
    });

    // // console.log("searchBlogPosts response:", response);
    return response as BlogPostsResponse;
  } catch (error) {
    console.error("Error searching blog posts:", error);
    throw error;
  }
}

// Get related posts based on category
export async function getRelatedPosts(
  currentPostId: number,
  categoryName?: string,
  limit: number = 3
): Promise<BlogPostsResponse> {
  try {
    let filters: any = {
      id: { $ne: currentPostId },
    };

    if (categoryName) {
      filters.category = { name: { $eq: categoryName } };
    }

    const response = await sdk.collection("blog-posts").find({
      filters,
      populate: "*",
      pagination: {
        limit: limit,
      },
      sort: "createdAt:desc",
    });

    // // console.log("getRelatedPosts response:", response);
    return response as BlogPostsResponse;
  } catch (error) {
    console.error("Error fetching related posts:", error);
    throw error;
  }
}

// Helper function to get image URL from Strapi
export function getStrapiMedia(url?: string): string {
  if (!url) return "";

  // Return full URL if it's already absolute
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  // Return API URL if it's relative
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

  return `${baseUrl}${url}`;
}

// Format date utility
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Calculate reading time
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Get featured posts (posts marked as featured)
export async function getFeaturedPosts(
  limit: number = 3
): Promise<BlogPostsResponse> {
  try {
    const response = await sdk.collection("blog-posts").find({
      filters: {
        featured: { $eq: true },
      },
      populate: "*",
      pagination: {
        limit: limit,
      },
      sort: "createdAt:desc",
    });

    // console.log("getFeaturedPosts response:", response);
    return response as BlogPostsResponse;
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    throw error;
  }
}

// Get posts by author
export async function getPostsByAuthor(
  authorId: number
): Promise<BlogPostsResponse> {
  try {
    const response = await sdk.collection("blog-posts").find({
      filters: {
        authorId: { id: { $eq: authorId } },
      },
      populate: "*",
      sort: "createdAt:desc",
    });

    // console.log("getPostsByAuthor response:", response);
    return response as BlogPostsResponse;
  } catch (error) {
    console.error("Error fetching posts by author:", error);
    throw error;
  }
}

// Get recent posts
export async function getRecentPosts(
  limit: number = 5
): Promise<BlogPostsResponse> {
  try {
    const response = await sdk.collection("blog-posts").find({
      populate: "*",
      pagination: {
        limit: limit,
      },
      sort: "createdAt:desc",
    });

    // console.log("getRecentPosts response:", response);
    return response as BlogPostsResponse;
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    throw error;
  }
}
