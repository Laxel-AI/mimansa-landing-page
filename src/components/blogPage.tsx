// src/components/blogPage.tsx
import Link from "next/link";
import { StrapiImage } from "@/components/custom/strapi-image";
import { Search } from "@/components/custom/search";
import { PaginationComponent } from "@/components/custom/pagination";
import { CategorySelect } from "@/components/custom/category-select";
import { formatDate } from "@/lib/api";
import { getBlogPostsPaginated } from "@/lib/api";
import { StrapiBlogPost } from "@/types/strapi";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

interface BlogPageProps {
  currentPage?: number;
  query?: string;
  category?: string;
}

export default async function BlogPage({
  currentPage = 1,
  query = "",
  category = "",
}: BlogPageProps) {
  const { data, meta } = await getBlogPostsPaginated(
    currentPage,
    query,
    category
  );

  const total = Number(meta?.pagination?.pageCount) || 1;
  const posts = data as StrapiBlogPost[];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-white mb-6">
            Mimansa Law Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Legal insights, analysis, and commentary from our expert attorneys
            on matters that impact your business and industry.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar with filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="bg-white border border-gray-200 shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Search & Filter</h2>
                <div className="space-y-4">
                  <CategorySelect />
                  <Search />
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-amber-50 border border-amber-100 p-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Subscribe to Our Blog
                </h3>
                <p className="text-amber-800/90 mb-4 text-sm">
                  Stay updated with the latest legal insights and analysis.
                  We&apos;ll never spam your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border border-amber-200 bg-white placeholder-amber-300 text-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Blog listings */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-playfair mb-2">
                {posts.length === 0
                  ? "No posts found"
                  : `${posts.length} ${posts.length === 1 ? "Post" : "Posts"}`}
              </h2>
              {posts.length === 0 && (
                <p className="text-gray-600">
                  Try adjusting your search criteria or filters to find what
                  you&apos;re looking for.
                </p>
              )}
            </div>

            {posts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-muted-foreground">
                  No posts found
                </h3>
                <p className="text-muted-foreground mt-2">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-12">
                  {posts.map((post: StrapiBlogPost) => (
                    <div key={post.documentId}>
                      <div className="bg-white border border-gray-200 shadow-sm overflow-hidden group">
                        <div className="relative h-60 md:h-80">
                          {post.featured_image ? (
                            <StrapiImage
                              alt={
                                post.featured_image.alternativeText ||
                                post.title
                              }
                              src={post.featured_image.url}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                              <span className="text-4xl">📝</span>
                            </div>
                          )}
                          {/* Featured badge could be added here if you have a featured field */}
                        </div>

                        <div className="p-6 md:p-8">
                          <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4 mb-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {formatDate(
                                post.published ||
                                  post.publishedAt ||
                                  post.createdAt
                              )}
                            </div>

                            {post.author && (
                              <div className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                {post.author.username || post.author.email}
                              </div>
                            )}

                            {/* Reading time could be calculated if needed */}
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />5 min read
                            </div>
                          </div>

                          <h3 className="text-2xl md:text-3xl font-playfair mb-2">
                            <Link
                              href={`/blog/${post.slug}`}
                              className="hover:text-amber-600 transition-colors"
                            >
                              {post.title}
                            </Link>
                          </h3>

                          {post.excerpt && (
                            <p className="text-gray-600 mb-6 line-clamp-3">
                              {post.excerpt}
                            </p>
                          )}

                          <div className="flex flex-wrap justify-between items-center">
                            <Link
                              href={`/blog/${post.slug}`}
                              className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 group"
                            >
                              Read Full Article
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>

                            <div className="flex mt-4 lg:mt-0">
                              {post.category && (
                                <span className="mr-3 text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors">
                                  {post.category.name}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-12">
                  <PaginationComponent pageCount={total} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
