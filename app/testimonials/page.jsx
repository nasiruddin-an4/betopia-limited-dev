"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Quote,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import LogoMarquee from "../components/LogoMarquee";
import CtaSection from "../components/CtaSection";
import RollingButton from "../components/RollingButton";

/* ─── Data ─────────────────────────────────────── */
const testimonials = [
  {
    id: 1,
    name: "Ronald Vergera",
    role: "Chief Marketing Officer",
    company: "Meridian Financial",
    quote:
      "Betopia has been instrumental in delivering our digital platforms, AI-powered solutions and custom web applications. Their professionalism, quality of work, on-time delivery and clear communication truly stand out.",
    image: "/ron photo.webp",
    rating: 5,
  },
  {
    id: 2,
    name: "Stacey Michelon",
    role: "Head of Cybersecurity",
    company: "SecureNet Group",
    quote:
      "Working with Betopia was a smooth experience from start to finish. The team was responsive, understood our requirements clearly and delivered the work as promised. Communication was consistent throughout.",
    image: "/client/stacy.webp",
    rating: 5,
  },
  {
    id: 3,
    name: "Chris French",
    role: "Chief Operating Officer",
    company: "French & Partners",
    quote:
      "Betopia handled the project with professionalism and flexibility. They were quick to adapt to changes, kept everything well organized and maintained quality throughout the process.",
    image: "/client/chris.webp",
    rating: 5,
  },
  {
    id: 4,
    name: "Corinna Reibchen",
    role: "Founder",
    company: "Theclue Education Platform",
    quote:
      "What makes Betopia a great partner is the sheer scale of solutions they bring to the table. Their interaction is highly professional and the delivery is always on time. It's rare to find a partner you can trust so completely with your entire tech stack.",
    image: "/IMG_8843.jpg",
    rating: 5,
  },
];

/* ─── Video Testimonials ────────────────────────── */
const videoTestimonials = [
  {
    id: 1,
    name: "Ronald Vergera",
    role: "Chief Marketing Officer",
    company: "Meridian Financial",
    title: "How Betopia Transformed Our Digital Infrastructure",
    youtubeId: "i5q37KYtHKw",
    thumbnail: "/ron photo.webp",
  },
  {
    id: 2,
    name: "Stacey Michelon",
    role: "Head of Cybersecurity",
    company: "SecureNet Group",
    title: "Enterprise Cybersecurity Excellence with Betopia",
    youtubeId: "i5q37KYtHKw",
    thumbnail: "/client/stacy.webp",
  },
  {
    id: 3,
    name: "Chris French",
    role: "Chief Operating Officer",
    company: "French & Partners",
    title: "Seamless Project Delivery & Agile Collaboration",
    youtubeId: "i5q37KYtHKw",
    thumbnail: "/client/chris.webp",
  },
];

const stats = [
  { value: "300+", label: "Satisfied Clients" },
  { value: "45+", label: "Countries Served" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "98%", label: "Client Retention" },
];

/* ─── Featured Rotator ──────────────────────────── */
function FeaturedRotator() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (next) => {
      setDirection(next > current ? 1 : -1);
      setCurrent(next);
    },
    [current],
  );

  const prev = () =>
    go((current - 1 + testimonials.length) % testimonials.length);
  const next = () => go((current + 1) % testimonials.length);

  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[current];

  const variants = {
    enter: (d) => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d * -40 }),
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden p-8 md:p-14 min-h-[320px] flex flex-col justify-between">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-bright-orange/10 blur-[100px] pointer-events-none" />

      {/* Stars */}
      <div className="flex gap-1 mb-6 relative z-10">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className="fill-brand-bright-orange text-brand-bright-orange"
          />
        ))}
      </div>

      {/* Quote */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative z-10 flex-1"
        >
          <Quote size={40} className="text-brand-bright-orange/20 mb-4" />
          <p className="text-white text-xl md:text-2xl leading-[1.7] font-light mb-10">
            {t.quote}
          </p>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden relative shrink-0 border-2 border-brand-bright-orange/40">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <div>
              <p className="text-white font-bold text-lg">{t.name}</p>
              <p className="text-gray-400 text-sm">{t.role}</p>
              <p className="text-brand-bright-orange text-sm font-medium">
                {t.company}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="flex items-center justify-between mt-10 relative z-10">
        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => go(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === current
                  ? "w-8 h-2.5 bg-brand-bright-orange"
                  : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        {/* Arrows */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-brand-bright-orange flex items-center justify-center text-white hover:bg-brand-bright-orange/80 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── YouTube Modal ─────────────────────────────── */
function YoutubeModal({ videoId, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Client Testimonial Video"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            className="w-full h-full"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 bg-black/60 hover:bg-black rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X size={18} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Main Page ─────────────────────────────────── */
export default function TestimonialsPage() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <main className="min-h-screen flex flex-col bg-slate-900 pt-16">
      {/* ═══ HERO ═══ */}
      <section className="relative bg-slate-900 overflow-hidden py-24 md:py-32 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(247,149,73,0.15),transparent_60%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
              Trusted by Enterprises <br></br>
              <span className="bg-gradient-to-r from-brand-bright-orange to-brand-coral bg-clip-text text-transparent">
                Around the World
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Hear directly from the leaders who trusted Betopia to architect,
              build and scale the digital systems powering their next chapter.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FEATURED ROTATOR + SIDEBAR CARDS ═══ */}
      <section className="py-20 md:py-28 bg-gray-50 px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 tracking-tight mb-4">
                Voice of Our Customers
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Real words from real leaders who experienced the Betopia
                difference.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
            {/* Featured large rotator – 3 columns */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.1}>
                <FeaturedRotator />
              </ScrollReveal>
            </div>

            {/* Side compact cards – 2 columns */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {testimonials.slice(0, 2).map((t, idx) => (
                <ScrollReveal key={t.id} delay={0.2 + idx * 0.1}>
                  <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 flex-1">
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-4">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-50">
                      <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0 bg-gray-100">
                        <Image
                          src={t.image}
                          alt={t.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                      <div>
                        <p className="text-gray-800 font-bold text-sm">
                          {t.name}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {t.role} · {t.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VIDEO TESTIMONIALS ═══ */}
      <section className="py-20 md:py-28 bg-slate-900 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(247,149,73,0.08),transparent_60%)] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand-bright-orange/15 border border-brand-bright-orange/30 text-brand-bright-orange font-semibold text-sm mb-4 uppercase tracking-wider">
                  Video Testimonials
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                  Hear It Directly From Them
                </h2>
              </div>
              <p className="text-gray-400 text-base max-w-sm">
                Watch firsthand accounts from the leaders who partner with
                Betopia to drive lasting transformation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTestimonials.map((v, idx) => (
              <ScrollReveal key={v.id} delay={idx * 0.1}>
                <button
                  onClick={() => setActiveVideo(v.youtubeId)}
                  className="group relative w-full rounded-2xl overflow-hidden text-left cursor-pointer focus:outline-none"
                >
                  {/* Thumbnail */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={v.thumbnail}
                      alt={v.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-colors duration-300 group-hover:from-black/90" />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-brand-bright-orange/90 border-2 border-white/30 flex items-center justify-center shadow-xl shadow-orange-500/30 group-hover:scale-110 group-hover:bg-brand-bright-orange transition-all duration-300">
                        <PlayCircle size={30} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="bg-slate-800/80 border border-white/5 rounded-b-2xl p-5">
                    <p className="text-white font-semibold text-[16px] leading-snug mb-3 group-hover:text-brand-bright-orange transition-colors">
                      {v.title}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full overflow-hidden relative shrink-0 border border-white/20">
                        <Image
                          src={v.thumbnail}
                          alt={v.name}
                          fill
                          className="object-cover"
                          sizes="36px"
                        />
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm font-medium">
                          {v.name}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {v.role} · {v.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ALL TESTIMONIALS GRID ═══ */}
      <section className="py-20 md:py-28 bg-white px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand-bright-orange/10 border border-brand-bright-orange/20 text-brand-bright-orange font-semibold text-sm mb-4 uppercase tracking-wider">
                  Client Stories
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-tight">
                  What Our Clients Say
                </h2>
              </div>
              <p className="text-gray-500 text-base max-w-sm">
                From startups to Fortune 500 enterprises — Betopia delivers
                results that speak for themselves.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <ScrollReveal key={t.id} delay={0.1 + idx * 0.08}>
                <div className="group bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-10 hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 transition-all duration-400 flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-8 flex-1">
                    <Quote
                      size={48}
                      className="absolute -top-2 -left-2 text-brand-bright-orange/10 group-hover:text-brand-bright-orange/20 transition-colors duration-300"
                    />
                    <p className="text-gray-600 text-base md:text-lg leading-[1.85] relative z-10">
                      {t.quote}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-200">
                    <div className="w-14 h-14 rounded-full overflow-hidden relative shrink-0 border-2 border-brand-bright-orange/20">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-[17px]">
                        {t.name}
                      </p>
                      <p className="text-gray-500 text-sm mt-0.5">{t.role}</p>
                      <p className="text-brand-bright-orange text-sm font-semibold">
                        {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PARTNER LOGOS ═══ */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 mb-12 text-center">
          <ScrollReveal>
            <p className="text-gray-400 uppercase text-sm font-semibold tracking-widest mb-4">
              Trusted by
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 tracking-tight">
              Our Global Partner Ecosystem
            </h2>
          </ScrollReveal>
        </div>
        <LogoMarquee />
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-white">
        <CtaSection />
      </section>

      {/* ═══ YOUTUBE MODAL ═══ */}
      {activeVideo && (
        <YoutubeModal
          videoId={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </main>
  );
}
