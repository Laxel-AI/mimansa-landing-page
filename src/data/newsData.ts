// data/newsData.ts
import { NewsItem } from "~/types/news";

export const newsItems: NewsItem[] = [
  {
    id: 2,
    slug: "global-regulation-analysis",
    type: "MIMANSA RESOURCES",
    title: "Global Impact Analysis: Navigating Cross-Border Regulation",
    description:
      "Key strategies for multinational corporations facing evolving regulatory challenges.",
    content: `
        <p>We are proud to share that our Managing Partner, Krishnamohan Menon Adv, represented Mimansa Law Offices at the National Symposium on Consumer Protection organized by Dr. Babasaheb Ambedkar College of Law, RTMNU.</p>
        <p>The symposium, themed ‘A Just Transition to Sustainable Lifestyles’, focused on sustainable consumerism, accessibility of consumer goods, AI in consumer rights, e-commerce challenges, and ESG compliance.</p>
        <p>Krishna joined an esteemed panel of legal experts, academicians, and policymakers to discuss the evolving landscape of consumer protection laws and how we can foster ethical business practices while ensuring accessibility and fairness for consumers.</p>
        <p>At Mimansa Law Offices, we remain committed to shaping progressive legal frameworks that protect consumer interests and promote sustainability.</p>
        <p>#ConsumerProtection #LegalInnovation #MimansaLawOffices #ConsumerRights #Sustainability #LawAndTechnology #ESG #LegalLeadership</p>
      `,
    image:
      "/news/1.jpg",
    date: "2025-03-01",
    author: "International Regulatory Team",
    category: "Resources",
    tags: [
      "Consumer Protection",
      "Event",
      "Sustainability",
      "ESG",
      "Legal Innovation",
      "Mimansa Law Offices",
      "Consumer Rights",
      "Law And Technology",
      "Legal Leadership"
    ],
  }
 
];

// Filter featured news items
export const featuredNews = newsItems.filter((item) => item.featured);

// Get recent news (sorted by date)
export const recentNews = [...newsItems].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

// Get news by category
export const getNewsByCategory = (category: string): NewsItem[] => {
  return newsItems.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );
};

// Get news by tag
export const getNewsByTag = (tag: string): NewsItem[] => {
  return newsItems.filter((item) =>
    item.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
};

// Get related news (by matching tags, excluding the current article)
export const getRelatedNews = (
  currentId: number,
  limit: number = 3
): NewsItem[] => {
  const currentItem = newsItems.find((item) => item.id === currentId);

  if (!currentItem) return [];

  const relatedItems = newsItems
    .filter((item) => item.id !== currentId)
    .map((item) => {
      // Count matching tags
      const matchingTags = item.tags.filter((tag) =>
        currentItem.tags.includes(tag)
      ).length;

      // Return item with match score
      return { ...item, matchScore: matchingTags };
    })
    .filter((item) => item.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, limit);

  return relatedItems;
};
