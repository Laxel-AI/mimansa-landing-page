import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="max-w-xl w-full px-6 py-12">
        <h1 className="font-playfair text-6xl mb-4 text-amber-600">404</h1>
        <h2 className="text-3xl font-playfair mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-10">
          We couldn&apos;t find the page you were looking for. The page may have
          been moved, deleted, or perhaps the URL was mistyped.
        </p>

        <Link
          href="/"
          className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
