"use client";
import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Ronald Vergera",
    role: "Chief Marketing Officer",
    company: "Meridian Financial",
    quote:
      "Betopia has been instrumental in delivering our digital platforms, AI-powered solutions and custom web applications. Their professionalism, quality of work, on-time delivery and clear communication truly stand out.",
    image: "/ron photo.webp",
  },
  {
    id: 2,
    name: "Stacey Michelon",
    role: "Head of Cybersecurity",
    company: "Stacey Michelon",
    quote:
      "Working with Betopia was a smooth experience from start to finish. The team was responsive, understood our requirements clearly and delivered the work as promised. Communication was consistent.",
    image: "/client/stacy.webp",
  },
  {
    id: 3,
    name: "Chris French",
    role: "Chief Operating Officer",
    company: "Chris French",
    quote:
      "Betopia handled the project with professionalism and flexibility. They were quick to adapt to changes, kept everything well organized and maintained quality throughout the process.",
    image: "/client/chris.webp",
  },
  {
    id: 4,
    name: "Corinna Reibchen",
    role: "Founder",
    company: "Theclue Education Platform",
    quote:
      "What makes Betopia a great partner is the sheer scale of solutions they bring to the table. Their interaction is highly professional and the delivery is always on time. It's rare to find a partner you can trust so completely with your entire tech stack.",
    image: "/IMG_8843.jpg",
  },
];

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  const featured = testimonials[activeIndex];

  return (
    <section className="bg-gray-50/50 py-10 md:py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto">
        {/* ─── Row 1: Title + Carousel Featured Testimonial ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          {/* Title Block */}
          <div className="flex flex-col justify-center px-2 lg:pr-10 py-8 lg:py-0 col-span-10 lg:col-span-5">
            <ScrollReveal>
              <h2 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-gray-600 leading-[1.1] mb-5">
                What Our Clients
                <br className="hidden lg:block" /> Say About Us
              </h2>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-md">
                We're proud to work with visionary leaders who trust Betopia to
                deliver enterprise-grade solutions across the globe.
              </p>
            </ScrollReveal>
          </div>

          {/* Carousel Featured Testimonial Card */}
          <ScrollReveal delay={0.15} className="col-span-10 md:col-span-7">
            <div className="relative group">
              <div className="bg-white p-8 md:p-10 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.06)] min-h-[380px] flex flex-col border-l-4 border-brand-bright-orange overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={featured.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col h-full grow"
                  >
                    <div className="mb-8 flex relative">
                      <Quote
                        height={48}
                        width={48}
                        className="text-orange-100/80 absolute -top-4 -left-4"
                      />
                      <p className="text-gray-600 text-base md:text-lg leading-[1.85] grow z-10">
                        {featured.quote}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-14 h-14 rounded-full overflow-hidden relative shrink-0 bg-gray-100 border-2 border-brand-bright-orange/30">
                        <Image
                          src={featured.image}
                          alt={featured.name}
                          fill
                          className="object-cover"
                          sizes="55px"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">
                          {featured.name}
                        </h4>
                        <p className="text-sm text-gray-500 mt-0.5">
                          {featured.role}
                        </p>
                        <p className="text-sm text-brand-bright-orange font-medium">
                          {featured.company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="absolute bottom-6 right-8 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:text-brand-bright-orange transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:text-brand-bright-orange transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Indicators */}
                <div className="flex gap-1.5 mt-8">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? "w-8 bg-brand-bright-orange"
                          : "w-2 bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ─── Row 2: Secondary Testimonials ─── */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={t.id} delay={0.15 + idx * 0.1}>
              <div
                className={`bg-white p-8 md:p-10 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.06)] h-full flex flex-col transition-all hover:-translate-y-1 duration-300 cursor-pointer ${
                  idx === activeIndex ? "border-b-2 border-brand-bright-orange" : ""
                }`}
                onClick={() => setActiveIndex(idx)}
              >
                <div className="mb-8 flex relative">
                  <Quote
                    height={42}
                    width={42}
                    className="text-blue-50/70 absolute -top-5 -left-5"
                  />
                  <p className="text-gray-500/90 text-md leading-[1.8] grow z-10">
                    {t.quote.length > 150 ? t.quote.substring(0, 150) + "..." : t.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0 bg-gray-100 border border-gray-200">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-gray-700">{t.name}</h4>
                    <p className="text-[12px] text-gray-500">{t.company}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div> */}
      </div>
    </section>
  );
}
