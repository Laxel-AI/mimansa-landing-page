"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Search, Tag, X, ChevronDown } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { NewsItem } from "@/types/news";
import { recentNews } from "@/data/newsData"; // Assuming your data source

const NewsPage: React.FC = () => {
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(recentNews);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>("All Categories");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isTagMenuOpen, setIsTagMenuOpen] = useState<boolean>(false);

  // Refs for click outside detection
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // InView hook for animation - applied to the main content container below the header
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = ["All Categories", ...Array.from(new Set(recentNews.map((item) => item.category))).sort()];
  const allTags = Array.from(new Set(recentNews.flatMap((item) => item.tags))).sort();

  // Effect for filtering news whenever dependencies change
  useEffect(() => {
    let results = recentNews;
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter((item) =>
        item.title.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        // Assuming 'content' exists or filter across relevant fields
        (item.content && item.content.toLowerCase().includes(term))
      );
    }
    if (selectedCategory !== "All Categories" && selectedCategory) {
      results = results.filter((item) => item.category === selectedCategory);
    }
    if (selectedTags.length > 0) {
      // Filter for items that contain ALL selected tags
      results = results.filter((item) => selectedTags.every((tag) => item.tags.includes(tag)));
    }
    setFilteredNews(results);
  }, [searchTerm, selectedCategory, selectedTags]);

  // Effect for handling click outside the tag dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside the dropdown content AND the button
      if (
        isTagMenuOpen && // Only run if the menu is open
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsTagMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove the listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isTagMenuOpen]); // Re-run effect when menu state changes


  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return "Invalid Date";
      }
      const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString("en-US", options);
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    // Decide whether to close the menu after selection
    // setIsTagMenuOpen(false); // Uncomment to close after selecting/deselecting one tag
  };

  const clearFilters = (): void => {
    setSearchTerm("");
    setSelectedCategory("All Categories");
    setSelectedTags([]);
    // Decide whether to close the tag menu when clearing all filters
    setIsTagMenuOpen(false);
  };

  const toggleTagMenu = () => {
    setIsTagMenuOpen(!isTagMenuOpen);
  };

  // Split filtered news into featured and rest
  const featuredNews = filteredNews.length > 0 ? filteredNews[0] : null;
  const restOfNews = filteredNews.length > 1 ? filteredNews.slice(1) : [];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

     < div className="bg-gray-900 py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-white mb-6">
          News & Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
          Stay informed with the latest news, articles, and insights from our team.
          </p>
        </div>
      </div>
      {/* End Header Section */}

      <div className="max-w-7xl mx-auto py-10 px-6 sm:px-8 lg:px-12">
        {/* Filter Section - Modernized */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Search className="h-5 w-5" />
            </div>
          </div>

          <div className="relative">
            <select
              value={selectedCategory || "All Categories"}
              onChange={handleCategoryChange}
              className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-3 pr-8 rounded-md shadow-sm leading-tight focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <ChevronDown className="h-5 w-5" />
            </div>
          </div>

          {/* Tags Filter Button and Dropdown */}
          <div className="relative">
            <button
              ref={buttonRef} // Attach ref
              onClick={toggleTagMenu}
              className="bg-white border border-gray-300 rounded-md shadow-sm px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent w-full flex items-center justify-between"
            >
              Tags {selectedTags.length > 0 && <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">{selectedTags.length}</span>}
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isTagMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            {isTagMenuOpen && (
               <div
                 ref={dropdownRef} // Attach ref
                 className="absolute top-full left-0 right-0 md:right-auto mt-1 bg-white border border-gray-200 rounded-md shadow-md z-10 p-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full md:w-auto md:min-w-[18rem] lg:min-w-[20rem] max-h-60 overflow-y-auto"
               >
                 {allTags.map((tag) => (
                   <button
                     key={tag}
                     onClick={() => handleTagClick(tag)}
                     className={cn(
                       "inline-flex items-center justify-center px-3 py-1 rounded-full border text-sm text-center flex-grow-0 flex-shrink-0",
                       selectedTags.includes(tag)
                         ? "bg-amber-500 text-white border-amber-500"
                         : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 hover:border-gray-400 transition-colors"
                     )}
                   >
                     <Tag className="h-4 w-4 mr-1 hidden sm:inline-block" />
                     {tag}
                   </button>
                 ))}
                 {allTags.length === 0 && <p className="col-span-full text-center text-gray-500 text-sm">No tags available</p>}
               </div>
            )}
          </div>
        </div>

        {/* Current Filters - Modernized */}
        {(searchTerm || selectedCategory !== "All Categories" || selectedTags.length > 0) && (
          <div className="mb-6 py-3 px-4 bg-gray-100 border border-gray-200 rounded-md">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Active Filters:</h3>
            <div className="flex flex-wrap gap-2 items-center">
              {searchTerm && (
                <span className="inline-flex items-center bg-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-800">
                  Search: "{searchTerm}"
                  <button onClick={() => setSearchTerm("")} className="ml-1 text-gray-400 hover:text-gray-500">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {selectedCategory !== "All Categories" && selectedCategory && (
                <span className="inline-flex items-center bg-amber-100 text-amber-800 rounded-full px-3 py-1 text-xs font-medium">
                  Category: {selectedCategory}
                  <button onClick={() => setSelectedCategory("All Categories")} className="ml-1 text-amber-400 hover:text-amber-500">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {selectedTags.map((tag) => (
                <span key={tag} className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs font-medium">
                  Tag: {tag}
                  <button onClick={() => handleTagClick(tag)} className="ml-1 text-blue-400 hover:text-blue-500">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
              <button onClick={clearFilters} className="text-amber-600 hover:text-amber-700 text-sm font-medium ml-auto md:ml-4">
                Clear All
              </button>
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800">
            {filteredNews.length === 0
              ? "No results found"
              : `${filteredNews.length} ${filteredNews.length === 1 ? "Result" : "Results"}`}
          </h2>
          {filteredNews.length === 0 && (
            <p className="text-gray-600 mt-2">
              Try adjusting your search criteria or filters to find what you're looking for.
            </p>
          )}
        </div>

        {/* News Listings - Refactored Layout */}
        {/* Apply ref here to trigger animation for content below */}
        <div ref={ref}>
          {/* Featured Article Layout */}
          {featuredNews && (
            <Link
              href={`/news/${featuredNews.slug}`}
              className={cn(
                "mb-10 bg-white rounded-md shadow-md overflow-hidden transition-all duration-500 ease-out hover:shadow-lg block",
                "grid grid-cols-1 md:grid-cols-2 gap-6",
                 inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              )}
            >
              <div className="relative h-64 md:h-auto">
                <Image
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  fill
                  className="object-cover rounded-t-md md:rounded-l-md md:rounded-t-none"
                />
                <div className="absolute top-4 left-4 bg-amber-500 bg-opacity-90 px-3 py-1 text-xs text-white font-medium rounded-md">
                  {featuredNews.type}
                </div>
              </div>
              <div className="p-6 flex flex-col justify-center">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-gray-600">{formatDate(featuredNews.date)}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 line-clamp-3">{featuredNews.title}</h3>
                <p className="text-gray-700 mb-6 line-clamp-4">{featuredNews.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-amber-600 font-semibold hover:text-amber-700 text-md">
                    Read More <ArrowRight className="inline-block ml-1 h-5 w-5 align-middle" />
                  </span>
                   <div className="flex flex-wrap gap-2">
                    {featuredNews.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "inline-flex items-center px-2 py-0.5 rounded-full border text-xs",
                           selectedTags.includes(tag)
                            ? "bg-blue-100 text-blue-800 border-blue-200"
                            : "bg-gray-100 text-gray-600 border-gray-200"
                        )}
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                     {featuredNews.tags.length > 3 && (
                      <span className="text-xs text-gray-400">+ {featuredNews.tags.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Rest of Articles Grid Layout */}
          {restOfNews.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {restOfNews.map((newsItem, index) => (
                <Link
                  key={newsItem.id}
                  href={`/news/${newsItem.slug}`}
                  className={cn(
                    "bg-white rounded-md shadow-md overflow-hidden transition-all duration-500 ease-out hover:shadow-lg block",
                     inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                   )}
                >
                  <div className="relative h-56">
                    <Image
                      src={newsItem.image}
                      alt={newsItem.title}
                      fill
                      className="object-cover rounded-t-md"
                    />
                     <div className="absolute top-3 left-3 bg-amber-500 bg-opacity-90 px-2 py-0.5 text-xs text-white font-medium rounded-md">
                       {newsItem.type}
                     </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-gray-600">{formatDate(newsItem.date)}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">{newsItem.title}</h3>
                    <p className="text-gray-600 mb-3 line-clamp-2">{newsItem.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-600 font-medium hover:text-amber-700 text-sm">
                        Read More <ArrowRight className="inline-block ml-1 h-4 w-4 align-middle" />
                      </span>
                      <div className="flex flex-wrap gap-2 justify-end">
                        {newsItem.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className={cn(
                              "inline-flex items-center px-2 py-0.5 rounded-full border text-xs",
                              selectedTags.includes(tag)
                                ? "bg-blue-100 text-blue-800 border-blue-200"
                                : "bg-gray-100 text-gray-600 border-gray-200"
                            )}
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                        {newsItem.tags.length > 2 && (
                          <span className="text-xs text-gray-400">+ {newsItem.tags.length - 2}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
           {/* Message if NO results found AFTER filtering */}
          {filteredNews.length === 0 && (
             <p className="text-gray-600 text-center mt-8">
               No articles match your current filters.
             </p>
           )}
        </div>


        {/* Pagination - Modernized (Placeholder, adjust as needed if implementing actual pagination) */}
        {/* Show pagination only if there are results to display (and you have more than one page worth) */}
        {/* This simple check `filteredNews.length > 0` will show pagination even for 1 result, adjust if needed */}
        {filteredNews.length > 0 && (
          <div className="mt-12 flex justify-center">
            <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              {/* Placeholder buttons - link/button disabled state based on actual page state */}
              <button className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                <span className="sr-only">Previous</span>
                <ChevronDown className="h-5 w-5 rotate-90" aria-hidden="true" />
              </button>
              {/* Example page button - active state */}
              <button aria-current="page" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-amber-50 text-sm font-medium text-amber-700 focus:z-10 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500">
                1
              </button>
              {/* Example page button - inactive state */}
              {/* You would generate these dynamically based on total pages */}
              {/* <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500">
                2
              </button> */}
               {/* Optional: Add ellipsis or more pages dynamically */}
              <button className="relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                <span className="sr-only">Next</span>
                <ChevronDown className="h-5 w-5 -rotate-90" aria-hidden="true" />
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;