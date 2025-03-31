// app/blog/page.tsx
import BlogPage from "@/components/blogPage";

export const metadata = {
  title: "Blog | Mimansa Law",
  description:
    "Legal insights, analysis, and commentary from our expert attorneys on matters that impact your business and industry.",
};

export default function Blog() {
  return (
    <div className="mt-12">
      <BlogPage />
    </div>
  );
}
