// app/blog/[slug]/page.tsx
import BlogDetailPage from "@/components/blogDetailPage";
import { getBlogPostBySlug, blogPosts } from "@/data/blogsData";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Article Not Found | Mimansa Law",
      description: "The article you are looking for could not be found.",
    };
  }

  return {
    title: `${post.title} | Mimansa Law Blog`,
    description: post.excerpt,
  };
}

export default function BlogDetail() {
  return (
    <div className="mt-12">
      <BlogDetailPage />
    </div>
  );
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
