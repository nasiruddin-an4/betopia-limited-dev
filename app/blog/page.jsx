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

function getAuthorAvatar(post) {
  if (post.authorAvatar && post.authorAvatar.startsWith("http"))
    return post.authorAvatar;
  if (post.authorImage && post.authorImage.startsWith("http"))
    return post.authorImage;
  if (post.authorAvatar) return post.authorAvatar;
  return "/blog/blog1.png";
}

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 9;

  const categories = [
    "All",
    "Podcast",
    "Magazine",
    "News",
    "Television",
    "Print",
    "Online",
  ];

  // Fallback posts just in case db is empty or error
  const fallbackPosts = [
    {
      _id: "1",
      title:
        "How to build processes and systems that create a data-driven culture.",
      summary:
        "Explore the fundamental systems and behavioral shifts required to embed data-driven decision making across your enterprise.",
      date: "Sep 6, 2025",
      author: "John Smith",
      authorAvatar: "/blog/blog1.png",
      image: "/blog/blog1.png",
      category: "News",
      slug: "#",
    },
    {
      _id: "2",
      title: "Creating a Data-Driven Organization: Systems, Processes.",
      summary:
        "A deep dive into aligning corporate strategy with real-time analytics to foster continuous business agility.",
      date: "Sep 6, 2025",
      author: "Evelyn Parker",
      authorAvatar: "/blog/blog2.png",
      image: "/blog/blog2.png",
      category: "Magazine",
      slug: "#",
    },
    {
      _id: "3",
      title: "Building a Culture Where Data Drives Every Decision.",
      summary:
        "Understand the cultural mechanics behind successful digital transformations and how leadership can pioneer data literacy.",
      date: "Sep 6, 2025",
      author: "Lucas Morgan",
      authorAvatar: "/blog/blog3.png",
      image: "/blog/blog3.png",
      category: "Podcast",
      slug: "#",
    },
  ];

  useEffect(() => {
    async function fetchAllBlogPosts() {
      try {
        const data = await getNewsAction("all");
        if (Array.isArray(data) && data.length > 0) {
          setPosts(data);
        } else {
          setPosts(fallbackPosts);
        }
      } catch (err) {
        console.error("Blog fetch error:", err);
        setPosts(fallbackPosts);
      } finally {
        setLoading(false);
      }
    }
    fetchAllBlogPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    if (activeFilter === "All") return true;
    if (!post.category) return false;

    const postCat = post.category.trim().toLowerCase();
    const filter = activeFilter.trim().toLowerCase();

    return postCat === filter || postCat.includes(filter);
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#04060e] pt-36 pb-20 md:pt-44 md:pb-14 overflow-hidden">
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
              News & Insights
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Explore deep insights, practical guides and expert perspectives on
              AI, digital transformation and modern enterprise strategy.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="bg-gray-50 py-16 md:py-24 min-h-[50vh]">
        <div className="container mx-auto px-4 md:px-16">

          {/* Filter Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Latest Updates</h2>
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveFilter(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === cat
                    ? "bg-black text-white border border-black"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-4/3 bg-gray-200 rounded-2xl mb-5" />
                  <div className="h-3 bg-gray-200 rounded w-1/3 mb-3" />
                  <div className="h-5 bg-gray-200 rounded w-full mb-2" />
                  <div className="h-5 bg-gray-200 rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">
                No blog posts found for this category.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {paginatedPosts.map((post, index) => (
                  <ScrollReveal
                    key={post._id || post.id || index}
                    delay={0.1 + (index % 9) * 0.08}
                  >
                    <Link
                      href={post.slug || `/news/${generateNewsSlug(post.title)}`}
                      className="group block h-full"
                    >
                      <article className="transition-all duration-500 h-full flex flex-col rounded-2xl overflow-hidden hover:-translate-y-2">
                        {/* Image */}
                        <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-gray-100 border border-gray-100">
                          <Image
                            src={getImageUrl(post)}
                            alt={post.title || "Blog Post"}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          {post.category && (
                            <span className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wider text-gray-900 bg-white px-3 py-1 rounded-full shadow-sm z-10">
                              {post.category}
                            </span>
                          )}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-0" />
                        </div>

                        {/* Content */}
                        <div className="pt-6 pb-6 flex flex-col flex-1 px-1">
                          {/* Meta row */}
                          <div className="flex items-center gap-4 mb-2">
                            <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium">
                              <Calendar size={14} strokeWidth={1.5} />
                              <span>
                                {formatDate(
                                  post.date || post.createdAt || post.publishedAt,
                                )}
                              </span>
                            </div>
                            {(post.author || post.authorName) && (
                              <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                                <div className="w-6 h-6 rounded-full overflow-hidden relative ring-2 ring-gray-100">
                                  <Image
                                    src={getAuthorAvatar(post)}
                                    alt={
                                      post.author || post.authorName || "Author"
                                    }
                                    fill
                                    className="object-cover"
                                    sizes="24px"
                                  />
                                </div>
                                <span>{post.author || post.authorName}</span>
                              </div>
                            )}
                          </div>

                          {/* Title */}
                          <h3 className="text-gray-800 text-xl font-semibold leading-snug group-hover:text-brand-bright-orange transition-colors duration-300 flex-1 line-clamp-2">
                            {post.title}
                          </h3>

                          {/* Summary */}
                          {post.summary && (
                            <p className="text-gray-500 text-md mt-2 line-clamp-3 leading-relaxed">
                              {post.summary}
                            </p>
                          )}

                          {/* Read more */}
                          <div className="mt-5 flex items-center gap-2 text-[15px] font-semibold text-brand-bright-orange opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-400">
                            Read Full Article
                            <ArrowRight
                              size={16}
                              className="transition-transform duration-300"
                            />
                          </div>
                        </div>
                      </article>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-16">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-brand-bright-orange hover:text-brand-bright-orange disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-gray-500 transition-colors"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentPage(idx + 1)}
                        className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition-colors ${currentPage === idx + 1
                          ? "bg-brand-bright-orange text-white"
                          : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                          }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-brand-bright-orange hover:text-brand-bright-orange disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-gray-500 transition-colors"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
