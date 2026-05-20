"use client";

import React, { useState, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import Heading from "./Heading";
import { ChevronLeft, ChevronRight } from "lucide-react";

const advantages = [
  {
    id: "01",
    title: "Revenue & Business Control",
    bullets: [
      "You stay in charge of the client - and the revenue",
      "You own the client relationship from pitch to payment",
      "Transparent pricing with predictable project economics",
      "Structured monthly billing with reliable payment cycles",
      "Increase deal size by offering broader capabilities",
      "White-label delivery ensures you lead every engagement",
    ],
  },
  {
    id: "02",
    title: "Reliable Delivery & No Stress",
    bullets: [
      "Deliver with confidence - without building large internal teams",
      "You bring the client; we take full responsibility for delivery",
      "Clearly defined SLAs across quality, timelines and scope",
      "Delivery accountability stays on us, reducing your risk exposure",
      "No need to manage hiring, onboarding or team operations",
      "Focus on closing deals - we ensure execution",
    ],
  },
  {
    id: "03",
    title: "Enablement & Ongoing Support",
    bullets: [
      "Everything you need to grow - beyond just delivery",
      "Dedicated partner success manager to guide your growth",
      "Regular check-ins to track project and business performance",
      "Ready-to-use sales materials, proposals and playbooks",
      "Continuous training on new solutions and capabilities",
      "Access to a strong partner ecosystem for collaboration",
    ],
  },
  {
    id: "04",
    title: "Growth & Expansion Scopes",
    bullets: [
      "Scale faster with the right support and direction",
      "Real-time project and revenue insights in one portal",
      "Co-marketing opportunities: case studies, events and campaigns",
      "Support to generate leads within your target specialization",
      "Strategic guidance to expand into new industries and services",
      "Long-term support, including positioning for partnerships or exit",
    ],
  },
];

export default function PartnerAdvantage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % advantages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + advantages.length) % advantages.length,
    );
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    setDragStart(clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const offset = clientX - dragStart;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 50;
    if (dragOffset > threshold && currentIndex > 0) {
      prevSlide();
    } else if (
      dragOffset < -threshold &&
      currentIndex < advantages.length - 1
    ) {
      nextSlide();
    }
    setDragOffset(0);
  };

  return (
    <section className="bg-white py-10 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-0">
        {/* Header */}
        <div className="mb-6 md:mb-10">
          <ScrollReveal>
            <span className="text-brand-bright-orange text-lg md:text-md tracking-widest mb-2 md:mb-4 block">
              What You Get
            </span>
            <Heading level={2}> The full partner advantage</Heading>
          </ScrollReveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side: 2x2 Grid */}
          <div className="lg:w-2/3">
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="bg-gray-100 p-8 md:p-8 border border-gray-100 h-full flex flex-col transition-all duration-300 hover:shadow rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-brand-bright-orange font-bold text-xl leading-none">
                        {item.id}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-brand-black">
                        {item.title}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {item.bullets.map((bullet, i) => (
                        <div
                          key={i}
                          className="flex gap-3 text-gray-800 text-sm leading-relaxed items-start"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-bright-orange mt-2.5 shrink-0" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div
              ref={carouselRef}
              className={`md:hidden relative overflow-hidden select-none ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              <div
                className="flex"
                style={{
                  transform: `translateX(calc(-${currentIndex * 80}% + ${dragOffset}px))`,
                  transition: isDragging
                    ? "none"
                    : "transform 0.3s ease-in-out",
                }}
              >
                {advantages.map((item, idx) => (
                  <div key={idx} className="flex-shrink-0 w-4/5 mr-4">
                    <div className="bg-gray-100 p-4 border border-gray-100 h-full flex flex-col rounded-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-brand-bright-orange font-bold text-lg leading-none">
                          {item.id}
                        </span>
                        <h3 className="text-lg font-bold text-brand-black">
                          {item.title}
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {item.bullets.map((bullet, i) => (
                          <div
                            key={i}
                            className="flex gap-2 text-gray-800 text-sm leading-relaxed items-start"
                          >
                            <div className="w-2 h-2 rounded-full bg-brand-bright-orange mt-2.5 shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              {currentIndex > 0 && (
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-brand-bright-orange backdrop-blur-sm p-2 rounded-full shadow-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
              )}
              {currentIndex < advantages.length - 1 && (
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-brand-bright-orange backdrop-blur-sm p-2 rounded-full shadow-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              )}
            </div>
          </div>

          {/* Right Side: Math Card */}
          <div className="lg:w-1/3">
            <ScrollReveal delay={0.4} className="h-full">
              <div className="bg-brand-black h-full p-6 md:p-12 flex flex-col justify-between overflow-hidden group border border-white/5">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-bright-orange/10 rounded-full blur-[80px] pointer-events-none" />

                <div className=" px-8">
                  <div className="items-center gap-4 mb-12 pb-2 md:pb-6 border-b border-white/10">
                    <span className="text-brand-bright-orange text-sm font-medium uppercase tracking-widest">
                      The Business Impact
                    </span>
                    <p className="text-white font-medium mt-2 text-2xl">
                      Zero Hire Cost Real Margin
                    </p>
                  </div>

                  <div className="space-y-14">
                    <h4 className="text-white text-xl md:text-3xl font-medium tracking-tight">
                      Turn every project into a{" "}
                      <span className="text-brand-bright-orange text-4xl">
                        scalable growth opportunity
                      </span>{" "}
                      without increasing operational overhead
                    </h4>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-5">
                    {[
                      "NO HIRING COST",
                      "NO COMPLEXITY",
                      "NO RAMP UP TIME",
                      "NO BENCH RISK",
                    ].map((tag, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 border border-white rounded-full text-[10px] font-bold tracking-widest text-white uppercase"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
