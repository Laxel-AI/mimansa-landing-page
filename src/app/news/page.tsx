// app/news/page.tsx
import NewsPage from "@/components/newsPage";

export const metadata = {
  title: "News & Insights | Mimansa Law",
  description:
    "Latest legal news, insights, and updates from the team at Mimansa Law Firm.",
};

export default function News() {
  return (
    <div className="mt-12">
      <NewsPage />
    </div>
  );
}
