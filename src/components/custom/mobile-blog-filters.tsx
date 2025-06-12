// src/components/custom/mobile-blog-filters.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search } from "@/components/custom/search";
import { CategorySelect } from "@/components/custom/category-select";
import { Filter, ChevronDown, ChevronUp, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Author {
  id: number;
  name: string;
  email?: string;
}

interface MobileBlogFiltersProps {
  authors: Author[];
  selectedCategory?: string;
  selectedAuthor?: string;
  searchTerm?: string;
  onClearFilters?: () => void;
}

export function MobileBlogFilters({
  authors,
  selectedCategory,
  selectedAuthor,
  searchTerm,
  onClearFilters,
}: MobileBlogFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);

  const hasActiveFilters = selectedCategory || selectedAuthor || searchTerm;

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden bg-white border-b sticky top-0 z-10">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-between w-full p-4 font-medium"
        >
          <div className="flex items-center">
            <Filter className="h-5 w-5 mr-2" />
            Search & Filters
            {hasActiveFilters && (
              <span className="ml-2 bg-amber-600 text-white text-xs px-2 py-1 rounded-full">
                Active
              </span>
            )}
          </div>
          {showFilters ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Filters Content */}
      <div
        className={cn(
          "lg:hidden bg-white border-b transition-all duration-300 overflow-hidden",
          showFilters ? "max-h-screen border-b" : "max-h-0 border-b-0"
        )}
      >
        <div className="p-4 space-y-6">
          {/* Search */}
          <div>
            <h3 className="font-semibold mb-2">Search</h3>
            <Search />
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-2">Categories</h3>
            <CategorySelect />
          </div>

          {/* Authors */}
          {authors.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Authors</h3>
              <div className="space-y-2">
                {authors.map((author) => (
                  <Link
                    key={author.id}
                    href={`/blog?author=${author.id}`}
                    className={cn(
                      "flex items-center w-full text-left py-2 px-3 rounded hover:bg-gray-100 transition-colors",
                      selectedAuthor === author.id.toString() &&
                        "bg-amber-50 text-amber-700"
                    )}
                  >
                    <div className="relative w-6 h-6 rounded-full overflow-hidden mr-3 bg-gray-200 flex items-center justify-center">
                      <User className="h-3 w-3 text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{author.name}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Active Filters */}
          {hasActiveFilters && (
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">Active Filters</h3>
                {onClearFilters && (
                  <button
                    onClick={onClearFilters}
                    className="text-amber-600 hover:text-amber-700 text-sm font-medium"
                  >
                    Clear All
                  </button>
                )}
              </div>
              <div className="space-y-2">
                {searchTerm && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      Search: "{searchTerm}"
                    </span>
                  </div>
                )}
                {selectedCategory && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      Category: {selectedCategory}
                    </span>
                  </div>
                )}
                {selectedAuthor && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      Author:{" "}
                      {
                        authors.find((a) => a.id.toString() === selectedAuthor)
                          ?.name
                      }
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
