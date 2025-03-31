"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Tag, Clock } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { NewsItem } from "@/types/news";
import { newsItems, getRelatedNews } from "@/data/newsData";

const NewsDetailPage: React.FC = () => {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";

  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  // Calculate read time (rough estimate)
  const calculateReadTime = (content: string): number => {
    const wordsPerMinute = 200;
    const textOnly = content.replace(/<[^>]*>/g, "");
    const words = textOnly.split(/\s+/).length;
    return Math.max(1, Math.ceil(words / wordsPerMinute));
  };

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true);

    // Find news item by slug
    const foundItem = newsItems.find((item) => item.slug === slug);

    if (foundItem) {
      setNewsItem(foundItem);

      // Get related news
      const related = getRelatedNews(foundItem.id, 3);
      setRelatedNews(related);

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

  if (!newsItem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-playfair mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">
            The article you&apos;re looking for doesn&apos;t exist or may have
            been moved.
          </p>
          <Link
            href="/news"
            className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to News
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
          src={newsItem.image}
          alt={newsItem.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="container max-w-5xl mx-auto px-6 lg:px-8 pb-12 md:pb-16">
            <div className="bg-amber-600 text-white px-4 py-1 text-sm inline-block mb-4">
              {newsItem.type}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-white mb-6 leading-tight">
              {newsItem.title}
            </h1>
            <div className="flex flex-wrap items-center text-white gap-4 md:gap-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDate(newsItem.date)}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {newsItem.author}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {calculateReadTime(newsItem.content)} min read
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="container max-w-5xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div ref={ref} className="lg:col-span-2">
            <div
              className={cn(
                "bg-white border border-gray-200 shadow-sm p-6 md:p-8 lg:p-12 prose prose-lg max-w-none mb-8 transition-all duration-700 transform",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              dangerouslySetInnerHTML={{ __html: newsItem.content }}
            />

            <div
              className={cn(
                "bg-white border border-gray-200 shadow-sm p-6 md:p-8 flex flex-wrap items-center justify-between transition-all duration-700 transform",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10",
                "transition-delay-150"
              )}
              style={{ transitionDelay: "150ms" }}
            >
              <div className="flex flex-wrap items-center gap-2 mb-4 md:mb-0">
                <span className="text-gray-600">Tags:</span>
                {newsItem.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/news?tag=${encodeURIComponent(tag)}`}
                    className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100"
                  >
                    <Tag className="h-3 w-3 mr-1 text-gray-400" />
                    {tag}
                  </Link>
                ))}
              </div>

              <div className="flex items-center">
                <span className="text-gray-600 mr-3">Share:</span>
                <div className="flex space-x-2">
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-amber-600 hover:text-white transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-amber-600 hover:text-white transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-amber-600 hover:text-white transition-colors"
                    aria-label="Share via Email"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div
                className={cn(
                  "bg-white border border-gray-200 shadow-sm p-6 mb-8 transition-all duration-700 transform",
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10",
                  "transition-delay-300"
                )}
                style={{ transitionDelay: "300ms" }}
              >
                <h2 className="text-xl font-semibold mb-4">Related Content</h2>

                {relatedNews.length > 0 ? (
                  <div className="space-y-6">
                    {relatedNews.map((item) => (
                      <div key={item.id} className="group">
                        <Link href={`/news/${item.slug}`}>
                          <div className="relative h-40 mb-3 overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-0 left-0 bg-amber-600 px-2 py-1 text-xs text-white">
                              {item.type}
                            </div>
                          </div>
                          <h3 className="text-lg font-medium mb-2 group-hover:text-amber-600 transition-colors">
                            {item.title}
                          </h3>
                        </Link>
                        <div className="text-sm text-gray-500">
                          {formatDate(item.date)}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">No related content found.</p>
                )}
              </div>

              <div
                className={cn(
                  "bg-amber-500 p-6 transition-all duration-700 transform",
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10",
                  "transition-delay-450"
                )}
                style={{ transitionDelay: "450ms" }}
              >
                <h2 className="text-xl font-semibold text-white mb-4">
                  Stay Updated
                </h2>
                <p className="text-white/90 mb-4">
                  Subscribe to our newsletter to receive the latest legal
                  insights and updates.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  />
                  <button className="w-full bg-white hover:bg-gray-100 text-amber-700 font-medium px-4 py-3 transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to News */}
      <div className="container max-w-5xl mx-auto px-6 lg:px-8 pb-16">
        <Link
          href="/news"
          className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to News
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailPage;
