// src/app/blog/[slug]/not-found.tsx
import Link from "next/link";
import { ArrowLeft, FileX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with similar styling to blog page */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
          <FileX className="h-24 w-24 text-white opacity-50" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="container max-w-4xl mx-auto px-6 lg:px-8 pb-12 md:pb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-white mb-3 leading-tight">
              404 - Article Not Found
            </h1>
            <p className="text-white/90 text-lg">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="container max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Main Content Card */}
          <div className="bg-white border border-gray-200 shadow-sm p-6 md:p-8 lg:p-12 text-center">
            <div className="mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                <FileX className="h-8 w-8 text-gray-400" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Oops! Article Not Found
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We couldn't find the blog post you're looking for. It might have
                been moved, deleted, or the URL might be incorrect. Don't worry
                though - we have plenty of other great articles for you to
                explore.
              </p>
            </div>

            <div className="space-y-4">
              <Link
                href="/blog"
                className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 transition-colors duration-300 group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Blog
              </Link>

              <div className="text-sm text-gray-500">
                or{" "}
                <Link
                  href="/"
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  return to homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
