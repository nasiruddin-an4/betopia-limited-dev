"use client";

import React, { useState, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import { ChevronRight, ChevronLeft, PhoneCall, Triangle } from "lucide-react";
import RollingButton from "./RollingButton";
import Heading from "./Heading";

const steps = [
  {
    number: "01",
    week: "Week 1",
    title: "Introduction Call",
    bullets: [
      "Initial discussion to understand business",
      "Explore project opportunities",
      "Discuss about the partnership model",
      "Q&A to clarify expectations & next steps",
    ],
  },
  {
    number: "02",
    week: "Week 1–2",
    title: "Partnership Agreement",
    bullets: [
      "Formalize the collaboration",
      "Standard agreement for terms & SLAs",
      "NDA and confidentiality alignment",
      "Quick and seamless onboarding setup",
      "Simple and clear documentation",
    ],
  },
  {
    number: "03",
    week: "Week 2–3",
    title: "Team Alignment",
    bullets: [
      "Introduction to your dedicated PSM",
      "Alignment with relevant business teams",
      "Access to the partner platform",
      "Tools, templates and resources to get started efficiently",
    ],
  },
  {
    number: "04",
    week: "Week 3–4",
    title: "First Project Launch",
    bullets: [
      "Start delivering and earning revenue",
      "Define and scope your first project",
      "Dedicated team based on needs",
      "You manage clients, we handle delivery",
      "Simple invoicing and timely payments",
    ],
  },
];

export default function PartnerSteps() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % steps.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length);
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
    } else if (dragOffset < -threshold && currentIndex < steps.length - 1) {
      nextSlide();
    }
    setDragOffset(0);
  };
  return (
    <section className="bg-white py-10 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-0">
        {/* Header */}
        <div className="mb-4 md:mb-6 md:flex justify-between items-center">
          <div className="mb-4">
            <ScrollReveal>
              <span className="text-brand-bright-orange text-lg md:text-md tracking-widest mb-4 block">
                How to Get Started
              </span>
              <Heading level={2}>Getting started is simple</Heading>
            </ScrollReveal>
          </div>
          <div className="hidden md:block">
            <RollingButton
              text="Become a Partner"
              href="/become-partner"
              icon={PhoneCall}
              className="bg-transparent border !text-gray-700"
            />
          </div>
        </div>

        {/* Steps Grid */}
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {steps.map((step, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 0.1}
              className="h-full relative"
            >
              <div className="bg-gray-50  p-4 md:p-6 rounded-xl border border-gray-100 h-full flex flex-col hover:border-brand-bright-orange/30 transition-all duration-300 group">
                <div className="mb-2 md:mb-4 flex items-center justify-between md:block">
                  <div className="text-4xl md:text-5xl font-semibold text-brand-black leading-none mb-2">
                    {step.number}
                  </div>
                  <div className="text-brand-bright-orange text-sm md:text-md font-medium tracking-[0.2em]">
                    {step.week}
                  </div>
                </div>

                <h3 className="text-xl md:text-xl lg:text-xl 2xl:text-2xl font-bold text-brand-black mb-4">
                  {step.title}
                </h3>

                <div className="space-y-3 text-gray-500 text-sm md:text-base leading-relaxed">
                  {step.bullets.map((bullet, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="opacity-60 shrink-0">
                        <Triangle
                          size={10}
                          className="text-brand-bright-orange mt-2.5 fill-brand-bright-orange rotate-90"
                        />
                      </span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow between steps (desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 items-center justify-center">
                    <div className="w-6 h-6 bg-brand-bright-orange rounded-full flex items-center justify-center shadow-lg">
                      <ChevronRight size={16} className="text-white" />
                    </div>
                  </div>
                )}
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
              transform: `translateX(calc(-${currentIndex * 85}% + ${dragOffset}px))`,
              transition: isDragging ? "none" : "transform 0.3s ease-in-out",
            }}
          >
            {steps.map((step, idx) => (
              <div key={idx} className="flex-shrink-0 w-5/6 mr-4">
                <div className="bg-gray-100 p-6 border border-gray-100 h-full flex flex-col rounded-2xl hover:shadow-md transition-shadow duration-300">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-3xl font-semibold text-brand-black leading-none">
                      {step.number}
                    </div>
                    <div className="text-brand-bright-orange text-sm font-medium tracking-[0.2em]">
                      {step.week}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-brand-black mb-4">
                    {step.title}
                  </h3>

                  <div className="space-y-3 text-gray-600 text-sm leading-relaxed flex-1">
                    {step.bullets.map((bullet, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-bright-orange mt-2 shrink-0" />
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
          {currentIndex < steps.length - 1 && (
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-brand-bright-orange backdrop-blur-sm p-2 rounded-full shadow-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          )}
        </div>

        {/* Bottom Summary */}
        <ScrollReveal delay={0.6}>
          <div className="mt-6 md:mt-16 items-center gap-2 md:gap-4 hidden md:flex">
            <Triangle
              size={24}
              className="text-brand-bright-orange fill-brand-bright-orange rotate-90"
            />
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700">
              From onboarding to first revenue typically{" "}
              <span className="font-bold text-brand-bright-orange">
                within a few weeks.
              </span>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <div className="mt-6 md:mt-16 flex items-center justify-center text-center gap-2 md:gap-4 md:hidden bg-brand-black px-4 py-2 rounded-md">
            <p className="text-md md:text-2xl lg:text-3xl font-medium text-gray-50">
              From onboarding to first revenue typically
              <span className="font-bold text-brand-bright-orange">
                within a few weeks.
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
