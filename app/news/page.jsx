"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { generateNewsSlug } from "@/lib/slugify";

import { getNewsAction } from "@/app/actions/mongodb";

function formatDate(dateStr) {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function getImageUrl(post) {
  if (post.image && post.image.startsWith("http")) return post.image;
  if (post.imageUrl && post.imageUrl.startsWith("http")) return post.imageUrl;
  if (post.thumbnail && post.thumbnail.startsWith("http"))
    return post.thumbnail;
  if (post.image) return post.image;
  return "/blog/blog1.png";
}

export default function AllNewsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAllNews() {
      try {
        const data = await getNewsAction("all");
        if (Array.isArray(data)) {
          setPosts(data);
        }
      } catch (err) {
        console.error("News fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchAllNews();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black pt-36 pb-20 md:pt-44 md:pb-14 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-bright-orange/5 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-4 relative z-10">
          <ScrollReveal>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-bright-orange transition-colors text-sm font-medium mb-4 group"
            >
              <ArrowLeft
                size={15}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Home
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-5 leading-tight">
              News & Updates
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Stay informed with the latest news, announcements and insights
              from Betopia.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="bg-white py-16 md:py-24 min-h-[50vh]">
        <div className="container mx-auto px-6 md:px-4">
          {/* Loading State */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-4/3 bg-gray-200 rounded-2xl mb-5" />
                  <div className="h-3 bg-gray-200 rounded w-1/3 mb-3" />
                  <div className="h-5 bg-gray-200 rounded w-full mb-2" />
                  <div className="h-5 bg-gray-200 rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">No news articles found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {posts.map((post, index) => (
                <ScrollReveal
                  key={post._id || index}
                  delay={0.1 + (index % 6) * 0.08}
                >
                  <Link
                    href={`/news/${generateNewsSlug(post.title)}`}
                    className="group block h-full"
                  >
                    <article className="transition-all duration-500 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-gray-100">
                        <Image
                          src={getImageUrl(post)}
                          alt={post.title || "News"}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {post.category && (
                          <span className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wider text-white bg-brand-bright-orange px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="pt-5 pb-6 flex flex-col flex-1">
                        {/* Date */}
                        <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
                          <Calendar size={13} strokeWidth={1.5} />
                          <span>{formatDate(post.date)}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-gray-900 text-lg md:text-xl font-semibold leading-snug group-hover:text-brand-bright-orange transition-colors duration-300 flex-1 line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Summary */}
                        {post.summary && (
                          <p className="text-gray-400 text-sm mt-3 line-clamp-2 leading-relaxed">
                            {post.summary}
                          </p>
                        )}

                        {/* Read more */}
                        <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-brand-bright-orange opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-400">
                          Read More
                          <ArrowRight
                            size={14}
                            className="group-hover:translate-x-1 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
