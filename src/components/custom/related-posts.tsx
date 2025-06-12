// src/components/custom/related-posts.tsx
import Link from "next/link";
import { StrapiImage } from "@/components/custom/strapi-image";
import { formatDate } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { StrapiBlogPost } from "@/types/strapi";

interface RelatedPostsProps {
  posts: StrapiBlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section>
      <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.documentId}
            className="group"
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative h-40 overflow-hidden">
                  {post.featured_image ? (
                    <StrapiImage
                      src={post.featured_image.url}
                      alt={post.featured_image.alternativeText || post.title}
                      fill
                      className="object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-t-lg flex items-center justify-center">
                      <span className="text-2xl">📖</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(
                      post.published || post.publishedAt || post.createdAt
                    )}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
