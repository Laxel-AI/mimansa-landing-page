// src/app/blog/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  formatDate,
  calculateReadingTime,
  getStrapiMedia,
  getBlogPost,
  getRelatedPosts,
} from "@/lib/api";
import { StrapiImage } from "@/components/custom/strapi-image";
import { BlockRenderer } from "@/components/block-renderer";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  User,
  ArrowRight,
} from "lucide-react";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const imageUrl = post.featured_image
    ? getStrapiMedia(post.featured_image.url)
    : null;

  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} on our blog`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read ${post.title} on our blog`,
      type: "article",
      publishedTime: post.published || post.publishedAt || post.createdAt,
      authors: post.author ? [post.author.username] : undefined,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || `Read ${post.title} on our blog`,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Get related posts
  const relatedPostsData = await getRelatedPosts(
    post.id,
    post.category?.name,
    3
  );

  // Calculate reading time from content
  interface ContentChild {
    text: string;
  }

  interface ContentBlock {
    children?: ContentChild[];
  }

  const contentText = post.content
    ? post.content
        .map(
          (block: ContentBlock) =>
            block.children
              ?.map((child: ContentChild) => child.text)
              .join(" ") || ""
        )
        .join(" ")
    : "";

  const readingTime = calculateReadingTime(contentText + (post.excerpt || ""));
  const publishedDate = post.published || post.publishedAt || post.createdAt;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
        {post.featured_image ? (
          <StrapiImage
            src={post.featured_image.url}
            alt={post.featured_image.alternativeText || post.title}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
            <span className="text-6xl text-white opacity-50">📝</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="container max-w-4xl mx-auto px-6 lg:px-8 pb-12 md:pb-16">
            {/* Featured badge if available */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-white mb-3 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center text-white gap-4 md:gap-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDate(publishedDate)}
              </div>
              {post.author && (
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.author.username || post.author.email}
                </div>
              )}
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {readingTime} min read
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="container max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Article Content */}
            <div className="bg-white border border-gray-200 shadow-sm p-6 md:p-8 lg:p-12 mb-8">
              {post.content && post.content.length > 0 && (
                <div className="prose prose-lg max-w-none prose-headings:scroll-mt-16 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-p:mb-6 prose-img:rounded-lg prose-img:shadow-md">
                  <BlockRenderer content={post.content} />
                </div>
              )}
            </div>

            {/* Article Footer */}
            <div className="bg-white border border-gray-200 shadow-sm p-6 md:p-8 mb-8">
              {/* Category/Tags */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Related Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {post.category && (
                    <Link
                      href={`/blog?category=${encodeURIComponent(
                        post.category.name
                      )}`}
                      className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100"
                    >
                      <Tag className="h-3 w-3 mr-1 text-gray-400" />
                      {post.category.name}
                    </Link>
                  )}
                </div>
              </div>

              {/* Share */}
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Share This Article
                </h3>
                <div className="flex space-x-3">
                  <button
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-amber-600 hover:text-white transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </button>
                  <button
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-amber-600 hover:text-white transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </button>
                  <button
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-amber-600 hover:text-white transition-colors"
                    aria-label="Share via Email"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </button>
                  <button
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-amber-600 hover:text-white transition-colors"
                    aria-label="Copy Link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            {post.author && (
              <div className="bg-white border border-gray-200 shadow-sm p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 flex items-center justify-center">
                    <User className="h-8 w-8 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {post.author.username || "Anonymous"}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">Author</p>
                    <p className="text-gray-600">
                      {post.author.email ||
                        "Legal expert and content contributor"}
                    </p>
                    <Link
                      href={`/blog?author=${post.author.id}`}
                      className="inline-flex items-center mt-3 text-amber-600 font-medium hover:text-amber-700 group"
                    >
                      View All Posts
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div className="bg-white border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Category</h3>
                {post.category && (
                  <Link
                    href={`/blog?category=${encodeURIComponent(
                      post.category.name
                    )}`}
                    className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
                  >
                    {post.category.name}
                  </Link>
                )}
              </div>

              {/* Related Posts */}
              <div className="bg-white border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Related Articles</h3>

                {relatedPostsData.data.length > 0 ? (
                  <div className="space-y-6">
                    {relatedPostsData.data.map((relatedPost: any) => (
                      <div key={relatedPost.id} className="group">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          <div className="relative h-32 mb-3 overflow-hidden">
                            {relatedPost.featured_image ? (
                              <StrapiImage
                                src={relatedPost.featured_image.url}
                                alt={
                                  relatedPost.featured_image.alternativeText ||
                                  relatedPost.title
                                }
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                <span className="text-2xl">📝</span>
                              </div>
                            )}
                          </div>
                          <h4 className="text-base font-medium mb-1 group-hover:text-amber-600 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                        </Link>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          {formatDate(
                            relatedPost.published ||
                              relatedPost.publishedAt ||
                              relatedPost.createdAt
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">No related articles found.</p>
                )}
              </div>

              {/* Newsletter */}
              <div className="bg-amber-50 border border-amber-100 p-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Subscribe to Our Blog
                </h3>
                <p className="text-amber-800/90 mb-4 text-sm">
                  Stay updated with the latest legal insights and analysis.
                  We'll never spam your inbox.
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
        </div>
      </div>

      {/* Back to Blog */}
      <div className="container max-w-6xl mx-auto px-6 lg:px-8 pb-16">
        <Link
          href="/blog"
          className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
