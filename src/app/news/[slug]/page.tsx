// app/news/[slug]/page.tsx
import NewsDetailPage from "@/components/newsDetailsPage";
import { newsItems } from "@/data/newsData";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const newsItem = newsItems.find((item) => item.slug === params.slug);

  if (!newsItem) {
    return {
      title: "Article Not Found | Mimansa Law",
      description: "The article you are looking for could not be found.",
    };
  }

  return {
    title: `${newsItem.title} | Mimansa Law`,
    description: newsItem.description,
  };
}

export default function NewsDetail() {
  return (
    <div className="mt-12">
      <NewsDetailPage />
    </div>
  );
}

// Generate static paths for all news items
export async function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.slug,
  }));
}
