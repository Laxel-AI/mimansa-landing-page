"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  User,
  Clock,
  Filter,
  Search,
  Tag,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { BlogPost } from "@/types/blogs";
import { blogPosts, blogAuthors, getAuthorById } from "@/data/blogsData";

const BlogPage: React.FC = () => {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedAuthor, setSelectedAuthor] = useState<number | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const { ref } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Get unique categories from blog posts
  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category))
  );

  // Get unique tags from blog posts
  const tags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  ).sort();

  // Filter posts based on search, category, tag, and author
  useEffect(() => {
    let results = blogPosts;

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        (post) =>
          post.title.toLowerCase().includes(term) ||
          post.excerpt.toLowerCase().includes(term) ||
          post.content.toLowerCase().includes(term)
      );
    }

    // Filter by category
    if (selectedCategory) {
      results = results.filter((post) => post.category === selectedCategory);
    }

    // Filter by tag
    if (selectedTag) {
      results = results.filter((post) => post.tags.includes(selectedTag));
    }

    // Filter by author
    if (selectedAuthor) {
      results = results.filter((post) => post.authorId === selectedAuthor);
    }

    // Sort by date (newest first)
    results = [...results].sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    setFilteredPosts(results);
  }, [searchTerm, selectedCategory, selectedTag, selectedAuthor]);

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
    setSelectedAuthor(null);
  };

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

      {/* Search & Filter Mobile Toggle */}
      <div className="lg:hidden bg-white border-b sticky top-0 z-10">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-between w-full p-4 font-medium"
        >
          <div className="flex items-center">
            <Filter className="h-5 w-5 mr-2" />
            Search & Filters
          </div>
          {showFilters ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Main Content */}
      <div ref={ref} className="max-w-7xl mx-auto py-16 px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar with filters */}
          <div
            className={cn(
              "lg:col-span-1",
              showFilters ? "block" : "hidden lg:block"
            )}
          >
            <div className="sticky top-24 space-y-8">
              <div className="bg-white border border-gray-200 shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Search</h2>
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search blog posts..."
                    className="w-full px-4 py-3 pl-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="bg-white border border-gray-200 shadow-sm p-6">
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
                        <div
                          className={cn(
                            "w-2 h-2 rounded-full mr-2",
                            selectedCategory === category
                              ? "bg-amber-600"
                              : "bg-gray-300"
                          )}
                        />
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-gray-200 shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Authors</h2>
                <ul className="space-y-4">
                  {blogAuthors.map((author) => (
                    <li key={author.id}>
                      <button
                        onClick={() =>
                          setSelectedAuthor(
                            selectedAuthor === author.id ? null : author.id
                          )
                        }
                        className={cn(
                          "flex items-center w-full text-left py-1 px-2 rounded hover:bg-gray-100 transition-colors",
                          selectedAuthor === author.id &&
                            "bg-amber-50 text-amber-700 font-medium"
                        )}
                      >
                        <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
                          <Image
                            src={author.image}
                            alt={author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div
                            className={cn(
                              selectedAuthor === author.id && "font-medium"
                            )}
                          >
                            {author.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {author.title}
                          </div>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-gray-200 shadow-sm p-6">
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

              {(searchTerm ||
                selectedCategory ||
                selectedTag ||
                selectedAuthor) && (
                <div className="bg-white border border-gray-200 shadow-sm p-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Active Filters</h2>
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
                    {selectedAuthor && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          Author: {getAuthorById(selectedAuthor)?.name}
                        </span>
                        <button
                          onClick={() => setSelectedAuthor(null)}
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

          {/* Blog listings */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-playfair mb-2">
                {filteredPosts.length === 0
                  ? "No posts found"
                  : `${filteredPosts.length} ${
                      filteredPosts.length === 1 ? "Post" : "Posts"
                    }`}
              </h2>
              {filteredPosts.length === 0 && (
                <p className="text-gray-600">
                  Try adjusting your search criteria or filters to find what
                  you&apos;re looking for.
                </p>
              )}
            </div>

            <div className="space-y-12">
              {filteredPosts.map((post) => {
                const author = getAuthorById(post.authorId);

                return (
                  <div key={post.id}>
                    <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
                      <div className="relative h-60 md:h-80">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                        {post.featured && (
                          <div className="absolute top-0 left-0 bg-amber-600 px-3 py-1 text-xs text-white font-medium">
                            FEATURED
                          </div>
                        )}
                      </div>

                      <div className="p-6 md:p-8">
                        <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4 mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(post.publishedAt)}
                          </div>

                          {author && (
                            <Link
                              href={`/blog?author=${author.id}`}
                              className="flex items-center hover:text-amber-600"
                            >
                              <User className="h-4 w-4 mr-1" />
                              {author.name}
                            </Link>
                          )}

                          {post.readingTime && (
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {post.readingTime} min read
                            </div>
                          )}
                        </div>

                        <h3 className="text-2xl md:text-3xl font-playfair mb-2">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="hover:text-amber-600 transition-colors"
                          >
                            {post.title}
                          </Link>
                        </h3>

                        {post.subtitle && (
                          <h4 className="text-lg text-gray-700 italic mb-4">
                            {post.subtitle}
                          </h4>
                        )}

                        <p className="text-gray-600 mb-6">{post.excerpt}</p>

                        <div className="flex flex-wrap justify-between items-center">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 group"
                          >
                            Read Full Article
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>

                          <div className="flex mt-4 lg:mt-0">
                            <Link
                              href={`/blog?category=${encodeURIComponent(
                                post.category
                              )}`}
                              className="mr-3 text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
                            >
                              {post.category}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
