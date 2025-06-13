// src/lib/api.ts
import {
  BlogPostsResponse,
  CategoriesResponse,
  StrapiBlogPost,
} from "../types/strapi";

// Helper function to get Strapi URL
function getStrapiURL() {
  return process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";
}

// Helper function to flatten filter objects into proper URL parameters
function flattenFilters(
  filters: any,
  searchParams: URLSearchParams,
  prefix = "filters"
) {
  Object.entries(filters).forEach(([key, value]) => {
    const paramKey = `${prefix}[${key}]`;

    if (value && typeof value === "object" && !Array.isArray(value)) {
      // Recursively flatten nested objects
      flattenFilters(value, searchParams, paramKey);
    } else {
      // Add the final value
      searchParams.append(paramKey, String(value));
    }
  });
}

// Helper function for API calls with revalidation
async function strapiRequest(
  endpoint: string,
  options: {
    params?: Record<string, any>;
    revalidate?: number | false;
  } = {}
) {
  const { params = {}, revalidate = 60 } = options; // Default 1 hour revalidation

  const baseUrl = getStrapiURL();
  const url = new URL(`${baseUrl}/api/${endpoint}`);

  // Add query parameters with proper handling for nested objects
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (key === "filters" && typeof value === "object") {
        // Handle filters specially - flatten the nested structure
        flattenFilters(value, url.searchParams);
      } else if (typeof value === "object") {
        url.searchParams.append(key, JSON.stringify(value));
      } else {
        url.searchParams.append(key, String(value));
      }
    }
  });

  const fetchOptions: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  };

  // Add revalidation for Next.js
  if (revalidate !== false) {
    (fetchOptions as any).next = { revalidate };
  }

  try {
    const response = await fetch(url.toString(), fetchOptions);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`HTTP ${response.status} Error:`, errorText);
      console.error(`Request URL: ${url.toString()}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    throw error;
  }
}

// Get all blog posts (simple version - backwards compatible)
export async function getBlogPosts(
  revalidate: number | false = 60
): Promise<BlogPostsResponse> {
  try {
    const response = await strapiRequest("blog-posts", {
      params: {
        populate: "*",
        sort: "createdAt:desc",
      },
      revalidate,
    });

    return response as BlogPostsResponse;
  } catch (error) {
    console.error("Error fetching blog posts:", error);

    // Return empty result instead of throwing
    return {
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageSize: 10,
          pageCount: 0,
          total: 0,
        },
      },
    };
  }
}

// Get blog posts with pagination, search, and filtering (Professional version)
export async function getBlogPostsPaginated(
  page: number = 1,
  queryString: string = "",
  category: string = "",
  revalidate: number | false = 60
): Promise<BlogPostsResponse> {
  try {
    const pageSize = 6;

    // Build parameters object
    const params: any = {
      populate: "*",
      sort: "createdAt:desc",
      "pagination[page]": page,
      "pagination[pageSize]": pageSize,
    };

    // Build filters object only if needed
    const filters: any = {};

    // Add search filter
    if (queryString.trim()) {
      filters.title = { $containsi: queryString.trim() };
    }

    // Add category filter
    if (category.trim()) {
      filters.category = {
        name: {
          $eq: category.trim(),
        },
      };
    }

    // Only add filters if they exist
    if (Object.keys(filters).length > 0) {
      params.filters = filters;
    }

    const response = await strapiRequest("blog-posts", {
      params,
      revalidate,
    });

    return response as BlogPostsResponse;
  } catch (error) {
    console.error("Error fetching paginated blog posts:", error);

    // Return empty result instead of throwing to prevent page crash
    return {
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageSize: 6,
          pageCount: 0,
          total: 0,
        },
      },
    };
  }
}

// Get a single blog post by slug
export async function getBlogPost(
  slug: string,
  revalidate: number | false = 60
): Promise<StrapiBlogPost | null> {
  try {
    const response = await strapiRequest("blog-posts", {
      params: {
        "filters[slug][$eq]": slug,
        populate: "*",
      },
      revalidate,
    });

    return (response?.data?.[0] as StrapiBlogPost) || null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

// Get all categories
export async function getCategories(
  revalidate: number | false = 60
): Promise<CategoriesResponse> {
  try {
    const response = await strapiRequest("categories", {
      params: {
        populate: "*",
        sort: "name:asc",
      },
      revalidate,
    });

    return response as CategoriesResponse;
  } catch (error) {
    console.error("Error fetching categories:", error);

    // Return empty result instead of throwing
    return {
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageSize: 10,
          pageCount: 0,
          total: 0,
        },
      },
    };
  }
}

// Get blog posts by category
export async function getBlogPostsByCategory(
  categorySlug: string,
  revalidate: number | false = 60
): Promise<BlogPostsResponse> {
  try {
    const response = await strapiRequest("blog-posts", {
      params: {
        "filters[category][slug][$eq]": categorySlug,
        populate: "*",
        sort: "createdAt:desc",
      },
      revalidate,
    });

    return response as BlogPostsResponse;
  } catch (error) {
    console.error("Error fetching blog posts by category:", error);

    // Return empty result instead of throwing
    return {
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageSize: 10,
          pageCount: 0,
          total: 0,
        },
      },
    };
  }
}

// Get all blog post slugs for static generation
export async function getAllBlogSlugs(revalidate: number | false = 60) {
  try {
    const response = await strapiRequest("blog-posts", {
      params: {
        fields: ["slug"],
      },
      revalidate,
    });

    return response?.data?.map((post: any) => ({ slug: post.slug })) || [];
  } catch (error) {
    console.error("Error fetching blog slugs:", error);
    return [];
  }
}

// Search blog posts with multiple field search
export async function searchBlogPosts(
  query: string,
  revalidate: number | false = 60 // Shorter cache for search results
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

    const response = await strapiRequest("blog-posts", {
      params: {
        filters: {
          $or: [
            { title: { $containsi: query } },
            { excerpt: { $containsi: query } },
            { content: { $containsi: query } },
          ],
        },
        populate: "*",
        sort: "createdAt:desc",
      },
      revalidate,
    });

    return response as BlogPostsResponse;
  } catch (error) {
    console.error("Error searching blog posts:", error);

    // Return empty result instead of throwing
    return {
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageSize: 10,
          pageCount: 0,
          total: 0,
        },
      },
    };
  }
}

// Get related posts based on category
export async function getRelatedPosts(
  currentPostId: number,
  categoryName?: string,
  limit: number = 3,
  revalidate: number | false = 60
): Promise<BlogPostsResponse> {
  try {
    const params: any = {
      "filters[id][$ne]": currentPostId,
      populate: "*",
      "pagination[limit]": limit,
      sort: "createdAt:desc",
    };

    if (categoryName) {
      params["filters[category][name][$eq]"] = categoryName;
    }

    const response = await strapiRequest("blog-posts", {
      params,
      revalidate,
    });

    return response as BlogPostsResponse;
  } catch (error) {
    console.error("Error fetching related posts:", error);

    // Return empty result instead of throwing
    return {
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageSize: limit,
          pageCount: 0,
          total: 0,
        },
      },
    };
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
  limit: number = 3,
  revalidate: number | false = 60
): Promise<BlogPostsResponse> {
  try {
    const response = await strapiRequest("blog-posts", {
      params: {
        "filters[featured][$eq]": true,
        populate: "*",
        "pagination[limit]": limit,
        sort: "createdAt:desc",
      },
      revalidate,
    });

    return response as BlogPostsResponse;
  } catch (error) {
    console.error("Error fetching featured posts:", error);

    // Return empty result instead of throwing
    return {
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageSize: limit,
          pageCount: 0,
          total: 0,
        },
      },
    };
  }
}

// Get posts by author
export async function getPostsByAuthor(
  authorId: number,
  revalidate: number | false = 60
): Promise<BlogPostsResponse> {
  try {
    const response = await strapiRequest("blog-posts", {
      params: {
        "filters[authorId][id][$eq]": authorId,
        populate: "*",
        sort: "createdAt:desc",
      },
      revalidate,
    });

    return response as BlogPostsResponse;
  } catch (error) {
    console.error("Error fetching posts by author:", error);

    // Return empty result instead of throwing
    return {
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageSize: 10,
          pageCount: 0,
          total: 0,
        },
      },
    };
  }
}

// Get recent posts
export async function getRecentPosts(
  limit: number = 5,
  revalidate: number | false = 60
): Promise<BlogPostsResponse> {
  try {
    const response = await strapiRequest("blog-posts", {
      params: {
        populate: "*",
        "pagination[limit]": limit,
        sort: "createdAt:desc",
      },
      revalidate,
    });

    return response as BlogPostsResponse;
  } catch (error) {
    console.error("Error fetching recent posts:", error);

    // Return empty result instead of throwing
    return {
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageSize: limit,
          pageCount: 0,
          total: 0,
        },
      },
    };
  }
}
