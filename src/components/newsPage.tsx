"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Search, Tag, ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { NewsItem } from "@/types/news";
import { recentNews } from "@/data/newsData";

const NewsPage: React.FC = () => {
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(recentNews);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Get unique categories from news items
  const categories = Array.from(
    new Set(recentNews.map((item) => item.category))
  );

  // Get unique tags from news items
  const tags = Array.from(
    new Set(recentNews.flatMap((item) => item.tags))
  ).sort();

  // Filter news based on search, category, and tag
  useEffect(() => {
    let results = recentNews;

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        (item) =>
          item.title.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term) ||
          item.content.toLowerCase().includes(term)
      );
    }

    // Filter by category
    if (selectedCategory) {
      results = results.filter((item) => item.category === selectedCategory);
    }

    // Filter by tag
    if (selectedTag) {
      results = results.filter((item) => item.tags.includes(selectedTag));
    }

    setFilteredNews(results);
  }, [searchTerm, selectedCategory, selectedTag]);

  // Format date to readable format
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Clear all filters
  const clearFilters = (): void => {
    setSearchTerm("");
    setSelectedCategory(null);
    setSelectedTag(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-white mb-6">
            Latest News & Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Stay informed about legal developments, regulatory changes, and
            insights from our expert team at Mimansa Law.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div ref={ref} className="max-w-7xl mx-auto py-16 px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar with filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div
                className={cn(
                  "bg-white border border-gray-200 shadow-sm p-6 mb-8 transition-all duration-500 transform",
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
              >
                <h2 className="text-xl font-semibold mb-4">Search</h2>
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search news and insights..."
                    className="w-full px-4 py-3 pl-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div
                className={cn(
                  "bg-white border border-gray-200 shadow-sm p-6 mb-8 transition-all duration-500 transform",
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10",
                  "transition-delay-150"
                )}
                style={{ transitionDelay: "150ms" }}
              >
                <h2 className="text-xl font-semibold mb-4">Categories</h2>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() =>
                          setSelectedCategory(
                            selectedCategory === category ? null : category
                          )
                        }
                        className={cn(
                          "flex items-center w-full text-left py-1 px-2 rounded hover:bg-gray-100 transition-colors",
                          selectedCategory === category &&
                            "bg-amber-50 text-amber-700 font-medium"
                        )}
                      >
                        <ChevronRight
                          className={cn(
                            "h-4 w-4 mr-2 transition-transform",
                            selectedCategory === category &&
                              "transform rotate-90 text-amber-600"
                          )}
                        />
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={cn(
                  "bg-white border border-gray-200 shadow-sm p-6 mb-8 transition-all duration-500 transform",
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10",
                  "transition-delay-300"
                )}
                style={{ transitionDelay: "300ms" }}
              >
                <h2 className="text-xl font-semibold mb-4">Popular Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() =>
                        setSelectedTag(selectedTag === tag ? null : tag)
                      }
                      className={cn(
                        "inline-flex items-center px-3 py-1 text-sm rounded-full border",
                        selectedTag === tag
                          ? "bg-amber-500 text-white border-amber-500"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      )}
                    >
                      <Tag
                        className={cn(
                          "h-3 w-3 mr-1",
                          selectedTag === tag ? "text-white" : "text-gray-400"
                        )}
                      />
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {(searchTerm || selectedCategory || selectedTag) && (
                <div
                  className={cn(
                    "bg-white border border-gray-200 shadow-sm p-6 mb-8 transition-all duration-500 transform",
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10",
                    "transition-delay-450"
                  )}
                  style={{ transitionDelay: "450ms" }}
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Current Filters</h2>
                    <button
                      onClick={clearFilters}
                      className="text-amber-600 hover:text-amber-700 text-sm font-medium"
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="mt-4 space-y-2">
                    {searchTerm && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          Search: "{searchTerm}"
                        </span>
                        <button
                          onClick={() => setSearchTerm("")}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          ✕
                        </button>
                      </div>
                    )}
                    {selectedCategory && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          Category: {selectedCategory}
                        </span>
                        <button
                          onClick={() => setSelectedCategory(null)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          ✕
                        </button>
                      </div>
                    )}
                    {selectedTag && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          Tag: {selectedTag}
                        </span>
                        <button
                          onClick={() => setSelectedTag(null)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          ✕
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* News listings */}
          <div className="lg:col-span-2">
            <div
              className={cn(
                "mb-8 transition-all duration-700 transform",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              <h2 className="text-2xl font-playfair mb-2">
                {filteredNews.length === 0
                  ? "No results found"
                  : `${filteredNews.length} ${
                      filteredNews.length === 1 ? "Result" : "Results"
                    }`}
              </h2>
              {filteredNews.length === 0 && (
                <p className="text-gray-600">
                  Try adjusting your search criteria or filters to find what
                  you&apos;re looking for.
                </p>
              )}
            </div>

            <div className="space-y-8">
              {filteredNews.map((newsItem, index) => (
                <div
                  key={newsItem.id}
                  className={cn(
                    "bg-white border border-gray-200 shadow-sm overflow-hidden transition-all duration-700 transform",
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  )}
                  style={{
                    transitionDelay: inView ? `${150 + index * 100}ms` : "0ms",
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <div className="md:col-span-1 relative h-48 md:h-full">
                      <Image
                        src={newsItem.image}
                        alt={newsItem.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-amber-600 px-3 py-1 text-xs text-white font-medium">
                        {newsItem.type}
                      </div>
                    </div>

                    <div className="md:col-span-2 p-6">
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(newsItem.date)}
                      </div>

                      <h3 className="text-xl md:text-2xl font-playfair mb-3">
                        {newsItem.title}
                      </h3>

                      <p className="text-gray-600 mb-6">
                        {newsItem.description}
                      </p>

                      <div className="flex items-center justify-between mt-auto">
                        <Link
                          href={`/news/${newsItem.slug}`}
                          className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 group"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <div className="hidden md:flex space-x-1">
                          {newsItem.tags.slice(0, 2).map((tag) => (
                            <button
                              key={tag}
                              onClick={() =>
                                setSelectedTag(selectedTag === tag ? null : tag)
                              }
                              className="text-xs text-gray-500 hover:text-amber-600 hover:underline"
                            >
                              #{tag}
                            </button>
                          ))}
                          {newsItem.tags.length > 2 && (
                            <span className="text-xs text-gray-400">
                              +{newsItem.tags.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination (simplified version) */}
            {filteredNews.length > 0 && (
              <div className="mt-12 flex justify-center">
                <div className="inline-flex items-center space-x-1">
                  <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                    &laquo;
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded border border-amber-600 bg-amber-600 text-white">
                    1
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                    &raquo;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
