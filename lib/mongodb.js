import { generateNewsSlug } from "@/lib/slugify";

const NEWS_API_URL = process.env.NEXT_PUBLIC_NEWS_API || "https://betopiagroup-dashboard.vercel.app/api/news-db/";

export async function getNews(limitParam = "all") {
  try {
    const response = await fetch(NEWS_API_URL, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.statusText}`);
    }

    const json = await response.json();
    if (!json.success || !Array.isArray(json.data)) {
      return [];
    }

    const news = json.data;

    // Sort by parsing the date string (e.g. "Jan 10, 2026") — most recent first
    const sorted = news.sort((a, b) => {
      const dateA = new Date(a.date || 0);
      const dateB = new Date(b.date || 0);
      return dateB - dateA;
    });

    // Apply limit
    const limited =
      limitParam === "all"
        ? sorted
        : sorted.slice(0, parseInt(limitParam) || 6);

    return limited;
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return [];
  }
}

export async function getNewsBySlug(slug) {
  try {
    const decodedSlug = decodeURIComponent(slug);
    const news = await getNews("all");

    const newsItem = news.find((item) => {
      const gSlug = generateNewsSlug(item.title);
      return gSlug === decodedSlug;
    });

    return newsItem || null;
  } catch (error) {
    console.error("Failed to fetch news item:", error);
    return null;
  }
}
