"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import RollingButton from "../components/RollingButton";
import CaseStudyTestimonials from "../components/CaseStudyTestimonials";
import { caseStudies, accentColors } from "./data";
import {
  ArrowRight,
  Sparkles,
  Filter,
  ChevronDown,
  Search,
  Calendar,
  Building2,
  Globe2,
  Layers,
  Cpu,
  X,
  Play,
  ChevronRight,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════
   FILTER CATEGORIES
   ═══════════════════════════════════════════════════════════════════ */
const filterCategories = [
  {
    key: "industry",
    label: "Industry",
    icon: Building2,
    options: [...new Set(caseStudies.map((c) => c.industry))],
  },
  {
    key: "service",
    label: "Service",
    icon: Layers,
    options: [...new Set(caseStudies.map((c) => c.service))],
  },
  {
    key: "technology",
    label: "Technology",
    icon: Cpu,
    options: [...new Set(caseStudies.map((c) => c.technology))],
  },
];

/* ═══════════════════════════════════════════════════════════════════
   FILTER DROPDOWN COMPONENT
   ═══════════════════════════════════════════════════════════════════ */
function FilterDropdown({ category, activeFilters, setActiveFilters }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const Icon = category.icon;
  const activeValue = activeFilters[category.key];

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((p) => !p)}
        className={`group flex items-center gap-2 h-10 px-3 rounded-xl border text-sm font-medium transition-all duration-200 cursor-pointer ${activeValue
          ? "border-brand-bright-orange/40 bg-brand-bright-orange/10 text-brand-bright-orange"
          : "border-gray-200 bg-white text-gray-500 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50"
          }`}
      >
        <Icon className="w-3.5 h-3.5" />
        <span>{activeValue || category.label}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-300 ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50"
          >
            <button
              onClick={() => {
                setActiveFilters((prev) => ({ ...prev, [category.key]: null }));
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors cursor-pointer ${!activeValue
                ? "bg-gray-50 text-gray-900 font-semibold"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
            >
              All {category.label}
            </button>
            {category.options.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  setActiveFilters((prev) => ({
                    ...prev,
                    [category.key]: prev[category.key] === opt ? null : opt,
                  }));
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors cursor-pointer ${activeValue === opt
                  ? "bg-brand-bright-orange/10 text-brand-bright-orange font-semibold"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CASE STUDY CARD (Grid Style)
   ═══════════════════════════════════════════════════════════════════ */
function CaseStudyCard({ study, index }) {
  const accent = accentColors[study.accent] || accentColors.blue;
  const isFallback = !study.image;

  return (
    <ScrollReveal delay={0.05 * (index % 3)} yOffset={40}>
      <Link href={`/case-studies/${study.id}`} className="block h-full group">
        <div className="relative rounded-2xl overflow-hidden h-full flex flex-col bg-white border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-300/50 hover:-translate-y-1">
          {/* Image Area */}
          <div className="relative aspect-[2196/1574] w-full overflow-hidden bg-gray-100">
            {!isFallback ? (
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div
                className={`absolute inset-0 bg-gradient-to-br ${study.fallbackGradient} opacity-20`}
              />
            )}
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent" />

            {/* Fallback initials */}
            {isFallback && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-7xl font-black text-gray-200">
                  {study.initials}
                </span>
              </div>
            )}
          </div>

          {/* Content Area */}
          <div className="flex flex-col flex-1 p-6 pt-5">
            <h3 className="text-2xl font-bold text-[#0a0c16] mb-3 group-hover:text-brand-bright-orange transition-colors tracking-tight">
              {study.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
              {study.description}
            </p>

            {/* Tags */}
            <div className="mt-auto flex flex-wrap gap-2">
              {[study.industry, study.service]
                .concat(study.techStack ? [study.techStack[0]] : [])
                .filter(Boolean)
                .map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium px-3 py-1.5 rounded-full border border-gray-100 bg-gray-50 text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════ */
export default function CaseStudiesPage() {
  const [activeFilters, setActiveFilters] = useState({
    industry: null,
    service: null,
    region: null,
    technology: null,
    year: null,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const hasActiveFilters = Object.values(activeFilters).some((v) => v !== null);

  const filteredStudies = caseStudies.filter((study) => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      if (
        !study.title.toLowerCase().includes(q) &&
        !study.industry.toLowerCase().includes(q) &&
        !study.tagline.toLowerCase().includes(q)
      )
        return false;
    }
    for (const key of Object.keys(activeFilters)) {
      if (activeFilters[key] && study[key] !== activeFilters[key]) return false;
    }
    return true;
  });

  // Reset to page 1 whenever filters or search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeFilters]);

  // Compute pagination bounds
  const totalPages = Math.ceil(filteredStudies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedStudies = filteredStudies.slice(startIndex, startIndex + itemsPerPage);

  const clearFilters = () => {
    setActiveFilters({
      industry: null,
      service: null,
      region: null,
      technology: null,
      year: null,
    });
    setSearchQuery("");
  };

  return (
    <main className="bg-[#0a0c14] min-h-screen text-white">
      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 pb-20 min-h-[85vh] flex items-center overflow-hidden bg-[#0a0c16]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/case.png"
            alt="Betopia Office Background"
            fill
            priority
            className="object-cover opacity-30 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c16] via-[#0a0c16]/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl">
            {/* Breadcrumb pill */}
            <ScrollReveal yOffset={20} delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] mb-8 backdrop-blur-sm">
                <span className="text-[11px] font-bold uppercase tracking-[3px] text-gray-400">
                  Insights
                </span>
                <ChevronRight size={12} className="text-gray-500" />
                <span className="text-[11px] font-bold uppercase tracking-[3px] text-brand-bright-orange">
                  Case Studies
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white mb-8 leading-[1.05] tracking-tight">
                Discover How Betopia <br />
                <span className="text-brand-bright-orange">Delivers</span> Real
                Business Outcomes
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-12 font-light">
                Our case studies showcase how Betopia transforms complex
                business challenges into measurable outcomes through secure
                architecture, scalable systems and execution-driven delivery.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES GRID & FILTERS ── */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-[#0a0c16] mb-2">
              Case Studies
            </h2>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-col lg:flex-row items-center gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-2 flex-1">
              <div className="flex items-center gap-2 px-3 h-10 bg-white border border-gray-200 rounded-xl text-gray-500 shrink-0">
                <Filter className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">
                  Filter
                </span>
              </div>
              <div className="flex items-center gap-2">
                {filterCategories.map((cat) => (
                  <div key={cat.key} className="shrink-0">
                    <FilterDropdown
                      category={cat}
                      activeFilters={activeFilters}
                      setActiveFilters={setActiveFilters}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search case studies..."
                className="w-full h-12 pl-11 pr-4 bg-white border border-gray-200 rounded-2xl text-sm text-[#0a0c16] placeholder-gray-400 focus:outline-none focus:border-brand-bright-orange focus:bg-white transition-all shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {(hasActiveFilters || searchQuery) && (
              <button
                onClick={clearFilters}
                className="text-gray-400 hover:text-brand-bright-orange transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedStudies.map((study, idx) => (
              <CaseStudyCard key={study.id} study={study} index={idx} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className={`flex items-center justify-center w-10 h-10 rounded-xl border text-sm font-semibold transition-all duration-300 cursor-pointer ${currentPage === 1
                  ? "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed"
                  : "border-gray-200 bg-white text-gray-700 hover:border-brand-bright-orange hover:text-brand-bright-orange hover:bg-brand-bright-orange/5"
                  }`}
                aria-label="Previous Page"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${currentPage === page
                    ? "bg-brand-bright-orange border border-brand-bright-orange text-white shadow-lg shadow-brand-bright-orange/20"
                    : "border border-gray-200 bg-white text-gray-700 hover:border-brand-bright-orange hover:text-brand-bright-orange hover:bg-brand-bright-orange/5"
                    }`}
                >
                  {page}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className={`flex items-center justify-center w-10 h-10 rounded-xl border text-sm font-semibold transition-all duration-300 cursor-pointer ${currentPage === totalPages
                  ? "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed"
                  : "border-gray-200 bg-white text-gray-700 hover:border-brand-bright-orange hover:text-brand-bright-orange hover:bg-brand-bright-orange/5"
                  }`}
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {filteredStudies.length === 0 && (
            <div className="text-center py-40">
              <Search className="w-16 h-16 text-gray-200 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-[#0a0c16] mb-2">
                No Case Studies Found
              </h3>
              <p className="text-gray-500 mb-8">
                Try adjusting your filters or search query to find what you're
                looking for.
              </p>
              <button
                onClick={clearFilters}
                className="text-brand-bright-orange font-bold hover:underline cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CaseStudyTestimonials />
    </main>
  );
}
