"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "../../components/ScrollReveal";
import RollingButton from "../../components/RollingButton";
import { caseStudies, accentColors } from "../data";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Calendar,
  Clock,
  Users,
  Globe2,
  Layers,
  Cpu,
  Target,
  Lightbulb,
  Quote,
  ChevronRight,
  ChevronDown,
  Building2,
  CheckCircle2,
  Zap,
  ExternalLink,
  Play,
  X,
} from "lucide-react";
import {
  RiFacebookFill,
  RiTwitterXFill,
  RiLinkedinFill,
  RiWhatsappFill,
} from "react-icons/ri";

export default function CaseStudyDetail() {
  const { id } = useParams();
  const study = caseStudies.find((s) => s.id === id);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  if (!study) {
    return (
      <main className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4 text-gray-900">
            Case Study Not Found
          </h1>
          <p className="text-gray-500 mb-8">
            The case study you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-brand-bright-orange text-white font-semibold hover:bg-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
        </div>
      </main>
    );
  }

  const colors = accentColors[study.accent] || accentColors.blue;
  const currentIndex = caseStudies.findIndex((s) => s.id === id);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < caseStudies.length - 1
      ? caseStudies[currentIndex + 1]
      : null;

  const related = caseStudies
    .filter(
      (s) =>
        s.id !== study.id &&
        (s.industry === study.industry || s.service === study.service),
    )
    .slice(0, 3);

  const sections = study.sections || [];
  const impactSection = sections.find(sec =>
    sec && sec.title && (
      sec.title.toLowerCase().includes("impact") ||
      sec.title.toLowerCase().includes("growth") ||
      sec.title.toLowerCase().includes("outcomes") ||
      sec.title.toLowerCase().includes("results") ||
      sec.title.toLowerCase().includes("launch")
    )
  );
  const otherSections = sections.filter(sec => sec !== impactSection);

  // Render video card helper to prevent duplication
  const renderVideoCard = () => (
    <div
      onClick={() => setIsVideoOpen(true)}
      className="w-full bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:border-orange-500/50 hover:shadow-orange-500/15 transition-all duration-500 cursor-pointer group text-left relative aspect-[16/10]"
    >
      {/* Thumbnail and Play Button */}
      <Image
        src={`https://img.youtube.com/vi/${study.video.youtubeId}/maxresdefault.jpg`}
        alt={study.video.title}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:border-orange-400">
          <Play size={24} fill="currentColor" className="ml-1" />
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen">
      <section className="relative min-h-[70vh] flex items-center pt-40 pb-20 md:pt-48 md:pb-28 bg-slate-950">
        {/* Background Image with Dark overlay */}
        {study.image && (
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src={study.image}
              alt={study.title}
              fill
              priority
              className="object-cover opacity-35"
            />
          </div>
        )}

        <div className="container mx-auto px-6 lg:px-4 relative z-20">
          {study.video ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Grid 1 — Text */}
              <div>
                <ScrollReveal delay={0.1}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.08]">
                    {study.title}
                  </h1>
                </ScrollReveal>
                <ScrollReveal delay={0.15}>
                  <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light">
                    {study.description}
                  </p>
                </ScrollReveal>
              </div>

              {/* Grid 2 — Video */}
              <div>
                <ScrollReveal delay={0.25}>
                  {renderVideoCard()}
                </ScrollReveal>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl">
              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                  {study.title}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light">
                  {study.description}
                </p>
              </ScrollReveal>
            </div>
          )}
        </div>
      </section>

      {/* ═══════ MAIN CONTENT — STICKY SIDEBAR + CONTENT ═══════ */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* LEFT — Sticky Sidebar */}
            <aside className="lg:w-[280px] shrink-0">
              <div className="lg:sticky lg:top-32">
                <div className="bg-gray-100 overflow-hidden rounded-2xl border border-gray-200">
                  {/* Platforms */}
                  <div className="px-6 pt-6 pb-5 border-b border-gray-200">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-1.5">
                      Platforms
                    </p>
                    <p className="text-gray-900 font-bold text-[15px]">
                      {study.technology || "Mobile / Web"}
                    </p>
                  </div>
                  {/* Technology Used */}
                  <div className="px-6 py-5 border-b border-gray-200">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-3">
                      Technology Used
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {study.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-white text-gray-700 text-xs font-semibold rounded-lg border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Industry */}
                  <div className="px-6 py-5 border-b border-gray-200">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-1.5">
                      Industry
                    </p>
                    <p className="text-gray-900 font-bold text-[15px]">
                      {study.industry}
                    </p>
                  </div>
                  {/* Tags */}
                  <div className="px-6 py-5 border-b border-gray-200">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-3">
                      Tags
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {study.techStack.slice(3, 5).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded-lg"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Category */}
                  <div className="px-6 py-5 border-b border-gray-200">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-1.5">
                      Category
                    </p>
                    <p className="text-gray-900 font-bold text-[15px]">
                      {study.service}
                    </p>
                  </div>
                  {/* Share */}
                  <div className="px-6 py-6">
                    <p className="text-gray-700 font-semibold text-sm mb-4">
                      Share this Case Study:
                    </p>
                    <div className="flex items-center gap-3">
                      {[
                        { name: "facebook", icon: RiFacebookFill, url: (u, t) => `https://facebook.com/sharer/sharer.php?u=${u}` },
                        { name: "twitter", icon: RiTwitterXFill, url: (u, t) => `https://twitter.com/intent/tweet?url=${u}&text=${t}` },
                        { name: "linkedin", icon: RiLinkedinFill, url: (u, t) => `https://linkedin.com/sharing/share-offsite/?url=${u}` },
                        { name: "whatsapp", icon: RiWhatsappFill, url: (u, t) => `https://wa.me/?text=${t}%20${u}` },
                      ].map((platform) => {
                        const Icon = platform.icon;
                        return (
                          <button
                            key={platform.name}
                            onClick={() => {
                              const url = encodeURIComponent(window.location.href);
                              const text = encodeURIComponent(`Check out: ${study.title}`);
                              window.open(
                                platform.url(url, text),
                                "_blank",
                                "noopener,noreferrer"
                              );
                            }}
                            className="w-9 h-9 rounded-full bg-white border border-gray-200 hover:bg-brand-bright-orange text-gray-700 hover:text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                            aria-label={platform.name}
                          >
                            <Icon className="w-4 h-4" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* RIGHT — Main Content */}
            <div className="flex-1 min-w-0 space-y-12">
              {/* Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Bento Card: Problems */}
                <ScrollReveal delay={0.1} className="h-full">
                  <div className="h-full bg-white rounded-2xl border border-gray-200/80 p-8 hover:shadow-lg transition-all duration-300 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        Problems
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed flex-1 text-justify">
                      {study.challenge}
                    </p>
                  </div>
                </ScrollReveal>

                {/* Bento Card: Our Solutions */}
                <ScrollReveal delay={0.2} className="h-full">
                  <div className="h-full bg-white rounded-2xl border border-gray-200/80 p-8 hover:shadow-lg transition-all duration-300 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-brand-bright-orange">
                        <Zap className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        Our Solutions
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed flex-1 text-justify">
                      {study.solution}
                    </p>
                  </div>
                </ScrollReveal>

                {/* Bento Card: Impact (Spans 2 columns) */}
                {impactSection && (
                  <ScrollReveal delay={0.3} className="md:col-span-2">
                    <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col lg:flex-row items-stretch">
                      {/* Left: Impact details */}
                      <div className="p-8  flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-brand-bright-orange">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                            {impactSection.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-justify leading-relaxed text-base md:text-lg whitespace-pre-line">
                          {impactSection.desc}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                )}

              </div>

              <div>
                {/* Right: Impact Image */}
                {impactSection.image && (
                  <div className="relative h-full bg-gray-50 w-full aspect-[16/9]">
                    <Image
                      src={impactSection.image}
                      alt={impactSection.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Other Section-wise Case Study Content */}
              {otherSections && otherSections.length > 0 && (
                <div className="space-y-12">
                  {otherSections.map((section, idx) => (
                    <ScrollReveal key={idx} delay={0.1}>
                      <div className="overflow-hidden">
                        <div className="relative w-full aspect-[16/9]">
                          <Image
                            src={section.image}
                            alt={section.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 70vw"
                            className="object-cover"
                          />
                        </div>
                        <div className="py-6">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {section.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                            {section.desc}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ RELATED ═══════ */}
      {related.length > 0 && (
        <section className="bg-white py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Related Case Studies
              </h2>
              <p className="text-gray-500 text-sm mb-10">
                Explore more projects in {study.industry}
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {related.map((r, i) => {
                const tagColors = {
                  blue: "text-blue-600 bg-blue-50/70 border-blue-100/50",
                  amber: "text-amber-600 bg-amber-50/70 border-amber-100/50",
                  emerald: "text-emerald-600 bg-emerald-50/70 border-emerald-100/50",
                  purple: "text-purple-600 bg-purple-50/70 border-purple-100/50",
                  cyan: "text-cyan-600 bg-cyan-50/70 border-cyan-100/50",
                  orange: "text-orange-600 bg-orange-50/70 border-orange-100/50",
                  red: "text-red-600 bg-red-50/70 border-red-100/50",
                  green: "text-green-600 bg-green-50/70 border-green-100/50",
                  yellow: "text-yellow-600 bg-yellow-50/70 border-yellow-100/50",
                };
                const colorClasses = tagColors[r.accent] || tagColors.blue;

                return (
                  <ScrollReveal key={r.id} delay={0.1 * i}>
                    <Link
                      href={`/case-studies/${r.id}`}
                      className="block group h-full"
                    >
                      <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(251,90,14,0.06)] hover:border-brand-bright-orange/20 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full">
                        <div className="relative h-52 overflow-hidden bg-gray-50">
                          {r.image ? (
                            <Image
                              src={r.image}
                              alt={r.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover group-hover:scale-105 transition-all duration-700"
                            />
                          ) : (
                            <div
                              className={`w-full h-full bg-gradient-to-br ${r.fallbackGradient} flex items-center justify-center`}
                            >
                              <span className="text-4xl font-black text-white/60">
                                {r.initials}
                              </span>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>
                        <div className="p-6 flex-grow flex flex-col justify-between">
                          <div>
                            <div className="mb-4">
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${colorClasses}`}>
                                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                {r.industry}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-bright-orange transition-colors duration-300 leading-tight">
                              {r.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-6">
                              {r.tagline}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 group-hover:text-brand-bright-orange transition-colors duration-300">
                              View Case Study
                            </span>
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-brand-bright-orange group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                              <ArrowUpRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ═══════ CTA — Contact Form ═══════ */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Text */}
            <ScrollReveal>
              <div className="text-left max-w-2xl lg:mx-0">
                <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 leading-[1.15] mb-6">
                  Ready to Build Your{" "}
                  <span className="text-brand-bright-orange">
                    Next Success Story
                  </span>{" "}
                  With Betopia Limited?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  From strategic consulting to full-scale digital
                  transformation, Betopia Limited is your partner in driving
                  innovation and measurable growth.
                </p>
              </div>
            </ScrollReveal>

            {/* Right — Form */}
            <ScrollReveal delay={0.15}>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Cooper"
                    className="w-full border-b-2 border-gray-300 bg-transparent py-3 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Company name
                    </label>
                    <input
                      type="text"
                      placeholder="Ex. Tesla Inc"
                      className="w-full border-b-2 border-gray-300 bg-transparent py-3 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      placeholder="You@Example.Com"
                      className="w-full border-b-2 border-gray-300 bg-transparent py-3 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Service required*
                    </label>
                    <div className="relative">
                      <select className="w-full border-b-2 border-gray-300 bg-transparent py-3 pr-8 text-gray-500 focus:border-gray-900 focus:outline-none transition-colors appearance-none cursor-pointer">
                        <option>Select Your Service</option>
                        <option>Mobile App Development</option>
                        <option>Web Development</option>
                        <option>UI/UX Design</option>
                        <option>AI & Analytics</option>
                        <option>Cloud & DevOps</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Project budget*
                    </label>
                    <div className="relative">
                      <select className="w-full border-b-2 border-gray-300 bg-transparent py-3 pr-8 text-gray-500 focus:border-gray-900 focus:outline-none transition-colors appearance-none cursor-pointer">
                        <option>Select Your Range</option>
                        <option>$5K - $10K</option>
                        <option>$10K - $25K</option>
                        <option>$25K - $50K</option>
                        <option>$50K+</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Project details*
                  </label>
                  <textarea
                    placeholder="Tell us more about your idea"
                    rows={3}
                    className="w-full border-b-2 border-gray-300 bg-transparent py-3 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white font-semibold py-4 rounded-full hover:bg-gray-800 transition-colors text-sm"
                >
                  Send inquiry
                </button>
                <p className="text-center text-gray-500 text-sm">
                  Not interested to submit the form?{" "}
                  <Link
                    href="/contact"
                    className="text-emerald-500 font-semibold hover:underline"
                  >
                    Book a Consultation
                  </Link>
                </p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ VIDEO MODAL ═══════ */}
      {study.video && isVideoOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-10 cursor-pointer"
          onClick={() => setIsVideoOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors cursor-pointer bg-white/10 p-3 rounded-full hover:bg-white/20 border-0"
            aria-label="Close Video"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Video Container */}
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${study.video.youtubeId}?autoplay=1`}
              title={study.video.title}
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </main>
  );
}
