"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import RollingButton from "./RollingButton";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";



export default function ProductsSection({ title, description, productsCards, bgImage }) {
  const [activeTab, setActiveTab] = useState("Products");



  // Determine the raw source array (API array or mock data)
  const rawData = Array.isArray(productsCards) ? productsCards : [];

  // Resilient normalization of product card fields
  const normalizedProducts = rawData.map((item, idx) => {
    const id = item.id || idx + 1;
    const itemTitle = item.title || item.name || "Real Business Product Solution";

    // Core pillar categorization
    const product = item.product || "";
    const service = item.service || "";
    const solution = item.solution || "";

    // Determine category dynamically (pluralized & case-insensitive API compatibility)
    let category = item.category || "";
    if (!category) {
      if (item.tag && item.tag.toLowerCase().includes("service")) category = "Services";
      else if (item.tag && item.tag.toLowerCase().includes("solution")) category = "Solutions";
      else if (item.tag && item.tag.toLowerCase().includes("product")) category = "Products";
      else {
        category = idx === 0 ? "Products" : idx === 1 ? "Services" : idx === 2 ? "Solutions" : "Products";
      }
    } else {
      // Normalize raw category name to pluralized standardized labels
      const catLower = category.toLowerCase();
      if (catLower.includes("product")) category = "Products";
      else if (catLower.includes("service")) category = "Services";
      else if (catLower.includes("solution")) category = "Solutions";
    }

    const image = item.image || item.icon || "/caseStudyImg/RE/cardcoverOverview-image.png";
    const tag = item.tag || item.industry || item.microHeadline || category;

    const colors = [
      { dot: "bg-emerald-500", bg: "from-emerald-100/40 to-emerald-50/20" },
      { dot: "bg-amber-500", bg: "from-amber-100/40 to-amber-50/20" },
      { dot: "bg-rose-500", bg: "from-rose-100/40 to-rose-50/20" },
      { dot: "bg-blue-500", bg: "from-blue-100/40 to-blue-50/20" },
    ];
    const colorPair = colors[idx % colors.length];

    // Helper to dynamically calculate dynamic details page routes based on category and slug
    const getDetailsLink = (prodItem) => {
      // 1. Prioritize explicit non-standard relative links already provided by API
      if (prodItem.href && prodItem.href !== "#" && !prodItem.href.startsWith("http")) return prodItem.href;
      if (prodItem.link && prodItem.link !== "#" && !prodItem.link.startsWith("http")) return prodItem.link;
      if (prodItem.url && prodItem.url !== "#" && !prodItem.url.startsWith("http")) return prodItem.url;

      // 2. Generate slug-friendly identifier from either product, title or name
      const linkTitle = prodItem.product || prodItem.title || prodItem.name || "";
      const cleanSlug = String(linkTitle)
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");

      if (category === "Products") {
        let finalSlug = cleanSlug;
        if (cleanSlug.includes("hrm") || cleanSlug.includes("resource")) finalSlug = "human-resource-management";
        else if (cleanSlug.includes("erp") || cleanSlug.includes("brain")) finalSlug = "betopia-erp";
        else if (cleanSlug.includes("voting") || cleanSlug.includes("vote") || cleanSlug.includes("count")) finalSlug = "count-trust";
        else if (cleanSlug.includes("agentic") || cleanSlug.includes("agent")) finalSlug = "agentic-ai";
        else if (cleanSlug.includes("talkora") || cleanSlug.includes("voice")) finalSlug = "talkora-ai";
        else if (cleanSlug.includes("care") || cleanSlug.includes("hospital")) finalSlug = "smart-hospital";
        else if (cleanSlug.includes("class") || cleanSlug.includes("school")) finalSlug = "eduvas-school";
        else if (cleanSlug.includes("edu") || cleanSlug.includes("university")) finalSlug = "eduvas-university";
        else if (cleanSlug.includes("lms")) finalSlug = "betopia-lms";
        else if (cleanSlug.includes("gate")) finalSlug = "virtual-gate";
        else if (cleanSlug.includes("abroad")) finalSlug = "study-abroad";

        return `/products/${finalSlug}`;
      }

      if (category === "Services") {
        let finalSlug = cleanSlug;
        if (cleanSlug.includes("ai") || cleanSlug.includes("data") || cleanSlug.includes("analytics")) finalSlug = "ai-analytics";
        else if (cleanSlug.includes("cloud") || cleanSlug.includes("infrastructure") || cleanSlug.includes("modern")) finalSlug = "cloud-modernization";
        else if (cleanSlug.includes("cyber") || cleanSlug.includes("security")) finalSlug = "cybersecurity";
        else if (cleanSlug.includes("managed")) finalSlug = "managed-services";
        else if (cleanSlug.includes("software") || cleanSlug.includes("development") || cleanSlug.includes("code")) finalSlug = "software-development";
        else if (cleanSlug.includes("augmentation") || cleanSlug.includes("team") || cleanSlug.includes("resource")) finalSlug = "team-augmentation";
        else finalSlug = "software-development";

        return `/services/${finalSlug}`;
      }

      if (category === "Solutions") {
        let finalSlug = cleanSlug;
        if (cleanSlug.includes("ai") && !cleanSlug.includes("security")) finalSlug = "ai";
        else if (cleanSlug.includes("ai") && cleanSlug.includes("security")) finalSlug = "ai-security";
        else if (cleanSlug.includes("cyber") || cleanSlug.includes("security")) finalSlug = "cyber-security";
        else if (cleanSlug.includes("devops") || cleanSlug.includes("agile")) finalSlug = "devops";
        else if (cleanSlug.includes("cloud") || cleanSlug.includes("infrastructure")) finalSlug = "cloud-infrastructure";
        else if (cleanSlug.includes("network") && cleanSlug.includes("security")) finalSlug = "network-security";
        else if (cleanSlug.includes("network")) finalSlug = "enterprise-networking";
        else if (cleanSlug.includes("app") && cleanSlug.includes("security")) finalSlug = "application-security";
        else if (cleanSlug.includes("app") || cleanSlug.includes("digital")) finalSlug = "digital-app-innovation";
        else if (cleanSlug.includes("data") && cleanSlug.includes("security")) finalSlug = "data-security";
        else if (cleanSlug.includes("data") || cleanSlug.includes("analytics")) finalSlug = "database-business-analytics";
        else finalSlug = "ai";

        return `/solutions/${finalSlug}`;
      }

      return `/case-studies/${id}`;
    };

    const href = getDetailsLink(item);

    return {
      id,
      title: itemTitle,
      product,
      service,
      solution,
      category,
      image,
      tag,
      dotColor: colorPair.dot,
      bgClass: colorPair.bg,
      href,
    };
  });

  // Dynamic tab filtering logic:
  // - "All" tab: Show exactly 1 Products card, 1 Services card, and 1 Solutions card.
  // - Category tabs ("Products", "Services", "Solutions"): Show all cards belonging to that category.
  let filteredProducts = [];
  if (activeTab === "All") {
    const productCard = normalizedProducts.find((p) => p.category === "Products");
    const serviceCard = normalizedProducts.find((p) => p.category === "Services");
    const solutionCard = normalizedProducts.find((p) => p.category === "Solutions");

    if (productCard) filteredProducts.push(productCard);
    if (serviceCard) filteredProducts.push(serviceCard);
    if (solutionCard) filteredProducts.push(solutionCard);

    // Safety check fallback
    if (filteredProducts.length === 0) {
      filteredProducts = normalizedProducts.slice(0, 3);
    }
  } else {
    filteredProducts = normalizedProducts.filter((productItem) => productItem.category === activeTab);
  }

  return (
    <section className="bg-white py-10 md:py-20 overflow-hidden relative w-full">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 2xl:px-0">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 md:gap-6 mb-6 md:mb-12">
          <div className="max-w-xl">
            <ScrollReveal duration={0.7} delay={0.1}>
              <h2 className="text-2xl md:text-4xl text-center md:text-left font-semibold text-gray-700 leading-[1.1]">
                Products, Services & Solutions built for real business
              </h2>
            </ScrollReveal>
          </div>

          <div className="max-w-lg text-center lg:text-right flex flex-col lg:items-end gap-6">
            <ScrollReveal duration={0.7} delay={0.2}>
              <p className="text-gray-500 text-base leading-relaxed lg:text-left">
                We don't build generic software. Every product we make comes from solving a real problem inside Betopia or for a client. If it doesn't exist yet, we'll build it with you.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Filter Tabs & Navigation Controls */}
        <div className="w-full relative z-30 flex items-center justify-between pb-4 mb-12 border-b border-zinc-200">
          <div className="flex items-center gap-6 scrollbar-none">
            <span className="text-sm font-bold text-zinc-400 tracking-wider uppercase pr-6 border-r border-zinc-200 hidden md:inline-block">
              Filter
            </span>
            <div className="flex gap-0 md:gap-4">
              {["Products", "Services", "Solutions"].map((tab) => {
                const isActive = activeTab === tab;

                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm md:text-base font-semibold px-5 py-2 rounded-full transition-all duration-200 cursor-pointer ${isActive
                      ? "text-brand-bright-orange bg-orange-500/10"
                      : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                      }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Premium Swiper Navigation Controls */}
          <div className="flex items-center gap-3">
            <button className="swiper-prev-btn w-8 h-8 md:w-10 md:h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-brand-bright-orange hover:border-brand-bright-orange transition-all duration-200 cursor-pointer bg-white hover:shadow-md disabled:opacity-40 disabled:pointer-events-none">
              <ChevronLeft size={18} />
            </button>
            <button className="swiper-next-btn w-8 h-8 md:w-10 md:h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-brand-bright-orange hover:border-brand-bright-orange transition-all duration-200 cursor-pointer bg-white hover:shadow-md disabled:opacity-40 disabled:pointer-events-none">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Dynamic Swiper Carousel Showcase */}
        <div className="relative z-10">
          {filteredProducts.length > 0 ? (
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".swiper-prev-btn",
                nextEl: ".swiper-next-btn",
              }}
              spaceBetween={32}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                }
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              observer={true}
              observeParents={true}
              className="products-swiper !pb-2"
            >
              {filteredProducts.map((product) => (
                <SwiperSlide key={product.id} className="h-auto">
                  <div className="w-full h-full group cursor-pointer pb-2">
                    <Link href={product.href} className="block">
                      {/* Mockup Showcase Wrapper */}
                      <div className={`relative w-full h-[360px] md:h-[400px] rounded-3xl bg-gradient-to-br ${product.bgClass} border border-zinc-100 overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1`}>
                        {/* Image */}
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          sizes="(max-width: 768px) 290px, 320px"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />

                        {/* Pill Badge */}
                        <div className="absolute top-5 right-5 z-20">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-800 bg-white/95 border border-zinc-200/50 backdrop-blur rounded-full px-3 py-1 shadow-sm">
                            <span className={`w-1.5 h-1.5 rounded-full ${product.dotColor}`} />
                            {product.tag}
                          </span>
                        </div>
                      </div>

                      {/* Metadata Content */}
                      <div className="mt-5 flex flex-col gap-3">
                        <h3 className="text-base md:text-lg font-semibold text-zinc-900 group-hover:text-brand-bright-orange transition-colors duration-150 leading-snug line-clamp-2">
                          {product.title}
                        </h3>

                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="w-full text-center py-20 text-zinc-400 text-sm bg-zinc-50 rounded-3xl border border-dashed border-zinc-200">
              No case studies match the selected filters.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
