"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Calendar,
  ArrowLeft,
  ExternalLink,
  Share2,
  ArrowRight,
  Newspaper,
} from "lucide-react";
import ScrollReveal from "../../components/ScrollReveal";
import { generateNewsSlug } from "@/lib/slugify";
import { getNewsAction, getNewsBySlugAction } from "@/app/actions/mongodb";


function formatDate(dateStr) {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function formatShortDate(dateStr) {
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
  if (post.image) return post.image;
  return "/blog/blog1.png";
}

export default function NewsDetailPage() {
  const { slug } = useParams();
  const [news, setNews] = useState(null);
  const [recentNews, setRecentNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await getNewsBySlugAction(slug);
        if (!data) throw new Error("Not found");
        setNews(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    if (slug) fetchNews();
  }, [slug]);

  useEffect(() => {
    async function fetchRecent() {
      try {
        const data = await getNewsAction(5);
        if (Array.isArray(data)) {
          setRecentNews(
            data.filter(
              (item) => generateNewsSlug(item.title) !== decodeURIComponent(slug)
            )
          );
        }
      } catch {
        // silently fail
      }
    }
    fetchRecent();
  }, [slug]);

  if (loading) {
    return (
      <section className="bg-white min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-4 max-w-7xl">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-24 mb-8" />
            <div className="h-10 bg-gray-200 rounded w-3/4 mb-4" />
            <div className="h-10 bg-gray-200 rounded w-1/2 mb-8" />
            <div className="aspect-video bg-gray-200 rounded-2xl mb-10" />
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !news) {
    return (
      <section className="bg-white min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-4 max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            News Not Found
          </h1>
          <p className="text-gray-500 text-lg mb-8">
            The news article you&apos;re looking for doesn&apos;t exist or has
            been removed.
          </p>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-brand-bright-orange font-medium hover:underline"
          >
            <ArrowLeft size={16} />
            Back to News
          </Link>
        </div>
      </section>
    );
  }

  const imageUrl = getImageUrl(news);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black pt-36 pb-14 md:pt-44 md:pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-bright-orange/5 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-4 max-w-7xl relative z-10">
          <ScrollReveal>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-bright-orange transition-colors text-sm font-medium mb-4 group"
            >
              <ArrowLeft
                size={15}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to News
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl">
              {news.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400">
              {news.date && (
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} strokeWidth={1.5} />
                  <span>{formatDate(news.date)}</span>
                </div>
              )}
              {news.category && (
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-brand-bright-orange border border-orange-500/20 bg-orange-500/10">
                  {news.category}
                </span>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left: Main Article */}
            <div className="lg:col-span-2">
              {/* Hero Image */}
              <ScrollReveal delay={0.2}>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 bg-gray-100">
                  <Image
                    src={imageUrl}
                    alt={news.title || "News"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                  />
                </div>
              </ScrollReveal>

              {/* Summary / Content */}
              <ScrollReveal delay={0.25}>
                <div className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  {news.summary && (
                    <p className="whitespace-pre-line">{news.summary}</p>
                  )}
                </div>
              </ScrollReveal>

              {/* External Link Button */}
              {news.externalLink && (
                <ScrollReveal delay={0.3}>
                  <div className="mt-10">
                    <a
                      href={news.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 bg-brand-bright-orange text-white font-semibold text-[15px] rounded-full px-8 py-4 hover:bg-orange-400 transition-colors duration-300 shadow-lg shadow-orange-500/20"
                    >
                      Read Original Article
                      <ExternalLink
                        size={16}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                      />
                    </a>
                  </div>
                </ScrollReveal>
              )}

              {/* Footer Actions */}
              <ScrollReveal delay={0.35}>
                <div className="mt-14 pt-8 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href="/news"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-bright-orange transition-colors text-sm font-medium group"
                  >
                    <ArrowLeft
                      size={15}
                      className="group-hover:-translate-x-1 transition-transform"
                    />
                    Back to News
                  </Link>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: news.title,
                          url: window.location.href,
                        });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                      }
                    }}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-bright-orange transition-colors text-sm font-medium"
                  >
                    <Share2 size={15} />
                    Share
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                {/* Recent News */}
                <ScrollReveal delay={0.3}>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="flex items-center gap-2 text-base font-bold text-gray-900 mb-5">
                      <Newspaper size={18} />
                      Recent News
                    </h3>
                    <div className="space-y-4">
                      {recentNews.slice(0, 4).map((item) => (
                        <Link
                          key={item._id}
                          href={`/news/${generateNewsSlug(item.title)}`}
                          className="group flex gap-3 items-start"
                        >
                          <div className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0 bg-gray-200">
                            <Image
                              src={getImageUrl(item)}
                              alt={item.title || "News"}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              sizes="80px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2 group-hover:text-brand-bright-orange transition-colors">
                              {item.title}
                            </h4>
                            <span className="text-[11px] text-gray-400 mt-1 block">
                              {formatShortDate(item.date)}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/news"
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-brand-bright-orange mt-5 hover:underline"
                    >
                      View All News
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </ScrollReveal>

                {/* Share Card */}
                <ScrollReveal delay={0.35}>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-base font-bold text-gray-900 mb-3">
                      Share This Article
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">
                      Found this interesting? Share it with your network.
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          window.open(
                            `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(news.title)}`,
                            "_blank"
                          );
                        }}
                        className="flex-1 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
                      >
                        𝕏 Post
                      </button>
                      <button
                        onClick={() => {
                          window.open(
                            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                            "_blank"
                          );
                        }}
                        className="flex-1 py-2.5 rounded-xl bg-[#0A66C2] text-white text-sm font-medium hover:bg-[#004182] transition-colors"
                      >
                        LinkedIn
                      </button>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href);
                        }}
                        className="flex-1 py-2.5 rounded-xl bg-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-300 transition-colors"
                      >
                        Copy Link
                      </button>
                    </div>
                  </div>
                </ScrollReveal>

                {/* CTA Card */}
                <ScrollReveal delay={0.4}>
                  <div className="bg-linear-to-br from-brand-bright-orange to-orange-500 rounded-2xl p-6 text-white">
                    <h3 className="text-lg font-bold mb-2">
                      Partner with Betopia
                    </h3>
                    <p className="text-white/80 text-sm mb-5 leading-relaxed">
                      Join our global AI partnership network and build the
                      future together.
                    </p>
                    <Link
                      href="/partners"
                      className="group inline-flex items-center gap-2 bg-white text-brand-bright-orange font-semibold text-sm rounded-full px-6 py-2.5 hover:bg-orange-50 transition-colors"
                    >
                      Get Started
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
