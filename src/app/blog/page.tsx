// app/blog/page.tsx
import BlogPage from "@/components/blogPage";

export const metadata = {
  title: "Blog | Mimansa Law",
  description:
    "Legal insights, analysis, and commentary from our expert attorneys on matters that impact your business and industry.",
};

interface PageProps {
  searchParams: Promise<{ page?: string; query?: string; category?: string }>;
}

export default async function Blog({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams?.page) || 1;
  const query = resolvedParams?.query ?? "";
  const category = resolvedParams?.category ?? "";

  return (
    <div className="mt-12">
      <BlogPage currentPage={currentPage} query={query} category={category} />
    </div>
  );
}
