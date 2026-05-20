"use client";

import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Heading from "./Heading";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaCircle } from "react-icons/fa";

const journeys = [
  {
    header: "YEAR 1 — BUILD MOMENTUM",
    title: "Win and deliver larger, multi-disciplinary projects",
    bullets: [
      "Increase deal size with broader service offerings",
      "Maintain full ownership of your client relationships",
      "Scale delivery without expanding your internal team",
    ],
    footerLabel: "OUTCOME",
    footerValue: "$500K → $800K annual contract value",
    highlight: false,
  },
  {
    header: "YEAR 2 — EXPAND CAPABILITIES",
    title: "Expand and strengthen market presence",
    bullets: [
      "Expand into high-growth sectors such as fintech, e-commerce etc",
      "Develop a clear specialization and positioning",
      "Increase client retention through expanded service scope",
    ],
    footerLabel: "OUTCOME",
    footerValue: "$800K → $2M annual contract value",
    highlight: false,
  },
  {
    header: "YEAR 3 — ESTABLISH LEADERSHIP",
    title: "Position yourself as a trusted specialist",
    bullets: [
      "Strengthen advisory-led client relationships",
      "Command higher-value engagements through expertise",
      "Scale your team strategically based on proven demand",
    ],
    footerLabel: "OUTCOME",
    footerValue: "$2M → $4M+ annual contract value",
    highlight: false,
  },
  {
    header: "STRATEGIC DIRECTION",
    title: "Operate lean, scale further or realize value",
    bullets: [
      "Maintain a high-margin, efficient business model",
      "Reinvest in IP or build a premium, specialized firm",
      "Explore strategic partnerships or exit opportunities",
      "Achieve strong business valuation with sustained growth",
    ],
    footerLabel: "YOUR ADVANTAGE",
    footerValue: "Optionality, built through consistent growth",
    highlight: true,
  },
];

export default function GrowthJourney() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % journeys.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + journeys.length) % journeys.length);
  };

  return (
    <section className="bg-white py-10 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-2 md:px-0">
        {/* Header */}
        <div className="mb-6 md:mb-10 px-4 md:px-0">
          <Heading level={2}>Your growth journey</Heading>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-4xl">
            A structured path to scale your business built on steady growth,
            stronger positioning and long-term optionality.
          </p>
        </div>

        {/* Desktop Journey Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {journeys.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} className="h-full">
              <div
                className={`h-full flex flex-col p-4 md:p-8 transition-all duration-300 border ${
                  item.highlight
                    ? "bg-brand-bright-orange text-white hover:shadow-md hover:scale-101 rounded-2xl"
                    : "bg-gray-100 text-brand-black border border-gray-50 hover:shadow-md hover:scale-101 rounded-2xl"
                }`}
              >
                {/* Card Header */}
                <span
                  className={`text-xs font-semibold tracking-widest mb-4 md:mb-6 block ${
                    item.highlight ? "text-white" : "text-brand-bright-orange"
                  }`}
                >
                  {item.header}
                </span>

                {/* Title */}
                <h3 className="text-xl md:text-2xl lg:text-2xl font-medium leading-tight mb-4 md:mb-8">
                  {item.title}
                </h3>

                {/* Bullets */}
                <div
                  className={`mb-4 md:mb-4 flex-grow ${
                    item.highlight ? "text-white" : "text-gray-800"
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    {item.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <FaCircle
                          className={`h-2 mt-2 shrink-0 ${
                            item.highlight
                              ? "text-white"
                              : "text-brand-bright-orange"
                          }`}
                        />
                        <span className="text-sm md:text-base leading-relaxed">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div
                  className={`h-px w-full mb-4 ${
                    item.highlight ? "bg-white" : "bg-white/80"
                  }`}
                />

                {/* Footer */}
                <div className="mt-auto">
                  <span
                    className={`text-[10px] font-bold tracking-[0.2em] block mb-2 ${
                      item.highlight ? "text-white/60" : "text-gray-400"
                    }`}
                  >
                    {item.footerLabel}
                  </span>
                  <div
                    className={`text-lg md:text-lg lg:text-2xl font-semibold ${
                      item.highlight ? "text-white" : "text-brand-black"
                    }`}
                  >
                    {item.footerValue}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile Journey Grid Carousel */}
        <div className="md:hidden relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 80}%)` }}
          >
            {journeys.map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-4/5 mr-4">
                <div
                  className={`h-full flex flex-col p-6 transition-all duration-300 rounded-2xl border ${
                    item.highlight
                      ? "bg-brand-bright-orange text-white"
                      : "bg-gray-100 text-brand-black border border-gray-50"
                  }`}
                >
                  {/* Card Header */}
                  <span
                    className={`text-xs font-bold tracking-[0.2em] mb-4 block ${
                      item.highlight
                        ? "text-white/80"
                        : "text-brand-bright-orange"
                    }`}
                  >
                    {item.header}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-semibold leading-tight mb-4">
                    {item.title}
                  </h3>

                  {/* Bullets */}
                  <div
                    className={`mb-4 flex-grow ${
                      item.highlight ? "text-white" : "text-gray-800"
                    }`}
                  >
                    <div className="flex flex-col gap-2">
                      {item.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <FaCircle
                            className={`w-2 h-2 mt-1.5 opacity-100 shrink-0 ${item.highlight ? "text-white" : "text-brand-bright-orange"}`}
                          />
                          <span className="text-sm leading-relaxed">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    className={`h-px w-full mb-4 ${
                      item.highlight ? "bg-white/20" : "bg-white/80"
                    }`}
                  />

                  {/* Footer */}
                  <div className="mt-auto">
                    <span
                      className={`text-[10px] font-bold tracking-[0.2em] block mb-2 ${
                        item.highlight ? "text-white/60" : "text-gray-400"
                      }`}
                    >
                      {item.footerLabel}
                    </span>
                    <div
                      className={`text-lg font-bold ${
                        item.highlight ? "text-white" : "text-brand-black"
                      }`}
                    >
                      {item.footerValue}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-brand-bright-orange backdrop-blur-sm p-2 rounded-full shadow-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
          )}
          {currentIndex < journeys.length - 1 && (
            <button
              onClick={nextSlide}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-brand-bright-orange backdrop-blur-sm p-2 rounded-full shadow-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
