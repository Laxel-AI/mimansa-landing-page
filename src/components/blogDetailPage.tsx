// src/components/blogDetailPage.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Tag,
  ArrowRight,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { BlogPost, BlogAuthor } from "@/types/blogs";
import {
  getBlogPostBySlug,
  getAuthorById,
  getRelatedPosts,
} from "@/data/blogsData";

const BlogDetailPage: React.FC = () => {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";

  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [author, setAuthor] = useState<BlogAuthor | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Format date to readable format
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true);

    // Find blog post by slug
    const post = getBlogPostBySlug(slug);

    if (post) {
      setBlogPost(post);

      // Get author
      const postAuthor = getAuthorById(post.authorId);
      if (postAuthor) {
        setAuthor(postAuthor);
      }

      // Get related posts
      const related = getRelatedPosts(slug, 3);
      setRelatedPosts(related);

      // Scroll to top
      window.scrollTo(0, 0);
    }

    setIsLoading(false);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-playfair mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">
            The article you&apos;re looking for doesn&apos;t exist or may have
            been moved.
          </p>
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
        <Image
          src={blogPost.coverImage}
          alt={blogPost.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="container max-w-4xl mx-auto px-6 lg:px-8 pb-12 md:pb-16">
            {blogPost.featured && (
              <div className="bg-amber-600 text-white px-4 py-1 text-sm inline-block mb-4">
                FEATURED
              </div>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-white mb-3 leading-tight">
              {blogPost.title}
            </h1>
            {blogPost.subtitle && (
              <h2 className="text-xl md:text-2xl text-white/90 italic mb-6">
                {blogPost.subtitle}
              </h2>
            )}
            <div className="flex flex-wrap items-center text-white gap-4 md:gap-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDate(blogPost.publishedAt)}
              </div>
              {author && (
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {author.name}
                </div>
              )}
              {blogPost.readingTime && (
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {blogPost.readingTime} min read
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div ref={ref} className="container max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Article Content */}
            <div
              className={cn(
                "bg-white border border-gray-200 shadow-sm p-6 md:p-8 lg:p-12 mb-8 transition-all duration-700 transform",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </div>

            {/* Article Footer */}
            <div
              className={cn(
                "bg-white border border-gray-200 shadow-sm p-6 md:p-8 mb-8 transition-all duration-700 transform",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10",
                "transition-delay-150"
              )}
              style={{ transitionDelay: "150ms" }}
            >
              {/* Tags */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Related Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${encodeURIComponent(tag)}`}
                      className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100"
                    >
                      <Tag className="h-3 w-3 mr-1 text-gray-400" />
                      {tag}
                    </Link>
                  ))}
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
            {author && (
              <div
                className={cn(
                  "bg-white border border-gray-200 shadow-sm p-6 md:p-8 transition-all duration-700 transform",
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10",
                  "transition-delay-300"
                )}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={author.image}
                      alt={author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {author.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{author.title}</p>
                    <p className="text-gray-600">{author.bio}</p>
                    <Link
                      href={`/blog?author=${author.id}`}
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
              <div
                className={cn(
                  "bg-white border border-gray-200 shadow-sm p-6 transition-all duration-700 transform",
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10",
                  "transition-delay-150"
                )}
                style={{ transitionDelay: "150ms" }}
              >
                <h3 className="text-lg font-semibold mb-4">Category</h3>
                <Link
                  href={`/blog?category=${encodeURIComponent(
                    blogPost.category
                  )}`}
                  className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
                >
                  {blogPost.category}
                </Link>
              </div>

              {/* Related Posts */}
              <div
                className={cn(
                  "bg-white border border-gray-200 shadow-sm p-6 transition-all duration-700 transform",
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10",
                  "transition-delay-300"
                )}
                style={{ transitionDelay: "300ms" }}
              >
                <h3 className="text-lg font-semibold mb-4">Related Articles</h3>

                {relatedPosts.length > 0 ? (
                  <div className="space-y-6">
                    {relatedPosts.map((post) => (
                      <div key={post.id} className="group">
                        <Link href={`/blog/${post.slug}`}>
                          <div className="relative h-32 mb-3 overflow-hidden">
                            <Image
                              src={post.coverImage}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <h4 className="text-base font-medium mb-1 group-hover:text-amber-600 transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                        </Link>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          {formatDate(post.publishedAt)}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">No related articles found.</p>
                )}
              </div>

              {/* Newsletter */}
              <div
                className={cn(
                  "bg-amber-50 border border-amber-100 p-6 transition-all duration-700 transform",
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10",
                  "transition-delay-450"
                )}
                style={{ transitionDelay: "450ms" }}
              >
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
};

export default BlogDetailPage;
