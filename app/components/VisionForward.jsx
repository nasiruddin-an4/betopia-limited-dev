"use client";

import React, { useState, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import {
  MoveDown,
  MoveRight,
  Triangle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function VisionForward() {
  const todayList = [
    "Strong, trust-based client relationships",
    "Proven capability in advisory and sales",
    "Consistent revenue, but constrained by delivery bandwidth",
    "Missed opportunities due to limited execution capacity",
    "Hiring is time-consuming, costly and uncertain",
  ];

  const futureList = [
    "Expanded revenue potential through larger and more frequent deals",
    "Leaner operations with optimized team structure",
    "Improved profitability through efficient delivery models",
    "Recognized expertise across multiple domains",
    "Minimal dependency on hiring and bench management",
  ];

  const pillars = [
    {
      id: "PILLAR 01",
      title: "Faster time-to-market",
      desc: "Land a deal Monday. Executing by Monday of next week.",
    },
    {
      id: "PILLAR 02",
      title: "Reduced cost",
      desc: "Upto 30% margins on delivery, zero COGS, zero carrying cost.",
    },
    {
      id: "PILLAR 03",
      title: "Scalable teams",
      desc: "Take on 2- 3× more revenue without proportional head count growth.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % 2);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + 2) % 2);
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
    } else if (dragOffset < -threshold && currentIndex < 1) {
      nextSlide();
    }
    setDragOffset(0);
  };

  return (
    <section className="bg-gray-100 py-10 lg:py-20 relative overflow-hidden text-brand-black">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        {/* Header */}
        <div className="mb-4 md:mb-10">
          <ScrollReveal>
            <span className="text-brand-bright-orange text-lg md:text-md font-meduim mb-2 md:mb-4 block tracking-widest">
              Your Vision, Forward
            </span>
            <h2 className="hidden text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight  md:flex flex-col md:flex-row items-center gap-1 md:gap-10">
              <span>Where you are</span>{" "}
              <MoveRight
                className="text-brand-black hidden md:block mt-4"
                size={30}
              />{" "}
              <span className="text-brand-black md:hidden">
                <MoveDown size={30} />
              </span>
              <span>Where you can be</span>
            </h2>
            <h2 className="block md:hidden flex gap-2 font-bold text-lg">
              Where you are{" "}
              <span>
                {" "}
                <MoveRight className="text-brand-black" size={30} />
              </span>
              Where you can be
            </h2>
          </ScrollReveal>
        </div>

        {/* Comparison Grid */}
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-4 md:mb-10">
          {/* Today */}
          <ScrollReveal delay={0.2}>
            <div>
              <span className="text-brand-black text-[10px] font-bold tracking-[0.2em] uppercase mb-2 md:mb-6 block">
                TODAY
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 tracking-tight">
                Profitable, but capped by capacity
              </h3>
              <div className="space-y-2">
                {todayList.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 text-gray-600 text-base md:text-lg items-start"
                  >
                    <Triangle
                      size={10}
                      className="text-brand-bright-orange mt-2.5 fill-brand-bright-orange rotate-90"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Future */}
          <ScrollReveal delay={0.4}>
            <div>
              <span className=" text-[10px] font-bold tracking-[0.2em] uppercase mb-2 md:mb-6 block">
                12 – 24 MONTHS FROM NOW
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 tracking-tight text-brand-bright-orange">
                A stronger, scalable growth engine
              </h3>
              <div className="space-y-2">
                {futureList.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 text-gray-800 text-[14px] md:text-lg items-start"
                  >
                    <Triangle
                      size={10}
                      className="text-brand-bright-orange mt-2.5 fill-brand-bright-orange rotate-90"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Mobile Carousel */}
        <div
          ref={carouselRef}
          className={`md:hidden relative overflow-hidden select-none mb-4 md:mb-10 ${
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
              transform: `translateX(calc(-${currentIndex * 90}% + ${dragOffset}px))`,
              transition: isDragging ? "none" : "transform 0.3s ease-in-out",
            }}
          >
            {/* Today Slide */}
            <div className="flex-shrink-0 w-5/6 mr-4">
              <div className="bg-white border border-gray-200 rounded-xl p-6 min-h-[8rem] h-full flex flex-col justify-between">
                <span className="text-brand-black text-[10px] font-bold tracking-[0.2em] uppercase mb-2 md:mb-6 block">
                  TODAY
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 tracking-tight">
                  Profitable, but capped by capacity.
                </h3>
                <div className="space-y-2">
                  {todayList.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-2 text-gray-600 text-[13px] md:text-lg items-center"
                    >
                      <Triangle
                        size={8}
                        className="text-brand-bright-orange fill-brand-bright-orange rotate-90"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Future Slide */}
            <div className="flex-shrink-0 w-5/6 ml-2">
              <div className="bg-white border border-gray-200 rounded-xl p-6 min-h-[8rem] h-full flex flex-col justify-between">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2 md:mb-6 block">
                  12 – 24 MONTHS FROM NOW
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl md:whitespace-nowrap font-semibold mb-4 md:mb-6 tracking-tight text-brand-bright-orange">
                  A growth engine firing on three cylinders.
                </h3>
                <div className="space-y-2">
                  {futureList.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-2 text-gray-800 text-[13px] md:text-lg items-center"
                    >
                      <Triangle
                        size={8}
                        className="text-brand-bright-orange fill-brand-bright-orange rotate-90"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 pt-10 border-t border-brand-bright-orange/40">
          {pillars.map((pillar, idx) => (
            <ScrollReveal key={idx} delay={0.5 + idx * 0.1}>
              <div>
                <span className="text-brand-black text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                  {pillar.id}
                </span>
                <h4 className="text-brand-bright-orange text-xl md:text-2xl font-bold mb-2 tracking-tight">
                  {pillar.title}
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
