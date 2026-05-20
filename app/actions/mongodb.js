"use server";

import { getNews, getNewsBySlug } from "@/lib/mongodb";

export async function getNewsAction(limit = 6) {
  return await getNews(limit);
}

export async function getNewsBySlugAction(slug) {
  return await getNewsBySlug(slug);
}
