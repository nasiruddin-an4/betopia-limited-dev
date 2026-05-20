"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { generateNewsSlug } from "@/lib/slugify";
import { getNewsAction } from "@/app/actions/mongodb";
import RollingButton from "./RollingButton";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const fallbackPosts = [
  {
    _id: "1",
    title:
      "How to build processes and systems that create a data-driven culture.",
    date: "Sep 6, 2025",
    author: "John Smith",
    authorAvatar: "/blog/blog1.png",
    image: "/blog/blog1.png",
    category: "Technology",
    slug: "#",
  },
  {
    _id: "2",
    title: "Creating a Data-Driven Organization: Systems, Processes.",
    date: "Sep 6, 2025",
    author: "Evelyn Parker",
    authorAvatar: "/blog/blog2.png",
    image: "/blog/blog2.png",
    category: "Business",
    slug: "#",
  },
  {
    _id: "3",
    title: "Building a Culture Where Data Drives Every Decision.",
    date: "Sep 6, 2025",
    author: "Lucas Morgan",
    authorAvatar: "/blog/blog3.png",
    image: "/blog/blog3.png",
    category: "Culture",
    slug: "#",
  },
];

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

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const data = await getNewsAction(3);
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

    fetchBlogPosts();

    const currentHour = new Date().getHours();
    if (currentHour < 12) setGreeting("Good Morning");
    else if (currentHour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  const getImageUrl = (post) => {
    if (post.image && post.image.startsWith("http")) return post.image;
    if (post.imageUrl && post.imageUrl.startsWith("http")) return post.imageUrl;
    if (post.thumbnail && post.thumbnail.startsWith("http"))
      return post.thumbnail;
    if (post.image) return post.image;
    return "/blog/blog1.png";
  };

  const getAuthorAvatar = (post) => {
    if (post.authorAvatar && post.authorAvatar.startsWith("http"))
      return post.authorAvatar;
    if (post.authorImage && post.authorImage.startsWith("http"))
      return post.authorImage;
    if (post.authorAvatar) return post.authorAvatar;
    return "/blog/blog1.png";
  };

  return (
    <section className="bg-gray-50 py-10 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between mb-12 items-start md:items-center gap-5">
          <div className="">
            <ScrollReveal delay={0.15}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 tracking-tight transition-opacity duration-300">
                {greeting}. Here&apos;s what&apos;s new
              </h2>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal delay={0.4}>
              <RollingButton text="See All News" href="/news" />
            </ScrollReveal>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-4/3 bg-gray-200 rounded-2xl mb-5" />
                <div className="h-3 bg-gray-200 rounded w-1/3 mb-3" />
                <div className="h-5 bg-gray-200 rounded w-full mb-2" />
                <div className="h-5 bg-gray-200 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1.1}
            loop={posts.length > 3}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
                autoplay: false,
                loop: false,
              },
            }}
            className="blog-swiper !pb-2"
          >
            {posts.map((post, index) => (
              <SwiperSlide key={post._id || post.id || index} className="h-auto flex">
                <ScrollReveal
                  className="h-full flex-1"
                  delay={0.2 + (index % 3) * 0.15}
                >
                  <Link
                    href={post.slug || `/news/${generateNewsSlug(post.title)}`}
                    className="group block h-full"
                  >
                    <article className="transition-all duration-500 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-gray-100 border-2 border-gray-100">
                        <Image
                          src={getImageUrl(post)}
                          alt={post.title || "News"}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2 "
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>

                      {/* Content */}
                      <div className="pb-6 pt-6 flex flex-col flex-1 px-1">
                        {/* Meta row */}
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center gap-1.5 text-gray-400 text-xs font-medium">
                            <Calendar size={13} strokeWidth={1.5} />
                            <span>
                              {formatDate(
                                post.date || post.createdAt || post.publishedAt,
                              )}
                            </span>
                          </div>
                          {(post.author || post.authorName) && (
                            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                              <div className="w-5 h-5 rounded-full overflow-hidden relative ring-1 ring-gray-200">
                                <Image
                                  src={getAuthorAvatar(post)}
                                  alt={post.author || post.authorName || "Author"}
                                  fill
                                  className="object-cover"
                                  sizes="20px"
                                />
                              </div>
                              <span>{post.author || post.authorName}</span>
                            </div>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-gray-700 text-lg md:text-xl lg:text-2xl font-medium leading-tight group-hover:text-brand-bright-orange transition-colors duration-300 flex-1 line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Read more link */}
                        <div className="mt-6 flex items-center gap-1.5 text-sm font-bold text-brand-bright-orange opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                          Read Full Story
                          <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </article>
                  </Link>
                </ScrollReveal>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
